import { buildAlternates } from "@/i18n/seo-locales";

export const DIRECT_COMPANY_AUTHORED_LOCALES = ["ka", "en", "ru"] as const;
export const DIRECT_COMPANY_SUPPORTED_LOCALES = ["ka", "en", "ru", "de", "tr", "fa", "zh"] as const;

export type DirectCompanyAuthoredLocale = (typeof DIRECT_COMPANY_AUTHORED_LOCALES)[number];
export type DirectCompanyReferenceKind = "agents" | "business" | "automation" | "marketing";

export const DIRECT_COMPANY_OWNER_MARKER = "aiNOW";
export const DIRECT_COMPANY_OWNER_PROVIDER = { name: "aiNOW", url: "https://ainow.ge/" } as const;
export const DIRECT_COMPANY_OWNER_URL = "https://ainow.ge/";
export const DIRECT_COMPANY_SOURCE_TEMPLATE = "legal-reference-card";

export const DIRECT_COMPANY_REFERENCE_PATHS: Record<DirectCompanyReferenceKind, string> = {
  agents: "/ai-agenti",
  business: "/ai-biznesistvis",
  automation: "/ai-automation-agency-tbilisi",
  marketing: "/ai-marketing",
};

export type DirectCompanyOwnerCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  noteTitle: string;
  noteBody: string;
  familyAction: string;
};

type Localized<T> = Record<DirectCompanyAuthoredLocale, T>;

const OWNER_DESCRIPTION = {
  ka: "ეს გვერდი aiNOW-ის მომსახურებას ეხება. კომპანიის მუშაობისა და პირობების შესახებ ინფორმაციას ainow.ge-ზე ნახავთ.",
  en: "This page concerns aiNOW services. Information about the company's work and terms is available at ainow.ge.",
  ru: "Эта страница посвящена услугам aiNOW. Информация о работе компании и условиях доступна на ainow.ge.",
} as const satisfies Localized<string>;

const AUTOMATION_DESCRIPTION = {
  ka: "ეს გვერდი aiNOW-ის ბიზნესის ავტომატიზაციის მომსახურებას ეხება. კომპანიის მუშაობისა და პირობების შესახებ ინფორმაციას ainow.ge-ზე ნახავთ.",
  en: "This page concerns aiNOW's business automation services. Information about the company's work and terms is available at ainow.ge.",
  ru: "Эта страница посвящена услугам aiNOW по автоматизации бизнеса. Информация о работе компании и условиях доступна на ainow.ge.",
} as const satisfies Localized<string>;

const MARKETING_DESCRIPTION = {
  ka: "ეს გვერდი aiNOW-ის AI მარკეტინგის მომსახურებას ეხება. კომპანიის მუშაობისა და პირობების შესახებ ინფორმაციას ainow.ge-ზე ნახავთ.",
  en: "This page concerns aiNOW's AI marketing services. Information about the company's work and terms is available at ainow.ge.",
  ru: "Эта страница посвящена маркетинговым услугам aiNOW. Информация о работе компании и условиях доступна на ainow.ge.",
} as const satisfies Localized<string>;

const OWNER_NOTE_BODY = {
  ka: "aiNOW-ის მომსახურება მოიცავს ბიზნესის საჭიროების კონსულტაციას, გადაწყვეტის დიზაინსა და მის შექმნას.",
  en: "aiNOW provides business consulting, solution design and development.",
  ru: "aiNOW занимается консультацией бизнеса, проектированием и разработкой решений.",
} as const satisfies Localized<string>;

