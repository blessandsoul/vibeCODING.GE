import localFont from "next/font/local";
import { Noto_Sans_Georgian } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { PRODUCT_OG_IMAGE, PRODUCT_OG_PATH } from "@/lib/product-og";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { isIndexedLocale } from "@/i18n/seo-locales";
import { Providers } from "@/app/providers";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { PublicIntegrations } from "@/components/layout/PublicIntegrations";
import { Toaster } from "sonner";
import { StructuredData } from "@/components/seo/StructuredData";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import "@/app/globals.css";
import "@/app/site-new.css";
import "@/app/vibecoding-theme-overrides.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

const BASE_URL = "https://vibecoding.ge";

const OG_LOCALE_MAP: Record<string, string> = {
  ka: "ka_GE",
  en: "en_US",
  ru: "ru_RU",
  de: "de_DE",
  tr: "tr_TR",
  fa: "fa_IR",
  zh: "zh_CN",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("title"),
      template: "%s | vibeCODING",
    },
    description: t("description"),
    openGraph: {
      images: [PRODUCT_OG_IMAGE],
      type: "website",
      locale: OG_LOCALE_MAP[locale] ?? "ka_GE",
      alternateLocale: Object.entries(OG_LOCALE_MAP)
        .filter(([code]) => isIndexedLocale(code))
        .map(([, value]) => value)
        .filter((l) => l !== (OG_LOCALE_MAP[locale] ?? "ka_GE")),
      url: locale === "ka" ? BASE_URL : `${BASE_URL}/${locale}`,
      siteName: "vibeCODING",
      title: t("title"),
      description: t("description"),
      // og:image comes from the co-located opengraph-image.tsx (dynamic,
      // current positioning), inherited by every page without its own.
    },
    twitter: {
      images: [PRODUCT_OG_PATH],
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    // No `alternates` here: this layout has no path context, so a hardcoded map injected the
    // HOMEPAGE hreflang/canonical into every page that lacks its own (the source of the audit's
    // hreflang conflicts + duplicate canonicals). Each page sets its own via buildAlternates().
    robots: {
      // Site languages are eligible by default; each page overrides this for
      // locale fallbacks using its actual authored translation set.
      index: isIndexedLocale(locale),
      follow: true,
      googleBot: {
        index: isIndexedLocale(locale),
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      other: {
        "facebook-domain-verification": [
          "chhsnbf9artdhoxh5yjaubor2cz1nl",
          "x0ypn20rm2yn0p942snwrg0ka0ld9d",
        ],
      },
    },
  };
}

const firago = localFont({
  src: [
    { path: "../../../public/landing/fonts/typeface/firago-site-400.woff2", weight: "400", style: "normal" },
    { path: "../../../public/landing/fonts/typeface/firago-site-500.woff2", weight: "500", style: "normal" },
    { path: "../../../public/landing/fonts/typeface/firago-site-600.woff2", weight: "600", style: "normal" },
    { path: "../../../public/landing/fonts/typeface/firago-site-700.woff2", weight: "700", style: "normal" },
    { path: "../../../public/landing/fonts/typeface/firago-site-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-firago",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const georgianExtendedFallback = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: "variable",
  variable: "--font-georgian-extended-fallback",
  display: "swap",
  preload: false,
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messageLocale = isIndexedLocale(locale) ? locale : "en";
  const messages = (await import(`@/messages/${messageLocale}.json`)).default;
  const publicMessages = Object.fromEntries(
    Object.entries(messages).filter(([namespace]) => namespace !== "admin"),
  );

  return (
    <html
      lang={locale}
      dir={locale === "fa" ? "rtl" : "ltr"}
      className={`${firago.variable} ${georgianExtendedFallback.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        {locale === "ka" ? (
          <link rel="preload" href="/landing/fonts/typeface/gl-moskovis.woff2" as="font" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />
        ) : null}
        <link rel="preload" href="/landing/fonts/cormorant-garamond.woff2" as="font" type="font/woff2" crossOrigin="anonymous" fetchPriority="high" />
        <link rel="alternate" type="application/rss+xml" title="vibeCODING Blog RSS" href={`${BASE_URL}/rss.xml`} />
        <link rel="ai-summary" type="application/json" href={`${BASE_URL}/ai/summary.json`} />
        <link rel="ai-faq" type="application/json" href={`${BASE_URL}/ai/faq.json`} />
        <link rel="ai-service" type="application/json" href={`${BASE_URL}/ai/service.json`} />
        <link rel="ai-catalog" type="application/json" href={`${BASE_URL}/ai/catalog.json`} />
        <link rel="ai-cases" type="application/json" href={`${BASE_URL}/ai/cases.json`} />
        <link rel="llms" type="text/plain" href={`${BASE_URL}/llms.txt`} />
        <link rel="llms-full" type="text/plain" href={`${BASE_URL}/llms-full.txt`} />
        <link rel="api-catalog" type="application/linkset+json" href={`${BASE_URL}/.well-known/api-catalog`} />
        <link rel="agent-skills" type="application/json" href={`${BASE_URL}/.well-known/agent-skills/index.json`} />
        <StructuredData locale={locale} />
      </head>
      <body
        className="font-sans"
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={publicMessages}>
            <LayoutShell>{children}</LayoutShell>
            <PublicIntegrations />
            <ScrollToTop />
            <Toaster position="top-right" richColors theme="dark" />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
