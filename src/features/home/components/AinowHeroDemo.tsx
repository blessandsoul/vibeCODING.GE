'use client';

import { useEffect, useId, useRef, useState } from 'react';

import { Ico } from '@/components/common/Ico';
import { cn } from '@/lib/utils';

export type AinowHeroDemoCopy = {
  label: string;
  illustrativeLabel: string;
  ownerLabel: string;
  ownerRequest: string;
  understoodTitle: string;
  understoodBody: string;
  products: readonly {
    name: 'CONTENT' | 'ADS' | 'CHATS';
    role: string;
    done: string;
  }[];
  finalTitle: string;
  finalBody: string;
  replayLabel: string;
  inspectLabel: string;
};

type DemoState = 'idle' | 'playing' | 'final' | 'manual' | 'paused';
type StageState = 'pending' | 'active' | 'complete';
type ProductName = AinowHeroDemoCopy['products'][number]['name'];

type Stage = {
  key: string;
  label?: string;
  brand?: 'iAI' | ProductName;
  title: string;
  body?: string;
  done?: string;
  inspectName: string;
  icon: string;
  toneClass: string;
  washClass: string;
  layoutClass: string;
};

const AUTOPLAY_THRESHOLD = 0.35;
const FIRST_CHANGE_MS = 700;
const STEP_CHANGE_MS = 800;
const FINAL_HOLD_MS = 2400;

const GENERIC_STATE_LABELS: Record<DemoState, string> = {
  idle: 'Idle',
  playing: 'Playing',
  final: 'Complete',
  manual: 'Manual',
  paused: 'Paused',
};

const PRODUCT_META: Record<
  ProductName,
  Pick<Stage, 'icon' | 'toneClass' | 'washClass'>
> = {
  CONTENT: {
    icon: 'solar:pen-new-square-bold-duotone',
    toneClass: 'text-pink-600 dark:text-pink-400',
    washClass: 'bg-pink-500/[0.07] dark:bg-pink-400/[0.08]',
  },
  ADS: {
    icon: 'solar:target-bold-duotone',
    toneClass: 'text-emerald-700 dark:text-emerald-400',
    washClass: 'bg-emerald-500/[0.07] dark:bg-emerald-400/[0.08]',
  },
  CHATS: {
    icon: 'solar:chat-round-bold-duotone',
    toneClass: 'text-[#C2185B] dark:text-pink-300',
    washClass: 'bg-[#C2185B]/[0.07] dark:bg-pink-400/[0.08]',
  },
};

function ProductWordmark({ name }: { name: ProductName }) {
  return (
    <span className="inline-flex items-baseline font-mono text-xs font-bold tracking-[-0.04em]">
      <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
        ai
      </span>
      <span className={PRODUCT_META[name].toneClass}>{name}</span>
    </span>
  );
}

function IaiWordmark() {
  return (
    <span className="inline-flex items-baseline font-mono text-xs font-bold tracking-[-0.04em]">
      <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">
        i
      </span>
      <span className="text-neutral-950 dark:text-white">AI</span>
    </span>
  );
}

