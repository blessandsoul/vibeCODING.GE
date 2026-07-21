'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import {
  FIX_STAGES,
  createTimelinePlayer,
  fixFrame,
} from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { BusinessResult, DemoIntro, StableStoryText } from '@/features/showcase/ShowcaseStory';
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

const PHASES = [
  { label: 'phaseFind', icon: 'solar:scanner-bold-duotone' },
  { label: 'phaseProtect', icon: 'solar:server-square-bold-duotone' },
  { label: 'phaseConfirm', icon: 'solar:shield-check-bold-duotone' },
] as const;

const FIX_CYCLE_MS = 7200;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanFixRescan() {
  const t = useTranslations('product.fix');
  const reduced = Boolean(useReducedMotion());
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
      reducedMotion: reduced,
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

  const replay = useCallback(() => controllerRef.current?.replay(), []);
  const frame = fixFrame(stage);
  const activeIndex = FIX_STAGES.indexOf(stage);
  const phaseIndex = activeIndex <= 1 ? 0 : activeIndex <= 3 ? 1 : 2;
  const isBusy = stage === 'scanning' || stage === 'revoking' || stage === 'rescanning';
  const findingState = frame.findingCount === 0 ? 'clean' : 'exposed';
  const browserKeyState = frame.browserKey ? (frame.revoked ? 'revoked' : 'present') : 'clean';
  const serverState = frame.replacementLocation === 'server' ? 'server' : 'waiting';
  const outcomeState = frame.clean ? 'clean' : 'progress';

  return (
    <SectionContainer
      className="py-16 md:py-24 lg:py-28"
      data-landing-demo="true"
      data-demo-id="scan-fix"
      data-demo-detail={stage}
      aria-live="off"
    >
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <DemoIntro
          icon="solar:scanner-bold-duotone"
          eyebrow={t('eyebrow')}
          title={t('heading')}
          description={t('subtitle')}
          badge={t('fictional')}
        />
        <button
          type="button"
          onClick={replay}
          data-demo-replay="scan-fix"
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-[13px] font-bold text-[#111827] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-[transform,background-color] duration-150 ease-out active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 md:hover:bg-[#fafafa]"
        >
          <Ico name="solar:refresh-bold-duotone" className="size-4" />
          {t('replay')}
        </button>
      </div>

      <div
        ref={demoRef}
        aria-live="off"
        className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_50px_-38px_rgba(0,0,0,0.45)]"
      >
        <ol className="grid grid-cols-3 border-b border-[#ececec] bg-[#fafafa]">
          {PHASES.map((phase, index) => {
            const active = index === phaseIndex;
            const complete = index < phaseIndex;
            return (
              <li
                key={phase.label}
                aria-current={active ? 'step' : undefined}
                className={cn(
                  'flex min-h-[82px] min-w-0 flex-col items-center justify-center gap-2 border-r border-[#ececec] px-2 py-3 text-center text-[11px] font-bold leading-4 last:border-r-0 sm:flex-row sm:px-4 sm:text-left',
                  active ? 'bg-[#111827] text-white' : complete ? 'text-[#047857]' : 'text-[#667085]',
                )}
              >
                <span className={cn(
                  'grid size-8 shrink-0 place-items-center rounded-full',
                  active ? 'bg-white text-[#111827]' : complete ? 'bg-[#dcfce7] text-[#047857]' : 'bg-white text-[#737373] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]',
                )}>
                  <Ico name={complete ? 'solar:shield-check-bold-duotone' : phase.icon} className="size-4" />
                </span>
                <span className="min-w-0 text-pretty">{t(phase.label)}</span>
              </li>
            );
          })}
        </ol>

        <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div className="border-b border-[#ececec] p-5 md:p-7 lg:border-b-0 lg:border-r">
            <div className="overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
              <div
                data-fix-browser-header-slot="true"
                className="flex min-h-[100px] flex-wrap items-center justify-between gap-3 border-b border-[#ececec] bg-[#fafafa] px-4 py-3.5 sm:min-h-[68px]"
              >
                <span className="flex items-center gap-3 text-[13px] font-extrabold text-[#111827]">
                  <span className="grid size-9 place-items-center rounded-xl bg-white text-[var(--brand-ink)] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                    <Ico name="solar:code-file-bold-duotone" className="size-5" />
                  </span>
                  {t('browserBundle')}
                </span>
                <span className={cn(
                  'inline-flex min-h-8 items-center gap-2 rounded-full px-3 text-[10px] font-bold',
                  frame.findingCount === 0 ? 'bg-[#dcfce7] text-[#166534]' : 'bg-[#fee2e2] text-[#991b1b]',
                )}>
                  <StableStoryText
                    activeKey={findingState}
                    layers={[
                      {
                        key: 'clean',
                        className: 'flex items-center gap-2',
                        content: <><Ico name="solar:shield-check-bold-duotone" className="size-4" />{t('cleanBadge')}</>,
                      },
                      {
                        key: 'exposed',
                        className: 'flex items-center gap-2',
                        content: <><Ico name="solar:shield-warning-bold-duotone" className="size-4" />{t('exposedBadge')}</>,
                      },
                    ]}
                  />
                </span>
              </div>

              <div data-fix-browser-slot="true" className="min-h-[204px] bg-[#0b0b0e] px-5 py-5 text-white">
                <span className="flex items-center gap-2 text-[10px] font-bold tracking-wide text-[#D1D5DB]">
                  <Ico name="solar:key-bold-duotone" className="size-4" />
                  {t('keyLabel')}
                </span>
                <code className="mt-3 block min-h-6 break-all font-mono text-[13px]">
                  <StableStoryText
                    activeKey={browserKeyState}
                    layers={[
                      { key: 'present', className: 'text-[#fca5a5]', content: frame.browserKey ?? t('notPresent') },
                      { key: 'revoked', className: 'text-[#fca5a5] line-through decoration-white/45', content: frame.browserKey ?? t('notPresent') },
                      { key: 'clean', className: 'text-[#86efac]', content: t('notPresent') },
                    ]}
                  />
                </code>
                <StableStoryText
                  activeKey={frame.browserKey ? 'exposed' : 'clean'}
                  className="mt-4 max-w-xl text-pretty text-[12px] leading-5 text-[#D1D5DB]"
                  layers={[
                    { key: 'exposed', content: t('redacted') },
                    { key: 'clean', content: t('browserCleanExplanation') },
                  ]}
                />
                <p
                  aria-hidden={!frame.revoked}
                  className={cn(
                    'mt-3 flex min-h-5 items-center gap-2 text-[12px] font-bold text-[#86efac] transition-opacity duration-200 ease-out motion-reduce:transition-none',
                    frame.revoked ? 'opacity-100' : 'pointer-events-none opacity-0',
                  )}
                >
                  <Ico name="solar:shield-check-bold-duotone" className="size-4" />
                  {t('revoked')}
                </p>
              </div>
            </div>

            <div
              data-fix-server-slot="true"
              className="mt-4 min-h-[126px] rounded-2xl bg-[#fafafa] px-5 py-4 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]"
            >
              <span className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-[#667085]">
                <Ico name="solar:server-square-bold-duotone" className="size-4" />
                {t('serverEnvironment')}
              </span>
              <StableStoryText
                activeKey={serverState}
                className="mt-3 text-pretty text-[14px] font-semibold leading-6 text-[#111827]"
                layers={[
                  { key: 'server', content: t('serverOnly') },
                  { key: 'waiting', content: t('serverWaiting') },
                ]}
              />
            </div>
          </div>

          <aside className="flex min-h-[420px] flex-col justify-between bg-[#fafafa] p-5 md:p-7">
            <div
              role="status"
              aria-live="off"
              data-fix-status-slot="true"
              className="min-h-[210px] rounded-2xl bg-[#111827] px-5 py-6 text-white"
            >
              <div className="flex items-center gap-3">
                <motion.span
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-xl',
                    frame.clean ? 'bg-[#dcfce7] text-[#166534]' : 'bg-white/10 text-white',
                  )}
                  animate={reduced || !isBusy ? undefined : { scale: [0.96, 1, 0.96] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <StableStoryText
                    activeKey={stage}
                    className="size-5"
                    layers={FIX_STAGES.map((stageKey) => ({
                      key: stageKey,
                      className: 'grid place-items-center',
                      content: <Ico name={STAGE_ICONS[stageKey as keyof typeof STAGE_ICONS]} className="size-5" />,
                    }))}
                  />
                </motion.span>
                <StableStoryText
                  activeKey={stage}
                  className="text-[11px] font-bold tracking-wide text-[#D1D5DB]"
                  layers={FIX_STAGES.map((stageKey) => ({
                    key: stageKey,
                    content: t(STAGE_LABELS[stageKey as keyof typeof STAGE_LABELS]),
                  }))}
                />
              </div>

              <StableStoryText
                activeKey={stage}
                className="mt-6 text-pretty text-[16px] font-semibold leading-7 text-white/90"
                layers={FIX_STAGES.map((stageKey) => ({
                  key: stageKey,
                  content: t(STAGE_COPY[stageKey as keyof typeof STAGE_COPY]),
                }))}
              />
            </div>

            <div data-fix-outcome-slot="true" className="mt-5 min-h-[204px] sm:min-h-[108px]">
              <p className={cn(
                'min-h-[204px] rounded-2xl px-5 py-4 text-pretty text-[14px] font-semibold leading-6 sm:min-h-[108px]',
                frame.clean
                  ? 'bg-[#f0fdf4] text-[#065f46] shadow-[0_0_0_1px_#a7f3d0]'
                  : 'bg-white text-[#525252] shadow-[0_0_0_1px_#e5e7eb]',
              )}>
                <StableStoryText
                  activeKey={outcomeState}
                  layers={[
                    {
                      key: 'clean',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:shield-check-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('outcome')}</span></>,
                    },
                    {
                      key: 'progress',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:clock-circle-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('progressOutcome')}</span></>,
                    },
                  ]}
                />
              </p>
            </div>
          </aside>
        </div>
      </div>

      <BusinessResult label={t('resultLabel')}>{t('result')}</BusinessResult>
    </SectionContainer>
  );
}
