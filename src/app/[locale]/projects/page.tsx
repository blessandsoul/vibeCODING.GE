import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildAlternates } from "@/i18n/seo-locales";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ProjectsPageContent } from "@/features/projects/components/ProjectsPageContent";
import { projects } from "@/features/projects/data/projects";
import { getCaseProvenanceCopy } from "@/features/projects/lib/case-provenance";
import { APP_DOMAIN } from "@/lib/constants/app.constants";
import { targetAuxiliaryMetadata } from "@/lib/target-auxiliary-seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.projects" });
  const provenanceCopy = getCaseProvenanceCopy(locale);

  const path = "/projects";
  return targetAuxiliaryMetadata({ locale, path, title: t("title"), description: provenanceCopy.collectionDescription, alternates: buildAlternates(path, locale) });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const lang = locale as "ka" | "en" | "ru" | "de" | "tr" | "fa" | "zh";
  const t = await getTranslations({ locale, namespace: "projects" });
  const provenanceCopy = getCaseProvenanceCopy(locale);

  const SITE_URL = `https://${APP_DOMAIN}`;
  const localePrefix = locale === "ka" ? "" : `/${locale}`;
  const listUrl = buildAlternates("/projects", locale).canonical;
  const caseUrl = (p: (typeof projects)[number]) =>
    p.kind === "anonymous"
      ? `${listUrl}/${p.slug}`
      : p.url ?? `${listUrl}/${p.slug}`;

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${listUrl}#collection`,
        url: listUrl,
        name: t("title"),
        description: provenanceCopy.collectionDescription,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: { "@type": "Thing", name: provenanceCopy.collectionAbout },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}${localePrefix}` },
          { "@type": "ListItem", position: 2, name: t("title"), item: listUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: provenanceCopy.collectionName,
        numberOfItems: projects.length,
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.title?.[lang] ?? p.title?.en ?? p.name,
          description: p.provenance === "ainow-family-workflow"
            ? `${provenanceCopy.familyDisclosure} ${p.description[lang] ?? p.description.en}`
            : p.description[lang] ?? p.description.en,
          url: caseUrl(p),
        })),
      },
    ],
  };

  return (
    <div className="ainow-blueprint-bg min-h-dvh py-20 text-slate-900 dark:text-slate-100">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <SectionContainer>
        <ProjectsPageContent />
      </SectionContainer>
    </div>
  );
}
