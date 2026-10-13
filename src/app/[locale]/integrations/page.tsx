import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductSecondaryPage, productSecondaryMetadata } from '../product-secondary-page';
import { PRODUCT_PAGES } from '@/config/product-pages';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return productSecondaryMetadata(locale, 'integrations');
}

export default async function ProductIntegrationsPage({ params }: Props) {
  if (PRODUCT_PAGES.integrations.status !== 'public') notFound();
  const { locale } = await params;
  return <ProductSecondaryPage locale={locale} kind="integrations" />;
}
