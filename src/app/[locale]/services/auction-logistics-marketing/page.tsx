import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { AuctionHeroBackground } from '@/features/services/components/AuctionHeroBackground';
import { AuctionMarketingShowcase } from '@/features/services/components/AuctionMarketingShowcase';
import { AuctionRouteMap } from '@/features/services/components/AuctionRouteMap';
import { VinCalculator } from '@/features/services/components/VinCalculator';
import { AuctionComparison } from '@/features/services/components/AuctionComparison';
import { AuctionWhyNiche } from '@/features/services/components/AuctionWhyNiche';
import { AuctionPricingTiers } from '@/features/services/components/AuctionPricingTiers';
import { AuctionFAQ } from '@/features/services/components/AuctionFAQ';
import { AuctionFAQSchema } from '@/features/services/components/AuctionFAQSchema';
import { AuctionAuthorBio } from '@/features/services/components/AuctionAuthorBio';
import { AuctionRelatedServices } from '@/features/services/components/AuctionRelatedServices';
import { AuctionServiceSchema } from '@/features/services/components/AuctionServiceSchema';
import { BreadcrumbSchema } from '@/features/services/components/BreadcrumbSchema';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { StickyMobileCTA } from '@/features/services/components/StickyMobileCTA';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { RelatedCases } from '@/features/projects/components/RelatedCases';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.servicesAuctionMarketing' });

  const path = '/services/auction-logistics-marketing';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    other: { 'article:author': 'Andrew Altair' },
  });
}

export default async function AuctionLogisticsMarketingPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  return (
    <>
      <AuctionServiceSchema locale={locale} />
      <BreadcrumbSchema locale={locale} />
      <AuctionFAQSchema locale={locale} />
      <ServiceHero
        namespace="servicesAuctionMarketing"
        backgroundSlot={<AuctionHeroBackground />}
      />
      <AuctionMarketingShowcase />
      <AuctionRouteMap />
      <VinCalculator />
      <AuctionComparison />
      <AuctionWhyNiche />
      <AuctionPricingTiers contactHref={ownerContact} />
      <AuctionFAQ />
      <AuctionAuthorBio />
      <AuctionRelatedServices />
      <RelatedCases serviceSlug="auction-logistics-marketing" locale={locale} />
      <div data-final-cta className="pb-20 md:pb-0">
        <ServiceCTA namespace="servicesAuctionMarketing" href={ownerContact} />
      </div>
      <StickyMobileCTA href={ownerContact} />
    </>
  );
}
