import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const LOCALES = ['en', 'ka', 'ru'];

const REQUIRED_KEYS = {
  rls: [
    'again',
    'consoleEnabling',
    'consoleIdle',
    'consoleReading',
    'consoleRows',
    'consoleZero',
    'emptyRow',
    'eyebrow',
    'heading',
    'hint',
    'honest',
    'idleRow',
    'keyNote',
    'mock',
    'off',
    'on',
    'punch',
    'read',
    'reading',
    'replay',
    'request',
    'rlsLabel',
    'source',
    'sourceLabel',
    'stat',
    'subtitle',
    'tableAria',
    'verdictLocked',
    'verdictOpen',
    'waiting',
  ],
  fix: [
    'browserBundle',
    'cleanBadge',
    'cleanText',
    'eyebrow',
    'exposedBadge',
    'exposedText',
    'fictional',
    'heading',
    'keyLabel',
    'outcome',
    'redacted',
    'replay',
    'rescanningText',
    'revoked',
    'revokingText',
    'scanningText',
    'serverEnvironment',
    'serverOnly',
    'serverSideText',
    'stageClean',
    'stageExposed',
    'stageRescanning',
    'stageRevoking',
    'stageScanning',
    'stageServerSide',
    'subtitle',
  ],
};

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

test('showcase locale namespaces have exact key parity', () => {
  const messages = Object.fromEntries(LOCALES.map((locale) => [locale, loadLocale(locale)]));

  for (const [namespace, requiredKeys] of Object.entries(REQUIRED_KEYS)) {
    for (const locale of LOCALES) {
      const actual = leafPaths(messages[locale].product?.[namespace]).sort();
      assert.deepEqual(actual, [...requiredKeys].sort(), `${locale} product.${namespace}`);
    }
  }
});
test('Georgian showcase copy contains no Cyrillic characters', () => {
  const ka = loadLocale('ka');
  const copy = JSON.stringify({ rls: ka.product?.rls, fix: ka.product?.fix });
  assert.doesNotMatch(copy, /[\u0400-\u04ff]/u);
});
