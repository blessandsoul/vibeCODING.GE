'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/* =========================================================================
   Reveal, a premium in-view reveal: opacity 0 -> 1, y 24 -> 0, and a
   filter blur(8px) -> blur(0) on a soft ease, with an optional delay. Used to
   wrap section headers (eyebrow + h2/h3). viewport once + amount 0.3, so it
   fires a single time as the header scrolls in. framer-motion auto-respects
   prefers-reduced-motion (it skips transform/filter under the OS setting).
   ========================================================================= */

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
