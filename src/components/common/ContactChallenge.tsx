"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { CONTACT_CHALLENGE_SITE_KEY } from "@/config/contact-challenge";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function ContactChallenge({ onToken, errorText }: { onToken: (token: string) => void; errorText: string }) {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!ready || !container.current || !window.turnstile) return;
    const api = window.turnstile;
    const id = api.render(container.current, {
      sitekey: CONTACT_CHALLENGE_SITE_KEY,
      action: "contact",
      theme: "auto",
      size: container.current.clientWidth < 300 ? "compact" : "flexible",
      appearance: "interaction-only",
      callback: (token: string) => { setFailed(false); onToken(token); },
      "expired-callback": () => onToken(""),
      "timeout-callback": () => onToken(""),
      "error-callback": () => { onToken(""); setFailed(true); },
    });
    return () => { api.remove(id); };
  }, [ready, onToken]);

  return <div className="w-full min-w-0">
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      onReady={() => setReady(true)} onError={() => setFailed(true)} />
    <div ref={container} />
    {failed && <p role="alert" className="text-sm text-destructive">{errorText}</p>}
  </div>;
}
