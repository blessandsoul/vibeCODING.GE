'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import {
  FIX_STAGES,
  createTimelinePlayer,
  fixFrame,
} from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { cn } from '@/lib/utils';

const STAGE_LABELS = {
  scanning: 'stageScanning',
  exposed: 'stageExposed',
  revoking: 'stageRevoking',
  'server-side': 'stageServerSide',
  rescanning: 'stageRescanning',
  clean: 'stageClean',
} as const;

const STAGE_COPY = {
  scanning: 'scanningText',
  exposed: 'exposedText',
  revoking: 'revokingText',
  'server-side': 'serverSideText',
  rescanning: 'rescanningText',
  clean: 'cleanText',
} as const;

const STAGE_ICONS = {
  scanning: 'solar:scanner-bold-duotone',
  exposed: 'solar:shield-warning-bold-duotone',
  revoking: 'solar:key-bold-duotone',
  'server-side': 'solar:server-square-bold-duotone',
  rescanning: 'solar:scanner-bold-duotone',
  clean: 'solar:shield-check-bold-duotone',
} as const;

const FIX_CYCLE_MS = 7200;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanFixRescan() {
  const t = useTranslations('product.fix');
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(FIX_STAGES[0]);
  const demoRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<ReturnType<typeof createTimelinePlayer> | null>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: FIX_STAGES,
      durationMs: FIX_CYCLE_MS,
      onStage: setStage,
    });
    timeline.current = player;
    const controller = createScanDemoLoop({
      target: demoRef.current,
      reducedMotion: Boolean(reduced),
      cycleMs: FIX_CYCLE_MS,
      play: player.play,
      showFinal: () => setStage(FIX_STAGES[FIX_STAGES.length - 1]),
      reset: () => setStage(FIX_STAGES[0]),
      stop: player.stop,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      player.stop();
      if (timeline.current === player) timeline.current = null;
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const replay = useCallback(() => {
    controllerRef.current?.replay();
  }, []);

  const frame = fixFrame(stage);
  const activeIndex = FIX_STAGES.indexOf(stage);
  const isBusy = stage === 'scanning' || stage === 'revoking' || stage === 'rescanning';

  return (
    <SectionContainer className="py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-neutral-900/40">
              <Ico name="solar:scanner-bold-duotone" className="size-5 text-[var(--brand-ink)]" />
              {t('eyebrow')}
            </span>
            <span className="rounded-full bg-neutral-900/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900/45">
              {t('fictional')}
            </span>
          </div>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>
        </div>

        <button
          type="button"
          onClick={replay}
          className={cn(
            'inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-white px-5 text-[13px] font-bold text-neutral-900',
            'shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-[transform,background-color] duration-150 ease-out active:scale-[0.96] md:hover:bg-[#fafafa]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
          )}
        >
          <Ico name="solar:refresh-bold-duotone" className="mr-2 size-4" />
          {t('replay')}
        </button>
      </div>

      <div
        ref={demoRef}
        className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_50px_-38px_rgba(0,0,0,0.45)]"
      >
        <ol className="grid grid-cols-2 border-b border-[#ececec] bg-[#fafafa] sm:grid-cols-3 lg:grid-cols-6">
          {FIX_STAGES.map((item, index) => {
            const active = item === stage;
            const complete = index < activeIndex;
            return (
              <li
                key={item}
                aria-current={active ? 'step' : undefined}
                className={cn(
                  'flex min-h-[68px] items-center gap-2.5 border-b border-r border-[#ececec] px-3 py-3 text-[11px] font-bold leading-tight last:border-r-0 sm:min-h-[76px] lg:border-b-0',
                  active ? 'bg-neutral-900 text-white' : 'text-neutral-900/45',
                  complete && 'text-[#065f46]',
                )}
              >
                <span
                  className={cn(
                    'flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px]',
                    active
                      ? 'bg-white text-neutral-900'
                      : complete
                        ? 'bg-[#d1fae5] text-[#065f46]'
                        : 'bg-neutral-900/[0.06]',
                  )}
                  aria-hidden="true"
                >
                  {complete || active ? (
                    <Ico
                      name={complete ? 'solar:shield-check-bold-duotone' : STAGE_ICONS[item as keyof typeof STAGE_ICONS]}
                      className="size-4"
                    />
                  ) : (
                    index + 1
                  )}
                </span>
                <span>{t(STAGE_LABELS[item as keyof typeof STAGE_LABELS])}</span>
              </li>
            );
          })}
        </ol>

        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-[#ececec] p-5 md:p-7 lg:border-r lg:border-b-0">
            <div className="overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ececec] bg-[#fafafa] px-4 py-3.5">
                <span className="font-mono text-[12px] font-bold text-neutral-900">
                  {t('browserBundle')}
                </span>
                {frame.findingCount === 1 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fee2e2] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#991b1b]">
                    <Ico name="solar:shield-warning-bold-duotone" className="size-4" />
                    {t('exposedBadge')}
                  </span>
                )}
                {frame.findingCount === 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d1fae5] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#065f46]">
                    <Ico name="solar:shield-check-bold-duotone" className="size-4" />
                    {t('cleanBadge')}
                  </span>
                )}
              </div>

              <div className="bg-[#0b0b0e] px-4 py-5 md:px-5">
                <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wide text-white/35">
                  <Ico name="solar:key-bold-duotone" className="size-4" />
                  {t('keyLabel')}
                </span>
                <code
                  className={cn(
                    'mt-2 block min-h-6 break-all font-mono text-[13px]',
                    frame.browserKey ? 'text-[#fca5a5]' : 'text-white/25',
                    frame.revoked && 'line-through decoration-white/45',
                  )}
                >
                  {frame.browserKey ?? t('notPresent')}
                </code>
                {frame.browserKey && (
                  <p className="mt-2 text-[11px] leading-relaxed text-white/40">{t('redacted')}</p>
                )}
                {frame.revoked && (
                  <p className="mt-3 flex items-center gap-2 font-mono text-[11px] font-bold tracking-wide text-[#86efac]">
                    <Ico name="solar:shield-check-bold-duotone" className="size-4" />
                    {t('revoked')}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-[#fafafa] px-4 py-4 shadow-[0_0_0_1px_rgba(0,0,0,0.07)] md:px-5">
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-wide text-neutral-900/40">
                <Ico name="solar:server-square-bold-duotone" className="size-4" />
                {t('serverEnvironment')}
              </span>
              <code className="mt-2 block break-all font-mono text-[13px] font-bold text-neutral-900">
                {frame.replacementLocation === 'server' ? 'process.env.PAYMENTS_KEY' : t('notPresent')}
              </code>
              {frame.replacementLocation === 'server' && (
                <p className="mt-2 flex items-center gap-2 text-[12px] font-semibold text-[#065f46]">
                  <Ico name="solar:lock-keyhole-bold-duotone" className="size-4" />
                  {t('serverOnly')}
                </p>
              )}
            </div>
          </div>

          <div className="flex min-h-[320px] flex-col justify-between p-5 md:p-7">
            <div
              role="status"
              aria-live="polite"
              className="rounded-2xl bg-[#0b0b0e] px-5 py-6 text-white"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className={cn(
                    'flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-[13px] font-bold',
                    frame.clean ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-white/10 text-white',
                  )}
                  animate={
                    reduced || !isBusy
                      ? undefined
                      : { opacity: [0.45, 1, 0.45], scale: [0.92, 1, 0.92] }
                  }
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                >
                  <Ico
                    name={frame.clean ? 'solar:shield-check-bold-duotone' : isBusy ? 'solar:scanner-bold-duotone' : 'solar:shield-warning-bold-duotone'}
                    className="size-5"
                  />
                </motion.span>
                <span className="text-[11px] font-bold uppercase tracking-wide text-white/45">
                  {t(STAGE_LABELS[stage as keyof typeof STAGE_LABELS])}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={stage}
                  initial={reduced ? false : { opacity: 0, y: 7 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                  className="mt-5 text-pretty text-[15px] font-semibold leading-relaxed text-white/85"
                >
                  {t(STAGE_COPY[stage as keyof typeof STAGE_COPY])}
                </motion.p>
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {frame.clean && (
                <motion.p
                  initial={reduced ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="mt-5 rounded-2xl bg-[#f0fdf4] px-5 py-4 text-pretty text-[14px] font-semibold leading-relaxed text-[#065f46] shadow-[0_0_0_1px_#a7f3d0]"
                >
                  <span className="flex items-start gap-2">
                    <Ico name="solar:shield-check-bold-duotone" className="mt-0.5 size-5 shrink-0" />
                    <span>{t('outcome')}</span>
                  </span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
