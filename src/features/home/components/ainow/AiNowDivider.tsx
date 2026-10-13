"use client";

import React, { useId } from "react";

export function AiNowDivider({ className = "" }: { className?: string }) {
  const patternId = useId();

  return (
    <div
      className={`relative flex h-3.5 w-full items-center min-w-0 outer-section-node-offset border-y border-black/[0.08] dark:border-white/40 bg-[#fcfcfb] dark:bg-[#0a0b0e] transition-colors duration-200 ${className}`}
      aria-hidden="true"
    >
      {/* 45° Diagonal Hatched Blueprint Fill */}
      <svg className="pointer-events-none absolute inset-0 z-0 size-full select-none text-black/10 dark:text-white/20 py-[1px] opacity-60">
        <defs>
          <pattern
            height="4"
            id={patternId}
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
            width="4"
          >
            <line stroke="currentColor" strokeWidth="1.5" x1="0" x2="0" y1="0" y2="4" />
          </pattern>
        </defs>
        <rect fill={`url(#${patternId})`} height="100%" width="100%" />
      </svg>

      {/* 1. Outer Left Gutter Span with intersection marker */}
      <span className="relative z-10 w-4 sm:w-6 md:w-12 shrink-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* 2. Left Intermediate Span */}
      <span className="relative z-10 hidden flex-1 lg:block border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* 3. Center Container with Traveling Horizontal Laser */}
      <div className="relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px] h-full">
        {/* Horizontal Traveling Laser Beam */}
        <div
          className="ainow-laser-h"
          style={{
            animation: "laser-beam-right 8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
          }}
        />
      </div>

      {/* 4. Right Intermediate Span */}
      <span className="relative z-10 hidden flex-1 lg:block border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>

      {/* 5. Outer Right Gutter Span */}
      <span className="relative z-10 w-4 sm:w-6 md:w-12 shrink-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)] dark:text-white/50"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[rgb(218,221,226)] dark:bg-white/50" />
        </div>
      </span>
    </div>
  );
}
