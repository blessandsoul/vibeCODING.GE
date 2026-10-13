import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { ConsultingBlocks } from '@/features/services/components/ConsultingBlocks';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesConsulting' });

  const path = '/services/consulting';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function ConsultingPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesConsulting"
        path="/services/consulting"
        serviceType="AI Consulting"
        offers={[
          { name: 'AI Readiness Assessment', price: '500', priceCurrency: 'GEL', unitText: 'per session' },
        ]}
      />
      <ServiceHero namespace="servicesConsulting" />
      <ConsultingBlocks />
      <ServiceCTA namespace="servicesConsulting" href={ownerContact} />
    </>
  );
}
