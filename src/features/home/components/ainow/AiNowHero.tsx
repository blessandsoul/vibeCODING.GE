"use client";

import type { MouseEvent, ReactNode } from "react";
import { useLocale } from "next-intl";
import {
  AnimatedArrowRightIcon,
  AnimatedSparklesIcon,
} from "./AiNowAnimatedIcons";
import { AiNowLaserButton } from "./AiNowLaserButton";
import { AiNowCatalogButton } from "./AiNowCatalogButton";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { AiNowEcosystemHub } from "./AiNowEcosystemHub";
import { AiNowHeroGradualBlur } from "./AiNowHeroGradualBlur";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

export function AiNowHero({ conversationId = "cta", catalogHref, catalogLabel, hint, centerHref }: { conversationId?: string; catalogHref?: string; catalogLabel?: string; hint?: ReactNode; centerHref?: string } = {}) {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);

  const scrollToConversation = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    event.preventDefault();

    const target = document.getElementById(conversationId);
    if (!target) return;

    window.history.pushState(null, "", `#${conversationId}`);

    let timer = 0;
    let attempts = 0;
    let cancelled = false;
    const interruptionEvents = ["pointerdown", "touchstart", "wheel", "keydown"] as const;

    const stopTracking = () => {
      cancelled = true;
      window.clearTimeout(timer);
      interruptionEvents.forEach((eventName) => window.removeEventListener(eventName, stopTracking));
    };

    const alignToFinalCta = () => {
      const targetTop = window.scrollY + target.getBoundingClientRect().top - 80;
      // The homepage has several intentional lazy visual sections. A direct
      // position is less disorienting than a long smooth scroll that drifts
      // away while those sections expand.
      window.scrollTo({ top: Math.max(0, targetTop), behavior: "instant" as ScrollBehavior });
    };

    const keepAlignedWhilePageSettles = () => {
      if (cancelled || !target.isConnected) return;

      alignToFinalCta();
      attempts += 1;

      if (attempts >= 18) {
        stopTracking();
        return;
      }

      timer = window.setTimeout(keepAlignedWhilePageSettles, 180);
    };

    interruptionEvents.forEach((eventName) => {
      window.addEventListener(eventName, stopTracking, { once: true, passive: true });
    });
    keepAlignedWhilePageSettles();
  };

  return (
    <div className="relative w-full">
      {/* ───────────────────────────────────────────────────────────
          1. HERO HEADER SECTION (2-Column Value Prop + Ecosystem Hub)
          flanked by coordinate blueprint rails & subtle grid
          ─────────────────────────────────────────────────────────── */}
      <AiNowSectionFrame
        id="hero"
        className="relative flex min-w-0"
        laserDelay={0}
        laserSpeed={9}
        showTicks={true}
        showTopDiamonds={false}
        showBottomDiamonds={true}
        containerClassName="px-4 sm:px-6 lg:px-8 relative pt-2 sm:pt-12 pb-14 overflow-hidden isolate"
      >
        {/* Infinite Looping iAI Gradual Blur (ReactBits gradual-blur in iAI colors) */}
        <AiNowHeroGradualBlur />

        <div className="relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 py-2 w-full">
          {/* Left Column: Direct Value Proposition & Explanation */}
          <div className="flex w-full min-w-0 max-w-xl flex-col items-start text-left lg:w-auto lg:max-w-lg lg:shrink-0">
            {/* Headline */}
            <h1 className="font-headline min-w-0 max-w-full text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.18] sm:leading-[1.15] text-balance [overflow-wrap:anywhere]">
              {copy.hero.titleLine1} <br className="hidden sm:inline" />
              <span className="inline-block pt-0.5 pb-2 bg-gradient-to-r from-[#2563eb] via-[#8b5cf6] to-[#ec4899] dark:from-[#38bdf8] dark:via-[#c084fc] dark:to-[#f472b6] bg-clip-text text-transparent">
                {copy.hero.titleLine2}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal tracking-tight leading-relaxed text-balance">
              {copy.hero.description}
            </p>

            {/* Dual Actions */}
            <div className="mt-8 flex w-full max-w-full flex-row flex-wrap items-center gap-2 sm:gap-4 sm:flex-nowrap">
              <AiNowLaserButton
                href={`#${conversationId}`}
                onClick={scrollToConversation}
                className="w-auto max-w-full shrink-0"
              >
                {copy.hero.primaryCta}
                <AnimatedArrowRightIcon size={15} className="size-3.5 sm:size-4 text-slate-800 dark:text-slate-100 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </AiNowLaserButton>

              <AiNowCatalogButton href={catalogHref ?? "#categories"}>
                {catalogLabel ?? copy.hero.catalogCta}
              </AiNowCatalogButton>
            </div>

            {/* Micro-hint with sparkle */}
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400 group cursor-default">
              <AnimatedSparklesIcon size={15} className="size-3.5 text-[#ec4899] shrink-0" />
              <span>{hint ?? copy.hero.hint}</span>
            </div>

          </div>

          {/* Right Column: Interactive Ecosystem Hub Graphic */}
          <div className="flex w-full min-w-0 flex-1 items-center justify-center">
            <AiNowEcosystemHub centerHref={centerHref} />
          </div>
        </div>
      </AiNowSectionFrame>
    </div>
  );
}
