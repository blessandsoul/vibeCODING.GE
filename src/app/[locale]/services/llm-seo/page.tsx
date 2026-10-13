import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { LLMSEOShowcase } from '@/features/services/components/LLMSEOShowcase';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesLlmSeo' });

  const path = '/services/llm-seo';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function LlmSeoPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesLlmSeo"
        path="/services/llm-seo"
        serviceType="Generative Engine Optimization"
      />
      <ServiceHero namespace="servicesLlmSeo" />
      <LLMSEOShowcase />
      <ServiceCTA namespace="servicesLlmSeo" href={ownerContact} />
    </>
  );
}
