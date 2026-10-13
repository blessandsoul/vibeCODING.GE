"use client";

import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { AiNowSectionFrame } from "./AiNowSectionFrame";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";
import {
  AnimatedActivityIcon,
  AnimatedUtensilsIcon,
  AnimatedBuildingIcon,
  AnimatedShoppingBagIcon,
  AnimatedCarIcon,
  AnimatedScaleIcon,
  AnimatedCheckIcon,
  AnimatedArrowRightIcon,
  AnimatedIconProps,
} from "./AiNowAnimatedIcons";

interface IndustryDefinition {
  id: string;
  icon: React.ComponentType<AnimatedIconProps>;
  iconColor: string;
  accentBorder: string;
  accentBg: string;
  titleHoverColor: string;
  checkColor: string;
  linkColor: string;
}

const INDUSTRIES: IndustryDefinition[] = [
  {
    id: "healthcare",
    iconColor: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-900/50",
    icon: AnimatedActivityIcon,
    accentBorder: "group-hover:border-blue-500/40",
    accentBg: "from-blue-500/10 to-transparent",
    titleHoverColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
    checkColor: "text-blue-600 dark:text-blue-400",
    linkColor: "text-blue-600 dark:text-blue-400 hover:text-blue-700",
  },
  {
    id: "horeca",
    iconColor: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-900/50",
    icon: AnimatedUtensilsIcon,
    accentBorder: "group-hover:border-amber-500/40",
    accentBg: "from-amber-500/10 to-transparent",
    titleHoverColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    checkColor: "text-amber-600 dark:text-amber-400",
    linkColor: "text-amber-600 dark:text-amber-400 hover:text-amber-700",
  },
  {
    id: "real-estate",
    iconColor: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-900/50",
    icon: AnimatedBuildingIcon,
    accentBorder: "group-hover:border-indigo-500/40",
    accentBg: "from-indigo-500/10 to-transparent",
    titleHoverColor: "group-hover:text-indigo-600 dark:group-hover:text-indigo-400",
    checkColor: "text-indigo-600 dark:text-indigo-400",
    linkColor: "text-indigo-600 dark:text-indigo-400 hover:text-indigo-700",
  },
  {
    id: "ecommerce",
    iconColor: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-900/50",
    icon: AnimatedShoppingBagIcon,
    accentBorder: "group-hover:border-emerald-500/40",
    accentBg: "from-emerald-500/10 to-transparent",
    titleHoverColor: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    checkColor: "text-emerald-600 dark:text-emerald-400",
    linkColor: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-700",
  },
  {
    id: "auto",
    iconColor: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-900/50",
    icon: AnimatedCarIcon,
    accentBorder: "group-hover:border-rose-500/40",
    accentBg: "from-rose-500/10 to-transparent",
    titleHoverColor: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    checkColor: "text-rose-600 dark:text-rose-400",
    linkColor: "text-rose-600 dark:text-rose-400 hover:text-rose-700",
  },
  {
    id: "legal",
    iconColor: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-900/50",
    icon: AnimatedScaleIcon,
    accentBorder: "group-hover:border-cyan-500/40",
    accentBg: "from-cyan-500/10 to-transparent",
    titleHoverColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
    checkColor: "text-cyan-600 dark:text-cyan-400",
    linkColor: "text-cyan-600 dark:text-cyan-400 hover:text-cyan-700",
  },
];

export function AiNowIndustries() {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const industries = INDUSTRIES.map((industry) => {
    const localized = copy.industries.items[industry.id as keyof typeof copy.industries.items];
    return {
      ...industry,
      title: localized.title,
      tag: localized.tag,
      desc: localized.description,
      ctaText: localized.action,
      points: localized.points,
    };
  });

  return (
    <AiNowSectionFrame
      id="industries"
      className="ainow-blueprint-bg"
      laserDelay={2.5}
      laserSpeed={13}
      showTicks={true}
      containerClassName="px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="relative w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-black/[0.08] dark:border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              <span>{copy.industries.eyebrow}</span>
            </div>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {copy.industries.title}
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md">
            {copy.industries.description}
          </p>
        </div>

        {/* 3x2 Grid of Industry Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {industries.map((ind) => (
            <div
              key={ind.id}
              className={`group relative flex flex-col justify-between rounded-2xl border border-black/[0.08] dark:border-white/10 bg-white/70 dark:bg-[#111318]/70 backdrop-blur-md p-6 sm:p-7 shadow-xs hover:shadow-md ${ind.accentBorder} transition-all duration-200 overflow-hidden`}
            >
              {/* Top Row: Left Tag & Title, Right Icon */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 inline-block mb-2">
                      {ind.tag}
                    </span>
                    <h3 className={`font-headline text-base sm:text-lg font-bold text-slate-900 dark:text-white ${ind.titleHoverColor} transition-colors`}>
                      {ind.title}
                    </h3>
                  </div>
                  <div className={`size-11 rounded-xl flex items-center justify-center shrink-0 border ${ind.iconColor} shadow-xs transition-transform group-hover:scale-105`}>
                    <ind.icon size={22} className="size-5.5" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {ind.desc}
                </p>

                {/* Key Automation Points */}
                <div className="space-y-2 pt-4 border-t border-black/[0.06] dark:border-white/10 mb-6">
                  {ind.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <AnimatedCheckIcon size={14} className={`size-3.5 ${ind.checkColor} shrink-0 mt-0.5`} />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <Link
                href="#cta"
                className={`inline-flex items-center justify-between w-full pt-3.5 mt-2 border-t border-black/[0.06] dark:border-white/10 text-xs font-semibold ${ind.linkColor} group/btn transition-colors`}
              >
                <span className="group-hover/btn:underline">{ind.ctaText}</span>
                <span className="size-6 rounded-full bg-black/[0.03] dark:bg-white/[0.06] flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                  <AnimatedArrowRightIcon size={12} className="size-3" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </AiNowSectionFrame>
  );
}
