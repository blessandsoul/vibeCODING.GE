// Shared OG image factory for service pages.
// Each service page wires up its own opengraph-image.tsx with a one-liner call.

import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { ogFonts } from '@/features/blog/lib/georgian-font';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png' as const;

type CreateOptions = {
  namespace: string;
  /** Optional bottom-strip badges (e.g. brand list). Falls back to brand only. */
  badges?: string[];
  /** Brand color theme, defaults to purple+cyan. */
  theme?: 'purple-cyan' | 'amber-orange' | 'emerald-blue';
};

const THEMES: Record<NonNullable<CreateOptions['theme']>, { orb1: string; orb2: string; titleGrad: string }> = {
  'purple-cyan': {
    orb1: 'radial-gradient(circle, rgba(150,80,255,0.35) 0%, rgba(0,0,0,0) 65%)',
    orb2: 'radial-gradient(circle, rgba(40,200,220,0.28) 0%, rgba(0,0,0,0) 65%)',
    titleGrad: 'linear-gradient(120deg, #ffffff 0%, #d8c4ff 50%, #b3f0ff 100%)',
  },
  'amber-orange': {
    orb1: 'radial-gradient(circle, rgba(255,180,80,0.35) 0%, rgba(0,0,0,0) 65%)',
    orb2: 'radial-gradient(circle, rgba(255,90,60,0.30) 0%, rgba(0,0,0,0) 65%)',
    titleGrad: 'linear-gradient(120deg, #ffffff 0%, #ffdba8 50%, #ffb3a3 100%)',
  },
  'emerald-blue': {
    orb1: 'radial-gradient(circle, rgba(60,220,160,0.35) 0%, rgba(0,0,0,0) 65%)',
    orb2: 'radial-gradient(circle, rgba(70,140,255,0.30) 0%, rgba(0,0,0,0) 65%)',
    titleGrad: 'linear-gradient(120deg, #ffffff 0%, #b8f5d4 50%, #b3d0ff 100%)',
  },
};

function serviceOgLocale(locale: string): string {
  // Satori currently fails on the Persian glyph shaping used in these images.
  // Keep the page localized; use the existing English copy for its OG image.
  return locale === 'fa' ? 'en' : locale;
}

export function createServiceOgImage({ namespace, badges, theme = 'purple-cyan' }: CreateOptions) {
  return async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale: serviceOgLocale(locale), namespace });
    const heroTitle = `${t('title')} ${t('titleAccent')}`;
    const subtitle = t('eyebrow');
    const palette = THEMES[theme];

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#08080d',
            backgroundImage: 'linear-gradient(135deg, #0a0a14 0%, #0f0820 50%, #051218 100%)',
            padding: '72px',
            position: 'relative',
            fontFamily: '"Noto Sans Georgian", sans-serif',
          }}
        >
          <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: '700px', height: '700px', borderRadius: '50%', background: palette.orb1, filter: 'blur(40px)', display: 'flex' }} />
          <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: palette.orb2, filter: 'blur(40px)', display: 'flex' }} />

          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 18px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', background: 'rgba(255,255,255,0.04)' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22d3a5', display: 'flex' }} />
              <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '0.08em' }}>aiNOW.ge</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10, maxWidth: '1000px' }}>
            <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>
              {subtitle}
            </span>
            <h1 style={{ fontSize: '76px', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0, backgroundImage: palette.titleGrad, backgroundClip: 'text', color: 'transparent' }}>
              {heroTitle}
            </h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
            {badges && badges.length > 0 ? (
              <div style={{ display: 'flex', gap: '24px', fontSize: '20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.08em' }}>
                {badges.map((b, i) => (
                  <span key={i} style={{ display: 'flex' }}>{i > 0 ? `· ${b}` : b}</span>
                ))}
              </div>
            ) : (
              <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.08em' }}>
                AI Agency in Georgia · aiNOW
              </span>
            )}
            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
              ainow.ge
            </span>
          </div>
        </div>
      ),
      {
        ...ogSize,
        fonts: ogFonts,
      },
    );
  };
}
