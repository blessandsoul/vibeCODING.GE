"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import { FacebookPixel } from "@/components/analytics/FacebookPixel";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";

const FALLBACK_DELAY_MS = 20_000;
const ACTIVATION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll"] as const;

export function DeferredAnalytics({ gtmId }: { gtmId: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isLandingCloneClientPreview()) return;

    let activated = false;
    let timerId = 0;

    const cleanup = () => {
      window.clearTimeout(timerId);
      for (const eventName of ACTIVATION_EVENTS) {
        window.removeEventListener(eventName, activate);
      }
    };

    const activate = () => {
      if (activated) return;
      activated = true;
      cleanup();
      setReady(true);
    };

    for (const eventName of ACTIVATION_EVENTS) {
      window.addEventListener(eventName, activate, { passive: true, once: true });
    }
    timerId = window.setTimeout(activate, FALLBACK_DELAY_MS);

    return cleanup;
  }, []);

  if (isLandingCloneClientPreview() || !ready) return null;

  return (
    <>
      <Script
        id="gtm-deferred"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
        }}
      />
      <FacebookPixel />
    </>
  );
}
