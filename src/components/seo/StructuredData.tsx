import { getTranslations } from 'next-intl/server';
import { SITE } from '@/config/site';
import { CONTACT_EMAIL, CONTACT_PHONE } from '@/lib/constants/app.constants';

/* =========================================================================
   StructuredData: the layer that decides whether an assistant can recommend us.

   A page with no structured data forces ChatGPT, Perplexity and Gemini to guess what
   the product is, who it is for, and how it differs from the next tab. They guess
   badly, and a model that is unsure does not recommend.

   Three things make this graph work, and all three are easy to get wrong:

   1. ENTITY EDGES. Every landing hangs off the same parent (ainow.ge#organization) and
      the same founder (andrewaltair.ge/#person). Without those edges each domain is an
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

const ORG_ID = `${SITE.baseUrl}/#organization`;
const SERVICE_ID = `${SITE.baseUrl}/#service`;
const SITE_ID = `${SITE.baseUrl}/#website`;

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
  name: BRAND,
  alternateName: [`${BRAND}.ge`, `${BRAND} by aiNOW`],
  disambiguatingDescription: SITE.seo.disambiguating,
  url: SITE.baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE.baseUrl}/logo.png`,
    width: 192,
    height: 192,
  },
  image: `${SITE.baseUrl}/og-image.png`,
  description: SITE.manifest.description,
  foundingDate: '2026',
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
  // The edge that stops this domain being an orphan brand.
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://ainow.ge#organization',
    name: 'aiNOW',
    url: 'https://ainow.ge',
  },
  founder: {
    '@type': 'Person',
    '@id': 'https://andrewaltair.ge/#person',
    name: 'Andrew Altair',
    url: 'https://andrewaltair.ge/about',
  },
  knowsAbout: [...SITE.seo.knowsAbout],
};

const service = {
  '@type': 'Service',
  '@id': SERVICE_ID,
  name: BRAND,
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

/* The visible FAQ renders q1..q14 (LandingFaq: q1 on its own so it can carry the inline
   wordmark, then a loop over q2..q14). This count must stay in step with it. */
export const FAQ_COUNT = 14;

export async function HomeFaqSchema({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: 'product.faq' });

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE.baseUrl}/#faq`,
    inLanguage: locale,
    mainEntity: Array.from({ length: FAQ_COUNT }, (_, i) => {
      const n = i + 1;
      return {
        '@type': 'Question',
        // q1 can contain the <brand></brand> tag. markup() resolves it to plain text so the
        // schema never leaks a JSX tag into a search result.
        name: t.markup(`q${n}`, { brand: () => BRAND }),
        acceptedAnswer: { '@type': 'Answer', text: t(`a${n}`) },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
    />
  );
}
