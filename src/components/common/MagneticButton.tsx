'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

/* =========================================================================
   MagneticButton, a transparent inline wrapper that pulls its child a few px
   toward the cursor while the pointer is inside, springing back on leave. Does
   NOT style the child, so it layers cleanly over .btn-primary / .glass-cta /
   form submit without touching their look, focus ring, or click target. The
   child stays the real focusable/clickable element (keyboard a11y intact).
   Reduced-motion: a plain no-op pass-through.
   ========================================================================= */

const STRENGTH = 0.28; // fraction of pointer offset applied as translation
const MAX_PULL = 10; // px cap, keeps it subtle

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  if (reducedMotion()) {
    return <span className={cn('inline-flex', className)}>{children}</span>;
  }

  const clamp = (v: number) => Math.max(-MAX_PULL, Math.min(MAX_PULL, v));

  const handleMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(dx * STRENGTH));
    y.set(clamp(dy * STRENGTH));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy, willChange: 'transform' }}
      className={cn('inline-flex', className)}
    >
      {children}
    </motion.span>
  );
}
