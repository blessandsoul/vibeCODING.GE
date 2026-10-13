'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

const stats = ['stat1', 'stat2', 'stat3', 'stat4'] as const;

export const StatStrip = () => {
  const t = useTranslations('heroA');

  return (
    <section className="relative py-6 md:py-10">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-border/40 bg-card/30 px-5 py-5 backdrop-blur-sm md:grid-cols-4 md:gap-6 md:px-8 md:py-6">
            {stats.map((key) => (
              <div key={key} className="flex flex-col items-center text-center">
                <span className="gradient-text text-2xl font-bold tracking-tight md:text-3xl">
                  {t(`${key}Value`)}
                </span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground md:text-xs">
                  {t(`${key}Label`)}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
