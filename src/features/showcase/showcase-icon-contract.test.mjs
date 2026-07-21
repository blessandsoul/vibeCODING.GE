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
const heroWorkflowSource = readFileSync(
  new URL('../home/components/HeroWorkflowStory.tsx', import.meta.url),
  'utf8',
);
const heroWorkflowCss = readFileSync(
  new URL('../home/components/hero-workflow-story.css', import.meta.url),
  'utf8',
);

test('the landing renders one static list of exactly five security capabilities', () => {
  const source = readFileSync(
    new URL('../home/components/LandingShowcase.tsx', import.meta.url),
    'utf8',
  );
  const capabilities = readFileSync(
    new URL('../home/components/ProductCapabilities.tsx', import.meta.url),
    'utf8',
  );

  assert.match(source, /useTranslations\('product\.capabilities'\)/u);
  assert.match(source, /<ProductCapabilities/u);
  assert.match(source, /items=\{ICONS\.map/u);
  assert.equal((source.match(/solar:[a-z0-9-]+/gu) ?? []).length, 5);
  for (const oldDemo of ['ScanScorecard', 'ScanRls', 'ScanPaywall', 'ScanFixRescan', 'ScanTenWays']) {
    assert.doesNotMatch(source, new RegExp(`features/showcase/${oldDemo}|<${oldDemo}`), oldDemo);
  }
  assert.doesNotMatch(source, /data-landing-demo/u);
  assert.match(capabilities, /items\.map\(\(item, index\)/u);
  assert.match(capabilities, /data-feature-section="true"/u);
  assert.match(capabilities, /data-feature-id=\{`capability-\$\{index \+ 1\}`\}/u);
  assert.doesNotMatch(capabilities, /data-landing-demo/u);
});

test('the scorecard starts empty, shows a safe sample, and submits real URLs only from its form', () => {
  const source = readFileSync(new URL('ScanScorecard.tsx', import.meta.url), 'utf8');

  assert.match(source, /const \[url, setUrl\] = useState\(''\);/u);
  assert.match(source, /<form[\s\S]*?onSubmit=\{/u);
  assert.match(source, /onSubmit=\{[\s\S]{0,200}void scan\(\)/u);
  assert.match(source, /const SAMPLE_URL = 'https:\/\/sample-app\.example';/u);
  assert.match(source, /body: JSON\.stringify\(\{ url: url\.trim\(\) \}\)/u);
  assert.equal(source.match(/fetch\('\/api\/scan'/gu)?.length, 1);
  const scanStart = source.indexOf('const scan = useCallback');
  const scanEnd = source.indexOf('\n  }, [', scanStart);
  const fetchCall = source.indexOf("fetch('/api/scan'");
  assert.ok(scanStart >= 0 && fetchCall > scanStart && fetchCall < scanEnd);
});

test('showcase status meaning uses bundled Solar Ico components, not glyphs or lucide', () => {
  for (const component of COMPONENTS.filter((name) => name !== 'HeroProof.tsx')) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.match(source, /import \{ Ico \} from '@\/components\/common\/Ico';/u, component);
    assert.match(source, /<Ico/u, component);
    assert.doesNotMatch(source, /from ['"]lucide-react['"]/u, component);
  }

  const heroAdapter = readFileSync(new URL('HeroProof.tsx', import.meta.url), 'utf8');
  assert.match(heroAdapter, /<HeroWorkflowStory/u);
  assert.match(heroAdapter, /productIcon="solar:shield-check-bold-duotone"/u);
  assert.match(heroWorkflowSource, /import \{ Ico \} from '@\/components\/common\/Ico';/u);
  assert.match(heroWorkflowSource, /<Ico/u);
  assert.doesNotMatch(`${heroAdapter}\n${heroWorkflowSource}`, /from ['"]lucide-react['"]|<svg/u);

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

test('all five demonstrations use the same plain-language intro and permanent business result', () => {
  const stories = COMPONENTS.filter((component) => component !== 'HeroProof.tsx');
  const primitives = readFileSync(new URL('ShowcaseStory.tsx', import.meta.url), 'utf8');

  assert.match(primitives, /data-business-result="true"/u);
  for (const component of stories) {
    const source = readFileSync(new URL(component, import.meta.url), 'utf8');
    assert.match(source, /<DemoIntro/u, `${component} needs the shared plain-language intro`);
    assert.match(source, /<BusinessResult/u, `${component} needs a permanent business result`);
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
  assert.match(
    scorecard,
    /className="[^"]*\bmin-h-14\b[^"]*\bflex-none\b[^"]*\bsm:flex-1\b/u,
    'the URL input must retain its 56px height while the mobile form uses flex-col',
  );
  assert.doesNotMatch(
    scorecard,
    /className="inline-flex h-14 flex-wrap/u,
    'translated scan actions must grow taller than 56px when their labels wrap',
  );
  assert.equal(
    (scorecard.match(/className="inline-flex min-h-\[72px\] flex-wrap[^"]*whitespace-normal/g) ?? []).length,
    2,
    'both scorecard actions must reserve two mobile text lines and wrap semantic labels',
  );

  const paywall = readFileSync(new URL('ScanPaywall.tsx', import.meta.url), 'utf8');
  assert.match(paywall, /min-h-\[44px\]/u);
  const ten = readFileSync(new URL('ScanTenWays.tsx', import.meta.url), 'utf8');
  assert.match(ten, /min-h-\[44px\]/u);

  const hero = readFileSync(new URL('HeroProof.tsx', import.meta.url), 'utf8');
  assert.match(hero, /<HeroWorkflowStory/u, 'HeroProof must use the shared workflow frame');
  assert.match(hero, /mode="autonomous"/u, 'vibeCODING must not add the iAI bridge');
  assert.match(heroWorkflowCss, /\.hero-workflow\s*\{[^}]*min-width:\s*0;[^}]*overflow:\s*hidden;[^}]*contain:\s*inline-size;/su);
  assert.doesNotMatch(hero, /\btruncate\b/u, 'the sample domain must remain readable at every width');
  assert.match(
    heroWorkflowCss,
    /@media \(max-width: 479px\)[\s\S]*?\.hero-workflow__details\s*\{\s*grid-template-columns:\s*1fr;/u,
    'hero details must become one column on narrow phones',
  );
  assert.match(
    heroWorkflowCss,
    /\.hero-workflow__row\s*\{[^}]*grid-template-columns:\s*38px minmax\(0, 1fr\);/su,
    'hero copy must stay in a shrinkable grid column',
  );
  assert.match(heroWorkflowCss, /\.hero-workflow__replay\s*\{[^}]*min-width:\s*44px;[^}]*min-height:\s*44px;/su);

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

test('autoplay content stays inside reserved panels instead of changing page height', () => {
  const scorecard = readFileSync(new URL('ScanScorecard.tsx', import.meta.url), 'utf8');
  const rls = readFileSync(new URL('ScanRls.tsx', import.meta.url), 'utf8');
  const fix = readFileSync(new URL('ScanFixRescan.tsx', import.meta.url), 'utf8');
  const ten = readFileSync(new URL('ScanTenWays.tsx', import.meta.url), 'utf8');

  assert.match(scorecard, /const displayResult = result \?\? sampleResult;/u);
  assert.match(scorecard, /data-scorecard-result-slot="true"/u);
  assert.doesNotMatch(scorecard, /\{result && \(\s*<motion\.div/u);

  assert.match(rls, /ROWS\.map\(\(r\) => \{[\s\S]*const visible = rows\.some/u);
  assert.match(rls, /data-rls-row="true"/u);
  assert.match(rls, /aria-hidden=\{!visible\}/u);
  assert.match(rls, /data-rls-console-slot="true"[\s\S]*min-h-\[112px\][\s\S]*sm:min-h-\[72px\]/u);
  assert.match(rls, /data-rls-controls-slot="true"[\s\S]*min-h-\[132px\][\s\S]*sm:min-h-\[56px\]/u);
  assert.match(rls, /data-rls-verdict-slot="true"[\s\S]*min-h-\[176px\][\s\S]*sm:min-h-\[120px\]/u);

  for (const marker of [
    'data-fix-browser-slot="true"',
    'data-fix-server-slot="true"',
    'data-fix-status-slot="true"',
    'data-fix-outcome-slot="true"',
  ]) {
    assert.match(fix, new RegExp(marker), marker);
  }
  assert.match(fix, /data-fix-browser-header-slot="true"[\s\S]*min-h-\[100px\][\s\S]*sm:min-h-\[68px\]/u);
  assert.match(fix, /data-fix-outcome-slot="true"[\s\S]*min-h-\[204px\][\s\S]*sm:min-h-\[108px\]/u);
  assert.doesNotMatch(ten, /\{active && \([\s\S]*data-ten-detail-slot/u);
  assert.match(ten, /data-ten-detail-shell="true"[\s\S]*data-ten-detail-slot="true"[\s\S]*min-h-\[320px\][\s\S]*sm:min-h-\[160px\]/u);
});

test('the narrow header keeps the compact phone action and drawer action available', () => {
  const css = readFileSync(
    new URL('../home/components/landing-nav.css', import.meta.url),
    'utf8',
  );
  const nav = readFileSync(new URL('../home/components/LandingNav.tsx', import.meta.url), 'utf8');

  assert.match(
    css,
    /\.glass-cta\s*\{[^}]*width:\s*44px;[^}]*min-width:\s*44px;[^}]*height:\s*44px;[^}]*flex:\s*0 0 44px;/su,
    'the phone-only top-bar action must remain a fixed 44px target',
  );
  assert.doesNotMatch(css, /\.nav-actions \.glass-cta\s*\{\s*display:\s*none/u);
  assert.match(
    nav,
    /className="nav-drawer-link"[\s\S]*?\{t\('cta'\)\}/u,
    'the primary action must remain available from the mobile drawer',
  );
  assert.match(nav, /aria-label=\{menuOpen \? a11y\.close : a11y\.open\}/u);
  assert.match(nav, /aria-label=\{a11y\.language\}/u);
  assert.doesNotMatch(nav, /aria-haspopup="menu"/u);
});
