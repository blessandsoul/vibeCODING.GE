"use client";

import { useRef, useState } from "react";
import { useLocale } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AiNowLaserButton } from "./AiNowLaserButton";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import {
  AnimatedArrowRightIcon,
  AnimatedGlobeIcon,
  AnimatedPhoneIcon,
  AnimatedSparklesIcon,
  AnimatedUsersIcon,
} from "./AiNowAnimatedIcons";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

type ProblemId = "chats" | "calls" | "content" | "website";

type ProblemDefinition = {
  id: ProblemId;
  product: string;
  icon: typeof AnimatedUsersIcon;
  accent: {
    icon: string;
    text: string;
    ring: string;
  };
};

const PROBLEMS: ProblemDefinition[] = [
  {
    id: "chats",
    product: "SCAN",
    icon: AnimatedUsersIcon,
    accent: {
      icon: "bg-blue-600 text-white shadow-blue-500/25",
      text: "text-blue-700 dark:text-blue-300",
      ring: "ring-blue-500/45 dark:ring-blue-300/40",
    },
  },
  {
    id: "calls",
    product: "SURFACE",
    icon: AnimatedPhoneIcon,
    accent: {
      icon: "bg-orange-500 text-white shadow-orange-500/25",
      text: "text-orange-700 dark:text-orange-300",
      ring: "ring-orange-500/45 dark:ring-orange-300/40",
    },
  },
  {
    id: "content",
    product: "TRIAGE",
    icon: AnimatedSparklesIcon,
    accent: {
      icon: "bg-pink-600 text-white shadow-pink-500/25",
      text: "text-pink-700 dark:text-pink-300",
      ring: "ring-pink-500/45 dark:ring-pink-300/40",
    },
  },
  {
    id: "website",
    product: "HANDOVER",
    icon: AnimatedGlobeIcon,
    accent: {
      icon: "bg-emerald-600 text-white shadow-emerald-500/25",
      text: "text-emerald-700 dark:text-emerald-300",
      ring: "ring-emerald-500/45 dark:ring-emerald-300/40",
    },
  },
];

export function AiNowComparison() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const problems = PROBLEMS.map((problem) => ({
    ...problem,
    ...copy.comparison.problems[problem.id],
  }));
  const [selectedId, setSelectedId] = useState<ProblemId>("chats");
  const detailPanelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());
  const selected = problems.find((problem) => problem.id === selectedId) ?? problems[0];

  const selectProblem = (problemId: ProblemId) => {
    setSelectedId(problemId);

    if (typeof window === "undefined" || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    window.requestAnimationFrame(() => {
      detailPanelRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  };

  return (
    <AiNowSectionFrame
      id="comparison"
      className="ainow-blueprint-bg"
      laserDelay={1.5}
      laserSpeed={11}
      showTicks
      containerClassName="px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-headline text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl">
            {copy.comparison.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            {copy.comparison.description}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => {
            const Icon = problem.icon;
            const isSelected = selected.id === problem.id;

            return (
              <button
                key={problem.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => selectProblem(problem.id)}
                className={`dodo-glass-box group min-h-44 p-4 text-left outline-none transition-[transform,box-shadow] duration-200 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#fcfcfb] dark:focus-visible:ring-offset-[#0a0b0e] active:scale-[0.96] ${
                  isSelected ? `ring-2 ${problem.accent.ring}` : "ring-1 ring-transparent"
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <span className={`flex size-10 items-center justify-center rounded-xl shadow-lg ${problem.accent.icon}`}>
                      <Icon size={19} className="size-5" isHovered={isSelected} />
                    </span>
                    <span className={`pt-1 font-mono text-[10px] font-bold tracking-wide ${problem.accent.text}`}>
                      {problem.product}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-snug text-slate-900 dark:text-white">
                    {problem.question}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {problem.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div
          ref={detailPanelRef}
          className="dodo-glass-card mt-5 min-h-[390px] scroll-mt-24 overflow-hidden p-5 sm:min-h-[350px] sm:p-7"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={selected.id}
              initial={reduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              exit={reduceMotion ? undefined : { opacity: 0, transform: "translateY(-8px)" }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
              className="relative z-10"
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <p className={`font-mono text-[11px] font-bold tracking-wide ${selected.accent.text}`}>
                    {selected.product}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {selected.detailHeading}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    {selected.solution}
                  </p>
                </div>

                <AiNowLaserButton href="#cta" className="w-full shrink-0 lg:w-auto">
                  {copy.comparison.action}
                  <AnimatedArrowRightIcon size={15} className="size-4 shrink-0" />
                </AiNowLaserButton>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="dodo-glass-box p-4">
                    <p className={`font-mono text-[10px] font-bold tracking-wide ${selected.accent.text}`}>{copy.comparison.labels.inspect}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {selected.builds.map((build) => (
                      <li key={build} className="flex gap-2">
                        <span className={`mt-2 size-1.5 shrink-0 rounded-full ${selected.accent.icon.split(" ")[0]}`} />
                        <span>{build}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="dodo-glass-box p-4">
                  <p className={`font-mono text-[10px] font-bold tracking-wide ${selected.accent.text}`}>{copy.comparison.labels.firstStep}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{selected.firstStep}</p>
                    <p className={`mt-4 font-mono text-[10px] font-bold tracking-wide ${selected.accent.text}`}>{copy.comparison.labels.ask}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{selected.materials}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AiNowSectionFrame>
  );
}
