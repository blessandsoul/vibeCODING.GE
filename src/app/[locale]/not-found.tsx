import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "seo.notFound" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: false, follow: false },
  };
}

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "seo.notFound" });
  // URL shape, so this is the default-locale question, not the Georgian-script one.
  const homePath = locale === SITE.defaultLocale ? "/" : `/${locale}`;

  return (
    <div className="py-32">
      <SectionContainer>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-7xl font-extrabold tracking-tight text-[var(--brand)]">404</p>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 md:text-5xl">
            {t("heading")}
          </h1>
          <p className="mt-4 text-pretty text-lg text-[#525252]">{t("body")}</p>
          <div className="mt-10">
            {/* Was `bg-linear-to-r from-[#7c3aed] to-[#e040fb]`: the parent brand's violet, and
                the exact violet-to-magenta ramp that VISUAL_TASTE bans as the #1 AI tell. A flat
                brand fill is both on-brand for the product and not a fingerprint. */}
            <Button
              asChild
              className="rounded-full bg-[var(--brand)] text-primary-foreground transition-[filter,transform] duration-150 ease-out hover:brightness-110 active:scale-[0.96]"
            >
              <Link href={homePath}>{t("backHome")}</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
