'use client';

import { useRef, useEffect, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

const SHADER_CORE = `
  precision mediump float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform float offset;

  float random(vec2 pos) {
    return fract(sin(dot(pos, vec2(12.9898, 78.233))) * 43758.5453);
  }

  float noise(vec2 pos) {
    vec2 i = floor(pos);
    vec2 f = fract(pos);
    float a = random(i + vec2(0.0, 0.0));
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 pos) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(20.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 8; i++) {
      v += a * noise(pos);
      pos = rot * pos * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }
`;

// Original: blue → magenta → warm yellow (for primary CTA)
const SHADER_PRIMARY = `
  ${SHADER_CORE}
  void main(void) {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    uv *= 0.5;
    vec2 q = vec2(fbm(uv + 0.20 * iTime), fbm(uv + vec2(5.0, 1.0)));
    vec2 r = vec2(
      fbm(uv + 3.0 * q + vec2(1.2, 3.2) + 0.2 * iTime),
      fbm(uv + 3.0 * q + vec2(8.8, 2.8) + 0.2 * iTime)
    );
    float f = fbm(uv + r);
    vec3 color = mix(vec3(0.0), vec3(0.0, 0.0, 1.0), clamp((f * f) * 6.0, 0.0, 5.0));
    color = mix(color, vec3(1.0, 0.0, 1.0), clamp(length(q) * length(q), 0.0, 1.0));
    color = mix(color, vec3(1.0, 1.0, 0.8), clamp(length(r.x), 0.0, 0.1));
    color = vec3(0.2, 0.0, 0.15) + (f * f * f + 0.6 * f * f + 0.6 * f) * color;
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Secondary: teal → cyan → warm white
const SHADER_SECONDARY = `
  ${SHADER_CORE}
  void main(void) {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    uv *= 0.5;
    vec2 q = vec2(fbm(uv + 0.20 * iTime), fbm(uv + vec2(5.0, 1.0)));
    vec2 r = vec2(
      fbm(uv + 3.0 * q + vec2(1.2, 3.2) + 0.2 * iTime),
      fbm(uv + 3.0 * q + vec2(8.8, 2.8) + 0.2 * iTime)
    );
    float f = fbm(uv + r);
    vec3 color = mix(vec3(0.0), vec3(0.0, 0.6, 0.8), clamp((f * f) * 6.0, 0.0, 5.0));
    color = mix(color, vec3(0.2, 0.9, 1.0), clamp(length(q) * length(q), 0.0, 1.0));
    color = mix(color, vec3(0.9, 1.0, 0.95), clamp(length(r.x), 0.0, 0.1));
    color = vec3(0.0, 0.1, 0.12) + (f * f * f + 0.6 * f * f + 0.6 * f) * color;
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Warm: amber → orange → golden
const SHADER_WARM = `
  ${SHADER_CORE}
  void main(void) {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    uv *= 0.5;
    vec2 q = vec2(fbm(uv + 0.20 * iTime), fbm(uv + vec2(5.0, 1.0)));
    vec2 r = vec2(
      fbm(uv + 3.0 * q + vec2(1.2, 3.2) + 0.2 * iTime),
      fbm(uv + 3.0 * q + vec2(8.8, 2.8) + 0.2 * iTime)
    );
    float f = fbm(uv + r);
    vec3 color = mix(vec3(0.0), vec3(0.8, 0.3, 0.0), clamp((f * f) * 6.0, 0.0, 5.0));
    color = mix(color, vec3(1.0, 0.6, 0.1), clamp(length(q) * length(q), 0.0, 1.0));
    color = mix(color, vec3(1.0, 0.95, 0.8), clamp(length(r.x), 0.0, 0.1));
    color = vec3(0.15, 0.05, 0.0) + (f * f * f + 0.6 * f * f + 0.6 * f) * color;
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Emerald: green → teal → mint
const SHADER_EMERALD = `
  ${SHADER_CORE}
  void main(void) {
    vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
    uv *= 0.5;
    vec2 q = vec2(fbm(uv + 0.20 * iTime), fbm(uv + vec2(5.0, 1.0)));
    vec2 r = vec2(
      fbm(uv + 3.0 * q + vec2(1.2, 3.2) + 0.2 * iTime),
      fbm(uv + 3.0 * q + vec2(8.8, 2.8) + 0.2 * iTime)
    );
    float f = fbm(uv + r);
    vec3 color = mix(vec3(0.0), vec3(0.0, 0.6, 0.3), clamp((f * f) * 6.0, 0.0, 5.0));
    color = mix(color, vec3(0.1, 0.9, 0.5), clamp(length(q) * length(q), 0.0, 1.0));
    color = mix(color, vec3(0.8, 1.0, 0.9), clamp(length(r.x), 0.0, 0.1));
    color = vec3(0.0, 0.1, 0.05) + (f * f * f + 0.6 * f * f + 0.6 * f) * color;
    gl_FragColor = vec4(color, 1.0);
  }
`;

const SHADERS = {
  primary: SHADER_PRIMARY,
  secondary: SHADER_SECONDARY,
  warm: SHADER_WARM,
  emerald: SHADER_EMERALD,
} as const;

type SmokyButtonProps = {
  children: ReactNode;
  variant?: keyof typeof SHADERS;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export const SmokyButton = ({
  children,
  variant = 'primary',
  href,
  className,
  onClick,
}: SmokyButtonProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let destroyed = false;
    let removeResize: (() => void) | undefined;

    const init = async () => {
      const { default: FragmentCanvas } = await import('fragment-canvas');
      if (destroyed || !canvas) return;

      const resize = () => {
        const parent = canvas.parentElement;
        if (!parent) return;
        canvas.width = parent.clientWidth * window.devicePixelRatio;
        canvas.height = parent.clientHeight * window.devicePixelRatio;
      };
      resize();

      new FragmentCanvas(canvas, {
        fragmentShader: SHADERS[variant],
        uniforms: {
          offset: (gl, location, time) =>
            gl.uniform1f(location, Math.cos(time / 1000) * 1.0),
        },
      });

      window.addEventListener('resize', resize);
      removeResize = () => window.removeEventListener('resize', resize);
    };

    init();

    return () => {
      destroyed = true;
      removeResize?.();
    };
  }, [variant]);

  const Tag = href ? 'a' : 'button';
  const linkProps = href ? { href } : {};

  return (
    <Tag
      {...linkProps}
      type={href ? undefined : 'button'}
      onClick={onClick}
      className={cn(
        'group relative inline-flex overflow-hidden rounded-2xl text-sm font-semibold sm:text-base',
        className
      )}
    >
      {/* WebGL smoke canvas, fills entire button */}
      <div className="absolute inset-0 -z-1">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full transition duration-300 group-hover:scale-[1.15]"
        />
      </div>

      {/* Content, no dark overlay, just text on gradient */}
      <div className="px-5 py-2.5 transition duration-300 sm:px-8 sm:py-3">
        <span className="flex items-center text-white drop-shadow-md transition duration-300 group-hover:scale-[1.03]">
          {children}
        </span>
      </div>
    </Tag>
  );
};
