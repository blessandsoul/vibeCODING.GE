'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const ENGINES = [
    { key: 'chatgpt', label: 'ChatGPT' },
    { key: 'claude', label: 'Claude' },
    { key: 'gemini', label: 'Gemini' },
    { key: 'perplexity', label: 'Perplexity' },
] as const;

const cards = [
    { key: 'card1', icon: 'solar:server-path-bold-duotone' },
    { key: 'card2', icon: 'solar:chat-square-bold-duotone' },
    { key: 'card3', icon: 'solar:code-bold-duotone' },
    { key: 'card4', icon: 'solar:pulse-2-bold-duotone' },
] as const;

const steps = [
    { key: 'how1', num: '01' },
    { key: 'how2', num: '02' },
    { key: 'how3', num: '03' },
    { key: 'how4', num: '04' },
] as const;

function CitationDemo() {
    const t = useTranslations('servicesLlmSeo');
    const [activeEngine, setActiveEngine] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEngine((prev) => (prev + 1) % ENGINES.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <FadeIn delay={0.15}>
            <div className="mx-auto mt-12 max-w-3xl dodo-glass-card p-6 md:p-8">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="eyebrow text-xs uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                            {t('demoEyebrow')}
                        </p>
                        <h3 className="mt-1 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white md:text-lg">{t('demoTitle')}</h3>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-md border border-blue-500/30 dark:border-blue-400/25 bg-blue-500/10 dark:bg-blue-400/15 px-2.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-300">
                        <Ico name="solar:magic-stick-3-bold-duotone" className="size-[12px]" /> LIVE
                    </span>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                    {ENGINES.map((engine, i) => (
                        <button
                            key={engine.key}
                            type="button"
                            onClick={() => setActiveEngine(i)}
                            className={`dodo-glass-box px-3 py-1.5 text-xs font-semibold transition duration-300 ${activeEngine === i
                                ? 'border-blue-500/40 dark:border-blue-400/30 bg-blue-500/10 dark:bg-blue-400/15 text-slate-950 dark:text-white shadow-md shadow-[#2563eb]/10'
                                : 'dodo-glass-box border-slate-200/80 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-blue-500/20 dark:hover:border-blue-400/20'
                                }`}
                        >
                            {engine.label}
                        </button>
                    ))}
                </div>

                <div className="dodo-glass-inset p-4 md:p-5">
                    <p className="font-(family-name:--font-space-mono) text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {t('demoQuery')}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-950 dark:text-white">
                        {t('demoQueryText')}
                    </p>

                    <div className="my-4 h-px bg-[#e5e5e5]" />

                    <p className="font-(family-name:--font-space-mono) text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {ENGINES[activeEngine].label} {t('demoAnswer')}
                    </p>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeEngine}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2"
                        >
                            <p className="text-sm leading-relaxed text-slate-950 dark:text-white/90">
                                {t('demoAnswerText')}
                            </p>
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                <span className="text-xs text-slate-600 dark:text-slate-300">{t('demoSource')}</span>
                                <span className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/30 dark:border-blue-400/25 bg-blue-500/10 dark:bg-blue-400/15 px-2 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-300">
                                    <Ico name="solar:chat-square-bold-duotone" className="size-[10px]" /> ainow.ge
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </FadeIn>
    );
}

function VisibilityCompare() {
    const t = useTranslations('servicesLlmSeo');
    return (
        <FadeIn delay={0.2}>
            <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
                <div className="dodo-glass-rose relative overflow-hidden p-6 md:p-8">
                    <span className="font-(family-name:--font-space-mono) text-[10px] uppercase tracking-widest text-rose-400/70">
                        {t('compareBefore')}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">{t('compareBeforeTitle')}</h4>
                    <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-rose-400/60" />
                            {t('compareBefore1')}
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-rose-400/60" />
                            {t('compareBefore2')}
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-rose-400/60" />
                            {t('compareBefore3')}
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-rose-400/60" />
                            {t('compareBefore4')}
                        </li>
                    </ul>
                </div>

                <div className="dodo-glass-emerald relative overflow-hidden p-6 md:p-8">
                    <span className="font-(family-name:--font-space-mono) text-[10px] uppercase tracking-widest text-emerald-400/80">
                        {t('compareAfter')}
                    </span>
                    <h4 className="mt-2 font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">{t('compareAfterTitle')}</h4>
                    <ul className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                            {t('compareAfter1')}
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                            {t('compareAfter2')}
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                            {t('compareAfter3')}
                        </li>
                        <li className="flex items-start gap-2.5">
                            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                            {t('compareAfter4')}
                        </li>
                    </ul>
                </div>
            </div>
        </FadeIn>
    );
}

export const LLMSEOShowcase = () => {
    const t = useTranslations('servicesLlmSeo');

    return (
        <section className="relative py-8 md:py-12">
            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                <FadeIn>
                    <div className="mb-8 text-center md:mb-10">
                        <h3 className="eyebrow uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                            {t('cardsTitle')}
                        </h3>
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
                                        <h4 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">{t(`${card.key}Title`)}</h4>
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

                <CitationDemo />

                <VisibilityCompare />

                <FadeIn delay={0.3}>
                    <div className="mt-16 md:mt-20">
                        <h3 className="eyebrow mb-8 text-center uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                            {t('howTitle')}
                        </h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {steps.map((step, i) => (
                                <FadeIn key={step.key} delay={0.3 + i * 0.08}>
                                    <div className="flex flex-col items-center text-center">
                                        <span className="font-(family-name:--font-space-mono) text-3xl font-bold text-blue-600/40 dark:text-blue-300/40">
                                            {step.num}
                                        </span>
                                        <h4 className="mt-3 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white">{t(`${step.key}Title`)}</h4>
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
