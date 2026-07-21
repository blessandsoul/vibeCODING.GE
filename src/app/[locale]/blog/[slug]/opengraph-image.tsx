import { ImageResponse } from 'next/og';

import { SITE } from '@/config/site';
import { getPost } from '@/features/blog/lib/blog';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getPost(slug, locale);
  const title = post?.title ?? `${SITE.wordmark.prefix}${SITE.wordmark.mark}`;
  const cluster = post?.cluster ?? SITE.seo.serviceType;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '62px 72px',
        background: `radial-gradient(circle at 12% 18%, ${SITE.brandHex}44 0, transparent 42%), #fbfcfc`,
        color: '#111827',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', fontWeight: 900, fontSize: 44 }}>
          <span style={{ color: '#7c3aed', fontFamily: 'monospace' }}>ai</span>
          <span style={{ color: SITE.brandHex }}>{SITE.wordmark.mark}</span>
        </div>
        <div style={{ display: 'flex', padding: '10px 18px', borderRadius: 999, border: `2px solid ${SITE.brandHex}66`, color: '#344054', fontSize: 22 }}>
          {cluster}
        </div>
      </div>
      <div style={{ display: 'flex', maxWidth: 1020, fontSize: title.length > 75 ? 54 : 66, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.04em' }}>
        {title}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#475467', fontSize: 23 }}>
        <span>{SITE.domain}</span>
        <span>aiNOW</span>
      </div>
    </div>,
    size,
  );
}
