import { PRICING_PRODUCTS, type PricingModel, type PricingProduct } from "./pricing-data";

export const PRICING_LOCALES = ["ka", "en", "ru", "de", "tr", "fa", "zh"] as const;
export type PricingLocale = (typeof PRICING_LOCALES)[number];
export type PricingProductId = "aichats" | "aicall" | "aicontent" | "aiweb" | "aistaff" | "iai";
type LocalPricingProductId = PricingProductId | "vibecoding";

export type PricingUiCopy = {
  choose: string;
  selected: string;
  pricingForm: string;
  priceStarts: string;
  usefulWhen: string;
  productPage: string;
  compare: string;
  pricingLink: string;
  monthlyContractNote: string;
  comparisonTitle: string;
  included: string;
  swipe: string;
  plansMobile: string;
  plansHint: string;
  previousPlan: string;
  nextPlan: string;
  agentBrief: string;
  agentBriefNote: string;
  sourcePage: string;
  yes: string;
  no: string;
  customOptions: string;
  selectionTitle: string;
  selectionLabel: string;
  customSelectionLabel: string;
  selectionOptional: string;
  selectionHint: string;
  selectionCta: string;
  modelCompact: Record<PricingModel, string>;
};

export type PricingPageCopy = {
  title: string;
  description: string;
  handoffTitle: string;
  handoffText: string;
  handoffCta: string;
};

type ProductPlanCopy = {
  name: string;
  note: string;
  cta: string;
  values: readonly string[];
};

type ProductCopy = {
  label: string;
  summary: string;
  pricingModelLabel: string;
  pricingModelDetail: string;
  priceLead: string;
  decisionPrompt: string;
  visualAlt: string;
  agentFacts: readonly { label: string; value: string }[];
  sectionLabel: string;
  billingLabel: string;
  scopeNotice?: string;
  rowLabels: readonly string[];
  plans: Record<string, ProductPlanCopy>;
};

const UI_COPY: Record<PricingLocale, PricingUiCopy> = {
  ka: {
    choose: "რაში გჭირდებათ დახმარება?",
    selected: "არჩეული პროდუქტი",
    pricingForm: "როგორ ითვლება ფასი",
    priceStarts: "საწყისი ფასი",
    usefulWhen: "როდის გამოგადგებათ",
    productPage: "პროდუქტის გვერდი",
    compare: "პაკეტები — რა შედის თითოეულში",
    pricingLink: "სრული შედარება ფასების გვერდზე →",
    monthlyContractNote: "ყოველთვიური პაკეტის საბოლოო მოცულობასა და ფასს ხელშეკრულებაში ვაზუსტებთ.",
    comparisonTitle: "აპის შემოწმების პირობები",
    included: "რას მიიღებთ",
    swipe: "ყველა პაკეტის სანახავად ცხრილი მარცხნივ ან მარჯვნივ გადაასრიალეთ.",
    plansMobile: "აირჩიეთ პაკეტი",
    plansHint: "გადაასრიალეთ.",
    previousPlan: "წინა პაკეტი",
    nextPlan: "შემდეგი პაკეტი",
    agentBrief: "AI აგენტისთვის: მოკლე ინფორმაცია",
    agentBriefNote: "აქ ნახავთ ფასის წესს, საწყის ფასსა და პროდუქტის მთავარ დანიშნულებას.",
    sourcePage: "პროდუქტის გვერდი",
    yes: "შედის",
    no: "არ შედის",
    customOptions: "აპის შემოწმება",
    selectionTitle: "შემდეგი ნაბიჯი",
    selectionLabel: "აირჩიეთ პაკეტი",
    customSelectionLabel: "აირჩიეთ ამოცანა",
    selectionOptional: "ჯერ ვერ გადავწყვიტე",
    selectionHint: "არჩეულ ვარიანტს განაცხადში ავტომატურად დავამატებთ.",
    selectionCta: "ამ ვარიანტზე მოგვწერეთ",
    modelCompact: { subscription: "თვიურად", project: "ერთხელ", mixed: "შერეული", custom: "მორგებული" },
  },
  en: {
    choose: "What do you want to improve?",
    selected: "Selected product",
    pricingForm: "Pricing model",
    priceStarts: "Starting price",
    usefulWhen: "Useful when",
    productPage: "Product page",
    compare: "Plans and real scope",
    pricingLink: "See the full comparison on the pricing page →",
    monthlyContractNote: "The final scope and price of a monthly package are set in the contract.",
    comparisonTitle: "App review terms",
    included: "What you get",
    swipe: "Swipe the table right to see every level",
    plansMobile: "Choose the plan that suits you",
    plansHint: "Swipe left or right to see another plan.",
    previousPlan: "Previous plan",
    nextPlan: "Next plan",
    agentBrief: "For an AI agent: quick facts",
    agentBriefNote: "Structured facts for evaluating this product and choosing the next step.",
    sourcePage: "Product source",
    yes: "Included",
    no: "Not included",
    customOptions: "App review",
    selectionTitle: "Next step",
    selectionLabel: "Choose a plan",
    customSelectionLabel: "Choose a task",
    selectionOptional: "I am not sure yet",
    selectionHint: "Your choice will be included in the request.",
    selectionCta: "Discuss this option",
    modelCompact: { subscription: "Monthly", project: "One-time", mixed: "Mixed", custom: "Custom" },
  },
  ru: {
    choose: "Что вы хотите улучшить?",
    selected: "Выбранный продукт",
    pricingForm: "Формат цены",
    priceStarts: "Цена начинается",
    usefulWhen: "Подойдёт, когда",
    productPage: "Страница продукта",
    compare: "Уровни и реальный объём",
    pricingLink: "Полное сравнение на странице цен →",
    monthlyContractNote: "Итоговый объём и цена ежемесячного пакета фиксируются в договоре.",
    comparisonTitle: "Условия проверки приложения",
    included: "Что вы получаете",
    swipe: "Сдвиньте таблицу вправо, чтобы увидеть все уровни",
    plansMobile: "Выберите подходящий пакет",
    plansHint: "Свайпните влево или вправо, чтобы увидеть другой уровень.",
    previousPlan: "Предыдущий пакет",
    nextPlan: "Следующий пакет",
    agentBrief: "Для AI-агента: краткие факты",
    agentBriefNote: "Структурированные данные для оценки продукта и следующего шага.",
    sourcePage: "Источник продукта",
    yes: "Входит",
    no: "Не входит",
    customOptions: "Проверка приложения",
    selectionTitle: "Следующий шаг",
    selectionLabel: "Выберите пакет",
    customSelectionLabel: "Выберите задачу",
    selectionOptional: "Пока не решил",
    selectionHint: "Выбранный вариант попадёт в заявку.",
    selectionCta: "Обсудить этот вариант",
    modelCompact: { subscription: "Ежемесячно", project: "Разово", mixed: "Смешанная", custom: "Индивидуально" },
  },
  de: {
    choose: "Was möchten Sie verbessern?",
    selected: "Ausgewähltes Produkt",
    pricingForm: "Preismodell",
    priceStarts: "Startpreis",
    usefulWhen: "Sinnvoll, wenn",
    productPage: "Produktseite",
    compare: "Pakete und ihr tatsächlicher Umfang",
    pricingLink: "Vollständigen Vergleich auf der Preisseite ansehen →",
    monthlyContractNote: "Der endgültige Umfang und Preis eines Monatsangebots stehen im Vertrag.",
    comparisonTitle: "Pakete vergleichen",
    included: "Das ist enthalten",
    swipe: "Wischen Sie nach rechts, um alle Stufen zu sehen",
    plansMobile: "Wählen Sie das passende Paket",
    plansHint: "Wischen Sie nach links oder rechts für ein anderes Paket.",
    previousPlan: "Vorheriges Paket",
    nextPlan: "Nächstes Paket",
    agentBrief: "Für einen KI-Agenten: Kurzinfos",
    agentBriefNote: "Strukturierte Fakten zur Auswahl des nächsten Schritts.",
    sourcePage: "Produktquelle",
    yes: "Enthalten",
    no: "Nicht enthalten",
    customOptions: "Aufgabenoptionen",
    selectionTitle: "Nächster Schritt",
    selectionLabel: "Paket auswählen",
    customSelectionLabel: "Aufgabe auswählen",
    selectionOptional: "Noch nicht entschieden",
    selectionHint: "Ihre Auswahl wird automatisch zur Anfrage hinzugefügt.",
    selectionCta: "Diese Option besprechen",
    modelCompact: { subscription: "Monatlich", project: "Einmalig", mixed: "Gemischt", custom: "Individuell" },
  },
  tr: {
    choose: "Neyi iyileştirmek istiyorsunuz?",
    selected: "Seçilen ürün",
    pricingForm: "Fiyat modeli",
    priceStarts: "Başlangıç fiyatı",
    usefulWhen: "Şu durumda uygun",
    productPage: "Ürün sayfası",
    compare: "Paketler ve gerçek kapsam",
    pricingLink: "Fiyat sayfasında tam karşılaştırmayı görün →",
    monthlyContractNote: "Aylık paketin nihai kapsamı ve fiyatı sözleşmede belirlenir.",
    comparisonTitle: "Paketleri karşılaştırın",
    included: "Aldıklarınız",
    swipe: "Tüm seviyeleri görmek için tabloyu sağa kaydırın",
    plansMobile: "Size uygun paketi seçin",
    plansHint: "Başka bir paket görmek için sola veya sağa kaydırın.",
    previousPlan: "Önceki paket",
    nextPlan: "Sonraki paket",
    agentBrief: "Bir AI ajanı için: kısa bilgiler",
    agentBriefNote: "Ürünü değerlendirmek ve sonraki adımı seçmek için yapılandırılmış bilgiler.",
    sourcePage: "Ürün kaynağı",
    yes: "Dahil",
    no: "Dahil değil",
    customOptions: "Görev seçenekleri",
    selectionTitle: "Sonraki adım",
    selectionLabel: "Paket seçin",
    customSelectionLabel: "Görev seçin",
    selectionOptional: "Henüz karar vermedim",
    selectionHint: "Seçiminiz talebe otomatik olarak eklenecek.",
    selectionCta: "Bu seçeneği görüşün",
    modelCompact: { subscription: "Aylık", project: "Tek seferlik", mixed: "Karma", custom: "Özel" },
  },
  fa: {
    choose: "می‌خواهید کدام بخش را بهتر کنید؟",
    selected: "محصول انتخاب‌شده",
    pricingForm: "مدل قیمت‌گذاری",
    priceStarts: "قیمت شروع",
    usefulWhen: "مناسب است وقتی",
    productPage: "صفحه محصول",
    compare: "پکیج‌ها و دامنه واقعی آن‌ها",
    pricingLink: "مقایسه کامل در صفحه قیمت‌ها →",
    monthlyContractNote: "حجم و قیمت نهایی پکیج ماهانه در قرارداد تعیین می‌شود.",
    comparisonTitle: "مقایسه پکیج‌ها",
    included: "آنچه دریافت می‌کنید",
    swipe: "برای دیدن همه سطوح، جدول را به راست بکشید",
    plansMobile: "پکیج مناسب را انتخاب کنید",
    plansHint: "برای دیدن پکیج دیگر به چپ یا راست بکشید.",
    previousPlan: "پکیج قبلی",
    nextPlan: "پکیج بعدی",
    agentBrief: "برای عامل هوش مصنوعی: اطلاعات سریع",
    agentBriefNote: "اطلاعات ساختاریافته برای ارزیابی محصول و انتخاب گام بعدی.",
    sourcePage: "منبع محصول",
    yes: "شامل می‌شود",
    no: "شامل نمی‌شود",
    customOptions: "گزینه‌های کار",
    selectionTitle: "گام بعدی",
    selectionLabel: "یک پکیج انتخاب کنید",
    customSelectionLabel: "یک کار انتخاب کنید",
    selectionOptional: "هنوز تصمیم نگرفته‌ام",
    selectionHint: "انتخاب شما به‌صورت خودکار به درخواست اضافه می‌شود.",
    selectionCta: "درباره این گزینه گفت‌وگو کنید",
    modelCompact: { subscription: "ماهانه", project: "یک‌باره", mixed: "ترکیبی", custom: "اختصاصی" },
  },
  zh: {
    choose: "您想先改善什么？",
    selected: "已选产品",
    pricingForm: "计价方式",
    priceStarts: "起始价格",
    usefulWhen: "适合这些情况",
    productPage: "产品页面",
    compare: "套餐与实际范围",
    pricingLink: "在价格页面查看完整比较 →",
    monthlyContractNote: "月度套餐的最终范围和价格写入合同。",
    comparisonTitle: "比较套餐",
    included: "您将获得",
    swipe: "向右滑动表格查看全部级别",
    plansMobile: "选择适合您的套餐",
    plansHint: "左右滑动查看其他套餐。",
    previousPlan: "上一个套餐",
    nextPlan: "下一个套餐",
    agentBrief: "给 AI 代理的简要信息",
    agentBriefNote: "帮助评估产品并选择下一步的结构化信息。",
    sourcePage: "产品来源",
    yes: "包含",
    no: "不包含",
    customOptions: "任务选项",
    selectionTitle: "下一步",
    selectionLabel: "选择套餐",
    customSelectionLabel: "选择任务",
    selectionOptional: "我还没决定",
    selectionHint: "您的选择会自动加入申请。",
    selectionCta: "讨论此选项",
    modelCompact: { subscription: "按月", project: "一次性", mixed: "混合计价", custom: "定制" },
  },
};

