'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/common/FadeIn';

interface ServiceCTAProps {
  namespace?: string;
  copy?: { cta: string };
  href?: string;
}

export const ServiceCTA = ({ namespace, copy, href = '/contact' }: ServiceCTAProps) => {
  const t = useTranslations(namespace ?? 'servicesAutomation');
  const cta = copy?.cta ?? t('cta');

  return (
    <section className="relative px-6 py-16 md:py-24">
      <div className="container relative z-10 mx-auto">
        <FadeIn>
          <div className="mx-auto max-w-2xl dodo-glass-card p-8 text-center md:p-12">
            <div className="flex flex-col items-center gap-6">
              <p className="font-display text-xl font-bold text-slate-950 dark:text-white md:text-2xl">
                {cta}
              </p>
              <Link
                href={href}
                className="inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-blue-400 px-8 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
              >
                {cta}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
