'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

/* =========================================================================
   TiltCard, wraps any card with a subtle 3D perspective tilt that follows the
   cursor (rotateX/rotateY, max ~6deg, spring back) plus a soft radial spotlight
   in var(--brand) that tracks the pointer. Respects prefers-reduced-motion: no
   tilt, no spotlight, the child renders flat. Pure transform/opacity, no layout
   thrash. The brand color flows in via the CSS var, never a hardcoded hex.
   ========================================================================= */

const MAX_TILT = 6; // degrees

const reducedMotion = () =>
  typeof window !== 'undefined' &&
  !!window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  // Normalized pointer position within the card (-0.5 .. 0.5).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  // Spotlight position in percent (0 .. 100).
  const sx = useMotionValue(50);
  const sy = useMotionValue(50);

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), {
    stiffness: 200,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), {
    stiffness: 200,
    damping: 18,
  });
  // Spotlight gradient string, derived from the pointer percent. Declared at the
  // top level (not inline in JSX) so every hook runs unconditionally regardless
  // of the reduced-motion early return below (Rules of Hooks).
  const spotlight = useTransform(
    [sx, sy],
    ([x, y]: number[]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, color-mix(in srgb, var(--brand) 18%, transparent), transparent 70%)`,
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    px.set(nx - 0.5);
    py.set(ny - 0.5);
    sx.set(nx * 100);
    sy.set(ny * 100);
  };

  const reset = () => {
    px.set(0);
    py.set(0);
    setActive(false);
  };

  if (reducedMotion()) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 900,
      }}
      className={cn('relative', className)}
    >
      {children}
      {/* Cursor-following brand spotlight. pointer-events:none so it never
          intercepts clicks; fades in on hover. */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: spotlight,
        }}
      />
    </motion.div>
  );
}