const PAGE_COPY: Record<PricingLocale, PricingPageCopy> = {
  ka: {
    title: "თქვენი აპის რისკების შემოწმება",
    description: "თქვენი ნებართვით ვამოწმებთ აპში ხილულ პრობლემებს. ვადგენთ, რა უნდა გამოსწორდეს პირველ რიგში, და ვათანხმებთ გამოსწორებისა და ხელახალი შემოწმების გეგმას.",
    handoffTitle: "გსურთ აპის რისკების განხილვა?",
    handoffText: "მოგვწერეთ აპისა და ავტორიზებული შემოწმების საზღვრების შესახებ. რისკების პრიორიტეტებსა და გამოსწორების გეგმას ერთად განვსაზღვრავთ.",
    handoffCta: "აპის რისკების განხილვა",
  },
  en: {
    title: "Review your app's risks",
    description: "With your permission, we check visible problems in the app. We prioritize fixes and agree a repair and recheck plan.",
    handoffTitle: "Want to discuss app risks?",
    handoffText: "Tell us about the app and the authorized review boundary. We will define risk priorities and a repair plan together.",
    handoffCta: "Discuss app risks",
  },
  ru: {
    title: "Проверка рисков вашего приложения",
    description: "С вашего разрешения проверяем видимые проблемы приложения. Определяем приоритеты и согласуем план исправлений и повторной проверки.",
    handoffTitle: "Обсудим риски приложения?",
    handoffText: "Расскажите о приложении и разрешённых границах проверки. Вместе определим приоритеты рисков и план исправления.",
    handoffCta: "Обсудить риски приложения",
  },
  de: {
    title: "Preise und Pakete",
    description: "Wählen Sie ein Produkt und vergleichen Sie die Pakete: enthaltene Leistungen, Preise und separat berechnete Bestandteile.",
    handoffTitle: "Nicht sicher, welches Paket passt?",
    handoffText: "Beschreiben Sie uns Ihre Aufgabe – wir helfen Ihnen bei der Auswahl der passenden Option.",
    handoffCta: "Bei der Auswahl helfen",
  },
  tr: {
    title: "Fiyatlar ve paketler",
    description: "Bir ürün seçin ve paketleri karşılaştırın: nelerin dahil olduğunu, fiyatı ve ayrı ücretlendirilen kalemleri görün.",
    handoffTitle: "Hangi pakete ihtiyacınız olduğundan emin değil misiniz?",
    handoffText: "Çözmek istediğiniz görevi anlatın; doğru seçeneği belirlemenize yardımcı olalım.",
    handoffCta: "Paket seçmeme yardım et",
  },
  fa: {
    title: "قیمت‌ها و پکیج‌ها",
    description: "محصول را انتخاب کنید و پکیج‌ها را مقایسه کنید: چه چیزهایی شامل است، هزینه چقدر است و چه مواردی جداگانه محاسبه می‌شوند.",
    handoffTitle: "نمی‌دانید کدام پکیج مناسب شماست؟",
    handoffText: "نیاز خود را توضیح دهید تا برای انتخاب گزینه مناسب کمک‌تان کنیم.",
    handoffCta: "کمک برای انتخاب پکیج",
  },
  zh: {
    title: "价格与套餐",
    description: "选择产品并比较套餐：包含哪些内容、价格是多少，以及哪些项目需要单独计费。",
    handoffTitle: "还不确定需要哪个套餐？",
    handoffText: "告诉我们要解决的任务，我们会帮您选择合适的方案。",
    handoffCta: "帮助我选择套餐",
  },
};

const CADENCE_COPY: Record<Exclude<PricingLocale, "ka">, Record<string, string>> = {
  en: { "თვეში": "per month", "ერთ ვიდეოზე": "per video", "ერთხელ": "one-time", "მორგებული": "custom" },
  ru: { "თვეში": "в месяц", "ერთ ვიდეოზე": "за видео", "ერთხელ": "разово", "მორგებული": "индивидуально" },
  de: { "თვეში": "pro Monat", "ერთ ვიდეოზე": "pro Video", "ერთხელ": "einmalig", "მორგებული": "individuell" },
  tr: { "თვეში": "aylık", "ერთ ვიდეოზე": "video başına", "ერთხელ": "tek seferlik", "მორგებული": "özel" },
  fa: { "თვეში": "در ماه", "ერთ ვიდეოზე": "برای هر ویدیو", "ერთხელ": "یک‌باره", "მორგებული": "اختصاصی" },
  zh: { "თვეში": "每月", "ერთ ვიდეოზე": "每个视频", "ერთხელ": "一次性", "მორგებული": "定制" },
};

const AGREEMENT_PRICE: Record<Exclude<PricingLocale, "ka">, string> = {
  en: "By agreement",
  ru: "По договорённости",
  de: "Nach Vereinbarung",
  tr: "Anlaşmalı",
  fa: "با توافق",
  zh: "按合同协商",
};

const NO_PUBLIC_PRICE: Record<Exclude<PricingLocale, "ka">, string> = {
  en: "No public price",
  ru: "Публичной цены нет",
  de: "Kein öffentlicher Preis",
  tr: "Herkese açık fiyat yok",
  fa: "قیمت عمومی ندارد",
  zh: "无公开价格",
};

const FROM_PRICE: Record<Exclude<PricingLocale, "ka">, string> = {
  en: "from",
  ru: "от",
  de: "ab",
  tr: "başlayan",
  fa: "از",
  zh: "起",
};

function localizePrice(price: string, locale: Exclude<PricingLocale, "ka">): string {
  if (price === "შეთანხმებით") return AGREEMENT_PRICE[locale];
  if (price === "საჯარო ფასი არ არის") return NO_PUBLIC_PRICE[locale];
  const fromMatch = price.match(/^(.+?) ₾-დან$/u);
  if (!fromMatch) return price;
  return locale === "zh" ? `${fromMatch[1]} ₾ ${FROM_PRICE[locale]}` : `${FROM_PRICE[locale]} ${fromMatch[1]} ₾`;
}

