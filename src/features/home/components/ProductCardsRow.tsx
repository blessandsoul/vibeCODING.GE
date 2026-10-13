'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/common/FadeIn';

const chatbotBullets = ['productChatbotBullet1', 'productChatbotBullet2', 'productChatbotBullet3', 'productChatbotBullet4'] as const;
const contentBullets = ['productContentBullet1', 'productContentBullet2', 'productContentBullet3', 'productContentBullet4'] as const;

export const ProductCardsRow = () => {
  const t = useTranslations('heroA');

  return (
    <section className="relative py-10 md:py-14 lg:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
          {/* iAI card */}
          <FadeIn>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
              <Link
                href="/services/bots"
                className="hero-card-shimmer hero-card-glass hero-card-mesh hero-card-mesh-1 hero-card-glow-blue group relative block h-full overflow-hidden rounded-3xl p-7 shadow-xl shadow-black/10 md:p-9"
              >
                <div className="card-mesh-bg" />
                <div className="relative mb-5 flex items-center gap-3 md:mb-6 md:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 md:h-14 md:w-14">
                    <Ico name="solar:cpu-bold-duotone" className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-bold text-foreground md:text-xl">
                      {t('productChatbotName')}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
                      {t('productChatbotResult')}
                    </p>
                  </div>
                  <Ico name="solar:arrow-right-bold-duotone" className="hidden h-5 w-5 shrink-0 text-primary/70 transition-transform group-hover:translate-x-1 sm:block" />
                </div>

                <div className="relative space-y-2.5">
                  {chatbotBullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <Ico name="solar:check-circle-bold-duotone" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/85 md:text-base">{t(b)}</span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-6 border-t border-border/30 pt-4 md:mt-8">
                  <span className="text-sm font-semibold text-primary md:text-base">
                    {t('productChatbotCta')} →
                  </span>
                </div>
              </Link>
            </motion.div>
          </FadeIn>

          {/* Content Studio card */}
          <FadeIn delay={0.08}>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
              <Link
                href="/services/content-studio"
                className="hero-card-shimmer hero-card-glass hero-card-mesh hero-card-mesh-4 hero-card-glow-pink group relative block h-full overflow-hidden rounded-3xl p-7 shadow-xl shadow-black/10 md:p-9"
              >
                <div className="card-mesh-bg" />
                <div className="relative mb-5 flex items-center gap-3 md:mb-6 md:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 md:h-14 md:w-14">
                    <Ico name="solar:magic-stick-3-bold-duotone" className="h-6 w-6 text-primary md:h-7 md:w-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg font-bold text-foreground md:text-xl">
                      {t('productContentName')}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground md:text-sm">
                      {t('productContentResult')}
                    </p>
                  </div>
                  <Ico name="solar:arrow-right-bold-duotone" className="hidden h-5 w-5 shrink-0 text-primary/70 transition-transform group-hover:translate-x-1 sm:block" />
                </div>

                <div className="relative space-y-2.5">
                  {contentBullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <Ico name="solar:check-circle-bold-duotone" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground/85 md:text-base">{t(b)}</span>
                    </div>
                  ))}
                </div>

                <div className="relative mt-6 border-t border-border/30 pt-4 md:mt-8">
                  <span className="text-sm font-semibold text-primary md:text-base">
                    {t('productContentCta')} →
                  </span>
                </div>
              </Link>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
