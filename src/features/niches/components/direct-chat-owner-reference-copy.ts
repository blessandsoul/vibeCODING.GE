import { localeUrl } from "@/i18n/seo-locales";

export const DIRECT_CHAT_AUTHORED_LOCALES = ["ka", "en", "ru"] as const;
export const DIRECT_CHAT_SUPPORTED_LOCALES = ["ka", "en", "ru", "de", "tr", "fa", "zh"] as const;

export type DirectChatAuthoredLocale = (typeof DIRECT_CHAT_AUTHORED_LOCALES)[number];
export type DirectChatLocale = (typeof DIRECT_CHAT_SUPPORTED_LOCALES)[number];
export type DirectChatReferenceKind = "development" | "clinic" | "general";

export const DIRECT_CHAT_PRODUCT_URL = "https://aichats.ge/";
export const DIRECT_CHAT_OWNER_MARKER = "aiCHATS by aiNOW";
export const DIRECT_CHAT_OWNER_PROVIDER = { name: "aiNOW", url: "https://ainow.ge" } as const;
export const DIRECT_CHAT_SOURCE_TEMPLATE = "legal-reference-card";
export const DIRECT_CHAT_REFERENCE_PATHS: Record<DirectChatReferenceKind, string> = {
  development: "/ai-chatbot-development-georgia",
  clinic: "/ai-chatbot-klinikebistvis",
  general: "/ai-chatboti",
};

type DirectChatCopy = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  description: string;
  noteTitle: string;
  noteBody: string;
  familyAction: string;
};

type Localized<T> = Record<DirectChatAuthoredLocale, T>;

