import fs from 'node:fs';
import path from 'node:path';

const root = path.join(process.cwd(), 'content', 'blog');
const deletedLegacyPath = path.join(root, 'deleted-legacy-slugs.json');
const dash = /[\u2013\u2014]/u;
const cyrillic = /[\u0400-\u04ff]/u;
const georgian = /[\u10d0-\u10ff]/u;
const latinWord = /\b[A-Za-z][A-Za-z0-9+.#/-]*\b/gu;
const tags = /<[^>]+>/gu;
const code = /<code\b[^>]*>.*?<\/code>|<pre\b[^>]*>.*?<\/pre>|```[\s\S]*?```|`[^`]+`/gisu;
const urls = /https?:\/\/\S+|href=["'][^"']+["']/giu;
const falseValues = new Set(['false', 'no', 'off', '0']);
const deletedLegacy = new Set(
  fs.existsSync(deletedLegacyPath)
    ? JSON.parse(fs.readFileSync(deletedLegacyPath, 'utf8')).slugs ?? []
    : [],
);

const allowedLatin = new Set([
  'ai', 'ainow', 'aicall', 'aiweb', 'aioffice', 'aidocs', 'aiapp', 'vibecoding',
  'aicontent', 'aiads', 'aitaxi', 'aistaff', 'instagram', 'messenger', 'whatsapp',
  'telegram', 'viber', 'facebook', 'google', 'meta', 'tiktok', 'youtube', 'crm',
  'pdf', 'api', 'json', 'faq', 'seo', 'wcag', 'owasp', 'nist', 'gel', 'usd',
  'html', 'csv', 'excel', 'balance', 'oris', 'ocpp', 'chatgpt', 'linkedin',
  'wordpress', 'shopify', 'woocommerce', 'javascript', 'typescript', 'react',
  'next', 'rag', 'roi', 'cpc', 'cpm', 'ctr', 'utm', 'ivr', 'sdr', 'dm',
]);

const englishFunctionWords = new Set([
  'the', 'and', 'for', 'with', 'without', 'when', 'while', 'where', 'what',
  'which', 'who', 'how', 'why', 'should', 'would', 'could', 'can', 'may', 'must',
  'before', 'after', 'because', 'internal', 'tool', 'tools', 'business', 'owner',
  'permissions', 'approval', 'evidence', 'manager', 'complete', 'uncertain', 'this',
  'that', 'these', 'those', 'your', 'you', 'we', 'our', 'from', 'into', 'than',
  'then', 'ready', 'development', 'result', 'results', 'process', 'steps',
]);

const badKaPhrases = [
  'ეს სტატია განმარტავს',
  'პრაქტიკულ ნაბიჯებს ქართული ბიზნესისთვის',
  'რა არის an',
  'ამ სტატიაში განვიხილავთ',
  'მნიშვნელოვანია აღინიშნოს',
  'დღევანდელ ციფრულ ეპოქაში',
  'ტყვიის ავტომატიზაცია',
  'თბილ ტყვიად',
  'დაჭერილ ტყვიად',
  'ცივი სიით თბილ წამყვანთან',
  'availability-aware',
  'stragglers',
  'heatmap',
];

const brokenKa = [
  /(?:^|[^\u10d0-\u10ff])ტყვი(?:ა|ად|ები|ის|ებს|ებთან)(?:[^\u10d0-\u10ff]|$)/u,
  /(?:თბილ|ცივ|დაჭერილ|კვალიფიცირებულ)\s+წამყვან|წამყვან(?:ის|ების|ად)\s+(?:ავტომატიზაცი|დაჭერ|შეფას|ძრავ|ნაკად)/iu,
  /(?:^|[^\u10d0-\u10ff])(?:ბიზნეს|ინდუსტრიულ|ნებისმიერ)\s+ვერტიკალ/iu,
  /(?:^|[^\u10d0-\u10ff])გაყიდვების\s+მილსადენ/iu,
];

function isFalseValue(value) {
  return falseValues.has(String(value ?? '').trim().toLowerCase());
}

function frontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/u);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split(/\r?\n/u)) {
    const found = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*?)\s*$/u);
    if (found) meta[found[1]] = found[2].replace(/^['"]|['"]$/gu, '');
  }
  return { meta, body: match[2] };
}

function normalized(value) {
  return value.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function visible(value) {
  return value.replace(code, ' ').replace(urls, ' ').replace(tags, ' ').replace(/\s+/gu, ' ').trim();
}

function hasEnglishFragment(value) {
  const runs = value.match(/(?:\b[A-Za-z][A-Za-z0-9+.#/-]*\b(?:[\s,;:()]+|$)){3,}/gu) ?? [];
  return runs.some((run) => {
    const words = [...run.matchAll(latinWord)].map((match) => match[0].toLowerCase());
    const ordinary = words.filter((word) => !allowedLatin.has(word));
    return ordinary.length >= 3 && ordinary.some((word) => englishFunctionWords.has(word));
  });
}

const files = [];
if (fs.existsSync(root)) {
  for (const locale of fs.readdirSync(root)) {
    const directory = path.join(root, locale);
    if (!fs.statSync(directory).isDirectory()) continue;
    for (const name of fs.readdirSync(directory)) {
      if (name.endsWith('.mdx')) files.push({ locale, file: path.join(directory, name) });
    }
  }
}

const failures = [];
const titles = new Map();
const excerpts = new Map();
let released = 0;
let held = 0;

for (const { locale, file } of files) {
  const raw = fs.readFileSync(file, 'utf8');
  const { meta, body } = frontmatter(raw);
  const status = String(meta.status ?? '').toLowerCase();
  const slug = path.basename(file, '.mdx');
  const reintroduced = deletedLegacy.has(slug) && String(meta.editorial_rewrite ?? '').toLowerCase() !== 'approved';
  if (isFalseValue(meta.indexable) || status === 'draft' || status === 'editorial-hold') {
    held += 1;
    if (reintroduced) {
      const rel = path.relative(process.cwd(), file).replaceAll('\\', '/');
      failures.push({ file: rel, issues: ['deleted-legacy-slug-reintroduced'] });
    }
    continue;
  }
  released += 1;
  const rel = path.relative(process.cwd(), file).replaceAll('\\', '/');
  const issues = [];
  const title = String(meta.title ?? '').trim();
  const excerpt = String(meta.excerpt ?? '').trim();
  const prose = `${title} ${excerpt} ${visible(body)}`;

  if (reintroduced) issues.push('deleted-legacy-slug-reintroduced');
  if (!title) issues.push('missing-title');
  if (!excerpt) issues.push('missing-excerpt');
  if (dash.test(raw)) issues.push('long-dash');

  if (locale === 'ka') {
    if (cyrillic.test(prose)) issues.push('cyrillic-in-georgian');
    if (badKaPhrases.some((phrase) => prose.toLocaleLowerCase().includes(phrase))) issues.push('bad-georgian-phrase');
    if (brokenKa.some((pattern) => pattern.test(prose))) issues.push('broken-georgian-calque');
    if (hasEnglishFragment(prose)) issues.push('mixed-english-fragment');
  }
  if (locale === 'en' && georgian.test(prose)) issues.push('georgian-in-english');

  const key = `${locale}:${normalized(title)}`;
  if (title) titles.set(key, [...(titles.get(key) ?? []), rel]);
  const excerptKey = `${locale}:${normalized(excerpt)}`;
  if (excerpt) excerpts.set(excerptKey, [...(excerpts.get(excerptKey) ?? []), rel]);
  if (issues.length) failures.push({ file: rel, issues });
}

for (const [key, owners] of titles) {
  if (owners.length > 1) owners.forEach((file) => failures.push({ file, issues: [`duplicate-title:${key}`] }));
}
for (const [key, owners] of excerpts) {
  if (owners.length > 1) owners.forEach((file) => failures.push({ file, issues: [`duplicate-excerpt:${key}`] }));
}

if (failures.length) {
  console.error(`BLOG QUALITY GATE: ${failures.length} failure(s), ${released} released, ${held} held`);
  for (const item of failures.slice(0, 50)) console.error(`- ${item.file}: ${item.issues.join(', ')}`);
  process.exit(1);
}

console.log(`BLOG QUALITY GATE: PASS, ${released} released article(s), ${held} held`);
