'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PhoneGateModal } from './PhoneGateModal';
import { motion } from 'framer-motion';
import { Ico } from '@/components/common/Ico';
import { Link } from '@/i18n/navigation';
// Canonical aiNOW wordmark CSS (.wordmark-3d / .wm-prefix / .wm-mark / .wm-accent)
import '@/features/home/components/landing-nav.css';

/* =========================================================================
   AistaffChat, full-screen, mobile-first persona picker for the QR landing
   (/aistaff). Clicking a persona card opens the aiSTAFF.ge embedded widget
   for that persona's bot. The overlay is fixed inset-0 so it covers the
   site nav/footer, the page is opened from a scanned QR code.
   ========================================================================= */

/* --------------------------------------------------------------------------
   Bot-id map, real per-persona ids (aiSTAFF.ge).
   -------------------------------------------------------------------------- */
const PERSONA_BOT_IDS: Record<string, string> = {
    seller:     'b0597706-60f3-11f1-86cf-1a1095403e0f', // ნიკა
    consultant: 'b059751d-60f3-11f1-86cf-1a1095403e0f', // დათო
    comedian:   'b059769a-60f3-11f1-86cf-1a1095403e0f', // ბუბა (Humorist)
    football:   'b05975b1-60f3-11f1-86cf-1a1095403e0f', // ლაშა
    health:     'b0597633-60f3-11f1-86cf-1a1095403e0f', // ანო
    chef:       'b0597431-60f3-11f1-86cf-1a1095403e0f', // კესო
};

const PERSONAS: { key: string; Icon: string }[] = [
    { key: 'seller',     Icon: 'solar:cart-large-bold-duotone'   },
    { key: 'consultant', Icon: 'solar:case-bold-duotone'         },
    { key: 'comedian',   Icon: 'solar:smile-circle-bold-duotone' },
    { key: 'football',   Icon: 'solar:cup-star-bold-duotone'     },
    { key: 'health',     Icon: 'solar:heart-pulse-bold-duotone'  },
    { key: 'chef',       Icon: 'solar:chef-hat-bold-duotone'     },
];

const WIDGET_SCRIPT_ID  = 'aistaff-widget-script';
const WIDGET_STYLE_ID   = 'aistaff-widget-hide-bubble';
const PHONE_KEY         = 'aistaff:lead-phone';

/* --------------------------------------------------------------------------
   Global type for the widget instance exposed by widget.js
   -------------------------------------------------------------------------- */
declare global {
    interface Window {
        __WIDGET_INSTANCE__?: { botId: string; destroy(): void };
    }
}

