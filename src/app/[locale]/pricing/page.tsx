import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PRODUCT_PAGES } from '@/config/product-pages';
import { PRODUCT_PAGE_LOCALES, type ProductPageLocale } from '@/features/product-pages/types';
import { getPricingContent } from '@/features/product-pages/content';
import { PricingPage } from '@/features/product-pages/pricing/PricingPage';
import { ProductPageJsonLd } from '@/features/product-pages/components/ProductPageJsonLd';
import {
  buildProductPageGraph,
  buildProductPageMetadata,
} from '@/features/product-pages/seo';

interface Props {
  params: Promise<{ locale: string }>;
}

function asProductPageLocale(locale: string): ProductPageLocale {
  if (!PRODUCT_PAGE_LOCALES.includes(locale as ProductPageLocale)) notFound();
  return locale as ProductPageLocale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildProductPageMetadata({
    locale: asProductPageLocale(locale),
    namespace: 'productPages.pricing',
    path: '/pricing',
  });
}

export default async function ProductPricingPage({ params }: Props) {
  if (PRODUCT_PAGES.pricing.status !== 'public') notFound();
  const { locale } = await params;
  const safeLocale = asProductPageLocale(locale);
  setRequestLocale(safeLocale);
  const { copy, data } = await getPricingContent(safeLocale);
  const graph = buildProductPageGraph({
    locale: safeLocale,
    path: '/pricing',
    name: copy.title,
    description: copy.lead,
    faq: data.faq.map((item) => ({
      question: item.question,
      answer: item.answer,
    })),
    pricing: data,
  });

  return (
    <>
      <ProductPageJsonLd graph={graph} />
      <PricingPage copy={copy} data={data} />
    </>
  );
}
