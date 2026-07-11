import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { CONTACT_EMAIL, CONTACT_EMAIL_SECONDARY, CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from "@/lib/constants/app.constants";
import { buildAlternates } from "@/i18n/seo-locales";
import { FadeIn } from "@/components/common/FadeIn";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });

  return {
    title: t("title"),
    description: t("description"),
    // Was a hand-rolled canonical + hreflang map with the domain typed out eight times.
    // buildAlternates already owns that shape and reads the domain from src/config/site.ts.
    alternates: buildAlternates("/contact", locale),
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

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  // Keeps the page static (see generateStaticParams in the layout).
  setRequestLocale(locale);

  return <ContactPageBody />;
}

function ContactPageBody() {
  const t = useTranslations("contact");

  return (
    <div className="py-20">
      <SectionContainer>
        <div className="mx-auto max-w-md">
          {/* Header */}
          <FadeIn>
            <div className="text-center">
              <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
                {t("title")}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-[#525252]">
                {t("subtitle")}
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="mt-12 rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-sm md:p-8">
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact Info */}
          <div className="mt-8 grid gap-6 text-center md:grid-cols-2">
            <FadeIn delay={0.2}>
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-neutral-900">
                  {t("phoneLabel")}
                </p>
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  dir="ltr"
                  className="mt-1 block text-sm text-[var(--brand)] transition-colors duration-150 hover:underline"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.28}>
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-neutral-900">
                  {t("emailLabel")}
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-1 block text-xs text-[var(--brand)] transition-colors duration-150 hover:underline sm:text-sm"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL_SECONDARY}`}
                  className="mt-1 block text-xs text-[var(--brand)] transition-colors duration-150 hover:underline sm:text-sm"
                >
                  {CONTACT_EMAIL_SECONDARY}
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.36}>
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-neutral-900">
                  {t("officeLabel")}
                </p>
                <p className="mt-1 text-sm text-[#525252]">
                  {t("office")}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.44}>
              <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 shadow-sm">
                <p className="text-sm font-medium text-neutral-900">
                  {t("legalLabel")}
                </p>
                <p className="mt-1 text-sm text-[#525252]">
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

