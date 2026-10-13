'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Link } from '@/i18n/navigation';
import { Ico } from '@/components/common/Ico';
import { aiMedia } from '@/lib/media-assets';

/* ── Static data ── */

const PHOTOS = [
  { src: '/images/ai-influencer/01-balcony-golden-hour.jpg', alt: 'Nini on Sololaki balcony, golden hour' },
  { src: '/images/ai-influencer/02-wine-bar.jpg', alt: 'Nini at a natural wine bar' },
  { src: '/images/ai-influencer/03-working-laptop.jpg', alt: 'Nini working at window with laptop' },
  { src: '/images/ai-influencer/04-street-walk.jpg', alt: 'Nini walking on Leselidze street' },
  { src: '/images/ai-influencer/05-khinkali.jpg', alt: 'Nini eating khinkali' },
  { src: '/images/ai-influencer/06-night-bridge.jpg', alt: 'Nini at night Tbilisi bridge' },
];

const AVATAR_SRC = '/images/ai-influencer/avatar.jpg';
const VIDEO_SRC = aiMedia.influencerShowcase;

const ADV_ICONS = [
  'solar:dollar-bold-duotone',
  'solar:target-bold-duotone',
  'solar:bolt-bold-duotone',
  'solar:shield-bold-duotone',
];
const CASE_ICONS = [
  'solar:buildings-3-bold-duotone',
  'solar:t-shirt-bold-duotone',
  'solar:dumbbell-bold-duotone',
  'solar:wineglass-bold-duotone',
  'solar:home-bold-duotone',
  'solar:plain-bold-duotone',
];
const STEP_ICONS = [
  'solar:magic-stick-3-bold-duotone',
  'solar:palette-bold-duotone',
  'solar:eye-bold-duotone',
  'solar:camera-bold-duotone',
  'solar:rocket-bold-duotone',
];

/* ── Component ── */

