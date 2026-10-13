'use client';

import { useEffect } from 'react';
import { createLeadEventId, trackLead } from '@/lib/facebook-pixel';
import { isLandingCloneClientPreview } from '@/lib/landing-clone-preview';

/**
 * Bridges the aiSTAFF chat widget's lead signal to our conversion tracking.
 *
 * The widget is a third-party app served from aistaff.ge inside an iframe, so
 * when its bot captures a phone number that fact lives behind a cross-origin
 * boundary and our GTM/dataLayer never sees it. The widget now posts a
 * `widget:lead` message to the host window on the first save; we catch it here
 * and fire `generate_lead` (via the shared trackLead helper) so GTM and Google
 * Ads count the conversational-bot lead, the one path the form-level tracking
 * cannot reach.
 *
 * Dedupe: skip if the /aistaff phone-gate already counted this visitor
 * (sessionStorage `aistaff:lead-phone`, set by AistaffChat) or if a bot lead was
 * already counted this session (`aistaff:lead-counted`). One aiSTAFF lead per
 * session max.
 */
export function AistaffLeadBridge() {
  useEffect(() => {
    if (typeof window === 'undefined' || isLandingCloneClientPreview()) return;

    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://aistaff.ge') return;
      if (e.data?.type !== 'widget:lead') return;
      try {
        // Already counted via the phone-gate, or a prior bot lead this session.
        if (
          sessionStorage.getItem('aistaff:lead-phone') ||
          sessionStorage.getItem('aistaff:lead-counted')
        ) {
          return;
        }
        sessionStorage.setItem('aistaff:lead-counted', '1');
      } catch {
        // sessionStorage blocked: fall through and count once for this load.
      }
      trackLead({ content_name: 'aistaff-bot' }, createLeadEventId());
    };

    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return null;
}