const PRODUCT_COPY: Record<Exclude<PricingLocale, "ka">, Partial<Record<PricingProductId, ProductCopy>>> = {
  en: {
    aichats: {
      label: "Customer messaging",
      summary: "Answers customer questions, collects order and booking requests, and passes the needed details to your team.",
      pricingModelLabel: "Monthly package",
      pricingModelDetail: "Personal is for one Instagram account or Facebook Page; business packages increase reply, account and catalog capacity.",
      priceLead: "from 100 ₾ per month",
      decisionPrompt: "When customers often ask about prices, availability, address or order conditions.",
      visualAlt: "aiCHATS glass chat symbol",
      agentFacts: [
        { label: "How pricing works", value: "Personal or business package per month" },
        { label: "Starting price", value: "100 ₾ per month" },
        { label: "What it does", value: "Replies, accounts and catalog sized to your workflow" },
      ],
      sectionLabel: "Customer messaging",
      billingLabel: "Monthly packages",
      scopeNotice: "Personal is 100 ₾ per month; the current promotion is 50 ₾ with three months prepaid and the first month free—the first three months total 100 ₾. Personal includes 600 AI replies and one Instagram account or Facebook Page; a knowledge base and catalog are not included. Business packages scale up; Custom is agreed.",
      rowLabels: ["Replies per month", "Connected accounts", "Catalog size", "Information updates per month", "Useful when"],
      plans: {
        start: { name: "Start", note: "For one account and a small catalog", cta: "View package", values: ["3 000", "1", "20-100 products", "Not included", "Replies and customer data"] },
        expanded: { name: "Expanded", note: "For several channels and a knowledge base", cta: "View package", values: ["8 000", "3", "100-500 products", "1 000", "Knowledge base and lead scoring"] },
        growth: { name: "Growth", note: "For a large catalog and ongoing support", cta: "View package", values: ["25 000", "5", "500-2 000 products", "4 000", "Complex processes and ongoing support"] },
        scale: { name: "Scale", note: "For high volume and several accounts", cta: "View package", values: ["75 000", "10", "2 000-5 000 products", "10 000", "Maximum volume and priority"] },
        personal: { name: "Personal", note: "For one Instagram account or Facebook Page", cta: "View package", values: ["600", "1", "Not included", "Not included", "Personal messages"] },
        custom: { name: "Custom", note: "For non-standard volume and workflows", cta: "Discuss package", values: ["By agreement", "By agreement", "5 000+ products", "By agreement", "Individual terms"] },
      },
    },
    aicall: {
      label: "AI calls",
      summary: "Answers incoming calls and makes individual outbound calls according to your approved task.",
      pricingModelLabel: "Platform plus connected outbound minutes",
      pricingModelDetail: "Every plan includes one simultaneous inbound channel with no separate per-minute phone charge for inbound calls. Each extra channel is 60 ₾ per month; connected outbound minutes are billed separately.",
      priceLead: "from 220 ₾ per month",
      decisionPrompt: "When you want to answer incoming calls or call customers yourself.",
      visualAlt: "aiCALL glass phone symbol",
      agentFacts: [
        { label: "How pricing works", value: "From 220 ₾ per month plus connected outbound minutes" },
        { label: "Initial setup", value: "150 ₾ once" },
        { label: "Call rates", value: "Inbound: 1 channel included with no separate per-minute phone charge; extra channel: 60 ₾/month; outbound: 1.50 ₾/connected min" },
      ],
      sectionLabel: "AI calls",
      billingLabel: "Platform price; connected outbound minutes are added separately",
      scopeNotice: "Setup: 150 ₾ once. Every plan includes one simultaneous inbound channel with no separate per-minute phone charge for inbound calls. Each extra channel is 60 ₾ per month; connected outbound minutes cost 1.50 ₾ each. Mass campaigns, CSV queues and automatic repeat calls are still being prepared and are not active features.",
      rowLabels: ["AI roles", "Call tasks", "Simultaneous inbound channels", "Connected programs", "Call history"],
      plans: {
        start: { name: "Start", note: "For one AI role and one call task", cta: "View package", values: ["1 role", "1 task", "1", "Not included", "30 days"] },
        expanded: { name: "Expanded", note: "For a small team with several call tasks", cta: "View package", values: ["1 role", "3 tasks", "1", "1 connection", "90 days"] },
        growth: { name: "Growth", note: "For several roles and processes", cta: "View package", values: ["3 roles", "10 tasks", "1", "3 connections", "365 days"] },
        scale: { name: "Scale", note: "For high phone-call volume", cta: "View package", values: ["10 roles", "25 tasks", "1", "10 connections", "Unlimited"] },
        custom: { name: "Custom", note: "For individual capacity, controls and support; one inbound channel included", cta: "Discuss package", values: ["By agreement", "By agreement", "1", "By agreement", "By agreement"] },
      },
    },
    aicontent: {
      label: "Advertising videos",
      summary: "Product, UGC-style and avatar videos for social media and advertising.",
      pricingModelLabel: "One-time and monthly packages",
      pricingModelDetail: "Each public price covers one video. Recurring content is arranged by contract with an individually agreed scope and price.",
      priceLead: "50–100 ₾ per video",
      decisionPrompt: "When you want a product or service to catch attention quickly in video.",
      visualAlt: "aiCONTENT glass video camera symbol",
      agentFacts: [
        { label: "How pricing works", value: "Per video" },
        { label: "Video prices", value: "50–100 ₾, 100–200 ₾ or from 200 ₾" },
        { label: "Revisions", value: "One round per format" },
      ],
      sectionLabel: "Advertising videos",
      billingLabel: "One video; monthly package by contract",
      scopeNotice: "All three public prices are per video. Recurring content can be arranged in a monthly package: scope and price are agreed individually in a contract. One revision round is included per format. Real filming, a real influencer and an actor are not included.",
      rowLabels: ["Format", "Price", "Number of videos", "Revision rounds", "Useful when"],
      plans: {
        promo: { name: "Product promo video", note: "A short ad for a product, place or service, without a presenter", cta: "Discuss video", values: ["Product promo video", "50–100 ₾", "1 finished video", "1 round", "Show a product or place"] },
        ugc: { name: "Generative UGC video", note: "A generated creator shows or uses the product in a natural style", cta: "Discuss video", values: ["Generative UGC video", "100–200 ₾", "1 finished video", "1 round", "Show or use a product"] },
        avatar: { name: "Personal AI avatar", note: "A recurring on-screen face created for you in a content-creator style", cta: "Discuss video", values: ["Personal AI avatar", "from 200 ₾", "1 finished video", "1 round", "Keep a consistent face on screen"] },
        monthly: { name: "Monthly package", note: "For recurring content production; scope and price are agreed individually", cta: "Discuss package", values: ["Custom monthly package", "By agreement", "By agreement", "By agreement", "Recurring content production"] },
      },
    },
    aiweb: {
      label: "Websites and web products",
      summary: "We build a website, online store or custom web product. After launch, add technical care when you need it.",
      pricingModelLabel: "One-time build plus optional care",
      pricingModelDetail: "Pay for the build once; add technical care only when needed.",
      priceLead: "from 2 000 ₾ one-time",
      decisionPrompt: "When you need a site that takes requests or a web product built around your business process.",
      visualAlt: "aiWEB glass web-window symbol",
      agentFacts: [
        { label: "Build price", value: "From 2 000 ₾, depending on project type" },
        { label: "Technical care", value: "From 250 ₾ per month" },
        { label: "Result", value: "Website, store or custom web product" },
      ],
      sectionLabel: "Websites and web products",
      billingLabel: "One-time build; optional care",
      scopeNotice: "Optional Care starts at 250 ₾ per month for a business site, 450 ₾ for an online store and 750 ₾ for a web platform. Final scope and third-party costs are specified in the offer.",
      rowLabels: ["Project", "Build price", "What customers can do", "Monthly care", "Useful when"],
      plans: {
        site: { name: "Business website", note: "So customers can learn about your services and contact you", cta: "Discuss website", values: ["Website", "From 2 000 ₾", "Contact and leave a request", "250 ₾ / month", "Service business"] },
        shop: { name: "Online store", note: "Catalog, ordering and payment in one place", cta: "Discuss store", values: ["Store", "From 4 000 ₾", "Catalog and ordering", "450 ₾ / month", "Online retail"] },
        platform: { name: "Web platform", note: "When a standard website is not enough", cta: "Discuss platform", values: ["Platform", "From 5 000 ₾", "Custom functionality", "750 ₾ / month", "A specific business process"] },
      },
    },
    aistaff: {
      label: "AI assistants for teams",
      summary: "aiSTAFF helps your team handle customer messages, connected accounts and catalog workflows; capacity and support grow with the package.",
      pricingModelLabel: "Monthly package",
      pricingModelDetail: "Choose by reply, connected-account and catalog capacity; Custom terms are agreed individually.",
      priceLead: "from 220 ₾ per month",
      decisionPrompt: "When your team needs customer replies, accounts and catalog work in one workflow.",
      visualAlt: "aiSTAFF glass team symbol",
      agentFacts: [
        { label: "How pricing works", value: "Monthly package" },
        { label: "Starting price", value: "220 ₾ per month" },
        { label: "What it includes", value: "Replies, accounts, catalog and automation" },
      ],
      sectionLabel: "AI assistants for teams",
      billingLabel: "Monthly packages",
      scopeNotice: "Public packages change reply, connected-account and catalog capacity. Custom is for more than 5 000 products or a non-standard process and is agreed individually. aiSTAFF is an AI assistant, not a human hiring service.",
      rowLabels: ["Replies per month", "Connected accounts", "Catalog size", "Catalog updates per month", "aiNOW support"],
      plans: {
        start: { name: "Start", note: "For one account and a small catalog", cta: "View package", values: ["3 000", "1", "20-100 products", "Not included", "Initial setup"] },
        expanded: { name: "Expanded", note: "For several channels and a knowledge base", cta: "View package", values: ["8 000", "3", "100-500 products", "1 000", "Initial setup"] },
        growth: { name: "Growth", note: "For a large catalog and ongoing support", cta: "View package", values: ["25 000", "5", "500-2 000 products", "4 000", "Ongoing support"] },
        scale: { name: "Scale", note: "For high volume and several accounts", cta: "View package", values: ["75 000", "10", "2 000-5 000 products", "10 000", "Priority support"] },
        custom: { name: "Custom", note: "For more than 5 000 products or a non-standard process", cta: "Discuss package", values: ["By agreement", "By agreement", "5 000+ products", "By agreement", "Individual support"] },
      },
    },
    iai: {
      label: "Connected business processes",
      summary: "Connects aiNOW products into one system when messages, calls, content and other work are spread across tools.",
      pricingModelLabel: "No public price",
      pricingModelDetail: "We could not verify a public iAI price. First we choose which products you need and how they should work together.",
      priceLead: "No public price",
      decisionPrompt: "When several aiNOW products need to work together for one task.",
      visualAlt: "iAI glass connected-processes symbol",
      agentFacts: [
        { label: "How pricing works", value: "No public price listed" },
        { label: "Starting point", value: "What needs solving and which products are needed" },
        { label: "Result", value: "Products and processes working together" },
      ],
      sectionLabel: "Connected business processes",
      billingLabel: "No public price listed",
      scopeNotice: "We could not verify a public iAI price. No amount is invented here; the process and required products are discussed separately.",
      rowLabels: ["Where we start", "What must work together", "Connected products", "How it is managed", "Price"],
      plans: {
        one: { name: "Request to task", note: "Define how an incoming request becomes a task and reaches the responsible teammate.", cta: "Discuss task", values: ["Request handling", "One process", "Required products", "Agreed rule", "No public price"] },
        connected: { name: "Connect products", note: "For example, use chat information to prepare a call and save the result in your work system.", cta: "Discuss connection", values: ["Chat, call and work system", "Connected processes", "Required products", "Shared rules", "No public price"] },
        system: { name: "Team workflows", note: "Define who receives a task, where results are checked and when a person must approve.", cta: "Discuss system", values: ["Tasks and control", "One connected system", "Required products", "Agreed management rule", "No public price"] },
      },
    },
  },
  ru: {
    aichats: {
      label: "Сообщения клиентов",
      summary: "Отвечает на вопросы клиентов, собирает запросы на заказ и запись и передаёт нужные детали вашей команде.",
      pricingModelLabel: "Ежемесячный пакет",
      pricingModelDetail: "Personal рассчитан на один Instagram-аккаунт или Facebook-страницу; бизнес-пакеты увеличивают объём ответов, аккаунтов и каталога.",
      priceLead: "от 100 ₾ в месяц",
      decisionPrompt: "Когда клиенты часто спрашивают цену, наличие, адрес или условия заказа.",
      visualAlt: "Стеклянный символ чата aiCHATS",
      agentFacts: [
        { label: "Как считается цена", value: "Personal или бизнес-пакет в месяц" },
        { label: "Начальная цена", value: "100 ₾ в месяц" },
        { label: "Что делает", value: "Ответы, аккаунты и каталог по объёму вашей работы" },
      ],
      sectionLabel: "Сообщения клиентов",
      billingLabel: "Ежемесячные пакеты",
      scopeNotice: "Personal стоит 100 ₾ в месяц; по текущей акции — 50 ₾ при оплате трёх месяцев вперёд, первый месяц бесплатный, итого за первые три месяца 100 ₾. В Personal входят 600 AI-ответов и один Instagram-аккаунт или Facebook-страница; база знаний и каталог не входят. Бизнес-пакеты расширяются, Custom согласуется отдельно.",
      rowLabels: ["Ответы в месяц", "Подключённые аккаунты", "Объём каталога", "Обновления информации в месяц", "Подойдёт, когда"],
      plans: {
        start: { name: "Старт", note: "Для одного аккаунта и небольшого каталога", cta: "Посмотреть пакет", values: ["3 000", "1", "20-100 товаров", "Не входит", "Ответы и данные клиентов"] },
        expanded: { name: "Расширенный", note: "Для нескольких каналов и базы знаний", cta: "Посмотреть пакет", values: ["8 000", "3", "100-500 товаров", "1 000", "База знаний и оценка лидов"] },
        growth: { name: "Рост", note: "Для большого каталога и постоянной поддержки", cta: "Посмотреть пакет", values: ["25 000", "5", "500-2 000 товаров", "4 000", "Сложные процессы и поддержка"] },
        scale: { name: "Масштаб", note: "Для большого объёма и нескольких аккаунтов", cta: "Посмотреть пакет", values: ["75 000", "10", "2 000-5 000 товаров", "10 000", "Максимальный объём и приоритет"] },
        personal: { name: "Personal", note: "Для одного Instagram-аккаунта или Facebook-страницы", cta: "Посмотреть пакет", values: ["600", "1", "Не входит", "Не входит", "Личные сообщения"] },
        custom: { name: "Custom", note: "Для нестандартного объёма и процесса", cta: "Обсудить пакет", values: ["По договорённости", "По договорённости", "5 000+ товаров", "По договорённости", "Индивидуальные условия"] },
      },
    },
    aicall: {
      label: "AI-звонки",
      summary: "Отвечает на входящие звонки и делает индивидуальные исходящие звонки по утверждённой вами задаче.",
      pricingModelLabel: "Платформа плюс соединённые исходящие минуты",
      pricingModelDetail: "В каждый пакет входит один одновременный входящий канал; отдельной поминутной телефонной платы за входящие нет. Каждый дополнительный канал стоит 60 ₾ в месяц, а соединённые исходящие минуты оплачиваются отдельно.",
      priceLead: "от 220 ₾ в месяц",
      decisionPrompt: "Когда нужно отвечать на входящие звонки или самим звонить клиентам.",
      visualAlt: "Стеклянный символ телефона aiCALL",
      agentFacts: [
        { label: "Как считается цена", value: "От 220 ₾ в месяц плюс соединённые исходящие минуты" },
        { label: "Первичная настройка", value: "150 ₾ один раз" },
        { label: "Стоимость звонков", value: "Входящие: 1 канал включён, отдельной поминутной платы нет; дополнительный канал: 60 ₾/мес.; исходящие: 1,50 ₾/соединённая минута" },
      ],
      sectionLabel: "AI-звонки",
      billingLabel: "Цена платформы; соединённые исходящие минуты добавляются отдельно",
      scopeNotice: "Настройка: 150 ₾ один раз. В каждый пакет входит один одновременный входящий канал, отдельной поминутной платы за входящие нет. Дополнительный канал стоит 60 ₾ в месяц, соединённая исходящая минута — 1,50 ₾. Массовые кампании, CSV-очереди и автоматические повторные звонки пока готовятся и не считаются активными функциями.",
      rowLabels: ["AI-роли", "Задачи звонков", "Одновременные входящие каналы", "Подключённые программы", "История звонков"],
      plans: {
        start: { name: "Старт", note: "Для одной AI-роли и одной задачи звонка", cta: "Посмотреть пакет", values: ["1 роль", "1 задача", "1", "Не входит", "30 дней"] },
        expanded: { name: "Расширенный", note: "Для небольшой команды с несколькими задачами звонков", cta: "Посмотреть пакет", values: ["1 роль", "3 задачи", "1", "1 подключение", "90 дней"] },
        growth: { name: "Рост", note: "Для нескольких ролей и процессов", cta: "Посмотреть пакет", values: ["3 роли", "10 задач", "1", "3 подключения", "365 дней"] },
        scale: { name: "Масштаб", note: "Для большой телефонной нагрузки", cta: "Посмотреть пакет", values: ["10 ролей", "25 задач", "1", "10 подключений", "Без ограничений"] },
        custom: { name: "Custom", note: "Для индивидуальной мощности, управления и поддержки; один входящий канал включён", cta: "Обсудить пакет", values: ["По договорённости", "По договорённости", "1", "По договорённости", "По договорённости"] },
      },
    },
    aicontent: {
      label: "Рекламные видео",
      summary: "Видео о продукте, в стиле UGC и с аватаром для соцсетей и рекламы.",
      pricingModelLabel: "Разовые и ежемесячные пакеты",
      pricingModelDetail: "Каждая публичная цена включает одно видео. Повторяющийся контент оформляется договором с индивидуальными объёмом и ценой.",
      priceLead: "50–100 ₾ за видео",
      decisionPrompt: "Когда нужно быстро привлечь внимание к продукту или услуге через видео.",
      visualAlt: "Стеклянный символ видеокамеры aiCONTENT",
      agentFacts: [
        { label: "Как считается цена", value: "За видео" },
        { label: "Цены видео", value: "50–100 ₾, 100–200 ₾ или от 200 ₾" },
        { label: "Правки", value: "Один раунд для каждого формата" },
      ],
      sectionLabel: "Рекламные видео",
      billingLabel: "Одно видео; ежемесячный пакет по договору",
      scopeNotice: "Все три публичные цены указаны за видео. Повторяющийся контент можно оформить ежемесячным пакетом: объём и цена индивидуально фиксируются в договоре. Для каждого формата включён один раунд правок. Реальная съёмка, настоящий инфлюенсер и актёр не входят.",
      rowLabels: ["Формат", "Цена", "Количество видео", "Раунды правок", "Подойдёт, когда"],
      plans: {
        promo: { name: "Промо-видео продукта", note: "Короткая реклама продукта, места или услуги без ведущего", cta: "Обсудить видео", values: ["Промо-видео продукта", "50–100 ₾", "1 готовое видео", "1 раунд", "Показать продукт или место"] },
        ugc: { name: "Генеративное UGC-видео", note: "Сгенерированный creator показывает или использует продукт естественно", cta: "Обсудить видео", values: ["Генеративное UGC-видео", "100–200 ₾", "1 готовое видео", "1 раунд", "Показать или использовать продукт"] },
        avatar: { name: "Персональный AI-аватар", note: "Созданное для вас постоянное лицо в кадре в стиле контент-креатора", cta: "Обсудить видео", values: ["Персональный AI-аватар", "от 200 ₾", "1 готовое видео", "1 раунд", "Сохранять единое лицо в кадре"] },
        monthly: { name: "Ежемесячный пакет", note: "Для регулярного производства контента; объём и цена согласуются индивидуально", cta: "Обсудить пакет", values: ["Индивидуальный ежемесячный пакет", "По договорённости", "По договорённости", "По договорённости", "Регулярное производство контента"] },
      },
    },
    aiweb: {
      label: "Сайты и веб-продукты",
      summary: "Создаём сайт, интернет-магазин или веб-продукт под ваш процесс. После запуска техническая поддержка добавляется при необходимости.",
      pricingModelLabel: "Разовая разработка плюс опциональная поддержка",
      pricingModelDetail: "Разработку оплачивают один раз; техническая поддержка добавляется только при необходимости.",
      priceLead: "от 2 000 ₾ разово",
      decisionPrompt: "Когда нужен сайт для заявок или веб-продукт под конкретный процесс бизнеса.",
      visualAlt: "Стеклянный символ веб-окна aiWEB",
      agentFacts: [
        { label: "Цена разработки", value: "От 2 000 ₾, зависит от типа проекта" },
        { label: "Техническая поддержка", value: "От 250 ₾ в месяц" },
        { label: "Результат", value: "Сайт, магазин или веб-продукт под задачу" },
      ],
      sectionLabel: "Сайты и веб-продукты",
      billingLabel: "Разработка разово; поддержка по желанию",
      scopeNotice: "Опциональная Care-поддержка начинается от 250 ₾ в месяц для бизнес-сайта, 450 ₾ для интернет-магазина и 750 ₾ для веб-платформы. Итоговый объём и расходы третьих сторон указываются в предложении.",
      rowLabels: ["Проект", "Цена разработки", "Что сможет клиент", "Поддержка в месяц", "Подойдёт, когда"],
      plans: {
        site: { name: "Бизнес-сайт", note: "Чтобы клиенты узнали о ваших услугах и связались с вами", cta: "Обсудить сайт", values: ["Сайт", "От 2 000 ₾", "Связаться и оставить заявку", "250 ₾ / месяц", "Сервисный бизнес"] },
        shop: { name: "Интернет-магазин", note: "Каталог, заказ и оплата в одном месте", cta: "Обсудить магазин", values: ["Магазин", "От 4 000 ₾", "Каталог и заказ", "450 ₾ / месяц", "Онлайн-торговля"] },
        platform: { name: "Веб-платформа", note: "Если стандартного сайта недостаточно", cta: "Обсудить платформу", values: ["Платформа", "От 5 000 ₾", "Индивидуальные функции", "750 ₾ / месяц", "Конкретный процесс бизнеса"] },
      },
    },
    aistaff: {
      label: "AI-ассистенты для команды",
      summary: "aiSTAFF помогает команде вести переписку с клиентами, работать с аккаунтами и каталогом; объём и поддержка растут вместе с пакетом.",
      pricingModelLabel: "Ежемесячный пакет",
      pricingModelDetail: "Пакет выбирается по объёму ответов, аккаунтов и каталога; условия Custom согласуются отдельно.",
      priceLead: "от 220 ₾ в месяц",
      decisionPrompt: "Когда команде нужно вести ответы, аккаунты и каталог в одном процессе.",
      visualAlt: "Стеклянный символ команды aiSTAFF",
      agentFacts: [
        { label: "Как считается цена", value: "Ежемесячный пакет" },
        { label: "Начальная цена", value: "220 ₾ в месяц" },
        { label: "Что входит", value: "Ответы, аккаунты, каталог и автоматизация" },
      ],
      sectionLabel: "AI-ассистенты для команды",
      billingLabel: "Ежемесячные пакеты",
      scopeNotice: "В публичных пакетах меняются объёмы ответов, аккаунтов и каталога. Custom предназначен для более чем 5 000 товаров или нестандартного процесса и согласуется отдельно. aiSTAFF — AI-ассистент, а не подбор человека.",
      rowLabels: ["Ответы в месяц", "Подключённые аккаунты", "Объём каталога", "Обновления каталога в месяц", "Поддержка aiNOW"],
      plans: {
        start: { name: "Старт", note: "Для одного аккаунта и небольшого каталога", cta: "Посмотреть пакет", values: ["3 000", "1", "20-100 товаров", "Не входит", "Первичная настройка"] },
        expanded: { name: "Расширенный", note: "Для нескольких каналов и базы знаний", cta: "Посмотреть пакет", values: ["8 000", "3", "100-500 товаров", "1 000", "Первичная настройка"] },
        growth: { name: "Рост", note: "Для большого каталога и постоянной поддержки", cta: "Посмотреть пакет", values: ["25 000", "5", "500-2 000 товаров", "4 000", "Постоянная поддержка"] },
        scale: { name: "Масштаб", note: "Для большого объёма и нескольких аккаунтов", cta: "Посмотреть пакет", values: ["75 000", "10", "2 000-5 000 товаров", "10 000", "Приоритетная поддержка"] },
        custom: { name: "Custom", note: "Для более чем 5 000 товаров или нестандартного процесса", cta: "Обсудить пакет", values: ["По договорённости", "По договорённости", "5 000+ товаров", "По договорённости", "Индивидуальная поддержка"] },
      },
    },
    iai: {
      label: "Объединение бизнес-процессов",
      summary: "Объединяет продукты aiNOW в одну систему, когда переписка, звонки, контент и другая работа разбросаны по разным инструментам.",
      pricingModelLabel: "Публичной цены нет",
      pricingModelDetail: "Публичную цену iAI подтвердить не удалось. Сначала определяем нужные продукты и то, как они должны работать вместе.",
      priceLead: "Публичной цены нет",
      decisionPrompt: "Когда несколько продуктов aiNOW должны работать вместе для одной задачи.",
      visualAlt: "Стеклянный символ объединённых процессов iAI",
      agentFacts: [
        { label: "Как считается цена", value: "Публичная цена не указана" },
        { label: "С чего начать", value: "Что нужно решить и какие продукты нужны" },
        { label: "Результат", value: "Совместно работающие продукты и процессы" },
      ],
      sectionLabel: "Объединение бизнес-процессов",
      billingLabel: "Публичная цена не указана",
      scopeNotice: "Публичную цену iAI подтвердить не удалось. Мы не придумываем сумму: процесс и нужные продукты обсуждаются отдельно.",
      rowLabels: ["С чего начинаем", "Что должно работать вместе", "Подключённые продукты", "Как управляется", "Цена"],
      plans: {
        one: { name: "От запроса к задаче", note: "Определяем, как входящий запрос становится задачей и попадает к ответственному сотруднику.", cta: "Обсудить задачу", values: ["Обработка запроса", "Один процесс", "Нужные продукты", "Согласованное правило", "Публичной цены нет"] },
        connected: { name: "Связать продукты", note: "Например, использовать данные чата для подготовки звонка и сохранить результат в рабочей системе.", cta: "Обсудить связь", values: ["Чат, звонок и рабочая система", "Связанные процессы", "Нужные продукты", "Общие правила", "Публичной цены нет"] },
        system: { name: "Рабочие процессы команды", note: "Определяем, кто получает задачу, где проверяется результат и когда нужно согласие человека.", cta: "Обсудить систему", values: ["Задачи и контроль", "Одна связанная система", "Нужные продукты", "Согласованное правило управления", "Публичной цены нет"] },
      },
    },
  },
  de: {
    aichats: {
      label: "Kundennachrichten",
      summary: "Beantwortet Kundenfragen, sammelt Bestell- und Buchungsanfragen und übergibt die nötigen Details an Ihr Team.",
      pricingModelLabel: "Monatliches Paket",
      pricingModelDetail: "Personal ist für ein Instagram-Konto oder eine Facebook-Seite gedacht; Business-Pakete erhöhen Antwort-, Konto- und Katalogkapazität.",
      priceLead: "ab 100 ₾ pro Monat",
      decisionPrompt: "Wenn Kunden häufig nach Preis, Verfügbarkeit, Adresse oder Bestellbedingungen fragen.",
      visualAlt: "Gläsernes Chat-Symbol von aiCHATS",
      agentFacts: [
        { label: "So wird abgerechnet", value: "Personal- oder Business-Paket pro Monat" },
        { label: "Startpreis", value: "100 ₾ pro Monat" },
        { label: "Was es tut", value: "Antworten, Konten und Katalog passend zu Ihrem Arbeitsumfang" },
      ],
      sectionLabel: "Kundennachrichten",
      billingLabel: "Monatliche Pakete",
      scopeNotice: "Personal kostet 100 ₾ pro Monat; die aktuelle Aktion beträgt 50 ₾ bei Vorauszahlung von drei Monaten, der erste Monat ist kostenlos—insgesamt 100 ₾ für die ersten drei Monate. Personal umfasst 600 AI-Antworten und ein Instagram-Konto oder eine Facebook-Seite; Wissensbasis und Katalog sind nicht enthalten. Business-Pakete wachsen mit, Custom wird vereinbart.",
      rowLabels: ["Antworten pro Monat", "Verbundene Konten", "Kataloggröße", "Informationsupdates pro Monat", "Sinnvoll, wenn"],
      plans: {
        start: { name: "Start", note: "Für ein Konto und einen kleinen Katalog", cta: "Paket ansehen", values: ["3 000", "1", "20-100 Produkte", "Nicht enthalten", "Antworten und Kundendaten"] },
        expanded: { name: "Erweitert", note: "Für mehrere Kanäle und eine Wissensbasis", cta: "Paket ansehen", values: ["8 000", "3", "100-500 Produkte", "1 000", "Wissensbasis und Lead-Bewertung"] },
        growth: { name: "Wachstum", note: "Für einen großen Katalog und laufenden Support", cta: "Paket ansehen", values: ["25 000", "5", "500-2 000 Produkte", "4 000", "Komplexe Prozesse und laufender Support"] },
        scale: { name: "Skalierung", note: "Für großes Volumen und mehrere Konten", cta: "Paket ansehen", values: ["75 000", "10", "2 000-5 000 Produkte", "10 000", "Maximales Volumen und Priorität"] },
        personal: { name: "Personal", note: "Für ein Instagram-Konto oder eine Facebook-Seite", cta: "Paket ansehen", values: ["600", "1", "Nicht enthalten", "Nicht enthalten", "Persönliche Nachrichten"] },
        custom: { name: "Custom", note: "Für nicht standardisierte Mengen und Abläufe", cta: "Paket besprechen", values: ["Nach Vereinbarung", "Nach Vereinbarung", "5 000+ Produkte", "Nach Vereinbarung", "Individuelle Bedingungen"] },
      },
    },
    aicall: {
      label: "AI-Anrufe",
      summary: "Beantwortet eingehende Anrufe und führt einzelne ausgehende Anrufe nach Ihrer freigegebenen Aufgabe durch.",
      pricingModelLabel: "Plattform plus verbundene ausgehende Minuten",
      pricingModelDetail: "Jedes Paket enthält einen gleichzeitigen eingehenden Kanal ohne separate Telefongebühr pro eingehender Minute. Jeder zusätzliche Kanal kostet 60 ₾ pro Monat; verbundene ausgehende Minuten werden separat berechnet.",
      priceLead: "ab 220 ₾ pro Monat",
      decisionPrompt: "Wenn Sie eingehende Anrufe beantworten oder Kunden selbst anrufen möchten.",
      visualAlt: "Gläsernes Telefonsymbol von aiCALL",
      agentFacts: [
        { label: "So wird abgerechnet", value: "Ab 220 ₾ pro Monat plus verbundene ausgehende Minuten" },
        { label: "Ersteinrichtung", value: "150 ₾ einmalig" },
        { label: "Anrufpreise", value: "Eingehend: 1 Kanal enthalten, keine separate Minuten-Telefongebühr; zusätzlicher Kanal: 60 ₾/Monat; ausgehend: 1,50 ₾/verbundene Min." },
      ],
      sectionLabel: "AI-Anrufe",
      billingLabel: "Plattformpreis; verbundene ausgehende Minuten kommen separat hinzu",
      scopeNotice: "Einrichtung: 150 ₾ einmalig. Jedes Paket enthält einen gleichzeitigen eingehenden Kanal ohne separate Telefongebühr pro eingehender Minute. Ein zusätzlicher Kanal kostet 60 ₾ pro Monat, eine verbundene ausgehende Minute 1,50 ₾. Massenkampagnen, CSV-Warteschlangen und automatische Wiederholungsanrufe werden noch vorbereitet und sind nicht aktiv.",
      rowLabels: ["AI-Rollen", "Anrufaufgaben", "Gleichzeitige eingehende Kanäle", "Verbundene Programme", "Anrufhistorie"],
      plans: {
        start: { name: "Start", note: "Für eine AI-Rolle und eine Anrufaufgabe", cta: "Paket ansehen", values: ["1 Rolle", "1 Aufgabe", "1", "Nicht enthalten", "30 Tage"] },
        expanded: { name: "Erweitert", note: "Für ein kleines Team mit mehreren Anrufaufgaben", cta: "Paket ansehen", values: ["1 Rolle", "3 Aufgaben", "1", "1 Verbindung", "90 Tage"] },
        growth: { name: "Wachstum", note: "Für mehrere Rollen und Prozesse", cta: "Paket ansehen", values: ["3 Rollen", "10 Aufgaben", "1", "3 Verbindungen", "365 Tage"] },
        scale: { name: "Skalierung", note: "Für ein hohes Anrufvolumen", cta: "Paket ansehen", values: ["10 Rollen", "25 Aufgaben", "1", "10 Verbindungen", "Unbegrenzt"] },
        custom: { name: "Custom", note: "Für individuelle Kapazität, Steuerung und Support; ein eingehender Kanal enthalten", cta: "Paket besprechen", values: ["Nach Vereinbarung", "Nach Vereinbarung", "1", "Nach Vereinbarung", "Nach Vereinbarung"] },
      },
    },
    aicontent: {
      label: "Werbevideos",
      summary: "Produkt-, UGC- und Avatar-Videos für Social Media und Werbung.",
      pricingModelLabel: "Einmalige und monatliche Pakete",
      pricingModelDetail: "Jeder öffentliche Preis gilt für ein Video. Wiederkehrender Content wird per Vertrag mit individuell vereinbartem Umfang und Preis geregelt.",
      priceLead: "50–100 ₾ pro Video",
      decisionPrompt: "Wenn ein Produkt oder eine Dienstleistung im Video schnell Aufmerksamkeit bekommen soll.",
      visualAlt: "Gläsernes Videokamera-Symbol von aiCONTENT",
      agentFacts: [
        { label: "So wird abgerechnet", value: "Pro Video" },
        { label: "Videopreise", value: "50–100 ₾, 100–200 ₾ oder ab 200 ₾" },
        { label: "Korrekturen", value: "Eine Runde pro Format" },
      ],
      sectionLabel: "Werbevideos",
      billingLabel: "Ein Video; Monatsangebot per Vertrag",
      scopeNotice: "Alle drei öffentlichen Preise gelten pro Video. Wiederkehrender Content kann monatlich vereinbart werden: Umfang und Preis werden individuell im Vertrag festgelegt. Pro Format ist eine Korrekturrunde enthalten. Echtes Filmen, ein echter Influencer und ein Schauspieler sind nicht enthalten.",
      rowLabels: ["Format", "Preis", "Anzahl Videos", "Korrekturrunden", "Sinnvoll, wenn"],
      plans: {
        promo: { name: "Produkt-Promovideo", note: "Kurze Werbung für Produkt, Ort oder Dienstleistung ohne Moderator", cta: "Video besprechen", values: ["Produkt-Promovideo", "50–100 ₾", "1 fertiges Video", "1 Runde", "Produkt oder Ort zeigen"] },
        ugc: { name: "Generatives UGC-Video", note: "Ein generierter Creator zeigt oder nutzt das Produkt in natürlichem Stil", cta: "Video besprechen", values: ["Generatives UGC-Video", "100–200 ₾", "1 fertiges Video", "1 Runde", "Produkt zeigen oder nutzen"] },
        avatar: { name: "Persönlicher AI-Avatar", note: "Ein für Sie erstelltes, wiederkehrendes Gesicht im Content-Creator-Stil", cta: "Video besprechen", values: ["Persönlicher AI-Avatar", "ab 200 ₾", "1 fertiges Video", "1 Runde", "Ein einheitliches Gesicht im Bild behalten"] },
        monthly: { name: "Monatliches Paket", note: "Für regelmäßige Content-Produktion; Umfang und Preis werden individuell vereinbart", cta: "Paket besprechen", values: ["Individuelles Monatsangebot", "Nach Vereinbarung", "Nach Vereinbarung", "Nach Vereinbarung", "Regelmäßige Content-Produktion"] },
      },
    },
    aiweb: {
      label: "Websites und Webprodukte",
      summary: "Wir erstellen eine Website, einen Onlineshop oder ein individuelles Webprodukt. Technische Betreuung kommt nach dem Start bei Bedarf hinzu.",
      pricingModelLabel: "Einmalige Erstellung plus optionale Betreuung",
      pricingModelDetail: "Die Erstellung wird einmalig bezahlt; technische Betreuung wird nur bei Bedarf ergänzt.",
      priceLead: "ab 2 000 ₾ einmalig",
      decisionPrompt: "Wenn Sie eine Website für Anfragen oder ein Webprodukt für Ihren Geschäftsprozess brauchen.",
      visualAlt: "Gläsernes Webfenster-Symbol von aiWEB",
      agentFacts: [
        { label: "Erstellungspreis", value: "Ab 2 000 ₾, je nach Projekttyp" },
        { label: "Technische Betreuung", value: "Ab 250 ₾ pro Monat" },
        { label: "Ergebnis", value: "Website, Shop oder individuelles Webprodukt" },
      ],
      sectionLabel: "Websites und Webprodukte",
      billingLabel: "Einmalige Erstellung; Betreuung optional",
      scopeNotice: "Optionale Care-Betreuung beginnt bei 250 ₾ pro Monat für eine Business-Website, 450 ₾ für einen Onlineshop und 750 ₾ für eine Webplattform. Finaler Umfang und Kosten Dritter stehen im Angebot.",
      rowLabels: ["Projekt", "Erstellungspreis", "Was Kunden tun können", "Monatliche Betreuung", "Sinnvoll, wenn"],
      plans: {
        site: { name: "Business-Website", note: "Damit Kunden Ihre Leistungen kennenlernen und Kontakt aufnehmen", cta: "Website besprechen", values: ["Website", "Ab 2 000 ₾", "Kontakt aufnehmen und Anfrage senden", "250 ₾ / Monat", "Dienstleistungsbetrieb"] },
        shop: { name: "Onlineshop", note: "Katalog, Bestellung und Zahlung an einem Ort", cta: "Shop besprechen", values: ["Shop", "Ab 4 000 ₾", "Katalog und Bestellung", "450 ₾ / Monat", "Onlinehandel"] },
        platform: { name: "Webplattform", note: "Wenn eine Standard-Website nicht ausreicht", cta: "Plattform besprechen", values: ["Plattform", "Ab 5 000 ₾", "Individuelle Funktionen", "750 ₾ / Monat", "Konkreter Geschäftsprozess"] },
      },
    },
    aistaff: {
      label: "AI-Assistenten für Teams",
      summary: "aiSTAFF unterstützt Ihr Team bei Kundennachrichten, verbundenen Konten und Katalogprozessen; Umfang und Support wachsen mit dem Paket.",
      pricingModelLabel: "Monatliches Paket",
      pricingModelDetail: "Wählen Sie nach Antwort-, Konto- und Katalogkapazität; Custom-Bedingungen werden individuell vereinbart.",
      priceLead: "ab 220 ₾ pro Monat",
      decisionPrompt: "Wenn Ihr Team Antworten, Konten und Katalogarbeit in einem Ablauf braucht.",
      visualAlt: "Gläsernes Team-Symbol von aiSTAFF",
      agentFacts: [
        { label: "So wird abgerechnet", value: "Monatliches Paket" },
        { label: "Startpreis", value: "220 ₾ pro Monat" },
        { label: "Was enthalten ist", value: "Antworten, Konten, Katalog und Automatisierung" },
      ],
      sectionLabel: "AI-Assistenten für Teams",
      billingLabel: "Monatliche Pakete",
      scopeNotice: "Öffentliche Pakete unterscheiden sich bei Antwort-, Konto- und Katalogkapazität. Custom ist für mehr als 5 000 Produkte oder einen nicht standardisierten Prozess und wird individuell vereinbart. aiSTAFF ist ein AI-Assistent, kein Personalvermittlungsservice.",
      rowLabels: ["Antworten pro Monat", "Verbundene Konten", "Kataloggröße", "Katalogupdates pro Monat", "aiNOW-Support"],
      plans: {
        start: { name: "Start", note: "Für ein Konto und einen kleinen Katalog", cta: "Paket ansehen", values: ["3 000", "1", "20-100 Produkte", "Nicht enthalten", "Ersteinrichtung"] },
        expanded: { name: "Erweitert", note: "Für mehrere Kanäle und eine Wissensbasis", cta: "Paket ansehen", values: ["8 000", "3", "100-500 Produkte", "1 000", "Ersteinrichtung"] },
        growth: { name: "Wachstum", note: "Für einen großen Katalog und laufenden Support", cta: "Paket ansehen", values: ["25 000", "5", "500-2 000 Produkte", "4 000", "Laufender Support"] },
        scale: { name: "Skalierung", note: "Für großes Volumen und mehrere Konten", cta: "Paket ansehen", values: ["75 000", "10", "2 000-5 000 Produkte", "10 000", "Priorisierter Support"] },
        custom: { name: "Custom", note: "Für mehr als 5 000 Produkte oder einen nicht standardisierten Prozess", cta: "Paket besprechen", values: ["Nach Vereinbarung", "Nach Vereinbarung", "5 000+ Produkte", "Nach Vereinbarung", "Individueller Support"] },
      },
    },
    iai: {
      label: "Verbundene Geschäftsprozesse",
      summary: "Verbindet aiNOW-Produkte in einem System, wenn Nachrichten, Anrufe, Content und andere Arbeit über mehrere Tools verteilt sind.",
      pricingModelLabel: "Kein öffentlicher Preis",
      pricingModelDetail: "Ein öffentlicher iAI-Preis konnte nicht bestätigt werden. Zuerst klären wir, welche Produkte Sie brauchen und wie sie zusammenspielen.",
      priceLead: "Kein öffentlicher Preis",
      decisionPrompt: "Wenn mehrere aiNOW-Produkte für eine Aufgabe zusammenarbeiten müssen.",
      visualAlt: "Gläsernes Symbol verbundener Prozesse von iAI",
      agentFacts: [
        { label: "So wird abgerechnet", value: "Kein öffentlicher Preis angegeben" },
        { label: "Startpunkt", value: "Was gelöst werden soll und welche Produkte nötig sind" },
        { label: "Ergebnis", value: "Zusammenarbeitende Produkte und Prozesse" },
      ],
      sectionLabel: "Verbundene Geschäftsprozesse",
      billingLabel: "Kein öffentlicher Preis angegeben",
      scopeNotice: "Ein öffentlicher iAI-Preis konnte nicht bestätigt werden. Wir erfinden keinen Betrag; Prozess und benötigte Produkte werden separat besprochen.",
      rowLabels: ["Wo wir beginnen", "Was zusammenspielen muss", "Verbundene Produkte", "Wie es gesteuert wird", "Preis"],
      plans: {
        one: { name: "Von Anfrage zu Aufgabe", note: "Festlegen, wie eine Anfrage zur Aufgabe wird und den zuständigen Mitarbeitenden erreicht.", cta: "Aufgabe besprechen", values: ["Anfragenbearbeitung", "Ein Prozess", "Benötigte Produkte", "Vereinbarte Regel", "Kein öffentlicher Preis"] },
        connected: { name: "Produkte verbinden", note: "Zum Beispiel Chatinformationen für einen Anruf nutzen und das Ergebnis im Arbeitssystem speichern.", cta: "Verbindung besprechen", values: ["Chat, Anruf und Arbeitssystem", "Verbundene Prozesse", "Benötigte Produkte", "Gemeinsame Regeln", "Kein öffentlicher Preis"] },
        system: { name: "Teamabläufe", note: "Festlegen, wer eine Aufgabe erhält, wo Ergebnisse geprüft werden und wann ein Mensch zustimmen muss.", cta: "System besprechen", values: ["Aufgaben und Kontrolle", "Ein verbundenes System", "Benötigte Produkte", "Vereinbarte Steuerungsregel", "Kein öffentlicher Preis"] },
      },
    },
  },
  tr: {
    aichats: {
      label: "Müşteri mesajları",
      summary: "Müşteri sorularını yanıtlar, sipariş ve rezervasyon taleplerini toplar ve gerekli bilgileri ekibinize iletir.",
      pricingModelLabel: "Aylık paket",
      pricingModelDetail: "Personal tek bir Instagram hesabı veya Facebook Sayfası içindir; işletme paketleri yanıt, hesap ve katalog kapasitesini artırır.",
      priceLead: "aylık 100 ₾'den başlayan",
      decisionPrompt: "Müşteriler fiyat, uygunluk, adres veya sipariş koşullarını sıkça sorduğunda.",
      visualAlt: "aiCHATS cam sohbet simgesi",
      agentFacts: [
        { label: "Fiyat nasıl hesaplanır", value: "Aylık Personal veya işletme paketi" },
        { label: "Başlangıç fiyatı", value: "Ayda 100 ₾" },
        { label: "Ne yapar", value: "İş hacminize göre yanıtlar, hesaplar ve katalog" },
      ],
      sectionLabel: "Müşteri mesajları",
      billingLabel: "Aylık paketler",
      scopeNotice: "Personal ayda 100 ₾'dir; güncel kampanyada üç ay peşin ödemeyle 50 ₾, ilk ay ücretsizdir—ilk üç ay toplamı 100 ₾ olur. Personal 600 AI yanıtı ve bir Instagram hesabı veya Facebook Sayfasını içerir; bilgi tabanı ve katalog dahil değildir. İşletme paketleri büyür; Custom ayrıca kararlaştırılır.",
      rowLabels: ["Aylık yanıtlar", "Bağlı hesaplar", "Katalog kapasitesi", "Aylık bilgi güncellemeleri", "Şu durumda uygun"],
      plans: {
        start: { name: "Başlangıç", note: "Bir hesap ve küçük bir katalog için", cta: "Paketi görüntüle", values: ["3 000", "1", "20-100 ürün", "Dahil değil", "Yanıtlar ve müşteri verileri"] },
        expanded: { name: "Genişletilmiş", note: "Birden fazla kanal ve bilgi tabanı için", cta: "Paketi görüntüle", values: ["8 000", "3", "100-500 ürün", "1 000", "Bilgi tabanı ve müşteri adayı puanlama"] },
        growth: { name: "Büyüme", note: "Büyük katalog ve sürekli destek için", cta: "Paketi görüntüle", values: ["25 000", "5", "500-2 000 ürün", "4 000", "Karmaşık süreçler ve sürekli destek"] },
        scale: { name: "Ölçek", note: "Yüksek hacim ve birden fazla hesap için", cta: "Paketi görüntüle", values: ["75 000", "10", "2 000-5 000 ürün", "10 000", "Maksimum hacim ve öncelik"] },
        personal: { name: "Personal", note: "Bir Instagram hesabı veya Facebook Sayfası için", cta: "Paketi görüntüle", values: ["600", "1", "Dahil değil", "Dahil değil", "Kişisel mesajlar"] },
        custom: { name: "Custom", note: "Standart dışı hacim ve iş akışları için", cta: "Paketi görüş", values: ["Anlaşmayla", "Anlaşmayla", "5 000+ ürün", "Anlaşmayla", "Özel koşullar"] },
      },
    },
    aicall: {
      label: "AI aramaları",
      summary: "Gelen aramaları yanıtlar ve onayladığınız göreve göre bireysel giden aramalar yapar.",
      pricingModelLabel: "Platform ve bağlı giden dakikalar",
      pricingModelDetail: "Her pakete ayrı bir gelen dakika telefon ücreti olmadan bir eşzamanlı gelen kanal dahildir. Her ek kanal ayda 60 ₾; bağlı giden dakikalar ayrıca ücretlendirilir.",
      priceLead: "aylık 220 ₾'den başlayan",
      decisionPrompt: "Gelen aramaları yanıtlamak veya müşterileri kendiniz aramak istediğinizde.",
      visualAlt: "aiCALL cam telefon simgesi",
      agentFacts: [
        { label: "Fiyat nasıl hesaplanır", value: "Ayda 220 ₾'den başlayan fiyat + bağlı giden dakikalar" },
        { label: "İlk kurulum", value: "Bir kez 150 ₾" },
        { label: "Arama fiyatları", value: "Gelen: 1 kanal dahil, ayrı dakika telefon ücreti yok; ek kanal: ayda 60 ₾; giden: 1,50 ₾/bağlı dk" },
      ],
      sectionLabel: "AI aramaları",
      billingLabel: "Platform fiyatı; bağlı giden dakikalar ayrıca eklenir",
      scopeNotice: "Kurulum: bir kez 150 ₾. Her pakete bir eşzamanlı gelen kanal dahildir ve gelen dakikalar için ayrı dakika telefon ücreti yoktur. Ek kanal ayda 60 ₾, bağlı giden dakika 1,50 ₾'dir. Toplu kampanyalar, CSV kuyrukları ve otomatik tekrarlı aramalar hazırlanmaktadır; aktif özellik değildir.",
      rowLabels: ["AI rolleri", "Arama görevleri", "Eşzamanlı gelen kanallar", "Bağlı programlar", "Arama geçmişi"],
      plans: {
        start: { name: "Başlangıç", note: "Bir AI rolü ve bir arama görevi için", cta: "Paketi görüntüle", values: ["1 rol", "1 görev", "1", "Dahil değil", "30 gün"] },
        expanded: { name: "Genişletilmiş", note: "Birden fazla arama görevi olan küçük ekip için", cta: "Paketi görüntüle", values: ["1 rol", "3 görev", "1", "1 bağlantı", "90 gün"] },
        growth: { name: "Büyüme", note: "Birden fazla rol ve süreç için", cta: "Paketi görüntüle", values: ["3 rol", "10 görev", "1", "3 bağlantı", "365 gün"] },
        scale: { name: "Ölçek", note: "Yüksek telefon trafiği için", cta: "Paketi görüntüle", values: ["10 rol", "25 görev", "1", "10 bağlantı", "Sınırsız"] },
        custom: { name: "Custom", note: "Özel kapasite, yönetim ve destek için; bir gelen kanal dahil", cta: "Paketi görüş", values: ["Anlaşmayla", "Anlaşmayla", "1", "Anlaşmayla", "Anlaşmayla"] },
      },
    },
    aicontent: {
      label: "Reklam videoları",
      summary: "Sosyal medya ve reklam için ürün, UGC tarzı ve avatar videoları.",
      pricingModelLabel: "Tek seferlik ve aylık paketler",
      pricingModelDetail: "Her herkese açık fiyat bir videoyu kapsar. Tekrarlayan içerik, kapsam ve fiyatı sözleşmeyle ayrıca belirlenerek hazırlanır.",
      priceLead: "video başına 50–100 ₾",
      decisionPrompt: "Bir ürün veya hizmetin videoda hızla dikkat çekmesini istediğinizde.",
      visualAlt: "aiCONTENT cam video kamera simgesi",
      agentFacts: [
        { label: "Fiyat nasıl hesaplanır", value: "Video başına" },
        { label: "Video fiyatları", value: "50–100 ₾, 100–200 ₾ veya 200 ₾'den başlayan" },
        { label: "Revizyon", value: "Her format için bir tur" },
      ],
      sectionLabel: "Reklam videoları",
      billingLabel: "Bir video; aylık paket sözleşmeyle",
      scopeNotice: "Üç herkese açık fiyat da video başınadır. Tekrarlayan içerik için aylık paket yapılabilir: kapsam ve fiyat sözleşmede bireysel olarak belirlenir. Her formatta bir revizyon turu dahildir. Gerçek çekim, gerçek influencer ve oyuncu dahil değildir.",
      rowLabels: ["Format", "Fiyat", "Video sayısı", "Revizyon turları", "Şu durumda uygun"],
      plans: {
        promo: { name: "Ürün tanıtım videosu", note: "Sunucu olmadan ürün, mekân veya hizmet için kısa reklam", cta: "Videoyu görüş", values: ["Ürün tanıtım videosu", "50–100 ₾", "1 hazır video", "1 tur", "Ürün veya mekânı göstermek"] },
        ugc: { name: "Üretken UGC videosu", note: "Üretilen creator ürünü doğal bir tarzda gösterir veya kullanır", cta: "Videoyu görüş", values: ["Üretken UGC videosu", "100–200 ₾", "1 hazır video", "1 tur", "Ürünü göstermek veya kullanmak"] },
        avatar: { name: "Kişisel AI avatarı", note: "Sizin için içerik üreticisi tarzında oluşturulan kalıcı ekran yüzü", cta: "Videoyu görüş", values: ["Kişisel AI avatarı", "200 ₾'den başlayan", "1 hazır video", "1 tur", "Ekranda tutarlı bir yüz kullanmak"] },
        monthly: { name: "Aylık paket", note: "Tekrarlayan içerik üretimi için; kapsam ve fiyat bireysel olarak belirlenir", cta: "Paketi görüş", values: ["Özel aylık paket", "Anlaşmayla", "Anlaşmayla", "Anlaşmayla", "Tekrarlayan içerik üretimi"] },
      },
    },
    aiweb: {
      label: "Web siteleri ve web ürünleri",
      summary: "Web sitesi, online mağaza veya özel web ürünü oluşturuyoruz. Lansmandan sonra teknik bakım gerektiğinde eklenir.",
      pricingModelLabel: "Tek seferlik geliştirme ve isteğe bağlı bakım",
      pricingModelDetail: "Geliştirme bir kez ödenir; teknik bakım yalnızca gerektiğinde eklenir.",
      priceLead: "tek seferlik 2 000 ₾'den başlayan",
      decisionPrompt: "Talep alan bir siteye veya iş sürecinize göre hazırlanmış web ürününe ihtiyaç duyduğunuzda.",
      visualAlt: "aiWEB cam web pencere simgesi",
      agentFacts: [
        { label: "Geliştirme fiyatı", value: "Proje türüne göre 2 000 ₾'den başlayan" },
        { label: "Teknik bakım", value: "Ayda 250 ₾'den başlayan" },
        { label: "Sonuç", value: "Web sitesi, mağaza veya özel web ürünü" },
      ],
      sectionLabel: "Web siteleri ve web ürünleri",
      billingLabel: "Tek seferlik geliştirme; isteğe bağlı bakım",
      scopeNotice: "İsteğe bağlı Care bakımı işletme sitesi için ayda 250 ₾, online mağaza için 450 ₾ ve web platformu için 750 ₾'den başlar. Son kapsam ve üçüncü taraf maliyetleri teklifte belirtilir.",
      rowLabels: ["Proje", "Geliştirme fiyatı", "Müşteri ne yapabilir", "Aylık bakım", "Şu durumda uygun"],
      plans: {
        site: { name: "İşletme sitesi", note: "Müşteriler hizmetlerinizi tanısın ve sizinle iletişime geçsin", cta: "Siteyi görüş", values: ["Web sitesi", "2 000 ₾'den başlayan", "İletişim ve talep bırakma", "250 ₾ / ay", "Hizmet işletmesi"] },
        shop: { name: "Online mağaza", note: "Katalog, sipariş ve ödeme tek yerde", cta: "Mağazayı görüş", values: ["Mağaza", "4 000 ₾'den başlayan", "Katalog ve sipariş", "450 ₾ / ay", "Online ticaret"] },
        platform: { name: "Web platformu", note: "Standart web sitesi yeterli olmadığında", cta: "Platformu görüş", values: ["Platform", "5 000 ₾'den başlayan", "Özel işlevler", "750 ₾ / ay", "Belirli iş süreci"] },
      },
    },
    aistaff: {
      label: "Ekipler için AI asistanları",
      summary: "aiSTAFF ekibinize müşteri mesajları, bağlı hesaplar ve katalog süreçlerinde yardımcı olur; kapasite ve destek paketle birlikte artar.",
      pricingModelLabel: "Aylık paket",
      pricingModelDetail: "Yanıt, bağlı hesap ve katalog kapasitesine göre seçin; Custom koşulları ayrıca belirlenir.",
      priceLead: "aylık 220 ₾'den başlayan",
      decisionPrompt: "Ekibinizin yanıtları, hesapları ve katalog işlerini tek iş akışında yönetmesi gerektiğinde.",
      visualAlt: "aiSTAFF cam ekip simgesi",
      agentFacts: [
        { label: "Fiyat nasıl hesaplanır", value: "Aylık paket" },
        { label: "Başlangıç fiyatı", value: "Ayda 220 ₾" },
        { label: "Neleri kapsar", value: "Yanıtlar, hesaplar, katalog ve otomasyon" },
      ],
      sectionLabel: "Ekipler için AI asistanları",
      billingLabel: "Aylık paketler",
      scopeNotice: "Herkese açık paketler yanıt, bağlı hesap ve katalog kapasitesine göre değişir. Custom, 5 000'den fazla ürün veya standart dışı süreç içindir ve ayrıca belirlenir. aiSTAFF bir AI asistanıdır; insan işe alım hizmeti değildir.",
      rowLabels: ["Aylık yanıtlar", "Bağlı hesaplar", "Katalog kapasitesi", "Aylık katalog güncellemeleri", "aiNOW desteği"],
      plans: {
        start: { name: "Başlangıç", note: "Bir hesap ve küçük katalog için", cta: "Paketi görüntüle", values: ["3 000", "1", "20-100 ürün", "Dahil değil", "İlk kurulum"] },
        expanded: { name: "Genişletilmiş", note: "Birden fazla kanal ve bilgi tabanı için", cta: "Paketi görüntüle", values: ["8 000", "3", "100-500 ürün", "1 000", "İlk kurulum"] },
        growth: { name: "Büyüme", note: "Büyük katalog ve sürekli destek için", cta: "Paketi görüntüle", values: ["25 000", "5", "500-2 000 ürün", "4 000", "Sürekli destek"] },
        scale: { name: "Ölçek", note: "Yüksek hacim ve birden fazla hesap için", cta: "Paketi görüntüle", values: ["75 000", "10", "2 000-5 000 ürün", "10 000", "Öncelikli destek"] },
        custom: { name: "Custom", note: "5 000'den fazla ürün veya standart dışı süreç için", cta: "Paketi görüş", values: ["Anlaşmayla", "Anlaşmayla", "5 000+ ürün", "Anlaşmayla", "Özel destek"] },
      },
    },
    iai: {
      label: "Bağlı iş süreçleri",
      summary: "Mesajlar, aramalar, içerik ve diğer işler farklı araçlara dağılmışsa aiNOW ürünlerini tek bir sistemde birleştirir.",
      pricingModelLabel: "Herkese açık fiyat yok",
      pricingModelDetail: "iAI için herkese açık bir fiyat doğrulayamadık. Önce hangi ürünlere ihtiyacınız olduğunu ve birlikte nasıl çalışacaklarını belirleriz.",
      priceLead: "Herkese açık fiyat yok",
      decisionPrompt: "Tek bir görev için birden fazla aiNOW ürününün birlikte çalışması gerektiğinde.",
      visualAlt: "iAI cam bağlı süreçler simgesi",
      agentFacts: [
        { label: "Fiyat nasıl hesaplanır", value: "Herkese açık fiyat belirtilmemiş" },
        { label: "Başlangıç noktası", value: "Ne çözülecek ve hangi ürünler gerekli" },
        { label: "Sonuç", value: "Birlikte çalışan ürünler ve süreçler" },
      ],
      sectionLabel: "Bağlı iş süreçleri",
      billingLabel: "Herkese açık fiyat belirtilmemiş",
      scopeNotice: "iAI için herkese açık bir fiyat doğrulayamadık. Bir rakam uydurmuyoruz; süreç ve gerekli ürünler ayrıca görüşülür.",
      rowLabels: ["Nereden başlarız", "Birlikte ne çalışmalı", "Bağlı ürünler", "Nasıl yönetilir", "Fiyat"],
      plans: {
        one: { name: "Talepten göreve", note: "Gelen talebin göreve dönüşmesini ve sorumlu ekip arkadaşına ulaşmasını tanımlarız.", cta: "Görevi görüş", values: ["Talep işleme", "Bir süreç", "Gerekli ürünler", "Kararlaştırılmış kural", "Herkese açık fiyat yok"] },
        connected: { name: "Ürünleri bağlama", note: "Örneğin sohbet bilgisini aramaya hazırlıkta kullanır ve sonucu iş sisteminizde saklarız.", cta: "Bağlantıyı görüş", values: ["Sohbet, arama ve iş sistemi", "Bağlı süreçler", "Gerekli ürünler", "Ortak kurallar", "Herkese açık fiyat yok"] },
        system: { name: "Ekip iş akışları", note: "Görevi kimin alacağını, sonucun nerede kontrol edileceğini ve insan onayının gerektiği adımı belirleriz.", cta: "Sistemi görüş", values: ["Görevler ve kontrol", "Tek bağlı sistem", "Gerekli ürünler", "Kararlaştırılmış yönetim kuralı", "Herkese açık fiyat yok"] },
      },
    },
  },
  fa: {
    aichats: {
      label: "پیام‌های مشتریان",
      summary: "به پرسش‌های مشتریان پاسخ می‌دهد، درخواست‌های سفارش و رزرو را جمع‌آوری می‌کند و جزئیات لازم را به تیم شما می‌رساند.",
      pricingModelLabel: "پکیج ماهانه",
      pricingModelDetail: "Personal برای یک حساب اینستاگرام یا صفحه فیس‌بوک است؛ پکیج‌های کسب‌وکاری ظرفیت پاسخ، حساب و کاتالوگ را افزایش می‌دهند.",
      priceLead: "از 100 ₾ در ماه",
      decisionPrompt: "وقتی مشتریان مرتب درباره قیمت، موجودی، آدرس یا شرایط سفارش سؤال می‌کنند.",
      visualAlt: "نماد شیشه‌ای گفت‌وگوی aiCHATS",
      agentFacts: [
        { label: "قیمت چگونه محاسبه می‌شود", value: "پکیج Personal یا کسب‌وکاری در ماه" },
        { label: "قیمت شروع", value: "100 ₾ در ماه" },
        { label: "چه کاری انجام می‌دهد", value: "پاسخ‌ها، حساب‌ها و کاتالوگ متناسب با حجم کار شما" },
      ],
      sectionLabel: "پیام‌های مشتریان",
      billingLabel: "پکیج‌های ماهانه",
      scopeNotice: "Personal ماهانه 100 ₾ است؛ در پیشنهاد فعلی با پرداخت سه ماه پیشاپیش 50 ₾ و ماه اول رایگان است—جمع سه ماه اول 100 ₾ می‌شود. Personal شامل 600 پاسخ AI و یک حساب اینستاگرام یا صفحه فیس‌بوک است؛ پایگاه دانش و کاتالوگ شامل نمی‌شود. پکیج‌های کسب‌وکاری قابل افزایش‌اند و Custom توافقی است.",
      rowLabels: ["پاسخ در ماه", "حساب‌های متصل", "حجم کاتالوگ", "به‌روزرسانی اطلاعات در ماه", "مناسب است وقتی"],
      plans: {
        start: { name: "شروع", note: "برای یک حساب و کاتالوگ کوچک", cta: "دیدن پکیج", values: ["3 000", "1", "20-100 محصول", "شامل نمی‌شود", "پاسخ‌ها و داده‌های مشتری"] },
        expanded: { name: "گسترده", note: "برای چند کانال و پایگاه دانش", cta: "دیدن پکیج", values: ["8 000", "3", "100-500 محصول", "1 000", "پایگاه دانش و امتیازدهی سرنخ"] },
        growth: { name: "رشد", note: "برای کاتالوگ بزرگ و پشتیبانی مداوم", cta: "دیدن پکیج", values: ["25 000", "5", "500-2 000 محصول", "4 000", "فرایندهای پیچیده و پشتیبانی مداوم"] },
        scale: { name: "مقیاس", note: "برای حجم بالا و چند حساب", cta: "دیدن پکیج", values: ["75 000", "10", "2 000-5 000 محصول", "10 000", "بیشترین حجم و اولویت"] },
        personal: { name: "Personal", note: "برای یک حساب اینستاگرام یا صفحه فیس‌بوک", cta: "دیدن پکیج", values: ["600", "1", "شامل نمی‌شود", "شامل نمی‌شود", "پیام‌های شخصی"] },
        custom: { name: "Custom", note: "برای حجم و فرایند غیر استاندارد", cta: "بررسی پکیج", values: ["با توافق", "با توافق", "5 000+ محصول", "با توافق", "شرایط اختصاصی"] },
      },
    },
    aicall: {
      label: "تماس‌های AI",
      summary: "به تماس‌های ورودی پاسخ می‌دهد و طبق وظیفه تأییدشده شما تماس‌های خروجی فردی برقرار می‌کند.",
      pricingModelLabel: "پلتفرم به‌علاوه دقیقه‌های خروجی متصل",
      pricingModelDetail: "هر پکیج شامل یک کانال ورودی هم‌زمان است و برای هر دقیقه ورودی هزینه تلفنی جداگانه ندارد. هر کانال اضافه ماهانه ۶۰ ₾ است و دقیقه‌های خروجی متصل جداگانه محاسبه می‌شوند.",
      priceLead: "از 220 ₾ در ماه",
      decisionPrompt: "وقتی می‌خواهید به تماس‌های ورودی پاسخ دهید یا خودتان با مشتریان تماس بگیرید.",
      visualAlt: "نماد شیشه‌ای تلفن aiCALL",
      agentFacts: [
        { label: "قیمت چگونه محاسبه می‌شود", value: "از 220 ₾ در ماه به‌علاوه دقیقه‌های خروجی متصل" },
        { label: "راه‌اندازی اولیه", value: "150 ₾ یک‌باره" },
        { label: "هزینه تماس", value: "ورودی: ۱ کانال شامل است و هزینه تلفنی جداگانه ندارد؛ کانال اضافه: ماهانه ۶۰ ₾؛ خروجی: ۱٫۵۰ ₾/دقیقه متصل" },
      ],
      sectionLabel: "تماس‌های AI",
      billingLabel: "هزینه پلتفرم؛ دقیقه‌های خروجی متصل جداگانه اضافه می‌شوند",
      scopeNotice: "راه‌اندازی: 150 ₾ یک‌باره. هر پکیج شامل یک کانال ورودی هم‌زمان است و برای دقیقه‌های ورودی هزینه تلفنی جداگانه ندارد. کانال اضافه ماهانه ۶۰ ₾ و هر دقیقه خروجی متصل ۱٫۵۰ ₾ است. کمپین‌های انبوه، صف‌های CSV و تماس‌های تکراری خودکار هنوز در حال آماده‌سازی‌اند و قابلیت فعال محسوب نمی‌شوند.",
      rowLabels: ["نقش‌های AI", "وظایف تماس", "کانال‌های ورودی هم‌زمان", "برنامه‌های متصل", "تاریخچه تماس"],
      plans: {
        start: { name: "شروع", note: "برای یک نقش AI و یک وظیفه تماس", cta: "دیدن پکیج", values: ["1 نقش", "1 وظیفه", "1", "شامل نمی‌شود", "30 روز"] },
        expanded: { name: "گسترده", note: "برای تیم کوچک با چند وظیفه تماس", cta: "دیدن پکیج", values: ["1 نقش", "3 وظیفه", "1", "1 اتصال", "90 روز"] },
        growth: { name: "رشد", note: "برای چند نقش و فرایند", cta: "دیدن پکیج", values: ["3 نقش", "10 وظیفه", "1", "3 اتصال", "365 روز"] },
        scale: { name: "مقیاس", note: "برای حجم بالای تماس تلفنی", cta: "دیدن پکیج", values: ["10 نقش", "25 وظیفه", "1", "10 اتصال", "نامحدود"] },
        custom: { name: "Custom", note: "برای ظرفیت، مدیریت و پشتیبانی اختصاصی؛ یک کانال ورودی شامل است", cta: "بررسی پکیج", values: ["با توافق", "با توافق", "1", "با توافق", "با توافق"] },
      },
    },
    aicontent: {
      label: "ویدیوهای تبلیغاتی",
      summary: "ویدیوهای محصول، سبک UGC و آواتار برای شبکه‌های اجتماعی و تبلیغات.",
      pricingModelLabel: "پکیج‌های یک‌باره و ماهانه",
      pricingModelDetail: "هر قیمت عمومی شامل یک ویدیو است. محتوای تکرارشونده با قرارداد و حجم و قیمت توافقی تنظیم می‌شود.",
      priceLead: "50–100 ₾ برای هر ویدیو",
      decisionPrompt: "وقتی می‌خواهید محصول یا خدمت شما در ویدیو سریع جلب توجه کند.",
      visualAlt: "نماد شیشه‌ای دوربین ویدیویی aiCONTENT",
      agentFacts: [
        { label: "قیمت چگونه محاسبه می‌شود", value: "برای هر ویدیو" },
        { label: "قیمت ویدیو", value: "50–100 ₾، 100–200 ₾ یا از 200 ₾" },
        { label: "اصلاحات", value: "یک مرحله برای هر فرمت" },
      ],
      sectionLabel: "ویدیوهای تبلیغاتی",
      billingLabel: "یک ویدیو؛ پکیج ماهانه با قرارداد",
      scopeNotice: "هر سه قیمت عمومی برای یک ویدیو هستند. برای محتوای تکرارشونده پکیج ماهانه ممکن است: حجم و قیمت به‌صورت فردی در قرارداد تعیین می‌شوند. برای هر فرمت یک مرحله اصلاح شامل است. فیلم‌برداری واقعی، اینفلوئنسر واقعی و بازیگر شامل نیست.",
      rowLabels: ["فرمت", "قیمت", "تعداد ویدیو", "مراحل اصلاح", "مناسب است وقتی"],
      plans: {
        promo: { name: "ویدیوی معرفی محصول", note: "تبلیغ کوتاه برای محصول، مکان یا خدمت بدون مجری", cta: "بررسی ویدیو", values: ["ویدیوی معرفی محصول", "50–100 ₾", "1 ویدیوی آماده", "1 مرحله", "نمایش محصول یا مکان"] },
        ugc: { name: "ویدیوی UGC مولد", note: "یک creator تولیدشده محصول را با سبک طبیعی نشان می‌دهد یا استفاده می‌کند", cta: "بررسی ویدیو", values: ["ویدیوی UGC مولد", "100–200 ₾", "1 ویدیوی آماده", "1 مرحله", "نمایش یا استفاده از محصول"] },
        avatar: { name: "آواتار AI شخصی", note: "چهره‌ای ثابت که برای شما با سبک تولیدکننده محتوا ساخته می‌شود", cta: "بررسی ویدیو", values: ["آواتار AI شخصی", "از 200 ₾", "1 ویدیوی آماده", "1 مرحله", "حفظ چهره ثابت در تصویر"] },
        monthly: { name: "پکیج ماهانه", note: "برای تولید محتوای تکرارشونده؛ حجم و قیمت به‌صورت فردی توافق می‌شود", cta: "بررسی پکیج", values: ["پکیج ماهانه اختصاصی", "با توافق", "با توافق", "با توافق", "تولید محتوای تکرارشونده"] },
      },
    },
    aiweb: {
      label: "سایت‌ها و محصولات وب",
      summary: "سایت، فروشگاه آنلاین یا محصول وب اختصاصی می‌سازیم. پس از راه‌اندازی، نگهداری فنی در صورت نیاز اضافه می‌شود.",
      pricingModelLabel: "ساخت یک‌باره به‌علاوه نگهداری اختیاری",
      pricingModelDetail: "هزینه ساخت یک‌بار پرداخت می‌شود؛ نگهداری فنی فقط در صورت نیاز اضافه می‌شود.",
      priceLead: "از 2 000 ₾ یک‌باره",
      decisionPrompt: "وقتی سایتی برای دریافت درخواست یا محصول وب متناسب با فرایند کسب‌وکار لازم دارید.",
      visualAlt: "نماد شیشه‌ای پنجره وب aiWEB",
      agentFacts: [
        { label: "هزینه ساخت", value: "از 2 000 ₾ بر اساس نوع پروژه" },
        { label: "نگهداری فنی", value: "از 250 ₾ در ماه" },
        { label: "نتیجه", value: "سایت، فروشگاه یا محصول وب اختصاصی" },
      ],
      sectionLabel: "سایت‌ها و محصولات وب",
      billingLabel: "ساخت یک‌باره؛ نگهداری اختیاری",
      scopeNotice: "نگهداری اختیاری Care برای سایت کسب‌وکار از 250 ₾ در ماه، برای فروشگاه آنلاین از 450 ₾ و برای پلتفرم وب از 750 ₾ شروع می‌شود. حجم نهایی و هزینه‌های طرف سوم در پیشنهاد مشخص می‌شود.",
      rowLabels: ["پروژه", "هزینه ساخت", "مشتری چه می‌تواند انجام دهد", "نگهداری ماهانه", "مناسب است وقتی"],
      plans: {
        site: { name: "سایت کسب‌وکار", note: "تا مشتریان خدمات شما را بشناسند و با شما تماس بگیرند", cta: "بررسی سایت", values: ["سایت", "از 2 000 ₾", "تماس و ثبت درخواست", "250 ₾ / ماه", "کسب‌وکار خدماتی"] },
        shop: { name: "فروشگاه آنلاین", note: "کاتالوگ، سفارش و پرداخت در یک جا", cta: "بررسی فروشگاه", values: ["فروشگاه", "از 4 000 ₾", "کاتالوگ و سفارش", "450 ₾ / ماه", "تجارت آنلاین"] },
        platform: { name: "پلتفرم وب", note: "وقتی سایت استاندارد کافی نیست", cta: "بررسی پلتفرم", values: ["پلتفرم", "از 5 000 ₾", "قابلیت‌های اختصاصی", "750 ₾ / ماه", "فرایند مشخص کسب‌وکار"] },
      },
    },
    aistaff: {
      label: "دستیارهای AI برای تیم‌ها",
      summary: "aiSTAFF به تیم شما در پیام‌های مشتری، حساب‌های متصل و فرایندهای کاتالوگ کمک می‌کند؛ ظرفیت و پشتیبانی با پکیج افزایش می‌یابد.",
      pricingModelLabel: "پکیج ماهانه",
      pricingModelDetail: "بر اساس ظرفیت پاسخ، حساب‌های متصل و کاتالوگ انتخاب کنید؛ شرایط Custom جداگانه توافق می‌شود.",
      priceLead: "از 220 ₾ در ماه",
      decisionPrompt: "وقتی تیم شما به مدیریت پاسخ‌ها، حساب‌ها و کاتالوگ در یک فرایند نیاز دارد.",
      visualAlt: "نماد شیشه‌ای تیم aiSTAFF",
      agentFacts: [
        { label: "قیمت چگونه محاسبه می‌شود", value: "پکیج ماهانه" },
        { label: "قیمت شروع", value: "220 ₾ در ماه" },
        { label: "چه چیزهایی شامل است", value: "پاسخ‌ها، حساب‌ها، کاتالوگ و اتوماسیون" },
      ],
      sectionLabel: "دستیارهای AI برای تیم‌ها",
      billingLabel: "پکیج‌های ماهانه",
      scopeNotice: "پکیج‌های عمومی در ظرفیت پاسخ، حساب‌های متصل و کاتالوگ متفاوت‌اند. Custom برای بیش از 5 000 محصول یا فرایند غیر استاندارد است و جداگانه توافق می‌شود. aiSTAFF دستیار AI است، نه سرویس استخدام انسان.",
      rowLabels: ["پاسخ در ماه", "حساب‌های متصل", "حجم کاتالوگ", "به‌روزرسانی کاتالوگ در ماه", "پشتیبانی aiNOW"],
      plans: {
        start: { name: "شروع", note: "برای یک حساب و کاتالوگ کوچک", cta: "دیدن پکیج", values: ["3 000", "1", "20-100 محصول", "شامل نمی‌شود", "راه‌اندازی اولیه"] },
        expanded: { name: "گسترده", note: "برای چند کانال و پایگاه دانش", cta: "دیدن پکیج", values: ["8 000", "3", "100-500 محصول", "1 000", "راه‌اندازی اولیه"] },
        growth: { name: "رشد", note: "برای کاتالوگ بزرگ و پشتیبانی مداوم", cta: "دیدن پکیج", values: ["25 000", "5", "500-2 000 محصول", "4 000", "پشتیبانی مداوم"] },
        scale: { name: "مقیاس", note: "برای حجم بالا و چند حساب", cta: "دیدن پکیج", values: ["75 000", "10", "2 000-5 000 محصول", "10 000", "پشتیبانی اولویت‌دار"] },
        custom: { name: "Custom", note: "برای بیش از 5 000 محصول یا فرایند غیر استاندارد", cta: "بررسی پکیج", values: ["با توافق", "با توافق", "5 000+ محصول", "با توافق", "پشتیبانی اختصاصی"] },
      },
    },
    iai: {
      label: "یکپارچه‌سازی فرایندهای کسب‌وکار",
      summary: "وقتی پیام‌ها، تماس‌ها، محتوا و کارهای دیگر بین ابزارهای مختلف پخش شده‌اند، محصولات aiNOW را در یک سیستم متصل می‌کند.",
      pricingModelLabel: "قیمت عمومی ندارد",
      pricingModelDetail: "قیمت عمومی iAI را نتوانستیم تأیید کنیم. ابتدا مشخص می‌کنیم به کدام محصولات نیاز دارید و چگونه باید با هم کار کنند.",
      priceLead: "قیمت عمومی ندارد",
      decisionPrompt: "وقتی چند محصول aiNOW باید برای یک کار با هم کار کنند.",
      visualAlt: "نماد شیشه‌ای فرایندهای متصل iAI",
      agentFacts: [
        { label: "قیمت چگونه محاسبه می‌شود", value: "قیمت عمومی اعلام نشده" },
        { label: "نقطه شروع", value: "چه چیزی باید حل شود و چه محصولاتی لازم است" },
        { label: "نتیجه", value: "محصولات و فرایندهای هماهنگ" },
      ],
      sectionLabel: "یکپارچه‌سازی فرایندهای کسب‌وکار",
      billingLabel: "قیمت عمومی اعلام نشده",
      scopeNotice: "قیمت عمومی iAI را نتوانستیم تأیید کنیم. مبلغی اختراع نمی‌کنیم؛ فرایند و محصولات لازم جداگانه بررسی می‌شوند.",
      rowLabels: ["از کجا شروع می‌کنیم", "چه چیزهایی باید با هم کار کنند", "محصولات متصل", "چگونه مدیریت می‌شود", "قیمت"],
      plans: {
        one: { name: "از درخواست تا کار", note: "مشخص می‌کنیم درخواست ورودی چگونه به کار تبدیل شود و به مسئول مربوط برسد.", cta: "بررسی کار", values: ["پردازش درخواست", "یک فرایند", "محصولات لازم", "قانون توافق‌شده", "قیمت عمومی ندارد"] },
        connected: { name: "اتصال محصولات", note: "مثلاً اطلاعات چت برای آماده‌سازی تماس استفاده شود و نتیجه در سیستم کاری ذخیره شود.", cta: "بررسی اتصال", values: ["چت، تماس و سیستم کاری", "فرایندهای متصل", "محصولات لازم", "قواعد مشترک", "قیمت عمومی ندارد"] },
        system: { name: "فرایندهای کاری تیم", note: "مشخص می‌کنیم چه کسی کار را می‌گیرد، نتیجه کجا بررسی می‌شود و تأیید انسان کجا لازم است.", cta: "بررسی سیستم", values: ["کارها و کنترل", "یک سیستم متصل", "محصولات لازم", "قانون مدیریت توافق‌شده", "قیمت عمومی ندارد"] },
      },
    },
  },
  zh: {
    aichats: {
      label: "客户消息",
      summary: "回答客户问题，收集订单和预约请求，并把必要信息交给您的团队。",
      pricingModelLabel: "月度套餐",
      pricingModelDetail: "Personal 适用于一个 Instagram 账号或 Facebook 专页；企业套餐会增加回复、账号和目录容量。",
      priceLead: "每月 100 ₾ 起",
      decisionPrompt: "当客户经常询问价格、库存、地址或订单条件时。",
      visualAlt: "aiCHATS 玻璃聊天图标",
      agentFacts: [
        { label: "计价方式", value: "Personal 或企业月度套餐" },
        { label: "起始价格", value: "每月 100 ₾" },
        { label: "功能", value: "按您的工作量提供回复、账号和目录管理" },
      ],
      sectionLabel: "客户消息",
      billingLabel: "月度套餐",
      scopeNotice: "Personal 每月 100 ₾；当前活动为预付三个月 50 ₾，首月免费，前三个月合计 100 ₾。Personal 包含 600 条 AI 回复以及一个 Instagram 账号或 Facebook 专页；不包含知识库和目录。企业套餐可扩展，Custom 需协商。",
      rowLabels: ["每月回复数", "已连接账号", "目录容量", "每月信息更新", "适用情况"],
      plans: {
        start: { name: "入门", note: "适合一个账号和小型目录", cta: "查看套餐", values: ["3 000", "1", "20-100 个产品", "不包含", "回复和客户数据"] },
        expanded: { name: "扩展", note: "适合多个渠道和知识库", cta: "查看套餐", values: ["8 000", "3", "100-500 个产品", "1 000", "知识库和线索评分"] },
        growth: { name: "增长", note: "适合大型目录和持续支持", cta: "查看套餐", values: ["25 000", "5", "500-2 000 个产品", "4 000", "复杂流程和持续支持"] },
        scale: { name: "规模", note: "适合高容量和多个账号", cta: "查看套餐", values: ["75 000", "10", "2 000-5 000 个产品", "10 000", "最大容量和优先级"] },
        personal: { name: "Personal", note: "适合一个 Instagram 账号或 Facebook 专页", cta: "查看套餐", values: ["600", "1", "不包含", "不包含", "个人消息"] },
        custom: { name: "Custom", note: "适合非标准容量和工作流程", cta: "讨论套餐", values: ["按协议", "按协议", "5 000+ 个产品", "按协议", "个性化条件"] },
      },
    },
    aicall: {
      label: "AI 电话",
      summary: "回答来电，并根据您批准的任务进行个性化外呼。",
      pricingModelLabel: "平台加已接通外呼分钟",
      pricingModelDetail: "每个套餐包含一个同时来电通道，来电没有单独的按分钟电话费。每个额外通道每月 60 ₾，已接通外呼分钟另行计算。",
      priceLead: "每月 220 ₾ 起",
      decisionPrompt: "当您希望有人回答来电，或主动联系客户时。",
      visualAlt: "aiCALL 玻璃电话图标",
      agentFacts: [
        { label: "计价方式", value: "每月 220 ₾ 起，另加已接通外呼分钟" },
        { label: "首次设置", value: "一次性 150 ₾" },
        { label: "通话价格", value: "来电：含 1 个通道且没有单独按分钟电话费；额外通道：60 ₾/月；外呼：1.50 ₾/接通分钟" },
      ],
      sectionLabel: "AI 电话",
      billingLabel: "平台价格；已接通外呼分钟另计",
      scopeNotice: "设置费：一次性 150 ₾。每个套餐包含一个同时来电通道，来电没有单独的按分钟电话费。额外通道每月 60 ₾，已接通外呼分钟为 1.50 ₾。批量活动、CSV 队列和自动重复外呼仍在准备中，不属于已启用功能。",
      rowLabels: ["AI 角色", "通话任务", "同时来电通道", "已连接程序", "通话记录"],
      plans: {
        start: { name: "入门", note: "适合一个 AI 角色和一个通话任务", cta: "查看套餐", values: ["1 个角色", "1 个任务", "1", "不包含", "30 天"] },
        expanded: { name: "扩展", note: "适合有多个通话任务的小团队", cta: "查看套餐", values: ["1 个角色", "3 个任务", "1", "1 个连接", "90 天"] },
        growth: { name: "增长", note: "适合多个角色和流程", cta: "查看套餐", values: ["3 个角色", "10 个任务", "1", "3 个连接", "365 天"] },
        scale: { name: "规模", note: "适合高通话量", cta: "查看套餐", values: ["10 个角色", "25 个任务", "1", "10 个连接", "不限"] },
        custom: { name: "Custom", note: "适合个性化容量、管理和支持；包含一个来电通道", cta: "讨论套餐", values: ["按协议", "按协议", "1", "按协议", "按协议"] },
      },
    },
    aicontent: {
      label: "广告视频",
      summary: "为社交媒体和广告制作产品、UGC 风格及头像视频。",
      pricingModelLabel: "一次性和月度套餐",
      pricingModelDetail: "每个公开价格包含一个视频。持续内容通过合同安排，范围和价格单独确定。",
      priceLead: "每个视频 50–100 ₾",
      decisionPrompt: "当您希望产品或服务在视频中快速吸引注意力时。",
      visualAlt: "aiCONTENT 玻璃摄像机图标",
      agentFacts: [
        { label: "计价方式", value: "按视频计价" },
        { label: "视频价格", value: "50–100 ₾、100–200 ₾ 或 200 ₾ 起" },
        { label: "修改", value: "每种格式一轮" },
      ],
      sectionLabel: "广告视频",
      billingLabel: "一个视频；月度套餐按合同确定",
      scopeNotice: "三个公开价格均按一个视频计算。持续内容可以安排月度套餐：范围和价格在合同中单独确定。每种格式包含一轮修改。不包含真实拍摄、真实网红和演员。",
      rowLabels: ["格式", "价格", "视频数量", "修改轮次", "适用情况"],
      plans: {
        promo: { name: "产品宣传视频", note: "无需主持人，为产品、场所或服务制作短广告", cta: "讨论视频", values: ["产品宣传视频", "50–100 ₾", "1 个成片视频", "1 轮", "展示产品或场所"] },
        ugc: { name: "生成式 UGC 视频", note: "生成的创作者以自然风格展示或使用产品", cta: "讨论视频", values: ["生成式 UGC 视频", "100–200 ₾", "1 个成片视频", "1 轮", "展示或使用产品"] },
        avatar: { name: "个人 AI 头像", note: "为您创建的、以内容创作者风格呈现的固定出镜形象", cta: "讨论视频", values: ["个人 AI 头像", "200 ₾ 起", "1 个成片视频", "1 轮", "保持统一的出镜形象"] },
        monthly: { name: "月度套餐", note: "适合持续内容制作；范围和价格单独协商", cta: "讨论套餐", values: ["定制月度套餐", "按协议", "按协议", "按协议", "持续内容制作"] },
      },
    },
    aiweb: {
      label: "网站和网页产品",
      summary: "我们制作网站、在线商店或定制网页产品。上线后可按需添加技术维护。",
      pricingModelLabel: "一次性制作加可选维护",
      pricingModelDetail: "制作费一次支付；仅在需要时添加技术维护。",
      priceLead: "一次性 2 000 ₾ 起",
      decisionPrompt: "当您需要接收请求的网站，或符合业务流程的网页产品时。",
      visualAlt: "aiWEB 玻璃网页窗口图标",
      agentFacts: [
        { label: "制作价格", value: "2 000 ₾ 起，取决于项目类型" },
        { label: "技术维护", value: "每月 250 ₾ 起" },
        { label: "结果", value: "网站、商店或定制网页产品" },
      ],
      sectionLabel: "网站和网页产品",
      billingLabel: "一次性制作；维护可选",
      scopeNotice: "可选 Care 维护：企业网站每月 250 ₾ 起，在线商店 450 ₾ 起，网页平台 750 ₾ 起。最终范围和第三方成本会写入报价。",
      rowLabels: ["项目", "制作价格", "客户可以做什么", "每月维护", "适用情况"],
      plans: {
        site: { name: "企业网站", note: "让客户了解您的服务并与您联系", cta: "讨论网站", values: ["网站", "2 000 ₾ 起", "联系并提交请求", "250 ₾ / 月", "服务型企业"] },
        shop: { name: "在线商店", note: "目录、下单和支付集中在一个地方", cta: "讨论商店", values: ["商店", "4 000 ₾ 起", "目录和下单", "450 ₾ / 月", "在线零售"] },
        platform: { name: "网页平台", note: "当标准网站不够用时", cta: "讨论平台", values: ["平台", "5 000 ₾ 起", "定制功能", "750 ₾ / 月", "具体业务流程"] },
      },
    },
    aistaff: {
      label: "团队 AI 助手",
      summary: "aiSTAFF 帮助团队处理客户消息、已连接账号和目录流程；容量与支持随套餐增加。",
      pricingModelLabel: "月度套餐",
      pricingModelDetail: "按回复、已连接账号和目录容量选择；Custom 条件需单独协商。",
      priceLead: "每月 220 ₾ 起",
      decisionPrompt: "当团队需要在一个工作流中管理客户回复、账号和目录时。",
      visualAlt: "aiSTAFF 玻璃团队图标",
      agentFacts: [
        { label: "计价方式", value: "月度套餐" },
        { label: "起始价格", value: "每月 220 ₾" },
        { label: "包含内容", value: "回复、账号、目录和自动化" },
      ],
      sectionLabel: "团队 AI 助手",
      billingLabel: "月度套餐",
      scopeNotice: "公开套餐按回复、已连接账号和目录容量区分。Custom 适用于超过 5 000 个产品或非标准流程，需单独协商。aiSTAFF 是 AI 助手，不是人工招聘服务。",
      rowLabels: ["每月回复数", "已连接账号", "目录容量", "每月目录更新", "aiNOW 支持"],
      plans: {
        start: { name: "入门", note: "适合一个账号和小型目录", cta: "查看套餐", values: ["3 000", "1", "20-100 个产品", "不包含", "首次设置"] },
        expanded: { name: "扩展", note: "适合多个渠道和知识库", cta: "查看套餐", values: ["8 000", "3", "100-500 个产品", "1 000", "首次设置"] },
        growth: { name: "增长", note: "适合大型目录和持续支持", cta: "查看套餐", values: ["25 000", "5", "500-2 000 个产品", "4 000", "持续支持"] },
        scale: { name: "规模", note: "适合高容量和多个账号", cta: "查看套餐", values: ["75 000", "10", "2 000-5 000 个产品", "10 000", "优先支持"] },
        custom: { name: "Custom", note: "适合超过 5 000 个产品或非标准流程", cta: "讨论套餐", values: ["按协议", "按协议", "5 000+ 个产品", "按协议", "个性化支持"] },
      },
    },
    iai: {
      label: "连接业务流程",
      summary: "当消息、电话、内容和其他工作分散在不同工具中时，把 aiNOW 产品连接到一个系统里。",
      pricingModelLabel: "无公开价格",
      pricingModelDetail: "目前无法确认 iAI 的公开价格。我们先确定需要哪些产品，以及它们应如何协作。",
      priceLead: "无公开价格",
      decisionPrompt: "当一个任务需要多个 aiNOW 产品协同工作时。",
      visualAlt: "iAI 玻璃连接流程图标",
      agentFacts: [
        { label: "计价方式", value: "未公布公开价格" },
        { label: "起点", value: "要解决什么问题以及需要哪些产品" },
        { label: "结果", value: "协同工作的产品和流程" },
      ],
      sectionLabel: "连接业务流程",
      billingLabel: "未公布公开价格",
      scopeNotice: "目前无法确认 iAI 的公开价格。这里不虚构金额；流程和所需产品需单独讨论。",
      rowLabels: ["从哪里开始", "哪些内容要协同", "已连接产品", "如何管理", "价格"],
      plans: {
        one: { name: "从请求到任务", note: "定义如何把收到的请求变成任务，并交给负责的团队成员。", cta: "讨论任务", values: ["请求处理", "一个流程", "所需产品", "约定规则", "无公开价格"] },
        connected: { name: "连接产品", note: "例如，用聊天信息准备电话，并把结果保存到工作系统。", cta: "讨论连接", values: ["聊天、电话和工作系统", "连接流程", "所需产品", "统一规则", "无公开价格"] },
        system: { name: "团队工作流", note: "定义谁接收任务、在哪里检查结果，以及在哪一步必须由人批准。", cta: "讨论系统", values: ["任务和控制", "一个连接系统", "所需产品", "约定管理规则", "无公开价格"] },
      },
    },
  },
};

