'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const points = [
  { key: 'point1', icon: 'solar:book-2-bold-duotone' },
  { key: 'point2', icon: 'solar:bolt-bold-duotone' },
  { key: 'point3', icon: 'solar:shield-check-bold-duotone' },
] as const;

export const AuctionWhyNiche = () => {
  const t = useTranslations('servicesAuctionMarketing');

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('whyEyebrow')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('whyTitle')}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
              {t('whyIntro')}
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
          {points.map(({ key, icon }, i) => (
            <FadeIn key={key} delay={i * 0.1}>
              <div className="flex h-full flex-col dodo-glass-card p-6 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-7">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300">
                  <Ico name={icon} className="size-[20px]" />
                </span>
                <h4 className="font-display text-base font-bold tracking-tight text-slate-950 dark:text-white md:text-lg">
                  {t(`why_${key}_title`)}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t(`why_${key}_body`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="dodo-glass-card mx-auto mt-10 max-w-3xl border-blue-500/20 dark:border-blue-400/20 bg-blue-500/5 dark:bg-blue-400/10 p-6 md:p-7">
            <p className="text-sm leading-relaxed text-slate-950 dark:text-white md:text-base">
              {t('whyClosing')}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
