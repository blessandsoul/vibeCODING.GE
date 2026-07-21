import { getTranslations } from 'next-intl/server';
import { SITE } from '@/config/site';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants/app.constants';

/* =========================================================================
   StructuredData: the layer that decides whether an assistant can recommend us.

   A page with no structured data forces ChatGPT, Perplexity and Gemini to guess what
   the product is, who it is for, and how it differs from the next tab. They guess
   badly, and a model that is unsure does not recommend.

   Three things make this graph work, and all three are easy to get wrong:

   1. ENTITY EDGES. Every product points to the same aiNOW provider entity. Without that edge each domain is an
      orphan brand with no history, and an assistant treats it as an unknown.

   2. DISAMBIGUATION. `disambiguatingDescription` exists to say what we are NOT. It is the
      only field that stops a model confusing aiCALL with a US voice-AI startup, or
      vibecoding.ge with the vibe-coding fad itself.

   3. THE BOUNDARY. Each landing names the sibling that owns the adjacent job. That is the
      anti-cannibalization signal for humans, and for a model it is the thing that lets it
      route a question to the right one of our six domains instead of picking at random.

   The FAQPage is generated from the SAME message keys the visible accordion renders, per
   locale, so the schema can never drift from the page. That is deliberate: a FAQPage that
   contradicts the visible text is worse than none.
   ========================================================================= */

const ORG_ID = 'https://ainow.ge#organization';
const SERVICE_ID = `${SITE.baseUrl}/#service`;
const SITE_ID = `${SITE.baseUrl}/#website`;
const FAQ_LIMIT = 5;
const CONTENT_MODIFIED = '2026-07-14';
const AINOW_SAME_AS = [
  'https://www.facebook.com/ainow.ge',
  'https://www.instagram.com/ainow.ge/',
  'https://t.me/ainow_ge',
  'https://www.linkedin.com/company/ainowgeorgia',
  'https://github.com/ainowgeorgia',
] as const;

const BRAND = SITE.wordmark.prefix + SITE.wordmark.mark;
const LOCALE_TAGS = SITE.locales.map((l) => ({ ka: 'ka-GE', en: 'en-US', ru: 'ru-RU' }[l] ?? l));

// site.ts is `as const`, so areaServed narrows to the literal "GE" on the Georgian landings and
// "WORLD" on the export ones. Comparing a literal to the other literal is a type error even
// though the code is correct, so widen it once here rather than casting at each use.
const AREA: string = SITE.seo.areaServed;

/* Only the two export landings publish a price, so this file compiles against six different
   SITE shapes and has to read the field as genuinely optional. A landing with no public price
   emits no Offer, rather than an Offer with a price of zero, which a model would read as free. */
type PublicOffer = { name: string; price: string; currency: string; description: string };
const OFFER = (SITE.seo as { offer?: PublicOffer }).offer;

const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'aiNOW',
  legalName: 'შპს ეი აი ნაუ',
  alternateName: 'AI NOW Georgia',
  disambiguatingDescription: 'AI agency in Georgia, the country, serving Georgian businesses.',
  url: 'https://ainow.ge',
  logo: {
    '@type': 'ImageObject',
    url: 'https://ainow.ge/logo.png',
    width: 192,
    height: 192,
  },
  sameAs: [...AINOW_SAME_AS],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tornike Eristavi St. 3',
    addressLocality: 'Tbilisi',
    addressCountry: 'GE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: CONTACT_EMAIL.toLowerCase(),
    telephone: CONTACT_PHONE,
    contactType: 'sales',
    availableLanguage: [...SITE.locales],
  },
};

const service = {
  '@type': 'Service',
  '@id': SERVICE_ID,
  name: BRAND,
  brand: { '@type': 'Brand', name: BRAND },
  serviceType: SITE.seo.serviceType,
  url: SITE.baseUrl,
  image: `${SITE.baseUrl}/og-image.png`,
  description: SITE.manifest.description,
  provider: { '@id': ORG_ID },
  areaServed:
    AREA === 'GE' ? { '@type': 'Country', name: 'Georgia' } : { '@type': 'Place', name: 'Worldwide' },
  audience: {
    '@type': 'BusinessAudience',
    name: SITE.seo.audienceName,
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: BRAND,
    itemListElement: SITE.seo.features.map((f) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: f },
    })),
  },
  // A model asked "how much" answers from this or it answers "contact them for a quote", which
  // is the answer that loses the recommendation.
  ...(OFFER
    ? {
        offers: {
          '@type': 'Offer',
          name: OFFER.name,
          price: OFFER.price,
          priceCurrency: OFFER.currency,
          description: OFFER.description,
          availability: 'https://schema.org/InStock',
          url: SITE.baseUrl,
          seller: { '@id': ORG_ID },
        },
      }
    : {}),
  // Stated limits are a trust signal for a human and a routing signal for a model. A page
  // that admits what it cannot do is the one an assistant can safely recommend.
  disambiguatingDescription: `${SITE.seo.boundary} Known limits: ${SITE.seo.limits.join(' ')}`,
};

const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: BRAND,
  url: SITE.baseUrl,
  inLanguage: LOCALE_TAGS,
  publisher: { '@id': ORG_ID },
  author: { '@id': ORG_ID },
  dateModified: CONTENT_MODIFIED,
};

const graph = {
  '@context': 'https://schema.org',
  '@graph': [organization, service, website],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export async function HomeFaqSchema({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'product.faq' });

  /* The visible FAQ and its semantic contract use the same five translated pairs. */
  const items: object[] = [];
  for (let n = 1; n <= FAQ_LIMIT && t.has(`q${n}`) && t.has(`a${n}`); n += 1) {
    items.push({
      '@type': 'Question',
      // q1 can contain the <brand></brand> tag. markup() resolves it to plain text so the
      // schema never leaks a JSX tag into a search result.
      name: t.markup(`q${n}`, { brand: () => BRAND }),
      acceptedAnswer: { '@type': 'Answer', text: t(`a${n}`) },
    });
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE.baseUrl}/#faq`,
    inLanguage: locale,
    mainEntity: items,
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}
