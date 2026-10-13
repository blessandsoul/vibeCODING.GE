import type { Metadata } from 'next';
import { PRODUCT_OG_IMAGE } from "@/lib/product-og";
import { buildAlternates, pageRobots } from '@/i18n/seo-locales';
import { previewRobots } from '@/lib/landing-clone-preview';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { AutomationNodes } from '@/features/services/components/AutomationNodes';
import { AutomationShowcase } from '@/features/services/components/AutomationShowcase';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { RelatedCases } from '@/features/projects/components/RelatedCases';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { getProductSecondaryLocale, getProductSecondaryTemplateCopy, PRODUCT_SECONDARY_LOCALES, type ProductSecondaryKind } from '@/features/services/components/product-secondary-copy';

const PRODUCT_NAME = 'vibeCODING';

export function productSecondaryMetadata(locale: string, kind: ProductSecondaryKind): Metadata {
  const safeLocale = getProductSecondaryLocale(locale);
  const copy = getProductSecondaryTemplateCopy(safeLocale, kind);
  const path = `/${kind}`;
  return {
    title: { absolute: `${copy.seoTitle} | ${PRODUCT_NAME}` },
    description: copy.seoDescription,
    alternates: buildAlternates(path, locale, PRODUCT_SECONDARY_LOCALES),
    robots: previewRobots(pageRobots(path, locale, PRODUCT_SECONDARY_LOCALES)),
    openGraph: { title: copy.seoTitle, description: copy.seoDescription, images: [PRODUCT_OG_IMAGE] },
  };
}

export function ProductSecondaryPage({ locale, kind }: { locale: string; kind: ProductSecondaryKind }) {
  const copy = getProductSecondaryTemplateCopy(locale, kind);
  return (
    <>
      <ServiceSchemaForPage
        locale={getProductSecondaryLocale(locale)}
        copy={copy.schema}
        path={`/${kind}`}
        serviceType={kind === 'integrations' ? `${PRODUCT_NAME} integrations` : `${PRODUCT_NAME} security and data controls`}
      />
      <ServiceHero copy={copy.hero} />
      <AutomationNodes copy={copy.nodes} />
      <AutomationShowcase cards={copy.showcase.cards} steps={copy.showcase.steps} howTitle={copy.showcase.howTitle} />
      <SeoArticle data={copy.article} />
      <ServiceFaq title={copy.faqTitle} items={copy.faq} />
      <RelatedCases serviceSlug={kind} locale={locale} />
      <ServiceCTA copy={copy.cta} />
    </>
  );
}
