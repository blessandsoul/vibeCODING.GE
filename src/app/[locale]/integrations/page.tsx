import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { PRODUCT_PAGES } from '@/config/product-pages';
import { PRODUCT_PAGE_LOCALES, type ProductPageLocale } from '@/features/product-pages/types';
import { getIntegrationsContent } from '@/features/product-pages/content';
import { IntegrationsPage } from '@/features/product-pages/integrations/IntegrationsPage';
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
    namespace: 'productPages.integrations',
    path: '/integrations',
  });
}

export default async function ProductIntegrationsPage({ params }: Props) {
  if (PRODUCT_PAGES.integrations.status !== 'public') notFound();
  const { locale } = await params;
  const safeLocale = asProductPageLocale(locale);
  setRequestLocale(safeLocale);
  const { copy, integrations } = await getIntegrationsContent(safeLocale);
  if (integrations.length === 0) notFound();

  return (
    <>
      <ProductPageJsonLd
        graph={buildProductPageGraph({
          locale: safeLocale,
          path: '/integrations',
          name: copy.title,
          description: copy.lead,
        })}
      />
      <IntegrationsPage copy={copy} integrations={integrations} />
    </>
  );
}
