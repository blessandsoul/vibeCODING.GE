"use client";

import React from "react";

interface AiNowSectionFrameProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  hasLaser?: boolean;
  laserDelay?: number;
  laserSpeed?: number;
  showTicks?: boolean;
  showTopDiamonds?: boolean;
  showBottomDiamonds?: boolean;
}

export function AiNowSectionFrame({
  children,
  id,
  className = "",
  containerClassName = "",
  hasLaser = true,
  laserDelay = 0,
  laserSpeed = 10,
  showTicks = true,
  showTopDiamonds = true,
  showBottomDiamonds = true,
}: AiNowSectionFrameProps) {
  const tickIdLeft = `ticks-l-${id || "sec"}`;
  const tickIdRight = `ticks-r-${id || "sec"}`;

  return (
    <section
      id={id}
      className={`relative flex min-w-0 outer-section-node-offset ${className}`}
    >
      {/* Outer Corner Diamond Nodes - Top */}
      {showTopDiamonds && (
        <>
          <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] diamond-node-glow" />
          <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] diamond-node-glow" />
        </>
      )}

      {/* Outer Corner Diamond Nodes - Bottom */}
      {showBottomDiamonds && (
        <>
          <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] diamond-node-glow" />
          <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] diamond-node-glow" />
        </>
      )}

      {/* 1. Outer Left Gutter Span */}
      <span className="relative z-1 w-4 sm:w-6 md:w-12 shrink-0 border-r lg:border-r-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)]"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px] overflow-hidden">
            <div style={{ flex: 1.6, width: "1px", backgroundImage: "repeating-linear-gradient(to bottom, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)" }} />
            <div style={{ flex: 4.2, width: "1px", backgroundColor: "currentColor" }} />
            <div style={{ flex: 1.4, width: "1px", backgroundColor: "currentColor" }} />
            <div style={{ flex: 2.8, width: "1px", backgroundImage: "repeating-linear-gradient(to bottom, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)" }} />
            {hasLaser && (
              <div
                className="ainow-laser-v"
                style={{
                  animation: `laser-beam-down ${laserSpeed}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                  animationDelay: `${laserDelay}s`,
                }}
              />
            )}
          </div>
        </div>
      </span>

      {/* 2. Left Intermediate Span */}
      <span className="relative z-1 hidden flex-1 lg:block border-x border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)]"
          style={{ width: "10px", height: "100%", right: "-0.5px", transform: "translateX(50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px] overflow-hidden">
            <div style={{ flex: 2.4, width: "1px", backgroundColor: "currentColor" }} />
            <div style={{ flex: 2.5, width: "1px", backgroundImage: "repeating-linear-gradient(to bottom, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)" }} />
            <div style={{ flex: 3.0, width: "1px", backgroundColor: "currentColor" }} />
            {hasLaser && (
              <div
                className="ainow-laser-v"
                style={{
                  animation: `laser-beam-down ${laserSpeed * 1.2}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                  animationDelay: `${laserDelay + 2.5}s`,
                }}
              />
            )}
          </div>
        </div>
        {/* SVG Ruler Ticks on the left rail */}
        {showTicks && (
          <div className="absolute top-0 bottom-0 ainow-ruler-ticks" style={{ width: "32px", height: "100%", right: "-1px" }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id={tickIdLeft} width="32" height="200" patternUnits="userSpaceOnUse">
                <rect x="16" y="0" width="16" height="1" fill="currentColor" />
                <rect x="20" y="8.87" width="12" height="1" fill="currentColor" />
                <rect x="20" y="18.36" width="12" height="1" fill="currentColor" />
                <rect x="21" y="26.64" width="11" height="1" fill="currentColor" />
                <rect x="20" y="35.51" width="12" height="1" fill="currentColor" />
                <rect x="17" y="44.35" width="15" height="1" fill="currentColor" />
                <rect x="15" y="54.62" width="17" height="1" fill="currentColor" />
                <rect x="14" y="62.80" width="18" height="1" fill="currentColor" />
                <rect x="11" y="72.47" width="21" height="1" fill="currentColor" />
                <rect x="14" y="82.73" width="18" height="1" fill="currentColor" />
                <rect x="14" y="91.25" width="18" height="1" fill="currentColor" />
                <rect x="14" y="98.60" width="18" height="1" fill="currentColor" />
                <rect x="16" y="108.96" width="16" height="1" fill="currentColor" />
                <rect x="15" y="117.39" width="17" height="1" fill="currentColor" />
                <rect x="14" y="126.55" width="18" height="1" fill="currentColor" />
                <rect x="13" y="135.06" width="19" height="1" fill="currentColor" />
                <rect x="12" y="146.56" width="20" height="1" fill="currentColor" />
                <rect x="9" y="153.48" width="23" height="1" fill="currentColor" />
                <rect x="9" y="162.24" width="23" height="1" fill="currentColor" />
                <rect x="8" y="172.82" width="24" height="1" fill="currentColor" />
                <rect x="8" y="182.05" width="24" height="1" fill="currentColor" />
                <rect x="11" y="190.9" width="21" height="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#${tickIdLeft})`} />
            </svg>
          </div>
        )}
      </span>

      {/* 3. Center Content Container */}
      <div className={`relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px] ${containerClassName}`}>
        {/* Diamond Corner Nodes - Top */}
        {showTopDiamonds && (
          <>
            <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [top:calc(-1*var(--node-vertical-offset))] left-[-3.5px] diamond-node-glow hidden lg:block" />
            <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [top:calc(-1*var(--node-vertical-offset))] right-[-3.5px] diamond-node-glow hidden lg:block" />
          </>
        )}

        {/* Diamond Corner Nodes - Bottom */}
        {showBottomDiamonds && (
          <>
            <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [bottom:calc(-1*var(--node-vertical-offset))] left-[-3.5px] diamond-node-glow hidden lg:block" />
            <div className="absolute z-20 size-1.5 rotate-45 border border-[rgb(218,221,226)] dark:border-white/80 bg-white dark:bg-[#0a0b0e] [bottom:calc(-1*var(--node-vertical-offset))] right-[-3.5px] diamond-node-glow hidden lg:block" />
          </>
        )}

        {children}
      </div>

      {/* 4. Right Intermediate Span */}
      <span className="relative z-1 hidden flex-1 lg:block border-x border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)]"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px] overflow-hidden">
            <div style={{ flex: 1.5, width: "1px", backgroundColor: "currentColor" }} />
            <div style={{ flex: 2.4, width: "1px", backgroundColor: "currentColor" }} />
            <div style={{ flex: 3.2, width: "1px", backgroundImage: "repeating-linear-gradient(to bottom, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)" }} />
            {hasLaser && (
              <div
                className="ainow-laser-v"
                style={{
                  animation: `laser-beam-down ${laserSpeed * 1.1}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                  animationDelay: `${laserDelay + 1.2}s`,
                }}
              />
            )}
          </div>
        </div>
        {/* SVG Ruler Ticks on the right rail (mirrored) */}
        {showTicks && (
          <div className="absolute top-0 bottom-0 ainow-ruler-ticks" style={{ width: "32px", height: "100%", left: "-1px" }}>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="scale-x-[-1]">
              <pattern id={tickIdRight} width="32" height="200" patternUnits="userSpaceOnUse">
                <rect x="16" y="0" width="16" height="1" fill="currentColor" />
                <rect x="20" y="8.87" width="12" height="1" fill="currentColor" />
                <rect x="20" y="18.36" width="12" height="1" fill="currentColor" />
                <rect x="21" y="26.64" width="11" height="1" fill="currentColor" />
                <rect x="20" y="35.51" width="12" height="1" fill="currentColor" />
                <rect x="17" y="44.35" width="15" height="1" fill="currentColor" />
                <rect x="15" y="54.62" width="17" height="1" fill="currentColor" />
                <rect x="14" y="62.80" width="18" height="1" fill="currentColor" />
                <rect x="11" y="72.47" width="21" height="1" fill="currentColor" />
                <rect x="14" y="82.73" width="18" height="1" fill="currentColor" />
                <rect x="14" y="91.25" width="18" height="1" fill="currentColor" />
                <rect x="14" y="98.60" width="18" height="1" fill="currentColor" />
                <rect x="16" y="108.96" width="16" height="1" fill="currentColor" />
                <rect x="15" y="117.39" width="17" height="1" fill="currentColor" />
                <rect x="14" y="126.55" width="18" height="1" fill="currentColor" />
                <rect x="13" y="135.06" width="19" height="1" fill="currentColor" />
                <rect x="12" y="146.56" width="20" height="1" fill="currentColor" />
                <rect x="9" y="153.48" width="23" height="1" fill="currentColor" />
                <rect x="9" y="162.24" width="23" height="1" fill="currentColor" />
                <rect x="8" y="172.82" width="24" height="1" fill="currentColor" />
                <rect x="8" y="182.05" width="24" height="1" fill="currentColor" />
                <rect x="11" y="190.9" width="21" height="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#${tickIdRight})`} />
            </svg>
          </div>
        )}
      </span>

      {/* 5. Outer Right Gutter Span */}
      <span className="relative z-1 w-4 sm:w-6 md:w-12 shrink-0 border-l lg:border-l-0 border-transparent">
        <div
          className="absolute top-0 bottom-0 text-[rgb(218,221,226)]"
          style={{ width: "10px", height: "100%", left: "-0.5px", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-col w-[1px] overflow-hidden">
            <div style={{ flex: 3.0, width: "1px", backgroundColor: "currentColor" }} />
            <div style={{ flex: 3.2, width: "1px", backgroundImage: "repeating-linear-gradient(to bottom, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)" }} />
            <div style={{ flex: 4.4, width: "1px", backgroundImage: "repeating-linear-gradient(to bottom, currentColor 0px, currentColor 4px, transparent 4px, transparent 8px)" }} />
            {hasLaser && (
              <div
                className="ainow-laser-v"
                style={{
                  animation: `laser-beam-down ${laserSpeed * 0.9}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                  animationDelay: `${laserDelay + 4}s`,
                }}
              />
            )}
          </div>
        </div>
      </span>
    </section>
  );
}
