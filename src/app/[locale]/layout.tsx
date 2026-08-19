import { Geist, Geist_Mono, Noto_Sans_Georgian } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { isIndexedLocale } from "@/i18n/seo-locales";
import { Providers } from "@/app/providers";
import { LayoutShell } from "@/components/layout/LayoutShell";
import { AistaffWidget } from "@/components/layout/AistaffWidget";
import { Toaster } from "sonner";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { StructuredData } from "@/components/seo/StructuredData";
import { SITE } from "@/config/site";
import "@/app/globals.css";
import "@/app/site-new.css";
import "@/app/family-premium.css";
// brand.css must stay LAST: its :root wins over the base tokens by source order.
import "@/app/brand.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
};

const BASE_URL = SITE.baseUrl;

const OG_LOCALE_MAP: Record<string, string> = {
  ka: "ka_GE",
  en: "en_US",
  ru: "ru_RU",
};

const OG_LOCALE_DEFAULT = OG_LOCALE_MAP[SITE.defaultLocale];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'product.seo' });
  const siteName = SITE.wordmark.prefix + SITE.wordmark.mark;

  const ogImageUrl = `${BASE_URL}/og-image.png`;

  return {
    metadataBase: new URL(BASE_URL),
    icons: {
      icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
      shortcut: "/icon.svg",
      apple: "/icon.svg",
    },
    title: {
      default: t("title"),
      template: `%s | ${siteName}`,
    },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: OG_LOCALE_MAP[locale] ?? OG_LOCALE_DEFAULT,
      alternateLocale: Object.values(OG_LOCALE_MAP).filter(
        (l) => l !== (OG_LOCALE_MAP[locale] ?? OG_LOCALE_DEFAULT),
      ),
      // URL shape, so this asks "is this the unprefixed default locale", NOT "is this Georgian".
      url: locale === SITE.defaultLocale ? BASE_URL : `${BASE_URL}/${locale}`,
      siteName: siteName,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImageUrl],
    },
    // No `alternates` here: this layout has no path context, so a hardcoded map injected the
    // HOMEPAGE hreflang/canonical into every page that lacks its own (the source of the audit's
    // hreflang conflicts + duplicate canonicals). Each page sets its own via buildAlternates().
    robots: {
      // Only ka/en/ru are indexed. de/tr/fa/zh are machine-translated drafts kept out of the index
      // until QA + blog translation, which also removes their cross-locale hreflang conflicts.
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
  };
}

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "cyrillic"],
  weight: "variable",
  variable: "--font-geist-mono",
  display: "swap",
});

const firago = localFont({
  src: [
    { path: "../../../node_modules/@fontsource/firago/files/firago-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../../../node_modules/@fontsource/firago/files/firago-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../../../node_modules/@fontsource/firago/files/firago-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../../../node_modules/@fontsource/firago/files/firago-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../../../node_modules/@fontsource/firago/files/firago-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-firago",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-georgian-extended-fallback",
  display: "swap",
  preload: false,
});

// Prerender every locale at build time. Without this (and the setRequestLocale call below) every
// page of every landing is server-rendered on EVERY request: all three shipped landings do that
// today. A marketing page that is a pure function of its message file has no reason to touch the
// server per visit, and TTFB is the one number aiWEB itself sells.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

  // Opts this subtree into static rendering. Must run before anything reads a translation.
  setRequestLocale(locale);

  const siteMessages = (await import(`@/messages/${locale}.json`)).default;
  const productPageMessages = (
    await import(`@/features/product-pages/messages/${locale}.json`)
  ).default;
  const messages = {
    ...siteMessages,
    productPages: productPageMessages,
  };

  return (
    <html
      lang={locale}
      data-product={SITE.key}
      className={`${firago.variable} ${geist.variable} ${geistMono.variable} ${notoGeorgian.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        {/* Exact font block copied verbatim from ainow_handoff/index.html <head>
            so the aiNOW wordmark renders with the source's variable Bricolage
            Grotesque (opsz,wght axis) + Space Mono, not next/font's static cuts. */}
        <link rel="ai-summary" type="application/json" href={`${BASE_URL}/ai/summary.json`} />
        <link rel="ai-service" type="application/json" href={`${BASE_URL}/ai/service.json`} />
        <link rel="ai-faq" type="application/json" href={`${BASE_URL}/ai/faq.json`} />
        <link rel="llms" type="text/plain" href={`${BASE_URL}/llms.txt`} />
        <link rel="llms-full" type="text/plain" href={`${BASE_URL}/llms-full.txt`} />
        {/* The entity graph. Without it every one of these domains is an orphan brand and an
            assistant has to guess what it is, which means it will not recommend it. */}
        <StructuredData />
      </head>
      <body
          className="font-sans"
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LayoutShell>{children}</LayoutShell>
            <ScrollToTop />
            <Toaster position="top-right" richColors theme="dark" />
            <AistaffWidget />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
