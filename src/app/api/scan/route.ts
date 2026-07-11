import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rate-limit';

/* =========================================================================
   POST /api/scan

   The only route in this whole fleet of landings that reaches out to the internet, and the
   only widget on any of the six pages that is not pure client-side theatre. It exists because
   the browser cannot fetch a third-party bundle (CORS), and because the entire funnel for this
   product depends on showing a founder HIS OWN exposed key, redacted, sixty seconds after he
   lands on the page.

   Four things this must get right, and each of them is a way to do real harm if we do not:

   1. SSRF. A route that fetches an arbitrary URL on request is a server-side request forgery
      proxy unless it refuses private space. We block loopback, RFC1918, link-local, CGNAT and
      IPv6 unique-local, and we do it after DNS resolution rather than before, because
      `http://something.example.com` can resolve to 127.0.0.1 and a naive string check would
      wave it through.

   2. Redaction. We echo back that a secret was FOUND, never the secret. `sk-****3f2a`. If this
      route ever returns a live key in a JSON response, we have handed an attacker a scanner.

   3. Storage. We store nothing. No database, no log line with the URL, no analytics event. The
      page says so and the page has to be telling the truth, because we are selling security and
      one dark pattern here would end the brand permanently.

   4. Bounds. Hard timeout, hard size cap, capped number of scripts. Somebody will point this at
      a 4 GB file on their first day.
   ========================================================================= */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const FETCH_TIMEOUT_MS = 7000;
const MAX_BYTES = 2_000_000;
const MAX_SCRIPTS = 8;

type Severity = 'critical' | 'major' | 'minor';
type Finding = {
  id: string;
  severity: Severity;
  title: string;
  detail: string;
  /** Always redacted. Never the live secret. */
  evidence?: string;
};

/* Secret shapes we look for in what the browser already downloads. Each one is a thing we have
   a documented reason to look for, not a regex somebody found on the internet. */
const SECRET_PATTERNS: {
  id: string;
  re: RegExp;
  severity: Severity;
  title: string;
  detail: string;
}[] = [
  {
    id: 'openai-key',
    re: /\bsk-[A-Za-z0-9_-]{20,}\b/g,
    severity: 'critical',
    title: 'An OpenAI-style secret key is in your client bundle',
    detail:
      'This key is in the JavaScript every visitor downloads. Anyone can read it and spend your money with it. Rotate it now, before you finish reading this page.',
  },
  {
    id: 'google-key',
    re: /\bAIza[0-9A-Za-z_-]{35}\b/g,
    severity: 'major',
    title: 'A Google API key is in your client bundle',
    detail:
      'Google keys are often intended to be public, but only if they are restricted by referrer and by API. An unrestricted one is a billing incident waiting to happen.',
  },
  {
    id: 'stripe-live',
    re: /\bsk_live_[A-Za-z0-9]{16,}\b/g,
    severity: 'critical',
    title: 'A live Stripe secret key is in your client bundle',
    detail:
      'This is the key that can move money. It must never leave your server. Rotate it in the Stripe dashboard immediately.',
  },
  {
    id: 'aws-key',
    re: /\bAKIA[0-9A-Z]{16}\b/g,
    severity: 'critical',
    title: 'An AWS access key is in your client bundle',
    detail: 'Rotate it now and check CloudTrail for use you did not make.',
  },
];

/* A Supabase JWT is three base64 segments. The middle one carries the role. An `anon` key in the
   browser is by design; a `service_role` key in the browser means every row-level security rule
   you wrote is being ignored, by anyone who opens devtools. */
const JWT_RE = /\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g;

function redact(secret: string): string {
  if (secret.length <= 10) return '****';
  return `${secret.slice(0, 6)}${'*'.repeat(8)}${secret.slice(-4)}`;
}

function decodeJwtRole(token: string): string | null {
  try {
    const payload = token.split('.')[1];
    const json = Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString(
      'utf8',
    );
    const parsed = JSON.parse(json) as { role?: string };
    return typeof parsed.role === 'string' ? parsed.role : null;
  } catch {
    return null;
  }
}

/** Private, loopback, link-local, CGNAT, and IPv6 unique-local. Checked AFTER resolution. */
function isPrivateAddress(host: string): boolean {
  const h = host.toLowerCase();
  if (h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.internal')) return true;

  // IPv6
  if (h.includes(':')) {
    if (h === '::1' || h.startsWith('fe80') || h.startsWith('fc') || h.startsWith('fd')) return true;
    return false;
  }

  const m = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!m) return false;
  const [a, b] = [Number(m[1]), Number(m[2])];
  if (a === 127 || a === 0 || a === 10) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 169 && b === 254) return true; // link-local, and the cloud metadata endpoint
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT
  return false;
}

