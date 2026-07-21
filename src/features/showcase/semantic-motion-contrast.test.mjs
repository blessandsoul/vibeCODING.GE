import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (name) => readFileSync(new URL(`./${name}`, import.meta.url), 'utf8');

test('semantic dark-panel text moves without fading below readable contrast', () => {
  const rls = read('ScanRls.tsx');
  const repair = read('ScanFixRescan.tsx');
  const story = read('ShowcaseStory.tsx');

  assert.doesNotMatch(rls, /opacity:\s*\[0\.35,\s*1,\s*0\.35\]/u);
  assert.doesNotMatch(rls, /initial=\{reduced \? false : \{ opacity: 0/u);
  assert.doesNotMatch(repair, /initial=\{reduced \? false : \{ opacity: 0/u);
  assert.match(rls, /animate=\{\{ x: visible \? 0 : -10 \}\}/u);
  assert.match(repair, /<StableStoryText/u);
  assert.doesNotMatch(repair, /<AnimatePresence/u);
  assert.doesNotMatch(story, /transition-opacity/u);
});

test('result cards and values use transform-only entrances', () => {
  for (const name of ['ScanTenWays.tsx', 'ScanPaywall.tsx', 'ScanScorecard.tsx']) {
    const source = read(name);
    assert.doesNotMatch(
      source,
      /initial=\{reduced \? false : \{[^}]*opacity:\s*0/u,
      `${name} fades semantic content below its measured color contrast`,
    );
  }
});
