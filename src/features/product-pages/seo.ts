import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { SITE } from '@/config/site';
import { buildAlternates, localeUrl } from '@/i18n/seo-locales';

import { PRODUCT_NAME } from './content';
import { findPublicRoute } from './routes';
import type { ProductPageLocale, ProductPageNamespace } from './types';
import type { PricingPageData } from './pricing/types';

type SeoNamespace = Exclude<
  ProductPageNamespace,
  'productPages.common' | 'productPages.blog' | 'productPages.cookies' | 'productPages.solutions'
>;

function requirePublicPage(path: `/${string}`): void {
  if (!findPublicRoute(path)) {
    notFound();
  }
}

export async function buildProductPageMetadata({
  locale,
  namespace,
  path,
}: {
  locale: ProductPageLocale;
  namespace: SeoNamespace;
  path: `/${string}`;
}): Promise<Metadata> {
  requirePublicPage(path);
  const t = await getTranslations({ locale, namespace });
  const variables = { product: PRODUCT_NAME, domain: SITE.domain };
  const title = t('seoTitle', variables);
  const description = t('seoDescription', variables);
  const url = localeUrl(locale, path);

  return {
    title,
    description,
    alternates: buildAlternates(path, locale),
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: PRODUCT_NAME,
      images: [{ url: `${SITE.baseUrl}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE.baseUrl}/og-image.png`],
    },
  };
}

export function buildProductPageGraph({
  locale,
  path,
  name,
  description,
  faq,
  pricing,
}: {
  locale: ProductPageLocale;
  path: `/${string}`;
  name: string;
  description: string;
  faq?: readonly { question: string; answer: string }[];
  pricing?: PricingPageData;
}): object {
  requirePublicPage(path);
  const pageUrl = localeUrl(locale, path);
  const graph: object[] = [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name,
      description,
      inLanguage: locale,
      isPartOf: { '@id': `${SITE.baseUrl}/#website` },
      about: { '@id': `${SITE.baseUrl}/#service` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: PRODUCT_NAME,
          item: localeUrl(locale, ''),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name,
          item: pageUrl,
        },
      ],
    },
  ];

  if (faq && faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }

  const pricedOffers =
    pricing?.offers.flatMap((offer) =>
      'price' in offer && offer.price
        ? [
            {
              '@type': 'Offer',
              name: offer.name,
              description: offer.summary,
              price: String(offer.price.amount),
              priceCurrency: offer.price.currency,
              url: pageUrl,
              seller: { '@id': 'https://ainow.ge#organization' },
            },
          ]
        : [],
    ) ?? [];

  if (pricedOffers.length > 0) {
    graph.push({
      '@type': 'OfferCatalog',
      '@id': `${pageUrl}#offers`,
      name: `${PRODUCT_NAME} offers`,
      itemListElement: pricedOffers,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function serializeJsonLd(value: object): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
