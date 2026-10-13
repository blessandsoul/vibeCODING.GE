'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const beforeItems = ['before1', 'before2', 'before3', 'before4'] as const;
const afterItems = ['after1', 'after2', 'after3', 'after4'] as const;

const sparkles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  cx: 10 + (i * 13) % 80,
  cy: 15 + (i * 17) % 70,
  delay: i * 0.4,
}));

function AfterSparkles() {
  const reduced = useReducedMotion();
  if (reduced) return null;
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {sparkles.map((s) => (
        <motion.circle
          key={s.id}
          cx={s.cx}
          cy={s.cy}
          r="0.4"
          fill="#10b981"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.4, 0],
            y: [0, -8, -16],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </svg>
  );
}

function BeforeCard({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <FadeIn delay={0.2}>
      <div className="relative h-full overflow-hidden dodo-glass-card p-7 md:p-8">

        <div className="relative mb-5 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600">
            <Ico name="solar:graph-down-bold-duotone" className="size-[16px]" />
          </span>
          <div>
            <p className="eyebrow text-[10px] font-semibold uppercase tracking-[0.3em] text-rose-600">
              {t('compareBeforeEyebrow')}
            </p>
            <h4 className="font-display text-base font-bold tracking-tight text-slate-950 dark:text-white md:text-lg">
              {t('compareBeforeTitle')}
            </h4>
          </div>
        </div>
        <ul className="relative space-y-3">
          {beforeItems.map((key) => (
            <li key={key} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-rose-500/10 text-rose-600">
                <Ico name="solar:close-circle-bold-duotone" className="size-[12px]" />
              </span>
              <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t(`compare_${key}`)}
              </span>
            </li>
          ))}
        </ul>
        <div className="dodo-glass-rose relative mt-6 p-3">
          <p className="font-(family-name:--font-space-mono) text-[10px] uppercase tracking-widest text-rose-600">
            {t('compareBeforeMetricLabel')}
          </p>
          <p className="font-(family-name:--font-space-mono) text-2xl font-black text-rose-600">
            {t('compareBeforeMetricValue')}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

function AfterCard({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <FadeIn delay={0.1}>
      <div className="dodo-glass-card relative h-full overflow-hidden border-emerald-500/30 p-7 md:p-8">
        <AfterSparkles />
        <div className="relative mb-5 flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
            <Ico name="solar:graph-up-bold-duotone" className="size-[16px]" />
          </span>
          <div>
            <p className="eyebrow text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {t('compareAfterEyebrow')}
            </p>
            <h4 className="font-display text-base font-bold tracking-tight text-slate-950 dark:text-white md:text-lg">
              {t('compareAfterTitle')}
            </h4>
          </div>
        </div>
        <ul className="relative space-y-3">
          {afterItems.map((key) => (
            <li key={key} className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600">
                <Ico name="solar:check-circle-bold-duotone" className="size-[12px]" />
              </span>
              <span className="text-sm leading-relaxed text-slate-950 dark:text-white">
                {t(`compare_${key}`)}
              </span>
            </li>
          ))}
        </ul>
        <div className="dodo-glass-emerald relative mt-6 p-3">
          <p className="font-(family-name:--font-space-mono) text-[10px] uppercase tracking-widest text-emerald-600">
            {t('compareAfterMetricLabel')}
          </p>
          <p className="font-(family-name:--font-space-mono) text-2xl font-black text-emerald-600">
            {t('compareAfterMetricValue')}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export const AuctionComparison = () => {
  const t = useTranslations('servicesAuctionMarketing');

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('compareEyebrow')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('compareTitle')}
            </h3>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <BeforeCard t={t} />
          </div>
          <div className="order-1 md:order-2">
            <AfterCard t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};
