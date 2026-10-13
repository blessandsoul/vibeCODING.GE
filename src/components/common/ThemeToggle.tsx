'use client';

import { useSyncExternalStore } from 'react';
import { Ico } from '@/components/common/Ico';
import { useThemeTransition } from '@/components/common/useThemeTransition';
import { cn } from '@/lib/utils';

const emptySubscribe = () => () => {};

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeTransition();
  // false on the server and the first client render, true once mounted -
  // mirrors the previous mounted flag so the placeholder renders identically.
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-border/50" />
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border border-border/50",
        "transition-[background-color,filter,transform] duration-150 ease-out",
        "hover:bg-muted hover:brightness-110 active:scale-[0.96]"
      )}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Ico name="solar:sun-bold-duotone" className="h-4 w-4 text-foreground" />
      ) : (
        <Ico name="solar:moon-bold-duotone" className="h-4 w-4 text-foreground" />
      )}
    </button>
  );
};
