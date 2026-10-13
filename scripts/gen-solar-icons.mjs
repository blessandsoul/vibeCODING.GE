// Generates src/components/common/solar-icons.ts: an offline Iconify subset that
// contains ONLY the solar:* icons used by <Ico> across the app. Mirrors the aiSTAFF
// admin's bundled-subset approach so icons render with zero network calls (CSP-safe).
//
// Run from the website root:  node scripts/gen-solar-icons.mjs
// Re-run whenever a new solar:* name is introduced in a component.
import { createRequire } from 'node:module';
import { writeFileSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));

const full = require('@iconify-json/solar/icons.json');

// Discover the solar:* names actually USED across src, so the bundle can never
// desync from the components (strip the `solar:` prefix). Re-run after any icon
// name change and the subset follows automatically.
function walkSrc(dir, acc) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) {
      walkSrc(p, acc);
    } else if (/\.(tsx?|jsx?)$/.test(entry) && entry !== 'solar-icons.ts') {
      const matches = readFileSync(p, 'utf8').match(/solar:[a-z0-9-]+/g);
      if (matches) for (const n of matches) acc.add(n.slice('solar:'.length));
    }
  }
}
const usedSet = new Set();
walkSrc(join(here, '..', 'src'), usedSet);
const USED = [...usedSet];

const icons = {};
const missing = [];
for (const name of [...new Set(USED)].sort()) {
  if (full.icons[name]) icons[name] = full.icons[name];
  else missing.push(name);
}

if (missing.length) {
  console.error('Missing solar icons (build would break):', missing.join(', '));
  process.exit(1);
}

const subset = {
  prefix: full.prefix,
  icons,
  width: full.width,
  height: full.height,
};

const banner = `// AUTO-GENERATED offline Iconify subset (Solar bold-duotone, only icons used by <Ico>).
// Regenerate via:  node scripts/gen-solar-icons.mjs
// Bundled so the site renders icons with zero network calls (no Iconify HTTP API, CSP-safe).
// To add an icon: use its solar:* name in a component, then re-run the script.
`;

const body = `export const solarIcons = ${JSON.stringify(subset)} as const;\n`;

const out = join(here, '..', 'src', 'components', 'common', 'solar-icons.ts');
writeFileSync(out, banner + body, 'utf8');
console.log(`Wrote ${out} with ${Object.keys(icons).length} solar icons.`);
