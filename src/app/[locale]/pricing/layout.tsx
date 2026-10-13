import type { Metadata } from 'next';
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import { getPricingPageCopy } from '@/features/pricing/pricing-copy';
import { buildAlternates, localeUrl } from '@/i18n/seo-locales';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { AiNowPageChrome } from '@/features/home/components/ainow/AiNowPageChrome';

type Props = {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const copy = getPricingPageCopy(locale);

  const path = '/pricing';
  return {
    title: copy.title,
    description: copy.description,
    alternates: buildAlternates(path, locale),
    openGraph: {
      images: [PRODUCT_OG_IMAGE],
      title: copy.title,
      description: copy.description,
    },
    twitter: {
      images: [PRODUCT_OG_PATH],
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
    },
  };
}

export default async function PricingLayout({ children, params }: Props) {
  const { locale } = await params;
const base = localeUrl(locale);
  const copy = getPricingPageCopy(locale);
  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: 'aiNOW', item: base },
          { name: copy.title, item: `${base}/pricing` },
        ]}
      />
      <AiNowPageChrome>{children}</AiNowPageChrome>
    </>
  );
}
