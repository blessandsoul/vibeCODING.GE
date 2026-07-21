'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Ico } from '@/components/common/Ico';
import { createDemoLoop } from './lib/demo-loop.mjs';

import './hero-workflow-story.css';

export type HeroWorkflowMode = 'orchestrated' | 'autonomous';

export type HeroWorkflowCopy = {
  badge: string;
  inputLabel: string;
  input: string;
  bridgeLabel?: string;
  bridge?: string;
  productLabel: string;
  productAction: string;
  detailOne: string;
  detailTwo: string;
  resultLabel: string;
  result: string;
  businessLabel: string;
  businessValue: string;
  replay: string;
};

export type HeroWorkflowStoryProps = {
  demoId: string;
  mode: HeroWorkflowMode;
  productName: string;
  productIcon: string;
  copy: HeroWorkflowCopy;
};

const ORCHESTRATED_TIMES = [850, 2_150, 3_800] as const;
const AUTONOMOUS_TIMES = [900, 2_650] as const;
const CYCLE_MS = 6_400;

export function HeroWorkflowStory({
  demoId,
  mode,
  productName,
  productIcon,
  copy,
}: HeroWorkflowStoryProps): React.ReactElement {
  const rootRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const controllerRef = useRef<ReturnType<typeof createDemoLoop> | null>(null);
  const [phase, setPhase] = useState(0);
  const finalPhase = mode === 'orchestrated' ? 3 : 2;

  const stop = useCallback((): void => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const reset = useCallback((): void => {
    stop();
    setPhase(0);
  }, [stop]);

  const play = useCallback((): void => {
    reset();
    const times = mode === 'orchestrated' ? ORCHESTRATED_TIMES : AUTONOMOUS_TIMES;
    timersRef.current = times.map((delay, index) =>
      setTimeout(() => setPhase(index + 1), delay),
    );
  }, [mode, reset]);

  const showFinal = useCallback((): void => {
    stop();
    setPhase(finalPhase);
  }, [finalPhase, stop]);

  useEffect(() => {
    const target = rootRef.current;
    if (!target) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const controller = createDemoLoop({
      target,
      reducedMotion,
      threshold: 0.35,
      cycleMs: CYCLE_MS,
      holdMs: 2_000,
      play,
      showFinal,
      reset,
      stop,
    });
    controllerRef.current = controller;

    return () => {
      controller.cleanup();
      controllerRef.current = null;
      stop();
    };
  }, [play, reset, showFinal, stop]);

  const productPhase = mode === 'orchestrated' ? 2 : 1;
  const resultPhase = finalPhase;

  return (
    <div
      ref={rootRef}
      className="hero-workflow"
      data-hero-demo="true"
      data-landing-demo="true"
      data-demo-id={demoId}
      data-demo-detail={`phase-${phase}`}
      data-workflow-mode={mode}
      aria-live="off"
    >
      <div className="hero-workflow__topline">
        <span className="hero-workflow__badge">
          <span className="hero-workflow__badge-dot" aria-hidden="true" />
          {copy.badge}
        </span>
        <ProductWordmark name={productName} />
      </div>

      <div className="hero-workflow__timeline">
        <StoryRow
          active={phase === 0}
          complete={phase > 0}
          icon="solar:user-circle-bold-duotone"
          label={<BrandText text={copy.inputLabel} productName={productName} />}
          tone="neutral"
        >
          <p className="hero-workflow__request">
            <BrandText text={copy.input} productName={productName} />
          </p>
        </StoryRow>

        {mode === 'orchestrated' && copy.bridgeLabel && copy.bridge ? (
          <StoryRow
            active={phase === 1}
            complete={phase > 1}
            icon="solar:cpu-bold-duotone"
            label={<BrandText text={copy.bridgeLabel} productName={productName} />}
            tone="iai"
          >
            <div className="hero-workflow__route" aria-hidden="true">
              <IaiWordmark />
              <span className="hero-workflow__route-line" />
              <Ico name="solar:arrow-right-bold-duotone" className="size-4" />
              <ProductWordmark name={productName} compact />
            </div>
            <p><BrandText text={copy.bridge} productName={productName} /></p>
          </StoryRow>
        ) : null}

        <StoryRow
          active={phase === productPhase}
          complete={phase > productPhase}
          icon={productIcon}
          label={<BrandText text={copy.productLabel} productName={productName} />}
          tone="product"
        >
          <p><BrandText text={copy.productAction} productName={productName} /></p>
          <div className="hero-workflow__details">
            <StatusLine active={phase >= productPhase} text={copy.detailOne} productName={productName} />
            <StatusLine active={phase >= productPhase} text={copy.detailTwo} productName={productName} />
          </div>
        </StoryRow>

        <StoryRow
          active={phase === resultPhase}
          complete={phase >= resultPhase}
          icon="solar:check-circle-bold-duotone"
          label={<BrandText text={copy.resultLabel} productName={productName} />}
          tone="result"
        >
          <p className="hero-workflow__result">
            <BrandText text={copy.result} productName={productName} />
          </p>
        </StoryRow>
      </div>

      <div className="hero-workflow__footer">
        <div className="hero-workflow__business-value">
          <span>{copy.businessLabel}</span>
          <p><BrandText text={copy.businessValue} productName={productName} /></p>
        </div>
        <button
          type="button"
          className="hero-workflow__replay"
          onClick={() => controllerRef.current?.replay()}
          data-demo-replay="true"
          aria-label={copy.replay}
        >
          <Ico name="solar:refresh-bold-duotone" className="size-4" />
          <span>{copy.replay}</span>
        </button>
      </div>
    </div>
  );
}

function StoryRow({
  active,
  complete,
  icon,
  label,
  tone,
  children,
}: {
  active: boolean;
  complete: boolean;
  icon: string;
  label: React.ReactNode;
  tone: 'neutral' | 'iai' | 'product' | 'result';
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <section
      className="hero-workflow__row"
      data-active={active ? 'true' : 'false'}
      data-complete={complete ? 'true' : 'false'}
      data-tone={tone}
    >
      <span className="hero-workflow__rail" aria-hidden="true" />
      <span className="hero-workflow__icon" aria-hidden="true">
        <Ico name={complete ? 'solar:check-circle-bold-duotone' : icon} className="size-5" />
      </span>
      <div className="hero-workflow__row-copy">
        <span className="hero-workflow__label">{label}</span>
        <div className="hero-workflow__body">{children}</div>
      </div>
    </section>
  );
}

function StatusLine({
  active,
  text,
  productName,
}: {
  active: boolean;
  text: string;
  productName: string;
}): React.ReactElement {
  return (
    <span className="hero-workflow__status" data-ready={active ? 'true' : 'false'}>
      <Ico name="solar:check-circle-bold-duotone" className="size-3.5" />
      <span><BrandText text={text} productName={productName} /></span>
    </span>
  );
}

function ProductWordmark({ name, compact = false }: { name: string; compact?: boolean }): React.ReactElement {
  if (name.toLowerCase().startsWith('ai')) {
    return (
      <span className="hero-workflow__wordmark" data-compact={compact ? 'true' : 'false'}>
        <span className="hero-workflow__ai">ai</span>
        <span className="hero-workflow__product-name">{name.slice(2)}</span>
      </span>
    );
  }

  return (
    <span className="hero-workflow__wordmark" data-compact={compact ? 'true' : 'false'}>
      <span className="hero-workflow__product-name">{name}</span>
    </span>
  );
}

function IaiWordmark(): React.ReactElement {
  return (
    <span className="hero-workflow__iai-wordmark" aria-label="iAI">
      <span>i</span><span>AI</span>
    </span>
  );
}

function BrandText({ text, productName }: { text: string; productName: string }): React.ReactElement {
  const parts = text.split(/(iAI|ai[A-Z][A-Z0-9]+)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part === 'iAI') {
          return (
            <span key={`${part}-${index}`} className="hero-workflow__inline-mark">
              <IaiWordmark />
            </span>
          );
        }
        if (/^ai[A-Z][A-Z0-9]+$/.test(part)) {
          const name = part.toLowerCase() === productName.toLowerCase() ? productName : part;
          return (
            <span key={`${part}-${index}`} className="hero-workflow__inline-mark">
              <span className="hero-workflow__ai">ai</span>
              <span className="hero-workflow__product-name">{name.slice(2)}</span>
            </span>
          );
        }
        return <span key={`${index}-${part}`}>{part}</span>;
      })}
    </>
  );
}
