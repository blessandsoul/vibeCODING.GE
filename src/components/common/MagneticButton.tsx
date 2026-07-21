'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/* =========================================================================
   Historical API retained as a stable inline wrapper. Cursor-following motion
   was removed because the hero already has typewriter and product-demo motion;
   moving the primary conversion target added noise and a permanent will-change
   layer without explaining state. The child remains the real focus target.
   ========================================================================= */

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

export function MagneticButton({ children, className }: MagneticButtonProps) {
  return <span className={cn('inline-flex', className)}>{children}</span>;
}
