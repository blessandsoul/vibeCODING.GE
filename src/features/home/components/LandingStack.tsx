'use client';

import { useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import './landing-stack.css';

/* =========================================================================
   LandingStack, "#stack" tool-arsenal section.
   Ported verbatim from ainow_handoff/index.html. The chip lists, labels and
   copy are reproduced 1:1 (SEO-critical). Token swaps: text-muted → #525252,
   bg-accent/[0.04] → bg-[#7c3aed]/[0.04]. Logo URLs kept exactly as source
   (simpleicons / google favicons / iconify flags). The chip-logo fallback
   (swap failed/tiny logos to an inline sparkle) is ported from the source JS.
   ========================================================================= */

// Inline sparkle data-URL, identical to the source's fallback constant.
const SPARKLE =
  'data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%237c3aed%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M9.94%2015.5A2%202%200%200%200%208.5%2014.06l-6.13-1.58a.5.5%200%200%201%200-.96l6.13-1.58A2%202%200%200%200%209.94%208.5l1.58-6.13a.5.5%200%200%201%20.96%200L14.06%208.5A2%202%200%200%200%2015.5%209.94l6.13%201.58a.5.5%200%200%201%200%20.96l-6.13%201.58a2%202%200%200%200-1.44%201.44l-1.58%206.13a.5.5%200%200%201-.96%200z%22%2F%3E%3C%2Fsvg%3E';

const si = (slug: string) => `https://cdn.simpleicons.org/${slug}`;
const fav = (domain: string) => `https://www.google.com/s2/favicons?sz=128&domain=${domain}`;
const flag = (code: string) => `https://api.iconify.design/flag:${code}-4x3.svg`;

type Chip = { label: string; src: string; flag?: boolean; upgraded?: boolean };
type Cell = { label: string; color: string; wide?: boolean; chips: Chip[] };

// upgraded:true mirrors the source chips that already carry the inline sparkle
// (those logos had failed in the captured HTML), so the runtime fallback skips them.
const SP: Chip['upgraded'] = true;

const CELLS: Cell[] = [
  {
    label: 'LLM',
    color: '#7c3aed',
    chips: [
      { label: 'Anthropic / Claude', src: si('claude') },
      { label: 'OpenAI / ChatGPT', src: SPARKLE, upgraded: SP },
      { label: 'Google / Gemini', src: si('googlegemini') },
      { label: 'xAI / Grok', src: si('x') },
      { label: 'Meta / Llama', src: si('meta') },
      { label: 'Mistral', src: fav('mistral.ai') },
      { label: 'DeepSeek', src: si('deepseek') },
      { label: 'Alibaba / Qwen', src: si('qwen') },
      { label: 'Cohere', src: SPARKLE, upgraded: SP },
      { label: 'Perplexity', src: si('perplexity') },
      { label: 'Reka', src: fav('reka.ai') },
      { label: 'Microsoft / Phi', src: SPARKLE, upgraded: SP },
    ],
  },
  {
    label: 'Image',
    color: '#e040fb',
    chips: [
      { label: 'Midjourney', src: SPARKLE, upgraded: SP },
      { label: 'Nano Banana 2', src: si('googlegemini') },
      { label: 'Flux Pro', src: fav('blackforestlabs.ai') },
      { label: 'DALL-E 3', src: SPARKLE, upgraded: SP },
      { label: 'Ideogram', src: fav('ideogram.ai') },
      { label: 'Recraft', src: fav('recraft.ai') },
      { label: 'Stable Diffusion', src: fav('stability.ai') },
      { label: 'Higgsfield', src: fav('higgsfield.ai') },
      { label: 'Leonardo', src: fav('leonardo.ai') },
      { label: 'Firefly', src: fav('firefly.adobe.com') },
      { label: 'Imagen 4', src: si('googlegemini') },
      { label: 'Civitai', src: fav('civitai.com') },
    ],
  },
  {
    label: 'Video',
    color: '#ff6b00',
    chips: [
      { label: 'Veo 3.1', src: si('googlegemini') },
      { label: 'Kling 2', src: fav('klingai.com') },
      { label: 'Sora', src: SPARKLE, upgraded: SP },
      { label: 'Runway', src: SPARKLE, upgraded: SP },
      { label: 'Pika', src: fav('pika.art') },
      { label: 'Luma', src: fav('lumalabs.ai') },
      { label: 'Hailuo', src: fav('hailuoai.com') },
      { label: 'Hedra', src: fav('hedra.com') },
      { label: 'Vidu', src: fav('vidu.com') },
      { label: 'Wan 2.1', src: fav('wan.video') },
      { label: 'LTX', src: fav('ltx.studio') },
      { label: 'Genmo', src: fav('genmo.ai') },
    ],
  },
  {
    label: 'Voice',
    color: '#10b981',
    chips: [
      { label: 'ElevenLabs', src: si('elevenlabs') },
      { label: 'Vapi', src: fav('vapi.ai') },
      { label: 'Retell', src: fav('retellai.com') },
      { label: 'Cartesia', src: fav('cartesia.ai') },
      { label: 'PlayHT', src: fav('play.ht') },
      { label: 'OpenAI TTS', src: SPARKLE, upgraded: SP },
      { label: 'Gemini TTS', src: si('googlegemini') },
      { label: 'Hume', src: fav('hume.ai') },
      { label: 'Speechmatics', src: fav('speechmatics.com') },
      { label: 'Resemble', src: fav('resemble.ai') },
      { label: 'Coqui', src: fav('coqui.ai') },
    ],
  },
  {
    label: 'Music',
    color: '#06b6d4',
    chips: [
      { label: 'Suno v5', src: si('suno') },
      { label: 'Udio', src: fav('udio.com') },
      { label: 'Lyria 3 Pro', src: si('googlegemini') },
      { label: 'Beatoven', src: fav('beatoven.ai') },
      { label: 'Stable Audio', src: fav('stability.ai') },
      { label: 'AIVA', src: fav('aiva.ai') },
      { label: 'Mubert', src: fav('mubert.com') },
      { label: 'Soundraw', src: fav('soundraw.io') },
      { label: 'Boomy', src: fav('boomy.com') },
    ],
  },
  {
    label: 'Automation',
    color: '#f59e0b',
    chips: [
      { label: 'n8n', src: si('n8n') },
      { label: 'Make', src: si('make') },
      { label: 'Zapier', src: si('zapier') },
      { label: 'Pipedream', src: SPARKLE, upgraded: SP },
      { label: 'LangChain', src: si('langchain') },
      { label: 'LangGraph', src: si('langchain') },
      { label: 'CrewAI', src: fav('crewai.com') },
      { label: 'MCP', src: si('claude') },
      { label: 'Bardeen', src: fav('bardeen.ai') },
      { label: 'Workato', src: fav('workato.com') },
      { label: 'Power Automate', src: SPARKLE, upgraded: SP },
      { label: 'Tray.io', src: fav('tray.io') },
    ],
  },
  {
    label: 'Data · RAG',
    color: '#3b82f6',
    chips: [
      { label: 'Pinecone', src: SPARKLE, upgraded: SP },
      { label: 'Weaviate', src: fav('weaviate.io') },
      { label: 'Qdrant', src: si('qdrant') },
      { label: 'Chroma', src: fav('trychroma.com') },
      { label: 'Supabase', src: si('supabase') },
      { label: 'PostgreSQL', src: si('postgresql') },
      { label: 'Redis', src: si('redis') },
      { label: 'Milvus', src: fav('milvus.io') },
      { label: 'MongoDB', src: si('mongodb') },
      { label: 'ClickHouse', src: si('clickhouse') },
      { label: 'FAISS', src: si('meta') },
    ],
  },
  {
    label: 'Code · Languages',
    color: '#0a0a0a',
    chips: [
      { label: 'Python', src: si('python') },
      { label: 'TypeScript', src: si('typescript') },
      { label: 'Next.js', src: si('nextdotjs') },
      { label: 'Node.js', src: si('nodedotjs') },
      { label: 'Go', src: si('go') },
      { label: 'Rust', src: si('rust') },
      { label: 'SQL', src: si('mysql') },
      { label: 'Bash', src: si('gnubash') },
      { label: 'Java', src: si('openjdk') },
      { label: 'C#', src: SPARKLE, upgraded: SP },
      { label: 'PHP', src: si('php') },
      { label: 'Swift', src: si('swift') },
    ],
  },
  {
    label: 'Editing · Render',
    color: '#c026d3',
    chips: [
      { label: 'CapCut', src: SPARKLE, upgraded: SP },
      { label: 'DaVinci', src: si('davinciresolve') },
      { label: 'Premiere', src: SPARKLE, upgraded: SP },
      { label: 'After Effects', src: SPARKLE, upgraded: SP },
      { label: 'FFmpeg', src: si('ffmpeg') },
      { label: 'Remotion', src: SPARKLE, upgraded: SP },
      { label: 'Final Cut', src: SPARKLE, upgraded: SP },
      { label: 'Audacity', src: si('audacity') },
      { label: 'OBS Studio', src: si('obsstudio') },
    ],
  },
  {
    label: 'Design',
    color: '#7c3aed',
    chips: [
      { label: 'Figma', src: si('figma') },
      { label: 'Photoshop', src: SPARKLE, upgraded: SP },
      { label: 'Illustrator', src: SPARKLE, upgraded: SP },
      { label: 'Krea', src: fav('krea.ai') },
      { label: 'Magnific', src: fav('magnific.ai') },
      { label: 'Topaz', src: fav('topazlabs.com') },
      { label: 'Canva', src: SPARKLE, upgraded: SP },
      { label: 'Sketch', src: si('sketch') },
      { label: 'Framer', src: si('framer') },
      { label: 'Spline 3D', src: fav('spline.design') },
    ],
  },
  {
    label: 'Languages · ენები',
    color: '#e040fb',
    wide: true,
    chips: [
      { label: 'ქართული', src: flag('ge'), flag: true },
      { label: 'English', src: flag('gb'), flag: true },
      { label: '中文', src: flag('cn'), flag: true },
      { label: 'हिन्दी', src: flag('in'), flag: true },
      { label: 'Español', src: flag('es'), flag: true },
      { label: 'العربية', src: flag('sa'), flag: true },
      { label: 'Français', src: flag('fr'), flag: true },
      { label: 'Русский', src: flag('ru'), flag: true },
      { label: 'Português', src: flag('pt'), flag: true },
      { label: 'Deutsch', src: flag('de'), flag: true },
      { label: '日本語', src: flag('jp'), flag: true },
      { label: '한국어', src: flag('kr'), flag: true },
      { label: 'Italiano', src: flag('it'), flag: true },
      { label: 'Türkçe', src: flag('tr'), flag: true },
      { label: 'Română', src: flag('ro'), flag: true },
      { label: 'Українська', src: flag('ua'), flag: true },
      { label: 'Polski', src: flag('pl'), flag: true },
      { label: 'Nederlands', src: flag('nl'), flag: true },
    ],
  },
  {
    label: 'Cloud · Infra',
    color: '#ff6b00',
    chips: [
      { label: 'AWS', src: SPARKLE, upgraded: SP },
      { label: 'GCP', src: si('googlecloud') },
      { label: 'Azure', src: SPARKLE, upgraded: SP },
      { label: 'Cloudflare', src: si('cloudflare') },
      { label: 'Vercel', src: si('vercel') },
      { label: 'Netlify', src: si('netlify') },
      { label: 'DigitalOcean', src: si('digitalocean') },
      { label: 'Docker', src: si('docker') },
      { label: 'GitHub', src: si('github') },
      { label: 'Stripe', src: si('stripe') },
    ],
  },
];

const ENGLISH_LANGUAGE_LABELS: Record<string, string> = {
  'ქართული': 'Georgian',
  English: 'English',
  '中文': 'Chinese',
  'हिन्दी': 'Hindi',
  Español: 'Spanish',
  'العربية': 'Arabic',
  Français: 'French',
  Русский: 'Russian',
  Português: 'Portuguese',
  Deutsch: 'German',
  日本語: 'Japanese',
  한국어: 'Korean',
  Italiano: 'Italian',
  Türkçe: 'Turkish',
  Română: 'Romanian',
  Українська: 'Ukrainian',
  Polski: 'Polish',
  Nederlands: 'Dutch',
};

export function LandingStack() {
  const locale = useLocale();
  const t = useTranslations('home.stack');
  const metaPills = [t('pill1'), t('pill2'), t('pill3'), t('pill4'), t('pill5')];

  // Chip-logo cleanup, if a logo fails to load OR is a 1x1 favicon dummy,
  // swap it to the inline sparkle (ported verbatim from the source script).
  useEffect(() => {
    function fixImg(img: HTMLImageElement) {
      if (img.dataset.upgraded === '1') return;
      if (img.classList.contains('chip-flag')) return;
      img.dataset.upgraded = '1';
      img.src = SPARKLE;
    }
    function ensureLoaded(img: HTMLImageElement) {
      if (img.classList.contains('chip-flag')) return;
      if (!img.complete) {
        img.addEventListener('load', () => {
          if (img.naturalWidth <= 1 || img.naturalHeight <= 1) fixImg(img);
        });
        img.addEventListener('error', () => fixImg(img));
      } else if (img.naturalWidth <= 1 || img.naturalHeight <= 1) {
        fixImg(img);
      }
    }
    document.querySelectorAll<HTMLImageElement>('.chip-logo').forEach(ensureLoaded);
  }, []);

  return (
    <section className="py-16 md:py-24 border-y border-border/60 bg-neutral-50/40 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#7c3aed]/[0.04] blur-[120px] pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <div className="text-center mb-12">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#525252] mb-3">{t('eyebrow')}</p>
          <h3 className="font-display font-extrabold text-3xl md:text-5xl leading-[1] tracking-tight text-neutral-900">{t('heading')}</h3>
          <p className="mt-4 text-sm md:text-base text-[#525252] max-w-2xl mx-auto leading-relaxed">
            {t('desc1')}<br className="hidden md:inline" />{t('desc2')}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {metaPills.map((p) => (
              <span key={p} className="meta-pill">{p}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 max-w-6xl mx-auto">
          {CELLS.map((cell, ci) => (
            <div key={ci} className={cell.wide ? 'stack-cell stack-cell-wide' : 'stack-cell'}>
              <p className="stack-label" style={{ color: cell.color }}>{cell.label === 'Languages · ენები' ? t('languagesLabel') : cell.label}</p>
              <div className="stack-chips">
                {cell.chips.map((chip, idx) => (
                  <span key={idx} className="chip">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className={chip.flag ? 'chip-logo chip-flag' : 'chip-logo'}
                      src={chip.src}
                      width={16}
                      height={16}
                      loading="lazy"
                      alt=""
                      {...(chip.upgraded ? { 'data-upgraded': '1' } : {})}
                    />
                    {locale === 'en' && cell.label === 'Languages · ენები'
                      ? ENGLISH_LANGUAGE_LABELS[chip.label] ?? chip.label
                      : chip.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-xs font-mono uppercase tracking-[0.25em] text-[#525252]">{t('bottomCaption')}</p>
      </div>
    </section>
  );
}
