'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { cn } from '@/lib/utils';

const ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
const SAMPLE_STAGES = [1, 4, 7, 10] as const;
const TEN_CYCLE_MS = 8000;
const ITEM_ICONS = [
  'solar:database-bold-duotone',
  'solar:key-bold-duotone',
  'solar:lock-keyhole-bold-duotone',
  'solar:server-square-bold-duotone',
  'solar:server-square-bold-duotone',
  'solar:database-bold-duotone',
  'solar:shield-warning-bold-duotone',
  'solar:server-square-bold-duotone',
  'solar:code-file-bold-duotone',
  'solar:documents-bold-duotone',
] as const;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanTenWays() {
  const t = useTranslations('product.ten');
  const reduced = Boolean(useReducedMotion());
  const [open, setOpen] = useState<number | null>(1);
  const demoRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: SAMPLE_STAGES,
      durationMs: TEN_CYCLE_MS,
      onStage: setOpen,
    });
    const controller = createScanDemoLoop({
      target: demoRef.current,
      reducedMotion: reduced,
      cycleMs: TEN_CYCLE_MS,
      play: player.play,
      showFinal: () => setOpen(10),
      reset: () => setOpen(1),
      stop: player.stop,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      player.stop();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced]);

  const chooseItem = useCallback((item: number) => {
    controllerRef.current?.takeControl();
    setOpen((current) => (current === item ? null : item));
  }, []);

  const replay = useCallback(() => controllerRef.current?.replay(), []);

  return (
    <SectionContainer className="py-20 md:py-28">
      <div ref={demoRef} className="min-w-0">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide text-neutral-900/40">
              <Ico name="solar:shield-warning-bold-duotone" className="size-5 text-[var(--brand-ink)]" />
              {t('eyebrow')}
            </span>
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
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-[13px] font-bold text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            <Ico name="solar:refresh-bold-duotone" className="size-4" />
            {t('replay')}
          </button>
        </div>

        <ul className="overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09)]">
          {ITEMS.map((item, index) => {
            const active = open === item;
            return (
              <li key={item} className={index === 0 ? '' : 'border-t border-[#ececec]'}>
                <button
                  type="button"
                  onClick={() => chooseItem(item)}
                  aria-expanded={active}
                  className="grid min-h-[64px] w-full min-w-0 grid-cols-[40px_minmax(0,1fr)_40px] items-center gap-3 px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--brand)] sm:gap-4 sm:px-5"
                >
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-xl transition-colors',
                      active ? 'bg-[var(--brand-cta)] text-white' : 'bg-[#fafafa] text-neutral-900/45',
                    )}
                  >
                    <Ico name={ITEM_ICONS[index]} className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] tabular-nums text-neutral-900/35">
                      {String(item).padStart(2, '0')}
                    </span>
                    <span className={cn('mt-1 block text-pretty text-[16px] font-bold leading-snug sm:text-[18px]', active ? 'text-neutral-900' : 'text-neutral-900/70')}>
                      {t(`t${item}`)}
                    </span>
                  </span>
                  <span className={cn('flex size-10 items-center justify-center rounded-xl transition-[transform,background-color,color]', active ? 'rotate-180 bg-[var(--brand-cta)] text-white' : 'bg-[#fafafa] text-neutral-900/40')}>
                    <Ico name="solar:alt-arrow-down-bold-duotone" className="size-5" />
                  </span>
                </button>

                {active && (
                  <motion.div
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                    className="grid min-w-0 grid-cols-[40px_minmax(0,1fr)] gap-3 px-4 pb-6 sm:gap-4 sm:px-5"
                  >
                    <span aria-hidden="true" />
                    <div className="min-w-0 max-w-3xl">
                      <p className="text-pretty text-[15px] leading-relaxed text-[#404040]">
                        {t(`b${item}`)}
                      </p>
                      <p className="mt-3 text-[12px] leading-relaxed text-neutral-900/45">
                        <span className="font-semibold tracking-wide">{t('source')}: </span>
                        {t(`s${item}`)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>

        <p className="mt-8 flex max-w-2xl items-start gap-2 text-pretty text-[13px] leading-relaxed text-[#737373]">
          <Ico name="solar:shield-check-bold-duotone" className="mt-0.5 size-5 shrink-0 text-[#047857]" />
          <span>{t('note')}</span>
        </p>
      </div>
    </SectionContainer>
  );
}
