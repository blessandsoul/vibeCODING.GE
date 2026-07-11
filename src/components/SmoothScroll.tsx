'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/* =========================================================================
   SmoothScroll, global Lenis smooth-scroll, mounted once in LayoutShell.
   Initializes Lenis on mount, drives it with a requestAnimationFrame loop, and
   destroys it on unmount. Bails out entirely under prefers-reduced-motion (no
   smoothing, native scroll only). Lenis listens to the native scroll, so the
   nav's scrollIntoView anchor jumps and href="#cta" links keep working.
   ========================================================================= */

export function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      return;
    }

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
