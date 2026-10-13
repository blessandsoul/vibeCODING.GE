import { APP_NAME } from "@/lib/constants/app.constants";
import type { ClassifiedProject, Project } from "../types/project.types";

// No verified target-product case is admitted until a separate public source binds a
// record to the product; all current anonymous records remain family examples.

export function classifyProject(project: Project): ClassifiedProject {
  return {
    ...project,
    provenance: project.kind === "anonymous" ? "ainow-family-workflow" : "public-product",
  };
}

export type CaseProvenanceCopy = {
  publicBadge: string;
  familyBadge: string;
  familyStatus: string;
  familyDescriptionPrefix: string;
  familyHeading: string;
  familySubtitle: string;
  familyDisclosure: string;
  familyResults: string;
  familyMethodology: string;
  familyFaq: string;
  familyArticleSection: string;
  collectionDescription: string;
  collectionAbout: string;
  collectionName: string;
  familyCta: string;
  relatedFamily: string;
  publicBackToProjects: string;
  publicBusinessModel: string;
  publicFeatures: string;
  publicTechStack: string;
  publicOwnership: string;
  publicTimeline: string;
  publicTarget: string;
  publicVision: string;
  publicCta: string;
  publicMissingOwnership: string;
};

const COPY: Record<string, CaseProvenanceCopy> = {
  ka: {
    publicBadge: "პროდუქტი aiNOW-ისგან",
    familyBadge: "aiNOW-ის სცენარი",
    familyStatus: "სამუშაო მაგალითი",
    familyDescriptionPrefix: "aiNOW-ის სცენარი (aiCHATS-ის დადასტურებული ქეისი არაა):",
    familyHeading: "aiNOW-ის სცენარები",
    familySubtitle: "aiNOW-ის პროცესების ანონიმური აღწერები. ეს არ არის aiCHATS-ის კლიენტების დადასტურებული ქეისები.",
    familyDisclosure: "aiNOW-ის სცენარი — არა aiCHATS-ის კლიენტის დადასტურებული ქეისი.",
    familyResults: "აღწერაში მითითებული მაჩვენებლები",
    familyMethodology: "ეს მაჩვენებლები საწყისი აღწერიდანაა აღებული და aiCHATS-ის კლიენტების დადასტურებულ შედეგებს არ ასახავს.",
    familyFaq: "aiNOW-ის საწყისი აღწერის მიხედვით:",
    familyArticleSection: "aiNOW-ის სცენარი",
    collectionDescription: "aiNOW-ის პროდუქტები და სცენარები; ეს სცენარები aiCHATS-ის კლიენტების დადასტურებული ქეისები არ არის.",
    collectionAbout: "aiNOW-ის პროდუქტები და სცენარები",
    collectionName: "aiNOW-ის პროდუქტები და სცენარები",
    familyCta: "განვიხილოთ მსგავსი პროცესი",
    relatedFamily: "მსგავსი თემა",
    publicBackToProjects: "პროექტებზე დაბრუნება",
    publicBusinessModel: "ბიზნეს-მოდელი",
    publicFeatures: "ფუნქციონალი",
    publicTechStack: "ტექნოლოგიური სტეკი",
    publicOwnership: "საკუთრება",
    publicTimeline: "ვადები",
    publicTarget: "მიზანი",
    publicVision: "ხედვა",
    publicCta: "პარტნიორობის განხილვა",
    publicMissingOwnership: "მფლობელების შესახებ ინფორმაცია მითითებული არ არის.",
  },
  en: {
    publicBadge: "aiNOW product",
    familyBadge: "aiNOW scenario",
    familyStatus: "Family workflow example",
    familyDescriptionPrefix: "aiNOW scenario (not a verified aiCHATS case):",
    familyHeading: "Related family workflows",
    familySubtitle: "Anonymized aiNOW workflow records; these are not verified aiCHATS customer cases.",
    familyDisclosure: "aiNOW family workflow example — not a verified aiCHATS customer case.",
    familyResults: "Reported figures",
    familyMethodology: "These figures come from the original description and do not represent verified aiCHATS customer results.",
    familyFaq: "In the original aiNOW description:",
    familyArticleSection: "aiNOW family workflow example",
    collectionDescription: "aiNOW products and anonymized workflow examples. These examples are not verified aiCHATS customer cases.",
    collectionAbout: "aiNOW products and anonymized workflow examples",
    collectionName: "aiNOW products and workflow examples",
    familyCta: "Discuss a similar workflow",
    relatedFamily: "Related topic",
    publicBackToProjects: "Back to projects",
    publicBusinessModel: "Business model",
    publicFeatures: "Features",
    publicTechStack: "Tech stack",
    publicOwnership: "Ownership",
    publicTimeline: "Timeline",
    publicTarget: "Target",
    publicVision: "Vision",
    publicCta: "Discuss a partnership",
    publicMissingOwnership: "Ownership details are not provided.",
  },
  ru: {
    publicBadge: "Продукт aiNOW",
    familyBadge: "Сценарий aiNOW",
    familyStatus: "Рабочий пример",
    familyDescriptionPrefix: "Сценарий aiNOW, не подтверждённый кейс aiCHATS:",
    familyHeading: "Сценарии aiNOW",
    familySubtitle: "Анонимные описания процессов aiNOW. Это не подтверждённые кейсы клиентов aiCHATS.",
    familyDisclosure: "Сценарий aiNOW, а не подтверждённый кейс клиента aiCHATS.",
    familyResults: "Заявленные показатели",
    familyMethodology: "Показатели взяты из исходного описания. Это не подтверждённые результаты клиентов aiCHATS.",
    familyFaq: "В исходном описании aiNOW:",
    familyArticleSection: "Сценарий aiNOW",
    collectionDescription: "Продукты и сценарии aiNOW; это не подтверждённые кейсы клиентов aiCHATS.",
    collectionAbout: "Продукты и сценарии aiNOW",
    collectionName: "Продукты и сценарии aiNOW",
    familyCta: "Обсудить похожий процесс",
    relatedFamily: "По теме",
    publicBackToProjects: "Вернуться к проектам",
    publicBusinessModel: "Бизнес-модель",
    publicFeatures: "Функции",
    publicTechStack: "Технологический стек",
    publicOwnership: "Владение",
    publicTimeline: "Сроки",
    publicTarget: "Цель",
    publicVision: "Видение",
    publicCta: "Обсудить партнёрство",
    publicMissingOwnership: "Сведения о владельцах не указаны.",
  },
  de: {
    publicBadge: "aiNOW-Produkt",
    familyBadge: "aiNOW-Szenario",
    familyStatus: "Workflow-Beispiel",
    familyDescriptionPrefix: "aiNOW-Szenario, kein verifizierter aiCHATS-Fall:",
    familyHeading: "Verwandte Workflow-Beispiele",
    familySubtitle: "Anonymisierte aiNOW-Workflow-Aufzeichnungen; dies sind keine verifizierten aiCHATS-Kundenfälle.",
    familyDisclosure: "aiNOW-Workflow-Beispiel — kein verifizierter aiCHATS-Kundenfall.",
    familyResults: "Angaben aus der Beschreibung",
    familyMethodology: "Diese Angaben stammen aus der ursprünglichen Beschreibung und bestätigen keine verifizierten aiCHATS-Kundenergebnisse.",
    familyFaq: "Laut der ursprünglichen aiNOW-Beschreibung:",
    familyArticleSection: "aiNOW-Workflow-Beispiel",
    collectionDescription: "aiNOW-Produkte und anonymisierte Workflow-Beispiele. Diese Beispiele sind keine verifizierten aiCHATS-Kundenfälle.",
    collectionAbout: "aiNOW-Produkte und anonymisierte Workflow-Beispiele",
    collectionName: "aiNOW-Produkte und Workflow-Beispiele",
    familyCta: "Einen ähnlichen Workflow besprechen",
    relatedFamily: "Passendes Thema",
    publicBackToProjects: "Zurück zu Projekten",
    publicBusinessModel: "Geschäftsmodell",
    publicFeatures: "Funktionen",
    publicTechStack: "Tech-Stack",
    publicOwnership: "Eigentum",
    publicTimeline: "Zeitplan",
    publicTarget: "Ziel",
    publicVision: "Vision",
    publicCta: "Partnerschaft besprechen",
    publicMissingOwnership: "Angaben zu den Eigentümern liegen hier nicht vor.",
  },
  tr: {
    publicBadge: "aiNOW ürünü",
    familyBadge: "aiNOW senaryosu",
    familyStatus: "İş akışı örneği",
    familyDescriptionPrefix: "aiNOW senaryosu, doğrulanmış aiCHATS vakası değil:",
    familyHeading: "İlgili iş akışı örnekleri",
    familySubtitle: "Anonimleştirilmiş aiNOW iş akışı kayıtlarıdır; doğrulanmış aiCHATS müşteri vakaları değildir.",
    familyDisclosure: "aiNOW iş akışı örneği — doğrulanmış bir aiCHATS müşteri vakası değildir.",
    familyResults: "Açıklamadaki veriler",
    familyMethodology: "Bu veriler aiNOW'un kaynak açıklamasından alınmıştır; doğrulanmış aiCHATS müşteri sonuçlarını göstermez.",
    familyFaq: "aiNOW'un kaynak açıklamasına göre:",
    familyArticleSection: "aiNOW iş akışı örneği",
    collectionDescription: "aiNOW ürünleri ve anonimleştirilmiş iş akışı örnekleri; bunlar doğrulanmış aiCHATS müşteri vakaları değildir.",
    collectionAbout: "aiNOW ürünleri ve anonim iş akışı örnekleri",
    collectionName: "aiNOW ürünleri ve iş akışı örnekleri",
    familyCta: "Benzer bir iş akışını görüşün",
    relatedFamily: "İlgili konu",
    publicBackToProjects: "Projelere dön",
    publicBusinessModel: "İş modeli",
    publicFeatures: "Özellikler",
    publicTechStack: "Teknoloji yığını",
    publicOwnership: "Sahiplik",
    publicTimeline: "Zaman çizelgesi",
    publicTarget: "Hedef",
    publicVision: "Vizyon",
    publicCta: "Ortaklığı görüşün",
    publicMissingOwnership: "Sahiplik bilgisi belirtilmemiştir.",
  },
  fa: {
    publicBadge: "محصول aiNOW",
    familyBadge: "سناریوی aiNOW",
    familyStatus: "نمونهٔ جریان کاری",
    familyDescriptionPrefix: "سناریوی aiNOW، نه مورد تأییدشدهٔ aiCHATS:",
    familyHeading: "نمونه‌های جریان کاری مرتبط",
    familySubtitle: "این‌ها سوابق ناشناس جریان‌های کاری aiNOW هستند، نه موارد مشتری تأییدشدهٔ aiCHATS.",
    familyDisclosure: "نمونهٔ جریان کاری aiNOW — مورد مشتری تأییدشدهٔ aiCHATS نیست.",
    familyResults: "ارقام ذکرشده",
    familyMethodology: "این ارقام از توضیحات اصلی aiNOW گرفته شده‌اند و نتایج تأییدشدهٔ مشتریان aiCHATS را نشان نمی‌دهند.",
    familyFaq: "طبق توضیحات اصلی aiNOW:",
    familyArticleSection: "نمونهٔ جریان کاری aiNOW",
    collectionDescription: "محصولات aiNOW و نمونه‌های ناشناس جریان کاری؛ این نمونه‌ها موارد مشتری تأییدشدهٔ aiCHATS نیستند.",
    collectionAbout: "محصولات aiNOW و نمونه‌های ناشناس جریان کاری",
    collectionName: "محصولات aiNOW و نمونه‌های جریان کاری",
    familyCta: "بررسی یک جریان کاری مشابه",
    relatedFamily: "موضوع مرتبط",
    publicBackToProjects: "بازگشت به پروژه‌ها",
    publicBusinessModel: "مدل کسب‌وکار",
    publicFeatures: "امکانات",
    publicTechStack: "فناوری‌ها",
    publicOwnership: "مالکیت",
    publicTimeline: "زمان‌بندی",
    publicTarget: "هدف",
    publicVision: "چشم‌انداز",
    publicCta: "بررسی همکاری",
    publicMissingOwnership: "اطلاعات مالکیت ارائه نشده است.",
  },
  zh: {
    publicBadge: "aiNOW 产品",
    familyBadge: "aiNOW 场景",
    familyStatus: "工作流程示例",
    familyDescriptionPrefix: "aiNOW 场景，不是经过验证的 aiCHATS 案例：",
    familyHeading: "相关工作流程示例",
    familySubtitle: "这是匿名化的 aiNOW 工作流程记录，不是经过验证的 aiCHATS 客户案例。",
    familyDisclosure: "aiNOW 工作流程示例——不是经过验证的 aiCHATS 客户案例。",
    familyResults: "原文所述指标",
    familyMethodology: "这些指标来自 aiNOW 的原始描述，不代表经过验证的 aiCHATS 客户结果。",
    familyFaq: "根据 aiNOW 的原始描述：",
    familyArticleSection: "aiNOW 工作流程示例",
    collectionDescription: "aiNOW 产品和匿名化工作流程示例；这些示例不是经过验证的 aiCHATS 客户案例。",
    collectionAbout: "aiNOW 产品和匿名化工作流程示例",
    collectionName: "aiNOW 产品和工作流程示例",
    familyCta: "讨论类似工作流程",
    relatedFamily: "相关主题",
    publicBackToProjects: "返回项目",
    publicBusinessModel: "商业模式",
    publicFeatures: "功能",
    publicTechStack: "技术栈",
    publicOwnership: "所有权",
    publicTimeline: "时间线",
    publicTarget: "目标",
    publicVision: "愿景",
    publicCta: "讨论合作",
    publicMissingOwnership: "未提供所有权信息。",
  },
};

export function getCaseProvenanceCopy(locale: string, productName = APP_NAME): CaseProvenanceCopy {
  const copy = COPY[locale] ?? COPY.en;
  return Object.fromEntries(
    Object.entries(copy).map(([key, value]) => [key, value.replaceAll("aiCHATS", productName)]),
  ) as CaseProvenanceCopy;
}
