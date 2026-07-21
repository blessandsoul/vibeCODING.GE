import { Bricolage_Grotesque, DM_Sans, Noto_Sans_Georgian, Space_Mono } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { isIndexedLocale } from "@/i18n/seo-locales";
import { Providers } from "@/app/providers";
import { LayoutShell } from "@/components/layout/LayoutShell";
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

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-noto-georgian",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  weight: ["400", "700"],
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

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      data-product={SITE.key}
      className={`${bricolage.variable} ${dmSans.variable} ${notoGeorgian.variable} ${spaceMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        {/* Exact font block copied verbatim from ainow_handoff/index.html <head>
            so the aiNOW wordmark renders with the source's variable Bricolage
            Grotesque (opsz,wght axis) + Space Mono, not next/font's static cuts. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- shared live aiNOW font contract */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800;12..96,900&family=DM+Sans:wght@400;500;700&family=Noto+Sans+Georgian:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* The entity graph. Without it every one of these domains is an orphan brand and an
            assistant has to guess what it is, which means it will not recommend it. */}
        <StructuredData />
      </head>
      <body
        className={
          // Script question, NOT the default-locale question. Georgian text needs the
          // Georgian face on every site, including the EN-default export landings.
          // Never rewrite this to SITE.defaultLocale.
          locale === "ka"
            ? "font-[family-name:var(--font-noto-georgian)]"
            : "font-[family-name:var(--font-dm-sans)]"
        }
      >
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <LayoutShell>{children}</LayoutShell>
            <ScrollToTop />
            <Toaster position="top-right" richColors theme="dark" />
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
