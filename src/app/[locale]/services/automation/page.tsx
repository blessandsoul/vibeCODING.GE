import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { getPageContentLocale } from '@/i18n/seo-locales';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { AutomationNodes } from '@/features/services/components/AutomationNodes';
import { AutomationShowcase } from '@/features/services/components/AutomationShowcase';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { RelatedCases } from '@/features/projects/components/RelatedCases';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const contentLocale = getPageContentLocale('/services/automation', locale);
  const t = await getTranslations({ locale: contentLocale, namespace: 'seo.servicesAutomation' });

  const path = '/services/automation';
  return ownerServiceMetadata({
    locale: contentLocale,
    path,
    title: t('title'),
    description: t('description'),
  });
}
export default async function AutomationPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesAutomation"
        path="/services/automation"
        serviceType="Business Process Automation"
      />
      <ServiceHero namespace="servicesAutomation" />
      <AutomationNodes />
      <AutomationShowcase />
      <SeoArticle namespace="servicesAutomation" />
      <ServiceFaq namespace="servicesAutomation" />
      <RelatedCases serviceSlug="automation" locale={locale} />
      <ServiceCTA namespace="servicesAutomation" href={ownerContact} />
    </>
  );
}
