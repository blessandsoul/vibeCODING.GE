import { NextResponse } from 'next/server';

import { checkRateLimit } from '@/lib/rate-limit';
import { analyzeClientBundle, buildScanReport, type Finding } from '@/lib/scan-analysis';
import { clientIpForRateLimit } from '@/lib/scan-client-ip';
import {
  createSafeFetchSession,
  SafeFetchError,
  type SafeFetchResult,
} from '@/lib/scan-safe-fetch';

/* =========================================================================
   POST /api/scan

   This endpoint reads only public browser assets and stores nothing. Every outbound request —
   the page, its first-party scripts, HEAD, and /.env — goes through one bounded session. The
   session resolves and validates every hop, pins the validated address, follows redirects
   manually, and shares request/time/body budgets across the whole scan.
   ========================================================================= */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX_BYTES = 2_000_000;
const MAX_SCRIPTS = 8;

function scanError(error: unknown) {
  if (error instanceof SafeFetchError) {
    if (error.code === 'private') {
      return NextResponse.json({ error: 'private' }, { status: 400 });
    }
    if (error.code === 'url') {
      return NextResponse.json({ error: 'url' }, { status: 400 });
    }
  }
  return NextResponse.json({ error: 'fetch' }, { status: 502 });
}

export async function POST(request: Request) {
  const ip = clientIpForRateLimit(request.headers, process.env);

  // Six scans a minute per trusted client address. If no trusted proxy identity exists, all
  // anonymous traffic shares one conservative bucket instead of accepting a spoofable header.
  const rl = checkRateLimit(`scan:${ip}`, 6, 60_000);
  if (!rl.success) {
    return NextResponse.json({ error: 'rate' }, { status: 429 });
  }

  let raw: string;
  try {
    const body = (await request.json()) as { url?: unknown };
    raw = typeof body.url === 'string' ? body.url.trim() : '';
  } catch {
    return NextResponse.json({ error: 'url' }, { status: 400 });
  }

  let target: URL;
  try {
    target = new URL(/^https?:\/\//iu.test(raw) ? raw : `https://${raw}`);
  } catch {
    return NextResponse.json({ error: 'url' }, { status: 400 });
  }
  if (!['http:', 'https:'].includes(target.protocol)) {
    return NextResponse.json({ error: 'url' }, { status: 400 });
  }

  const session = createSafeFetchSession();
  let page: SafeFetchResult;
  try {
    page = await session.fetch(target, { maxBytes: MAX_BYTES });
  } catch (error) {
    return scanError(error);
  }
  if (!page.ok || !page.body) {
    return NextResponse.json({ error: 'fetch' }, { status: 502 });
  }

  const documentUrl = new URL(page.url);
  const scriptUrls = Array.from(page.body.matchAll(/<script[^>]+src=["']([^"']+)["']/giu))
    .map((match) => match[1])
    .map((source) => {
      try {
        return new URL(source, documentUrl);
      } catch {
        return null;
      }
    })
    .filter((url): url is URL => url !== null && url.hostname === documentUrl.hostname)
    .slice(0, MAX_SCRIPTS);

  // Sequential reads keep the shared request/body budget deterministic and prevent a fan-out
  // burst. A failed or unsafe script does not invalidate findings already visible in the HTML.
  const bundles: string[] = [];
  for (const scriptUrl of scriptUrls) {
    try {
      const bundle = await session.fetch(scriptUrl, { maxBytes: MAX_BYTES });
      if (bundle.ok && bundle.body) bundles.push(bundle.body);
    } catch {
      // The bounded session already stopped the request. Continue with the public data obtained.
    }
  }

  const findings: Finding[] = analyzeClientBundle([page.body, ...bundles].join('\n'));

  // Header and environment-file checks use the same resolver, redirect validation, timeouts,
  // byte cap, and total-request budget as the page and scripts.
  const head = await session.fetch(target, { method: 'HEAD', maxBytes: 0 }).catch(() => null);
  if (!head?.headers.get('content-security-policy')) {
    findings.push({
      id: 'no-csp',
      severity: 'minor',
      title: 'No Content-Security-Policy header',
      detail:
        'This header limits what an injected script can load. Add a policy that permits only the sources the application actually needs.',
    });
  }

  const environment = await session
    .fetch(new URL('/.env', target), { maxBytes: 512 })
    .catch(() => null);
  if (environment?.ok && /(?:^|\n)[A-Z][A-Z0-9_]*\s*=/u.test(environment.body)) {
    findings.push({
      id: 'env-served',
      severity: 'critical',
      title: 'Your .env file is being served to the public internet',
      detail:
        'Treat every value in this file as compromised. Rotate the secrets and remove the file from the public web root.',
    });
  }

  // No URL, response body, or finding is persisted or logged.
  return NextResponse.json(buildScanReport(findings));
}
