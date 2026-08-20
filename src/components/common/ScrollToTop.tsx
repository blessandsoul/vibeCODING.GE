"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Wait until the destination route has rendered. SmoothScroll marks this
    // event handled and owns the animated reset; the native branch keeps links
    // correct on pages where Lenis is disabled (including reduced motion).
    const frame = window.requestAnimationFrame(() => {
      const detail = { handled: false };
      window.dispatchEvent(new CustomEvent('landing:route-change', { detail }));

      if (!detail.handled) {
        const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
