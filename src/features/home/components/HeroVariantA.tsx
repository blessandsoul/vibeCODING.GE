'use client';

import { lazy, Suspense } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { useMediaQuery } from '@/hooks/use-media-query';
import { HeroPhoneForm } from './HeroPhoneForm';

const Hyperspeed = lazy(() =>
  import('./Hyperspeed').then((m) => ({ default: m.Hyperspeed }))
);

export const HeroVariantA = () => {
  const t = useTranslations('heroA');
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const isMobile = useMediaQuery('(max-width: 1023px)');

  return (
    <section className="relative -mt-16 flex min-h-[90dvh] flex-col justify-center overflow-hidden">
      {/* Background, Hyperspeed 3D ONLY on desktop */}
      {!isMobile && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <Suspense fallback={null}>
            <Hyperspeed key={resolvedTheme} />
          </Suspense>
        </div>
      )}

      <div className="dot-grid pointer-events-none absolute inset-0 transition-opacity duration-1000 opacity-0 dark:opacity-25" />
      <div className="letter-glitch pointer-events-none absolute inset-0 transition-opacity duration-1000 opacity-20 dark:opacity-0">
        <div className="letter-glitch-layer" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60%] opacity-25 dark:opacity-15 transition-opacity duration-1000">
        <AuroraBackground
          colorStops={['#8B2FC9', '#1A8A7A', '#8B2FC9']}
          amplitude={0.9}
          blend={0.5}
          speed={0.7}
        />
      </div>
      <div className="glow-orb glow-primary absolute -right-32 top-20 h-125 w-125 opacity-15" />

      {/* Scrim overlay, darkens Hyperspeed for text readability */}
      <div className="pointer-events-none absolute inset-0 z-1 bg-background/55 backdrop-blur-[2px] dark:bg-background/65" />

      <div className="container relative z-10 mx-auto w-full px-4 pt-24 pb-12 md:px-6 md:pt-20 md:pb-12 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="mx-auto max-w-5xl text-center xl:max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-sm"
          >
            {t('eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "mt-5 text-balance text-[clamp(2rem,6vw,3rem)] font-bold tracking-tight md:mt-6 md:text-[clamp(2.5rem,5vw,4rem)] lg:text-[clamp(3rem,4.5vw,4.5rem)]",
              locale === 'ka' ? 'leading-snug' : 'leading-tight'
            )}
          >
            {t('title')}
            <span className="gradient-text mt-1 block">{t('titleAccent')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-3xl whitespace-pre-line text-pretty text-base leading-relaxed text-foreground/85 md:mt-8 md:text-lg md:leading-relaxed"
          >
            {t('subtitleShort')}
          </motion.p>

          {/* Phone form, chatbot.com-style inline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10"
          >
            <HeroPhoneForm />
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-32 bg-linear-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};
