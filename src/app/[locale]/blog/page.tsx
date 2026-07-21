import type { Metadata } from 'next';

import { setRequestLocale } from 'next-intl/server';

import { SITE } from '@/config/site';
import { BlogIndex } from '@/features/blog/components/BlogIndex';
import { getPosts } from '@/features/blog/lib/blog';
import { getBlogCopy } from '@/features/blog/lib/copy';
import { buildAlternates } from '@/i18n/seo-locales';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getBlogCopy(locale);
  const title = `${copy.pageTitle}: ${SITE.seo.serviceType}`;
  return {
    title,
    description: copy.subtitle,
    alternates: buildAlternates('/blog', locale),
    openGraph: {
      title,
      description: copy.subtitle,
      url: buildAlternates('/blog', locale).canonical,
      type: 'website',
      images: [{ url: `${SITE.baseUrl}/og-image.png`, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description: copy.subtitle, images: [`${SITE.baseUrl}/og-image.png`] },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const localized = getPosts(locale);
  const contentLocale = localized.length > 0 ? locale : 'en';
  const posts = localized.length > 0 ? localized : getPosts(contentLocale);
  return <BlogIndex posts={posts} locale={locale} contentLocale={contentLocale} />;
}
