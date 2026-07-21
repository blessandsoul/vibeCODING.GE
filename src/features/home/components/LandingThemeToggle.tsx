'use client';

import { useSyncExternalStore } from 'react';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';

import { Ico } from '@/components/common/Ico';
import './landing-theme-toggle.css';

const LABELS = {
  ka: { light: 'ღია თემა', dark: 'მუქი თემა' },
  en: { light: 'Light theme', dark: 'Dark theme' },
  ru: { light: 'Светлая тема', dark: 'Тёмная тема' },
} as const;

export function LandingThemeToggle({ className = '' }: { className?: string }): React.ReactElement {
  const locale = useLocale() as keyof typeof LABELS;
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const dark = mounted && resolvedTheme === 'dark';
  const labels = LABELS[locale] ?? LABELS.en;
  const nextLabel = dark ? labels.light : labels.dark;

  return (
    <button
      type="button"
      className={`landing-theme-toggle ${className}`.trim()}
      onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={nextLabel}
      title={nextLabel}
    >
      <Ico name={dark ? 'solar:sun-2-bold-duotone' : 'solar:moon-bold-duotone'} aria-hidden="true" />
      <span>{nextLabel}</span>
    </button>
  );
}
