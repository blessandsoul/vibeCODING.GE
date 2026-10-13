'use client';

import { useRef, useEffect, useState, useSyncExternalStore, useTransition } from 'react';
import { createPortal } from 'react-dom';
import { useLocale } from 'next-intl';
import { useTheme } from 'next-themes';
import { useRouter, usePathname } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Ico } from '@/components/common/Ico';
import { cn } from '@/lib/utils';

const LOCALES = [
  { code: 'ka', label: 'ქართული', flagSrc: '/flags/ge.svg' },
  { code: 'en', label: 'English', flagSrc: '/flags/gb.svg' },
  { code: 'ru', label: 'Русский', flagSrc: '/flags/ru.svg' },
] as const;

interface LanguageSwitcherProps {
  variant?: 'default' | 'mobile' | 'compact';
}

const emptySubscribe = () => () => {};

function FlagIcon({ language, size = 'md' }: { language: typeof LOCALES[number]; size?: 'sm' | 'md' | 'lg' }) {
  const dimensions = size === 'lg' ? 'h-7 w-9' : size === 'md' ? 'h-4 w-[22px]' : 'h-3.5 w-5';
  return (
    <Image
      src={language.flagSrc}
      alt=""
      width={28}
      height={20}
      className={cn(`${dimensions} shrink-0 rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(15,23,42,0.12)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.16)]`)}
      aria-hidden="true"
    />
  );
}

/* ── Loading overlay (rendered via portal so it covers the entire page) ── */
const LoadingOverlay = ({ targetLocale, theme }: { targetLocale: typeof LOCALES[number] | null, theme?: string }) => {
  // false on the server / first client render, true once mounted, needed so
  // createPortal only runs client-side (document.body is unavailable on SSR).
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  if (!mounted || !targetLocale) return null;

  return createPortal(
    <motion.div
      key="locale-loading"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm transition-colors duration-0"
      style={{
        backgroundColor: theme === 'dark' ? 'oklch(0.11 0.005 270)' : 'oklch(0.97 0.005 80)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.05 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative">
          <Ico name="solar:refresh-bold-duotone" className="h-8 w-8 animate-spin text-primary" />
        </div>
        <div className="flex items-center gap-2.5">
          <FlagIcon language={targetLocale} size="lg" />
          <span className={cn(
            "text-sm font-medium text-muted-foreground",
            targetLocale.code === 'ka' && "font-(family-name:--font-noto-georgian)"
          )}>
            {targetLocale.label}
          </span>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export const LanguageSwitcher = ({ variant = 'default' }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [targetLocale, setTargetLocale] = useState<typeof LOCALES[number] | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = useLocale();
  const currentLanguage = LOCALES.find((l) => l.code === currentLocale) || LOCALES.find((l) => l.code === 'en')!;
  const isCompact = variant === 'compact';

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    const target = LOCALES.find((l) => l.code === newLocale) || null;
    setTargetLocale(target);
    setIsOpen(false);

    startTransition(() => {
      router.push(pathname, { locale: newLocale });
    });
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen]);

  return (
    <>
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
          className={cn(
            "flex min-h-10 items-center rounded-xl border border-black/[0.08] bg-white/70 text-sm font-semibold text-slate-700 shadow-[0_0_0_1px_rgba(255,255,255,0.62)_inset,0_1px_2px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset,0_1px_2px_rgba(0,0,0,0.12)]",
            "transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out hover:border-black/15 hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.8)_inset,0_4px_14px_rgba(15,23,42,0.08)] dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_4px_14px_rgba(0,0,0,0.18)] active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]",
            isCompact ? "min-w-10 gap-1.5 px-2 sm:min-w-[58px] sm:px-2.5" : "gap-2 px-3 py-1.5",
            isOpen && "border-black/15 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.8)_inset,0_4px_14px_rgba(15,23,42,0.08)] dark:border-white/20 dark:bg-white/10",
            isPending && "opacity-60 pointer-events-none"
          )}
          aria-label={`Language: ${currentLanguage.label}`}
          aria-expanded={isOpen}
          aria-haspopup="menu"
        >
          <FlagIcon language={currentLanguage} size="sm" />
          {isCompact ? (
            <span className="hidden text-[10px] tracking-[0.08em] sm:inline">{currentLanguage.code.toUpperCase()}</span>
          ) : (
            <span className={cn("hidden sm:inline", currentLanguage.code === 'ka' && "font-(family-name:--font-noto-georgian)")}>{currentLanguage.label}</span>
          )}
          <Ico name="solar:alt-arrow-down-bold-duotone" className={cn("h-3.5 w-3.5 text-slate-400 transition-transform duration-150 ease-out dark:text-slate-400", isOpen && "rotate-180")} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={variant === 'mobile' ? { opacity: 0, y: 6, scale: 0.98 } : { opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={variant === 'mobile' ? { opacity: 0, y: 4, scale: 0.99 } : { opacity: 0, y: -4, scale: 0.99 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className={cn(
                "absolute right-0 z-50 min-w-48 overflow-hidden rounded-2xl border border-black/[0.08] bg-white/95 p-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.7)_inset,0_12px_32px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-[#12151c]/95 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_12px_32px_rgba(0,0,0,0.32)]",
                variant === 'mobile'
                  ? "bottom-full mb-2"
                  : "top-full mt-2"
              )}
              role="menu"
            >
              {LOCALES.map((locale) => (
                <button
                  key={locale.code}
                  type="button"
                  onClick={() => switchLocale(locale.code)}
                  className={cn(
                    "flex min-h-10 w-full items-center gap-3 rounded-xl px-3 text-left text-sm transition-[background-color,color,transform] duration-150 ease-out hover:translate-x-px active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-[#2563eb]",
                    currentLocale === locale.code
                      ? "bg-[#2563eb]/10 text-slate-950 font-semibold dark:bg-[#2563eb]/20 dark:text-white"
                      : "text-slate-600 hover:bg-slate-950/[0.05] hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.08] dark:hover:text-white"
                  )}
                  role="menuitem"
                >
                  <FlagIcon language={locale} />
                  <span className={locale.code === 'ka' ? "font-(family-name:--font-noto-georgian)" : ""}>{locale.label}</span>
                  {currentLocale === locale.code && (
                    <span className="ml-auto flex size-4 items-center justify-center rounded-full bg-[#2563eb]" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" className="size-2.5 text-white" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-screen loading overlay during locale transition */}
      <AnimatePresence>
        {isPending && <LoadingOverlay targetLocale={targetLocale} theme={resolvedTheme} />}
      </AnimatePresence>
    </>
  );
};
