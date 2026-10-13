'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const THEME_COLORS = {
  light: {
    tubes: ['#7c5cbf', '#9b6dd7', '#c084fc'],
    lights: ['#818cf8', '#a78bfa', '#e879f9', '#60a5fa'],
  },
  dark: {
    tubes: ['#a78bfa', '#c084fc', '#e879f9'],
    lights: ['#818cf8', '#c084fc', '#f472b6', '#60a5fa'],
  },
} as const;

interface TubesApp {
  tubes: {
    setColors: (colors: string[]) => void;
    setLightsColors: (colors: string[]) => void;
  };
  dispose?: () => void;
}

interface TubesCursorEffectProps {
  className?: string;
}

export function TubesCursorEffect({ className }: TubesCursorEffectProps) {
  const webglRef = useRef<HTMLCanvasElement>(null);
  const displayRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<TubesApp | null>(null);
  const [supported, setSupported] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const webgl = webglRef.current;
    const display = displayRef.current;
    if (!webgl || !display) return;

    // Check WebGL on a temp canvas
    try {
      const test = document.createElement('canvas');
      const gl = test.getContext('webgl2') || test.getContext('webgl');
      if (!gl) { setSupported(false); return; }
    } catch { setSupported(false); return; }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setSupported(false);
      return;
    }

    // Pre-create context, preserveDrawingBuffer so we can copy frames
    webgl.getContext('webgl2', { alpha: true, premultipliedAlpha: true, preserveDrawingBuffer: true });

    let disposed = false;
    let rafId = 0;

    const init = async () => {
      try {
        const mod = await import(
          /* webpackIgnore: true */
          // @ts-expect-error CDN import has no types
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        );
        const TubesCursor = mod.default || mod;
        if (disposed) return;

        const themeKey = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const colors = THEME_COLORS[themeKey];

        const app = TubesCursor(webgl, {
          tubes: {
            colors: [...colors.tubes],
            lights: {
              intensity: 200,
              colors: [...colors.lights],
            },
          },
        });
        appRef.current = app;

        // Copy WebGL frames → 2D canvas (screen blend works on 2D canvas, not WebGL)
        const ctx = display.getContext('2d');
        if (!ctx) return;

        const copyFrame = () => {
          if (disposed) return;
          if (display.width !== webgl.width) display.width = webgl.width;
          if (display.height !== webgl.height) display.height = webgl.height;
          ctx.clearRect(0, 0, display.width, display.height);
          ctx.drawImage(webgl, 0, 0);
          rafId = requestAnimationFrame(copyFrame);
        };
        rafId = requestAnimationFrame(copyFrame);
      } catch (err) {
        console.warn('[TubesCursorEffect] Failed:', err);
        setSupported(false);
      }
    };

    init();
    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      appRef.current?.dispose?.();
      appRef.current = null;
    };
  }, []);

  useEffect(() => {
    const app = appRef.current;
    if (!app) return;
    const themeKey = resolvedTheme === 'dark' ? 'dark' : 'light';
    const colors = THEME_COLORS[themeKey];
    app.tubes.setColors([...colors.tubes]);
    app.tubes.setLightsColors([...colors.lights]);
  }, [resolvedTheme]);

  if (!supported) return null;

  return (
    <>
      {/* Hidden WebGL canvas, Three.js renders here */}
      <canvas
        ref={webglRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ opacity: 0, position: 'absolute' }}
      />
      {/* Visible 2D canvas, screen blend works on 2D, not WebGL */}
      <canvas
        ref={displayRef}
        aria-hidden="true"
        className={cn('pointer-events-none', className)}
        style={{ mixBlendMode: 'screen' }}
      />
    </>
  );
}
