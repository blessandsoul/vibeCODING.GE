export const TEAM_LOCALES = ["ka", "en", "ru", "de", "tr", "fa", "zh"] as const;
export type TeamLocale = (typeof TEAM_LOCALES)[number];
export type TeamMemberId = "andro-kasparov" | "tornike-epitashvili";
export type LocalizedTeamText = Record<TeamLocale, string>;

export interface TeamMemberCopy {
  name: string;
  role: string;
  coFounderLabel: string;
  bio: string;
}

export interface TeamMemberData {
  id: TeamMemberId;
  // Keep these legacy fields for callers that still use the English/Georgian pair.
  name: string;
  nameKa: string;
  localizedNames: LocalizedTeamText;
  role: LocalizedTeamText;
  coFounderLabel: LocalizedTeamText;
  bio: LocalizedTeamText;
  image: string;
  imagePosition?: string;
  accent: string;
  badgeTone: "amethyst" | "ruby";
  tags?: string[];
  isPublic?: boolean;
}

// Public leadership shared by the homepage and about page.
// Every supported locale has its own name, role, co-founder label and bio so
// public cards never silently render an English fallback.
export const team: TeamMemberData[] = [
  {
    id: "andro-kasparov",
    name: "Andro Kasparov",
    nameKa: "ანდრო კასპაროვი",
    localizedNames: {
      ka: "ანდრო კასპაროვი",
      en: "Andro Kasparov",
      ru: "Андрей Каспаров",
      de: "Andro Kasparov",
      tr: "Andro Kasparov",
      fa: "Andro Kasparov",
      zh: "Andro Kasparov",
    },
    role: {
      ka: "CEO",
      en: "CEO",
      ru: "CEO",
      de: "CEO",
      tr: "CEO",
      fa: "CEO",
      zh: "CEO",
    },
    coFounderLabel: {
      ka: "თანადამფუძნებელი",
      en: "Co-founder",
      ru: "Соучредитель",
      de: "Mitgründer",
      tr: "Kurucu ortak",
      fa: "هم‌بنیان‌گذار",
      zh: "联合创始人",
    },
    bio: {
      ka: "განსაზღვრავს ბიზნესის მიზანს, პროდუქტის მიმართულებასა და ხარისხის სტანდარტს.",
      en: "Sets the business goal, product direction and quality bar for every result.",
      ru: "Определяет бизнес-цель, направление продукта и стандарт качества каждого результата.",
      de: "Definiert das Geschäftsziel, die Produktrichtung und den Qualitätsstandard jedes Ergebnisses.",
      tr: "İş hedefini, ürün yönünü ve her sonucun kalite standardını belirler.",
      fa: "هدف کسب‌وکار، مسیر محصول و معیار کیفیت هر نتیجه را تعیین می‌کند.",
      zh: "确定业务目标、产品方向和每项成果的质量标准。",
    },
    image: "https://ainow.ge/team/andro-kasparov-v3.png",
    imagePosition: "center top",
    accent: "from-[#857acc] via-[#a89ae6] to-[#5f559f]",
    badgeTone: "amethyst",
  },
  {
    id: "tornike-epitashvili",
    name: "Tornike Epitashvili",
    nameKa: "თორნიკე ეპიტაშვილი",
    localizedNames: {
      ka: "თორნიკე ეპიტაშვილი",
      en: "Tornike Epitashvili",
      ru: "Торнике Эпиташвили",
      de: "Tornike Epitashvili",
      tr: "Tornike Epitashvili",
      fa: "Tornike Epitashvili",
      zh: "Tornike Epitashvili",
    },
    role: {
      ka: "CTO",
      en: "CTO",
      ru: "CTO",
      de: "CTO",
      tr: "CTO",
      fa: "CTO",
      zh: "CTO",
    },
    coFounderLabel: {
      ka: "თანადამფუძნებელი",
      en: "Co-founder",
      ru: "Соучредитель",
      de: "Mitgründer",
      tr: "Kurucu ortak",
      fa: "هم‌بنیان‌گذار",
      zh: "联合创始人",
    },
    bio: {
      ka: "ხელმძღვანელობს ტექნოლოგიურ არქიტექტურას, AI მოდელების ინტეგრაციასა და სისტემების მდგრადობას.",
      en: "Leads technological architecture, AI model integration and core infrastructure.",
      ru: "Руководит технологической архитектурой, интеграцией AI-моделей и базовой инфраструктурой.",
      de: "Leitet die technologische Architektur, die Integration von KI-Modellen und die Kerninfrastruktur.",
      tr: "Teknolojik mimariye, yapay zekâ modeli entegrasyonuna ve temel altyapıya liderlik eder.",
      fa: "معماری فناوری، یکپارچه‌سازی مدل‌های هوش مصنوعی و زیرساخت اصلی را هدایت می‌کند.",
      zh: "负责技术架构、人工智能模型集成和核心基础设施。",
    },
    image: "https://ainow.ge/team/tornike-epitashvili-v3.png",
    imagePosition: "center top",
    accent: "from-[#fa65ca] via-[#fa3d7c] to-[#f9254a]",
    badgeTone: "ruby",
  },
];

export function getTeamMemberCopy(member: TeamMemberData, locale: string): TeamMemberCopy {
  const selectedLocale = TEAM_LOCALES.includes(locale as TeamLocale) ? locale as TeamLocale : "en";
  return {
    name: member.localizedNames[selectedLocale],
    role: member.role[selectedLocale],
    coFounderLabel: member.coFounderLabel[selectedLocale],
    bio: member.bio[selectedLocale],
  };
}

export const publicTeam = team.filter((member) => member.isPublic !== false);
export const teamVisibility = { tornikeEpitashvili: true } as const;
