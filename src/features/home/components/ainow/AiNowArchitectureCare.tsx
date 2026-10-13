"use client";

import { useLocale } from "next-intl";

import {
  AnimatedShieldIcon,
  AnimatedServerIcon,
  AnimatedFileIcon,
  AnimatedWorkflowIcon,
  AnimatedSettingsIcon,
  AnimatedZapIcon,
} from "./AiNowAnimatedIcons";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { AiNowCatalogButton } from "./AiNowCatalogButton";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";

export function AiNowArchitectureCare() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const specIcons = [
    AnimatedShieldIcon,
    AnimatedServerIcon,
    AnimatedFileIcon,
    AnimatedWorkflowIcon,
    AnimatedSettingsIcon,
    AnimatedZapIcon,
  ];
  const specs = copy.architecture.specs.map((spec, index) => ({ ...spec, icon: specIcons[index] }));
  return (
    <AiNowSectionFrame
      id="architecture"
      className="ainow-blueprint-bg"
      laserDelay={2.5}
      laserSpeed={13}
      showTicks={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative w-full">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
              {copy.architecture.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {copy.architecture.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              {copy.architecture.description}
            </p>
          </div>

          <AiNowCatalogButton href="#cta" size="sm">
            {copy.architecture.action}
          </AiNowCatalogButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-md border border-dashed border-black/[0.14] dark:border-white/10 bg-white dark:bg-[#111318] p-5 shadow-2xs hover:border-emerald-500/40 dark:hover:border-emerald-400/50 hover:shadow-sm transition-all"
              >
                <div className="absolute -top-[3px] -left-[3px] size-1.5 rotate-45 border border-black/20 dark:border-white/30 bg-white dark:bg-[#0a0b0e]" />
                <div className="absolute -top-[3px] -right-[3px] size-1.5 rotate-45 border border-black/20 dark:border-white/30 bg-white dark:bg-[#0a0b0e]" />
                <div className="absolute -bottom-[3px] -left-[3px] size-1.5 rotate-45 border border-black/20 dark:border-white/30 bg-white dark:bg-[#0a0b0e]" />
                <div className="absolute -bottom-[3px] -right-[3px] size-1.5 rotate-45 border border-black/20 dark:border-white/30 bg-white dark:bg-[#0a0b0e]" />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-sm text-slate-900 dark:text-slate-100 flex-1 leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex size-9 items-center justify-center rounded-lg border border-black/[0.08] dark:border-white/10 bg-slate-50 dark:bg-white/[0.06] text-slate-700 dark:text-slate-200 shrink-0 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all">
                      <Icon size={18} className="size-4.5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-400 dark:text-slate-500">
                  <span>{copy.architecture.principle} {String(idx + 1).padStart(2, "0")}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">● {copy.architecture.rule}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AiNowSectionFrame>
  );
}