const OWN_PRODUCT_COPY: Partial<Record<LocalPricingProductId, Record<"en" | "ru", ProductCopy>>> = {
  vibecoding: {
    en: { label: "Security and production-readiness review for AI-built apps", summary: "Review public browser-visible evidence, prioritize risks and agree a repair and rescan worklist before publication.", pricingModelLabel: "Individual written proposal", pricingModelDetail: "Scope and price are fixed in a written proposal. No hack-proof or compliance claim is made.", priceLead: "Price by written proposal", decisionPrompt: "When an AI-built application needs an evidence-based review before publication.", visualAlt: "vibeCODING public-surface scan", agentFacts: [{ label: "What it checks", value: "Public browser-visible surface and agreed authorized boundaries" }, { label: "What it delivers", value: "Visible evidence, prioritized risks and repair worklist" }, { label: "Boundary", value: "No hack-proof or compliance certification claim" }], sectionLabel: "AI application audit", billingLabel: "Audit scope", scopeNotice: "Scope, test boundary and price are fixed in a written proposal.", rowLabels: ["Public surface", "Authorized boundary", "Risk priority", "Repair plan", "Price"], plans: { scope: { name: "App risk review", note: "Scope, test boundary and price are fixed in a written proposal.", cta: "Discuss app risk review", values: ["Browser-visible evidence", "Authorized checks", "Prioritized risks", "Repair and rescan", "Written proposal"] } } },
    ru: { label: "Проверка безопасности и готовности AI-приложений к публикации", summary: "Проверяет видимые браузером доказательства, расставляет приоритеты рисков и согласует план исправления и повторной проверки.", pricingModelLabel: "Индивидуальное письменное предложение", pricingModelDetail: "Объём и цена фиксируются в письменном предложении. Гарантия защиты от взлома и сертификация соответствия не заявляются.", priceLead: "Цена по письменному предложению", decisionPrompt: "Когда AI-созданное приложение нужно проверить перед публикацией.", visualAlt: "Скан публичной поверхности vibeCODING", agentFacts: [{ label: "Что проверяет", value: "Видимую браузером поверхность и согласованные границы" }, { label: "Что отдаёт", value: "Доказательства, приоритеты рисков и план исправления" }, { label: "Граница", value: "Нет гарантии защиты от взлома и сертификации соответствия" }], sectionLabel: "Аудит AI-приложения", billingLabel: "Объём аудита", scopeNotice: "Объём, граница проверки и цена фиксируются в письменном предложении.", rowLabels: ["Публичная поверхность", "Разрешённые границы", "Приоритет риска", "План исправления", "Цена"], plans: { scope: { name: "Проверка рисков приложения", note: "Объём, граница проверки и цена фиксируются в письменном предложении.", cta: "Обсудить проверку рисков", values: ["Браузерные доказательства", "Разрешённые проверки", "Приоритетные риски", "Исправление и повторный скан", "Письменное предложение"] } } },
  },
};

