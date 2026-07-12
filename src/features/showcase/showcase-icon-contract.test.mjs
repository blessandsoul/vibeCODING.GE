import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const COMPONENTS = [
  'ScanScorecard.tsx',
  'ScanRls.tsx',
  'ScanPaywall.tsx',
  'ScanFixRescan.tsx',
  'ScanTenWays.tsx',
  'HeroProof.tsx',
];

const RAW_STATUS_GLYPH = /[✓✔…⚠❗]/u;

test('the five below-hero demonstrations remain wired in their approved order', () => {
  const source = readFileSync(
    new URL('../home/components/LandingShowcase.tsx', import.meta.url),
    'utf8',
  );
  const expected = [
    '<ScanScorecard />',
    '<ScanRls />',
    '<ScanPaywall />',
    '<ScanFixRescan />',
    '<ScanTenWays />',
  ];

  let cursor = -1;
  for (const marker of expected) {
    const next = source.indexOf(marker);
    assert.ok(next > cursor, `${marker} must remain after the previous demonstration`);
    cursor = next;
  }
});

test('the real URL scorecard stays empty and submits only from its visitor-controlled form', () => {
  const source = readFileSync(new URL('ScanScorecard.tsx', import.meta.url), 'utf8');

  assert.match(source, /const \[url, setUrl\] = useState\(''\);/u);
  assert.match(source, /<form[\s\S]*?onSubmit=\{/u);
  assert.match(source, /body: JSON\.stringify\(\{ url: url\.trim\(\) \}\)/u);
  assert.doesNotMatch(source, /useEffect\([\s\S]*?\bscan\(/u);
  assert.doesNotMatch(source, /setUrl\((?!e\.target\.value)/u);
});

test('showcase status meaning uses bundled Solar Ico components, not glyphs or lucide', () => {
  for (const component of COMPONENTS) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.match(source, /import \{ Ico \} from '@\/components\/common\/Ico';/u, component);
    assert.match(source, /<Ico/u, component);
    assert.doesNotMatch(source, /from ['"]lucide-react['"]/u, component);
  }

  const fix = readFileSync(new URL('ScanFixRescan.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(fix, RAW_STATUS_GLYPH);
  assert.doesNotMatch(fix, />\s*!\s*</u);
  assert.doesNotMatch(fix, /['"]!\s/u);
});

test('security demonstrations use semantic database, lock, key, server, scan, warning, and clean icons', () => {
  const source = COMPONENTS.map((component) =>
    readFileSync(new URL(component, import.meta.url), 'utf8'),
  ).join('\n');

  for (const icon of [
    'solar:database-bold-duotone',
    'solar:lock-keyhole-bold-duotone',
    'solar:key-bold-duotone',
    'solar:server-square-bold-duotone',
    'solar:scanner-bold-duotone',
    'solar:shield-warning-bold-duotone',
    'solar:shield-check-bold-duotone',
  ]) {
    assert.match(source, new RegExp(icon), `${icon} must identify its security state`);
  }
});

test('professional showcase geometry keeps wide visuals and accessible controls', () => {
  for (const component of COMPONENTS) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /\bmd:grid-cols-[^'"\s]*/u, `${component} must stay single-column through tablet`);
    assert.doesNotMatch(source, /\bmin-w-\[(?:[0-9]{3,}|[3-9][0-9])px\]/u, `${component} has a fixed mobile minimum width`);
  }

  const scorecard = readFileSync(new URL('ScanScorecard.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(scorecard, /variantA|variantB|variantNote/u);

  const paywall = readFileSync(new URL('ScanPaywall.tsx', import.meta.url), 'utf8');
  assert.match(paywall, /min-h-\[44px\]/u);
  const ten = readFileSync(new URL('ScanTenWays.tsx', import.meta.url), 'utf8');
  assert.match(ten, /min-h-\[44px\]/u);

  const hero = readFileSync(new URL('HeroProof.tsx', import.meta.url), 'utf8');
  assert.match(hero, /\[contain:inline-size\]/u, 'HeroProof must not widen the shared hero grid');

  const rls = readFileSync(new URL('ScanRls.tsx', import.meta.url), 'utf8');
  assert.match(
    rls,
    /flex w-full min-w-0 flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center/u,
    'RLS controls must stack inside the phone card',
  );
  assert.match(
    rls,
    /max-w-full overflow-x-auto[^"]*whitespace-pre-wrap[^"]*break-all/u,
    'RLS request evidence must wrap or scroll inside its own frame',
  );
});

test('the narrow header keeps its primary action available in the mobile drawer', () => {
  const css = readFileSync(
    new URL('../home/components/landing-nav.css', import.meta.url),
    'utf8',
  );
  const nav = readFileSync(new URL('../home/components/LandingNav.tsx', import.meta.url), 'utf8');

  assert.match(
    css,
    /@media \(max-width: 389px\)[\s\S]*?\.nav-actions \.glass-cta\s*\{\s*display: none;\s*\}/u,
    'the redundant top-bar CTA must not force the 342px header wider than its bar',
  );
  assert.match(
    nav,
    /className="nav-drawer-link"[\s\S]*?\{t\('cta'\)\}/u,
    'the primary action must remain available from the mobile drawer',
  );
});
