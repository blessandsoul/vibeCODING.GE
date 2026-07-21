'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
import { BusinessResult, DemoIntro, StableStoryText } from '@/features/showcase/ShowcaseStory';
import { cn } from '@/lib/utils';

type Severity = 'critical' | 'major' | 'minor';
type Finding = {
  id: string;
  severity: Severity;
  title: string;
  detail: string;
  evidence?: string;
};
type Result = {
  score: number;
  findings: Finding[];
  counts: Record<Severity, number>;
};

const SCORECARD_STAGES = ['ready', 'scanning', 'result'] as const;
const SCORECARD_CYCLE_MS = 7_200;
const SAMPLE_URL = 'https://sample-app.example';
const SEVERITY_TONE: Record<Severity, { badge: string; icon: string }> = {
  critical: { badge: 'bg-[#fee2e2] text-[#991b1b]', icon: 'text-[#b91c1c]' },
  major: { badge: 'bg-[#fef3c7] text-[#92400e]', icon: 'text-[#b45309]' },
  minor: { badge: 'bg-neutral-900/[0.06] text-[#4B5563]', icon: 'text-[#737373]' },
};
type ScorecardStage = (typeof SCORECARD_STAGES)[number];
type DemoController = ReturnType<typeof createScanDemoLoop>;

