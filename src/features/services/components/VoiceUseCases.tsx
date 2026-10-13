'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const USE_CASES = [
  { key: 'uc1', icon: 'solar:phone-bold-duotone' },
  { key: 'uc2', icon: 'solar:call-chat-rounded-bold-duotone' },
  { key: 'uc3', icon: 'solar:plate-bold-duotone' },
  { key: 'uc4', icon: 'solar:global-bold-duotone' },
] as const;

type VoiceUseCasesProps = {
  contactHref?: string;
};

export const VoiceUseCases = ({ contactHref = '/contact' }: VoiceUseCasesProps) => {
  const t = useTranslations('servicesVoiceAgents');

  return (
    <section className="relative py-12 md:py-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('useCasesEyebrow')}
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('useCasesTitle')}
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
              {t('useCasesSubtitle')}
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 md:gap-5">
          {USE_CASES.map((uc, i) => (
            <FadeIn key={uc.key} delay={i * 0.08}>
              <div className="dodo-glass-card flex h-full flex-col gap-4 p-6 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 dark:bg-blue-400/15 text-blue-600 dark:text-blue-300">
                    <Ico name={uc.icon} className="size-[20px]" />
                  </span>
                  <h3 className="text-base font-bold text-slate-950 dark:text-white md:text-lg">
                    {t(`useCases.${uc.key}.title`)}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-950 dark:text-white">{t(`useCases.${uc.key}.painLabel`)}: </span>
                  {t(`useCases.${uc.key}.pain`)}
                </p>
                <p className="text-sm leading-relaxed text-slate-950 dark:text-white">
                  <span className="font-semibold text-blue-600 dark:text-blue-300">{t(`useCases.${uc.key}.resultLabel`)}: </span>
                  {t(`useCases.${uc.key}.result`)}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  <span className="dodo-glass-inset dodo-glass-pill px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                    {t(`useCases.${uc.key}.vertical`)}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.35}>
          <div className="mt-10 text-center">
            <p className="mb-4 text-sm font-semibold text-slate-600 dark:text-slate-300 md:text-base">
              {t('useCasesCta')}
            </p>
            <Link
              href={contactHref}
              className="inline-block rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#2563eb]/10 transition duration-200 hover:opacity-90 hover:shadow-lg hover:shadow-[#2563eb]/10 active:scale-95"
            >
              {t('useCasesCtaButton')}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
