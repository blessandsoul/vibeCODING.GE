'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { BusinessResult, DemoIntro, StableStoryText } from '@/features/showcase/ShowcaseStory';
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
  const planState = isPro ? 'pro' : 'free';

  return (
    <SectionContainer
      className="py-16 md:py-24 lg:py-28"
      data-landing-demo="true"
      data-demo-id="scan-paywall"
      data-demo-detail={isPro ? 'unlocked' : 'locked'}
      aria-live="off"
    >
      <DemoIntro
        icon="solar:lock-keyhole-bold-duotone"
        eyebrow={t('eyebrow')}
        title={t('heading')}
        description={t('subtitle')}
        badge={t('sample')}
      />

      <div ref={demoRef} aria-live="off" className="mt-10 min-w-0">
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_50px_-38px_rgba(0,0,0,0.45)]">
          <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-[#ececec] bg-[#fafafa] px-5 py-4 md:px-7">
            <span className="flex min-w-0 items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-[var(--brand-ink)] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                <Ico name="solar:wallet-money-bold-duotone" className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block break-all text-[13px] font-extrabold text-[#111827]">sample-app.example</span>
                <span className="mt-0.5 block text-[11px] text-[#667085]">{t('account')}</span>
              </span>
            </span>
            <span
              className={cn(
                'inline-flex min-h-9 shrink-0 items-center gap-2 rounded-full px-3 text-[11px] font-bold',
                isPro ? 'bg-[#fee2e2] text-[#991b1b]' : 'bg-neutral-900/[0.06] text-[#4B5563]',
              )}
            >
              <StableStoryText
                activeKey={planState}
                layers={[
                  {
                    key: 'pro',
                    className: 'flex items-center gap-2',
                    content: <><Ico name="solar:shield-warning-bold-duotone" className="size-4" />{t('pro')}</>,
                  },
                  {
                    key: 'free',
                    className: 'flex items-center gap-2',
                    content: <><Ico name="solar:lock-keyhole-bold-duotone" className="size-4" />{t('free')}</>,
                  },
                ]}
              />
            </span>
          </div>

          <div className="grid min-h-[430px] gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="flex min-w-0 flex-col justify-center border-b border-[#ececec] p-5 md:p-8 lg:border-b-0 lg:border-r">
              <div
                className={cn(
                  'relative overflow-hidden rounded-2xl p-5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.07)] transition-[background-color] duration-300 sm:p-6',
                  isPro ? 'bg-[#fef2f2]' : 'bg-[#fafafa]',
                )}
              >
                <div className="flex min-w-0 items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="block text-[17px] font-extrabold text-[#111827]">{t('feature')}</span>
                    <span className="mt-1 block text-[13px] text-[#667085]">{t('featureSub')}</span>
                  </div>
                  <span className={cn(
                    'grid size-11 shrink-0 place-items-center rounded-xl',
                    isPro ? 'bg-[#fee2e2] text-[#991b1b]' : 'bg-white text-[#737373] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]',
                  )}>
                    <StableStoryText
                      activeKey={planState}
                      className="size-5"
                      layers={[
                        { key: 'pro', className: 'grid place-items-center', content: <Ico name="solar:document-text-bold-duotone" className="size-5" /> },
                        { key: 'free', className: 'grid place-items-center', content: <Ico name="solar:lock-keyhole-bold-duotone" className="size-5" /> },
                      ]}
                    />
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[t('benefitOne'), t('benefitTwo'), t('benefitThree')].map((benefit) => (
                    <span
                      key={benefit}
                      className={cn(
                        'flex min-h-[72px] items-center gap-2 rounded-xl bg-white px-3 text-[12px] font-semibold leading-5 shadow-[0_0_0_1px_rgba(0,0,0,0.07)]',
                        isPro ? 'text-[#991b1b]' : 'text-[#667085]',
                      )}
                    >
                      <StableStoryText
                        activeKey={planState}
                        className="size-4 shrink-0"
                        layers={[
                          { key: 'pro', className: 'grid place-items-center', content: <Ico name="solar:shield-warning-bold-duotone" className="size-4" /> },
                          { key: 'free', className: 'grid place-items-center', content: <Ico name="solar:lock-keyhole-bold-duotone" className="size-4" /> },
                        ]}
                      />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <p className={cn(
                'mt-5 min-h-[152px] rounded-2xl px-5 py-4 text-pretty text-[14px] font-semibold leading-6 sm:min-h-[100px]',
                isPro
                  ? 'bg-[#fef2f2] text-[#7f1d1d] shadow-[0_0_0_1px_#fecaca]'
                  : 'bg-white text-[#525252] shadow-[0_0_0_1px_#e5e7eb]',
              )}>
                <StableStoryText
                  activeKey={planState}
                  layers={[
                    {
                      key: 'pro',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:shield-warning-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('allowed')}</span></>,
                    },
                    {
                      key: 'free',
                      className: 'flex items-start gap-3',
                      content: <><Ico name="solar:lock-keyhole-bold-duotone" className="mt-0.5 size-5 shrink-0" /><span>{t('blocked')}</span></>,
                    },
                  ]}
                />
              </p>
            </div>

            <aside className="flex flex-col justify-between bg-[#fafafa] p-5 md:p-7">
              <div>
                <span className="grid size-11 place-items-center rounded-2xl bg-white text-[var(--brand-ink)] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                  <Ico name="solar:server-square-bold-duotone" className="size-5" />
                </span>
                <h3 className="mt-5 text-[18px] font-extrabold leading-6 text-[#111827]">{t('serverTitle')}</h3>
                <p className="mt-3 text-pretty text-[14px] leading-6 text-[#4B5563]">{t('explain')}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <button
                  type="button"
                  onClick={choosePlan}
                  className="inline-flex min-h-[52px] flex-1 flex-wrap items-center justify-center gap-2 rounded-xl bg-[var(--brand-cta)] px-6 py-2 text-center text-[15px] font-bold text-white transition-transform duration-150 active:scale-[0.96] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                >
                  <StableStoryText
                    activeKey={planState}
                    layers={[
                      {
                        key: 'pro',
                        className: 'flex items-center justify-center gap-2',
                        content: <><Ico name="solar:lock-keyhole-bold-duotone" className="size-5" />{t('reset')}</>,
                      },
                      {
                        key: 'free',
                        className: 'flex items-center justify-center gap-2',
                        content: <><Ico name="solar:lock-keyhole-unlocked-bold-duotone" className="size-5" />{t('doIt')}</>,
                      },
                    ]}
                  />
                </button>
                <button
                  type="button"
                  onClick={replay}
                  data-demo-replay="scan-paywall"
                  className="inline-flex min-h-[44px] flex-wrap items-center justify-center gap-2 rounded-xl bg-white px-5 py-2 text-center text-[13px] font-bold text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                >
                  <Ico name="solar:refresh-bold-duotone" className="size-4" />
                  {t('replay')}
                </button>
              </div>
            </aside>
          </div>
        </div>

        <p className="mt-4 flex items-start gap-2 text-pretty text-[12px] leading-5 text-[#667085]">
          <Ico name="solar:info-circle-bold-duotone" className="mt-0.5 size-5 shrink-0" />
          <span>{t('incident')}</span>
        </p>
      </div>

      <BusinessResult label={t('resultLabel')}>{t('result')}</BusinessResult>
    </SectionContainer>
  );
}
