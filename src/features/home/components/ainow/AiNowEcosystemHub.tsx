"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { getAiNowHomeCopy } from "./AiNowHomeCopy";
import { AiNowImage } from "./AiNowImage";

interface SatellitePod {
  id: string;
  imageSrc: string;
  copyKey: string;
  dropShadow: string;
  accentColor: string;
}

const SATELLITES: SatellitePod[] = [
  {
    id: "chats",
    imageSrc: "/graphics-3d/products/vibecoding-hero-scan-v1.png",
    copyKey: "chats",
    dropShadow: "drop-shadow(0 16px 24px rgba(37, 99, 235, 0.3))",
    accentColor: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  {
    id: "calls",
    imageSrc: "/graphics-3d/products/vibecoding-surface-audit-v1.png",
    copyKey: "calls",
    dropShadow: "drop-shadow(0 16px 24px rgba(234, 88, 12, 0.3))",
    accentColor: "group-hover:text-orange-600 dark:group-hover:text-orange-400",
  },
  {
    id: "content",
    imageSrc: "/graphics-3d/products/vibecoding-severity-triage-v1.png",
    copyKey: "content",
    dropShadow: "drop-shadow(0 16px 24px rgba(219, 39, 119, 0.3))",
    accentColor: "group-hover:text-pink-600 dark:group-hover:text-pink-400",
  },
  {
    id: "apps",
    imageSrc: "/graphics-3d/products/vibecoding-handover-v1.png",
    copyKey: "apps",
    dropShadow: "drop-shadow(0 16px 24px rgba(2, 132, 199, 0.3))",
    accentColor: "group-hover:text-cyan-600 dark:group-hover:text-cyan-400",
  },
];

export function AiNowEcosystemHub({ centerHref }: { centerHref?: string } = {}) {
  const locale = useLocale();
  const copy = getAiNowHomeCopy(locale);
  const satellites = SATELLITES.map((satellite) => ({
    ...satellite,
    ...copy.ecosystemHub.satellites[satellite.copyKey],
  }));
  const [activePod, setActivePod] = useState<string | null>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const centerImgRef = useRef<HTMLDivElement>(null);

  const sat0Ref = useRef<HTMLDivElement>(null);
  const sat1Ref = useRef<HTMLDivElement>(null);
  const sat2Ref = useRef<HTMLDivElement>(null);
  const sat3Ref = useRef<HTMLDivElement>(null);

  // Default coordinates guaranteed to be mathematically 100% symmetric (37.3° angle)
  const [lines, setLines] = useState([
    { x1: 43.5, y1: 34.4, x2: 25.8, y2: 20.9 }, // chats (top-left)
    { x1: 56.5, y1: 34.4, x2: 74.2, y2: 20.9 }, // calls (top-right)
    { x1: 43.5, y1: 44.2, x2: 25.8, y2: 57.7 }, // content (bottom-left)
    { x1: 56.5, y1: 44.2, x2: 74.2, y2: 57.7 }, // apps (bottom-right)
  ]);

  useEffect(() => {
    const update = () => {
      if (!hubRef.current || !centerImgRef.current) return;
      const hubRect = hubRef.current.getBoundingClientRect();
      const cRect = centerImgRef.current.getBoundingClientRect();
      if (hubRect.width === 0 || hubRect.height === 0) return;

      // Exact pixel center of the 3D central hub graphic
      const cx = ((cRect.left + cRect.width / 2 - hubRect.left) / hubRect.width) * 100;
      const cy = ((cRect.top + cRect.height / 2 - hubRect.top) / hubRect.height) * 100;

      const refs = [sat0Ref, sat1Ref, sat2Ref, sat3Ref];
      const newLines = refs.map((r) => {
        if (!r.current) return null;
        const sRect = r.current.getBoundingClientRect();
        const sx = ((sRect.left + sRect.width / 2 - hubRect.left) / hubRect.width) * 100;
        const sy = ((sRect.top + sRect.height / 2 - hubRect.top) / hubRect.height) * 100;

        const dx = sx - cx;
        const dy = sy - cy;

        // Perfectly aligned along the ray from center to satellite
        // Start clearing the central cross buttons (22% of distance)
        // End right at the perimeter of the satellite image (78% of distance)
        return {
          x1: Number((cx + dx * 0.22).toFixed(2)),
          y1: Number((cy + dy * 0.22).toFixed(2)),
          x2: Number((cx + dx * 0.78).toFixed(2)),
          y2: Number((cy + dy * 0.78).toFixed(2)),
        };
      });

      if (newLines.every(Boolean)) {
        setLines(newLines as typeof lines);
      }
    };

    update();
    const timer = setTimeout(update, 200);
    window.addEventListener("resize", update);

    const ro = new ResizeObserver(() => {
      update();
    });
    if (hubRef.current) ro.observe(hubRef.current);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={hubRef}
      className="relative w-full max-w-[680px] mx-auto py-8 px-2 sm:px-4 select-none"
    >
      {/* Dynamic Ambient Radial Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-80 sm:size-[460px] rounded-full bg-gradient-to-tr from-blue-500/10 via-pink-500/8 to-cyan-500/10 dark:from-blue-500/15 dark:via-purple-500/12 dark:to-cyan-500/15 blur-3xl animate-pulse" />
      </div>

      {/* SVG Conduits: Precision Percentage Mapping (0-100) with non-scaling-stroke */}
      <svg
        className="pointer-events-none absolute inset-0 size-full z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hub-line-chats" x1={lines[0].x1} y1={lines[0].y1} x2={lines[0].x2} y2={lines[0].y2} gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" stopOpacity="0.85" />
            <stop offset="1" stopColor="#2563eb" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="hub-line-calls" x1={lines[1].x1} y1={lines[1].y1} x2={lines[1].x2} y2={lines[1].y2} gradientUnits="userSpaceOnUse">
            <stop stopColor="#ea580c" stopOpacity="0.85" />
            <stop offset="1" stopColor="#ea580c" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="hub-line-content" x1={lines[2].x1} y1={lines[2].y1} x2={lines[2].x2} y2={lines[2].y2} gradientUnits="userSpaceOnUse">
            <stop stopColor="#db2777" stopOpacity="0.85" />
            <stop offset="1" stopColor="#db2777" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="hub-line-apps" x1={lines[3].x1} y1={lines[3].y1} x2={lines[3].x2} y2={lines[3].y2} gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="1" stopColor="#0284c7" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* 1. Conduit: center to top-left (chats) */}
        <line
          x1={lines[0].x1}
          y1={lines[0].y1}
          x2={lines[0].x2}
          y2={lines[0].y2}
          stroke="url(#hub-line-chats)"
          strokeWidth={activePod === "chats" ? "2.5" : "1.5"}
          strokeDasharray={activePod === "chats" ? "none" : "5 5"}
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300"
        />

        {/* 2. Conduit: center to top-right (calls) */}
        <line
          x1={lines[1].x1}
          y1={lines[1].y1}
          x2={lines[1].x2}
          y2={lines[1].y2}
          stroke="url(#hub-line-calls)"
          strokeWidth={activePod === "calls" ? "2.5" : "1.5"}
          strokeDasharray={activePod === "calls" ? "none" : "5 5"}
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300"
        />

        {/* 3. Conduit: center to bottom-left (content) */}
        <line
          x1={lines[2].x1}
          y1={lines[2].y1}
          x2={lines[2].x2}
          y2={lines[2].y2}
          stroke="url(#hub-line-content)"
          strokeWidth={activePod === "content" ? "2.5" : "1.5"}
          strokeDasharray={activePod === "content" ? "none" : "5 5"}
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300"
        />

        {/* 4. Conduit: center to bottom-right (apps) */}
        <line
          x1={lines[3].x1}
          y1={lines[3].y1}
          x2={lines[3].x2}
          y2={lines[3].y2}
          stroke="url(#hub-line-apps)"
          strokeWidth={activePod === "apps" ? "2.5" : "1.5"}
          strokeDasharray={activePod === "apps" ? "none" : "5 5"}
          vectorEffect="non-scaling-stroke"
          className="transition-all duration-300"
        />
      </svg>

      {/* Grid Container for 4 3D Satellite Pods */}
      <div className="relative z-10 grid grid-cols-2 gap-y-24 sm:gap-y-36 gap-x-16 sm:gap-x-44 items-center justify-items-center">
        {/* Top-left: 3D chat scene */}
        <div
          onMouseEnter={() => setActivePod("chats")}
          onMouseLeave={() => setActivePod(null)}
          className="group flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
        >
          <div ref={sat0Ref} className="relative size-20 sm:size-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
            <AiNowImage
              fill
              src={satellites[0].imageSrc}
              alt={satellites[0].alt}
              sizes="(min-width: 640px) 112px, 80px"
              frameClassName="absolute inset-0"
              className="size-full object-contain filter drop-shadow-[0_16px_24px_rgba(37,99,235,0.28)]"
              loading="lazy"
            />
          </div>
          <div className="mt-2.5 flex flex-col items-center">
            <span className={`font-headline font-semibold text-base sm:text-lg text-slate-900 dark:text-white ${satellites[0].accentColor} transition-colors`}>
              {satellites[0].title}
            </span>
            <span className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-tight max-w-[130px] sm:max-w-[140px]">
              {satellites[0].subtitle}
            </span>
          </div>
        </div>

        {/* Top-right: 3D phone routing scene */}
        <div
          onMouseEnter={() => setActivePod("calls")}
          onMouseLeave={() => setActivePod(null)}
          className="group flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
        >
          <div ref={sat1Ref} className="relative size-20 sm:size-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
            <AiNowImage
              fill
              src={satellites[1].imageSrc}
              alt={satellites[1].alt}
              sizes="(min-width: 640px) 112px, 80px"
              frameClassName="absolute inset-0"
              className="size-full object-contain filter drop-shadow-[0_16px_24px_rgba(234,88,12,0.28)]"
              loading="lazy"
            />
          </div>
          <div className="mt-2.5 flex flex-col items-center">
            <span className={`font-headline font-semibold text-base sm:text-lg text-slate-900 dark:text-white ${satellites[1].accentColor} transition-colors`}>
              {satellites[1].title}
            </span>
            <span className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-tight max-w-[130px] sm:max-w-[140px]">
              {satellites[1].subtitle}
            </span>
          </div>
        </div>

        {/* Bottom-left: 3D camera and film scene */}
        <div
          onMouseEnter={() => setActivePod("content")}
          onMouseLeave={() => setActivePod(null)}
          className="group flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
        >
          <div ref={sat2Ref} className="relative size-20 sm:size-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
            <AiNowImage
              fill
              src={satellites[2].imageSrc}
              alt={satellites[2].alt}
              sizes="(min-width: 640px) 112px, 80px"
              frameClassName="absolute inset-0"
              className="size-full object-contain filter drop-shadow-[0_16px_24px_rgba(219,39,119,0.28)]"
              loading="lazy"
            />
          </div>
          <div className="mt-2.5 flex flex-col items-center">
            <span className={`font-headline font-semibold text-base sm:text-lg text-slate-900 dark:text-white ${satellites[2].accentColor} transition-colors`}>
              {satellites[2].title}
            </span>
            <span className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-tight max-w-[130px] sm:max-w-[150px]">
              {satellites[2].subtitle}
            </span>
          </div>
        </div>

        {/* Bottom-right: 3D phone and browser scene */}
        <div
          onMouseEnter={() => setActivePod("apps")}
          onMouseLeave={() => setActivePod(null)}
          className="group flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
        >
          <div ref={sat3Ref} className="relative size-20 sm:size-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2">
            <AiNowImage
              fill
              src={satellites[3].imageSrc}
              alt={satellites[3].alt}
              sizes="(min-width: 640px) 112px, 80px"
              frameClassName="absolute inset-0"
              className="size-full object-contain filter drop-shadow-[0_16px_24px_rgba(2,132,199,0.28)]"
              loading="lazy"
            />
          </div>
          <div className="mt-2.5 flex flex-col items-center">
            <span className={`font-headline font-semibold text-base sm:text-lg text-slate-900 dark:text-white ${satellites[3].accentColor} transition-colors`}>
              {satellites[3].title}
            </span>
            <span className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 leading-tight max-w-[130px] sm:max-w-[150px]">
              {satellites[3].subtitle}
            </span>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────
          CENTRAL COMMAND: iAI.ge Control Hub / 3D Operating Console
          Anchored at the exact mathematical center of the satellites (39.5%)
          ─────────────────────────────────────────────────────────── */}
      <div className="absolute top-[39.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
        <div className="relative flex items-center justify-center">
          {/* Radar Rings Centered on this exact center point */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <div className="size-52 sm:size-64 rounded-full border border-dashed border-slate-300/40 dark:border-slate-700/40" />
            <div className="size-80 sm:size-96 rounded-full border border-dashed border-slate-300/25 dark:border-slate-700/25" />
            <div className="size-32 sm:size-44 rounded-full bg-blue-500/10 dark:bg-blue-400/15 blur-2xl" />
          </div>

          <a
            href={centerHref ?? "#model-architecture"}
            target="_self"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center p-2 sm:p-3 transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {/* 3D iAI Workspace Graphic v2 */}
            <div ref={centerImgRef} className="relative size-24 sm:size-36 flex items-center justify-center">
              <AiNowImage
                fill
                src="/graphics-3d/products/vibecoding-handover-v1.png"
                alt={copy.ecosystemHub.centerSubtitle}
                sizes="(min-width: 640px) 144px, 96px"
                frameClassName="absolute inset-0"
                className="size-full object-contain filter drop-shadow-[0_16px_32px_rgba(37,99,235,0.3)] group-hover:drop-shadow-[0_20px_36px_rgba(37,99,235,0.45)] group-hover:scale-105 transition-all duration-300"
                loading="eager"
              />
            </div>

            {/* iAI.ge Brandmark & Status - positioned absolutely underneath so it does NOT offset the 3D center */}
            <div className="absolute top-full mt-1.5 flex flex-col items-center whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <span className="font-headline font-bold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  vibeCODING
                </span>
                <span className="inline-flex flex-col gap-[1.5px] -skew-x-[15deg]">
                  <span className="h-[2px] w-2 rounded-full bg-[#ec4899]" />
                  <span className="h-[2px] w-2 rounded-full bg-[#2563eb]" />
                  <span className="h-[2px] w-2 rounded-full bg-[#10b981]" />
                </span>
              </div>
              <span className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                {copy.ecosystemHub.centerSubtitle}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Handwritten / Editorial annotation badge */}
      <div className="mt-6 sm:mt-8 flex justify-center sm:justify-end sm:pr-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 font-headline text-xs font-medium tracking-tight shadow-sm">
          <span>{copy.ecosystemHub.badge}</span>
        </div>
      </div>
    </div>
  );
}
