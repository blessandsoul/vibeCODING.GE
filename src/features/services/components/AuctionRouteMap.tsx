'use client';

import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { FadeIn } from '@/components/common/FadeIn';
import { Ico } from '@/components/common/Ico';

const W = 800;
const H = 360;

const US = { x: 110, y: 165, label: 'US' };
const SEA = { x: 410, y: 200 };
const POTI = { x: 620, y: 175, label: 'POTI' };
const TBILISI = { x: 700, y: 165, label: 'TBILISI' };

const path = `M ${US.x} ${US.y} Q ${SEA.x} ${SEA.y + 60} ${POTI.x} ${POTI.y} L ${TBILISI.x} ${TBILISI.y}`;

export const AuctionRouteMap = () => {
  const t = useTranslations('servicesAuctionMarketing');
  const reduced = useReducedMotion();

  return (
    <section className="relative py-12 md:py-16">
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8">
        <FadeIn>
          <div className="mb-8 text-center md:mb-10">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">
              {t('routeEyebrow')}
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-950 dark:text-white md:text-3xl">
              {t('routeTitle')}
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 md:text-base">
              {t('routeSubtitle')}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-5xl dodo-glass-card p-4 md:p-6">
            <div className="aspect-5/3 w-full md:aspect-800/360">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="xMidYMid meet"
                className="h-full w-full"
                role="img"
                aria-label="US to Georgia auto-shipping route"
              >
                <defs>
                  <linearGradient id="routeLine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <radialGradient id="dotGlow">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <g opacity="0.12">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <line
                      key={`h${i}`}
                      x1="0"
                      y1={i * 24}
                      x2={W}
                      y2={i * 24}
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  ))}
                  {Array.from({ length: 34 }).map((_, i) => (
                    <line
                      key={`v${i}`}
                      x1={i * 24}
                      y1="0"
                      x2={i * 24}
                      y2={H}
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  ))}
                </g>

                <g opacity="0.18">
                  <path
                    d="M 30 130 Q 70 100 120 130 L 180 120 L 220 150 L 200 200 L 150 220 L 80 200 Z"
                    fill="currentColor"
                  />
                  <path
                    d="M 540 130 L 600 120 L 670 130 L 720 110 L 770 140 L 750 180 L 680 200 L 620 195 L 570 180 Z"
                    fill="currentColor"
                  />
                </g>

                <motion.path
                  d={path}
                  stroke="url(#routeLine)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                  fill="none"
                  initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: reduced ? 0 : 2, ease: 'easeOut' }}
                />

                {!reduced && (
                  <motion.circle
                    r="40"
                    fill="url(#dotGlow)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    <animateMotion
                      dur="8s"
                      repeatCount="indefinite"
                      path={path}
                      begin="2s"
                    />
                  </motion.circle>
                )}

                {[US, POTI, TBILISI].map((p, i) => (
                  <g key={p.label}>
                    <motion.circle
                      cx={p.x}
                      cy={p.y}
                      r="7"
                      fill="#2563eb"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.5 }}
                    />
                    {!reduced && (
                      <motion.circle
                        cx={p.x}
                        cy={p.y}
                        r="16"
                        fill="#2563eb"
                        fillOpacity="0.18"
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: 0.3 + i * 0.5,
                        }}
                      />
                    )}
                    <rect
                      x={p.x - 28}
                      y={p.y - 32}
                      width="56"
                      height="16"
                      rx="3"
                      fill="#fafafa"
                      fillOpacity="0.9"
                    />
                    <text
                      x={p.x}
                      y={p.y - 20}
                      textAnchor="middle"
                      className="font-(family-name:--font-space-mono) text-[11px] font-bold uppercase tracking-widest"
                      fill="currentColor"
                    >
                      {p.label}
                    </text>
                  </g>
                ))}

                <text
                  x={US.x}
                  y={US.y + 38}
                  textAnchor="middle"
                  className="hidden text-[10px] uppercase tracking-wider md:block"
                  fill="currentColor"
                  opacity="0.5"
                >
                  Copart · IAAI · Manheim
                </text>
                <text
                  x={POTI.x}
                  y={POTI.y + 38}
                  textAnchor="middle"
                  className="text-[10px] uppercase tracking-wider"
                  fill="currentColor"
                  opacity="0.5"
                >
                  {t('routePort')}
                </text>
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200/80 dark:border-white/10 pt-4 md:gap-6">
              <Stat icon={<Ico name="solar:delivery-bold-duotone" className="size-[14px]" />} label={t('routeStep1')} value={t('routeStep1Time')} />
              <Stat icon={<Ico name="solar:siren-rounded-bold-duotone" className="size-[14px]" />} label={t('routeStep2')} value={t('routeStep2Time')} />
              <Stat icon={<Ico name="solar:plain-bold-duotone" className="size-[14px]" />} label={t('routeStep3')} value={t('routeStep3Time')} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-widest text-slate-600 dark:text-slate-300 md:gap-1.5 md:text-[10px]">
        {icon}
        <span className="truncate">{label}</span>
      </span>
      <span className="mt-1 text-xs font-bold text-slate-950 dark:text-white md:text-base">{value}</span>
    </div>
  );
}
