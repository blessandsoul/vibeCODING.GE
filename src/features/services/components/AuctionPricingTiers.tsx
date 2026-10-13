'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Link } from '@/i18n/navigation';
import { Ico } from '@/components/common/Ico';

const tiers = [
  {
    key: 'foundation',
    features: ['feat1', 'feat2', 'feat3', 'feat4'],
    highlighted: false,
  },
  {
    key: 'acceleration',
    features: ['feat1', 'feat2', 'feat3', 'feat4', 'feat5'],
    highlighted: true,
  },
  {
    key: 'domination',
    features: ['feat1', 'feat2', 'feat3', 'feat4', 'feat5'],
    highlighted: false,
  },
] as const;

type AuctionPricingTiersProps = {
  contactHref?: string;
};

export const AuctionPricingTiers = ({ contactHref = '/contact' }: AuctionPricingTiersProps) => {
  const t = useTranslations('servicesAuctionMarketing');
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIdx, setActiveIdx] = useState(1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || typeof window === 'undefined') return;
    if (window.matchMedia('(min-width: 768px)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const idx = cardRefs.current.findIndex((c) => c === entry.target);
            if (idx !== -1) setActiveIdx(idx);
          }
        }
      },
      { root: track, threshold: [0.6] },
    );
    cardRefs.current.forEach((c) => c && observer.observe(c));

    const highlighted = cardRefs.current[1];
    if (highlighted) {
      highlighted.scrollIntoView({ block: 'nearest', inline: 'center' });
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (idx: number) => {
    const card = cardRefs.current[idx];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-10 text-center md:mb-12">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('pricingEyebrow')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('pricingTitle')}
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
              {t('pricingSubtitle')}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 md:hidden">
              {t('pricingScrollHint')}
            </p>
          </div>
        </FadeIn>

        <div
          ref={trackRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.key}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="min-w-[85%] shrink-0 snap-center md:min-w-0 md:shrink"
            >
              <FadeIn delay={i * 0.1}>
                <div
                  className={`dodo-glass-card relative flex h-full flex-col p-7 md:p-8 ${
                    tier.highlighted
                      ? 'tier-highlighted border-blue-500/30 dark:border-blue-400/25 shadow-[0_18px_40px_rgba(37,99,235,0.12)] shadow-[#2563eb]/10'
                      : 'border-slate-200/80 dark:border-white/10'
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                      {t('pricingPopular')}
                    </span>
                  )}

                  <div className="mb-5">
                    <p className="eyebrow text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                      {t(`pricing_${tier.key}_eyebrow`)}
                    </p>
                    <h4 className="mt-1 font-display text-2xl font-black tracking-tight text-slate-950 dark:text-white">
                      {t(`pricing_${tier.key}_name`)}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(`pricing_${tier.key}_tagline`)}
                    </p>
                  </div>

                  <div className="mb-6 border-y border-slate-200/80 dark:border-white/10 py-4">
                    <p className="font-(family-name:--font-space-mono) text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300">
                      {t('pricingFromLabel')}
                    </p>
                    <p className="mt-0.5 font-display text-3xl font-black tracking-tight text-slate-950 dark:text-white">
                      {t(`pricing_${tier.key}_price`)}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                      {t('pricingNegotiable')}
                    </p>
                  </div>

                  <ul className="mb-6 flex-1 space-y-3">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md ${
                            tier.highlighted
                              ? 'bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300'
                              : 'bg-slate-100/60 dark:bg-[#0a0b0e]/10 text-slate-600 dark:text-slate-300'
                          }`}
                        >
                          <Ico name="solar:check-circle-bold-duotone" className="size-[12px]" />
                        </span>
                        <span className="text-sm leading-relaxed text-slate-950 dark:text-white">
                          {t(`pricing_${tier.key}_${feat}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={contactHref}
                    className={`inline-flex items-center justify-center gap-2 text-sm font-semibold transition duration-200 ${
                      tier.highlighted
                        ? 'rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-5 py-3 text-white shadow-md shadow-[#2563eb]/10 hover:brightness-110'
                        : 'dodo-glass-inset px-5 py-3 text-slate-950 dark:text-white hover:border-blue-500 dark:hover:border-blue-400'
                    }`}
                  >
                    {t('pricingCta')} <Ico name="solar:arrow-right-bold-duotone" className="size-[14px]" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2 md:hidden">
          {tiers.map((tier, i) => (
            <button
              key={tier.key}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Show ${tier.key} tier`}
              className={`h-2 rounded-full transition duration-200 ${
                activeIdx === i
                  ? 'w-6 bg-blue-600 dark:bg-blue-500'
                  : 'w-2 bg-[#e5e5e5] hover:bg-[#525252]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
