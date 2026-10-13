import { getTranslations } from 'next-intl/server';

type Props = {
  locale: string;
};

export async function AuctionServiceSchema({ locale }: Props) {
  const t = await getTranslations({
    locale,
    namespace: 'seo.servicesAuctionMarketing',
  });
  const tPage = await getTranslations({
    locale,
    namespace: 'servicesAuctionMarketing',
  });

  const url =
    locale === 'ka'
      ? 'https://ainow.ge/services/auction-logistics-marketing'
      : `https://ainow.ge/${locale}/services/auction-logistics-marketing`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: t('title'),
    description: t('description'),
    url,
    serviceType: 'Marketing for Auto Auction Logistics Companies',
    category: 'Digital Marketing Services',
    provider: {
      '@type': 'Organization',
      name: 'aiNOW',
      legalName: 'AI NOW LLC / შპს ეი აი ნაუ',
      url: 'https://ainow.ge',
      logo: 'https://ainow.ge/logo.png',
      sameAs: [
        'https://www.facebook.com/ainow.ge',
        'https://www.instagram.com/ainow.ge/',
        'https://t.me/ainow_ge',
        'https://www.linkedin.com/company/ainowgeorgia',
        'https://github.com/ainowgeorgia',
      ],
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GE',
        addressLocality: 'Tbilisi',
      },
    },
    areaServed: [
      { '@type': 'Country', name: 'Georgia' },
      { '@type': 'City', name: 'Tbilisi', containedInPlace: { '@type': 'Country', name: 'Georgia' } },
      { '@type': 'City', name: 'Batumi', containedInPlace: { '@type': 'Country', name: 'Georgia' } },
      { '@type': 'City', name: 'Kutaisi', containedInPlace: { '@type': 'Country', name: 'Georgia' } },
      { '@type': 'City', name: 'Rustavi', containedInPlace: { '@type': 'Country', name: 'Georgia' } },
      { '@type': 'City', name: 'Poti', containedInPlace: { '@type': 'Country', name: 'Georgia' } },
      { '@type': 'Country', name: 'Armenia' },
      { '@type': 'Country', name: 'Azerbaijan' },
    ],
    availableLanguage: ['ka', 'en', 'ru'],
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Auto auction logistics companies, vehicle import shippers, salvage car logistics operators',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: tPage('pricingTitle'),
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: tPage('pricing_foundation_name'),
            description: tPage('pricing_foundation_tagline'),
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            description: tPage('pricingNegotiable'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: tPage('pricing_acceleration_name'),
            description: tPage('pricing_acceleration_tagline'),
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            description: tPage('pricingNegotiable'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: tPage('pricing_domination_name'),
            description: tPage('pricing_domination_tagline'),
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            description: tPage('pricingNegotiable'),
          },
        },
      ],
    },
    keywords: t('keywords'),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