const COPY: Record<DirectChatReferenceKind, Localized<DirectChatCopy>> = {
  development: {
    ka: {
      metaTitle: "AI ჩატბოტი ბიზნესისთვის | aiCHATS by aiNOW",
      metaDescription: "ეს გვერდი aiNOW-ის პროდუქტს, aiCHATS-ს, ეხება. ფუნქციები, ფასები და პირობები aiCHATS-ის საიტზეა.",
      title: "AI ჩატბოტი ბიზნესისთვის",
      description:
        "ეს გვერდი aiNOW-ის პროდუქტს, aiCHATS-ს, ეხება. ფუნქციები, ფასები და პირობები aiCHATS-ის საიტზეა.",
      noteTitle: "aiCHATS-ის შესახებ",
      noteBody:
        "პროდუქტის გვერდზე ნახავთ aiCHATS-ის მუშაობის პრინციპსა და გამოყენების პირობებს.",
      familyAction: "გადადით aiCHATS-ზე",
    },
    en: {
      metaTitle: "AI chatbot for business | aiCHATS by aiNOW",
      metaDescription: "This page concerns aiCHATS, an aiNOW product. Functions, prices and terms are on the aiCHATS website.",
      title: "AI chatbot for business",
      description:
        "This page concerns aiCHATS, an aiNOW product. Functions, prices and terms are on the aiCHATS website.",
      noteTitle: "About aiCHATS",
      noteBody:
        "On the product page, you can see how aiCHATS works and the terms for using it.",
      familyAction: "Go to aiCHATS",
    },
    ru: {
      metaTitle: "AI-чатбот для бизнеса | aiCHATS by aiNOW",
      metaDescription: "Эта страница посвящена продукту aiNOW — aiCHATS. Функции, цены и условия указаны на сайте aiCHATS.",
      title: "AI-чатбот для бизнеса",
      description:
        "Эта страница посвящена продукту aiNOW — aiCHATS. Функции, цены и условия указаны на сайте aiCHATS.",
      noteTitle: "Об aiCHATS",
      noteBody:
        "На странице продукта вы увидите, как работает aiCHATS и на каких условиях его можно использовать.",
      familyAction: "Перейти к aiCHATS",
    },
  },
  clinic: {
    ka: {
      metaTitle: "ჩატბოტი კლინიკისთვის | aiCHATS by aiNOW",
      metaDescription: "ეს გვერდი aiNOW-ის პროდუქტს, aiCHATS-ს, ეხება. ფუნქციები, ფასები და პირობები aiCHATS-ის საიტზეა.",
      title: "ჩატბოტი კლინიკისთვის",
      description:
        "ეს გვერდი aiNOW-ის პროდუქტს, aiCHATS-ს, ეხება. ფუნქციები, ფასები და პირობები aiCHATS-ის საიტზეა.",
      noteTitle: "aiCHATS-ის შესახებ",
      noteBody:
        "პროდუქტის გვერდზე ნახავთ aiCHATS-ის მუშაობის პრინციპსა და გამოყენების პირობებს.",
      familyAction: "გადადით aiCHATS-ზე",
    },
    en: {
      metaTitle: "Chatbot for clinics | aiCHATS by aiNOW",
      metaDescription: "This page concerns aiCHATS, an aiNOW product. Functions, prices and terms are on the aiCHATS website.",
      title: "Chatbot for clinics",
      description:
        "This page concerns aiCHATS, an aiNOW product. Functions, prices and terms are on the aiCHATS website.",
      noteTitle: "About aiCHATS",
      noteBody:
        "On the product page, you can see how aiCHATS works and the terms for using it.",
      familyAction: "Go to aiCHATS",
    },
    ru: {
      metaTitle: "Чатбот для клиники | aiCHATS by aiNOW",
      metaDescription: "Эта страница посвящена продукту aiNOW — aiCHATS. Функции, цены и условия указаны на сайте aiCHATS.",
      title: "Чатбот для клиники",
      description:
        "Эта страница посвящена продукту aiNOW — aiCHATS. Функции, цены и условия указаны на сайте aiCHATS.",
      noteTitle: "Об aiCHATS",
      noteBody:
        "На странице продукта вы увидите, как работает aiCHATS и на каких условиях его можно использовать.",
      familyAction: "Перейти к aiCHATS",
    },
  },
  general: {
    ka: {
      metaTitle: "კლიენტებთან მიმოწერა aiCHATS-ით | aiCHATS by aiNOW",
      metaDescription: "ეს გვერდი aiNOW-ის პროდუქტს, aiCHATS-ს, ეხება. ფუნქციები, ფასები და პირობები aiCHATS-ის საიტზეა.",
      title: "კლიენტებთან მიმოწერა aiCHATS-ით",
      description:
        "ეს გვერდი aiNOW-ის პროდუქტს, aiCHATS-ს, ეხება. ფუნქციები, ფასები და პირობები aiCHATS-ის საიტზეა.",
      noteTitle: "aiCHATS-ის შესახებ",
      noteBody:
        "პროდუქტის გვერდზე ნახავთ aiCHATS-ის მუშაობის პრინციპსა და გამოყენების პირობებს.",
      familyAction: "გადადით aiCHATS-ზე",
    },
    en: {
      metaTitle: "Customer messaging with aiCHATS | aiCHATS by aiNOW",
      metaDescription: "This page concerns aiCHATS, an aiNOW product. Functions, prices and terms are on the aiCHATS website.",
      title: "Customer messaging with aiCHATS",
      description:
        "This page concerns aiCHATS, an aiNOW product. Functions, prices and terms are on the aiCHATS website.",
      noteTitle: "About aiCHATS",
      noteBody:
        "On the product page, you can see how aiCHATS works and the terms for using it.",
      familyAction: "Go to aiCHATS",
    },
    ru: {
      metaTitle: "Переписка с клиентами через aiCHATS | aiCHATS by aiNOW",
      metaDescription: "Эта страница посвящена продукту aiNOW — aiCHATS. Функции, цены и условия указаны на сайте aiCHATS.",
      title: "Переписка с клиентами через aiCHATS",
      description:
        "Эта страница посвящена продукту aiNOW — aiCHATS. Функции, цены и условия указаны на сайте aiCHATS.",
      noteTitle: "Об aiCHATS",
      noteBody:
        "На странице продукта вы увидите, как работает aiCHATS и на каких условиях его можно использовать.",
      familyAction: "Перейти к aiCHATS",
    },
  },
};

export function resolveDirectChatLocale(locale: string): DirectChatAuthoredLocale {
  return (DIRECT_CHAT_AUTHORED_LOCALES as readonly string[]).includes(locale)
    ? (locale as DirectChatAuthoredLocale)
    : "ka";
}

export function getDirectChatReferenceCopy(
  kind: DirectChatReferenceKind,
  locale: string,
): DirectChatCopy {
  return COPY[kind][resolveDirectChatLocale(locale)];
}

export function getDirectChatReferencePath(kind: DirectChatReferenceKind): string {
  return DIRECT_CHAT_REFERENCE_PATHS[kind];
}

export function getDirectChatReferenceCanonical(
  kind: DirectChatReferenceKind,
  locale: string,
): string {
  return localeUrl(resolveDirectChatLocale(locale), getDirectChatReferencePath(kind));
}

