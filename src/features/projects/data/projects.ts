import type { ClassifiedProject, Project } from "../types/project.types";
import { anonymousCases } from "./anonymous-cases";
import { classifyProject } from "../lib/case-provenance";

// aiNOW product family (funnel order: content, ads, staff, then the unifying platform),
// plus the aiTAXI robotaxi vertical. Each links out to its own live .ge domain.
const publicProjects: Project[] = [
  {
    slug: "aicontent",
    name: "aiCONTENT.ge",
    slogan: {
      ka: "AI კონტენტ-სტუდია",
      en: "AI content studio",
      ru: "AI-контент-студия",
      de: "AI-Content-Studio",
    },
    description: {
      ka: "Reels, პოსტები, ტექსტები და სცენარები, რომლებსაც AI ქმნის და ყოველდღე აქვეყნებს. სოციალური მედიის სრული ავტომატიზაცია.",
      en: "Reels, posts, copy and scripts that AI creates and publishes every day. Complete social media automation.",
      ru: "Reels, посты, тексты и сценарии, которые AI создаёт и публикует каждый день. Полная автоматизация соцсетей.",
      de: "Reels, Posts, Texte und Skripte, die AI täglich erstellt und veröffentlicht. Social Media auf Autopilot.",
    },
    url: "https://aicontent.ge",
    techStack: ["Next.js", "AI", "Video", "SMM"],
    status: "production",
    kind: "public",
  },
  {
    slug: "aiads",
    name: "aiADS.ge",
    slogan: {
      ka: "AI performance რეკლამა",
      en: "AI performance ads",
      ru: "AI performance-реклама",
      de: "AI-Performance-Ads",
    },
    description: {
      ka: "Meta-სა და Google-ში რეკლამებს AI ქმნის, უშვებს და ოპტიმიზაციას უკეთებს. მეტი ლიდი, ნაკლები ხარჯი, მკაფიო ანგარიშები.",
      en: "Meta and Google ads that AI builds, launches and optimizes. More leads, lower cost, clear reports.",
      ru: "Реклама Meta и Google, которую AI создаёт, запускает и оптимизирует. Больше лидов, меньше затрат, понятные отчёты.",
      de: "Meta- und Google-Ads, die AI erstellt, startet und optimiert. Mehr Leads, weniger Kosten, klare Reports.",
    },
    url: "https://aiads.ge",
    techStack: ["Next.js", "Meta Ads", "Google Ads", "AI"],
    status: "production",
    kind: "public",
  },
  {
    slug: "aistaff",
    name: "aiSTAFF.ge",
    slogan: {
      ka: "AI სპეციალისტების მოძიება",
      en: "Find AI specialists",
      ru: "Поиск AI-специалистов",
      de: "AI-Spezialisten finden",
    },
    description: {
      ka: "aiSTAFF გეხმარებათ მოიძიოთ და შეარჩიოთ ცოცხალი AI სპეციალისტები თქვენი კომპანიისთვის.",
      en: "aiSTAFF helps companies find and select human AI specialists with practical experience using AI in business processes.",
      ru: "aiSTAFF помогает компаниям находить и отбирать живых AI-специалистов с практическим опытом применения AI в бизнес-процессах.",
      de: "aiSTAFF unterstützt Unternehmen bei der Suche und Auswahl menschlicher AI-Spezialisten mit praktischer Erfahrung in Geschäftsprozessen.",
    },
    url: "https://aistaff.ge",
    techStack: ["AI specialist recruitment", "Human service", "Business operations"],
    status: "production",
    kind: "public",
  },
  {
    slug: "iai",
    name: "iAI.ge",
    slogan: {
      ka: "ერთიანი AI პლატფორმა",
      en: "Unified AI platform",
      ru: "Единая AI-платформа",
      de: "Einheitliche AI-Plattform",
    },
    description: {
      ka: "მართეთ თქვენი AI პროდუქტები მარტივი ენით: შეცვალეთ ბოტი მიმოწერით, ნახეთ ცვლილება გამოქვეყნებამდე და საჭიროების შემთხვევაში ნებისმიერ დროს დააბრუნეთ წინა ვერსია.",
      en: "Control your AI products in plain language: change the bot by chatting, preview every change before it goes live, and undo anytime.",
      ru: "Управляйте AI-продуктами простым языком: меняйте бота перепиской, смотрите изменение до публикации и откатывайте в любой момент.",
      de: "Steuere deine AI-Produkte in einfacher Sprache: ändere den Bot per Chat, sieh jede Änderung vor dem Livegang und mache sie jederzeit rückgängig.",
    },
    url: "https://iai.ge",
    techStack: ["Next.js", "React", "AI", "Analytics"],
    status: "development",
    kind: "public",
  },
  {
    slug: "aitaxi",
    name: "aiTAXI.ge",
    slogan: {
      ka: "რობოტაქსის ფლოტის პლატფორმა",
      en: "Robotaxi fleet platform",
      ru: "Платформа флота робо-такси",
      de: "Robotaxi-Flottenplattform",
    },
    description: {
      ka: "რობოტაქსის ფლოტის მართვის პლატფორმა aiNOW-სგან: დისპეტჩერიზაცია, ტელემეტრია, დისტანციური დახმარება და დეპოს ოპერაციები ავტონომიური ფლოტებისთვის.",
      en: "Robotaxi fleet management by aiNOW: dispatch, telemetry, remote assistance and depot operations for autonomous fleets.",
      ru: "Управление флотом робо-такси от aiNOW: диспетчеризация, телеметрия, удалённая помощь и операции депо для автономных флотов.",
      de: "Robotaxi-Flottenmanagement von aiNOW: Disposition, Telemetrie, Fernunterstützung und Depotbetrieb für autonome Flotten.",
    },
    url: "https://aitaxi.ge",
    techStack: ["Next.js", "React", "Tailwind", "AI"],
    status: "production",
    kind: "public",
  },
];

export const projects = [...publicProjects, ...anonymousCases].map(classifyProject);


export function getProject(slug: string): ClassifiedProject | undefined {
  return projects.find((p) => p.slug === slug);
}
