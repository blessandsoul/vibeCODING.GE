import { getLocale } from "next-intl/server";
import { PRODUCT_OG_URL } from "@/lib/product-og";
import { CONTACT_PHONE, SITE_CONTENT_UPDATED } from "@/lib/constants/app.constants";
import { getAiNowHomeCopy } from "@/features/home/components/ainow/AiNowHomeCopy";
import { PRODUCT_BASE_URL, PRODUCT_FACTS } from "@/lib/product-public-facts";

const organizationSchema = {
  "@type": "Organization",
  name: PRODUCT_FACTS.name,
  "@id": `${PRODUCT_BASE_URL}#organization`,
  legalName: "შპს ეი აი ნაუ",
  alternateName: ["AI NOW Georgia"],
  disambiguatingDescription: PRODUCT_FACTS.purpose,
  url: PRODUCT_BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${PRODUCT_BASE_URL}/icon.svg`,
  },
  image: PRODUCT_OG_URL,
  slogan: "AI that works",
  description: PRODUCT_FACTS.purpose,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tornike Eristavi St. 3",
    addressLocality: "Tbilisi",
    addressCountry: "GE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "CONTACT@aiNOW.GE",
    telephone: CONTACT_PHONE,
    contactType: "sales",
    availableLanguage: ["ka", "en", "ru"],
  },
  sameAs: ["https://ainow.ge"],
  knowsAbout: [
    "Artificial Intelligence",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Chatbot Development",
    "AI Automation",
    "AI Marketing",
    "AI Content Production",
    "Generative Engine Optimization",
    "LLM SEO",
  ],
  // Reciprocal cross-domain entity edge: aiNOW's founder is Andrew Altair
  // (andrewaltair.ge#person). Pairs with personSchema.worksFor -> ainow.ge#organization
  // on andrewaltair.ge so Google associates the two domains as one entity graph.
  founder: {
    "@type": "Person",
    "@id": "https://andrewaltair.ge/#person",
    name: "Andrew Altair",
    url: "https://andrewaltair.ge/about",
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${PRODUCT_BASE_URL}#website`,
  name: PRODUCT_FACTS.name,
  alternateName: PRODUCT_FACTS.name,
  url: PRODUCT_BASE_URL,
  inLanguage: ["ka-GE", "en-US", "ru-RU"],
  publisher: { "@id": `${PRODUCT_BASE_URL}#organization` },
  // WebSite is a CreativeWork, so `author` and `dateModified` are valid properties here.
  // They are also the exact two things Google's E-E-A-T guidance asks a page to state (who is
  // behind this, and when was it last touched) and the two our own audit engine looks for
  // (seo_engine.check_eeat_signals reads author + datePublished/dateModified out of any JSON-LD
  // node). A crawl on 2026-07-11 found 20 of 20 non-blog pages failing that check on
  // "no clear author; no date": the founder existed only as Organization.founder, which is an
  // ownership edge, not an authorship one. Blog posts already passed, they carry their own
  // Article node with a Person author and a datePublished.
  author: {
    "@type": "Person",
    "@id": "https://andrewaltair.ge/#person",
    name: "Andrew Altair",
    url: "https://andrewaltair.ge/about",
    jobTitle: "Founder, aiNOW",
    worksFor: { "@id": "https://ainow.ge#organization" },
  },
  dateModified: SITE_CONTENT_UPDATED,
};

const localBusinessSchema = {
  "@type": "ProfessionalService",
  "@id": `${PRODUCT_BASE_URL}#localbusiness`,
  name: PRODUCT_FACTS.name,
  url: PRODUCT_BASE_URL,
  image: PRODUCT_OG_URL,
  email: "CONTACT@aiNOW.GE",
  telephone: CONTACT_PHONE,
  sameAs: ["https://ainow.ge"],
  slogan: "AI that works",
  description: PRODUCT_FACTS.purpose,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tornike Eristavi St. 3",
    addressLocality: "Tbilisi",
    addressRegion: "Tbilisi",
    addressCountry: "GE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.7151,
    longitude: 44.8271,
  },
  priceRange: "$$",
  areaServed: [
    { "@type": "Country", name: "Georgia" },
    { "@type": "Country", name: "Armenia" },
    { "@type": "Country", name: "Azerbaijan" },
  ],
  // `knowsAbout`, not `serviceType`: serviceType's schema.org domain is Service, and this node is a
  // ProfessionalService (a LocalBusiness), so serviceType here was an invalid-property markup error.
  knowsAbout: [
    "AI Development",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Consulting",
    "Chatbot Development",
    "AI Content Production",
  ],
};

// One @graph instead of three standalone scripts: a single @context, and the nodes are linked by
// @id (WebSite.publisher -> Organization#organization), which is the form schema validators prefer.
// The English landing page must not carry Georgian-only legal/display strings in its structured
// data, because ad crawlers use the whole landing document when checking language consistency.
function getSiteGraph(locale: string) {
  const english = locale === "en";
  const organization = english
    ? { ...organizationSchema, legalName: "AI NOW LLC" }
    : organizationSchema;
  const website = english
    ? { ...websiteSchema, inLanguage: ["en-US"] }
    : websiteSchema;

  return {
    "@context": "https://schema.org",
    "@graph": [organization, localBusinessSchema, website],
  };
}

export async function StructuredData(
  { locale: explicitLocale }: { locale?: string } = {},
): Promise<React.ReactElement> {
  const resolvedLocale = explicitLocale ?? (await getLocale());
  const siteGraph = getSiteGraph(resolvedLocale);
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(siteGraph),
      }}
    />
  );
}

// Home-only FAQPage, built from the same copy source as the visible accordion.
export async function HomeFaqSchema({ locale }: { locale: string }) {
  const items = getAiNowHomeCopy(locale).faq.items;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.values(items).map((item) => {
      return {
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      };
    }),
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema),
      }}
    />
  );
}
