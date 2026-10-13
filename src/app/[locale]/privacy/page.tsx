import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { buildAlternates } from "@/i18n/seo-locales";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacy" });

  const path = "/privacy";
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
  "section9",
  "section10",
] as const;

const INFRASTRUCTURE_NOTICE: Record<string, { heading: string; content: string }> = {
  ka: {
    heading: "ინფრასტრუქტურა და მონაცემთა დამუშავება",
    content: "aiNOW-ის ძირითადი ჰოსტინგი და API-მარშრუტიზაცია მდებარეობს EU/EEA-ში. კონკრეტული ფუნქციისთვის მონაცემის შეზღუდული ნაწილი შეიძლება დამუშავდეს სხვა სახელმწიფოში მოქმედი დამტკიცებული გარე დამმუშავებლის მიერ, საქართველოს კანონმდებლობით გათვალისწინებული საფუძვლითა და სათანადო გარანტიებით.",
  },
  en: {
    heading: "Infrastructure and data processing",
    content: "aiNOW's primary hosting and API routing are located in the EU/EEA. A limited part of data may be processed by an approved external processor in another country where a specific function requires it, using a basis and appropriate safeguards under Georgian law.",
  },
  ru: {
    heading: "Инфраструктура и обработка данных",
    content: "Основной хостинг и маршрутизация API aiNOW находятся в EU/EEA. Ограниченная часть данных может обрабатываться утверждённым внешним обработчиком в другой стране, когда этого требует конкретная функция, при наличии основания и надлежащих гарантий по законодательству Грузии.",
  },
};

function privacyNotice(locale: string): { heading: string; content: string } {
  return INFRASTRUCTURE_NOTICE[locale] ?? INFRASTRUCTURE_NOTICE.en;
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const notice = privacyNotice(locale);

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
          <section className="dodo-glass-inset mt-6 rounded-2xl p-5">
            <h2 className="font-display text-base font-bold tracking-tight text-neutral-900">{notice.heading}</h2>
            <p className="mt-2 leading-relaxed text-[#525252]">{notice.content}</p>
          </section>

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
