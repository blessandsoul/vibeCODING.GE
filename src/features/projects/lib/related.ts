import type { CaseCategory, ProjectProvenance } from "../types/project.types";

type CaseRelation = { nicheSlug?: string; serviceSlug: string; provenance: ProjectProvenance };

/**
 * Maps each anonymized workflow industry to topical on-site pages. These are
 * family-workflow relations, not proof that the target product delivered the
 * underlying anonymous record.
 */
export const CASE_LINKS: Record<CaseCategory, CaseRelation> = {
  ecommerce: { nicheSlug: "ai-chatbot-online-maghaziebistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  cafe: { nicheSlug: "ai-chatbot-restornebistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  dental: { nicheSlug: "ai-chatbot-stomatologiistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  beauty: { nicheSlug: "ai-chatbot-silamazis-salonebistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  realestate: { nicheSlug: "ai-chatbot-udzravi-qonebistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  logistics: { serviceSlug: "auction-logistics-marketing", provenance: "ainow-family-workflow" },
  fitness: { nicheSlug: "ai-chatbot-fitnesistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  legal: { nicheSlug: "ai-chatbot-iuristebistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  auto: { nicheSlug: "ai-chatbot-avtoservisistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  furniture: { nicheSlug: "ai-chatbot-interieris-dizainistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
  hr: { serviceSlug: "automation", provenance: "ainow-family-workflow" },
  cleaning: { nicheSlug: "ai-chatbot-dasuftavebistvis", serviceSlug: "bots", provenance: "ainow-family-workflow" },
};

/**
 * Locale-prefixed href to the primary topical page for a family workflow: the
 * niche landing (query-targeted) when present, else the parent service page.
 * This relation is navigational context, not a verified product-case claim.
 */
export function primaryRelatedHref(category: CaseCategory | undefined, locale: string): string | null {
  if (!category) return null;
  const link = CASE_LINKS[category];
  const path = link.nicheSlug ? `/${link.nicheSlug}` : `/services/${link.serviceSlug}`;
  return `/${locale}${path}`;
}

/** Categories (hence cases) that belong to a given service slug, for the reverse "related cases" block. */
export function categoriesForService(serviceSlug: string): CaseCategory[] {
  return (Object.keys(CASE_LINKS) as CaseCategory[]).filter(
    (c) => CASE_LINKS[c].serviceSlug === serviceSlug && CASE_LINKS[c].provenance === "ainow-family-workflow",
  );
}
