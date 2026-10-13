import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { VoiceAgentsShowcase } from '@/features/services/components/VoiceAgentsShowcase';
import { VoiceUseCases } from '@/features/services/components/VoiceUseCases';
import { VoiceFAQ } from '@/features/services/components/VoiceFAQ';
import { VoiceFAQSchema } from '@/features/services/components/VoiceFAQSchema';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { BreadcrumbSchema } from '@/features/services/components/BreadcrumbSchema';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesVoiceAgents' });

  const path = '/services/voice-agents';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
  });
}

export default async function VoiceAgentsPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesVoiceAgents"
        path="/services/voice-agents"
        serviceType="AI Voice Agent Development"
      />
      <BreadcrumbSchema
        locale={locale}
        servicePath="/services/voice-agents"
        serviceNamespace="servicesVoiceAgents"
      />
      <VoiceFAQSchema locale={locale} />
      <ServiceHero namespace="servicesVoiceAgents" />
      <VoiceAgentsShowcase />
      <VoiceUseCases contactHref={ownerContact} />
      <VoiceFAQ />
      <ServiceCTA namespace="servicesVoiceAgents" href={ownerContact} />
    </>
  );
}
