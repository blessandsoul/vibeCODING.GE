'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import {
  RLS_REQUEST,
  RLS_STAGES,
  createTimelinePlayer,
  rlsFrame,
} from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { BusinessResult, DemoIntro, StableStoryText } from '@/features/showcase/ShowcaseStory';
import { cn } from '@/lib/utils';

type Phase = 'idle' | 'reading' | 'enabling' | 'done';
type FictionalRow = {
  id: number;
  name: string;
  email: string;
  phone: string;
  total: string;
};

const ROWS = rlsFrame('open-result').rows as FictionalRow[];
const REQUEST_PATH = RLS_REQUEST.replace(/^GET /u, '');
const GRID = 'grid-cols-[36px_minmax(0,1fr)] sm:grid-cols-[36px_minmax(0,1fr)_minmax(0,1.35fr)]';
const SEG_OFF = 'var(--brand-cta)';
const SEG_ON = '#047857';
const RLS_CYCLE_MS = 7200;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanRls() {
  const t = useTranslations('product.rls');
  const reduced = Boolean(useReducedMotion());
  const [rls, setRls] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [shown, setShown] = useState(0);
  const demoRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<ReturnType<typeof createTimelinePlayer> | null>(null);
  const controllerRef = useRef<DemoController | null>(null);

  const applyTimelineStage = useCallback((stage: string) => {
    const frame = rlsFrame(stage);
    setRls(frame.rulesEnabled);
    setShown(frame.rows.length);
    setPhase(
      frame.status === 'complete'
        ? 'done'
        : frame.status === 'enabling'
          ? 'enabling'
          : 'reading',
    );
  }, []);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: RLS_STAGES,
      durationMs: RLS_CYCLE_MS,
      onStage: applyTimelineStage,
    });
    timeline.current = player;
    const controller = createScanDemoLoop({
      target: demoRef.current,
      reducedMotion: reduced,
      cycleMs: RLS_CYCLE_MS,
      play: player.play,
      showFinal: () => applyTimelineStage(RLS_STAGES[RLS_STAGES.length - 1]),
      reset: () => {
        setRls(false);
        setPhase('idle');
        setShown(0);
      },
      stop: player.stop,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      player.stop();
      if (timeline.current === player) timeline.current = null;
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [applyTimelineStage, reduced]);

  const setRules = useCallback((on: boolean) => {
    controllerRef.current?.takeControl();
    timeline.current?.stop();
    setRls(on);
    setShown(on ? 0 : ROWS.length);
    setPhase('done');
  }, []);

  const replay = useCallback(() => controllerRef.current?.replay(), []);
  const open = phase === 'done' && !rls;
  const locked = phase === 'done' && rls;
  const rows = rls ? [] : ROWS.slice(0, shown);
  const storyState = locked ? 'locked' : open ? 'open' : 'checking';
  const emptyState = locked
    ? 'locked'
    : phase === 'reading' || phase === 'enabling'
      ? 'waiting'
      : 'idle';
  const overlayResultState = locked ? 'locked' : 'sample';

  return (
    <SectionContainer
      className="py-16 md:py-24 lg:py-28"
      data-landing-demo="true"
      data-demo-id="scan-rls"
      data-demo-detail={locked ? 'final' : open ? 'exposed' : phase}
      aria-live="off"
    >
      <DemoIntro
        icon="solar:database-bold-duotone"
        eyebrow={t('eyebrow')}
        title={t('heading')}
        description={t('subtitle')}
        badge={t('mock')}
      />

      <div
        ref={demoRef}
        aria-live="off"
        className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_50px_-38px_rgba(0,0,0,0.45)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ececec] bg-[#fafafa] px-5 py-4 md:px-7">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[var(--brand-ink)] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
              <Ico name="solar:users-group-two-rounded-bold-duotone" className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[14px] font-extrabold text-[#111827]">{t('customerList')}</p>
              <p className="mt-0.5 text-[11px] text-[#667085]">{t('mock')}</p>
            </div>
          </div>

          <div
            data-rls-controls-slot="true"
            className="flex w-full min-w-0 flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:items-center min-h-[132px] sm:min-h-[56px]"
          >
            <span className="text-[12px] font-semibold text-[#667085]">{t('rlsLabel')}</span>
            <div
              className="flex w-full min-w-0 gap-1 rounded-2xl bg-white p-1 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] sm:w-auto sm:rounded-full"
              role="group"
              aria-label={t('rlsLabel')}
            >
              {([false, true] as const).map((on) => (
                <button
                  key={String(on)}
                  type="button"
                  onClick={() => setRules(on)}
                  aria-pressed={rls === on}
                  className={cn(
                    'min-h-[44px] min-w-0 flex-1 rounded-xl px-4 text-[13px] font-bold sm:flex-none sm:rounded-full',
                    'transition-[transform,background-color,color] duration-150 ease-out active:scale-[0.96]',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2',
                    rls === on ? 'text-white' : 'text-[#667085] md:hover:text-neutral-900',
                  )}
                  style={rls === on ? { background: on ? SEG_ON : SEG_OFF } : undefined}
                >
                  <Ico
                    name={on ? 'solar:lock-keyhole-bold-duotone' : 'solar:lock-keyhole-unlocked-bold-duotone'}
                    className="mr-1.5 inline-block size-4"
                  />
                  {t(on ? 'protectedChoice' : 'openChoice')}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={replay}
              data-demo-replay="scan-rls"
              aria-label={t('replay')}
              className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-[#111827] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 sm:rounded-full"
            >
              <Ico name="solar:refresh-bold-duotone" className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid min-w-0 gap-0 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 border-b border-[#ececec] p-5 md:p-7 lg:border-b-0 lg:border-r">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[12px] font-bold text-[#667085]">{t('request')}</p>
                <code className="mt-1 block max-w-full overflow-x-auto whitespace-pre-wrap break-all font-mono text-[12px] text-[#4B5563]">
                  {REQUEST_PATH}
                </code>
              </div>
              <span
                className={cn(
                  'inline-flex min-h-9 items-center gap-2 rounded-full px-3 text-[11px] font-bold',
                  locked
                    ? 'bg-[#dcfce7] text-[#166534]'
                    : open
                      ? 'bg-[#fee2e2] text-[#991b1b]'
                      : 'bg-neutral-900/[0.06] text-[#4B5563]',
                )}
              >
                <StableStoryText
                  activeKey={storyState}
                  layers={[
                    {
                      key: 'locked',
                      className: 'flex items-center gap-2',
                      content: <><Ico name="solar:shield-check-bold-duotone" className="size-4" />{t('protectedStatus')}</>,
                    },
                    {
                      key: 'open',
                      className: 'flex items-center gap-2',
                      content: <><Ico name="solar:shield-warning-bold-duotone" className="size-4" />{t('visibleStatus')}</>,
                    },
                    {
                      key: 'checking',
                      className: 'flex items-center gap-2',
                      content: <><Ico name="solar:clock-circle-bold-duotone" className="size-4" />{t('checkingStatus')}</>,
                    },
                  ]}
                />
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl shadow-[0_0_0_1px_rgba(0,0,0,0.07)]">
              <div role="table" aria-label={t('tableAria')} className="min-w-0">
                <div role="row" className={cn('grid gap-x-4 bg-[#fafafa] px-4 py-2.5', GRID)}>
                  <span role="columnheader" className="font-mono text-[11px] text-[#737373]">id</span>
                  <span role="columnheader" className="font-mono text-[11px] text-[#737373]">{t('nameColumn')}</span>
                  <span role="columnheader" className="hidden font-mono text-[11px] text-[#737373] sm:block">email</span>
                </div>

                <div role="rowgroup" className="relative min-h-[260px]">
                  {ROWS.map((r) => {
                    const visible = rows.some((row) => row.id === r.id);
                    return (
                      <motion.div
                        key={r.id}
                        data-rls-row="true"
                        role="row"
                        aria-hidden={!visible}
                        initial={reduced ? false : { x: -10 }}
                        animate={{ x: visible ? 0 : -10 }}
                        transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                        className={cn(
                          'grid items-center gap-x-4 border-t border-[#f1f1f1] bg-white px-4 py-3',
                          GRID,
                          visible ? 'visible opacity-100' : 'invisible opacity-0',
                        )}
                      >
                        <span role="cell" className="font-mono text-[12px] tabular-nums text-[#737373]">{r.id}</span>
                        <span role="cell" className="break-words text-[14px] font-semibold text-[#111827]">{r.name}</span>
                        <span role="cell" className="hidden break-all font-mono text-[12px] text-[#4B5563] sm:block">{r.email}</span>
                      </motion.div>
                    );
                  })}

                  <div
                    role="row"
                    aria-hidden={rows.length > 0}
                    className={cn(
                      'absolute inset-0 grid place-items-center border-t border-[#f1f1f1] bg-white px-5 text-center transition-opacity duration-200 ease-out motion-reduce:transition-none',
                      rows.length === 0 ? 'opacity-100' : 'pointer-events-none opacity-0',
                    )}
                  >
                    <div role="cell" className="w-full max-w-sm">
                      <span className="inline-flex min-h-6 items-center rounded-full bg-[color-mix(in_srgb,var(--brand)_10%,white)] px-2.5 text-[10px] font-bold text-[var(--brand-ink)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--brand)_18%,transparent)]">
                        {t('mock')}
                      </span>
                      <StableStoryText
                        activeKey={emptyState}
                        className="mx-auto mt-3 size-7"
                        layers={[
                          { key: 'locked', className: 'grid place-items-center text-[#047857]', content: <Ico name="solar:lock-keyhole-bold-duotone" className="size-7" /> },
                          { key: 'waiting', className: 'grid place-items-center text-[#737373]', content: <Ico name="solar:clock-circle-bold-duotone" className="size-7" /> },
                          { key: 'idle', className: 'grid place-items-center text-[#737373]', content: <Ico name="solar:clock-circle-bold-duotone" className="size-7" /> },
                        ]}
                      />
                      <StableStoryText
                        activeKey={emptyState}
                        className="mt-2 text-pretty text-[13px] leading-5 text-[#525252]"
                        layers={[
                          { key: 'locked', content: t('emptyRow') },
                          { key: 'waiting', content: t('checkingExplanation') },
                          { key: 'idle', content: t('riskExplanation') },
                        ]}
                      />
                      <div className="mt-4 grid grid-cols-2 gap-2 text-left">
                        <span className="flex min-h-11 items-center justify-between gap-2 rounded-xl bg-[#fafafa] px-3 text-[11px] text-[#4B5563] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)]">
                          <span className="font-bold">HTTP</span>
                          <code className="font-mono font-extrabold tabular-nums text-[#111827]">200</code>
                        </span>
                        <span className="flex min-h-11 items-center gap-2 rounded-xl bg-[#fafafa] px-3 text-[11px] text-[#4B5563] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)]">
                          <Ico name="solar:users-group-two-rounded-bold-duotone" className="size-4 shrink-0 text-[var(--brand-ink)]" />
                          <StableStoryText
                            activeKey={overlayResultState}
                            layers={[
                              { key: 'sample', content: t('consoleRows', { n: ROWS.length }) },
                              { key: 'locked', content: t('consoleZero') },
                            ]}
                          />
                        </span>
                        <span className="col-span-2 flex min-h-11 items-center gap-2 rounded-xl bg-[#fafafa] px-3 text-[11px] text-[#4B5563] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)]">
                          <Ico name="solar:lock-keyhole-bold-duotone" className="size-4 shrink-0 text-[var(--brand-ink)]" />
                          <span className="font-bold">{t('rlsLabel')}</span>
                          <StableStoryText
                            activeKey={overlayResultState}
                            className="ml-auto text-right font-extrabold text-[#111827]"
                            layers={[
                              { key: 'sample', content: t('openChoice') },
                              { key: 'locked', content: t('protectedChoice') },
                            ]}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex min-h-[360px] flex-col justify-between bg-[#fafafa] p-5 md:p-7">
            <div data-rls-console-slot="true" className="min-h-[112px] sm:min-h-[72px]">
              <span className="text-[11px] font-bold tracking-wide text-[#667085]">{t('whatHappens')}</span>
              <StableStoryText
                activeKey={storyState}
                className="mt-3 text-pretty text-[18px] font-extrabold leading-6 text-[#111827]"
                layers={[
                  { key: 'locked', content: t('safeExplanation') },
                  { key: 'open', content: t('riskExplanation') },
                  { key: 'checking', content: t('checkingExplanation') },
                ]}
              />
            </div>

            <div data-rls-verdict-slot="true" className="mt-6 min-h-[176px] sm:min-h-[120px]">
              <p
                role="status"
                aria-live="off"
                className={cn(
                  'min-h-[176px] rounded-2xl px-5 py-4 text-pretty text-[14px] font-semibold leading-6 sm:min-h-[120px]',
                  locked
                    ? 'bg-[#f0fdf4] text-[#065f46] shadow-[0_0_0_1px_#a7f3d0]'
                    : open
                      ? 'bg-[#fef2f2] text-[#7f1d1d] shadow-[0_0_0_1px_#fecaca]'
                      : 'bg-white text-[#525252] shadow-[0_0_0_1px_#e5e7eb]',
                )}
              >
                <StableStoryText
                  activeKey={storyState}
                  layers={[
                    {
                      key: 'locked',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:shield-check-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('verdictLocked')}</span></>,
                    },
                    {
                      key: 'open',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:shield-warning-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('verdictOpen', { n: ROWS.length })}</span></>,
                    },
                    {
                      key: 'checking',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:clock-circle-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('waiting')}</span></>,
                    },
                  ]}
                />
              </p>
            </div>

            <p className="mt-5 text-pretty text-[11px] leading-5 text-[#667085]">{t('honest')}</p>
          </aside>
        </div>
      </div>

      <BusinessResult label={t('resultLabel')}>{t('result')}</BusinessResult>
    </SectionContainer>
  );
}
