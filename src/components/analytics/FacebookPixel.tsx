"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import { FB_PIXEL_ID, pageview } from "@/lib/facebook-pixel";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";
import { hasAnalyticsConsent } from "./AnalyticsConsent";

export const FacebookPixel = () => {
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const syncConsent = () => setAllowed(hasAnalyticsConsent());
    syncConsent();
    window.addEventListener("ainow-analytics-consent", syncConsent);
    return () => window.removeEventListener("ainow-analytics-consent", syncConsent);
  }, []);

  useEffect(() => {
    if (allowed && FB_PIXEL_ID && !isLandingCloneClientPreview()) {
      pageview();
    }
  }, [allowed, pathname]);

  if (isLandingCloneClientPreview() || !FB_PIXEL_ID || !allowed) return null;

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
          `,
        }}
      />
    </>
  );
};
