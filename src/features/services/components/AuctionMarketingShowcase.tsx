'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const cards = [
  { key: 'card1', Icon: 'solar:scale-bold-duotone' },
  { key: 'card2', Icon: 'solar:database-bold-duotone' },
  { key: 'card3', Icon: 'solar:magnifer-bold-duotone' },
  { key: 'card4', Icon: 'solar:target-bold-duotone' },
  { key: 'card5', Icon: 'solar:siderbar-bold-duotone' },
  { key: 'card6', Icon: 'solar:delivery-bold-duotone' },
] as const;

const steps = [
  { key: 'how1', num: '01' },
  { key: 'how2', num: '02' },
  { key: 'how3', num: '03' },
  { key: 'how4', num: '04' },
] as const;

const auctionLogos = [
  { key: 'copart', label: 'Copart', mono: 'C', tagline: 'auctionMeta_copart' },
  { key: 'iaai', label: 'IAAI', mono: 'I', tagline: 'auctionMeta_iaai' },
  { key: 'manheim', label: 'Manheim', mono: 'M', tagline: 'auctionMeta_manheim' },
] as const;

type AuctionSource = 'copart' | 'iaai' | 'manheim';

const lots: Array<{
  vin: string;
  model: string;
  price: string;
  delta: string;
  source: AuctionSource;
}> = [
  { vin: '1FTFW1ET5DFA12345', model: 'Ford F-150 2023', price: '$18,400', delta: '+12%', source: 'copart' },
  { vin: '5YJ3E1EA7KF123456', model: 'Tesla Model 3 2022', price: '$24,900', delta: '+7%', source: 'iaai' },
  { vin: 'WBA8E9G50GNT12345', model: 'BMW 3 Series 2021', price: '$15,200', delta: '+5%', source: 'manheim' },
  { vin: '1HGCV1F30LA123456', model: 'Honda Accord 2020', price: '$12,750', delta: '+9%', source: 'copart' },
];

const sourceColors: Record<AuctionSource, string> = {
  copart: 'border-blue-500/30 dark:border-blue-400/25 bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300',
  iaai: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600',
  manheim: 'border-amber-500/30 bg-amber-500/10 text-amber-600',
};

function shortVin(vin: string) {
  if (vin.length <= 12) return vin;
  return `${vin.slice(0, 6)}…${vin.slice(-4)}`;
}

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

function AuctionFeedPreview() {
  const t = useTranslations('servicesAuctionMarketing');

  return (
    <FadeIn delay={0.15}>
      <div className="mx-auto mt-12 max-w-3xl dodo-glass-card p-5 md:p-8">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('feedEyebrow')}
            </p>
            <h3 className="mt-1 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white md:text-lg">
              {t('feedTitle')}
            </h3>
          </div>
          <span className="flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600">
            <motion.span
              className="block h-2 w-2 rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <Ico name="solar:graph-up-bold-duotone" className="size-[12px]" /> {t('liveBadge')}
          </span>
        </div>

        <div className="space-y-2">
          {lots.map((lot, i) => (
            <motion.div
              key={lot.vin}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-3 dodo-glass-inset px-3 py-3 md:gap-4 md:px-4"
            >
              <span
                className={`shrink-0 rounded-md border px-2 py-1 font-(family-name:--font-space-mono) text-[9px] font-bold tracking-widest ${sourceColors[lot.source]}`}
              >
                {t(
                  lot.source === 'copart'
                    ? 'auctionSourceCopart'
                    : lot.source === 'iaai'
                      ? 'auctionSourceIaai'
                      : 'auctionSourceManheim',
                )}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-950 dark:text-white md:text-base">
                  {lot.model}
                </p>
                <p className="mt-0.5 truncate font-(family-name:--font-space-mono) text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300 md:text-[11px]">
                  <span className="md:hidden">VIN {shortVin(lot.vin)}</span>
                  <span className="hidden md:inline">VIN {lot.vin}</span>
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-base font-bold text-slate-950 dark:text-white md:text-base">{lot.price}</p>
                <p className="text-[10px] font-semibold text-emerald-600 md:text-xs">
                  {lot.delta}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-slate-600 dark:text-slate-300">
          {t('feedFootnote')}
        </p>
      </div>
    </FadeIn>
  );
}

export const AuctionMarketingShowcase = () => {
  const t = useTranslations('servicesAuctionMarketing');
  const [stat1Value, stat1Ref] = useAnimatedCounter(380);
  const [stat2Value, stat2Ref] = useAnimatedCounter(62);
  const [stat3Value, stat3Ref] = useAnimatedCounter(94);

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mb-6 md:gap-4">
            {auctionLogos.map((logo, i) => (
              <FadeIn key={logo.key} delay={i * 0.08}>
                <div className="group flex items-center gap-3 dodo-glass-box px-4 py-3.5 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:px-5 md:py-4">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-blue-600/15 to-blue-400/15 font-(family-name:--font-space-mono) text-xl font-black text-slate-950 dark:text-white">
                    {logo.mono}
                    <motion.span
                      aria-hidden
                      initial={{ x: '-120%' }}
                      animate={{ x: '120%' }}
                      transition={{
                        duration: 1.2,
                        delay: 0.3 + i * 0.15,
                        ease: 'easeOut',
                      }}
                      className="pointer-events-none absolute inset-y-0 w-1/2 bg-linear-to-r from-transparent via-white/15 to-transparent"
                    />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-base font-bold tracking-tight text-slate-950 dark:text-white">
                      {logo.label}
                    </p>
                    <p className="truncate text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      {t(logo.tagline)}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p className="mb-10 text-center text-[10px] uppercase tracking-wider text-slate-600 dark:text-slate-300 md:mb-12">
            {t('auctionDisclaimer')}
          </p>
        </FadeIn>

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {cards.map((card, i) => {
            const iconName = card.Icon;
            return (
              <FadeIn key={card.key} delay={i * 0.08}>
                <div className="group flex h-full flex-col overflow-hidden dodo-glass-card p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <h4 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
                      {t(`${card.key}Title`)}
                    </h4>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center dodo-glass-inset text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                      <Ico name={iconName} className="size-[18px]" />
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

        <AuctionFeedPreview />

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
                    <h4 className="mt-3 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white">
                      {t(`${step.key}Title`)}
                    </h4>
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
                {stat1Value}%
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                {t('stat1')}
              </p>
            </div>
            <div ref={stat2Ref} className="text-center">
              <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                {stat2Value}%
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                {t('stat2')}
              </p>
            </div>
            <div ref={stat3Ref} className="text-center">
              <p className="stat-number text-2xl text-slate-950 dark:text-white md:text-3xl">
                {stat3Value}%
              </p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                {t('stat3')}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
