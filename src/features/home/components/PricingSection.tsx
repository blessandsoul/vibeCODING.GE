'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChatAgentTiers } from './ChatAgentTiers';
import { StandaloneServices } from './StandaloneServices';
import { Ico } from '@/components/common/Ico';

const tabs = [
  { key: 'tabMarketing', icon: 'solar:volume-loud-bold-duotone', hintKey: 'tabMarketingHint' },
  { key: 'tabSales',     icon: 'solar:cpu-bold-duotone',       hintKey: 'tabSalesHint' },
  { key: 'tabWeb',       icon: 'solar:code-bold-duotone',     hintKey: 'tabWebHint' },
] as const;

const webPackages = [
  {
    key: 'website',
    features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const,
    recurring: false,
  },
  {
    key: 'ecommerce',
    features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const,
    recurring: false,
    popular: true,
  },
  {
    key: 'platform',
    features: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'] as const,
    recurring: false,
  },
] as const;

const marketingPackages = [
  {
    key: 'starter',
    features: ['f1', 'f2', 'f3', 'f4', 'f5'] as const,
    recurring: true,
  },
  {
    key: 'starterPlus',
    features: ['f1', 'f2', 'f3', 'f4'] as const,
    recurring: true,
  },
  {
    key: 'premium',
    features: ['f1', 'f2', 'f3', 'f4', 'f5'] as const,
    recurring: true,
    popular: true,
  },
] as const;

type PackageConfig = {
  readonly key: string;
  readonly features: readonly string[];
  readonly recurring: boolean;
  readonly popular?: boolean;
};

const packagesByTab: Record<string, readonly PackageConfig[]> = {
  tabWeb: webPackages,
  tabMarketing: marketingPackages,
};

export const PricingSection = () => {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<string>('tabSales');

  const packages = packagesByTab[activeTab] ?? marketingPackages;

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Ambient glows */}
      <div className="glow-orb glow-primary absolute -left-20 top-1/3 h-72 w-72 opacity-[0.05]" />
      <div className="glow-orb glow-secondary absolute right-1/4 bottom-1/4 h-64 w-64 opacity-[0.04]" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {t('subtitle')}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {t('title')}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {t('description')}
            </p>
          </div>
        </FadeIn>

        {/* Tab switcher, category cards */}
        <FadeIn delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-2 md:gap-3">
            {tabs.map(({ key, icon, hintKey }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveTab(key)}
                className={cn(
                  'group flex min-w-0 flex-col items-center gap-1.5 rounded-xl border p-3 text-center transition duration-200 md:p-4',
                  activeTab === key
                    ? 'border-primary/40 bg-primary/8 shadow-sm shadow-primary/10'
                    : 'border-border/40 bg-card/30 hover:border-primary/20 hover:bg-card/60',
                )}
              >
                <Ico
                  name={icon}
                  className={cn(
                    'h-5 w-5 transition-colors duration-200',
                    activeTab === key ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground',
                  )}
                />
                <span className={cn(
                  'text-xs font-semibold leading-tight wrap-break-word transition-colors duration-200',
                  activeTab === key ? 'text-primary' : 'text-foreground',
                )}>
                  {t(key)}
                </span>
                <span className="text-[10px] leading-tight wrap-break-word text-muted-foreground/70">
                  {t(hintKey)}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Sales 24/7, Chat Agent tiers */}
        {activeTab === 'tabSales' ? (
          <motion.div
            key="tabSales"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-10"
          >
            <ChatAgentTiers showCta={false} />
          </motion.div>
        ) : (
          /* Marketing & Web package cards */
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'mx-auto mt-10 grid max-w-5xl gap-4 md:gap-5',
              packages.length === 3
                ? 'md:grid-cols-3'
                : packages.length === 2
                  ? 'max-w-3xl md:grid-cols-2'
                  : 'max-w-md md:grid-cols-1',
            )}
          >
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05, ease: 'easeOut' }}
              >
                {pkg.popular ? (
                  /* Popular card, gradient border */
                  <div className="gradient-border group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition duration-300 hover:shadow-xl hover:shadow-primary/15 md:p-8">
                    <div className="relative z-10">
                      <div className="mb-2 flex items-center gap-2.5">
                        <h3 className="text-lg font-bold">{t(`${pkg.key}.name`)}</h3>
                        <span className="gradient-bg rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm shadow-primary/20">
                          {t('popular')}
                        </span>
                      </div>
                      <div className="mb-4 flex items-baseline gap-1">
                        <p className="stat-number text-5xl text-foreground">
                          {t(`${pkg.key}.price`)}₾{!pkg.recurring && '+'}
                        </p>
                        {pkg.recurring && (
                          <span className="text-sm text-muted-foreground">
                            {t('monthly')}
                          </span>
                        )}
                      </div>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                        {t(`${pkg.key}.desc`)}
                      </p>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <span className="mt-0.5 text-primary">✓</span>
                            <span>{t(`${pkg.key}.${f}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* Regular card */
                  <div className="card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-7 transition duration-300 hover:border-primary/30 hover:bg-card md:p-8">
                    <div className="relative z-10">
                      <div className="mb-2">
                        <h3 className="text-lg font-bold">{t(`${pkg.key}.name`)}</h3>
                      </div>
                      <div className="mb-4 flex items-baseline gap-1">
                        <p className="stat-number text-5xl text-foreground">
                          {t(`${pkg.key}.price`)}₾{!pkg.recurring && '+'}
                        </p>
                        {pkg.recurring && (
                          <span className="text-sm text-muted-foreground">
                            {t('monthly')}
                          </span>
                        )}
                      </div>
                      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                        {t(`${pkg.key}.desc`)}
                      </p>
                      <ul className="space-y-2.5 text-sm text-muted-foreground">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <span className="mt-0.5 text-foreground/60">✓</span>
                            <span>{t(`${pkg.key}.${f}`)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ELITE banner, not shown on Sales tab */}
        {activeTab !== 'tabSales' && <FadeIn delay={0.24}>
          <div className="mx-auto mt-8 max-w-3xl">
            <div className="gradient-border relative overflow-hidden rounded-2xl p-6 md:p-8">
              <div className="noise pointer-events-none absolute inset-0" />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-center gap-2 md:justify-start">
                    <h3 className="text-lg font-bold">{t('elite.name')}</h3>
                    <span className="gradient-bg rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm shadow-primary/20">
                      {t('elite.label')}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t('elite.desc')}
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex items-baseline gap-1">
                    <p className="stat-number text-4xl text-foreground">
                      {t('elite.price')}₾
                    </p>
                    <span className="text-sm text-muted-foreground">{t('monthly')}</span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {t('elite.saving')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>}

        {/* Standalone services */}
        <StandaloneServices />

        {/* CTA */}
        <FadeIn delay={0.32}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="gradient-bg px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition duration-200 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98]"
              >
                <Link href={`/${locale}/contact`}>{t('cta')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8">
                <Link href={`/${locale}/pricing`}>{t('viewAll')}</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{t('ctaNote')}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
