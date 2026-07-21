'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { BusinessResult, DemoIntro } from '@/features/showcase/ShowcaseStory';
import { cn } from '@/lib/utils';

const GROUPS = [
  { id: 1, label: 'groupData', summary: 'groupDataSummary', icon: 'solar:database-bold-duotone', items: [1, 2, 5, 6] },
  { id: 2, label: 'groupMoney', summary: 'groupMoneySummary', icon: 'solar:wallet-money-bold-duotone', items: [3, 4, 8] },
  { id: 3, label: 'groupLaunch', summary: 'groupLaunchSummary', icon: 'solar:rocket-bold-duotone', items: [7, 9, 10] },
] as const;
const SAMPLE_STAGES = [1, 2, 3] as const;
const TEN_CYCLE_MS = 8000;
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanTenWays() {
  const t = useTranslations('product.ten');
  const reduced = Boolean(useReducedMotion());
  const [open, setOpen] = useState<number>(1);
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
      showFinal: () => setOpen(3),
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

  const chooseGroup = useCallback((group: number) => {
    controllerRef.current?.takeControl();
    setOpen(group);
  }, []);

  const replay = useCallback(() => controllerRef.current?.replay(), []);

  return (
    <SectionContainer
      className="py-16 md:py-24 lg:py-28"
      data-landing-demo="true"
      data-demo-id="scan-ten"
      data-demo-detail={`group-${open}`}
      aria-live="off"
    >
      <div ref={demoRef} className="min-w-0" aria-live="off">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <DemoIntro
            icon="solar:shield-warning-bold-duotone"
            eyebrow={t('eyebrow')}
            title={t('heading')}
            description={t('subtitle')}
          />
          <button
            type="button"
            onClick={replay}
            data-demo-replay="scan-ten"
            className="inline-flex min-h-[44px] shrink-0 flex-wrap items-center justify-center gap-2 rounded-xl bg-white px-5 py-2 text-center text-[13px] font-bold text-[#111827] shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
          >
            <Ico name="solar:refresh-bold-duotone" className="size-4" />
            {t('replay')}
          </button>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_50px_-38px_rgba(0,0,0,0.45)]">
          <div className="grid gap-px bg-[#e5e7eb] lg:grid-cols-3" role="group" aria-label={t('categoryLabel')}>
            {GROUPS.map((group) => {
              const active = group.id === open;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => chooseGroup(group.id)}
                  aria-pressed={active}
                  aria-controls={`scan-ten-detail-${group.id}`}
                  className={cn(
                    'min-h-[116px] min-w-0 bg-white px-5 py-4 text-left transition-[transform,background-color] duration-150 active:scale-[0.98] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--brand)]',
                    active && 'bg-[color-mix(in_srgb,var(--brand)_8%,white)]',
                  )}
                >
                  <span className="flex items-start gap-3">
                    <span className={cn(
                      'grid size-10 shrink-0 place-items-center rounded-xl',
                      active ? 'bg-[var(--brand-cta)] text-white' : 'bg-[#fafafa] text-[#667085] shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                    )}>
                      <Ico name={group.icon} className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-pretty text-[15px] font-extrabold leading-5 text-[#111827]">{t(group.label)}</span>
                      <span className="mt-1.5 block text-pretty text-[12px] leading-5 text-[#4B5563]">{t(group.summary)}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div data-ten-detail-shell="true" className="border-t border-[#ececec]">
            <div
              data-ten-detail-slot="true"
              className="grid h-[760px] min-h-[320px] min-w-0 overflow-hidden bg-[#fafafa] sm:h-[520px] sm:min-h-[160px] lg:h-[430px]"
            >
              {GROUPS.map((group) => {
                const active = group.id === open;
                return (
                  <div
                    key={group.id}
                    id={`scan-ten-detail-${group.id}`}
                    data-ten-detail-panel={group.id}
                    role="region"
                    aria-label={`${t('detailLabel')}: ${t(group.label)}`}
                    aria-hidden={!active}
                    inert={!active}
                    tabIndex={active ? 0 : -1}
                    className={cn(
                      'col-start-1 row-start-1 h-full min-h-0 min-w-0 overflow-y-auto px-5 py-6 transition-opacity duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--brand)] motion-reduce:transition-none md:px-7 md:py-7',
                      active ? 'opacity-100' : 'pointer-events-none opacity-0',
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] font-bold tracking-wide text-[#667085]">{t('selectedGroup')}</span>
                        <h3 className="mt-2 text-[20px] font-extrabold leading-6 text-[#111827]">{t(group.label)}</h3>
                      </div>
                      <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#4B5563] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                        {t('checksCount', { count: group.items.length })}
                      </span>
                    </div>

                    <ul className="mt-5 grid gap-3 lg:grid-cols-2" role="list">
                      {group.items.map((item) => (
                        <li key={item} className="min-w-0 rounded-2xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                          <div className="flex items-start gap-3">
                            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[color-mix(in_srgb,var(--brand)_10%,white)] font-mono text-[11px] font-extrabold text-[var(--brand-ink)]">
                              {String(item).padStart(2, '0')}
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-pretty text-[14px] font-extrabold leading-5 text-[#111827]">{t(`t${item}`)}</h4>
                              <p className="mt-2 text-pretty text-[12px] leading-5 text-[#4B5563]">{t(`b${item}`)}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <p className="mt-4 flex max-w-3xl items-start gap-2 text-pretty text-[12px] leading-5 text-[#667085]">
          <Ico name="solar:shield-check-bold-duotone" className="mt-0.5 size-5 shrink-0 text-[#047857]" />
          <span>{t('note')}</span>
        </p>
      </div>

      <BusinessResult label={t('resultLabel')}>{t('result')}</BusinessResult>
    </SectionContainer>
  );
}
