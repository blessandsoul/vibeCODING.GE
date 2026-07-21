import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  SafeFetchError,
  createSafeFetchSession,
} from '../../../lib/scan-safe-fetch.ts';
import {
  analyzeClientBundle,
  buildScanReport,
  redactSecret,
} from '../../../lib/scan-analysis.ts';
import { clientIpForRateLimit } from '../../../lib/scan-client-ip.ts';

const PUBLIC_ADDRESS = [{ address: '93.184.216.34', family: 4 }];

function bodyResponse({ status = 200, headers = {}, chunks = [], onCancel = () => {} } = {}) {
  return {
    status,
    headers,
    body: (async function* stream() {
      for (const chunk of chunks) yield Buffer.from(chunk);
    })(),
    cancel: onCancel,
  };
}

function makeSession(overrides = {}) {
  return createSafeFetchSession({
    resolveHost: async () => PUBLIC_ADDRESS,
    transport: async () => bodyResponse({ chunks: ['ok'] }),
    limits: {
      requestTimeoutMs: 50,
      totalTimeoutMs: 500,
      maxRedirects: 2,
      maxTotalRequests: 8,
      maxTotalBytes: 128,
    },
    ...overrides,
  });
}

async function expectCode(promise, code) {
  await assert.rejects(promise, (error) => error instanceof SafeFetchError && error.code === code);
}

test('direct private IPv6 and IPv4-mapped IPv6 targets are rejected before transport', async () => {
  let calls = 0;
  const session = makeSession({
    transport: async () => {
      calls += 1;
      return bodyResponse();
    },
  });

  await expectCode(session.fetch('http://[::1]/'), 'private');
  await expectCode(session.fetch('http://[::ffff:127.0.0.1]/'), 'private');
  assert.equal(calls, 0);
});

test('a hostname with any private DNS answer is rejected and never connected', async () => {
  let calls = 0;
  const session = makeSession({
    resolveHost: async () => [
      { address: '93.184.216.34', family: 4 },
      { address: '10.0.0.7', family: 4 },
    ],
    transport: async () => {
      calls += 1;
      return bodyResponse();
    },
  });

  await expectCode(session.fetch('https://public.example/'), 'private');
  assert.equal(calls, 0);
});

test('a redirect is re-resolved and cannot cross into a private host', async () => {
  const calls = [];
  const session = makeSession({
    resolveHost: async (hostname) =>
      hostname === 'private.example'
        ? [{ address: '192.168.1.20', family: 4 }]
        : PUBLIC_ADDRESS,
    transport: async ({ url, address }) => {
      calls.push({ url: url.toString(), address });
      return bodyResponse({ status: 302, headers: { location: 'http://private.example/admin' } });
    },
  });

  await expectCode(session.fetch('https://public.example/'), 'private');
  assert.deepEqual(calls, [
    { url: 'https://public.example/', address: '93.184.216.34' },
  ]);
});

test('the request timeout aborts a transport that never answers', async () => {
  const session = makeSession({
    transport: ({ signal }) =>
      new Promise((resolve, reject) => {
        signal.addEventListener('abort', () => reject(signal.reason), { once: true });
        void resolve;
      }),
    limits: {
      requestTimeoutMs: 20,
      totalTimeoutMs: 200,
      maxRedirects: 1,
      maxTotalRequests: 2,
      maxTotalBytes: 32,
    },
  });

  await expectCode(session.fetch('https://public.example/'), 'timeout');
});

test('DNS resolution is covered by the same request timeout', async () => {
  const session = makeSession({
    resolveHost: () => new Promise(() => {}),
    limits: {
      requestTimeoutMs: 20,
      totalTimeoutMs: 200,
      maxRedirects: 1,
      maxTotalRequests: 2,
      maxTotalBytes: 32,
    },
  });

  await expectCode(session.fetch('https://public.example/'), 'timeout');
});

