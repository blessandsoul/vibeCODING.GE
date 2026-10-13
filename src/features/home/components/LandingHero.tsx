'use client';

import { memo, useEffect, useRef, useState, type CSSProperties } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import './landing-hero.css';

/* Hero, ported 1:1 from ainow_handoff/index.html (#hero section).
   Copy is i18n-ized via the home.hero namespace. The typewriter word list and
   its prefill are a single comma-joined string per locale. */

/* aiNOW-style wordmark (ai + NOW + diagonal accent bars) */
function Wordmark({ prefix, mark }: { prefix: string; mark: string }) {
  return (
    <span className="wordmark-3d">
      <span className="wm-prefix">{prefix}</span>
      <span className="wm-mark">{mark}</span>
      <span className="wm-accent" aria-hidden="true" />
    </span>
  );
}

/* Hero-lead text style (stable reference so the memoized SplitText below never
   re-renders and the imperative split is never clobbered). */
const HERO_LEAD_STYLE: CSSProperties = {
  fontFamily: "var(--font-noto-georgian), 'Noto Sans Georgian', sans-serif",
  fontWeight: 300,
  fontStyle: 'normal',
  color: '#0a0a0a',
  background: 'none',
  WebkitTextFillColor: '#0a0a0a',
  display: 'block',
  letterSpacing: '-0.01em',
};

/* Letter-by-letter rise reveal, ports the handoff's split() verbatim
   (ainow_handoff/index.html, script #1). SSR renders the plain text; on mount
   we split it into .split-char spans via createElement, exactly like the
   handoff's DOMContentLoaded JS, so the CSS `split-rise` fires in-view. */
const SplitText = memo(function SplitText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root || root.querySelector('.split-char')) return; // already split

    const split = (node: ChildNode) => {
      if (node.nodeType === 3) {
        const value = node.nodeValue ?? '';
        const frag = document.createDocumentFragment();
        const tokens = value.split(/(\s+)/);
        for (const tok of tokens) {
          if (!tok) continue;
          if (/^\s+$/.test(tok)) {
            frag.appendChild(document.createTextNode(' '));
          } else {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'split-word';
            for (const ch of tok) {
              const s = document.createElement('span');
              s.className = 'split-char';
              s.textContent = ch;
              wordSpan.appendChild(s);
            }
            frag.appendChild(wordSpan);
          }
        }
        node.parentNode?.replaceChild(frag, node);
      } else if (node.nodeType === 1 && (node as Element).tagName !== 'BR') {
        Array.from(node.childNodes).forEach(split);
      }
    };

    Array.from(root.childNodes).forEach(split);
    root.querySelectorAll<HTMLElement>('.split-char').forEach((c, i) => {
      c.style.animationDelay = i * 22 + 'ms';
    });
  }, [text]);

  return (
    <span ref={ref} className={className} style={HERO_LEAD_STYLE}>
      {text}
    </span>
  );
});

