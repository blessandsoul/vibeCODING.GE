'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { CLINIC_PATH } from '@/features/clinics/clinic-bot';
import { NICHE_LANDING_PATHS } from '@/features/niches/paths';
import { isLandingCloneClientPreview } from '@/lib/landing-clone-preview';

const INVOICE_ROUTE = /(^|\/)invoices(?:\/|$)/;

/* Site-wide aiSTAFF chat bubble. Hidden on the dedicated /aistaff QR demo,
   which renders its own full-screen chat, a floating bubble there would be a
   confusing second chat entry point. This is mounted in the root layout
   OUTSIDE NextIntlClientProvider, so we use next/navigation's usePathname
   (no intl context). It returns the full, locale-prefixed path, e.g.
   "/aistaff" (ka default) or "/en/aistaff", so endsWith covers all locales.

   Clinic landing: renders its own native inline demo chat (ClinicChatDemo),
   so the default bubble hides there too: one chat entry point per page. */
export function AistaffWidget() {
    const pathname = usePathname();
    if (isLandingCloneClientPreview()) return null;
    if (pathname?.includes('/admin')) return null;
    if (pathname?.includes('/questionnaires/')) return null;
    if (INVOICE_ROUTE.test(pathname ?? '')) return null;
    if (pathname?.endsWith('/aistaff')) return null;
    if (pathname?.includes(CLINIC_PATH)) return null;
    // Every niche landing renders its own inline demo, so hide the bubble there
    // too (one chat entry point per page). Explicit list, not a blunt
    // /ai-chatbot- prefix, so ai-chatbot-development-georgia keeps its bubble.
    if (NICHE_LANDING_PATHS.some((p) => pathname?.includes(p))) return null;

    return (
        <Script
            src="https://aistaff.ge/widget.js?v=20260816-1"
            data-bot-id="5044f2f0-ab9b-417f-83cc-cc5c633bb0d5"
            strategy="afterInteractive"
        />
    );
}
