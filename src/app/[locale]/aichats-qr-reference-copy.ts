export const AICHATS_QR_REFERENCE_ROUTE_LOCALES = [
  "ka",
  "en",
  "ru",
  "de",
  "tr",
  "fa",
  "zh",
] as const;

export type AichatsQrReferenceLocale = (typeof AICHATS_QR_REFERENCE_ROUTE_LOCALES)[number];

export type AichatsQrReferenceCopy = {
  title: string;
  description: string;
  ownerAction: string;
  contactAction: string;
  pricingAction: string;
};

export const AICHATS_QR_REFERENCE_OWNER_URL = "https://ainow.ge/aistaff";

export const AICHATS_QR_REFERENCE_COPY: Record<
  AichatsQrReferenceLocale,
  AichatsQrReferenceCopy
> = {
  ka: {
    title: "ძველი QR მისამართი",
    description:
      "ეს ძველი QR მისამართი aiNOW-ის დემონსტრაციას უკავშირდება. ეს გვერდი არ წარმოადგენს aiCHATS-ის მიმდინარე პროდუქტს და არც aiSTAFF-ის დაქირავების სერვისს.",
    ownerAction: "aiNOW-ის დემო",
    contactAction: "მოგვწერეთ",
    pricingAction: "aiCHATS-ის ფასები",
  },
  en: {
    title: "Old QR address",
    description:
      "This old QR address points to an aiNOW demonstration. It is not the current aiCHATS product page or an aiSTAFF hiring service.",
    ownerAction: "aiNOW demo",
    contactAction: "Contact us",
    pricingAction: "aiCHATS prices",
  },
  ru: {
    title: "Старый QR-адрес",
    description:
      "Этот старый QR-адрес ведёт к демонстрации aiNOW. Это не страница текущего продукта aiCHATS и не сервис найма aiSTAFF.",
    ownerAction: "Демо aiNOW",
    contactAction: "Связаться",
    pricingAction: "Цены aiCHATS",
  },
  de: {
    title: "Alte QR-Adresse",
    description:
      "Diese alte QR-Adresse verweist auf eine aiNOW-Demonstration. Sie ist weder die aktuelle Produktseite von aiCHATS noch ein Einstellungsservice von aiSTAFF.",
    ownerAction: "aiNOW-Demo",
    contactAction: "Kontakt",
    pricingAction: "aiCHATS-Preise",
  },
  tr: {
    title: "Eski QR adresi",
    description:
      "Bu eski QR adresi bir aiNOW demosuna yönlendirir. Bu, güncel aiCHATS ürün sayfası veya aiSTAFF işe alım hizmeti değildir.",
    ownerAction: "aiNOW demosu",
    contactAction: "İletişim",
    pricingAction: "aiCHATS fiyatları",
  },
  fa: {
    title: "نشانی قدیمی QR",
    description:
      "این نشانی قدیمی QR به یک دموی aiNOW اشاره می‌کند. این صفحه محصول فعلی aiCHATS یا سرویس استخدام aiSTAFF نیست.",
    ownerAction: "دموی aiNOW",
    contactAction: "تماس",
    pricingAction: "قیمت aiCHATS",
  },
  zh: {
    title: "旧二维码地址",
    description:
      "这个旧二维码地址指向 aiNOW 的演示页面。它不是当前的 aiCHATS 产品页面，也不是 aiSTAFF 招聘服务。",
    ownerAction: "aiNOW 演示",
    contactAction: "联系",
    pricingAction: "aiCHATS 价格",
  },
};

export function getAichatsQrReferenceCopy(locale: string): AichatsQrReferenceCopy {
  return AICHATS_QR_REFERENCE_COPY[
    (AICHATS_QR_REFERENCE_ROUTE_LOCALES as readonly string[]).includes(locale)
      ? (locale as AichatsQrReferenceLocale)
      : "en"
  ];
}
