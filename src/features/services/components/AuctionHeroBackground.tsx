'use client';

import { motion, useReducedMotion } from 'framer-motion';

const W = 1200;
const H = 360;
const US = { x: 240, y: 200 };
const GE = { x: 960, y: 175 };
const path = `M ${US.x} ${US.y} Q ${W / 2} 80 ${GE.x} ${GE.y}`;

export const AuctionHeroBackground = () => {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="heroRoute" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <radialGradient id="heroDotGlow">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.path
          d={path}
          stroke="url(#heroRoute)"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeDasharray="4 8"
          initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: reduced ? 0 : 3, ease: 'easeOut' }}
        />

        {[US, GE].map((p, i) => (
          <g key={i}>
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={3}
              fill="#2563eb"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 + i * 0.4, duration: 0.4 }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={10}
              fill="#2563eb"
              fillOpacity={0.2}
              initial={{ scale: 0 }}
              animate={reduced ? { scale: 1 } : { scale: [1, 1.6, 1] }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 2.4, repeat: Infinity, delay: 0.5 + i * 0.4 }
              }
            />
          </g>
        ))}

        {!reduced && (
          <circle r={20} fill="url(#heroDotGlow)">
            <animateMotion dur="12s" repeatCount="indefinite" path={path} />
          </circle>
        )}
      </svg>
    </div>
  );
};
