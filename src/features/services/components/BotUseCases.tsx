'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/common/FadeIn';

/* ─── SVG use-case icons ─── */
const UseCaseIcons = [
    // Clock / 24-7
    <svg key="clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </svg>,
    // Wallet / cost
    <svg key="wallet" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
        <rect x="2" y="6" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M16 14h2" />
    </svg>,
    // Zap / speed
    <svg key="zap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 md:h-8 md:w-8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>,
];

const USE_CASES = [
    { key: 'uc1' },
    { key: 'uc2' },
    { key: 'uc3' },
] as const;

type BotUseCasesProps = {
    contactHref?: string;
};

export const BotUseCases = ({ contactHref = '/contact' }: BotUseCasesProps = {}) => {
    const t = useTranslations('chatDemo');

    return (
        <section className="relative py-12 md:py-20">
            <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
                            {t('useCasesTitle')}
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
                            {t('useCasesSubtitle')}
                        </p>
                    </div>
                </FadeIn>

                <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3 md:gap-6">
                    {USE_CASES.map((uc, i) => (
                        <FadeIn key={uc.key} delay={i * 0.1}>
                            <div className="flex flex-col items-center gap-4 dodo-glass-card p-6 text-center transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-8">
                                <span className="text-blue-600/80 dark:text-blue-300">{UseCaseIcons[i]}</span>
                                <div>
                                    <h3 className="font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white md:text-xl">
                                        {t(`useCases.${uc.key}.stat`)}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">
                                        {t(`useCases.${uc.key}.title`)}
                                    </p>
                                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                                        {t(`useCases.${uc.key}.desc`)}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* CTA */}
                <FadeIn delay={0.35}>
                    <div className="mt-10 text-center">
                        <p className="mb-4 text-sm font-semibold text-slate-600 dark:text-slate-300 md:text-base">
                            {t('useCasesCta')}
                        </p>
                        <Link
                            href={contactHref}
                            className="inline-block rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#2563eb]/20 transition duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-[#2563eb]/30 active:scale-95"
                        >
                            {t('useCasesCtaButton')}
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
