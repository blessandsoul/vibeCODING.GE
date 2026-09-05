import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const ts = require('typescript');
function load(path, imports = {}) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8');
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const exports = {};
  new Function('require', 'exports', code)((id) => imports[id] ?? require(id), exports);
  return exports;
}
const { verifyContactChallenge } = load('../src/lib/contact-challenge.ts', { '@/config/contact-challenge': { CONTACT_CHALLENGE_HOSTS: ['vibecoding.ge', 'www.vibecoding.ge'] } });

test('contact challenge rejects bypasses and only delivers a verified request', async () => {
  const originalFetch = globalThis.fetch;
  const originalSecret = process.env.TURNSTILE_SECRET_KEY;
  let calls = 0;
  let result = { success: true, action: 'contact', hostname: 'vibecoding.ge' };
  globalThis.fetch = async () => { calls++; return Response.json(result); };
  process.env.TURNSTILE_SECRET_KEY = 'unit-test-secret';
  try {
    for (const token of [undefined, null, '', 123, 'x'.repeat(2049)])
      assert.equal(await verifyContactChallenge(token), false);
    assert.equal(calls, 0);
    assert.equal(await verifyContactChallenge('valid-token'), true);
    for (const invalid of [
      { success: false, 'error-codes': ['timeout-or-duplicate'] },
      { success: true, action: 'login', hostname: 'vibecoding.ge' },
      { success: true, action: 'contact', hostname: 'attacker.example' },
      { success: true },
    ]) { result = invalid; assert.equal(await verifyContactChallenge('token'), false); }
    globalThis.fetch = async () => { throw new Error('timeout'); };
    assert.equal(await verifyContactChallenge('token'), false);
    globalThis.fetch = async () => new Response('', { status: 503 });
    assert.equal(await verifyContactChallenge('token'), false);
    delete process.env.TURNSTILE_SECRET_KEY;
    assert.equal(await verifyContactChallenge('token'), false);
    process.env.TURNSTILE_SECRET_KEY = 'unit-test-secret';
    const { contactFormSchema } = load('../src/features/contact/schemas/contact.schema.ts');
    let sent = 0;
    const { POST } = load('../src/app/api/contact/route.ts', {
      'next/server': { NextResponse: Response },
      '@/features/contact/schemas/contact.schema': { contactFormSchema },
      '@/lib/contact-challenge': { verifyContactChallenge },
      '@/lib/rate-limit': { checkRateLimit: () => ({ success: true }) },
      '@/lib/telegram': { sendTelegramNotification: async () => { sent++; } },
    });
    const request = (body) => new Request('https://vibecoding.ge/api/contact', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
    });
    assert.equal((await POST(request({ phone: '+995555000000' }))).status, 403);
    assert.equal(sent, 0);
    globalThis.fetch = async () => Response.json({ success: false });
    assert.equal((await POST(request({ phone: '+995555000000', turnstileToken: 'fake' }))).status, 403);
    assert.equal(sent, 0);
    globalThis.fetch = async () => Response.json({ success: true, action: 'contact', hostname: 'vibecoding.ge' });
    assert.equal((await POST(request({ phone: '+995555000000', turnstileToken: 'verified' }))).status, 200);
    assert.equal(sent, 1);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalSecret === undefined) delete process.env.TURNSTILE_SECRET_KEY;
    else process.env.TURNSTILE_SECRET_KEY = originalSecret;
  }
});
