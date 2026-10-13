"use client";

import React, { useEffect, useRef, useState } from "react";
import { PulsingBorder } from "@paper-design/shaders-react";

export interface PulsatingBorderProps {
  children?: React.ReactNode;
  className?: string;
  colors?: string[];
  colorBack?: string;
  speed?: number;
  radius?: number;
  cornerRadiusPx?: number;
  thickness?: number;
  softness?: number;
  intensity?: number;
  bloom?: number;
  spotSize?: number;
  spread?: number;
  style?: React.CSSProperties;
}

// aiNOW Signature Tri-Color Palette: Pink (#ec4899), Cobalt Blue (#2563eb), Emerald (#10b981)
export const AINOW_BORDER_COLORS = ["#ec4899", "#2563eb", "#10b981"];

// OriginKit base preset defaults
const DEFAULTS = {
  bloom: 50,
  speed: 1,
  radius: 35,
  spread: 31,
  softness: 75,
  spotSize: 60,
  colorBack: "rgba(0, 0, 0, 0)",
  intensity: 30,
  thickness: 5,
};

const SPOTS = 3;
const PULSE = 0;
const SMOKE = 0.35;
const SMOKE_SIZE = 0.63;
const GLOW_ROOM = 0.4;
const MAX_ROOM = 480;

/**
 * PulsatingBorder
 * WebGL animated glowing border inspired by OriginKit (preset: base)
 * https://www.originkit.dev/components/pulsating-border?preset=base
 * Configured in signature aiNOW brand colors.
 */
export function PulsatingBorder({
  children,
  className = "",
  colors = AINOW_BORDER_COLORS,
  colorBack = DEFAULTS.colorBack,
  speed = DEFAULTS.speed,
  radius = DEFAULTS.radius,
  cornerRadiusPx,
  thickness = DEFAULTS.thickness,
  softness = DEFAULTS.softness,
  intensity = DEFAULTS.intensity,
  bloom = DEFAULTS.bloom,
  spotSize = DEFAULTS.spotSize,
  spread = DEFAULTS.spread,
  style,
}: PulsatingBorderProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState({ w: 0, h: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountedFrame = requestAnimationFrame(() => setMounted(true));
    const host = hostRef.current;
    if (!host) {
      return () => cancelAnimationFrame(mountedFrame);
    }

    let raf = 0;
    const measure = () => {
      raf = 0;
      if (!host) return;
      const w = host.clientWidth;
      const h = host.clientHeight;
      setRect((prev) => (prev.w === w && prev.h === h ? prev : { w, h }));
    };

    measure();
    const ro = new ResizeObserver(() => {
      if (!raf) raf = requestAnimationFrame(measure);
    });
    ro.observe(host);

    return () => {
      cancelAnimationFrame(mountedFrame);
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const worldW = rect.w + spread * 2;
  const worldH = rect.h + spread * 2;
  const marginX = worldW > 0 ? spread / worldW : 0;
  const marginY = worldH > 0 ? spread / worldH : 0;
  const roundness = cornerRadiusPx === undefined
    ? radius / 100
    : Math.min(1, (cornerRadiusPx * 2) / Math.max(1, Math.min(rect.w, rect.h)));

  const room = Math.min(
    MAX_ROOM,
    Math.ceil(GLOW_ROOM * Math.min(worldW, worldH || 1))
  );
  const bleed = spread + room;
  const canvasW = rect.w + bleed * 2;
  const canvasH = rect.h + bleed * 2;
  const measured = mounted && rect.w > 0 && rect.h > 0;

  return (
    <div
      ref={hostRef}
      className={`relative ${className}`}
      style={{
        overflow: "visible",
        ...style,
      }}
    >
      {measured && (
        <div
          className="pointer-events-none absolute"
          style={{
            left: -bleed,
            top: -bleed,
            width: canvasW,
            height: canvasH,
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <PulsingBorder
            colors={colors}
            colorBack={colorBack}
            speed={speed}
            roundness={roundness}
            thickness={thickness / 100}
            softness={softness / 100}
            intensity={intensity / 100}
            bloom={bloom / 100}
            spots={SPOTS}
            spotSize={(spotSize / 100) * 0.5}
            pulse={PULSE}
            smoke={SMOKE}
            smokeSize={SMOKE_SIZE}
            worldWidth={worldW}
            worldHeight={worldH}
            fit="none"
            marginLeft={marginX}
            marginRight={marginX}
            marginTop={marginY}
            marginBottom={marginY}
            scale={1}
            rotation={0}
            offsetX={0}
            offsetY={0}
            originX={0.5}
            originY={0.5}
            frame={0}
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          />
        </div>
      )}
      <div className="relative z-10 size-full">{children}</div>
    </div>
  );
}
