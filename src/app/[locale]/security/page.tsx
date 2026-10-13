import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductSecondaryPage, productSecondaryMetadata } from '../product-secondary-page';
import { PRODUCT_PAGES } from '@/config/product-pages';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return productSecondaryMetadata(locale, 'security');
}

export default async function ProductSecurityPage({ params }: Props) {
  if (PRODUCT_PAGES.security.status !== 'public') notFound();
  const { locale } = await params;
  return <ProductSecondaryPage locale={locale} kind="security" />;
}