export const AistaffChat = () => {
    const t  = useTranslations('aistaff');
    const tc = useTranslations('chatDemo');

    // Track the persona key that is currently mounted so we know a teardown
    // is needed on every subsequent card click.
    const mountedPersonaRef = useRef<string | null>(null);

    // Phone-gate state, persisted in sessionStorage so it survives navigation
    // within the tab but resets when the tab is closed.
    const [hasPhone, setHasPhone]           = useState(false);
    const [modalOpen, setModalOpen]         = useState(false);
    const [pendingPersona, setPendingPersona] = useState<string | null>(null);

    // SSR-safe: only read sessionStorage inside an effect.
    useEffect(() => {
        try {
            if (sessionStorage.getItem(PHONE_KEY)) setHasPhone(true);
        } catch {
            // Ignore (private-mode or blocked storage).
        }
    }, []);

    // Lock body scroll while the overlay is mounted.
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    // Inject the hide-bubble style BEFORE any widget script so the vendor's
    // launcher button never flashes at the bottom-right.  Remove on unmount.
    useEffect(() => {
        const style = document.createElement('style');
        style.id        = WIDGET_STYLE_ID;
        style.textContent = '#widget-chat-bubble { display: none !important; }';
        document.head.appendChild(style);

        return () => {
            document.getElementById(WIDGET_STYLE_ID)?.remove();
        };
    }, []);

    // Full cleanup on page unmount: destroy instance, remove script + style.
    useEffect(() => {
        return () => {
            window.__WIDGET_INSTANCE__?.destroy();
            document.getElementById(WIDGET_SCRIPT_ID)?.remove();
            mountedPersonaRef.current = null;
        };
    }, []);

    // Gate handler, shows the phone modal if we don't yet have a number,
    // otherwise opens the widget directly (phone already in sessionStorage).
    const handleCardClick = (key: string) => {
        if (hasPhone) {
            openWidget(key);
            return;
        }
        setPendingPersona(key);
        setModalOpen(true);
    };

    // Called by PhoneGateModal on a successful lead submission.
    const handleGateSuccess = (phone: string) => {
        try {
            sessionStorage.setItem(PHONE_KEY, phone);
        } catch {
            // Ignore storage errors, the gate will just re-prompt next click.
        }
        setHasPhone(true);
        setModalOpen(false);
        const persona = pendingPersona;
        setPendingPersona(null);
        if (persona) openWidget(persona);
    };

    const openWidget = (personaKey: string) => {
        const botId = PERSONA_BOT_IDS[personaKey];

        // Always tear down any existing instance + script first, regardless of
        // whether it is the same persona or a different one.  This is the
        // "close" step, destroy() removes the vendor's bubble, iframe and
        // backdrop from the DOM so the vendor's idempotent re-init starts clean.
        if (mountedPersonaRef.current !== null) {
            window.__WIDGET_INSTANCE__?.destroy();
            document.getElementById(WIDGET_SCRIPT_ID)?.remove();
            mountedPersonaRef.current = null;
        }

        // Give the vendor a single rAF tick to finish its teardown before we
        // inject the new script.
        requestAnimationFrame(() => {
            // Inject a fresh widget script for the selected persona's bot-id.
            const script = document.createElement('script');
            script.id               = WIDGET_SCRIPT_ID;
            script.src              = 'https://aistaff.ge/widget.js';
            script.dataset.botId    = botId;
            script.dataset.position = 'bottom-right';

            script.onload = () => {
                mountedPersonaRef.current = personaKey;
                // The bubble DOM element is created asynchronously after onload.
                // Poll with rAF until it appears (cap at ~2 s to avoid infinite loops).
                // The bubble is hidden by the injected CSS, but .click() still fires
                // the handler, so the chat opens programmatically.
                waitForBubbleAndClick();
            };

            document.body.appendChild(script);
        });
    };

    /** Click #widget-chat-bubble once it exists in the DOM. */
    const waitForBubbleAndClick = () => {
        const MAX_FRAMES = 120; // ≈2 s at 60 fps
        let frames = 0;
        let opened = false;

        const attempt = () => {
            if (opened) return;
            const bubble = document.getElementById('widget-chat-bubble');
            if (bubble) {
                opened = true;
                bubble.click();
                return;
            }
            if (frames < MAX_FRAMES) {
                frames++;
                requestAnimationFrame(attempt);
            }
            // Beyond the frame cap: the widget loaded but the bubble isn't present.
            // Nothing to click, silently give up; the widget is still visible.
        };

        requestAnimationFrame(attempt);
    };

    return (
        <div className="fixed inset-0 z-120 flex flex-col overflow-hidden bg-background font-(family-name:--font-noto-georgian)">
            {/* aiNOW signature purple glow, matches the landing aesthetic */}
            <div className="glow-orb glow-primary pointer-events-none absolute -top-40 left-1/2 h-110 w-110 -translate-x-1/2 opacity-50" />
            <div className="glow-orb glow-primary pointer-events-none absolute -bottom-40 -right-28 h-80 w-80 opacity-30" />

            {/* ── Mini aiNOW header ── */}
            <header className="flex shrink-0 items-center justify-between border-b border-border/60 bg-card/60 px-4 py-3 backdrop-blur-md">
                <div className="flex items-center gap-3">
                    <Link href="/" aria-label="aiNOW, home" className="inline-flex transition-opacity hover:opacity-80">
                        <div className="wordmark-3d text-lg leading-none">
                            <span className="wm-prefix">ai</span>
                            <span className="wm-mark">NOW</span>
                            <span className="wm-accent" aria-hidden="true" />
                        </div>
                    </Link>
                    <span className="hidden text-sm font-medium text-muted-foreground sm:inline">
                        {t('headerTitle')}
                    </span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    {t('online')}
                </span>
            </header>

            {/* ── Persona picker ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="flex flex-1 flex-col overflow-y-auto px-5 py-8"
            >
                <div className="mx-auto w-full max-w-lg">
                    <h1 className="text-center text-3xl font-extrabold tracking-tight">
                        {t('pickTitle')}
                    </h1>
                    <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
                        {t('pickSubtitle')}
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {PERSONAS.map(({ key, Icon }, i) => (
                            <motion.button
                                key={key}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => handleCardClick(key)}
                                className="card-glow group flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/60 p-5 text-center backdrop-blur-sm transition duration-200 hover:border-primary/40 hover:scale-[1.02] active:scale-[0.97]"
                            >
                                <Ico name={Icon} className="h-7 w-7 text-primary/70 transition-colors group-hover:text-primary" />
                                <span className="text-sm font-bold">{tc(`personas.${key}.name`)}</span>
                                <span className="text-xs leading-snug text-muted-foreground">
                                    {tc(`personas.${key}.desc`)}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Phone-gate modal, rendered inside the overlay so it inherits
                the fixed-inset context; z-[130/140] lifts it above z-120. */}
            <PhoneGateModal
                open={modalOpen}
                personaKey={pendingPersona}
                onOpenChange={(o) => {
                    if (!o) {
                        setModalOpen(false);
                        setPendingPersona(null);
                    }
                }}
                onSuccess={handleGateSuccess}
            />
        </div>
    );
};