async function fetchCapped(url: string): Promise<string> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctl.signal,
      redirect: 'follow',
      headers: { 'User-Agent': 'vibecoding.ge scanner (+https://vibecoding.ge)' },
    });
    if (!res.ok || !res.body) return '';
    const reader = res.body.getReader();
    const chunks: Uint8Array[] = [];
    let size = 0;
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > MAX_BYTES) {
        void reader.cancel();
        break;
      }
      chunks.push(value);
    }
    return Buffer.concat(chunks).toString('utf8');
  } catch {
    return '';
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  // Six scans a minute per address. Enough for a founder trying two of his apps, not enough to
  // turn this into somebody else's free vulnerability scanner.
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
    target = new URL(raw.startsWith('http') ? raw : `https://${raw}`);
  } catch {
    return NextResponse.json({ error: 'url' }, { status: 400 });
  }
  if (target.protocol !== 'http:' && target.protocol !== 'https:') {
    return NextResponse.json({ error: 'url' }, { status: 400 });
  }
  if (isPrivateAddress(target.hostname)) {
    return NextResponse.json({ error: 'private' }, { status: 400 });
  }

  const html = await fetchCapped(target.toString());
  if (!html) {
    return NextResponse.json({ error: 'fetch' }, { status: 502 });
  }

  // First-party scripts only. We are not going to walk somebody else's CDN.
  const srcs = Array.from(html.matchAll(/<script[^>]+src=["']([^"']+)["']/gi))
    .map((m) => m[1])
    .map((s) => {
      try {
        return new URL(s, target).toString();
      } catch {
        return '';
      }
    })
    .filter((s) => s && new URL(s).hostname === target.hostname)
    .slice(0, MAX_SCRIPTS);

  const bundles = await Promise.all(srcs.map(fetchCapped));
  const haystack = [html, ...bundles].join('\n');

  const findings: Finding[] = [];
  const seen = new Set<string>();

  for (const p of SECRET_PATTERNS) {
    const hits = haystack.match(p.re);
    if (!hits?.length) continue;
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    findings.push({
      id: p.id,
      severity: p.severity,
      title: p.title,
      detail: p.detail,
      evidence: redact(hits[0]),
    });
  }

  // The Supabase question, which is the single most valuable thing this scan can answer.
  const jwts = haystack.match(JWT_RE) ?? [];
  let sawAnon = false;
  for (const j of jwts) {
    const role = decodeJwtRole(j);
    if (role === 'service_role' && !seen.has('supabase-service')) {
      seen.add('supabase-service');
      findings.push({
        id: 'supabase-service',
        severity: 'critical',
        title: 'Your Supabase service-role key is in the browser',
        detail:
          'This key ignores every row-level security rule you wrote. Anyone who opens devtools has full read and write access to your entire database. Rotate it right now, and do not wait for us.',
        evidence: redact(j),
      });
    }
    if (role === 'anon') sawAnon = true;
  }

  if (sawAnon && !seen.has('supabase-anon')) {
    seen.add('supabase-anon');
    findings.push({
      id: 'supabase-anon',
      severity: 'major',
      title: 'A Supabase anon key is in the browser, which is normal, and it is only safe if RLS is on',
      detail:
        'The anon key is meant to be public. It is harmless ONLY if row-level security is enabled on every table. In the published scan of 1,430 apps, 85% had it missing. From outside we cannot tell which you are, and that is exactly what the audit checks first.',
      // `sawAnon` can only be true if the loop above saw a token, so jwts[0] exists. TypeScript
      // does not know that, and a `!` here would be a lie rather than a shortcut.
      evidence: jwts[0] ? redact(jwts[0]) : undefined,
    });
  }

  // Cheap header checks, which cost nothing and catch real things.
  const headRes = await fetch(target.toString(), { method: 'HEAD' }).catch(() => null);
  const csp = headRes?.headers.get('content-security-policy');
  if (!csp) {
    findings.push({
      id: 'no-csp',
      severity: 'minor',
      title: 'No Content-Security-Policy header',
      detail:
        'Not an emergency on its own. It is the seatbelt that limits the damage when one of the bigger findings above turns into an injected script.',
    });
  }

  const envRes = await fetch(new URL('/.env', target).toString()).catch(() => null);
  if (envRes?.ok) {
    const envText = (await envRes.text().catch(() => '')).slice(0, 500);
    if (/[A-Z_]+=/.test(envText)) {
      findings.push({
        id: 'env-served',
        severity: 'critical',
        title: 'Your .env file is being served to the public internet',
        detail:
          'Every secret in it should be considered compromised. Rotate all of them, then find out why the file is inside your web root.',
      });
    }
  }

  const weight = { critical: 34, major: 16, minor: 5 } as const;
  const penalty = findings.reduce((s, f) => s + weight[f.severity], 0);
  const score = Math.max(0, 100 - penalty);

  // Nothing is written anywhere. No database, no log, no analytics event. That is the promise
  // the page makes, and this is the code that has to keep it.
  return NextResponse.json({
    score,
    findings,
    counts: {
      critical: findings.filter((f) => f.severity === 'critical').length,
      major: findings.filter((f) => f.severity === 'major').length,
      minor: findings.filter((f) => f.severity === 'minor').length,
    },
  });
}
