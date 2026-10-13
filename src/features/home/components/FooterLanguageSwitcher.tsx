'use client';

import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/* Footer language column, keeps the footer's plain link-list look but makes
   each entry a real next-intl locale switch. <Link locale=…> re-renders the
   CURRENT path under the chosen locale client-side (no full reload), matching
   the nav's SPA feel. The active locale is marked. */

const LOCALES = [
  { code: 'en', label: 'English' },
  { code: 'ka', label: 'ქართული' },
  { code: 'ru', label: 'Русский' },
] as const;

const ENGLISH_LABELS: Record<string, string> = {
  en: 'English',
  ka: 'Georgian',
  ru: 'Russian',
};

export function FooterLanguageSwitcher() {
  const pathname = usePathname(); // locale-stripped current path
  const current = useLocale();

  return (
    <ul className="space-y-2 text-neutral-900/70">
      {LOCALES.map((l) => (
        <li key={l.code}>
          <Link
            href={pathname}
            locale={l.code}
            aria-current={current === l.code ? 'true' : undefined}
            className={cn(
              'transition hover:text-neutral-900',
              current === l.code && 'text-neutral-900 font-medium',
            )}
          >
            {current === 'en' ? ENGLISH_LABELS[l.code] : l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
