/**
 * Clinic landing wiring.
 *
 * The landing ships its OWN native inline demo (ClinicChatDemo, the site's
 * /api/chat-demo backend with the `clinic` persona), so the site-wide default
 * aiSTAFF bubble hides on this path unconditionally: one chat entry point per
 * page (see components/layout/AistaffWidget.tsx).
 */
export const CLINIC_PATH = '/ai-chatbot-klinikebistvis';
