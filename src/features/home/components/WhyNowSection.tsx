'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

export const WhyNowSection = () => {
  const t = useTranslations('heroA');

  return (
    <section className="relative py-14 md:py-20 lg:py-24">
      <div className="glow-orb glow-primary absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 opacity-[0.06]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-sm">
              {t('whyNowHeader')}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-foreground/85 md:mt-6 md:text-lg md:leading-relaxed">
              {t('whyNowBody')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2 md:mt-12 md:gap-6">
            <div className="rounded-2xl border border-border/40 bg-card/30 p-6 text-center backdrop-blur-sm md:p-8">
              <span className="gradient-text text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t('whyNowStat1Value')}
              </span>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                {t('whyNowStat1Label')}
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/30 p-6 text-center backdrop-blur-sm md:p-8">
              <span className="gradient-text text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t('whyNowStat2Value')}
              </span>
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                {t('whyNowStat2Label')}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.24}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-balance text-2xl font-bold tracking-tight md:mt-16 md:text-3xl lg:text-4xl">
            <span className="gradient-text">{t('closingCta')}</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};
