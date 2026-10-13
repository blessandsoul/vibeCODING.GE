'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ChatPricingInfo } from '@/features/home/components/ChatPricingInfo';

const tiers = [
  {
    key: 'launch',
    model: 'Nemo Lite',
    modelIcon: 'solar:bolt-circle-bold-duotone',
    features: ['feat1', 'feat2', 'feat3', 'feat4'],
    highlighted: false,
    tone: 'starter',
  },
  {
    key: 'growth',
    model: 'Nemo Smart',
    modelIcon: 'solar:stars-minimalistic-bold-duotone',
    features: ['feat1', 'feat2', 'feat3', 'feat4', 'feat5'],
    highlighted: true,
    tone: 'business',
  },
  {
    key: 'scale',
    model: 'Nemo Pro',
    modelIcon: 'solar:medal-star-bold-duotone',
    features: ['feat1', 'feat2', 'feat3', 'feat4', 'feat5'],
    highlighted: false,
    tone: 'premium',
  },
  {
    key: 'enterprise',
    model: 'Nemo Ultra',
    modelIcon: 'solar:crown-star-bold-duotone',
    features: ['feat1', 'feat2', 'feat3', 'feat4'],
    highlighted: false,
    tone: 'enterprise',
  },
] as const;

const tones = {
  starter: {
    border: 'border-[#0e7490]/35 hover:border-[#0e7490]/60',
    text: 'text-[#0e7490]',
    soft: 'bg-[#ecfeff] text-[#0e7490]',
    panel: 'border-[#0e7490]/20 bg-[#ecfeff]/70',
    button: 'border-[#0e7490]/25 text-[#0e7490] hover:border-[#0e7490]/55 hover:bg-[#ecfeff]',
  },
  business: {
    border: 'border-blue-500 dark:border-blue-400 ring-1 ring-[#2563eb]/25',
    text: 'text-blue-600 dark:text-blue-300',
    soft: 'bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-300',
    panel: 'border-blue-500/20 dark:border-blue-400/20 bg-blue-50/75 dark:bg-blue-400/10',
    button: 'border-blue-500/50 text-blue-700 dark:text-blue-200 shadow-lg shadow-blue-500/15 hover:border-blue-600 dark:hover:border-blue-300',
  },
  premium: {
    border: 'border-blue-500/35 dark:border-blue-400/30 hover:border-blue-500/60 dark:hover:border-blue-400/50',
    text: 'text-blue-600 dark:text-blue-300',
    soft: 'bg-blue-50 dark:bg-blue-400/10 text-blue-600 dark:text-blue-300',
    panel: 'border-blue-500/20 dark:border-blue-400/20 bg-blue-50/75 dark:bg-blue-400/10',
    button: 'border-blue-500/25 dark:border-blue-400/20 text-blue-600 dark:text-blue-300 hover:border-blue-500/55 dark:hover:border-blue-400/45 hover:bg-blue-50 dark:hover:bg-blue-400/10',
  },
  enterprise: {
    border: 'border-[#c2410c]/35 hover:border-[#c2410c]/60',
    text: 'text-[#c2410c]',
    soft: 'bg-[#fff2e9] text-[#c2410c]',
    panel: 'border-[#c2410c]/20 bg-[#fff2e9]/75',
    button: 'border-[#c2410c]/25 text-[#c2410c] hover:border-[#c2410c]/55 hover:bg-[#fff2e9]',
  },
} as const;

type TierKey = (typeof tiers)[number]['key'];

type MetaAdsPricingTiersProps = {
  contactHref?: string;
};