export const AIInfluencerShowcase = () => {
  const t = useTranslations('servicesAiInfluencer');
  const [revealDone, setRevealDone] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handler = () => setShowStickyCta(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* ═══ VIDEO + REVEAL SECTION ═══ */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Video showcase */}
          <FadeIn>
            <div className="mx-auto mb-10 max-w-3xl overflow-hidden dodo-glass-box md:mb-14">
              <video
                src={VIDEO_SRC}
                autoPlay
                loop
                muted
                playsInline
                className="h-auto w-full"
              />
            </div>
          </FadeIn>

          {/* Instagram-style profile header */}
          <FadeIn delay={0.2}>
            <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-4 text-center md:mb-14">
              <div className="h-24 w-24 overflow-hidden rounded-full ring-2 ring-blue-500/30 ring-offset-2 ring-offset-[#fcfcfb] dark:ring-offset-[#0a0b0e]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={AVATAR_SRC}
                  alt="nini.kalandadze.ai"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-950 dark:text-white">nini.kalandadze.ai</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {t('profileBio')}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Photo grid */}
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {PHOTOS.map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 0.08}>
                <div className="group relative aspect-square overflow-hidden dodo-glass-inset">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Reveal text */}
          <FadeIn delay={0.5}>
            <motion.div
              className="mx-auto mt-10 max-w-2xl text-center md:mt-14"
              onViewportEnter={() => setRevealDone(true)}
              viewport={{ once: true, amount: 0.5 }}
            >
              <AnimatePresence>
                {revealDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 dark:border-blue-400/25 bg-blue-500/5 dark:bg-blue-400/10 px-4 py-2">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-500" />
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                        {t('revealBadge')}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                      {t('revealTitle')}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                      {t('revealDescription')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF / METRICS ═══ */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                {t('proofEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {t('proofTitle')}
              </h2>
            </div>
          </FadeIn>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4 md:mt-12">
            {[
              { icon: 'solar:gallery-bold-duotone', key: 'stat1' },
              { icon: 'solar:heart-bold-duotone', key: 'stat2' },
              { icon: 'solar:graph-up-bold-duotone', key: 'stat3' },
              { icon: 'solar:clock-circle-bold-duotone', key: 'stat4' },
            ].map(({ icon, key }, i) => (
              <FadeIn key={key} delay={i * 0.08}>
                <div className="flex flex-col items-center gap-2 dodo-glass-card p-5 text-center transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-6">
                  <span className="flex h-10 w-10 items-center justify-center dodo-glass-inset text-slate-600 dark:text-slate-300">
                    <Ico name={icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                    {t(`${key}Value`)}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-300">
                    {t(`${key}Label`)}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="relative py-12 md:py-20">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                {t('compareEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {t('compareTitle')}
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="dodo-glass-card mx-auto mt-10 max-w-3xl overflow-hidden md:mt-14">
              {/* Header */}
              <div className="grid grid-cols-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                <div className="p-3 text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300 md:p-4 md:text-sm" />
                <div className="border-l border-slate-200/80 dark:border-white/10 p-3 text-center text-xs font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300 md:p-4 md:text-sm">
                  {t('compareReal')}
                </div>
                <div className="border-l border-slate-200/80 dark:border-white/10 bg-blue-500/5 dark:bg-blue-400/10 p-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 md:p-4 md:text-sm">
                  {t('compareAi')}
                </div>
              </div>
              {/* Rows */}
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="grid grid-cols-3 border-b border-slate-200/80 dark:border-white/10 last:border-b-0"
                >
                  <div className="p-3 text-xs font-medium text-slate-950 dark:text-white md:p-4 md:text-sm">
                    {t(`compareRow${n}`)}
                  </div>
                  <div className="flex items-center justify-center border-l border-slate-200/80 dark:border-white/10 p-3 md:p-4">
                    {t(`compareRow${n}Real`) === '+' ? (
                      <Ico name="solar:check-circle-bold-duotone" className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                    ) : t(`compareRow${n}Real`) === '-' ? (
                      <Ico name="solar:close-circle-bold-duotone" className="h-4 w-4 text-slate-500/70 dark:text-slate-400/70" />
                    ) : (
                      <span className="text-xs text-slate-600 dark:text-slate-300 md:text-sm">
                        {t(`compareRow${n}Real`)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center border-l border-slate-200/80 dark:border-white/10 bg-blue-500/5 dark:bg-blue-400/10 p-3 md:p-4">
                    {t(`compareRow${n}Ai`) === '+' ? (
                      <Ico name="solar:check-circle-bold-duotone" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                    ) : t(`compareRow${n}Ai`) === '-' ? (
                      <Ico name="solar:minus-circle-bold-duotone" className="h-4 w-4 text-slate-500/70 dark:text-slate-400/70" />
                    ) : (
                      <span className="text-xs font-medium text-blue-600 dark:text-blue-300 md:text-sm">
                        {t(`compareRow${n}Ai`)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="relative py-12 md:py-20">
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                {t('advantagesEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {t('advantagesTitle')}{' '}
                <span className="text-slate-950 dark:text-white">{t('advantagesTitleAccent')}</span>
              </h2>
            </div>
          </FadeIn>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:mt-14">
            {ADV_ICONS.map((Icon, i) => {
              const n = i + 1;
              return (
                <FadeIn key={n} delay={i * 0.08}>
                <div className="dodo-glass-card group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                    <div className="relative z-10 mb-5 flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{t(`adv${n}Title`)}</h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center dodo-glass-inset text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                        <Ico name={Icon} className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="relative z-10 mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(`adv${n}Desc`)}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ VISUAL ONBOARDING PROCESS ═══ */}
      <section className="relative py-12 md:py-20">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                {t('processEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {t('processTitle')}
              </h2>
            </div>
          </FadeIn>

          {/* Visual timeline with cards */}
          <div className="mx-auto mt-10 max-w-4xl md:mt-14">
            {STEP_ICONS.map((Icon, i) => {
              const n = i + 1;
              const isEven = i % 2 === 1;
              return (
                <FadeIn key={n} delay={i * 0.1}>
                  <div className="group relative mb-6 last:mb-0 md:mb-8">
                    {/* Connector line */}
                    {n < 5 && (
                      <div className="absolute left-6 top-16 hidden h-[calc(100%)] w-px bg-linear-to-b from-blue-600/30 to-[#2563eb]/10 md:left-1/2 md:block" />
                    )}
                    <div className={`flex flex-col gap-4 md:flex-row md:items-center md:gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      {/* Step number + icon card */}
                      <div className="flex items-center gap-4 md:w-1/2 md:justify-end">
                        <div className={`flex items-center gap-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className="dodo-glass-inset flex h-12 w-12 shrink-0 items-center justify-center border-blue-500/30 dark:border-blue-400/25 bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300 transition-colors group-hover:bg-blue-500/20 dark:group-hover:bg-blue-400/25">
                            <Ico name={Icon} className="h-6 w-6" />
                          </div>
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-bold text-white md:hidden">
                            {n}
                          </div>
                        </div>
                      </div>

                      {/* Desktop center number */}
                      <div className="dodo-glass-inset relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 dark:border-blue-400 font-bold text-blue-600 dark:text-blue-300 md:flex">
                        {n}
                      </div>

                      {/* Content card */}
                      <div className="dodo-glass-card p-5 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:w-1/2 md:p-6">
                        <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">{t(`step${n}Title`)}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                          {t(`step${n}Desc`)}
                        </p>
                        <p className="mt-3 text-xs font-medium text-blue-600 dark:text-blue-300">
                          {t(`step${n}Detail`)}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                {t('useCasesEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {t('useCasesTitle')}
              </h2>
            </div>
          </FadeIn>

          <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
            {CASE_ICONS.map((Icon, i) => {
              const n = i + 1;
              return (
                <FadeIn key={n} delay={i * 0.06}>
                <div className="dodo-glass-card group flex h-full flex-col overflow-hidden p-7 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                    <div className="relative z-10 mb-5 flex items-center justify-between">
                      <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">{t(`case${n}Title`)}</h3>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center dodo-glass-inset text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                        <Ico name={Icon} className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="relative z-10 mt-2.5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {t(`case${n}Desc`)}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ URGENCY / EXCLUSIVITY ═══ */}
      <section className="relative py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="dodo-glass-card mx-auto max-w-2xl border-blue-500/20 dark:border-blue-400/20 bg-blue-500/5 dark:bg-blue-400/10 p-6 text-center md:p-10">
              <div className="dodo-glass-inset dodo-glass-pill mb-4 inline-flex items-center gap-2 border-blue-500/30 dark:border-blue-400/25 px-4 py-1.5">
                <Ico name="solar:users-group-rounded-bold-duotone" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-300">
                  {t('urgencyBadge')}
                </span>
              </div>
              <h2 className="font-display text-xl font-bold tracking-tight text-slate-950 dark:text-white md:text-2xl">
                {t('urgencyTitle')}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                {t('urgencyDesc')}
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="w-full rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-6 py-3 text-center text-sm font-semibold text-white transition duration-200 hover:brightness-110 active:scale-95 sm:w-auto"
                >
                  {t('urgencyCta')}
                </Link>
                <span className="text-xs text-slate-600 dark:text-slate-300">
                  {t('urgencyNote')}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <FadeIn>
            <div className="mx-auto max-w-2xl dodo-glass-card p-8 text-center md:p-12">
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                {t('finalCtaTitle')}
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                {t('finalCtaDesc')}
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:brightness-110 active:scale-95"
              >
                {t('cta')}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-40 dodo-glass-card border-t-0 p-3 md:hidden"
          >
            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:brightness-110 active:scale-95"
            >
              {t('cta')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
