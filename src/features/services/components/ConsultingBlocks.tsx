'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const ICONS = [
  'solar:clipboard-check-bold-duotone',
  'solar:map-bold-duotone',
  'solar:users-group-rounded-bold-duotone',
  'solar:magnifer-bold-duotone',
];

export const ConsultingBlocks = () => {
  const t = useTranslations('servicesConsulting');

  const blocks = [1, 2, 3, 4].map((n, i) => {
    const iconName = ICONS[i];
    return (
      <FadeIn key={n} delay={i * 0.05}>
        <div className="group h-full dodo-glass-card p-6 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300">
            <Ico name={iconName} className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-slate-950 dark:text-white md:text-xl">
            {t(`block${n}Title`)}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            {t(`block${n}Desc`)}
          </p>
        </div>
      </FadeIn>
    );
  });

  return (
    <section className="relative py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">{blocks}</div>
        <FadeIn delay={0.25}>
          <p className="mt-12 text-center text-sm font-medium text-slate-600 dark:text-slate-300 md:text-base">
            {t('pricingHook')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
