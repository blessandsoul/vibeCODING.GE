'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={cn("motion-safe:animate-in motion-reduce:animate-none", className)}
    >
      {children}
    </motion.div>
  );
};
