'use client';

import { useState, useEffect, useRef } from 'react';

/* Count-up hook extracted verbatim from the ainow MetaAdsShowcase. Starts the
   ramp the first time the host element crosses 30% of the viewport, then eases
   with 1-(1-p)^3 over `duration` ms via requestAnimationFrame. Returns the live
   value plus the ref you attach to the element to observe. */
export function useAnimatedCounter(end: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (done) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDone(true);
          const start = performance.now();
          const animate = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, done]);

  return [value, ref] as const;
}
