import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PRODUCT_PAGES } from '@/config/product-pages';
import { getLegalContent } from '@/features/product-pages/content';
import { LegalPage } from '@/features/product-pages/components/LegalPage';
import { ProductPageJsonLd } from '@/features/product-pages/components/ProductPageJsonLd';
import {
  buildProductPageGraph,
  buildProductPageMetadata,
} from '@/features/product-pages/seo';
import { PRODUCT_PAGE_LOCALES, type ProductPageLocale } from '@/features/product-pages/types';

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
    namespace: 'productPages.terms',
    path: '/terms',
  });
}

export default async function TermsPage({ params }: Props) {
  if (PRODUCT_PAGES.terms.status !== 'public') notFound();
  const { locale } = await params;
  const safeLocale = asProductPageLocale(locale);
  setRequestLocale(safeLocale);
  const content = await getLegalContent(safeLocale, 'terms');

  return (
    <>
      <ProductPageJsonLd
        graph={buildProductPageGraph({
          locale: safeLocale,
          path: '/terms',
          name: content.title,
          description: content.lead,
        })}
      />
      <LegalPage {...content} />
    </>
  );
}