export const MetaAdsPricingTiers = ({ contactHref = '/contact' }: MetaAdsPricingTiersProps) => {
  const t = useTranslations('servicesMetaAds');
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIdx, setActiveIdx] = useState(1);

  const scrollTo = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    const track = trackRef.current;
    if (!card || !track) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
    setActiveIdx(idx);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof window === 'undefined') return;
    const mobile = window.matchMedia('(max-width: 767px)');
    if (!mobile.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.6) continue;
          const index = cardRefs.current.findIndex((card) => card === entry.target);
          if (index !== -1) setActiveIdx(index);
        }
      },
      { root: track, threshold: [0.6] },
    );
    cardRefs.current.forEach((card) => card && observer.observe(card));
    const frame = window.requestAnimationFrame(() => scrollTo(1));
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [scrollTo]);

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('pricingEyebrow')}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('pricingTitle')}
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
              {t('pricingSubtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="mb-3 flex items-center justify-between md:hidden">
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{t('pricingScrollHint')}</span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label={t('pricingPrevious')}
              disabled={activeIdx === 0}
              onClick={() => scrollTo(Math.max(0, activeIdx - 1))}
              className="inline-flex h-11 w-11 items-center justify-center dodo-glass-inset dodo-glass-pill text-slate-950 dark:text-white transition-[border-color,color,transform,opacity] duration-200 ease-out active:scale-[0.96] disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/45"
            >
              <Ico name="solar:alt-arrow-left-linear" className="h-4 w-4" />
            </button>
            <span className="min-w-10 text-center text-xs font-semibold tabular-nums text-slate-600 dark:text-slate-300" aria-live="polite">
              {activeIdx + 1} / {tiers.length}
            </span>
            <button
              type="button"
              aria-label={t('pricingNext')}
              disabled={activeIdx === tiers.length - 1}
              onClick={() => scrollTo(Math.min(tiers.length - 1, activeIdx + 1))}
              className="inline-flex h-11 w-11 items-center justify-center dodo-glass-inset dodo-glass-pill text-slate-950 dark:text-white transition-[border-color,color,transform,opacity] duration-200 ease-out active:scale-[0.96] disabled:opacity-35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/45"
            >
              <Ico name="solar:alt-arrow-right-linear" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory items-stretch gap-3 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-4"
          aria-label={t('pricingTitle')}
          tabIndex={0}
        >
          {tiers.map((tier, index) => {
            const tone = tones[tier.tone];
            const key = tier.key as TierKey;
            return (
              <div
                key={tier.key}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                className="w-[calc(100vw-3rem)] max-w-[22rem] shrink-0 snap-center md:w-auto md:max-w-none"
              >
                <FadeIn delay={index * 0.1}>
                  <article className={cn('dodo-glass-card relative flex h-full min-w-0 flex-col p-5 shadow-sm transition-[border-color,box-shadow] duration-300 ease-out hover:shadow-[0_18px_42px_-24px_rgba(37,99,235,0.22)]', tone.border)}>
                    <span aria-hidden="true" className={cn('pointer-events-none absolute end-4 top-4 h-11 w-11 border', tone.panel, tier.key === 'launch' && 'rounded-full', tier.key === 'growth' && 'rotate-12 rounded-xl', tier.key === 'scale' && 'rotate-45 rounded-lg', tier.key === 'enterprise' && 'rounded-[45%_55%_58%_42%]')} />
                    {tier.highlighted ? (
                      <span className="dodo-glass-inset dodo-glass-pill absolute -top-3 start-5 border-blue-500/25 dark:border-blue-400/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600 dark:text-blue-300 shadow-sm">
                        {t('pricingPopular')}
                      </span>
                    ) : null}

                    <header className="min-w-0 pe-12">
                      <p className={cn('font-display text-lg font-bold', tone.text)}>{t(`pricing_${key}_name`)}</p>
                      <p className="mt-1 min-h-[2.75rem] text-pretty text-xs leading-relaxed text-slate-600 dark:text-slate-300">{t(`pricing_${key}_tagline`)}</p>
                    </header>

                    <div className="mt-5 flex min-w-0 items-baseline gap-2">
                      <div className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{t('pricingFromLabel')}</span>
                        <strong className="stat-number mt-0.5 block whitespace-nowrap text-4xl tabular-nums text-slate-950 dark:text-white">{t(`pricing_${key}_price`)}</strong>
                      </div>
                    </div>

                    <div className={cn('dodo-glass-inset relative mt-5 flex min-w-0 items-center gap-3 p-3 pe-11', tone.panel)}>
                      <span className={cn('dodo-glass-inset inline-flex h-10 w-10 shrink-0 items-center justify-center shadow-sm ring-1 ring-black/5', tone.text)}>
                        <Ico name={tier.modelIcon} className="h-5 w-5" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{t('pricingServiceLevelLabel')}</span>
                        <strong className="mt-0.5 block font-display text-sm font-bold leading-tight text-slate-950 dark:text-white [overflow-wrap:anywhere]">{tier.model}</strong>
                      </div>
                      <ChatPricingInfo className="absolute end-1 top-1/2 -translate-y-1/2" label={`${t('pricingServiceLevelLabel')}: ${tier.model}`} text={t('pricingServiceLevelInfo', { model: tier.model })} />
                    </div>

                    <div className="dodo-glass-inset relative mt-3 grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 p-3 pe-11">
                      <span className={cn('inline-flex h-10 w-10 items-center justify-center rounded-xl', tone.soft)}><Ico name="solar:wallet-money-bold-duotone" className="h-5 w-5" /></span>
                      <div className="min-w-0">
                        <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{t('pricingMediaRangeLabel')}</span>
                        <strong className="mt-0.5 block text-sm font-bold leading-tight tabular-nums text-slate-950 dark:text-white [overflow-wrap:anywhere]">{t(`pricing_${key}_media`)}</strong>
                      </div>
                      <ChatPricingInfo className="absolute end-1 top-1/2 -translate-y-1/2" label={`${t('pricingMediaRangeLabel')}: ${t(`pricing_${key}_media`)}`} text={t('pricingMediaRangeInfo')} />
                    </div>

                    <ul className="mt-4 flex flex-1 flex-col">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={feature} className="relative grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] items-center gap-2 border-b border-[#eeeeef] py-3 last:border-b-0">
                          <span className={cn('inline-flex h-8 w-8 items-center justify-center rounded-lg', tone.soft)}><Ico name={featureIndex === 0 ? 'solar:target-bold-duotone' : featureIndex === 1 ? 'solar:palette-bold-duotone' : featureIndex === 2 ? 'solar:chart-2-bold-duotone' : featureIndex === 3 ? 'solar:refresh-circle-bold-duotone' : 'solar:document-text-bold-duotone'} className="h-4 w-4" /></span>
                          <span className="min-w-0 text-pretty text-xs font-medium leading-relaxed text-slate-950 dark:text-white [overflow-wrap:anywhere]">{t(`pricing_${key}_${feature}`)}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={contactHref} className={cn('dodo-glass-box dodo-glass-pill mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 px-5 py-3 text-xs font-semibold transition-[transform,box-shadow,background-color,border-color,color] duration-200 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/45', tone.button)}>
                      {t('pricingCta')} <Ico name="solar:arrow-right-bold-duotone" className="h-4 w-4" />
                    </Link>
                  </article>
                </FadeIn>
              </div>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">{t('pricingContentNote')}{' '}<Link href="/services/content-studio" className="font-semibold text-blue-600 dark:text-blue-300 hover:underline">{t('pricingContentLink')} →</Link></p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{t('pricingSetupNote')}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
