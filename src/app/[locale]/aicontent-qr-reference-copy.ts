export const AICONTENT_QR_REFERENCE_ROUTE_LOCALES = [
  "ka",
  "en",
  "ru",
  "de",
  "tr",
  "fa",
  "zh",
] as const;

export const AICONTENT_QR_REFERENCE_AUTHORED_LOCALES = ["ka", "en", "ru"] as const;

export type AicontentQrReferenceLocale = (typeof AICONTENT_QR_REFERENCE_ROUTE_LOCALES)[number];
export type AicontentQrReferenceAuthoredLocale = (typeof AICONTENT_QR_REFERENCE_AUTHORED_LOCALES)[number];

export type AicontentQrReferenceCopy = {
  title: string;
  description: string;
  ownerAction: string;
};

export const AICONTENT_QR_REFERENCE_COPY: Record<
  AicontentQrReferenceAuthoredLocale,
  AicontentQrReferenceCopy
> = {
  ka: {
    title: "ძველი QR მისამართი",
    description: "ეს aiNOW-ის ძველი QR მისამართია. aiCONTENT-ის შესახებ ინფორმაცია პროდუქტის გვერდზე ნახეთ.",
    ownerAction: "aiCONTENT-ის გვერდი",
  },
  en: {
    title: "Old QR address",
    description: "This is a retained aiNOW QR address. For aiCONTENT information, visit the product page.",
    ownerAction: "aiCONTENT page",
  },
  ru: {
    title: "Старый QR-адрес",
    description: "Это сохранённый QR-адрес aiNOW. Информация об aiCONTENT находится на странице продукта.",
    ownerAction: "Страница aiCONTENT",
  },
};

export function getAicontentQrReferenceLocale(locale: string): AicontentQrReferenceAuthoredLocale {
  return (AICONTENT_QR_REFERENCE_AUTHORED_LOCALES as readonly string[]).includes(locale)
    ? (locale as AicontentQrReferenceAuthoredLocale)
    : "en";
}

export function getAicontentQrReferenceCopy(locale: string): AicontentQrReferenceCopy {
  return AICONTENT_QR_REFERENCE_COPY[getAicontentQrReferenceLocale(locale)];
}

