import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { WebsitesShowcase } from '@/features/services/components/WebsitesShowcase';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesWebsites' });

  const path = '/services/websites';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

export default async function WebsitesPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesWebsites"
        path="/services/websites"
        serviceType="Web Development"
        offers={[
          { name: "Website", price: "2000", unitText: "project" },
          { name: "E-commerce", price: "4000", unitText: "project" },
          { name: "Platform", price: "5000", unitText: "project" },
        ]}
      />
      <ServiceHero namespace="servicesWebsites" />
      <WebsitesShowcase />
      <SeoArticle namespace="servicesWebsites" />
      <ServiceFaq namespace="servicesWebsites" />
      <ServiceCTA namespace="servicesWebsites" href={ownerContact} />
    </>
  );
}
