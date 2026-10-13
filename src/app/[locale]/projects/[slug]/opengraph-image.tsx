import { CaseOgImage, ogContentType, ogSize } from "@/features/projects/og/createCaseOgImage";

export const runtime = "nodejs";
export const alt = "aiNOW project";
export const size = ogSize;
export const contentType = ogContentType;

export async function generateStaticParams() {
  const { projects } = await import("@/features/projects/data/projects");
  const locales = ["ka", "en", "ru", "de", "tr", "fa", "zh"] as const;
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

export default CaseOgImage;
