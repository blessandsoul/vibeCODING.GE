import type { Metadata } from "next";
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import { getTranslations } from "next-intl/server";
import { getAiNowHomeCopy } from "@/features/home/components/ainow/AiNowHomeCopy";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ContactRequestForm } from "@/features/contact/components/ContactRequestForm";
import { APP_NAME, CONTACT_EMAIL, CONTACT_EMAIL_SECONDARY, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/lib/constants/app.constants";
import { FadeIn } from "@/components/common/FadeIn";
import { buildAlternates, pageRobots } from "@/i18n/seo-locales";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  const copy = getAiNowHomeCopy(locale);
  const metadataTitle = `${t("title")} | ${APP_NAME} by aiNOW`;
  const metadataDescription = copy.closingCta.description;

  const path = "/contact";
  const alternates = buildAlternates(path, locale);
  return {
    title: { absolute: metadataTitle },
    description: metadataDescription,
    alternates,
    robots: pageRobots(path, locale),
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      images: [PRODUCT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [PRODUCT_OG_PATH],
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="ainow-blueprint-bg min-h-dvh py-16 text-slate-900 dark:text-slate-100 md:py-20">
      <SectionContainer>
        <div className="mx-auto max-w-md">
          {/* Header */}
          <FadeIn>
            <div className="text-center">
              <h1 className="font-headline text-balance text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 md:text-4xl lg:text-5xl dark:text-white">
                {t("title")}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {t("subtitle")}
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="dodo-glass-card mt-12 p-6 md:p-8">
              <ContactRequestForm attribution={{ source: "vibecoding-contact", sourcePath: "/contact" }} />
            </div>
          </FadeIn>

          {/* Contact Info */}
          <div className="mt-8 grid gap-6 text-center md:grid-cols-2">
            <FadeIn delay={0.2}>
              <div className="dodo-glass-card p-6">
                <p className="text-sm font-medium text-slate-950 dark:text-white">
                  {t("phoneLabel")}
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  dir="ltr"
                  className="mt-1 block text-sm text-blue-600 transition-colors duration-150 hover:underline dark:text-blue-300"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div className="dodo-glass-card p-6">
                <p className="text-sm font-medium text-slate-950 dark:text-white">
                  {t("emailLabel")}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 block text-xs text-blue-600 transition-colors duration-150 hover:underline dark:text-blue-300 sm:text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                  className="mt-1 block text-xs text-blue-600 transition-colors duration-150 hover:underline dark:text-blue-300 sm:text-sm"
                >
                  {CONTACT_EMAIL_SECONDARY}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.36}>
              <div className="dodo-glass-card p-6">
                <p className="text-sm font-medium text-slate-950 dark:text-white">
                  {t("officeLabel")}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {t("office")}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.44}>
              <div className="dodo-glass-card p-6">
                <p className="text-sm font-medium text-slate-950 dark:text-white">
                  {t("legalLabel")}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {t("legal")}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

