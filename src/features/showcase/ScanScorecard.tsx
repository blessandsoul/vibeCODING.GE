'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { SectionContainer } from '@/components/layout/SectionContainer';
import { createTimelinePlayer } from '@/features/showcase/scan-demo-models.mjs';
import { createScanDemoLoop } from '@/features/showcase/scan-demo-visibility.mjs';
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

const SEVERITIES: Severity[] = ['critical', 'major', 'minor'];
const SCORECARD_STAGES = ['ready', 'scanning', 'result'] as const;
const SCORECARD_CYCLE_MS = 7_200;
const SAMPLE_URL = 'https://sample-app.example';
const SEVERITY_TONE: Record<Severity, { badge: string; icon: string }> = {
  critical: { badge: 'bg-[#fee2e2] text-[#991b1b]', icon: 'text-[#b91c1c]' },
  major: { badge: 'bg-[#fef3c7] text-[#92400e]', icon: 'text-[#b45309]' },
  minor: { badge: 'bg-neutral-900/[0.06] text-neutral-900/55', icon: 'text-neutral-900/45' },
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
  const sampleResult = useMemo<Result>(() => ({
    score: 42,
    counts: { critical: 1, major: 2, minor: 0 },
    findings: [
      {
        id: 'sample-database-access',
        severity: 'critical',
        title: sampleFindingOne,
        detail: sampleScoreNote,
      },
      {
        id: 'sample-public-key',
        severity: 'major',
        title: sampleFindingTwo,
        detail: sampleScoreNote,
        evidence: 'sk_live_••••••••••••2VwQ',
      },
      {
        id: 'sample-security-header',
        severity: 'major',
        title: sampleFindingThree,
        detail: sampleScoreNote,
      },
    ],
  }), [sampleFindingOne, sampleFindingThree, sampleFindingTwo, sampleScoreNote]);

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

  return (
    <SectionContainer className="py-20 md:py-28">
      <div ref={demoRef} className="overflow-hidden rounded-3xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_24px_54px_-42px_rgba(0,0,0,0.45)]">
        <div className="border-b border-[#ececec] px-5 py-7 sm:px-7 md:px-10 md:py-9">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--brand)_12%,white)] text-[var(--brand-ink)]">
            <Ico name="solar:scanner-bold-duotone" className="size-6" />
          </div>
          <span className="mt-5 block text-[12px] font-semibold tracking-wide text-neutral-900/40">
            {t('eyebrow')}
          </span>
          <h2 className="mt-3 max-w-3xl text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-neutral-900 md:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-[15px] leading-relaxed text-[#525252]">
            {t('subtitle')}
          </p>

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
              className="h-14 min-h-14 min-w-0 flex-none rounded-xl bg-[#fafafa] px-4 font-mono text-[14px] text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.09)] outline-none transition-shadow placeholder:text-neutral-900/30 focus-visible:shadow-[0_0_0_2px_var(--brand)] sm:flex-1"
            />
            <button
              type="submit"
              disabled={busy || !url.trim()}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[var(--brand-cta)] px-7 text-[15px] font-bold text-white transition-[transform,filter] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 md:hover:brightness-110"
            >
              <Ico name="solar:scanner-bold-duotone" className={cn('size-5', busy && 'animate-pulse')} />
              {busy ? t('scanning') : result ? t('again') : t('go')}
            </button>
            <button
              type="button"
              onClick={replay}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-5 text-[13px] font-bold text-neutral-900 shadow-[0_0_0_1px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
            >
              <Ico name="solar:refresh-bold-duotone" className="size-4" />
              {proof('replay')}
            </button>
          </form>

          {error && (
            <p role="alert" className="mt-4 flex items-start gap-2 text-[14px] leading-relaxed text-[#991b1b]">
              <Ico name="solar:shield-warning-bold-duotone" className="mt-0.5 size-5" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={`${result.score}-${result.findings.length}`}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="px-5 py-7 sm:px-7 md:px-10 md:py-9"
            >
              <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)] lg:items-end">
                <div className="rounded-2xl bg-[#fafafa] p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.06)]">
                  <span className="flex items-center gap-2 text-[11px] font-semibold tracking-wide text-neutral-900/40">
                    <Ico name="solar:shield-warning-bold-duotone" className="size-5 text-[var(--brand-ink)]" />
                    {t('score')}
                  </span>
                  <span
                    className="mt-3 block font-display text-6xl font-extrabold tabular-nums leading-none"
                    style={{ color: result.score < 50 ? '#b91c1c' : result.score < 80 ? '#b45309' : '#047857' }}
                  >
                    {result.score}
                  </span>
                </div>

                <div className="grid min-w-0 grid-cols-3 gap-2 sm:gap-3">
                  {SEVERITIES.map((severity) => (
                    <div key={severity} className="min-w-0 rounded-2xl bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08)] sm:p-4">
                      <Ico name="solar:shield-warning-bold-duotone" className={cn('size-5', SEVERITY_TONE[severity].icon)} />
                      <span className="mt-2 block break-words text-[10px] font-bold tracking-wide text-neutral-900/45">
                        {t(severity)}
                      </span>
                      <span className="mt-1 block font-display text-2xl font-extrabold tabular-nums text-neutral-900">
                        {result.counts[severity]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {result.findings.length > 0 ? (
                <ul className="mt-7 flex flex-col gap-3">
                  {result.findings.map((finding, index) => (
                    <motion.li
                      key={finding.id}
                      initial={reduced ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reduced ? 0 : index * 0.05, duration: 0.25 }}
                      className="min-w-0 rounded-2xl bg-white p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className={cn('flex size-10 shrink-0 items-center justify-center rounded-xl', SEVERITY_TONE[finding.severity].badge)}>
                          <Ico name="solar:shield-warning-bold-duotone" className="size-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className={cn('inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide', SEVERITY_TONE[finding.severity].badge)}>
                            {t(finding.severity)}
                          </span>
                          <h3 className="mt-2 text-pretty text-[16px] font-bold leading-snug text-neutral-900">
                            {finding.title}
                          </h3>
                          <p className="mt-2 text-pretty text-[14px] leading-relaxed text-[#525252]">
                            {finding.detail}
                          </p>
                          {finding.evidence && (
                            <div className="mt-4 rounded-xl bg-[#0b0b0e] px-4 py-3 text-white">
                              <span className="flex items-center gap-2 text-[10px] font-semibold tracking-wide text-white/40">
                                <Ico name="solar:key-bold-duotone" className="size-4" />
                                {t('found')}
                              </span>
                              <code className="mt-2 block break-all font-mono text-[13px] text-[#fca5a5]">
                                {finding.evidence}
                              </code>
                              <span className="mt-2 block text-[11px] leading-relaxed text-white/45">
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
                <div className="mt-7 flex items-start gap-3 rounded-2xl bg-[#f0fdf4] p-5 text-[#065f46] shadow-[0_0_0_1px_#a7f3d0]">
                  <Ico name="solar:shield-check-bold-duotone" className="size-6" />
                  <p className="text-pretty text-[14px] leading-relaxed">{t('clean')}</p>
                </div>
              )}

              <div className="mt-7 flex flex-col items-start justify-between gap-5 border-t border-[#ececec] pt-6 sm:flex-row sm:items-center">
                <p className="flex max-w-2xl items-start gap-2 text-pretty text-[12px] leading-relaxed text-[#737373]">
                  <Ico name="solar:lock-keyhole-bold-duotone" className="mt-0.5 size-5 shrink-0" />
                  <span>{t('nostore')}</span>
                </p>
                <a
                  href="#cta"
                  className="inline-flex min-h-[48px] shrink-0 items-center gap-2 rounded-xl bg-neutral-900 px-5 text-[13px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2"
                >
                  <Ico name="solar:document-text-bold-duotone" className="size-5" />
                  {t('cta')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}
