'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import { FadeIn } from '@/components/common/FadeIn';
import { MagneticButton } from '@/components/ui/magnetic-button';

export const ChooseYourPath = () => {
  const t = useTranslations('heroC');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="glow-orb glow-primary absolute left-1/4 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t('eyebrow')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
          </div>
        </FadeIn>

        {/* Two path cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          {/* Path 1: Service */}
          <FadeIn delay={0.08}>
            <div className="card-glow group flex h-full flex-col rounded-2xl border border-border/50 bg-card/50 p-7 transition duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Ico name="solar:monitor-bold-duotone" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold">{t('pathService')}</h3>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {t('pathServiceDesc')}
              </p>

              <div className="mb-5 space-y-2">
                {[t('serviceItem1'), t('serviceItem2'), t('serviceItem3'), t('serviceItem4')].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Ico name="solar:check-circle-bold-duotone" className="h-4 w-4 shrink-0 text-foreground/60" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <MagneticButton variant="secondary" href={`/${locale}/contact`}>
                  {t('pathServiceCta')}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </MagneticButton>
              </div>
            </div>
          </FadeIn>

          {/* Path 2: Startup */}
          <FadeIn delay={0.16}>
            <div className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-primary/5 p-7 transition duration-300 hover:border-primary/40 hover:bg-primary/10 hover:shadow-lg md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                  <Ico name="solar:rocket-bold-duotone" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{t('pathStartup')}</h3>
                  <span className="text-xs font-semibold text-primary">0₾ upfront</span>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                {t('pathStartupDesc')}
              </p>

              <div className="mb-5 space-y-2">
                {[t('startupItem1'), t('startupItem2'), t('startupItem3'), t('startupItem4')].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Ico name="solar:check-circle-bold-duotone" className="h-4 w-4 shrink-0 text-primary/70" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <MagneticButton variant="emerald" href={`/${locale}/contact`}>
                  {t('pathStartupCta')}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