test('response bodies and aggregate scan bytes are capped before buffering', async () => {
  let cancelled = false;
  const session = makeSession({
    transport: async () =>
      bodyResponse({
        chunks: ['abcd', 'efgh', 'ijkl'],
        onCancel: () => {
          cancelled = true;
        },
      }),
    limits: {
      requestTimeoutMs: 50,
      totalTimeoutMs: 500,
      maxRedirects: 1,
      maxTotalRequests: 2,
      maxTotalBytes: 6,
    },
  });

  const result = await session.fetch('https://public.example/', { maxBytes: 5 });
  assert.equal(result.body, 'abcde');
  assert.equal(Buffer.byteLength(result.body), 5);
  assert.equal(cancelled, true);
});

test('redirects consume the shared total-request budget', async () => {
  let calls = 0;
  const session = makeSession({
    transport: async () => {
      calls += 1;
      return bodyResponse({ status: 302, headers: { location: '/again' } });
    },
    limits: {
      requestTimeoutMs: 50,
      totalTimeoutMs: 500,
      maxRedirects: 4,
      maxTotalRequests: 1,
      maxTotalBytes: 32,
    },
  });

  await expectCode(session.fetch('https://public.example/'), 'budget');
  assert.equal(calls, 1);
});

test('generic x-forwarded-for cannot choose the rate-limit bucket', () => {
  const spoofed = new Headers({ 'x-forwarded-for': '8.8.8.8' });
  assert.equal(clientIpForRateLimit(spoofed, {}), 'unknown');

  const vercel = new Headers({ 'x-vercel-forwarded-for': '8.8.8.8' });
  assert.equal(clientIpForRateLimit(vercel, { VERCEL: '1' }), '8.8.8.8');

  const configuredProxy = new Headers({ 'x-real-ip': '1.1.1.1' });
  assert.equal(
    clientIpForRateLimit(configuredProxy, { TRUSTED_PROXY_IP_HEADER: 'x-real-ip' }),
    '1.1.1.1',
  );
  assert.equal(
    clientIpForRateLimit(spoofed, { TRUSTED_PROXY_IP_HEADER: 'x-forwarded-for' }),
    'unknown',
  );
});

function base64UrlJson(value) {
  return Buffer.from(JSON.stringify(value)).toString('base64url');
}

function supabaseToken(role, marker) {
  return `${base64UrlJson({ alg: 'HS256', typ: 'JWT' })}.${base64UrlJson({ role, marker })}.signature-${marker}`;
}

test('a public Supabase anon key is omitted from scored findings', () => {
  const anon = supabaseToken('anon', 'anonymous');
  const findings = analyzeClientBundle(`window.supabaseKey = '${anon}'`);
  const report = buildScanReport(findings);

  assert.equal(findings.some((finding) => finding.id === 'supabase-anon'), false);
  assert.equal(report.score, 100);
  assert.deepEqual(report.counts, { critical: 0, major: 0, minor: 0 });
  assert.doesNotMatch(JSON.stringify(report), /(?:1[,. ]?430|85%)/u);
});

test('service-role evidence is redacted from the actual service token, not another JWT', () => {
  const anon = supabaseToken('anon', 'anon-1111');
  const service = supabaseToken('service_role', 'service-2222');
  const findings = analyzeClientBundle(`${anon}\n${service}`);
  const serviceFinding = findings.find((finding) => finding.id === 'supabase-service');

  assert.ok(serviceFinding);
  assert.equal(serviceFinding.evidence, redactSecret(service));
  assert.notEqual(serviceFinding.evidence, redactSecret(anon));
});

test('the scan route uses the bounded session for HTML, scripts, HEAD, and .env', () => {
  const source = readFileSync(new URL('./route.ts', import.meta.url), 'utf8');
  assert.equal(source.match(/(?<!\.)\bfetch\s*\(/gu)?.length ?? 0, 0);
  assert.match(source, /session\.fetch\(target/u);
  assert.match(source, /session\.fetch\(scriptUrl/u);
  assert.match(source, /session\.fetch\(target,\s*\{\s*method:\s*'HEAD'/u);
  assert.match(source, /session\s*\.\s*fetch\(new URL\('\/\.env'/u);
});
