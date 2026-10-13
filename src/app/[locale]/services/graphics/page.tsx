import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { GraphicsShowcase } from '@/features/services/components/GraphicsShowcase';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { PRICING_PRODUCTS } from '@/features/pricing/pricing-data';

const aiContentVideoOffers = (PRICING_PRODUCTS.find((product) => product.id === 'aicontent')?.plans ?? [])
  .filter((plan) => plan.id === 'promo' || plan.id === 'ugc')
  .flatMap((plan) => {
    const startingPrice = plan.price.match(/\d+/u)?.[0];
    return startingPrice
      ? [{ name: `${plan.name} — ${plan.price}`, price: startingPrice, unitText: 'video' }]
      : [];
  });

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesGraphics' });

  const path = '/services/graphics';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function GraphicsPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesGraphics"
        path="/services/graphics"
        serviceType="AI Creative Production"
        offers={aiContentVideoOffers}
      />
      <ServiceHero namespace="servicesGraphics" />
      <GraphicsShowcase />
      <ServiceCTA namespace="servicesGraphics" href={ownerContact} />
    </>
  );
}
