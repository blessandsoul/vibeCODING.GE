"use client";

import React, { useRef, useCallback } from "react";

export interface AiNowIconTileProps {
  iconId: string; // e.g. "aichats", "aicall", "aicontent", "aiweb"
  size?: "sm" | "md" | "lg" | "xl";
  bgGradient?: string;
  shadowColor?: string;
  className?: string;
  enableParallax?: boolean;
  alt?: string;
}

const SIZE_CONFIGS = {
  sm: {
    tile: "size-8 sm:size-9 rounded-xl",
    symbol: "size-4 sm:size-5",
    radius: "rounded-lg",
    strength: 4,
  },
  md: {
    tile: "size-12 sm:size-14 rounded-2xl",
    symbol: "size-6 sm:size-7",
    radius: "rounded-xl",
    strength: 6,
  },
  lg: {
    tile: "size-16 sm:size-18 rounded-[20px]",
    symbol: "size-8 sm:size-9",
    radius: "rounded-[18px]",
    strength: 8,
  },
  xl: {
    tile: "size-20 sm:size-24 rounded-[26px]",
    symbol: "size-10 sm:size-12",
    radius: "rounded-[22px]",
    strength: 10,
  },
};

/**
 * 100% Inline Official Vector Path Registry
 * Zero HTTP requests, zero loading delays, 100% reliable render in all modes and browsers
 */
function renderIconContent(id: string) {
  const normalized = id.toLowerCase().replace(/[^a-z0-9]/g, "");

  switch (normalized) {
    case "aichats":
      return (
        <>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M13 8H7" />
          <path d="M17 12H7" />
        </>
      );
    case "aicall":
      return (
        <>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.05 2a9 9 0 0 1 8 7.94" />
          <path d="M14.05 6A5 5 0 0 1 18 10" />
        </>
      );
    case "aistaff":
      return (
        <>
          <path d="M18 21a8 8 0 0 0-16 0" />
          <circle cx="10" cy="8" r="5" />
          <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
        </>
      );
    case "aicontent":
      return (
        <>
          <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
          <path d="m6.2 5.3 3.1 3.9" />
          <path d="m12.4 3.4 3.1 4" />
          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
        </>
      );
    case "aiads":
      return (
        <>
          <path d="m3 11 18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </>
      );
    case "aimusic":
      return (
        <>
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </>
      );
    case "aibrain":
      return (
        <>
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M9 13a4.5 4.5 0 0 0 3-4" />
          <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
          <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
          <path d="M6 18a4 4 0 0 1-1.967-.516" />
          <path d="M12 13h4" />
          <path d="M12 18h6a2 2 0 0 1 2 2v1" />
          <path d="M12 8h8" />
          <path d="M16 8V5a2 2 0 0 1 2-2" />
          <circle cx="16" cy="13" r=".5" fill="white" />
          <circle cx="18" cy="3" r=".5" fill="white" />
          <circle cx="20" cy="21" r=".5" fill="white" />
          <circle cx="20" cy="8" r=".5" fill="white" />
        </>
      );
    case "aioffice":
      return (
        <>
          <path d="M12 12h.01" />
          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </>
      );
    case "aidocs":
      return (
        <>
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </>
      );
    case "aiweb":
      return (
        <>
          <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
          <path d="M10 19v-3.96 3.15" />
          <path d="M7 19h5" />
          <rect width="6" height="10" x="16" y="12" rx="2" />
        </>
      );
    case "aiapp":
      return (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 4v4" />
          <path d="M2 8h20" />
          <path d="M6 4v4" />
        </>
      );
    case "vibecoding":
      return (
        <>
          <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="m5 12-3 3 3 3" />
          <path d="m9 18 3-3-3-3" />
        </>
      );
    case "aiaudit":
      return (
        <>
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      );
    case "aijurist":
      return (
        <>
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </>
      );
    case "airadar":
      return (
        <>
          <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
          <path d="M4 6h.01" />
          <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
          <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
          <path d="M12 18h.01" />
          <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
          <circle cx="12" cy="12" r="2" />
          <path d="m13.41 10.59 5.66-5.66" />
        </>
      );
    case "aitaxi":
      return (
        <>
          <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
          <path d="M7 14h.01" />
          <path d="M17 14h.01" />
          <rect width="18" height="8" x="3" y="10" rx="2" />
          <path d="M5 18v2" />
          <path d="M19 18v2" />
        </>
      );
    default:
      return (
        <>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </>
      );
  }
}

export function AiNowIconTile({
  iconId,
  size = "md",
  bgGradient = "from-blue-600 to-blue-700",
  shadowColor = "rgba(37, 99, 235, 0.35)",
  className = "",
  enableParallax = false,
  alt = "",
}: AiNowIconTileProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const config = SIZE_CONFIGS[size] || SIZE_CONFIGS.md;

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!enableParallax || !tileRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const rect = tileRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const s = config.strength;

      tileRef.current.style.setProperty("--px", `${(x * s).toFixed(1)}px`);
      tileRef.current.style.setProperty("--py", `${(y * s).toFixed(1)}px`);
      tileRef.current.style.setProperty("--glint-x", `${(x * s * 1.5).toFixed(1)}px`);
    },
    [enableParallax, config.strength]
  );

  const handlePointerLeave = useCallback(() => {
    if (!enableParallax || !tileRef.current) return;
    tileRef.current.style.setProperty("--px", "0px");
    tileRef.current.style.setProperty("--py", "0px");
    tileRef.current.style.setProperty("--glint-x", "0px");
  }, [enableParallax]);

  return (
    <div
      ref={tileRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        ["--tile-shadow" as string]: shadowColor,
      }}
      className={`ainow-icon-tile shrink-0 bg-gradient-to-br ${bgGradient} ${config.tile} ${className}`}
      aria-label={alt || iconId}
      role="img"
    >
      {/* Specular curved glint reflection */}
      <span className="ainow-icon-tile__glint" aria-hidden="true" />

      {/* 100% Inline Crisp White Vector Symbol */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`ainow-icon-tile__symbol ${config.symbol}`}
        aria-hidden="true"
      >
        {renderIconContent(iconId)}
      </svg>
    </div>
  );
}
