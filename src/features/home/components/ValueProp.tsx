'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';

const items = [
  { key: 'item1', stat: '0₾' },
  { key: 'item2', stat: '3x' },
  { key: 'item3', stat: '100%' },
] as const;

export const ValueProp = () => {
  const t = useTranslations('value');

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Subtle ambient glow */}

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
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

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {items.map((item, i) => (
            <FadeIn key={item.key} delay={i * 0.08}>
              <div className="dodo-glass-card group flex h-full min-w-0 flex-col p-5 sm:p-7 md:p-8">
                {/* Stat + Title row */}
                <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold">
                    {t(`${item.key}Title`)}
                  </h3>
                  <p className="shrink-0 text-3xl font-bold tabular-nums text-blue-600 dark:text-blue-300 sm:text-4xl">
                    {item.stat}
                  </p>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(`${item.key}Desc`)}
                  </p>
                  {/* accent line removed, neuro-minimalism */}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