export function ScanScorecard() {
  const t = useTranslations('product.scan');
  const proof = useTranslations('product.proof');
  const reduced = Boolean(useReducedMotion());
  const [url, setUrl] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<DemoController | null>(null);
  const requestGenerationRef = useRef(0);
  const sampleScoreNote = proof('scoreNote');
  const sampleFindingOne = proof('f1');
  const sampleFindingTwo = proof('f2');
  const sampleFindingThree = proof('f3');
  const sampleFindingOneDetail = proof('f1Detail');
  const sampleFindingTwoDetail = proof('f2Detail');
  const sampleFindingThreeDetail = proof('f3Detail');
  const sampleResult = useMemo<Result>(() => ({
    score: 42,
    counts: { critical: 1, major: 2, minor: 0 },
    findings: [
      {
        id: 'sample-database-access',
        severity: 'critical',
        title: sampleFindingOne,
        detail: sampleFindingOneDetail,
      },
      {
        id: 'sample-public-key',
        severity: 'major',
        title: sampleFindingTwo,
        detail: sampleFindingTwoDetail,
        evidence: 'sk_live_••••••••••••2VwQ',
      },
      {
        id: 'sample-security-header',
        severity: 'major',
        title: sampleFindingThree,
        detail: sampleFindingThreeDetail,
      },
    ],
  }), [
    sampleFindingOne,
    sampleFindingOneDetail,
    sampleFindingThree,
    sampleFindingThreeDetail,
    sampleFindingTwo,
    sampleFindingTwoDetail,
  ]);

  const showDemoStage = useCallback((stage: ScorecardStage) => {
    setUrl(SAMPLE_URL);
    setBusy(stage === 'scanning');
    setError(null);
    setResult(stage === 'result' ? sampleResult : null);
  }, [sampleResult]);

  const scan = useCallback(async () => {
    controllerRef.current?.takeControl();
    if (!url.trim()) return;

    const requestGeneration = requestGenerationRef.current + 1;
    requestGenerationRef.current = requestGeneration;
    setBusy(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await response.json();
      if (requestGenerationRef.current !== requestGeneration) return;
      if (!response.ok) {
        const messages: Record<string, string> = {
          url: t('errorUrl'),
          private: t('errorPrivate'),
          fetch: t('errorFetch'),
          rate: t('errorRate'),
        };
        setError(messages[data?.error] ?? t('errorFetch'));
        return;
      }
      setResult(data as Result);
    } catch {
      if (requestGenerationRef.current === requestGeneration) setError(t('errorFetch'));
    } finally {
      if (requestGenerationRef.current === requestGeneration) setBusy(false);
    }
  }, [t, url]);

  useEffect(() => {
    const player = createTimelinePlayer({
      stages: SCORECARD_STAGES,
      durationMs: SCORECARD_CYCLE_MS,
      onStage: showDemoStage,
    });
    const controller = createScanDemoLoop({
      target: demoRef.current,
      reducedMotion: reduced,
      cycleMs: SCORECARD_CYCLE_MS,
      play: player.play,
      showFinal: () => showDemoStage('result'),
      reset: () => showDemoStage('ready'),
      stop: player.stop,
    });
    controllerRef.current = controller;

    return () => {
      requestGenerationRef.current += 1;
      controller.cleanup();
      player.stop();
      if (controllerRef.current === controller) controllerRef.current = null;
    };
  }, [reduced, showDemoStage]);

  const changeUrl = useCallback((nextUrl: string) => {
    controllerRef.current?.takeControl();
    requestGenerationRef.current += 1;
    setBusy(false);
    setError(null);
    setResult(null);
    setUrl(nextUrl);
  }, []);

  const replay = useCallback(() => {
    requestGenerationRef.current += 1;
    controllerRef.current?.replay();
  }, []);
  const displayResult = result ?? sampleResult;
  const scanState = busy ? 'scanning' : result ? 'result' : 'ready';

  return (
    <SectionContainer className="py-16 md:py-24 lg:py-28" data-landing-demo="true" data-demo-id="scan-scorecard" data-demo-detail={scanState === 'result' ? 'final' : scanState} aria-live="off">
      <div ref={demoRef} aria-live="off">
        <DemoIntro
          icon="solar:scanner-bold-duotone"
          eyebrow={t('eyebrow')}
          title={t('heading')}
          description={t('subtitle')}
          badge={proof('sample')}
        />

        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_54px_-42px_rgba(0,0,0,0.45)]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ececec] bg-[#fafafa] px-5 py-4 sm:px-7">
            <span className="flex min-w-0 items-center gap-3 text-[13px] font-bold text-[#111827]">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-[var(--brand-ink)] shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                <Ico name="solar:shield-check-bold-duotone" className="size-5" />
              </span>
              <span className="min-w-0 break-all">{url || SAMPLE_URL}</span>
            </span>
            <span className={cn(
              'rounded-full px-3 py-1 text-[11px] font-bold',
              busy ? 'bg-[#fff7ed] text-[#9a3412]' : result ? 'bg-[#dcfce7] text-[#166534]' : 'bg-neutral-900/[0.06] text-[#4B5563]',
            )}>
              <StableStoryText
                activeKey={scanState}
                layers={[
                  { key: 'scanning', content: t('scanning') },
                  { key: 'result', content: t('resultReady') },
                  { key: 'ready', content: proof('sample') },
                ]}
              />
            </span>
          </div>

          <div className="px-5 py-6 sm:px-7 md:px-9 md:py-8">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              void scan();
            }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="scan-url" className="sr-only">
              {t('urlLabel')}
            </label>
            <input
              id="scan-url"
              value={url}
              onChange={(event) => changeUrl(event.target.value)}
              placeholder={t('placeholder')}
              inputMode="url"
              autoComplete="url"
              className="h-14 min-h-14 min-w-0 flex-none rounded-xl bg-[#fafafa] px-4 font-mono text-[14px] text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.09)] outline-none transition-shadow placeholder:text-[#737373] focus-visible:shadow-[0_0_0_2px_var(--brand)] sm:flex-1"
            />
            <button
              type="submit"
              disabled={busy || !url.trim()}
              className="inline-flex min-h-[72px] flex-wrap items-center justify-center gap-2 whitespace-normal rounded-xl bg-[var(--brand-cta)] px-5 py-3 text-center text-[15px] font-bold leading-snug text-white transition-[transform,filter] active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 sm:min-h-14 sm:px-7 md:hover:brightness-110"
            >
              <span className="grid w-full">
                {([
                  { key: 'go', label: t('go'), active: !busy && !result },
                  { key: 'scanning', label: t('scanning'), active: busy },
                  { key: 'again', label: t('again'), active: !busy && Boolean(result) },
                ] as const).map((item) => (
                  <span
                    key={item.key}
                    aria-hidden={!item.active}
                    className={cn(
                      'col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-2',
                      !item.active && 'invisible',
                    )}
                  >
                    <Ico
                      name="solar:scanner-bold-duotone"
                      className={cn('size-5', item.key === 'scanning' && busy && 'animate-pulse motion-reduce:animate-none')}
                    />
                    <span>{item.label}</span>
                  </span>
                ))}
              </span>
            </button>
            <button
              type="button"
              onClick={replay}
              data-demo-replay="scan-scorecard"
              className="inline-flex min-h-[72px] flex-wrap items-center justify-center gap-2 whitespace-normal rounded-xl bg-white px-5 py-3 text-center text-[13px] font-bold leading-snug text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.12)] transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 sm:min-h-14"
            >
              <Ico name="solar:refresh-bold-duotone" className="size-4" />
              {proof('replay')}
            </button>
          </form>

            <div className="mt-4 min-h-10">
              {error ? (
                <p role="alert" className="flex items-start gap-2 text-[14px] leading-relaxed text-[#991b1b]">
                  <Ico name="solar:shield-warning-bold-duotone" className="mt-0.5 size-5" />
                  <span>{error}</span>
                </p>
              ) : null}
            </div>

            <motion.div
              data-scorecard-result-slot="true"
              initial={false}
              animate={{ y: 0 }}
              className="relative mt-2 min-h-[520px] overflow-hidden rounded-2xl bg-[#fafafa] p-4 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] sm:min-h-[430px] sm:p-5"
            >
              <div
                aria-hidden={Boolean(result)}
                className={cn(
                  'absolute inset-0 z-10 grid place-items-center bg-white/88 p-6 text-center backdrop-blur-[3px] transition-opacity duration-200 ease-out motion-reduce:transition-none',
                  result ? 'pointer-events-none opacity-0' : 'opacity-100',
                )}
              >
                <div className="max-w-sm">
                  <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-[color-mix(in_srgb,var(--brand)_12%,white)] text-[var(--brand-ink)]">
                    <StableStoryText
                      activeKey={busy ? 'scanning' : 'ready'}
                      className="size-6"
                      layers={[
                        { key: 'scanning', className: 'grid place-items-center', content: <Ico name="solar:scanner-bold-duotone" className="size-6 animate-pulse motion-reduce:animate-none" /> },
                        { key: 'ready', className: 'grid place-items-center', content: <Ico name="solar:shield-check-bold-duotone" className="size-6" /> },
                      ]}
                    />
                  </span>
                  <StableStoryText
                    activeKey={busy ? 'scanning' : 'ready'}
                    className="mt-4 text-[15px] font-extrabold text-[#111827]"
                    layers={[
                      { key: 'scanning', content: t('scanning') },
                      { key: 'ready', content: t('samplePrompt') },
                    ]}
                  />
                  <p className="mt-2 text-[13px] leading-5 text-[#667085]">{sampleScoreNote}</p>
                </div>
              </div>

              <div className="grid min-w-0 gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
                  <span className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-[#667085]">
                    <Ico name="solar:shield-warning-bold-duotone" className="size-5 text-[var(--brand-ink)]" />
                    {t('score')}
                  </span>
                  <span
                    className="mt-4 block font-display text-6xl font-extrabold tabular-nums leading-none"
                    style={{ color: displayResult.score < 50 ? '#b91c1c' : displayResult.score < 80 ? '#b45309' : '#047857' }}
                  >
                    {displayResult.score}
                  </span>
                  <p className="mt-4 text-pretty text-[13px] leading-5 text-[#4B5563]">{t('scoreMeaning')}</p>
                </div>

                {displayResult.findings.length > 0 ? (
                  <ul
                    className="flex max-h-[390px] min-w-0 flex-col gap-3 overflow-y-auto pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                    role="list"
                    aria-label={t('findingsLabel')}
                    tabIndex={0}
                  >
                  {displayResult.findings.map((finding, index) => (
                    <motion.li
                      key={finding.id}
                      initial={reduced ? false : { y: 8 }}
                      animate={{ y: 0 }}
                      transition={{ delay: reduced ? 0 : index * 0.05, duration: 0.25 }}
                      className="min-w-0 rounded-2xl bg-white p-4 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-xl', SEVERITY_TONE[finding.severity].badge)}>
                          <Ico name="solar:shield-warning-bold-duotone" className="size-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className={cn('inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide', SEVERITY_TONE[finding.severity].badge)}>
                            {t(finding.severity)}
                          </span>
                          <h3 className="mt-2 text-pretty text-[15px] font-bold leading-snug text-neutral-900">
                            {finding.title}
                          </h3>
                          <p className="mt-2 text-pretty text-[13px] leading-5 text-[#525252]">
                            {finding.detail}
                          </p>
                          {finding.evidence && (
                            <div className="mt-4 rounded-xl bg-[#0b0b0e] px-4 py-3 text-white">
                              <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wide text-[#D1D5DB]">
                                <Ico name="solar:key-bold-duotone" className="size-4" />
                                {t('found')}
                              </span>
                              <code className="mt-2 block break-all font-mono text-[13px] text-[#fca5a5]">
                                {finding.evidence}
                              </code>
                              <span className="mt-2 block text-[11px] leading-relaxed text-[#D1D5DB]">
                                {t('redacted')}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                  </ul>
              ) : (
                <div className="flex items-start gap-3 rounded-2xl bg-[#f0fdf4] p-5 text-[#065f46] shadow-[0_0_0_1px_#a7f3d0]">
                  <Ico name="solar:shield-check-bold-duotone" className="size-6" />
                  <p className="text-pretty text-[14px] leading-relaxed">{t('clean')}</p>
                </div>
              )}
              </div>
            </motion.div>

            <p className="mt-5 flex max-w-3xl items-start gap-2 text-pretty text-[12px] leading-5 text-[#667085]">
              <Ico name="solar:lock-keyhole-bold-duotone" className="mt-0.5 size-5 shrink-0" />
              <span>{t('nostore')}</span>
            </p>
          </div>
        </div>

        <BusinessResult label={t('resultLabel')}>{t('result')}</BusinessResult>
      </div>
    </SectionContainer>
  );
}
