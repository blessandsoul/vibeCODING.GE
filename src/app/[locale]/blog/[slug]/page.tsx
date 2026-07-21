import type { Metadata } from 'next';

import { notFound, redirect } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { SITE } from '@/config/site';
import { BlogArticle } from '@/features/blog/components/BlogArticle';
import { extractFaq, getAvailableLocales, getDefaultAvailableLocale, getPost, getPostSlugs, getRelatedPosts } from '@/features/blog/lib/blog';
import { localeUrl } from '@/i18n/seo-locales';

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return getPostSlugs().flatMap((slug) => getAvailableLocales(slug).map((locale) => ({ locale, slug })));
}

function articleAlternates(slug: string, locale: string) {
  const path = `/blog/${slug}`;
  const languages: Record<string, string> = {};
  for (const available of getAvailableLocales(slug)) languages[available] = localeUrl(available, path);
  const defaultAvailable = getDefaultAvailableLocale(slug);
  if (defaultAvailable) languages['x-default'] = localeUrl(defaultAvailable, path);
  return { canonical: localeUrl(locale, path), languages };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  if (!post) return { title: 'Not found', robots: { index: false, follow: false } };
  const canonical = localeUrl(locale, `/blog/${slug}`);
  const ogImage = localeUrl(locale, `/blog/${slug}/opengraph-image`);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: articleAlternates(slug, locale),
    authors: [{ name: post.author.name }],
    robots: { index: post.indexable, follow: true },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: `${SITE.wordmark.prefix}${SITE.wordmark.mark}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author.name],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [ogImage] },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPost(slug, locale);
  if (!post) {
    const fallback = getDefaultAvailableLocale(slug);
    if (fallback && fallback !== locale) redirect(localeUrl(fallback, `/blog/${slug}`));
    notFound();
  }

  const url = localeUrl(locale, `/blog/${slug}`);
  const faq = extractFaq(post.content);
  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.updated,
      inLanguage: locale,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@type': 'Organization', name: 'aiNOW', url: 'https://ainow.ge' },
      publisher: { '@type': 'Organization', name: 'aiNOW', url: 'https://ainow.ge', logo: { '@type': 'ImageObject', url: 'https://ainow.ge/logo.png' } },
      about: SITE.seo.knowsAbout.map((name) => ({ '@type': 'Thing', name })),
      keywords: post.tags.join(', '),
      wordCount: post.wordCount,
      articleSection: post.cluster,
      citation: post.sources,
      isAccessibleForFree: true,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: `${SITE.wordmark.prefix}${SITE.wordmark.mark}`, item: localeUrl(locale) },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: localeUrl(locale, '/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</gu, '\\u003c') }}
        />
      ))}
      <BlogArticle post={post} related={getRelatedPosts(post)} />
    </>
  );
}
