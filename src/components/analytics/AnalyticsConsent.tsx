"use client";

import Script from "next/script";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { ANALYTICS_CONSENT_STORAGE_KEY } from "@/lib/analytics";
import { isLandingCloneClientPreview } from "@/lib/landing-clone-preview";
import styles from "./AnalyticsConsent.module.css";

const configuredGtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim() ?? "";
const GTM_ID = /^GTM-[A-Z0-9]+$/u.test(configuredGtmId) ? configuredGtmId : "";
const STORAGE_KEY = ANALYTICS_CONSENT_STORAGE_KEY;
// aiSTAFF reserves 2147483644 for its backdrop, 2147483645 for the open chat,
// and 2147483646 for the launcher. Consent must stay above the page while
// never intercepting the chat composer.
const ANALYTICS_CONSENT_Z_INDEX = 50;

const copy = {
  ka: {
    text: "საიტის გასაუმჯობესებლად ვიყენებთ არჩევით ანალიტიკას. შეგიძლიათ ჩართოთ ან უარი თქვათ.",
    manage: "ანალიტიკის არჩევა",
    accept: "თანხმობა",
    reject: "უარყოფა",
    acceptCompact: "თანხმობა",
    rejectCompact: "უარყოფა",
  },
  en: {
    text: "We use optional analytics to improve the website. You can allow or decline it.",
    manage: "Analytics choices",
    accept: "Allow analytics",
    reject: "Necessary only",
    acceptCompact: "Allow",
    rejectCompact: "Decline",
  },
  ru: {
    text: "Мы используем необязательную аналитику для улучшения сайта. Вы можете разрешить её или отказаться.",
    manage: "Выбор аналитики",
    accept: "Разрешить аналитику",
    reject: "Только необходимое",
    acceptCompact: "Включить",
    rejectCompact: "Не включать",
  },
} as const;

function isAllowed(): boolean {
  return window.localStorage.getItem(STORAGE_KEY) === "accepted";
}

export function AnalyticsConsent() {
  const locale = useLocale();
  const text = copy[locale as keyof typeof copy] ?? copy.en;
  const [decision, setDecision] = useState<"accepted" | "rejected" | "pending" | "loading">("loading");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const next = saved === "accepted" || saved === "rejected" ? saved : "pending";
    const frame = window.requestAnimationFrame(() => setDecision(next));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const choose = (next: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setDecision(next);
    window.dispatchEvent(new Event("ainow-analytics-consent"));
  };

  return (
    <>
      {decision === "accepted" && GTM_ID && !isLandingCloneClientPreview() ? (
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      ) : null}
      {decision === "pending" ? (
        <aside
          className={styles.banner}
          style={{ zIndex: ANALYTICS_CONSENT_Z_INDEX }}
          aria-labelledby="analytics-consent-title"
          aria-describedby="analytics-consent-description"
        >
          <div className={`${styles.surface} p-3`}>
            <div className="space-y-1 px-1">
              <p
                id="analytics-consent-title"
                className="text-balance text-sm font-semibold leading-snug text-neutral-900 dark:text-white"
              >
                {text.manage}
              </p>
              <p
                id="analytics-consent-description"
                className="text-pretty text-xs leading-relaxed text-neutral-600 dark:text-neutral-300"
              >
                {text.text}
              </p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                aria-label={text.reject}
                className={`${styles.button} ${styles.reject} min-h-11 w-full whitespace-nowrap px-2.5 py-2 text-xs font-semibold`}
                onClick={() => choose("rejected")}
              >
                {text.rejectCompact}
              </button>
              <button
                type="button"
                aria-label={text.accept}
                className={`${styles.button} ${styles.accept} min-h-11 w-full whitespace-nowrap px-2.5 py-2 text-xs font-semibold`}
                onClick={() => choose("accepted")}
              >
                {text.acceptCompact}
              </button>
            </div>
          </div>
        </aside>
      ) : null}
    </>
  );
}

export function hasAnalyticsConsent() {
  return typeof window !== "undefined" && isAllowed();
}
