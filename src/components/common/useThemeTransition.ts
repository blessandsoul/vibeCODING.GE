"use client";

import { useCallback } from "react";
import { useTheme } from "next-themes";

const THEME_TRANSITION_DURATION = 180;

function reduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function currentTheme(root: HTMLElement, fallback?: string) {
  if (root.classList.contains("dark")) return "dark";
  if (root.classList.contains("light")) return "light";
  return fallback === "dark" ? "dark" : "light";
}

/**
 * Keeps the expensive colour-mode reflow behind one composited veil instead
 * of taking full-page snapshots or animating every glass surface independently.
 */
export function useThemeTransition() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const setThemeWithTransition = useCallback(
    (nextTheme: "light" | "dark") => {
      if (typeof document === "undefined") {
        setTheme(nextTheme);
        return;
      }

      const root = document.documentElement;
      if (root.dataset.themeTransition === "running") return;
      if (currentTheme(root, resolvedTheme ?? theme) === nextTheme) return;

      const applyTheme = () => {
        root.classList.remove("light", "dark");
        root.classList.add(nextTheme);
        root.style.colorScheme = nextTheme;
        setTheme(nextTheme);
      };

      if (reduceMotion()) {
        applyTheme();
        return;
      }

      const veil = document.createElement("div");
      root.dataset.themeTransition = "running";
      veil.className = "theme-transition-veil";
      veil.style.backgroundColor = getComputedStyle(root).backgroundColor;
      document.body.appendChild(veil);

      requestAnimationFrame(() => {
        applyTheme();
        requestAnimationFrame(() => {
          veil.classList.add("theme-transition-veil--fade");
        });
      });

      window.setTimeout(() => {
        veil.remove();
        delete root.dataset.themeTransition;
      }, THEME_TRANSITION_DURATION + 64);
    },
    [resolvedTheme, setTheme, theme],
  );

  return { theme, resolvedTheme, setTheme: setThemeWithTransition };
}
