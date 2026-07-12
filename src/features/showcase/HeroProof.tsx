'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';

const FINDINGS = [
  { severity: 'critical', key: 'f1' },
  { severity: 'critical', key: 'f2' },
  { severity: 'major', key: 'f3' },
] as const;

const TONE = {
  critical: { badge: 'bg-[#ef4444]/16 text-[#fca5a5]', rail: '#ef4444' },
  major: { badge: 'bg-[#f59e0b]/18 text-[#fcd34d]', rail: '#f59e0b' },
} as const;

const HERO_CYCLE_MS = 6000;
const FINAL_SCORE = 31;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function HeroProof() {
  const t = useTranslations('product.proof');
  const reduced = Boolean(useReducedMotion());
  const [shown, setShown] = useState(0);
  const [score, setScore] = useState(100);
  const [complete, setComplete] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const controllerRef = useRef<DemoController | null>(null);

  const stop = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const reset = useCallback(() => {
    stop();
    setShown(0);
    setScore(100);
    setComplete(false);
  }, [stop]);

  const showFinal = useCallback(() => {
    stop();
    setShown(FINDINGS.length);
    setScore(FINAL_SCORE);
    setComplete(true);
  }, [stop]);

  const play = useCallback(() => {
    reset();
    const frames = [
      { delay: 900, shown: 1, score: 82 },
      { delay: 2600, shown: 2, score: 58 },
      { delay: 4300, shown: 3, score: 40 },
      { delay: HERO_CYCLE_MS, shown: 3, score: FINAL_SCORE, complete: true },
    ];

    for (const frame of frames) {
      timersRef.current.push(setTimeout(() => {
        setShown(frame.shown);
        setScore(frame.score);
        setComplete(Boolean(frame.complete));
      }, frame.delay));
    }
  }, [reset]);

  useEffect(() => {
    const controller = createScanDemoLoop({
      target: cardRef.current,
      reducedMotion: reduced,
      cycleMs: HERO_CYCLE_MS,
      play,
      showFinal: showFinal,
      reset: reset,
      stop,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      stop();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [play, reduced, reset, showFinal, stop]);

  const replay = useCallback(() => controllerRef.current?.replay(), []);

  return (
    <div ref={cardRef} className="min-w-0 overflow-hidden rounded-3xl bg-[#0b0b0e] shadow-[0_28px_60px_-40px_rgba(0,0,0,0.6)] [contain:inline-size]">
      <div className="flex min-w-0 items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-white/65">
          <Ico name="solar:scanner-bold-duotone" className="size-4" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-xl bg-white/[0.05] px-3 py-2 font-mono text-[11px] text-white/45">
          sample-app.example
        </span>
        <span className="shrink-0 rounded-full bg-white/[0.07] px-2.5 py-1 text-[9px] font-bold tracking-wide text-white/45">
          {t('sample')}
        </span>
      </div>

      <div className="p-5 md:p-6">
        <div className="flex min-w-0 items-end justify-between gap-4">
          <div className="min-w-0">
            <span className="flex items-center gap-2 text-[10.5px] font-semibold tracking-wide text-white/40">
              <Ico name="solar:shield-warning-bold-duotone" className="size-4" />
              {t('score')}
            </span>
            <span
              className="mt-1 block font-display text-6xl font-extrabold tabular-nums leading-none"
              style={{ color: score < 50 ? '#ef4444' : score < 80 ? '#f59e0b' : '#fff' }}
            >
              {score}
            </span>
          </div>
          <p className="max-w-[190px] pb-1 text-pretty text-right text-[12px] leading-snug text-white/45">
            {t('scoreNote')}
          </p>
        </div>

        <ul className="mt-5 flex flex-col gap-2">
          {FINDINGS.map((finding, index) => (
            <motion.li
              key={finding.key}
              initial={false}
              animate={index < shown ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: reduced ? 0 : 0.28, ease: [0.23, 1, 0.32, 1] }}
              className="min-w-0 rounded-xl bg-white/[0.04] px-4 py-3"
              style={{ boxShadow: `inset 3px 0 0 0 ${TONE[finding.severity].rail}` }}
            >
              <span className="flex min-w-0 items-start gap-2.5">
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-xl ${TONE[finding.severity].badge}`}>
                  <Ico name="solar:shield-warning-bold-duotone" className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-[9.5px] font-bold tracking-wide ${TONE[finding.severity].badge}`}>
                    {t(finding.severity)}
                  </span>
                  <span className="mt-1 block text-pretty text-[13px] font-semibold leading-snug text-white">
                    {t(finding.key)}
                  </span>
                </span>
              </span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={false}
          animate={complete ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: reduced ? 0 : 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="mt-4 min-w-0 rounded-xl bg-black/50 px-4 py-3"
        >
          <span className="flex items-center gap-2 text-[9.5px] font-semibold tracking-wide text-white/35">
            <Ico name="solar:key-bold-duotone" className="size-4" />
            {t('found')}
          </span>
          <code className="mt-2 block break-all font-mono text-[13px] text-[#fca5a5]">
            sk-proj-redacted-3f2a
          </code>
          <span className="mt-2 block text-[11px] leading-snug text-white/45">{t('redacted')}</span>
        </motion.div>

        <button
          type="button"
          onClick={replay}
          className="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white/[0.08] px-4 text-[12px] font-bold text-white/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0b0e]"
        >
          <Ico name="solar:refresh-bold-duotone" className="size-4" />
          {t('replay')}
        </button>
      </div>
    </div>
  );
}