export function normalizePricingLocale(locale: string): PricingLocale {
  if (!(PRICING_LOCALES as readonly string[]).includes(locale)) {
    throw new Error(`Unsupported pricing locale: ${locale}`);
  }

  return locale as PricingLocale;
}

export function getPricingUiCopy(locale: string): PricingUiCopy {
  return UI_COPY[normalizePricingLocale(locale)];
}

export function getPricingPageCopy(locale: string): PricingPageCopy {
  return PAGE_COPY[normalizePricingLocale(locale)];
}

export function localizePricingProduct(product: PricingProduct, locale: string): PricingProduct {
  const normalized = normalizePricingLocale(locale);
  if (normalized === "ka") return product;

  const foreignLocale = normalized as Exclude<PricingLocale, "ka">;
  const copy = OWN_PRODUCT_COPY[product.id as LocalPricingProductId]?.[foreignLocale === "ru" ? "ru" : "en"]
    ?? PRODUCT_COPY[foreignLocale][product.id as PricingProductId];
  if (!copy) throw new Error(`Missing pricing copy for ${normalized}/${product.id}`);

  return {
    ...product,
    label: copy.label,
    summary: copy.summary,
    pricingModelLabel: copy.pricingModelLabel,
    pricingModelDetail: copy.pricingModelDetail,
    priceLead: copy.priceLead,
    decisionPrompt: copy.decisionPrompt,
    visualAlt: copy.visualAlt,
    agentFacts: product.agentFacts.map((fact, index) => ({ ...fact, ...copy.agentFacts[index] })),
    sectionLabel: copy.sectionLabel,
    billingLabel: copy.billingLabel,
    scopeNotice: copy.scopeNotice,
    rowLabels: product.rowLabels.map((row, index) => ({ ...row, label: copy.rowLabels[index] })),
    plans: product.plans.map((plan) => {
      const planCopy = copy.plans[plan.id];
      if (!planCopy) throw new Error(`Missing pricing plan copy for ${normalized}/${product.id}/${plan.id}`);
      return {
        ...plan,
        price: localizePrice(plan.price, foreignLocale),
        name: planCopy.name,
        cadence: CADENCE_COPY[foreignLocale][plan.cadence] ?? plan.cadence,
        note: planCopy.note,
        cta: planCopy.cta,
        values: plan.values.map((_, index) => planCopy.values[index]),
      };
    }),
  };
}

export function localizePricingProducts(locale: string): readonly PricingProduct[] {
  return PRICING_PRODUCTS.filter((product) => product.id === "vibecoding").map((product) => localizePricingProduct(product, locale));
}

export function isMonthlyPlan(productId: string, planId: string): boolean {
  const product = PRICING_PRODUCTS.find((item) => item.id === productId);
  return product?.plans.find((plan) => plan.id === planId)?.cadence === "თვეში";
}
