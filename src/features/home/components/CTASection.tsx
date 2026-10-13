'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  const t = useTranslations('ctaSection');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="gradient-border relative overflow-hidden rounded-2xl p-10 md:p-14 lg:p-20">
            {/* Background glows inside the card */}
            <div className="glow-orb glow-primary absolute -right-20 -top-20 h-64 w-64" />
            <div className="glow-orb glow-secondary absolute -bottom-20 -left-20 h-48 w-48" />
            <div className="noise pointer-events-none absolute inset-0" />

            {/* Dot grid inside */}
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {t('title')}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {t('subtitle')}
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="gradient-bg min-w-50 px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
                  >
                    <Link href={`/${locale}/contact`}>{t('cta')}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="min-w-50 border-border/50 px-8 text-base font-medium text-muted-foreground transition duration-200 hover:border-foreground/20 hover:text-foreground active:scale-[0.98]"
                  >
                    <Link href={`/${locale}/contact`}>{t('ctaSecondary')}</Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t('disclaimer')}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
