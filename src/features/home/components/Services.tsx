'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Globe, MessageCircle, Workflow, Sparkles } from 'lucide-react';

const services = [
  { key: 's4', icon: Sparkles },
  { key: 's2', icon: MessageCircle },
  { key: 's1', icon: Globe },
  { key: 's3', icon: Workflow },
] as const;

export const Services = () => {
  const t = useTranslations('services');

  return (
    <section className="relative py-16 md:py-24">
      {/* Background */}

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

        {/* Services grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-5">
          {services.map((service, i) => (
            <FadeIn key={service.key} delay={i * 0.08}>
              <div className="dodo-glass-card group flex h-full min-w-0 flex-col p-5 sm:p-7 md:p-8">
                {/* Title + Icon row */}
                <div className="relative z-10 mb-5 flex items-center justify-between">
                  <h3 className="text-lg font-bold">
                    {t(`${service.key}Title`)}
                  </h3>
                  <span className="dodo-glass-box flex h-10 w-10 shrink-0 items-center justify-center text-lg text-blue-600 dark:text-blue-300">
                    <service.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(`${service.key}Desc`)}
                </p>

                {/* Bottom accent line */}
                {/* accent line removed, neuro-minimalism: only HowItWorks keeps it */}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
