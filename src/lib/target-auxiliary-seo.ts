import type { Metadata } from 'next';
import { APP_DOMAIN, APP_NAME } from '@/lib/constants/app.constants';

const TARGET_AUXILIARY_ROBOTS = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
} as const;

export function targetAuxiliaryUrl(locale: string, routePath: string): string {
  return locale === 'ka' ? 'https://' + APP_DOMAIN + routePath : 'https://' + APP_DOMAIN + '/' + locale + routePath;
}

type TargetAuxiliaryMetadataInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  alternates: Metadata['alternates'];
};

/** Target-host family-directory metadata; target-self canonical, explicit noindex/nofollow. */
export function targetAuxiliaryMetadata({ locale, path, title, description, alternates }: TargetAuxiliaryMetadataInput): Metadata {
  const canonical = typeof alternates?.canonical === 'string' ? alternates.canonical : targetAuxiliaryUrl(locale, path);
  const absoluteTitle = title + ' | aiNOW family | ' + APP_NAME;
  return {
    title: { absolute: absoluteTitle },
    description,
    alternates,
    robots: TARGET_AUXILIARY_ROBOTS,
    openGraph: { title: absoluteTitle, description, type: "website", url: canonical, siteName: APP_NAME },
    twitter: { card: 'summary_large_image', title: absoluteTitle, description },
  };
}
