'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/common/FadeIn';
import { Link } from '@/i18n/navigation';
import { Ico } from '@/components/common/Ico';

const items = [
  { key: 'seo', href: '/services/seo' as const, Icon: 'solar:magnifer-bold-duotone' },
  { key: 'websites', href: '/services/websites' as const, Icon: 'solar:siderbar-bold-duotone' },
  { key: 'pricing', href: '/pricing' as const, Icon: 'solar:banknote-bold-duotone' },
  { key: 'about', href: '/about' as const, Icon: 'solar:buildings-2-bold-duotone' },
];

export const AuctionRelatedServices = () => {
  const t = useTranslations('servicesAuctionMarketing');

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('relatedEyebrow')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('relatedTitle')}
            </h3>
          </div>
        </FadeIn>

        <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 md:gap-4">
          {items.map(({ key, href, Icon }, i) => (
            <FadeIn key={key} delay={i * 0.06}>
              <Link
                href={href}
                className="group flex items-center gap-4 dodo-glass-box p-5 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center dodo-glass-inset text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:bg-slate-100/60 dark:bg-[#0a0b0e]/10">
                  <Ico name={Icon} className="size-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-sm font-bold tracking-tight text-slate-950 dark:text-white md:text-base">
                    {t(`related_${key}_title`)}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-600 dark:text-slate-300">
                    {t(`related_${key}_desc`)}
                  </p>
                </div>
                <Ico
                  name="solar:arrow-right-bold-duotone"
                  className="size-[16px] shrink-0 text-slate-600 dark:text-slate-300 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-950 dark:text-white"
                />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
