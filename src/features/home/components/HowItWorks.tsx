'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

const steps = [
  { key: 'step1', number: '01', icon: '◇' },
  { key: 'step2', number: '02', icon: '◈' },
  { key: 'step3', number: '03', icon: '▲' },
  { key: 'step4', number: '04', icon: '⬡' },
  { key: 'step5', number: '05', icon: '★' },
] as const;

export const HowItWorks = () => {
  const t = useTranslations('howItWorks');

  return (
    <section className="relative py-16 md:py-24">
      {/* Dot grid background */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t('subtitle')}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              {t('title')}
            </h2>
          </div>
        </FadeIn>

        {/* Steps grid with connector */}
        <div className="relative mt-12 md:mt-14">
          {/* Horizontal connector line (desktop only) */}
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-13 hidden h-px bg-linear-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-5">
            {steps.map((step, i) => (
              <FadeIn key={step.key} delay={i * 0.1}>
                <div className="card-glow group relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-7 transition duration-300 hover:border-primary/30 hover:bg-card md:p-8">
                  {/* Step number + icon */}
                  <div className="relative z-10 mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border/50 bg-muted/50 text-xs font-bold text-foreground">
                        {step.number}
                      </span>
                      <span className="text-[11px] font-semibold tracking-widest text-muted-foreground">
                        STEP
                      </span>
                    </div>
                    <span className="text-lg text-muted-foreground/40 transition-colors duration-300 group-hover:text-foreground">
                      {step.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-xl font-bold">
                    {t(`${step.key}Title`)}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {t(`${step.key}Desc`)}
                  </p>

                  {/* Bottom accent line */}
                  <div className="relative z-10 mt-6 h-px w-10 bg-border transition duration-500 group-hover:w-full group-hover:bg-foreground/20" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
