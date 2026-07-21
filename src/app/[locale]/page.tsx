import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { SITE } from '@/config/site';
import { buildAlternates } from '@/i18n/seo-locales';
import { HomeFaqSchema } from '@/components/seo/StructuredData';
import { LandingHero } from '@/features/home/components/LandingHero';
import { LandingBody } from '@/features/home/components/LandingBody';
import { LandingFaq } from '@/features/home/components/LandingFaq';
import { LandingCta } from '@/features/home/components/LandingCta';
import { LandingWordmark } from '@/features/home/components/LandingWordmark';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'product.seo' });

  const ogImageUrl = `${SITE.baseUrl}/og-image.png`;
  const siteName = SITE.wordmark.prefix + SITE.wordmark.mark;

  return {
    title: t('title'),
    description: t('description'),
    // The homepage MUST set its own canonical + hreflang. The root layout deliberately
    // omits `alternates` (it has no path context), so a page that forgets this ships with
    // neither, which is exactly what happened on aiads.ge and aicontent.ge.
    alternates: buildAlternates('', locale),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [ogImageUrl],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  // Keeps the page static (see generateStaticParams in the layout).
  setRequestLocale(locale);

  return (
    <>
      {/* FAQPage, generated from the same 14 keys the visible accordion renders, so the
          schema can never contradict the page. A model that reads this gets the whole
          product argument, objections included, without parsing a single React component. */}
      <HomeFaqSchema locale={locale} />
      <div className="landing-page">
        <LandingHero />
        <LandingBody />
        <LandingFaq />
        <LandingCta />
        <LandingWordmark />
      </div>
    </>
  );
}
