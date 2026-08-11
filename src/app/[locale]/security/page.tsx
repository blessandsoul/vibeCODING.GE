import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PRODUCT_PAGES } from '@/config/product-pages';
import { PRODUCT_PAGE_LOCALES, type ProductPageLocale } from '@/features/product-pages/types';
import { getSecurityContent } from '@/features/product-pages/content';
import { SecurityPage } from '@/features/product-pages/security/SecurityPage';
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
    namespace: 'productPages.security',
    path: '/security',
  });
}

export default async function ProductSecurityPage({ params }: Props) {
  if (PRODUCT_PAGES.security.status !== 'public') notFound();
  const { locale } = await params;
  const safeLocale = asProductPageLocale(locale);
  setRequestLocale(safeLocale);
  const content = await getSecurityContent(safeLocale);

  return (
    <>
      <ProductPageJsonLd
        graph={buildProductPageGraph({
          locale: safeLocale,
          path: '/security',
          name: content.copy.title,
          description: content.copy.lead,
        })}
      />
      <SecurityPage {...content} />
    </>
  );
}
