"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SHARED_MEASUREMENT_ID = "G-LHWNXVZ9B9";
const DEFAULT_MEASUREMENT_IDS = [SHARED_MEASUREMENT_ID] as const;
const DEFAULT_STORAGE_KEY = "ainow.analytics-consent.v1";
// aiSTAFF reserves 2147483644 for its backdrop, 2147483645 for the open chat,
// and 2147483646 for the launcher. Consent stays above the page without ever
// intercepting the assistant composer.
const ANALYTICS_CONSENT_Z_INDEX = 2147483643;

type Consent = "accepted" | "declined" | null;

type FamilyAnalyticsProps = {
  measurementIds?: readonly string[];
  consentStorageKey?: string;
  renderBanner?: boolean;
};

function readConsent(storageKey: string): Consent {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return null;
    if (raw === "accepted" || raw === "declined") return raw;
    const parsed = JSON.parse(raw) as {
      status?: string;
      analytics?: boolean;
    };
    if (parsed.status === "declined" || parsed.analytics === false) return "declined";
    if (parsed.status === "accepted") return "accepted";
  } catch {
    return null;
  }
  return null;
}

function loadAnalytics(measurementIds: readonly string[]): void {
  const ids = Array.from(new Set(measurementIds.filter(Boolean)));
  if (ids.length === 0) return;

  const analyticsWindow = window as Window & { dataLayer?: unknown[][] };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  const gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);

  if (!document.getElementById("ainow-ga4-loader")) {
    const script = document.createElement("script");
    script.id = "ainow-ga4-loader";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ids[0]}`;
    document.head.appendChild(script);
    gtag("js", new Date());
  }

  for (const id of ids) {
    gtag("config", id, {
      allow_google_signals: false,
      cookie_domain: "auto",
      cookie_flags: "SameSite=None;Secure",
      send_page_view: true,
    });
  }
}

const copy = {
  ka: {
    text: "საიტის გასაუმჯობესებლად ვიყენებთ არჩევით ანალიტიკას. შეგიძლიათ ჩართოთ ან უარი თქვათ.",
    manage: "ანალიტიკის არჩევა",
    accept: "ანალიტიკის ჩართვა",
    reject: "მხოლოდ აუცილებელი",
    acceptCompact: "ჩართვა",
    rejectCompact: "არ ჩავრთო",
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

export function FamilyAnalytics({
  measurementIds = DEFAULT_MEASUREMENT_IDS,
  consentStorageKey = DEFAULT_STORAGE_KEY,
  renderBanner = true,
}: FamilyAnalyticsProps) {
  const pathname = usePathname();
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);
  const measurementKey = measurementIds.join(",");
  const isAssistantRoute = pathname === "/widget" || pathname.startsWith("/widget/");
  const embedded = typeof window !== "undefined" && window.self !== window.top;

  useEffect(() => {
    if (embedded || isAssistantRoute) return;

    const frame = window.requestAnimationFrame(() => {
      const current = readConsent(consentStorageKey);
      setConsent(current);
      setReady(true);
      if (current === "accepted") loadAnalytics(measurementKey.split(","));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [consentStorageKey, embedded, isAssistantRoute, measurementKey]);

  const save = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(consentStorageKey, value);
    setConsent(value);
    if (value === "accepted") loadAnalytics(measurementKey.split(","));
  };

  if (embedded || isAssistantRoute || !ready || consent !== null || !renderBanner) return null;

  const language = document.documentElement.lang.split("-")[0] as keyof typeof copy;
  const text = copy[language] || copy.ka;

  return (
    <aside
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3 w-[min(16rem,calc(100vw-11.5rem))] md:w-[min(30rem,calc(100vw-26.5rem))]"
      style={{ zIndex: ANALYTICS_CONSENT_Z_INDEX }}
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div className="rounded-3xl bg-white/88 p-3 shadow-[0_18px_55px_-24px_rgba(15,23,42,0.38),0_2px_10px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.08] backdrop-blur-2xl backdrop-saturate-150 dark:bg-neutral-950/88 dark:ring-white/10">
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
      <div className="mt-3 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
          <button
            type="button"
            aria-label={text.reject}
            className="min-h-11 w-full whitespace-nowrap rounded-xl bg-white/72 px-2.5 py-2 text-xs font-semibold text-neutral-800 shadow-[0_0_0_1px_rgba(0,0,0,0.09),0_1px_2px_rgba(0,0,0,0.05)] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:scale-[0.96] dark:bg-white/10 dark:text-white dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)] dark:hover:bg-white/15 dark:focus-visible:outline-white"
            onClick={() => save("declined")}
          >
            {text.rejectCompact}
          </button>
          <button
            type="button"
            aria-label={text.accept}
            className="min-h-11 w-full whitespace-nowrap rounded-xl bg-neutral-950 px-2.5 py-2 text-xs font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.18),0_7px_18px_-10px_rgba(0,0,0,0.55)] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:scale-[0.96] dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 dark:focus-visible:outline-white"
            onClick={() => save("accepted")}
          >
            {text.acceptCompact}
          </button>
        </div>
      </div>
    </aside>
  );
}
