import { ImageResponse } from 'next/og';
import { ogFonts } from '@/features/blog/lib/georgian-font';

export const runtime = 'nodejs';

// Branded OG / cover generator. Shared by blog covers (no fetched photo) and any
// ?title= share card. Visual matches the service OG cards (createServiceOgImage)
// so the whole site speaks one design language. Params: ?title= &date= &tags=
export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const title = (searchParams.get('title')?.slice(0, 120) || 'aiNOW').trim();
        const date = searchParams.get('date') || '';
        const tags = (searchParams.get('tags')?.split(',').map(t => t.trim()).filter(Boolean)) || [];
        // The current OG renderer cannot shape Arabic/Persian text with the
        // bundled font. Render a branded Latin card instead of a broken image;
        // the article's HTML title and metadata remain localized.
        const unsupportedScript = /[\u0600-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/u;
        const imageTitle = unsupportedScript.test(title) ? 'aiNOW Insights' : title;
        const imageTags = tags.filter((tag) => !unsupportedScript.test(tag));
        const imageDate = unsupportedScript.test(date) ? '' : date;
        const eyebrow = (imageTags[0] || 'aiNOW Insights').toUpperCase();
        const footerBadges = imageTags.slice(1, 4);

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
                    {/* Ambient orbs */}
                    <div style={{ position: 'absolute', top: '-15%', right: '-10%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(150,80,255,0.35) 0%, rgba(0,0,0,0) 65%)', filter: 'blur(40px)', display: 'flex' }} />
                    <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(40,200,220,0.28) 0%, rgba(0,0,0,0) 65%)', filter: 'blur(40px)', display: 'flex' }} />

                    {/* Top row: brand pill */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 10 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 18px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '999px', background: 'rgba(255,255,255,0.04)' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22d3a5', display: 'flex' }} />
                            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '0.08em' }}>aiNOW.ge</span>
                        </div>
                    </div>

                    {/* Title block */}
                    <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10, maxWidth: '1000px' }}>
                        <span style={{ fontSize: '20px', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}>
                            {eyebrow}
                        </span>
                        <h1 style={{ fontSize: '72px', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.02em', margin: 0, backgroundImage: 'linear-gradient(120deg, #ffffff 0%, #d8c4ff 50%, #b3f0ff 100%)', backgroundClip: 'text', color: 'transparent' }}>
                            {imageTitle}
                        </h1>
                    </div>

                    {/* Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
                        {footerBadges.length > 0 ? (
                            <div style={{ display: 'flex', gap: '24px', fontSize: '20px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.06em' }}>
                                {footerBadges.map((b, i) => (
                                    <span key={i} style={{ display: 'flex' }}>{i > 0 ? `· ${b}` : b}</span>
                                ))}
                            </div>
                        ) : (
                            <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.06em' }}>
                                AI Agency in Georgia · aiNOW
                            </span>
                        )}
                        <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>
                            {imageDate || 'ainow.ge'}
                        </span>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630,
                fonts: ogFonts,
            },
        );
    } catch (e: unknown) {
        const message = e instanceof Error ? e.message : 'unknown error';
        console.log(`OG render failed: ${message}`);
        return new Response('Failed to generate the image', { status: 500 });
    }
}
