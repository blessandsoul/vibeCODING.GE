'use client';

import { Suspense } from 'react';
import { LandingProducts } from '@/features/home/components/LandingProducts';
import { LandingForm } from '@/features/landing/components/LandingForm';
import { Link } from '@/i18n/navigation';
// Canonical aiNOW wordmark CSS (.wordmark-3d / .wm-prefix / .wm-mark / .wm-accent)
import '@/features/home/components/landing-nav.css';

/* =========================================================================
   AicontentDemo, full-screen QR landing for /aicontent. Isolated the same
   way AistaffChat is (fixed inset-0 overlay that covers the site nav/footer)
   so a scanned visitor sees ONLY the proof: the home phones-with-video
   showcase (LandingProducts, phone #1 cycles real AI Reels/posts) plus a
   phone lead-capture (LandingForm, which auto-reads utm_content=zone from the
   sticker QR and posts to /api/lead). Opened from a scanned content sticker.
   ========================================================================= */

export const AicontentDemo = () => {
    return (
        <div className="fixed inset-0 z-120 flex flex-col overflow-y-auto bg-background font-(family-name:--font-noto-georgian)">
            {/* aiNOW signature purple glow, matches the landing aesthetic */}
            <div className="glow-orb glow-primary pointer-events-none absolute -top-40 left-1/2 h-110 w-110 -translate-x-1/2 opacity-50" />

            {/* ── Mini aiNOW header ── */}
            <header className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-border/60 bg-card/70 px-4 py-3 backdrop-blur-md">
                <Link href="/" aria-label="aiNOW, home" className="inline-flex transition-opacity hover:opacity-80">
                    <div className="wordmark-3d text-lg leading-none">
                        <span className="wm-prefix">ai</span>
                        <span className="wm-mark">NOW</span>
                        <span className="wm-accent" aria-hidden="true" />
                    </div>
                </Link>
                <span className="text-sm font-medium text-muted-foreground">AI კონტენტი</span>
            </header>

            {/* ── Content phone only (single), reuses the home showcase ── */}
            <LandingProducts single />

            {/* ── Lead capture (reads utm_content = zone z1..z4 from the URL) ── */}
            <Suspense fallback={null}>
                <LandingForm />
            </Suspense>
        </div>
    );
};
