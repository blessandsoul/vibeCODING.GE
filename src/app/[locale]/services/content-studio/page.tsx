import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { ContentStudioShowcase } from '@/features/services/components/ContentStudioShowcase';
import { ContentStudioTariffs } from '@/features/services/components/ContentStudioTariffs';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { PRICING_PRODUCTS } from '@/features/pricing/pricing-data';

const aiContentVideoOffers = (PRICING_PRODUCTS.find((product) => product.id === 'aicontent')?.plans ?? [])
  .filter((plan) => plan.cadence === 'ერთ ვიდეოზე')
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
  const t = await getTranslations({ locale, namespace: 'seo.servicesContentStudio' });

  const path = '/services/content-studio';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function ContentStudioPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesContentStudio"
        path="/services/content-studio"
        serviceType="Content Marketing Production"
        offers={aiContentVideoOffers}
      />
      <ServiceHero namespace="servicesContentStudio" />
      <ContentStudioShowcase />
      <ContentStudioTariffs pricingHref={ownerServiceUrl(locale, '/pricing')} contactHref={ownerContact} />
      <ServiceFaq namespace="servicesContentStudio" />
      <ServiceCTA namespace="servicesContentStudio" href={ownerContact} />
    </>
  );
}
