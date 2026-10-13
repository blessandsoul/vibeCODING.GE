import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ownerServiceMetadata, ownerServiceUrl } from '@/lib/owner-seo';
import { getPageContentLocale } from '@/i18n/seo-locales';
import { Link } from '@/i18n/navigation';
import { ServiceHero } from '@/features/services/components/ServiceHero';
import { BotsShowcase } from '@/features/services/components/BotsShowcase';
import { BotDemoIntro } from '@/features/services/components/BotDemoIntro';
import { ChatDemo } from '@/features/services/components/ChatDemo';
import { BotUseCases } from '@/features/services/components/BotUseCases';
import { ServiceCTA } from '@/features/services/components/ServiceCTA';
import { SeoArticle } from '@/features/services/components/SeoArticle';
import { ServiceFaq } from '@/features/services/components/ServiceFaq';
import { ServiceSchemaForPage } from '@/components/seo/ServiceSchemaForPage';
import { RelatedCases } from '@/features/projects/components/RelatedCases';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const contentLocale = getPageContentLocale('/services/bots', locale);
  const t = await getTranslations({ locale: contentLocale, namespace: 'seo.servicesBots' });

  const path = '/services/bots';
  return ownerServiceMetadata({
    locale: contentLocale,
    path,
    title: t('title'),
    description: t('description'),
  });
}
export default async function BotsPage({ params }: Props) {
  const { locale } = await params;
  const ownerContact = ownerServiceUrl(locale, '/contact');
  const t = await getTranslations({ locale, namespace: 'servicesBots' });
  return (
    <>
      <ServiceSchemaForPage
        locale={locale}
        namespace="seo.servicesBots"
        path="/services/bots"
        serviceType="AI Chatbot Development"
        offers={[
          { name: "Sales 24/7, Starter", price: "220", unitText: "month" },
          { name: "Sales 24/7, Business", price: "450", unitText: "month" },
          { name: "Sales 24/7, Premium", price: "900", unitText: "month" },
          { name: "Sales 24/7, Enterprise", price: "2500", unitText: "month" },
        ]}
      />
      <ServiceHero namespace="servicesBots" />
      <BotsShowcase />
      <BotDemoIntro />
      <ChatDemo />
      <BotUseCases contactHref={ownerContact} />
      <section className="relative px-6 py-8 md:py-12">
        <div className="container relative z-10 mx-auto">
          <div className="dodo-glass-card mx-auto max-w-3xl p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <p className="eyebrow mb-1 text-xs uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                  {t('relatedEyebrow')}
                </p>
                <h3 className="mb-1.5 font-display text-lg font-bold text-slate-900 dark:text-white md:text-xl">
                  {t('relatedVoiceTitle')}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t('relatedVoiceDesc')}
                </p>
              </div>
              <Link
                href={ownerServiceUrl(locale, '/services/voice-agents')}
                className="dodo-glass-box dodo-glass-pill inline-flex min-h-11 shrink-0 self-start items-center justify-center px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white md:self-auto"
              >
                {t('relatedVoiceCta')} →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SeoArticle namespace="servicesBots" />
      <ServiceFaq namespace="servicesBots" />
      <RelatedCases serviceSlug="bots" locale={locale} />
      <ServiceCTA namespace="servicesBots" href={ownerContact} />
    </>
  );
}

