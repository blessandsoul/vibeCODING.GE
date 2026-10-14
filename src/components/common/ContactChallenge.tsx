"use client";

import Script from "next/script";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { CONTACT_CHALLENGE_SITE_KEY } from "@/config/contact-challenge";

type Turnstile = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global { interface Window { turnstile?: Turnstile } }

export function ContactChallenge({ onToken }: { onToken: (token: string) => void; errorText: string }) {
  const container = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);
  const locale = useLocale();
  const securityCopy = locale === "ka" ? {
    failed: "უსაფრთხოების შემოწმება ვერ დასრულდა. ხელახლა სცადეთ.",
    help: "თუ შეცდომა მეორდება, სცადეთ სხვა ბრაუზერი ან ქსელი. ბრაუზერის გაფართოებამ შეიძლება შემოწმება დაბლოკოს.",
    retry: "ხელახლა შემოწმება",
  } : locale === "ru" ? {
    failed: "Проверка безопасности не завершилась. Попробуйте ещё раз.",
    help: "Если ошибка повторяется, попробуйте другой браузер или сеть. Расширение браузера может блокировать проверку.",
    retry: "Повторить проверку",
  } : {
    failed: "Security verification failed. Please try again.",
    help: "If this continues, try another browser or network. A browser extension may be blocking verification.",
    retry: "Retry verification",
  };
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
    widget.current = id;
    return () => { widget.current = null; api.remove(id); };
  }, [ready, onToken]);

  return <div className="w-full min-w-0">
    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
      onReady={() => setReady(true)} onError={() => setFailed(true)} />
    <div ref={container} />
    {failed && <div className="space-y-2 text-left">
      <p role="alert" className="text-sm text-destructive">{securityCopy.failed}</p>
      <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{securityCopy.help}</p>
      {ready && <button type="button"
        className="rounded-lg border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
        onClick={() => {
          onToken("");
          if (widget.current && window.turnstile) {
            setFailed(false);
            window.turnstile.reset(widget.current);
          }
        }}>{securityCopy.retry}</button>}
    </div>}
  </div>;
}
