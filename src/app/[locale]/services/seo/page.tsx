import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { SEOShowcase } from '@/features/services/components/SEOShowcase';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesSeo' });

  const path = '/services/seo';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function SeoPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesSeo"
        path="/services/seo"
        serviceType="Search Engine Optimization"
      />
      <ServiceHero namespace="servicesSeo" />
      <SEOShowcase />
      <SeoArticle namespace="servicesSeo" />
      <ServiceFaq namespace="servicesSeo" />
      <ServiceCTA namespace="servicesSeo" href={ownerContact} />
    </>
  );
}
