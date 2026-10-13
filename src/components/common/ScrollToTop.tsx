"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const clearAnchorFlag = () => {
      if (!window.location.hash) document.body.removeAttribute('data-landing-anchor-navigation');
    };
    window.addEventListener('hashchange', clearAnchorFlag);
    window.addEventListener('popstate', clearAnchorFlag);

    return () => {
      window.history.scrollRestoration = previous;
      window.removeEventListener('hashchange', clearAnchorFlag);
      window.removeEventListener('popstate', clearAnchorFlag);
      document.body.removeAttribute('data-landing-anchor-navigation');
    };
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (!window.location.hash) return;
    }

    let disposed = false;
    let observer: MutationObserver | undefined;
    let sizeObserver: ResizeObserver | undefined;
    let timer = 0;
    const interruptionEvents = ['pointerdown', 'touchstart', 'wheel', 'keydown'] as const;
    const stopTracking = () => {
      window.clearTimeout(timer);
      observer?.disconnect();
      sizeObserver?.disconnect();
      interruptionEvents.forEach(name => window.removeEventListener(name, interrupt));
    };
    const interrupt = () => {
      disposed = true;
      stopTracking();
    };
    const navigate = (target?: HTMLElement) => {
      const detail: { handled: boolean; target?: HTMLElement } = { handled: false, ...(target ? { target } : {}) };
      window.dispatchEvent(new CustomEvent('landing:route-change', { detail }));
      if (!detail.handled) {
        const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        const behavior = reducedMotion ? 'auto' : 'smooth';
        if (target) target.scrollIntoView({ behavior, block: 'start' });
        else window.scrollTo({ top: 0, behavior });
      }
    };
    // Next can update the URL before the streamed destination exists. Resolve
    // the fragment after rendering and keep Lenis on that destination, not 0.
    const frame = window.requestAnimationFrame(() => {
      let id = '';
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { /* Invalid fragment: keep the normal route reset. */ }
      if (!id) {
        document.body.removeAttribute('data-landing-anchor-navigation');
        navigate();
        return;
      }
      document.body.setAttribute('data-landing-anchor-navigation', 'true');
      let lastTarget: HTMLElement | null = null;
      let lastTop = Number.NaN;
      const resolveTarget = () => {
        const target = document.getElementById(id);
        if (!target || !target.getClientRects().length) return;
        const top = window.scrollY + target.getBoundingClientRect().top;
        if (target === lastTarget && Math.abs(top - lastTop) < 1) return;
        lastTarget = target;
        lastTop = top;
        void (document.fonts?.ready ?? Promise.resolve()).then(() => {
          if (!disposed && target.isConnected && document.getElementById(id) === target) navigate(target);
        });
      };
      resolveTarget();
      observer = new MutationObserver(resolveTarget);
      observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['id'] });
      sizeObserver = new ResizeObserver(resolveTarget);
      sizeObserver.observe(document.body);
      interruptionEvents.forEach(name => window.addEventListener(name, interrupt, { once: true, passive: true }));
      timer = window.setTimeout(() => {
        stopTracking();
        if (!lastTarget) {
          document.body.removeAttribute('data-landing-anchor-navigation');
          if (!disposed) navigate();
        }
      }, 3000);
    });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frame);
      stopTracking();
    };
  }, [pathname]);

  return null;
}
