import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const LOCALES = ['en', 'ka', 'ru'];
const PUBLIC_NAMESPACES = [
  'seo',
  'hero',
  'work',
  'faq',
  'cta',
  'scan',
  'paywall',
  'ten',
  'rls',
  'fix',
  'proof',
];

function loadLocale(locale) {
  return JSON.parse(
    readFileSync(new URL(`./${locale}.json`, import.meta.url), 'utf8'),
  );
}

function leafPaths(value, prefix = '') {
  return Object.entries(value ?? {}).flatMap(([key, child]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return child && typeof child === 'object' ? leafPaths(child, path) : [path];
  });
}

function targetCopy(messages) {
  return Object.fromEntries(
    PUBLIC_NAMESPACES.map((namespace) => [namespace, messages.product?.[namespace]]),
  );
}

test('all rewritten public namespaces have exact KA, EN, and RU key parity', () => {
  const messages = Object.fromEntries(LOCALES.map((locale) => [locale, loadLocale(locale)]));

  for (const namespace of PUBLIC_NAMESPACES) {
    const expected = leafPaths(messages.en.product?.[namespace]).sort();
    assert.ok(expected.length > 0, `en product.${namespace} must not be empty`);

    for (const locale of LOCALES) {
      const actual = leafPaths(messages[locale].product?.[namespace]).sort();
      assert.deepEqual(actual, expected, `${locale} product.${namespace}`);
    }
  }
});

test('Georgian public landing copy contains no Cyrillic characters', () => {
  const copy = JSON.stringify(targetCopy(loadLocale('ka')));
  assert.doesNotMatch(copy, /[\u0400-\u04ff]/u);
});

test('Georgian declines the Latin aiNOW brand when it is the sentence subject', () => {
  const copy = JSON.stringify(targetCopy(loadLocale('ka')));
  assert.match(copy, /aiNOW-ი/u);
  assert.doesNotMatch(copy, /aiNOW (?:აფიქსირებს|განსაზღვრავს|ადგენს)/u);
});

test('aiNOW is the public actor and first-person company promises are absent', () => {
  const en = JSON.stringify(targetCopy(loadLocale('en')));
  const ka = JSON.stringify(targetCopy(loadLocale('ka')));
  const ru = JSON.stringify(targetCopy(loadLocale('ru')));

  assert.match(en, /aiNOW/u);
  assert.match(ka, /aiNOW/u);
  assert.match(ru, /aiNOW/u);
  assert.doesNotMatch(en, /\b(?:we|our|ours|us)\b/iu);
  assert.doesNotMatch(ka, /(?<!\p{L})(?:ჩვენ|ჩვენი|ჩვენს|ჩვენთან|ჩვენთვის)(?!\p{L})/u);
  assert.doesNotMatch(ru, /\b(?:мы|наш|наша|наше|наши|нам|нами|нас)\b/iu);
});

test('public copy contains no unsupported percentages, named incidents, personal signer, or ecosystem slogan', () => {
  for (const locale of LOCALES) {
    const copy = JSON.stringify(targetCopy(loadLocale(locale)));
    assert.doesNotMatch(
      copy,
      /(?:85%|62%|45%|34%|27%|86%|1[,. ]?430|5[,. ]?711|72[,. ]?000|1[,. ]?206|VibeEval|Enrichlead|SaaStr|Andrew|together aiNOW|\bAA\b)/iu,
      locale,
    );
  }
});

test('primary business copy avoids internal implementation language', () => {
  const banned = /\b(?:eval|trace|tool call|prompt injection|guardrail|repository|telemetry|orchestration)\b/iu;

  for (const locale of LOCALES) {
    const messages = loadLocale(locale);
    const primary = JSON.stringify({
      seo: messages.product.seo,
      hero: messages.product.hero,
      work: messages.product.work,
      faq: messages.product.faq,
      cta: messages.product.cta,
    });
    assert.doesNotMatch(primary, banned, locale);
  }
});

test('FAQ answers are short enough to scan', () => {
  for (const locale of LOCALES) {
    const faq = loadLocale(locale).product.faq;
    for (let index = 1; index <= 14; index += 1) {
      assert.ok(
        faq[`a${index}`].length <= 340,
        `${locale} faq.a${index} is ${faq[`a${index}`].length} characters`,
      );
    }
  }
});

test('hero typewriter samples remain compact at a 342 pixel viewport', () => {
  const maxWordLength = { en: 12, ka: 10, ru: 12 };
  for (const locale of LOCALES) {
    const words = loadLocale(locale).product.hero.typewriterWords.split(',');
    assert.ok(words.length >= 4, `${locale} needs a useful rotating set`);
    assert.ok(
      words.every((word) => word.trim().length <= maxWordLength[locale]),
      `${locale} has an oversized hero word`,
    );
  }
});

test('hero primary actions stay compact enough for the narrow hero grid', () => {
  for (const locale of LOCALES) {
    const label = loadLocale(locale).product.hero.ctaResults;
    assert.ok(label.length <= 20, `${locale} hero CTA is ${label.length} characters`);
  }
});

test('mobile navigation and section headlines stay within the 342 pixel content width', () => {
  const longestWord = (value) =>
    Math.max(...value.split(/[^\p{L}\p{N}]+/u).filter(Boolean).map((word) => word.length));

  for (const locale of LOCALES) {
    const messages = loadLocale(locale);
    assert.ok(messages.landingNav.cta.length <= 10, `${locale} navigation CTA is too long`);
    assert.ok(messages.product.work.headingAccent.length <= 40, `${locale} work heading is too long`);
    assert.ok(
      longestWord(messages.product.work.headingAccent) <= 11,
      `${locale} work heading contains an unbreakable word that is too long`,
    );
    assert.ok(messages.product.cta.heading.length <= 28, `${locale} closing heading is too long`);
    assert.ok(
      longestWord(messages.product.cta.heading) <= 10,
      `${locale} closing heading contains an unbreakable word that is too long`,
    );
  }
});
