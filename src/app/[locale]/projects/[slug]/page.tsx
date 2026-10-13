import type { Metadata } from "next";
import { AiNowDisclosure } from "@/features/home/components/ainow/AiNowDisclosure";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject } from "@/features/projects/data/projects";
import type { LocalizedText } from "@/features/projects/types/project.types";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import { buildAlternates, getProjectLocales } from "@/i18n/seo-locales";
import { getTranslations } from "next-intl/server";
import { Ico } from "@/components/common/Ico";
import { categoryVisual } from "@/features/projects/lib/categories";
import { primaryRelatedHref } from "@/features/projects/lib/related";
import { getCaseProvenanceCopy } from "@/features/projects/lib/case-provenance";
import { APP_DOMAIN } from "@/lib/constants/app.constants";
import { targetAuxiliaryMetadata } from "@/lib/target-auxiliary-seo";

// Projects are a finite registry; reject slugs outside the generated set.
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const { projects } = await import('@/features/projects/data/projects');
  const locales = ['ka', 'en', 'ru', 'de', 'tr', 'fa', 'zh'] as const;
  return locales.flatMap(locale => projects.map(p => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const lang = (locale as "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh");
  const displayName = project.title?.[lang] ?? project.title?.en ?? project.name;
  const provenanceCopy = getCaseProvenanceCopy(locale);
  const metadataName = project.provenance === "ainow-family-workflow"
    ? `${provenanceCopy.familyBadge}: ${displayName}`
    : displayName;
  const title = `${metadataName}: ${project.slogan[lang] ?? project.slogan.en}`.replace(/\s*\|\s*aiNOW\s*$/i, '');
  const description = project.provenance === "ainow-family-workflow"
    ? `${provenanceCopy.familyDisclosure} ${project.description[lang] ?? project.description.en}`
    : project.description[lang] ?? project.description.en;
  const path = `/projects/${slug}`;
  const availableLocales = getProjectLocales(project);
  const alternates = buildAlternates(path, locale, availableLocales);

  const familyMetadata = targetAuxiliaryMetadata({ locale, path, title, description, alternates });
  return {
    ...familyMetadata,
    openGraph: { ...familyMetadata.openGraph, ...(project.ogImage && { images: [{ url: project.ogImage, width: 1200, height: 630 }] }) },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const lang = locale as "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";
  const path = `/projects/${slug}`;
  const availableLocales = getProjectLocales(project);
  const alternates = buildAlternates(path, locale, availableLocales);
  const displayName = project.title?.[lang] ?? project.title?.en ?? project.name;
  const sloganText = project.slogan[lang] ?? project.slogan.en;
  const descriptionText = project.description[lang] ?? project.description.en;
  const cat = categoryVisual(project.category);

  const SITE_URL = `https://${APP_DOMAIN}`;
  const OWNER_URL = "https://ainow.ge";
  const localePrefix = locale === "ka" ? "" : `/${locale}`;
  const caseUrl = alternates.canonical;
  const projectsUrl = buildAlternates("/projects", locale).canonical;
  const isAnonymous = project.kind === "anonymous";
  const provenanceCopy = getCaseProvenanceCopy(locale);
  const isFamilyWorkflow = project.provenance === "ainow-family-workflow";
  const provenanceDescription = isFamilyWorkflow
    ? `${provenanceCopy.familyDisclosure} ${descriptionText}`
    : descriptionText;

  const projectJsonLd = isAnonymous
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: displayName,
        description: provenanceDescription,
        url: caseUrl,
        isPartOf: { "@id": `${SITE_URL}#website` },
        author: {
          "@type": "Organization",
          name: "aiNOW",
          url: OWNER_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "aiNOW",
          url: OWNER_URL,
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": caseUrl },
      }
    : {
        "@context": "https://schema.org",
        "@type": "Service",
        name: displayName,
        description: descriptionText,
        url: caseUrl,
        isPartOf: { "@id": `${SITE_URL}#website` },
        provider: {
          "@type": "Organization",
          name: "aiNOW",
          url: OWNER_URL,
        },
      };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}${localePrefix}` },
      { "@type": "ListItem", position: 2, name: "Projects", item: projectsUrl },
      { "@type": "ListItem", position: 3, name: displayName, item: caseUrl },
    ],
  };

  const t = await getTranslations({ locale, namespace: "projects" });

  const getLocalized = (field: LocalizedText | undefined) => {
    if (!field) return "";
    return field[lang] ?? field.en ?? field.ru ?? "";
  };
  const sourceLocale = project.caseStudy?.context?.[lang] ? lang : "en";
  const sourceDirection = sourceLocale === "fa" ? "rtl" : "ltr";

  if (isAnonymous) {
    const contextText = getLocalized(project.caseStudy?.context);
    const diagnosticText = getLocalized(project.caseStudy?.diagnostic);
    const problemText = getLocalized(project.caseStudy?.problem);
    const solutionText = getLocalized(project.caseStudy?.solution);
    const stepsText = getLocalized(project.caseStudy?.steps);
    const impactText = getLocalized(project.caseStudy?.impact);
    const limitationsText = getLocalized(project.caseStudy?.limitations);
    const methodologyText = getLocalized(project.caseStudy?.methodology);
    const anonymityNoteText = getLocalized(project.caseStudy?.anonymityNote);
    const summaryText = getLocalized(project.summary);
    const categoryLabelText = getLocalized(project.categoryLabel);
    const metrics = (project.metrics ?? []).map((m) => ({
      label: isFamilyWorkflow ? `${provenanceCopy.familyResults} · ${getLocalized(m.label)}` : getLocalized(m.label),
      before: m.before ? getLocalized(m.before) : "",
      after: getLocalized(m.after),
    }));
    const relatedHref = primaryRelatedHref(project.category, locale);
    const familySummaryText = summaryText ? `${provenanceCopy.familyDisclosure} ${summaryText}` : provenanceCopy.familyDisclosure;
    const familyMethodologyText = methodologyText
      ? `${provenanceCopy.familyMethodology} ${methodologyText}`
      : provenanceCopy.familyMethodology;
    const familyAnonymityNoteText = `${provenanceCopy.familyDisclosure} ${anonymityNoteText}`;

    const sections = [
      { label: t("caseStudy.context"), text: contextText, icon: "solar:map-point-wave-bold-duotone" },
      { label: t("caseStudy.diagnostic"), text: diagnosticText, icon: "solar:magnifer-bold-duotone" },
      { label: t("caseStudy.problem"), text: problemText, icon: "solar:danger-triangle-bold-duotone" },
      { label: t("caseStudy.solution"), text: solutionText, icon: "solar:lightbulb-bolt-bold-duotone" },
      { label: t("caseStudy.steps"), text: stepsText, icon: "solar:checklist-minimalistic-bold-duotone" },
      { label: t("caseStudy.impact"), text: impactText, icon: "solar:chart-2-bold-duotone" },
    ].filter((s) => s.text);

    const shortLabel = t("inShort");
    const resultsLabel = `${provenanceCopy.familyResults} · ${t("results")}`;

    // Imported workflow records have no authored dates. A placeholder or build
    // timestamp cannot establish publication or a substantive content update.

    // Machine-readable body: TL;DR summary + the before/after results as plain text,
    // so the Article payload is self-contained for AI extraction (no invented numbers).
    const resultsText = metrics.length
      ? ` ${resultsLabel}: ${metrics
          .map((m) => (m.before ? `${m.label}: ${m.before} → ${m.after}` : `${m.label}: ${m.after}`))
          .join("; ")}.`
      : "";
    const articleBodyText =
      [familySummaryText, resultsText.trim()].filter(Boolean).join(" ").trim() || provenanceDescription;

    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: displayName,
      description: provenanceDescription,
      url: caseUrl,
      isPartOf: { "@id": `${SITE_URL}#website` },
      ...(familySummaryText ? { abstract: familySummaryText } : {}),
      articleBody: articleBodyText,
      articleSection: provenanceCopy.familyArticleSection,
      inLanguage: sourceLocale,
      isAccessibleForFree: true,
      keywords: [categoryLabelText, ...project.techStack].filter(Boolean).join(", "),
      about: { "@type": "Thing", name: `${categoryLabelText || displayName} · ${provenanceCopy.familyBadge}` },
      author: { "@type": "Organization", name: "aiNOW", url: OWNER_URL },
      publisher: { "@type": "Organization", name: "aiNOW", url: OWNER_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": caseUrl },
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
    };
    const faqJsonLd =
      project.caseStudy?.faq && project.caseStudy.faq.length > 0
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: sourceLocale,
            mainEntity: project.caseStudy.faq.map((f) => ({
              "@type": "Question",
              name: getLocalized(f.q),
              acceptedAnswer: { "@type": "Answer", text: `${provenanceCopy.familyFaq} ${getLocalized(f.a)}` },
            })),
          }
        : null;

    return (
      <div className="ainow-blueprint-bg min-h-dvh py-20 text-slate-900 dark:text-slate-100">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        <SectionContainer>
          {/* Back link */}
          <Link
            href={`/${locale}/projects`}
            className="text-sm text-slate-600 transition-colors duration-150 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
          >
            ← {t("backToProjects")}
          </Link>

          {/* Hero */}
          <header
            className="dodo-glass-card mt-8 overflow-hidden p-8 md:p-12"
            style={{ backgroundImage: `linear-gradient(135deg, ${cat.accent}0f, transparent 55%)` }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
                    <Ico name="solar:lock-keyhole-bold-duotone" className="h-3.5 w-3.5" />
                    {provenanceCopy.familyBadge}
                  </span>
                  {categoryLabelText && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: `${cat.accent}14`, color: cat.accent }}
                    >
                      <Ico name={cat.icon} className="h-3.5 w-3.5" />
                      {categoryLabelText}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <Ico name="solar:check-circle-bold-duotone" className="h-3.5 w-3.5" />
                    {provenanceCopy.familyStatus}
                  </span>
                </div>
                <h1 className="font-headline text-2xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-4xl">
                  {displayName}
                </h1>
                  <p className="max-w-2xl text-lg font-medium text-slate-600 dark:text-slate-300">
                  {sloganText}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t("updated")}: <span>—</span>
                </p>
              </div>
              <div className="hidden shrink-0 select-none md:block">
                <Ico name={cat.icon} className="h-16 w-16" style={{ color: `${cat.accent}2b` }} />
              </div>
            </div>

            {metrics.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {metrics.map((m) => (
                  <span
                    key={m.label}
                    className="dodo-glass-inset inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm"
                  >
                    <span className="font-semibold text-slate-950 dark:text-white">{m.after}</span>
                    <span className="text-slate-500 dark:text-slate-400">{m.label}</span>
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* TL;DR */}
          {summaryText && (
            <section className="dodo-glass-inset mt-6 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: cat.accent }} />
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {shortLabel}
                </span>
              </div>
              <p lang={sourceLocale} dir={sourceDirection} data-speakable className="mt-3 text-lg leading-relaxed text-slate-800 dark:text-slate-200">
                {familySummaryText}
              </p>
            </section>
          )}

          {/* Results: before to after */}
          {metrics.length > 0 && (
            <section className="mt-6">
              <h2 className="font-headline text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {resultsLabel}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {metrics.map((m) => (
                  <div key={m.label} className="dodo-glass-card p-5">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{m.label}</p>
                    {m.before && (
                      <p className="mt-3 text-sm text-slate-400 line-through decoration-slate-300 dark:text-slate-500 dark:decoration-slate-600">
                        {m.before}
                      </p>
                    )}
                    <p
                      className="mt-1 font-headline text-xl font-bold leading-tight"
                      style={{ color: cat.accent }}
                    >
                      {m.after}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 grid gap-12 lg:grid-cols-3">
            {/* Main content */}
            <div className="space-y-10 lg:col-span-2">
              {/* Narrative sections with rhythm */}
              <div className="space-y-6">
                {sections.map((s, i) => (
                  <section
                    key={s.label}
                    className="dodo-glass-card p-6 md:p-7"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${cat.accent}14`, color: cat.accent }}
                      >
                        <Ico name={s.icon} className="h-5 w-5" />
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-headline text-xs font-bold tabular-nums text-slate-400 dark:text-slate-500">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-headline text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                          {s.label}
                        </h2>
                      </div>
                    </div>
                    <p lang={sourceLocale} dir={sourceDirection} className="mt-3 whitespace-pre-line text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                      {s.text}
                    </p>
                  </section>
                ))}
              </div>

              {/* Tech stack */}
              <div className="dodo-glass-card p-6 md:p-7">
                <h2 className="font-headline text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {t("techStack")}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="dodo-glass-inset rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Honesty block: limitations + methodology */}
              {(limitationsText || methodologyText) && (
                <div className="dodo-glass-inset grid gap-6 rounded-2xl p-6 md:grid-cols-2 md:p-7">
                  {limitationsText && (
                    <div>
                      <h3 className="flex items-center gap-1.5 font-headline text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <Ico name="solar:shield-check-bold-duotone" className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                        {t("caseStudy.limitations")}
                      </h3>
                      <p lang={sourceLocale} dir={sourceDirection} className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{limitationsText}</p>
                    </div>
                  )}
                  {methodologyText && (
                    <div>
                      <h3 className="flex items-center gap-1.5 font-headline text-sm font-semibold text-slate-800 dark:text-slate-200">
                        <Ico name="solar:graph-up-bold-duotone" className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                        {t("caseStudy.methodology")}
                      </h3>
                      <p lang={sourceLocale} dir={sourceDirection} className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{familyMethodologyText}</p>
                    </div>
                  )}
                </div>
              )}

              {/* FAQ content remains server-rendered; the disclosure animates its height. */}
              {project.caseStudy?.faq && project.caseStudy.faq.length > 0 && (
                <section className="space-y-3">
                  <h2 className="font-headline text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                    {t("caseStudy.faq")}
                  </h2>
                  <div className="dodo-glass-card divide-y divide-black/[0.08] overflow-hidden dark:divide-white/10">
                    {project.caseStudy.faq.map((faqItem, i) => (
                      <AiNowDisclosure key={i} title={getLocalized(faqItem.q)} className="px-5">
                        <p lang={sourceLocale} dir={sourceDirection} className="pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {provenanceCopy.familyFaq} {getLocalized(faqItem.a)}
                        </p>
                      </AiNowDisclosure>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* NDA Explanation Card */}
              <div className="dodo-glass-inset space-y-4 rounded-xl border-amber-500/10 p-6">
                <h3 className="flex items-center gap-1.5 font-headline text-md font-semibold text-amber-700 dark:text-amber-300">
                  <Ico name="solar:lock-keyhole-bold-duotone" className="h-5 w-5" />
                  {provenanceCopy.familyBadge}
                </h3>
                <p lang={sourceLocale} dir={sourceDirection} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {familyAnonymityNoteText}
                </p>
              </div>

              {/* Related family workflow / niche (topical navigation, not product proof) */}
              {relatedHref && (
                <Link
                  href={relatedHref}
                  className="dodo-glass-box block rounded-xl p-6 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {provenanceCopy.relatedFamily}
                  </p>
                  <p className="mt-2 flex items-center justify-between gap-2 font-headline font-semibold text-slate-950 dark:text-white">
                    <span className="flex items-center gap-2">
                      <Ico name={cat.icon} className="h-5 w-5" style={{ color: cat.accent }} />
                      {categoryLabelText || displayName}
                    </span>
                    <Ico
                      name="solar:arrow-right-bold-duotone"
                      className="h-4 w-4"
                      style={{ color: cat.accent }}
                    />
                  </p>
                </Link>
              )}

              {/* CTA Button */}
              <Button
                asChild
                className="ainow-btn-primary w-full py-6 text-md font-medium"
              >
                <Link href={`/${locale}/contact`}>
                  {provenanceCopy.familyCta}
                </Link>
              </Button>
            </div>
          </div>
        </SectionContainer>
      </div>
    );
  }

  return (
    <div className="ainow-blueprint-bg min-h-dvh py-20 text-slate-900 dark:text-slate-100">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SectionContainer>
        {/* Back link */}
        <Link
          href={`/${locale}/projects`}
          className="text-sm text-slate-600 transition-colors duration-150 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
        >
          ← {provenanceCopy.publicBackToProjects}
        </Link>

        {/* Hero */}
        <div className="dodo-glass-card mt-8 overflow-hidden">
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <Ico name="solar:compass-bold-duotone" className="mx-auto h-16 w-16 text-blue-500/40 dark:text-blue-300/50" />
              <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300">
                {sloganText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h1 className="font-headline text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
                {project.name}
              </h1>
              <p className="mt-1 text-slate-600 dark:text-slate-300">{project.entity}</p>
              <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {provenanceCopy.publicBadge}
              </span>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {descriptionText}
              </p>
            </div>

            {/* Business Model */}
            {project.businessModel && (
              <div>
                <h2 className="font-headline text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {provenanceCopy.publicBusinessModel}
                </h2>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.businessModel[lang] ?? project.businessModel.en}
                </p>
              </div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="font-headline text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {provenanceCopy.publicFeatures}
                </h2>
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {feature[lang] ?? feature.en}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h2 className="font-headline text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
                  {provenanceCopy.publicTechStack}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="dodo-glass-inset rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ownership */}
            <div className="dodo-glass-card p-6">
              <h3 className="font-headline text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
                {provenanceCopy.publicOwnership}
              </h3>
              <div className="mt-4 space-y-3">
                {(project.ownership ?? []).length > 0
                  ? (project.ownership ?? []).map((owner) => (
                    <div key={owner.name} className="flex justify-between">
                      <div>
                        <p className="text-sm font-medium text-slate-950 dark:text-white">
                          {owner.name}
                        </p>
                        {owner.role && (
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            {owner.role}
                          </p>
                        )}
                      </div>
                      <p className="text-sm font-bold tabular-nums text-blue-600 dark:text-blue-300">
                        {owner.share}
                      </p>
                    </div>
                  ))
                  : provenanceCopy.publicMissingOwnership}
              </div>
            </div>

            {/* Timeline */}
            {project.timeline && (
              <div className="dodo-glass-card p-6">
                <h3 className="font-headline text-sm font-semibold tracking-tight text-slate-950 dark:text-white">
                  {provenanceCopy.publicTimeline}
                </h3>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {provenanceCopy.publicTarget}
                    </p>
                    <p className="text-sm font-medium text-slate-950 dark:text-white">
                      {project.timeline.target[lang] ?? project.timeline.target.en}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">
                      {provenanceCopy.publicVision}
                    </p>
                    <p className="text-sm font-medium text-slate-950 dark:text-white">
                      {project.timeline.vision[lang] ?? project.timeline.vision.en}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <Button
              asChild
              className="ainow-btn-primary w-full"
            >
              <Link href={`/${locale}/contact`}>
                {provenanceCopy.publicCta}
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
