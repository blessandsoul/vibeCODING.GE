import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { projects } from "@/features/projects/data/projects";
import { categoriesForService } from "../lib/related";
import { categoryVisual } from "../lib/categories";
import { Ico } from "@/components/common/Ico";
import { getCaseProvenanceCopy } from "../lib/case-provenance";

type Lang = "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";

/**
 * Related family-workflow examples for a service page. The topical link is kept
 * for navigation, but the records are not presented as verified target-product proof.
 */
export async function RelatedCases({
  serviceSlug,
  locale,
}: {
  serviceSlug: string;
  locale: string;
  emptyHeading?: string;
  emptyMessage?: string;
  emptyLinkLabel?: string;
  emptyLinkHref?: string;
}) {
  const cats = categoriesForService(serviceSlug);
  const provenanceCopy = getCaseProvenanceCopy(locale);
  const cases = projects.filter(
    (p) => p.provenance === "ainow-family-workflow" && p.category && cats.includes(p.category),
  );
  const t = await getTranslations({ locale, namespace: "projects" });
  if (cases.length === 0) return null;

  const lang = locale as Lang;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
            {provenanceCopy.familyHeading}
        </h2>
        <Link href="/projects" className="shrink-0 text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline">
          {t("title")}
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((p) => {
          const cat = categoryVisual(p.category);
          const title = p.title?.[lang] ?? p.title?.en ?? p.name;
          const desc = p.description[lang] ?? p.description.en;
          const categoryLabel = p.categoryLabel?.[lang] ?? p.categoryLabel?.en;
          const label = categoryLabel ? `${provenanceCopy.familyBadge} · ${categoryLabel}` : provenanceCopy.familyBadge;
          const displayedDescription = `${provenanceCopy.familyDescriptionPrefix} ${desc}`;
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block dodo-glass-card p-6 transition-colors hover:border-blue-500/40 dark:hover:border-blue-400/30"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${cat.accent}14`, color: cat.accent }}
              >
                <Ico name={cat.icon} className="h-5 w-5" />
              </span>
              {label && (
                <p
                  className="mt-3 text-xs font-semibold uppercase tracking-wide"
                  style={{ color: cat.accent }}
                >
                  {label}
                </p>
              )}
              <h3 className="mt-1 font-display text-base font-semibold leading-snug text-slate-950 dark:text-white line-clamp-2">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">{displayedDescription}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
