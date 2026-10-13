'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const cards = [
  { key: 'card1', icon: 'solar:target-bold-duotone' },
  { key: 'card2', icon: 'solar:magic-stick-3-bold-duotone' },
  { key: 'card3', icon: 'solar:playback-speed-bold-duotone' },
  { key: 'card4', icon: 'solar:repeat-bold-duotone' },
] as const;

const steps = [
  { key: 'how1', num: '01' },
  { key: 'how2', num: '02' },
  { key: 'how3', num: '03' },
  { key: 'how4', num: '04' },
] as const;

function useAnimatedCounter(end: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDone(true);
          const start = performance.now();
          const animate = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, done]);

  return [value, ref] as const;
}

function RoasChart() {
  const t = useTranslations('servicesMetaAds');
  // ROAS multiple climbing across 6 months (higher = better)
  const points = [1.2, 1.6, 2.1, 2.6, 3.0, 3.4, 3.7, 3.9, 4.0, 4.1];
  const w = 480;
  const h = 200;
  const stepX = w / (points.length - 1);
  const maxY = 4.5;

  // invert: high ROAS sits near the top (small y)
  const y = (p: number) => h - (p / maxY) * h;
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${y(p)}`)
    .join(' ');

  return (
    <FadeIn delay={0.15}>
      <div className="mx-auto mt-12 max-w-3xl dodo-glass-card p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('chartEyebrow')}
            </p>
            <h3 className="mt-1 text-base font-bold text-slate-950 dark:text-white md:text-lg">{t('chartTitle')}</h3>
          </div>
          <span className="flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600">
            <Ico name="solar:graph-up-bold-duotone" className="size-[12px]" /> 1.2x → 4.1x ROAS
          </span>
        </div>

        <div className="relative">
          <svg viewBox={`0 0 ${w} ${h + 30}`} className="h-auto w-full" fill="none">
            <defs>
              <linearGradient id="roasLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="roasFill" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[0.25, 0.5, 0.75].map((p) => (
              <line
                key={p}
                x1={0}
                y1={h * p}
                x2={w}
                y2={h * p}
                stroke="currentColor"
                strokeOpacity={0.08}
                strokeDasharray="4 6"
              />
            ))}

            <motion.path
              d={`${path} L ${w} ${h} L 0 ${h} Z`}
              fill="url(#roasFill)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            <motion.path
              d={path}
              stroke="url(#roasLine)"
              strokeWidth={2.5}
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />

            {points.map((p, i) => (
              <motion.circle
                key={i}
                cx={i * stepX}
                cy={y(p)}
                r={3}
                fill="#2563eb"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.07 }}
              />
            ))}
          </svg>

          <div className="mt-2 flex justify-between font-(family-name:--font-space-mono) text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300">
            <span>{t('chartMonth1')}</span>
            <span>{t('chartMonth3')}</span>
            <span>{t('chartMonth6')}</span>
          </div>
          <p className="mt-3 text-center text-[10px] leading-relaxed text-slate-600 dark:text-slate-300">
            {t('chartNote')}
          </p>
        </div>
      </div>
    </FadeIn>
  );
}

export const MetaAdsShowcase = () => {
  const t = useTranslations('servicesMetaAds');
  const [stat1Value, stat1Ref] = useAnimatedCounter(22);
  const [stat2Value, stat2Ref] = useAnimatedCounter(18);
  const [stat3Value, stat3Ref] = useAnimatedCounter(150);

  return (
    <section className="relative py-8 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <h3 className="eyebrow text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('cardsTitle')}
            </h3>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-300 md:text-lg">
              {t('cardsSubtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {cards.map((card, i) => {
            return (
              <FadeIn key={card.key} delay={i * 0.08}>
                <div className="dodo-glass-card group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <h4 className="text-lg font-bold text-slate-950 dark:text-white">{t(`${card.key}Title`)}</h4>
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

        <RoasChart />

        <FadeIn delay={0.3}>
          <div className="mt-16 md:mt-20">
            <h3 className="eyebrow mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('howTitle')}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <FadeIn key={step.key} delay={0.3 + i * 0.08}>
                  <div className="flex flex-col items-center text-center">
                    <span className="font-(family-name:--font-space-mono) text-3xl font-bold text-blue-600/40 dark:text-blue-300/40">
                      {step.num}
                    </span>
                    <h4 className="mt-3 text-base font-bold text-slate-950 dark:text-white">{t(`${step.key}Title`)}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(`${step.key}Desc`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-14 grid grid-cols-3 gap-4 md:mt-16">
            <div ref={stat1Ref} className="text-center">
              <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                +{stat1Value}%
              </p>
              <p className="mt-1 flex items-center justify-center gap-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                <Ico name="solar:chart-bold-duotone" className="size-[12px]" /> {t('stat1')}
              </p>
            </div>
            <div ref={stat2Ref} className="text-center">
              <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                −{stat2Value}%
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                {t('stat2')}
              </p>
            </div>
            <div ref={stat3Ref} className="text-center">
              <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                {stat3Value}+
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                {t('stat3')}
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-[10px] leading-relaxed text-slate-600 dark:text-slate-300">
            {t('statsNote')}
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
