'use client';

import { memo, useEffect, useRef, useState, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import { MagneticButton } from '@/components/common/MagneticButton';
import { Ico } from '@/components/common/Ico';
import { SITE } from '@/config/site';
// PER-SITE. The one thing in this shared component that every landing must supply for itself:
// the product, in a single frame, above the fold. See src/features/showcase/HeroProof.tsx.
import { HeroProof } from '@/features/showcase/HeroProof';
import './landing-hero.css';

/* Hero, ported 1:1 from ainow_handoff/index.html (#hero section).
   Copy is i18n-ized via the home.hero namespace. The typewriter word list and
   its prefill are a single comma-joined string per locale. */

/* Hero-lead text style (stable reference so the memoized SplitText below never
   re-renders and the imperative split is never clobbered). */
const HERO_LEAD_STYLE: CSSProperties = {
  fontFamily: "var(--font-noto-georgian), 'Noto Sans Georgian', sans-serif",
  fontWeight: 300,
  fontStyle: 'normal',
  color: '#0a0a0a',
  background: 'none',
  WebkitTextFillColor: '#0a0a0a',
  display: 'block',
  letterSpacing: '-0.01em',
};

/* Letter-by-letter rise reveal, ports the handoff's split() verbatim
   (ainow_handoff/index.html, script #1). SSR renders the plain text; on mount
   we split it into .split-char spans via createElement, exactly like the
   handoff's DOMContentLoaded JS, so the CSS `split-rise` fires in-view. */
const SplitText = memo(function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || root.querySelector('.split-char')) return; // already split

    const split = (node: ChildNode) => {
      if (node.nodeType === 3) {
        const value = node.nodeValue ?? '';
        const frag = document.createDocumentFragment();
        const tokens = value.split(/(\s+)/);
        for (const tok of tokens) {
          if (!tok) continue;
          if (/^\s+$/.test(tok)) {
            frag.appendChild(document.createTextNode(' '));
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'split-word';
            for (const ch of tok) {
              const s = document.createElement('span');
              s.className = 'split-char';
              s.textContent = ch;
              wordSpan.appendChild(s);
            }
            frag.appendChild(wordSpan);
          }
        }
        node.parentNode?.replaceChild(frag, node);
      } else if (node.nodeType === 1 && (node as Element).tagName !== 'BR') {
        Array.from(node.childNodes).forEach(split);
      }
    };

    Array.from(root.childNodes).forEach(split);
    root.querySelectorAll<HTMLElement>('.split-char').forEach((c, i) => {
      c.style.animationDelay = i * 22 + 'ms';
    });
  }, [text]);

  return (
    <span ref={ref} className={className} style={HERO_LEAD_STYLE}>
      {text}
    </span>
  );
});

function useReducedMotionPreference(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!query) return undefined;
    const sync = (): void => setReduced(query.matches);
    sync();
    query.addEventListener?.('change', sync);
    return () => query.removeEventListener?.('change', sync);
  }, []);

  return reduced;
}

