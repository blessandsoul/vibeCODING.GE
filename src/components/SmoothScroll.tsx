'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

/* =========================================================================
   SmoothScroll, global Lenis smooth-scroll, mounted once in LayoutShell.
   Initializes Lenis on mount, drives it with a requestAnimationFrame loop, and
   destroys it on unmount. Bails out entirely under prefers-reduced-motion (no
   smoothing, native scroll only). Lenis listens to the native scroll, so the
   nav's scrollIntoView anchor jumps and href="#..." links keep working.
   ========================================================================= */

export function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    // Native window.scrollTo() and Lenis keep separate scroll targets. Route
    // changes therefore go through Lenis, otherwise its next animation frame
    // can restore the position from the previous page.
    const resetForRouteChange = (event: Event) => {
      const routeEvent = event as CustomEvent<{ handled: boolean; target?: HTMLElement }>;
      routeEvent.detail.handled = true;
      const target = routeEvent.detail.target;
      if (target) lenis.resize();
      lenis.scrollTo(target ?? 0, { duration: 0.42, force: true });
    };
    window.addEventListener('landing:route-change', resetForRouteChange);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('landing:route-change', resetForRouteChange);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
