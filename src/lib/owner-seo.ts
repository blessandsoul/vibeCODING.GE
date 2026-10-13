import type { Metadata } from 'next';

const OWNER_ORIGIN = 'https://ainow.ge';

const LOCALE_TO_OG: Record<string, string> = {
  ka: 'ka_GE',
  en: 'en_US',
  ru: 'ru_RU',
  de: 'de_DE',
  tr: 'tr_TR',
  fa: 'fa_IR',
  zh: 'zh_CN',
};

export function ownerServiceUrl(locale: string, routePath: string): string {
  return locale === 'ka' ? OWNER_ORIGIN + routePath : OWNER_ORIGIN + '/' + locale + routePath;
}

type OwnerServiceMetadataInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  keywords?: string;
  other?: Metadata['other'];
};

export function ownerServiceMetadata({ locale, path, title, description, keywords, other }: OwnerServiceMetadataInput): Metadata {
  const canonical = ownerServiceUrl(locale, path);
  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'aiNOW',
      locale: LOCALE_TO_OG[locale] ?? 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...(other ? { other } : {}),
  };
}
