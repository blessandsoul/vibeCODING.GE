import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";
import type { Metadata } from "next";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/button";

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
  const homePath = locale === "ka" ? "/" : `/${locale}`;

  return (
    <div className="py-12 sm:py-20">
      <SectionContainer>
        <div className="dodo-glass-card mx-auto max-w-2xl p-6 text-center sm:p-10">
          <p className="text-6xl font-bold tracking-tight text-blue-600 dark:text-blue-400">404</p>
          <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-4xl">
            {t("heading")}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{t("body")}</p>
          <div className="mt-10">
            <Button asChild className="dodo-glass-box dodo-glass-pill min-h-11 px-5 text-slate-900 dark:text-white">
              <Link href={homePath}>← {t("backHome")}</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