export function AinowHeroDemo({ copy }: { copy: AinowHeroDemoCopy }) {
  const labelId = useId();
  const rootRef = useRef<HTMLElement>(null);
  const manualActionRef = useRef<(index: number) => void>(() => undefined);
  const replayActionRef = useRef<() => void>(() => undefined);
  const [demoState, setDemoState] = useState<DemoState>('idle');
  const [activeStep, setActiveStep] = useState(0);

  const productStages: Stage[] = copy.products.map((product) => {
    const meta = PRODUCT_META[product.name];
    return {
      key: product.name.toLowerCase(),
      brand: product.name,
      title: product.role,
      done: product.done,
      inspectName: `ai${product.name}`,
      icon: meta.icon,
      toneClass: meta.toneClass,
      washClass: meta.washClass,
      layoutClass: 'md:col-span-2',
    };
  });

  const stages: Stage[] = [
    {
      key: 'owner',
      label: copy.ownerLabel,
      title: copy.ownerRequest,
      inspectName: copy.ownerLabel,
      icon: 'solar:chat-round-bold-duotone',
      toneClass: 'text-violet-700 dark:text-violet-400',
      washClass: 'bg-violet-500/[0.07] dark:bg-violet-400/[0.08]',
      layoutClass: 'md:col-span-3',
    },
    {
      key: 'understood',
      brand: 'iAI',
      title: copy.understoodTitle,
      body: copy.understoodBody,
      inspectName: copy.understoodTitle,
      icon: 'solar:cpu-bolt-bold-duotone',
      toneClass: 'text-violet-700 dark:text-violet-400',
      washClass: 'bg-violet-500/[0.07] dark:bg-violet-400/[0.08]',
      layoutClass: 'md:col-span-3',
    },
    ...productStages,
    {
      key: 'result',
      title: copy.finalTitle,
      body: copy.finalBody,
      inspectName: copy.finalTitle,
      icon: 'solar:check-circle-bold-duotone',
      toneClass: 'text-violet-700 dark:text-violet-400',
      washClass: 'bg-violet-500/[0.07] dark:bg-violet-400/[0.08]',
      layoutClass: 'md:col-span-6',
    },
  ];

  const totalSteps = stages.length;

  useEffect(() => {
    const root = rootRef.current;
    if (!root || totalSteps < 2) return;

    const lastStep = totalSteps - 1;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timerId: number | null = null;
    let timerStartedAt = 0;
    let remainingMs = FIRST_CHANGE_MS;
    let currentStep = 0;
    let started = false;
    let manual = false;
    let reducedMotion = motionQuery.matches;
    let inViewport = false;
    let disposed = false;

    const commitStep = (nextStep: number) => {
      currentStep = nextStep;
      setActiveStep(nextStep);
    };

    const commitState = (nextState: DemoState) => {
      setDemoState(nextState);
    };

    const canAutoplay = () =>
      inViewport && document.visibilityState === 'visible' && !reducedMotion && !manual;

    const clearTimer = (preserveRemaining: boolean) => {
      if (timerId === null) return;
      if (preserveRemaining) {
        remainingMs = Math.max(0, remainingMs - (performance.now() - timerStartedAt));
      }
      window.clearTimeout(timerId);
      timerId = null;
    };

    const schedule = (delay: number) => {
      clearTimer(false);
      if (!canAutoplay() || disposed) return;

      remainingMs = delay;
      timerStartedAt = performance.now();
      timerId = window.setTimeout(() => {
        timerId = null;
        if (!canAutoplay() || disposed) {
          remainingMs = 0;
          if (!manual && !reducedMotion) commitState('paused');
          return;
        }

        if (currentStep < lastStep) {
          commitStep(currentStep + 1);
          if (currentStep === lastStep) {
            commitState('final');
            schedule(FINAL_HOLD_MS);
          } else {
            commitState('playing');
            schedule(STEP_CHANGE_MS);
          }
          return;
        }

        commitStep(0);
        commitState('playing');
        schedule(FIRST_CHANGE_MS);
      }, delay);
    };

    const pause = () => {
      if (!started || manual || reducedMotion) return;
      clearTimer(true);
      commitState('paused');
    };

    const resume = () => {
      if (reducedMotion) {
        clearTimer(false);
        started = true;
        commitStep(lastStep);
        commitState('final');
        return;
      }
      if (!canAutoplay()) return;

      if (!started) {
        started = true;
        currentStep = 0;
        remainingMs = FIRST_CHANGE_MS;
        commitStep(0);
      }

      commitState(currentStep === lastStep ? 'final' : 'playing');
      schedule(remainingMs);
    };

    manualActionRef.current = (index: number) => {
      clearTimer(false);
      manual = true;
      started = true;
      remainingMs = FIRST_CHANGE_MS;
      commitStep(Math.max(0, Math.min(index, lastStep)));
      commitState('manual');
    };

    replayActionRef.current = () => {
      clearTimer(false);
      manual = false;
      started = true;
      remainingMs = FIRST_CHANGE_MS;
      commitStep(0);

      if (reducedMotion) {
        commitStep(lastStep);
        commitState('final');
      } else if (canAutoplay()) {
        commitState('playing');
        schedule(FIRST_CHANGE_MS);
      } else {
        commitState('paused');
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') resume();
      else pause();
    };

    const onMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      clearTimer(false);
      manual = false;

      if (reducedMotion) {
        started = true;
        commitStep(lastStep);
        commitState('final');
      } else {
        started = false;
        remainingMs = FIRST_CHANGE_MS;
        commitStep(0);
        commitState('idle');
        resume();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport = Boolean(
          entry?.isIntersecting && entry.intersectionRatio >= AUTOPLAY_THRESHOLD,
        );
        if (inViewport) resume();
        else pause();
      },
      { threshold: AUTOPLAY_THRESHOLD },
    );

    document.addEventListener('visibilitychange', onVisibilityChange);
    motionQuery.addEventListener('change', onMotionChange);
    observer.observe(root);

    if (reducedMotion) {
      started = true;
      commitStep(lastStep);
      commitState('final');
    } else {
      commitStep(0);
      commitState('idle');
    }

    return () => {
      disposed = true;
      clearTimer(false);
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      motionQuery.removeEventListener('change', onMotionChange);
      manualActionRef.current = () => undefined;
      replayActionRef.current = () => undefined;
    };
  }, [totalSteps]);

  return (
    <figure
      ref={rootRef}
      aria-labelledby={labelId}
      aria-live="off"
      data-hero-demo
      data-demo-state={demoState}
      className="relative isolate w-full overflow-hidden rounded-[2rem] bg-white p-4 text-neutral-950 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06),0_18px_48px_-24px_rgba(31,41,55,0.18)] dark:bg-neutral-950 dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
    >
      <div className="mb-4 flex min-h-11 items-center justify-between gap-3">
        <figcaption id={labelId} className="min-w-0">
          <span className="block text-sm font-bold tracking-[-0.01em] text-neutral-950 dark:text-white">
            {copy.label}
          </span>
          <span className="mt-0.5 block text-xs font-medium text-neutral-600 dark:text-neutral-300">
            {copy.illustrativeLabel}
          </span>
          <span className="sr-only">{GENERIC_STATE_LABELS[demoState]}</span>
        </figcaption>

        <button
          type="button"
          data-demo-replay
          onClick={() => replayActionRef.current()}
          aria-label={copy.replayLabel}
          title={copy.replayLabel}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-800 shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] transition-transform duration-150 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:bg-white/[0.07] dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
        >
          <Ico name="solar:refresh-bold-duotone" className="size-5" />
        </button>
      </div>

      <div className="mb-3 flex h-1.5 gap-1.5" aria-hidden="true">
        {stages.map((stage, index) => (
          <span
            key={stage.key}
            className={cn(
              'h-full min-w-0 flex-1 origin-left rounded-full bg-neutral-200 transition-[transform,opacity] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] dark:bg-white/15',
              index <= activeStep ? 'scale-x-100 opacity-100' : 'scale-x-[0.72] opacity-45',
            )}
          />
        ))}
      </div>

      <ol className="grid grid-cols-1 gap-2 md:grid-cols-6">
        {stages.map((stage, index) => {
          const isActive = index === activeStep;
          const isComplete = index < activeStep || demoState === 'final';
          const stageState: StageState = isActive
            ? 'active'
            : isComplete
              ? 'complete'
              : 'pending';

          return (
            <li key={stage.key} className={stage.layoutClass}>
              <button
                type="button"
                onClick={() => manualActionRef.current(index)}
                title={`${copy.inspectLabel}: ${stage.inspectName}`}
                aria-pressed={isActive}
                data-stage={stage.key}
                data-stage-index={index}
                data-stage-state={stageState}
                className={cn(
                  'group relative grid min-h-28 w-full grid-cols-[2.75rem_minmax(0,1fr)] gap-3 overflow-hidden rounded-2xl bg-neutral-50 p-3 text-left shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] transition-transform duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] active:scale-[0.96] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:bg-white/[0.045] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
                  isActive ? 'scale-[1.01]' : 'scale-100',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute inset-0 transition-opacity duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]',
                    stage.washClass,
                    isActive ? 'opacity-100' : 'opacity-0',
                  )}
                />

                <span
                  className={cn(
                    'relative flex size-11 items-center justify-center rounded-xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.06)] dark:bg-white/[0.07] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]',
                    stage.toneClass,
                  )}
                >
                  <Ico name={stage.icon} className="size-5" />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-neutral-950 text-white shadow-sm transition-[transform,opacity] duration-200 [transition-timing-function:cubic-bezier(0.23,1,0.32,1)] dark:bg-white dark:text-neutral-950',
                      isComplete ? 'scale-100 opacity-100' : 'scale-[0.25] opacity-0',
                    )}
                  >
                    <Ico name="solar:check-read-bold-duotone" className="size-2.5" />
                  </span>
                </span>

                <span className="relative min-w-0">
                  <span className="mb-1 flex min-h-4 items-center">
                    {stage.brand === 'iAI' ? (
                      <IaiWordmark />
                    ) : stage.brand ? (
                      <ProductWordmark name={stage.brand} />
                    ) : stage.label ? (
                      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-neutral-600 dark:text-neutral-300">
                        {stage.label}
                      </span>
                    ) : null}
                  </span>
                  <span className="block text-sm font-bold leading-snug text-neutral-950 [text-wrap:balance] dark:text-white">
                    {stage.title}
                  </span>
                  {stage.body ? (
                    <span className="mt-1 block text-xs leading-relaxed text-neutral-600 [text-wrap:pretty] dark:text-neutral-300">
                      {stage.body}
                    </span>
                  ) : null}
                  {stage.done ? (
                    <span className="mt-1.5 flex items-start gap-1.5 text-xs font-semibold leading-relaxed text-neutral-700 [text-wrap:pretty] dark:text-neutral-200">
                      <Ico
                        name="solar:check-circle-bold-duotone"
                        className={cn('mt-0.5 size-3.5', stage.toneClass)}
                      />
                      <span>{stage.done}</span>
                    </span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}
