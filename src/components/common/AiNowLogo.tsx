"use client";

import React from "react";
import Link from "next/link";

interface AiNowThreeStripesProps {
  className?: string;
}

/**
 * Official aiNOW Three Stripes Mark:
 * Three skewed rounded rectangles (-15 deg):
 * 1. Pink (#ec4899)  — aiCONTENT
 * 2. Blue (#2563eb)  — aiSTAFF / aiNOW Core
 * 3. Green (#10b981) — aiADS / iAI
 */
export function AiNowThreeStripes({ className = "size-6" }: AiNowThreeStripesProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g transform="translate(120 96) skewX(-15)">
        <rect x="0" y="0" width="368" height="72" rx="18" fill="#ffd7e0" />
        <rect x="0" y="120" width="368" height="72" rx="18" fill="#ff365f" />
        <rect x="0" y="240" width="368" height="72" rx="18" fill="#ff7894" />
      </g>
    </svg>
  );
}

interface AiNowLogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  wordmarkClassName?: string;
}

const AI_WORDMARK_STYLE: React.CSSProperties = {
  backgroundImage: "linear-gradient(118deg, #d62961 0%, #db3f6d 48%, #c92b5c 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  textShadow: "0 0.09em 0.26em rgba(37, 99, 235, 0.16)",
};

const NOW_WORDMARK_STYLE: React.CSSProperties = {
  backgroundImage: "linear-gradient(108deg, #c92b5c 0%, #db3f6d 48%, #d62961 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  textShadow: "0 0.09em 0.26em rgba(37, 99, 235, 0.16)",
};

export function AiNowLogo({
  href = "/",
  size = "md",
  className = "",
  wordmarkClassName = "",
}: AiNowLogoProps) {
  const iconSizes = {
    sm: "size-5",
    md: "size-6",
    lg: "size-8",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg sm:text-xl",
    lg: "text-2xl sm:text-3xl",
  };

  const badgeSizes = {
    sm: "size-7 p-1 rounded-md",
    md: "size-8 p-1.5 rounded-lg",
    lg: "size-11 p-2 rounded-xl",
  };

  const content = (
    <div dir="ltr" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* 3-Stripe Icon Badge */}
      <div
        className={`flex items-center justify-center bg-white/90 dark:bg-[#111318]/90 border border-black/[0.08] dark:border-white/12 shadow-xs group-hover:border-blue-500/40 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.18)] transition-all duration-200 ${badgeSizes[size]}`}
      >
        <AiNowThreeStripes className={`${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`} />
      </div>

      {/* Typography: aiNOW */}
      <div className={`ainow-logo-wordmark flex items-center font-black tracking-tight leading-none ${textSizes[size]} ${wordmarkClassName}`}>
        <span className={wordmarkClassName ? "font-semibold opacity-90 text-inherit" : "font-semibold"} style={wordmarkClassName ? undefined : AI_WORDMARK_STYLE}>vibe</span>
        <span className={wordmarkClassName ? "font-black text-inherit" : "font-black"} style={wordmarkClassName ? undefined : NOW_WORDMARK_STYLE}>CODING</span>
        {!wordmarkClassName && <span className="ainow-logo-light-pass" aria-hidden="true" />}
      </div>
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label="vibeCODING" className="inline-flex">
      {content}
    </Link>
  );
}