const COPY: Record<DirectCompanyReferenceKind, Localized<DirectCompanyOwnerCopy>> = {
  agents: {
    ka: {
      metaTitle: "AI აგენტების შექმნა | aiNOW",
      metaDescription: OWNER_DESCRIPTION.ka,
      eyebrow: "aiNOW · კომპანიის მომსახურება",
      title: "AI აგენტების შექმნა",
      description: OWNER_DESCRIPTION.ka,
      noteTitle: "aiNOW-ის შესახებ",
      noteBody: OWNER_NOTE_BODY.ka,
      familyAction: "გადადით aiNOW-ზე",
    },
    en: {
      metaTitle: "AI agent development | aiNOW",
      metaDescription: OWNER_DESCRIPTION.en,
      eyebrow: "aiNOW · company services",
      title: "AI agent development",
      description: OWNER_DESCRIPTION.en,
      noteTitle: "About aiNOW",
      noteBody: OWNER_NOTE_BODY.en,
      familyAction: "Go to aiNOW",
    },
    ru: {
      metaTitle: "Разработка AI-агентов | aiNOW",
      metaDescription: OWNER_DESCRIPTION.ru,
      eyebrow: "aiNOW · услуги компании",
      title: "Разработка AI-агентов",
      description: OWNER_DESCRIPTION.ru,
      noteTitle: "Об aiNOW",
      noteBody: OWNER_NOTE_BODY.ru,
      familyAction: "Перейти к aiNOW",
    },
  },
  business: {
    ka: {
      metaTitle: "AI თქვენი ბიზნესისთვის | aiNOW",
      metaDescription: OWNER_DESCRIPTION.ka,
      eyebrow: "aiNOW · კომპანიის მომსახურება",
      title: "AI თქვენი ბიზნესისთვის",
      description: OWNER_DESCRIPTION.ka,
      noteTitle: "aiNOW-ის შესახებ",
      noteBody: OWNER_NOTE_BODY.ka,
      familyAction: "გადადით aiNOW-ზე",
    },
    en: {
      metaTitle: "AI for your business | aiNOW",
      metaDescription: OWNER_DESCRIPTION.en,
      eyebrow: "aiNOW · company services",
      title: "AI for your business",
      description: OWNER_DESCRIPTION.en,
      noteTitle: "About aiNOW",
      noteBody: OWNER_NOTE_BODY.en,
      familyAction: "Go to aiNOW",
    },
    ru: {
      metaTitle: "AI для вашего бизнеса | aiNOW",
      metaDescription: OWNER_DESCRIPTION.ru,
      eyebrow: "aiNOW · услуги компании",
      title: "AI для вашего бизнеса",
      description: OWNER_DESCRIPTION.ru,
      noteTitle: "Об aiNOW",
      noteBody: OWNER_NOTE_BODY.ru,
      familyAction: "Перейти к aiNOW",
    },
  },
  automation: {
    ka: {
      metaTitle: "ბიზნესის ავტომატიზაციის მომსახურება | aiNOW",
      metaDescription: AUTOMATION_DESCRIPTION.ka,
      eyebrow: "aiNOW · ავტომატიზაციის მომსახურება",
      title: "ბიზნესის ავტომატიზაციის მომსახურება",
      description: AUTOMATION_DESCRIPTION.ka,
      noteTitle: "aiNOW-ის შესახებ",
      noteBody: OWNER_NOTE_BODY.ka,
      familyAction: "გადადით aiNOW-ზე",
    },
    en: {
      metaTitle: "Business automation services | aiNOW",
      metaDescription: AUTOMATION_DESCRIPTION.en,
      eyebrow: "aiNOW · automation services",
      title: "Business automation services",
      description: AUTOMATION_DESCRIPTION.en,
      noteTitle: "About aiNOW",
      noteBody: OWNER_NOTE_BODY.en,
      familyAction: "Go to aiNOW",
    },
    ru: {
      metaTitle: "Услуги автоматизации бизнеса | aiNOW",
      metaDescription: AUTOMATION_DESCRIPTION.ru,
      eyebrow: "aiNOW · услуги автоматизации",
      title: "Услуги автоматизации бизнеса",
      description: AUTOMATION_DESCRIPTION.ru,
      noteTitle: "Об aiNOW",
      noteBody: OWNER_NOTE_BODY.ru,
      familyAction: "Перейти к aiNOW",
    },
  },
  marketing: {
    ka: {
      metaTitle: "AI მარკეტინგის მომსახურება | aiNOW",
      metaDescription: MARKETING_DESCRIPTION.ka,
      eyebrow: "aiNOW · მარკეტინგის მომსახურება",
      title: "AI მარკეტინგის მომსახურება",
      description: MARKETING_DESCRIPTION.ka,
      noteTitle: "aiNOW-ის შესახებ",
      noteBody: OWNER_NOTE_BODY.ka,
      familyAction: "გადადით aiNOW-ზე",
    },
    en: {
      metaTitle: "AI marketing services | aiNOW",
      metaDescription: MARKETING_DESCRIPTION.en,
      eyebrow: "aiNOW · marketing services",
      title: "AI marketing services",
      description: MARKETING_DESCRIPTION.en,
      noteTitle: "About aiNOW",
      noteBody: OWNER_NOTE_BODY.en,
      familyAction: "Go to aiNOW",
    },
    ru: {
      metaTitle: "Маркетинговые услуги | aiNOW",
      metaDescription: MARKETING_DESCRIPTION.ru,
      eyebrow: "aiNOW · маркетинговые услуги",
      title: "Маркетинговые услуги",
      description: MARKETING_DESCRIPTION.ru,
      noteTitle: "Об aiNOW",
      noteBody: OWNER_NOTE_BODY.ru,
      familyAction: "Перейти к aiNOW",
    },
  },
};

export function resolveDirectCompanyLocale(locale: string): DirectCompanyAuthoredLocale {
  return (DIRECT_COMPANY_AUTHORED_LOCALES as readonly string[]).includes(locale)
    ? (locale as DirectCompanyAuthoredLocale)
    : "ka";
}

export function getDirectCompanyOwnerCopy(
  kind: DirectCompanyReferenceKind,
  locale: string,
): DirectCompanyOwnerCopy {
  return COPY[kind][resolveDirectCompanyLocale(locale)];
}

export function getDirectCompanyOwnerPath(kind: DirectCompanyReferenceKind): string {
  return DIRECT_COMPANY_REFERENCE_PATHS[kind];
}

export function getDirectCompanyOwnerCanonical(kind: DirectCompanyReferenceKind, locale: string): string {
  const path = getDirectCompanyOwnerPath(kind);
  return buildAlternates(path, resolveDirectCompanyLocale(locale)).canonical;
}


