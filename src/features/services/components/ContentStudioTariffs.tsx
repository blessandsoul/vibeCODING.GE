'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';
import { getPricingUiCopy, localizePricingProduct } from '@/features/pricing/pricing-copy';
import { PRICING_PRODUCTS } from '@/features/pricing/pricing-data';

const CONTENT_PRODUCT = PRICING_PRODUCTS.find((product) => product.id === 'aicontent');

type ContentStudioTariffsProps = {
  pricingHref?: string;
  contactHref?: string;
};

export const ContentStudioTariffs = ({ pricingHref = '/pricing', contactHref = '/contact' }: ContentStudioTariffsProps) => {
  const tStudio = useTranslations('servicesContentStudio');
  const locale = useLocale();
  const copy = getPricingUiCopy(locale);
  if (!CONTENT_PRODUCT) return null;
  const product = localizePricingProduct(CONTENT_PRODUCT, locale);

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {tStudio('tariffsEyebrow')}
            </p>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {tStudio('tariffsTitle')}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {product.scopeNotice}
            </p>
            <Link
              href={pricingHref}
              className="mt-3 inline-flex text-sm font-semibold text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-500 dark:text-blue-300 dark:decoration-blue-400/50 dark:hover:text-blue-200"
            >
              {copy.pricingLink}
            </Link>
          </div>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
          {product.plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.08}>
              <div className="dodo-glass-card group relative flex h-full flex-col overflow-hidden p-6 transition duration-300 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-[0_18px_40px_rgba(37,99,235,0.12)] md:p-7">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">{plan.price}</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{plan.cadence}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {plan.note}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {product.rowLabels.map((row, idx) => {
                    const value = plan.values[idx];
                    return (
                      <li key={row.label} className="flex items-start gap-2">
                        <Ico name="solar:check-circle-bold-duotone" className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" />
                        <span className="text-sm text-slate-950 dark:text-white">
                          {row.label}: {typeof value === 'boolean' ? (value ? copy.yes : copy.no) : value}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href={contactHref}
                  className="dodo-glass-box mt-6 inline-flex h-11 items-center justify-center text-slate-950 transition duration-200 hover:border-blue-500/40 active:scale-95 dark:text-white dark:hover:border-blue-400/30"
                >
                  {plan.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-600 dark:text-slate-300">
          {copy.monthlyContractNote}
        </p>
      </div>
    </section>
  );
};