export function LandingHero() {
  const t = useTranslations('product.hero');
  const prefersReducedMotion = useReducedMotionPreference();
  const typewriterPrefill = t('typewriterPrefill');
  const typewriterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = typewriterRef.current;
    if (!element) return undefined;
    const root: HTMLSpanElement = element;

    const words = (root.dataset.words || '')
      .split(/[,、،]/)
      .map((word) => word.trim())
      .filter(Boolean);
    const textElement = root.querySelector<HTMLElement>('.tw-text');
    if (!words.length || !textElement) return undefined;
    const text: HTMLElement = textElement;

    if (prefersReducedMotion) {
      text.textContent = words[0];
      root.dataset.demoState = 'final';
      return undefined;
    }

    const prefill = root.dataset.prefill;
    let wordIndex = prefill && words.includes(prefill) ? words.indexOf(prefill) : 0;
    text.textContent = words[wordIndex];
    let charIndex = words[wordIndex].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let inView = true;
    let cancelled = false;

    const clearTimer = (): void => {
      if (timer) clearTimeout(timer);
      timer = undefined;
    };

    const canRun = (): boolean => inView && document.visibilityState === 'visible' && !cancelled;

    const schedule = (delay: number): void => {
      clearTimer();
      if (!canRun()) return;
      timer = setTimeout(tick, delay);
    };

    function tick(): void {
      timer = undefined;
      if (!canRun()) return;

      const word = words[wordIndex];
      root.dataset.demoState = 'playing';
      if (deleting) {
        charIndex -= 1;
        text.textContent = word.slice(0, Math.max(0, charIndex));
        if (charIndex <= 0) {
          wordIndex = (wordIndex + 1) % words.length;
          charIndex = 0;
          deleting = false;
          schedule(180);
          return;
        }
        schedule(34);
        return;
      }

      const nextWord = words[wordIndex];
      charIndex += 1;
      text.textContent = nextWord.slice(0, charIndex);
      if (charIndex >= nextWord.length) {
        deleting = true;
        root.dataset.demoState = 'final';
        schedule(1600);
        return;
      }
      schedule(64);
    }

    const syncPlayback = (): void => {
      if (!canRun()) {
        clearTimer();
        root.dataset.demoState = 'paused';
        return;
      }
      if (!timer) schedule(320);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry?.isIntersecting ?? true;
        syncPlayback();
      },
      { threshold: 0.15 },
    );
    observer.observe(root);
    document.addEventListener('visibilitychange', syncPlayback);
    root.dataset.demoState = 'final';
    schedule(1600);

    return () => {
      cancelled = true;
      clearTimer();
      observer.disconnect();
      document.removeEventListener('visibilitychange', syncPlayback);
    };
  }, [prefersReducedMotion, typewriterPrefill]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      {/* THE HERO, REBUILT after the five-second audit failed all six pages.
          What was wrong, and it was the same thing every time:
            - the LARGEST element on the page was the logo, and the demo that explains the
              service sat three screens below the fold, so a stranger spent his five seconds
              looking at a wordmark;
            - not one page said WHO it was for above the fold;
            - the headline named the mechanism and never the pain;
            - two calls to action, and a second CTA is what a page offers when it does not
              trust the first;
            - everything centred, on all six, which is on the short list of things that make
              a page read as machine-made.
          So: a two column hero. Left is the argument (audience, pain, one button, the
          promise). Right is the PRODUCT, in one frame, rendered by a per-site HeroProof.
          The wordmark stays, because it is the family mark, but it is a lockup now and not
          a billboard. */}
      {/* Three blocks, not two columns, because the phone needs a different ORDER than the desktop
          and not just a narrower one. On the desktop: the argument on the left, the product on the
          right. On the phone: the words that say what this is (A), THEN the product (B), THEN the
          explanation and the button and the promise (C). The first cut of this shipped the panel
          above everything with `order-first`, so a phone opened on a black call widget with no
          brand and no headline anywhere on screen: the product before the reader knew whose it was.
          At lg the explicit col/row starts fold A and C back into one column and let B span both. */}
      <div data-family-shell="true" className="hero-family-shell relative z-10 mx-auto min-w-0">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-16 lg:gap-y-6">
          {/* A. audience and the pain. Product identity stays in the navigation;
              the value proposition now owns the first hero line. */}
          <div className="order-1 min-w-0 text-center lg:order-0 lg:col-start-1 lg:row-start-1 lg:self-start lg:text-left">
            <div className="hero-product-wordmark wordmark-3d" aria-label={`${SITE.wordmark.prefix}${SITE.wordmark.mark}`}>
              <span className="wm-prefix">{SITE.wordmark.prefix}</span>
              <span className="wm-mark">{SITE.wordmark.mark}</span>
              <span className="wm-accent" aria-hidden="true" />
            </div>
            {/* WHO IT IS FOR. The audit's second finding: not one of the six named its buyer
                above the fold, and a reader who cannot see himself in the first screen leaves,
                and he is right to. Plain nouns, not a segment. */}
            <p data-hero-primary="true" className="hero-audience text-[13px] font-semibold tracking-[0.04em] text-[#4B5563] md:text-[13.5px]">
              {t('audience')}
            </p>

            {/* THE PAIN, not the mechanism. */}
            <h1
              data-split-text="1"
              className="mt-3 text-balance leading-[1.12] tracking-tight text-[clamp(1.85rem,3.6vw,3.1rem)] text-neutral-900"
            >
              <span className="hero-role-line">
                <span>{t('owner')}</span>
                <span className="hero-role-ai" aria-label="AI">ai</span>
                <span>{t('role')}</span>
              </span>
              <SplitText className="hero-lead" text={t('lead')} />
              {' '}
              <span
                ref={typewriterRef}
                className="typewriter"
                data-words={t('typewriterWords')}
                data-prefill={typewriterPrefill}
                data-demo-state="idle"
                aria-live="off"
                style={{
                  fontFamily:
                    "'DachiLynx', var(--font-noto-georgian), 'Noto Sans Georgian', sans-serif",
                  color: 'var(--brand-display, var(--brand-ink, var(--brand)))',
                  WebkitTextFillColor: 'var(--brand-display, var(--brand-ink, var(--brand)))',
                }}
              >
                <span className="tw-text">{typewriterPrefill}</span>
                <span className="tw-caret" aria-hidden="true">|</span>
              </span>
            </h1>
          </div>

          {/* B. THE PRODUCT, in one frame.
              This is the fix the audit put first. Every one of the six pages used to open with a
              giant wordmark and hide the demo three screens down, so a stranger spent his five
              seconds looking at a logo and left knowing nothing. HeroProof is per-site and it is
              the one thing on this screen that answers "what is it" without a single word being
              read: aiCALL shows a call confirming a row, aiDOCS shows a receipt collapsing into a
              ledger line, vibecoding shows a redacted key it just found. */}
          <div className="relative order-2 min-w-0 lg:order-0 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <HeroProof />
          </div>

          {/* C. how it works, the one button, the promise, the family */}
          <div className="order-3 min-w-0 text-center lg:order-0 lg:col-start-1 lg:row-start-2 lg:text-left">
            <p className="mx-auto max-w-xl text-pretty text-[16px] leading-relaxed text-[#525252] lg:mx-0 md:text-[17px]">
              {t('sub')}
            </p>

        <div className="hero-extras">
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4">
            <MagneticButton className="w-full sm:w-auto">
              <a href="#cta" className="btn-primary w-full justify-center sm:w-auto" data-primary-cta="true">
                <span>{t('ctaResults')}</span>
                <Ico name="solar:arrow-right-bold-duotone" className="h-[18px] w-[18px]" />
              </a>
            </MagneticButton>
            {/* The second call to action is gone. A ghost "book a call" next to the primary
                button is what a page offers when it does not trust the first one: it splits the
                click and it tells the reader you would rather talk than show. The phone number
                lives in the footer, where somebody who wants it will go and look. */}
          </div>

          {/* THE COMMITMENT. aiNOW owns the process check, setup, and result shown here. */}
          <div className="hero-commitment mx-auto mt-8 max-w-xl text-center lg:mx-0 lg:text-left">
            <p className="text-pretty text-[14px] leading-relaxed text-[#4B5563] md:text-[15px]">
              <span
                className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full align-middle"
                style={{ background: 'var(--brand)' }}
                aria-hidden="true"
              />
              {t('commitment')}
            </p>
            <p className="mt-3 flex items-center justify-center gap-2.5 text-[13px] text-[#667085] lg:justify-start">
              <span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full text-white"
                style={{ background: 'var(--brand)' }}
                aria-hidden="true"
              >
                <Ico name="solar:shield-check-bold-duotone" className="h-4 w-4" />
              </span>
              {t('signedBy')}
            </p>
          </div>

          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
