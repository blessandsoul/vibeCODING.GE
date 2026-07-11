'use client';

import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

/* Spring-eased number readout extracted from the ainow VinCalculator. The spring
   chases `value` (so slider drags glide rather than jump) and `formatter` maps
   the live spring value to the displayed string (currency, percent, plain). */
export function AnimatedNumber({
  value,
  formatter,
}: {
  value: number;
  formatter: (v: number) => string;
}) {
  const spring = useSpring(value, { stiffness: 100, damping: 20, mass: 0.5 });
  const display = useTransform(spring, (v) => formatter(v));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
}
