import { ImageResponse } from 'next/og';
import { getTranslations } from 'next-intl/server';
import { ogFonts } from '@/features/blog/lib/georgian-font';

export const runtime = 'nodejs';
export const alt = 'Marketing for Auto Auction Logistics, Copart, IAAI, Manheim';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // The OG renderer currently fails while shaping Persian text. Keep the page
  // itself localized and use a stable English title for its social image.
  const t = await getTranslations({ locale: locale === 'fa' ? 'en' : locale, namespace: 'servicesAuctionMarketing' });
  const heroTitle = `${t('title')} ${t('titleAccent')}`;
  const subtitle = t('eyebrow');

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
          backgroundImage:
            'linear-gradient(135deg, #0a0a14 0%, #0f0820 50%, #051218 100%)',
          padding: '72px',
          position: 'relative',
          fontFamily: '"Noto Sans Georgian", sans-serif',
        }}
      >
        {/* Glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-10%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(150,80,255,0.35) 0%, rgba(0,0,0,0) 65%)',
            filter: 'blur(40px)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            left: '-5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(40,200,220,0.28) 0%, rgba(0,0,0,0) 65%)',
            filter: 'blur(40px)',
            display: 'flex',
          }}
        />

        {/* Top: monogram badges + brand */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {['C', 'I', 'M'].map((letter, i) => (
              <div
                key={i}
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '14px',
                  background:
                    'linear-gradient(135deg, rgba(150,80,255,0.25) 0%, rgba(40,200,220,0.25) 100%)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#fff',
                  fontFamily: 'monospace',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 18px',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22d3a5',
                display: 'flex',
              }}
            />
            <span
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              aiNOW.ge
            </span>
          </div>
        </div>

        {/* Middle: hero title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10,
            maxWidth: '900px',
          }}
        >
          <span
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            {subtitle}
          </span>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: 0,
              backgroundImage:
                'linear-gradient(120deg, #ffffff 0%, #d8c4ff 50%, #b3f0ff 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {heroTitle}
          </h1>
        </div>

        {/* Bottom: brand strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 10,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '32px',
              fontSize: '20px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              letterSpacing: '0.08em',
            }}
          >
            <span>COPART</span>
            <span>·</span>
            <span>IAAI</span>
            <span>·</span>
            <span>MANHEIM</span>
          </div>
          <span
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 500,
            }}
          >
            ainow.ge/services/auction-logistics-marketing
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: ogFonts,
    },
  );
}
