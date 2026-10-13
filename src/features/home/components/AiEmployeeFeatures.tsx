'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { FadeIn } from '@/components/common/FadeIn';

const features = [
  { key: 'feature1', Icon: 'solar:phone-bold-duotone', glow: 'hero-card-glow-blue', mesh: 'hero-card-mesh-1' },
  { key: 'feature2', Icon: 'solar:pen-new-square-bold-duotone', glow: 'hero-card-glow-pink', mesh: 'hero-card-mesh-2' },
  { key: 'feature3', Icon: 'solar:database-bold-duotone', glow: 'hero-card-glow-teal', mesh: 'hero-card-mesh-3' },
  { key: 'feature4', Icon: 'solar:rocket-bold-duotone', glow: 'hero-card-glow-purple', mesh: 'hero-card-mesh-4' },
] as const;

export const AiEmployeeFeatures = () => {
  const t = useTranslations('heroA');

  return (
    <section className="relative py-12 md:py-16 lg:py-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-balance text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            {t('featuresHeader')}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 md:gap-6 lg:gap-7">
          {features.map((f, i) => (
            <FadeIn key={f.key} delay={i * 0.08}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                <div
                  className={`hero-card-shimmer hero-card-glass hero-card-mesh ${f.mesh} ${f.glow} group relative h-full overflow-hidden rounded-3xl p-7 shadow-xl shadow-black/10 md:p-8`}
                >
                  <div className="card-mesh-bg" />
                  <div className="relative flex items-start justify-between gap-4">
                    <h3 className="text-lg font-bold text-foreground md:text-xl">
                      {t(`${f.key}Title`)}
                    </h3>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 md:h-14 md:w-14">
                      <Ico name={f.Icon} className="h-6 w-6 text-primary md:h-7 md:w-7" />
                    </div>
                  </div>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {t(`${f.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
