'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { LinkedInIcon } from '@/components/icons/BrandIcons';
import { Ico } from '@/components/common/Ico';

export const AuctionAuthorBio = () => {
  const t = useTranslations('servicesAuctionMarketing');

  return (
    <section className="relative py-10 md:py-12">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl dodo-glass-card p-5 md:p-7">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <div
                aria-hidden
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-600/25 to-blue-400/25 font-(family-name:--font-space-mono) text-xl font-black text-slate-950 dark:text-white"
              >
                AA
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
                  {t('authorEyebrow')}
                </p>
                <p className="mt-1 font-display text-base font-bold tracking-tight text-slate-950 dark:text-white md:text-lg">
                  {t('authorName')}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {t('authorBio')}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href="https://www.linkedin.com/in/andrew-altair"
                    target="_blank"
                    rel="external noopener author"
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-950 dark:text-white"
                  >
                    <LinkedInIcon className="size-[13px]" /> LinkedIn
                  </a>
                  <a
                    href="https://andrewaltair.ge"
                    target="_blank"
                    rel="external noopener author"
                    className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-950 dark:text-white"
                  >
                    <Ico name="solar:global-bold-duotone" className="size-[13px]" /> andrewaltair.ge
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
