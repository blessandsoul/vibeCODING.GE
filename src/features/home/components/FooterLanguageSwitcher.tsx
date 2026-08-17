'use client';

import { useLocale } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import NextLink from 'next/link';
import { localePath } from '@/i18n/seo-locales';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';

/* Footer language column, keeps the footer's plain link-list look but makes
   each entry a real next-intl locale switch. Derived from routing.locales so it
   stays in sync (ka / en / ru), no dead entries. <Link locale=...> re-renders
   the CURRENT path under the chosen locale client-side (no full reload). */

const LABELS: Record<string, string> = {
  en: 'English',
  ka: 'ქართული',
  ru: 'Русский',
};
const LOCALES = routing.locales.map((code) => ({
  code,
  label: LABELS[code] ?? code.toUpperCase(),
}));

export function FooterLanguageSwitcher() {
  const pathname = usePathname(); // locale-stripped current path
  const current = useLocale();

  return (
    <ul className="space-y-2 text-[#4B5563]">
      {LOCALES.map((l) => (
        <li key={l.code}>
          <NextLink
            href={localePath(l.code, pathname)}
            aria-current={current === l.code ? 'true' : undefined}
            className={cn(
              'inline-flex min-h-11 min-w-11 items-center break-words transition-colors hover:text-neutral-900',
              current === l.code && 'text-neutral-900 font-medium',
            )}
          >
            {l.label}
          </NextLink>
        </li>
      ))}
    </ul>
  );
}
