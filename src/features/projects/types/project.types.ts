export interface ProjectOwner {
  name: string;
  share: string;
  role?: string;
}

export type LocalizedText = { ka: string; en: string; ru?: string; de?: string; tr?: string; fa?: string; zh?: string };

/** Provenance of the registry record, not proof of a product capability. */
export type ProjectProvenance = "public-product" | "ainow-family-workflow";

export type ClassifiedProject = Project & { provenance: ProjectProvenance };

export type CaseCategory =
  | "ecommerce"
  | "cafe"
  | "dental"
  | "beauty"
  | "realestate"
  | "logistics"
  | "fitness"
  | "legal"
  | "auto"
  | "furniture"
  | "hr"
  | "cleaning";

export interface Project {
  slug: string;
  name: string;
  /** Localized display title (anonymous cases). Falls back to `name` when absent (public projects). */
  title?: LocalizedText;
  /** Industry key for anonymous cases: drives the card icon and accent color. */
  category?: CaseCategory;
  /** Localized short industry label shown as a pill on the card. */
  categoryLabel?: LocalizedText;
  /** One-paragraph executive summary (TL;DR) shown at the top of the case study. */
  summary?: LocalizedText;
  /** Headline before/after results, rendered as stat cards and a machine-readable list. */
  metrics?: { label: LocalizedText; before?: LocalizedText; after: LocalizedText }[];
  slogan: LocalizedText;
  description: LocalizedText;
  entity?: string;
  url?: string;
  model?: "PAID";
  businessModel?: LocalizedText;
  techStack: string[];
  status: "mvp" | "development" | "production";
  ownership?: ProjectOwner[];
  heroImage?: string;
  ogImage?: string;
  features?: LocalizedText[];
  timeline?: {
    target: LocalizedText;
    vision: LocalizedText;
  };
  kind?: "public" | "anonymous";
  caseStudy?: {
    context: LocalizedText;
    diagnostic: LocalizedText;
    problem: LocalizedText;
    solution: LocalizedText;
    steps: LocalizedText;
    impact: LocalizedText;
    limitations: LocalizedText;
    methodology: LocalizedText;
    anonymityNote: LocalizedText;
    faq: { q: LocalizedText; a: LocalizedText }[];
  };
}
