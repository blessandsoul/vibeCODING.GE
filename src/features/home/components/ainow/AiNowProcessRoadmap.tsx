"use client";

import React from "react";
import { useLocale } from "next-intl";
import { AnimatedArrowRightIcon } from "./AiNowAnimatedIcons";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

export function AiNowProcessRoadmap() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const steps = copy.process.steps.map((step, index) => ({ ...step, num: index + 1 }));

  return (
    <AiNowSectionFrame
      id="how-we-work"
      className="ainow-blueprint-bg"
      laserDelay={4}
      laserSpeed={11}
      showTicks={true}
      showTopDiamonds={false}
      showBottomDiamonds={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative w-full">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {copy.process.title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {copy.process.description}
          </p>
        </div>

        {/* 3-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const colorClass =
              idx === 0
                ? "border-pink-500/40 dark:border-pink-500/40 bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 group-hover:border-pink-600 dark:group-hover:border-pink-400"
                : idx === 1
                ? "border-blue-500/40 dark:border-blue-500/40 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 group-hover:border-blue-600 dark:group-hover:border-blue-400"
                : "border-emerald-500/40 dark:border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 group-hover:border-emerald-600 dark:group-hover:border-emerald-400";

            return (
              <div key={step.num} className="relative flex flex-col items-start group">
                <div className="flex items-center gap-3.5 mb-4 w-full">
                  {/* Number Badge */}
                  <div className={`size-10 sm:size-11 rounded-full border-2 ${colorClass} flex items-center justify-center font-mono font-bold text-base group-hover:scale-110 transition-all shadow-sm`}>
                    {step.num}
                  </div>

                  <div className="flex-1 font-headline font-semibold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                    {step.title}
                  </div>

                  {/* Arrow to Next Step (on md+ screens, except last) */}
                  {idx < steps.length - 1 && (
                    <AnimatedArrowRightIcon size={18} className="hidden md:block size-5 text-slate-400 dark:text-slate-600 shrink-0 ml-2" />
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-[3.25rem]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AiNowSectionFrame>
  );
}
