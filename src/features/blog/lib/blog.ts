import fs from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import { marked } from 'marked';

import { SITE } from '@/config/site';

import type { BlogAuthor, BlogPost, BlogPostMeta } from '../types';

const BLOG_ROOT = path.join(process.cwd(), 'content', 'blog');
const DEFAULT_AUTHOR: BlogAuthor = { name: 'aiNOW', role: 'Product team' };
const UNSAFE_SOURCE = /<\s*(script|iframe|object|embed|style|form)\b|javascript\s*:/iu;

marked.setOptions({ gfm: true, breaks: false });

function localeDirectory(locale: string): string {
  return path.join(BLOG_ROOT, locale);
}

function asText(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value.trim() : fallback;
}

function asDate(value: unknown): string {
  if (typeof value === 'string') return value.slice(0, 10);
  if (value instanceof Date && Number.isFinite(value.getTime())) return value.toISOString().slice(0, 10);
  return '';
}

function asList(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];
}

function asAuthor(value: unknown): BlogAuthor {
  if (typeof value === 'string') {
    const [name, role] = value.split(/\s*\/\s*/, 2);
    return { name: name?.trim() || DEFAULT_AUTHOR.name, role: role?.trim() || undefined };
  }
  if (value && typeof value === 'object' && typeof (value as BlogAuthor).name === 'string') {
    return value as BlogAuthor;
  }
  return DEFAULT_AUTHOR;
}

function countWords(source: string): number {
  return source
    .replace(/<[^>]+>/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

function estimateReadTime(words: number, locale: string): string {
  const minutes = Math.max(1, Math.ceil(words / 210));
  if (locale === 'ka') return `${minutes} წთ`;
  if (locale === 'ru') return `${minutes} мин`;
  return `${minutes} min read`;
}

function localizeInternalLinks(html: string, locale: string): string {
  const prefix = locale === SITE.defaultLocale ? '' : `/${locale}`;
  return html.replace(/href="\/(?!\/|#)([^"#]*)"/gu, (_match, rest: string) => {
    const normalized = `/${rest}`;
    if (normalized.startsWith('/api/') || normalized.startsWith('/_next/')) return `href="${normalized}"`;
    const explicitLocale = normalized.match(/^\/(ka|en|ru)(\/.*|$)/u);
    if (explicitLocale) {
      const [, targetLocale, targetPath] = explicitLocale;
      const targetPrefix = targetLocale === SITE.defaultLocale ? '' : `/${targetLocale}`;
      return `href="${targetPrefix}${targetPath || '/'}"`;
    }
    return `href="${prefix}${normalized}"`;
  });
}

function hardenExternalLinks(html: string): string {
  return html.replace(/<a\s+href="(https?:\/\/[^"]+)"([^>]*)>/giu, (_match, href: string, rest: string) => {
    const clean = rest.replace(/\s+(target|rel)="[^"]*"/giu, '');
    return `<a href="${href}"${clean} target="_blank" rel="noopener noreferrer">`;
  });
}

function renderArticle(source: string, locale: string): string {
  if (UNSAFE_SOURCE.test(source)) {
    throw new Error('Unsafe HTML is not allowed in blog content.');
  }
  const html = marked.parse(source) as string;
  const keyboardSafeTables = html.replace(
    /<table>/gu,
    '<table tabindex="0" aria-label="Article comparison table">',
  );
  return hardenExternalLinks(localizeInternalLinks(keyboardSafeTables, locale));
}

function readPostFile(slug: string, locale: string): { data: Record<string, unknown>; source: string } | null {
  const file = path.join(localeDirectory(locale), `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const parsed = matter(fs.readFileSync(file, 'utf8'));
  return { data: parsed.data as Record<string, unknown>, source: parsed.content };
}

function toMeta(slug: string, locale: string, data: Record<string, unknown>, source: string): BlogPostMeta {
  const words = countWords(source);
  const date = asDate(data.date);
  return {
    id: slug,
    slug,
    locale,
    title: asText(data.title, slug),
    excerpt: asText(data.excerpt),
    date,
    updated: asDate(data.updated) || date,
    readTime: asText(data.readTime) || estimateReadTime(words, locale),
    author: asAuthor(data.author),
    tags: asList(data.tags),
    cluster: asText(data.cluster) || asList(data.tags)[0] || SITE.wordmark.mark,
    indexable: data.indexable !== false && data.status !== 'draft',
    sources: asList(data.sources),
    wordCount: words,
    coverImage: asText(data.coverImage) || `/${locale}/blog/${slug}/opengraph-image`,
    coverQuery: asText(data.coverQuery) || undefined,
  };
}

export function getPostSlugs(): string[] {
  const slugs = new Set<string>();
  for (const locale of SITE.locales) {
    const directory = localeDirectory(locale);
    if (!fs.existsSync(directory)) continue;
    for (const file of fs.readdirSync(directory)) {
      if (file.endsWith('.mdx')) slugs.add(file.replace(/\.mdx$/u, ''));
    }
  }
  return [...slugs].sort();
}

export function getDefaultAvailableLocale(slug: string): string | null {
  const available = getAvailableLocales(slug);
  if (available.includes(SITE.defaultLocale)) return SITE.defaultLocale;
  if (available.includes('en')) return 'en';
  return available[0] ?? null;
}

export function getAvailableLocales(slug: string): string[] {
  return SITE.locales.filter((locale) => fs.existsSync(path.join(localeDirectory(locale), `${slug}.mdx`)));
}

export function getPost(slug: string, locale: string): BlogPost | null {
  const parsed = readPostFile(slug, locale);
  if (!parsed) return null;
  return {
    ...toMeta(slug, locale, parsed.data, parsed.source),
    content: renderArticle(parsed.source, locale),
  };
}

export function getPosts(locale: string): BlogPostMeta[] {
  const directory = localeDirectory(locale);
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/u, ''))
    .map((slug) => {
      const parsed = readPostFile(slug, locale);
      return parsed ? toMeta(slug, locale, parsed.data, parsed.source) : null;
    })
    .filter((post): post is BlogPostMeta => Boolean(post))
    .filter((post) => post.indexable)
    .sort((left, right) => right.date.localeCompare(left.date));
}

export function getRelatedPosts(post: BlogPostMeta, limit = 3): BlogPostMeta[] {
  return getPosts(post.locale)
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      candidate,
      score:
        candidate.tags.filter((tag) => post.tags.includes(tag)).length * 2 +
        (candidate.cluster === post.cluster ? 3 : 0),
    }))
    .sort((left, right) => right.score - left.score || right.candidate.date.localeCompare(left.candidate.date))
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

export function extractFaq(content: string): Array<{ question: string; answer: string }> {
  const pattern = /<h3[^>]*id="faq-\d+"[^>]*>([^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>/giu;
  const items: Array<{ question: string; answer: string }> = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(content)) !== null) {
    items.push({
      question: match[1].trim(),
      answer: match[2].replace(/<[^>]+>/gu, '').replace(/\s+/gu, ' ').trim(),
    });
  }
  return items;
}

export function extractHeadings(content: string): Array<{ id: string; title: string }> {
  const pattern = /<h2[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/giu;
  const headings: Array<{ id: string; title: string }> = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(content)) !== null) {
    headings.push({ id: match[1], title: match[2].replace(/<[^>]+>/gu, '').trim() });
  }
  return headings;
}
