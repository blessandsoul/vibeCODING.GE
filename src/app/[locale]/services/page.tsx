import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { FadeIn } from '@/components/common/FadeIn';
import { ownerServiceMetadata } from '@/lib/owner-seo';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.services' });

  const path = '/services';
  return ownerServiceMetadata({
    locale,
    path,
    title: t('title'),
    description: t('description'),
  });
}

const serviceCards = [
  { key: 'bots', href: '/services/bots' as const, icon: '⬡' },
  { key: 'contentStudio', href: '/services/content-studio' as const, icon: '✦' },
  { key: 'metaAds', href: '/services/meta-ads' as const, icon: '◎' },
  { key: 'automation', href: '/services/automation' as const, icon: '↻' },
  { key: 'voiceAgents', href: '/services/voice-agents' as const, icon: '◉' },
  { key: 'aiCharacters', href: '/services/ai-characters' as const, icon: '✧' },
  { key: 'websites', href: '/services/websites' as const, icon: '◇' },
  { key: 'llmSeo', href: '/services/llm-seo' as const, icon: '✺' },
  { key: 'seo', href: '/services/seo' as const, icon: '↗' },
  { key: 'graphics', href: '/services/graphics' as const, icon: '⬢' },
  { key: 'auctionMarketing', href: '/services/auction-logistics-marketing' as const, icon: '⚙' },
  { key: 'consulting', href: '/services/consulting' as const, icon: '◈' },
] as const;

export default function ServicesPage() {
  const t = useTranslations('servicesIndex');

  return (
    <div className="ainow-blueprint-bg min-h-dvh py-16 text-slate-900 dark:text-slate-100 md:py-20">
      <SectionContainer>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {t('subtitle')}
            </p>
            <h1 className="mt-3 font-headline text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-4xl dark:text-white">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {serviceCards.map((card, i) => (
            <FadeIn key={card.key} delay={i * 0.08}>
              <Link
                href={card.href}
                className="dodo-glass-box group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:-translate-y-0.5 md:p-8"
              >
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <h2 className="font-headline text-xl font-semibold tracking-[-0.025em] text-slate-950 dark:text-white">{t(`${card.key}Title`)}</h2>
                  <span className="dodo-glass-inset flex h-10 w-10 shrink-0 items-center justify-center text-lg text-slate-600 transition-colors duration-300 group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-300">
                    {card.icon}
                  </span>
                </div>
                <p className="relative z-10 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t(`${card.key}Desc`)}
                </p>
                <span className="relative z-10 mt-4 text-sm font-semibold text-blue-600 transition-colors duration-200 group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200">
                  {t('learnMore')} →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
