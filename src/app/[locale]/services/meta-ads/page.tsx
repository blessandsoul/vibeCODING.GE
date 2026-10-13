import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { MetaAdsShowcase } from '@/features/services/components/MetaAdsShowcase';
import { MetaAdsPricingTiers } from '@/features/services/components/MetaAdsPricingTiers';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesMetaAds' });

  const path = '/services/meta-ads';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function MetaAdsPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesMetaAds"
        path="/services/meta-ads"
        serviceType="Social Media Advertising"
      />
      <ServiceHero namespace="servicesMetaAds" />
      <MetaAdsShowcase />
      <MetaAdsPricingTiers contactHref={ownerContact} />
      <SeoArticle namespace="servicesMetaAds" />
      <ServiceFaq namespace="servicesMetaAds" />
      <ServiceCTA namespace="servicesMetaAds" href={ownerContact} />
    </>
  );
}
