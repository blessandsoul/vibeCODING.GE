'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

/* ─── SVG stat icons ─── */
const StatIcons = [
    // Bot / AI icon
    <svg key="bot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16.01" />
        <line x1="16" y1="16" x2="16" y2="16.01" />
    </svg>,
    // Infinity icon
    <svg key="inf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4z" />
    </svg>,
    // Building / business icon
    <svg key="biz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <path d="M9 18h6v4H9z" />
    </svg>,
];

export const BotDemoIntro = () => {
    const t = useTranslations('chatDemo');

    return (
        <section className="relative py-8 md:py-12">
            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="eyebrow text-xs uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                            {t('introEyebrow')}
                        </p>
                        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl lg:text-4xl">
                            {t('introTitle')}{' '}
                            <span className="text-slate-950 dark:text-white">{t('introTitleAccent')}</span>
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
                            {t('introSubtitle')}
                        </p>
                    </div>
                </FadeIn>

                {/* Animated stats strip */}
                <FadeIn delay={0.15}>
                    <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3 md:gap-4">
                        {(['stat1', 'stat2', 'stat3'] as const).map((key, i) => (
                            <div
                                key={key}
                                className="flex items-center gap-2 dodo-glass-inset dodo-glass-pill px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors duration-300 hover:border-blue-500/20 dark:hover:border-blue-400/20 hover:text-slate-950 dark:hover:text-white md:text-sm"
                            >
                                <span className="text-blue-600/80 dark:text-blue-300">{StatIcons[i]}</span>
                                {t(`intro.${key}`)}
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
