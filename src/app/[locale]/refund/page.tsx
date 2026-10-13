import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buildAlternates } from "@/i18n/seo-locales";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.refund" });

  const path = "/refund";
  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(path, locale),
    openGraph: {
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
  };
}

const SECTIONS = [
  "section1",
  "section2",
  "section3",
  "section4",
  "section5",
  "section6",
  "section7",
  "section8",
] as const;

export default async function RefundPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "refund" });

  return (
    <div className="ainow-legal-page py-10 sm:py-16">
      <SectionContainer>
        <div className="dodo-glass-card mx-auto max-w-3xl p-5 sm:p-9">
          <p className="eyebrow text-xs uppercase tracking-[0.3em] text-[#525252]">
            aiNOW
          </p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-4xl lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-sm text-[#525252]">
            {t("lastUpdated")}
          </p>
          <p className="mt-6 leading-relaxed text-[#525252]">
            {t("intro")}
          </p>

          <div className="mt-12 space-y-8">
            {SECTIONS.map((key) => (
              <section key={key}>
                <h2 className="font-display text-lg font-bold tracking-tight text-neutral-900">
                  {t(`${key}Title`)}
                </h2>
                <p className="mt-2 whitespace-pre-line leading-relaxed text-[#525252]">
                  {t(`${key}Content`)}
                </p>
              </section>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
