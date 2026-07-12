'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { cn } from '@/lib/utils';

const PAYWALL_STAGES = [false, true] as const;
const PAYWALL_CYCLE_MS = 6500;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanPaywall() {
  const t = useTranslations('product.paywall');
  const reduced = Boolean(useReducedMotion());
  const [isPro, setIsPro] = useState(false);
  const demoRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: PAYWALL_STAGES,
      durationMs: PAYWALL_CYCLE_MS,
      onStage: setIsPro,
    });
    const controller = createScanDemoLoop({
      target: demoRef.current,
      reducedMotion: reduced,
      cycleMs: PAYWALL_CYCLE_MS,
      play: player.play,
      showFinal: () => setIsPro(true),
      reset: () => setIsPro(false),
      stop: player.stop,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      player.stop();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const choosePlan = useCallback(() => {
    controllerRef.current?.takeControl();
    setIsPro((current) => !current);
  }, []);

  const replay = useCallback(() => controllerRef.current?.replay(), []);

  return (
    <SectionContainer className="py-20 md:py-28">
      <div ref={demoRef} className="grid min-w-0 gap-10 lg:grid-cols-[minmax(280px,400px)_minmax(0,1fr)] lg:gap-14">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-neutral-900/40">
            <Ico name="solar:lock-keyhole-bold-duotone" className="size-5 text-[var(--brand-ink)]" />
            {t('eyebrow')}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>

          <div className="mt-8 rounded-2xl bg-[#fafafa] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--brand-ink)] shadow-[0_0_0_1px_rgba(0,0,0,0.07)]">
                <Ico name="solar:server-square-bold-duotone" className="size-5" />
              </span>
              <p className="text-pretty text-[14px] font-semibold leading-relaxed text-neutral-900">
                {t('explain')}
              </p>
            </div>
          </div>

          <p className="mt-4 flex items-start gap-2 border-l-2 border-[#b91c1c] pl-4 text-pretty text-[13px] leading-relaxed text-[#525252]">
            <Ico name="solar:shield-warning-bold-duotone" className="mt-0.5 size-5 shrink-0 text-[#b91c1c]" />
            <span>{t('incident')}</span>
          </p>
        </div>

        <div className="min-w-0">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_20px_44px_-30px_rgba(0,0,0,0.4)]">
            <div className="flex min-w-0 items-center justify-between gap-3 border-b border-[#ececec] bg-[#fafafa] px-4 py-3 sm:px-5">
              <span className="min-w-0 truncate text-[13px] font-bold text-neutral-900">sample-app.example</span>
              <span
                className={cn(
                  'inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide transition-colors',
                  isPro ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-neutral-900/[0.06] text-neutral-900/50',
                )}
              >
                <Ico
                  name={isPro ? 'solar:lock-keyhole-unlocked-bold-duotone' : 'solar:lock-keyhole-bold-duotone'}
                  className="size-4"
                />
                {isPro ? t('pro') : t('free')}
              </span>
            </div>

            <div className="p-5 sm:p-6 md:p-8">
              <div className={cn('relative overflow-hidden rounded-2xl p-5 transition-colors sm:p-6', isPro ? 'bg-[#f0fdf4]' : 'bg-[#fafafa]')}>
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="block text-[15px] font-bold text-neutral-900">{t('feature')}</span>
                    <span className="mt-1 block text-[13px] text-neutral-900/50">{t('featureSub')}</span>
                  </div>
                  <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-xl', isPro ? 'bg-[#d1fae5] text-[#065f46]' : 'bg-neutral-900/[0.07] text-neutral-900/45')}>
                    <Ico
                      name={isPro ? 'solar:lock-keyhole-unlocked-bold-duotone' : 'solar:lock-keyhole-bold-duotone'}
                      className="size-5"
                    />
                  </span>
                </div>

                {!isPro && (
                  <span className="pointer-events-none absolute inset-0 bg-white/55 backdrop-blur-[3px]" aria-hidden="true" />
                )}

                <div className="relative mt-5 flex flex-col gap-2">
                  {[70, 88, 54].map((width) => (
                    <span key={width} className="block h-2 rounded-full bg-neutral-900/10" style={{ width: `${width}%` }} />
                  ))}
                </div>
              </div>

              <div className="mt-5 min-w-0 rounded-2xl bg-[#0b0b0e] p-4 text-white">
                <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wide text-white/35">
                  <Ico name="solar:server-square-bold-duotone" className="size-4" />
                  {t('console')}
                </span>
                <pre className="mt-2 overflow-x-auto font-mono text-[13px] leading-relaxed text-white/80">
                  <code>
                    {'> user = { plan: '}
                    <span className={isPro ? 'text-[#4ade80]' : 'text-[#fca5a5]'}>
                      {isPro ? "'pro'" : "'free'"}
                    </span>
                    {', isPro: '}
                    <motion.span
                      key={String(isPro)}
                      initial={reduced ? false : { scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={cn('inline-block font-bold', isPro ? 'text-[#4ade80]' : 'text-[#fca5a5]')}
                    >
                      {String(isPro)}
                    </motion.span>
                    {' }'}
                  </code>
                </pre>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={choosePlan}
                  className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-xl bg-[var(--brand-cta)] px-6 text-[15px] font-bold text-white transition-transform active:scale-[0.97] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                >
                  <Ico name={isPro ? 'solar:lock-keyhole-bold-duotone' : 'solar:lock-keyhole-unlocked-bold-duotone'} className="size-5" />
                  {isPro ? t('reset') : t('doIt')}
                </button>
                <button
                  type="button"
                  onClick={replay}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-white px-5 text-[13px] font-bold text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                >
                  <Ico name="solar:refresh-bold-duotone" className="size-4" />
                  {t('replay')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
