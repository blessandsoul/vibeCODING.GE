'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const cards = [
  { key: 'card1', icon: 'solar:magnifer-bold-duotone' },
  { key: 'card2', icon: 'solar:file-text-bold-duotone' },
  { key: 'card3', icon: 'solar:link-bold-duotone' },
  { key: 'card4', icon: 'solar:map-point-bold-duotone' },
] as const;

const steps = [
  { key: 'how1', num: '01' },
  { key: 'how2', num: '02' },
  { key: 'how3', num: '03' },
  { key: 'how4', num: '04' },
] as const;

export const SEOShowcase = () => {
  const t = useTranslations('servicesSeo');

  return (
    <section className="relative py-8 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <h2 className="eyebrow uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('cardsTitle')}
            </h2>
            <p className="mt-2 text-base text-slate-600/70 dark:text-slate-300/80 md:text-lg">
              {t('cardsSubtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {cards.map((card, i) => {
            return (
              <FadeIn key={card.key} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden dodo-glass-card p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">{t(`${card.key}Title`)}</h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center dodo-glass-inset text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                      <Ico name={card.icon} className="size-[18px]" />
                    </span>
                  </div>
                  <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t(`${card.key}Desc`)}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>


        <FadeIn delay={0.3}>
          <div className="mt-16 md:mt-20">
            <h2 className="eyebrow mb-8 text-center uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('howTitle')}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FadeIn key={step.key} delay={0.3 + i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-(family-name:--font-space-mono) text-3xl font-bold text-blue-600/40 dark:text-blue-300/40">
                      {step.num}
                    </span>
                    <h3 className="mt-3 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white">{t(`${step.key}Title`)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(`${step.key}Desc`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