export function LandingHero() {
  const t = useTranslations('home.hero');
  const typewriterWords = t('typewriterWords');
  const typewriterPrefill = t('typewriterPrefill');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const [heroScrolled, setHeroScrolled] = useState(false);
  // When true, the always-on WebGL shader is skipped and a static CSS gradient
  // is shown instead (phones/tablets, low-power, reduced-motion, or after a
  // GPU context loss). See the WebGL effect below for the rationale.
  const [staticBg, setStaticBg] = useState(false);

  // Big hero wordmark fades out on scroll (crossfade with nav logo)
  useEffect(() => {
    const onScroll = () => setHeroScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Typewriter cycler (ported from source)
  useEffect(() => {
    const el = typewriterRef.current;
    if (!el) return;
    // Split on ASCII comma plus CJK 、 and Arabic ،, machine translation
    // localizes the list separators (zh/fa), which used to collapse the whole
    // list into one giant "word".
    const words = (el.dataset.words || '')
      .split(/[,、،]/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (!words.length) return;
    const textEl = el.querySelector<HTMLElement>('.tw-text');
    if (!textEl) return;

    const prefill = el.dataset.prefill;
    let startIdx = 0;
    if (prefill && words.includes(prefill)) {
      startIdx = words.indexOf(prefill);
      textEl.textContent = prefill;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const measureMaxWidth = () => {
      let max = 0;
      const orig = textEl.textContent;
      words.forEach((w) => {
        textEl.textContent = w;
        const width = textEl.getBoundingClientRect().width;
        if (width > max) max = width;
      });
      textEl.textContent = orig;
      return max;
    };

    const applyMaxWidth = () => {
      document.fonts.ready.then(() => {
        if (cancelled) return;
        const maxW = measureMaxWidth();
        const caret = el.querySelector<HTMLElement>('.tw-caret');
        const caretW = caret ? caret.getBoundingClientRect().width + 2 : 8;
        el.style.minWidth = `${Math.ceil(maxW + caretW)}px`;
      });
    };

    const onResize = () => {
      el.style.minWidth = '';
      applyMaxWidth();
    };
    applyMaxWidth();
    window.addEventListener('resize', onResize);

    const TYPE_MS = 80;
    const DELETE_MS = 40;
    const PAUSE_END = 1800;
    const PAUSE_START = 240;
    let wi = startIdx;
    let ci = prefill ? prefill.length : 0;
    let typing = !prefill;

    const tick = () => {
      if (cancelled) return;
      const word = words[wi];
      if (typing) {
        ci += 1;
        textEl.textContent = word.slice(0, ci);
        if (ci >= word.length) {
          typing = false;
          timer = setTimeout(tick, PAUSE_END);
          return;
        }
        timer = setTimeout(tick, TYPE_MS);
      } else {
        ci -= 1;
        textEl.textContent = word.slice(0, ci);
        if (ci <= 0) {
          typing = true;
          wi = (wi + 1) % words.length;
          timer = setTimeout(tick, PAUSE_START);
          return;
        }
        timer = setTimeout(tick, DELETE_MS);
      }
    };
    timer = setTimeout(tick, PAUSE_END);

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Grainient WebGL2 animated gradient background (ported from source)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Phones/tablets, low-power and reduced-motion get a static CSS gradient
    // instead of the always-on WebGL shader. iOS Safari & Chrome both run on
    // WebKit and share strict per-tab GPU-memory / WebGL-context limits; on
    // older devices a rotation reallocates this canvas at high DPR and trips
    // webglcontextlost, which broke the whole page. The static fallback is
    // visually near-identical at 0.42 opacity.
    const mq = (q: string) =>
      typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia(q).matches;
    if (
      mq('(max-width: 900px)') ||
      mq('(pointer: coarse)') ||
      mq('(prefers-reduced-motion: reduce)')
    ) {
      setStaticBg(true);
      return;
    }

    const gl = canvas.getContext('webgl2', {
      antialias: false,
      premultipliedAlpha: false,
    });
    if (!gl) {
      console.warn('WebGL2 not supported - grainient skipped');
      return;
    }

    const PARAMS = {
      color1: [0xff / 255, 0x9f / 255, 0xfc / 255], // #FF9FFC
      color2: [0x52 / 255, 0x27 / 255, 0xff / 255], // #5227FF
      color3: [0xb4 / 255, 0x97 / 255, 0xcf / 255], // #B497CF
      timeSpeed: 0.25,
      colorBalance: 0,
      warpStrength: 1,
      warpFrequency: 5,
      warpSpeed: 2,
      warpAmplitude: 50,
      blendAngle: 0,
      blendSoftness: 0.05,
      rotationAmount: 500,
      noiseScale: 2,
      grainAmount: 0.1,
      grainScale: 2,
      grainAnimated: 0,
      contrast: 1.5,
      gamma: 1,
      saturation: 1,
      centerX: 0,
      centerY: 0,
      zoom: 0.9,
    };

    const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

    const FRAG = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);
  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;
  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);
  vec3 colLav=uColor1; vec3 colOrg=uColor2; vec3 colDark=uColor3;
  float b=uColorBalance; float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s; float edge1=0.2-b+s;
  float v0=0.5-b+s; float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));
  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;
  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  o=vec4(col,1.0);
}
void main(){vec4 o=vec4(0.0); mainImage(o,gl_FragCoord.xy); fragColor=o;}`;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    // Fullscreen triangle
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const posLoc = gl.getAttribLocation(prog, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const U: Record<string, WebGLUniformLocation | null> = {};
    [
      'iResolution', 'iTime', 'uTimeSpeed', 'uColorBalance', 'uWarpStrength',
      'uWarpFrequency', 'uWarpSpeed', 'uWarpAmplitude', 'uBlendAngle',
      'uBlendSoftness', 'uRotationAmount', 'uNoiseScale', 'uGrainAmount',
      'uGrainScale', 'uGrainAnimated', 'uContrast', 'uGamma', 'uSaturation',
      'uCenterOffset', 'uZoom', 'uColor1', 'uColor2', 'uColor3',
    ].forEach((n) => {
      U[n] = gl.getUniformLocation(prog, n);
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let raf = 0;
    let cancelled = false;
    let running = false;
    const t0 = performance.now();
    const render = () => {
      if (cancelled || gl.isContextLost()) {
        running = false;
        return;
      }
      const t = (performance.now() - t0) / 1000;
      gl.uniform2f(U.iResolution, canvas.width, canvas.height);
      gl.uniform1f(U.iTime, t);
      gl.uniform1f(U.uTimeSpeed, PARAMS.timeSpeed);
      gl.uniform1f(U.uColorBalance, PARAMS.colorBalance);
      gl.uniform1f(U.uWarpStrength, PARAMS.warpStrength);
      gl.uniform1f(U.uWarpFrequency, PARAMS.warpFrequency);
      gl.uniform1f(U.uWarpSpeed, PARAMS.warpSpeed);
      gl.uniform1f(U.uWarpAmplitude, PARAMS.warpAmplitude);
      gl.uniform1f(U.uBlendAngle, PARAMS.blendAngle);
      gl.uniform1f(U.uBlendSoftness, PARAMS.blendSoftness);
      gl.uniform1f(U.uRotationAmount, PARAMS.rotationAmount);
      gl.uniform1f(U.uNoiseScale, PARAMS.noiseScale);
      gl.uniform1f(U.uGrainAmount, PARAMS.grainAmount);
      gl.uniform1f(U.uGrainScale, PARAMS.grainScale);
      gl.uniform1f(U.uGrainAnimated, PARAMS.grainAnimated);
      gl.uniform1f(U.uContrast, PARAMS.contrast);
      gl.uniform1f(U.uGamma, PARAMS.gamma);
      gl.uniform1f(U.uSaturation, PARAMS.saturation);
      gl.uniform2f(U.uCenterOffset, PARAMS.centerX, PARAMS.centerY);
      gl.uniform1f(U.uZoom, PARAMS.zoom);
      gl.uniform3fv(U.uColor1, PARAMS.color1);
      gl.uniform3fv(U.uColor2, PARAMS.color2);
      gl.uniform3fv(U.uColor3, PARAMS.color3);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(render);
    };

    const start = () => {
      if (running || cancelled || gl.isContextLost()) return;
      running = true;
      raf = requestAnimationFrame(render);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // If the GPU context is lost (older iOS under memory pressure, e.g. after a
    // rotation), stop the loop and fall back to the static gradient instead of
    // hammering a dead context every frame, the bug that broke the page.
    const onContextLost = (e: Event) => {
      e.preventDefault();
      cancelled = true;
      stop();
      setStaticBg(true);
    };
    canvas.addEventListener('webglcontextlost', onContextLost as EventListener, false);

    // Pause when the tab is backgrounded or the hero scrolls out of view -
    // frees GPU/battery and keeps memory headroom on weak devices.
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => {
          const visible = entries.some((en) => en.isIntersecting);
          if (visible && !document.hidden) start();
          else stop();
        },
        { threshold: 0 },
      );
      io.observe(canvas);
    } else {
      start();
    }

    return () => {
      cancelled = true;
      stop();
      canvas.removeEventListener('webglcontextlost', onContextLost as EventListener);
      document.removeEventListener('visibilitychange', onVisibility);
      io?.disconnect();
      window.removeEventListener('resize', resize);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <section
      id="hero"
      className="pt-24 md:pt-32 pb-10 md:pb-12 px-6 relative overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        id="grainient-canvas"
        className={cn('grainient-canvas', staticBg && 'grainient-canvas--static')}
      />
      <div className="grainient-fade" />

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        {/* 3D wordmark + brand tagline (from the business card: "AI რომელიც მუშაობს") */}
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <div
            className={cn(
              'wordmark-3d hero-wordmark text-[clamp(3rem,9vw,7.5rem)] leading-none',
              heroScrolled && 'scrolled',
            )}
          >
            <span className="wm-prefix">ai</span>
            <span className="wm-mark">NOW</span>
            <span className="wm-accent" aria-hidden="true" />
          </div>
          <div className={cn('hero-tagline', heroScrolled && 'scrolled')}>
            <span className="ht-text">{t('taglinePrefix')} <span className="ht-works">{t('taglineWorks')}</span></span>
            <span className="ht-rule" aria-hidden="true" />
          </div>
        </div>

        <h1
          data-split-text="1"
          className="leading-[1.15] tracking-tight text-[clamp(1.75rem,4vw,3.5rem)] text-neutral-900"
        >
          <SplitText className="hero-lead" text={t('lead')} />
          <span
            ref={typewriterRef}
            className="typewriter"
            data-words={typewriterWords}
            data-prefill={typewriterPrefill}
            style={{
              fontFamily:
                'var(--font-iai-ui)',
              color: '#7c3aed',
              WebkitTextFillColor: '#7c3aed',
            }}
          >
            <span className="tw-text">{typewriterPrefill}</span>
            <span className="tw-caret">|</span>
          </span>
        </h1>

        <div className="hero-extras">
          <div className="slogan-bar mt-10 mx-auto">
            <span className="slogan-pill slogan-content">
              <Wordmark prefix="ai" mark="CONTENT" /> {t('sloganCreates')}
            </span>
            <span className="slogan-sep" aria-hidden="true" />
            <span className="slogan-pill slogan-ads">
              <Wordmark prefix="ai" mark="ADS" /> {t('sloganAds')}
            </span>
            <span className="slogan-sep" aria-hidden="true" />
            <span className="slogan-pill slogan-staff">
              <Wordmark prefix="ai" mark="STAFF" /> {t('sloganSells')}
            </span>
            <span className="slogan-sep" aria-hidden="true" />
            <span className="slogan-pill slogan-iai">
              <Wordmark prefix="i" mark="AI" /> {t('sloganManages')}
            </span>
            <span className="slogan-sep slogan-sep-strong" aria-hidden="true" />
            <span className="slogan-pill slogan-together">
              {t('sloganTogether')} <Wordmark prefix="ai" mark="NOW" />
            </span>
          </div>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Link href="/projects" className="btn-primary w-full justify-center sm:w-auto">
              <span>{t('ctaResults')}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <a href="#cta" className="btn-ghost w-full justify-center sm:w-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>{t('ctaCall')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
