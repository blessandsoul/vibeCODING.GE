// The explicit extension keeps the standalone contract test able to load this
// pure data module with Node's built-in TypeScript stripping.
// @ts-expect-error -- Next resolves the TypeScript data module without an extension.
import { PRICING_PRODUCTS } from "../features/pricing/pricing-data.ts";
// @ts-expect-error -- Node's standalone TypeScript test runner needs the extension.
import { getAiNowHomeCopy } from "../features/home/components/ainow/AiNowHomeCopy.ts";

export const PUBLIC_FACTS = {
  brand: {
    name: "aiNOW",
    legalName: "შპს ეი აი ნაუ",
    slogan: "AI that works",
    url: "https://ainow.ge",
    type: "AI Agency",
  },
  description:
    "aiNOW is an AI consulting and implementation company in Georgia. We study how a business works, choose a ready product or design a custom AI system, then build, integrate and operate the agreed solution.",
  summary:
    "aiNOW starts with the business process, then selects a ready product or builds a custom AI system for the work that needs to be improved.",
  brandEstablished: "2025",
  founded: "2026",
  foundingDate: "2026-02-05",
  lastUpdated: "2026-09-28",
  founder: {
    name: "Andrew Altair",
    id: "https://andrewaltair.ge/#person",
    url: "https://andrewaltair.ge/about",
    sameAs: [
      "https://www.youtube.com/@AndrewAltair",
      "https://www.instagram.com/andr3waltair/",
      "https://www.linkedin.com/in/andr3waltair",
      "https://x.com/andr3waltair",
      "https://github.com/andr3waltair",
    ],
  },
  site: {
    locales: ["ka", "en", "ru"],
    routeLocales: ["ka", "en", "ru", "de", "tr", "fa", "zh"],
    localeTags: ["ka-GE", "en-US", "ru-RU", "de-DE", "tr-TR", "fa-IR", "zh-CN"],
  },
  service: {
    languages: ["ka", "en", "ru"],
    languageNames: ["Georgian", "English", "Russian"],
  },
  proof: {
    googleReviewsUrl:
      "https://maps.google.com/?cid=15533558721751972154&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  },
  delivery: {
    qualification: "Timing is an estimate confirmed after the business process and implementation scope are reviewed.",
    firstWorkingDemo: {
      businessDays: 3,
      label: "3 business days",
      qualifiedLabel: "estimated up to 3 business days after scope confirmation",
    },
    simpleFullLaunch: {
      businessDays: [5, 10],
      label: "5-10 business days",
      qualifiedLabel: "estimated 5-10 business days after scope confirmation",
    },
    website: {
      weeks: [2, 4],
      label: "2-4 weeks",
      qualifiedLabel: "estimated 2-4 weeks after scope confirmation",
    },
  },
  location: {
    city: "Tbilisi",
    country: "Georgia",
    countryCode: "GE",
    coordinates: { lat: 41.7151, lng: 44.8271 },
  },
  areaServed: ["Georgia", "Armenia", "Azerbaijan"],
  contact: {
    email: "CONTACT@aiNOW.GE",
    telegram: "https://t.me/ainow_ge",
    contactUrl: "https://ainow.ge/contact",
    startUrl: "https://ainow.ge/start",
  },
  companySameAs: [
    "https://maps.google.com/?cid=15533558721751972154",
    "https://www.facebook.com/ainow.ge",
    "https://www.instagram.com/ainow.ge/",
    "https://t.me/ainow_ge",
    "https://www.linkedin.com/company/ainowgeorgia",
    "https://github.com/ainowgeorgia",
  ],
} as const;

export const PUBLIC_POSITIONING = {
  model: "consulting_and_implementation",
  statement:
    "aiNOW starts with the business process, then selects a ready product or designs, builds, integrates and operates a custom AI system.",
  buyer: "Businesses that need a clear AI implementation for a real operational process.",
  workflow: [
    "Study the business problem and current process.",
    "Choose a ready aiNOW product when it fits, or scope a custom system.",
    "Build and integrate the agreed solution with the team's tools.",
    "Operate and improve the solution with clear human checkpoints.",
  ],
  standaloneProducts: "Current standalone products can be purchased directly.",
  timing: {
    demo: PUBLIC_FACTS.delivery.firstWorkingDemo.qualifiedLabel,
    simpleSystem: PUBLIC_FACTS.delivery.simpleFullLaunch.qualifiedLabel,
    website: PUBLIC_FACTS.delivery.website.qualifiedLabel,
  },
} as const;

const TIKTOK_REQUIREMENTS = [
  "TikTok application approval",
  "Approved scopes for the selected TikTok API",
  "Customer account authorization",
  "Eligible account and regional availability",
] as const;

export const TIKTOK_PRODUCT_ROADMAP = [
  {
    product: "aiCALL",
    domain: "https://aicall.ge",
    relation: "connectedWorkflow",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope:
      "Call consented leads received from TikTok Ads through aiADS. aiCALL will not place calls inside TikTok.",
    requirements: [...TIKTOK_REQUIREMENTS, "Lawful basis and consent for each outbound call"],
    officialSources: ["https://business-api.tiktok.com/portal"],
  },
  {
    product: "aiWEB",
    domain: "https://aiweb.ge",
    relation: "directIntegration",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "TikTok Pixel, Events API measurement and public video embeds.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://ads.tiktok.com/help/article/events-api?lang=en",
      "https://developers.tiktok.com/doc/embed-videos/",
    ],
  },
  {
    product: "aiOFFICE",
    domain: "https://aioffice.ge",
    relation: "connectedWorkflow",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "Turn authorized TikTok leads, business messages and eligible Shop orders into office tasks.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://business-api.tiktok.com/portal",
      "https://partner.tiktokshop.com/docv2/page/tts-developer-guide",
    ],
  },
  {
    product: "aiDOCS",
    domain: "https://aidocs.ge",
    relation: "familyRoadmap",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "Import eligible TikTok Shop order documents for review.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: ["https://partner.tiktokshop.com/docv2/page/tts-developer-guide"],
  },
  {
    product: "aiAPP",
    domain: "https://aiapp.ge",
    relation: "directIntegration",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "TikTok Login and mobile sharing through official SDKs.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://developers.tiktok.com/doc/login-kit-overview",
      "https://developers.tiktok.com/doc/share-kit-overview/",
    ],
  },
  {
    product: "vibeCODING",
    domain: "https://vibecoding.ge",
    relation: "familyRoadmap",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "Review and implement TikTok Login, Content Posting and webhook integrations.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://developers.tiktok.com/doc/login-kit-overview",
      "https://developers.tiktok.com/doc/content-posting-api-get-started/",
      "https://developers.tiktok.com/doc/webhooks-overview",
    ],
  },
  {
    product: "aiCONTENT",
    domain: "https://aicontent.ge",
    relation: "directIntegration",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope:
      "Upload TikTok-ready photos and videos to drafts and publish after customer approval and TikTok approval.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://developers.tiktok.com/doc/content-posting-api-get-started/",
      "https://developers.tiktok.com/doc/content-sharing-guidelines/",
    ],
  },
  {
    product: "aiADS",
    domain: "https://aiads.ge",
    relation: "directIntegration",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "TikTok Ads campaigns, audiences, leads, reporting and measurement through official APIs.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://business-api.tiktok.com/portal",
      "https://ads.tiktok.com/help/article/marketing-api?lang=en",
    ],
  },
  {
    product: "aiTAXI",
    domain: "https://aitaxi.ge",
    relation: "connectedWorkflow",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope:
      "Receive eligible trip or fleet enquiries from TikTok Ads through aiADS. TikTok will not control dispatch.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: ["https://business-api.tiktok.com/portal"],
  },
  {
    product: "aiCHATS",
    domain: "https://aichats.ge",
    relation: "directIntegration",
    status: "planned",
    availableNow: false,
    launchDate: null,
    scope: "TikTok Business Messaging conversations and approved automated replies.",
    requirements: TIKTOK_REQUIREMENTS,
    officialSources: [
      "https://business-api.tiktok.com/portal/docs/business-messaging/v1.3",
    ],
  },
] as const;

export type PublicFaq = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export type PublicSiteLocale = (typeof PUBLIC_FACTS.site.routeLocales)[number];

export type PublicHomeHeroContent = {
  readonly eyebrow: string;
  readonly h1: string;
  readonly supportingSentence: string;
  readonly decorativeVerbs: readonly string[];
  readonly primaryCta: string;
  readonly proof: string;
  readonly ownerDemoRequest: string;
  readonly demoOutcome: {
    readonly title: string;
    readonly body: string;
  };
};

export type PublicHomeContent = {
  readonly metadataDescription: string;
  readonly hero: PublicHomeHeroContent;
  readonly faqs: readonly PublicFaq[];
};

export const PUBLIC_HOME_CONTENT: Readonly<Record<PublicSiteLocale, PublicHomeContent>> = {
  ka: {
    metadataDescription: "aiNOW ბიზნესისთვის ქმნის ჩატბოტებს, საიტებს, ავტომატიზაციას, კონტენტსა და რეკლამას. პირველი სამუშაო დემო მზადაა 3 სამუშაო დღეში.",
    hero: {
      eyebrow: "AI გუნდი თქვენი ბიზნესისთვის",
      h1: "თქვენ ამბობთ, რა სჭირდება ბიზნესს. iAI საქმეს ანაწილებს.",
      supportingSentence: "iAI თქვენს დავალებას იგებს, aiCONTENT-ს, aiADS-სა და aiCHATS-ს გადასცემს და შედეგს ერთ ადგილას გაჩვენებთ.",
      decorativeVerbs: ["იგებს", "ანაწილებს", "ქმნის", "არეკლამებს", "პასუხობს"],
      primaryCta: "მოითხოვეთ დემო",
      proof: "პირველი სამუშაო დემო 3 სამუშაო დღეში",
      ownerDemoRequest: "ორშაბათიდან ახალი შეთავაზება გვაქვს. მოამზადე პოსტი, ჩართე რეკლამა და ყველა შემოსულ კითხვას უპასუხე.",
      demoOutcome: {
        title: "iAI-მ დავალება გაიგო",
        body: "aiCONTENT პოსტს ამზადებს, aiADS სარეკლამო კამპანიას აწყობს, aiCHATS კი შემოსულ კითხვებს პასუხობს. სამუშაოს მიმდინარეობასა და შედეგს ერთ ეკრანზე ხედავთ.",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "რა არის iAI?", answer: "iAI არის კოორდინატორი. თქვენ ბიზნესის მიზანს ჩვეულებრივი სიტყვებით აღწერთ. iAI მოთხოვნას იგებს, საქმეებად ყოფს, თითოეულ საქმეს შესაბამის პროდუქტს გადასცემს და შედეგს ერთ ადგილას გაჩვენებთ." },
      { id: "product_roles", question: "რა როლი აქვს aiCONTENT-ს, aiADS-სა და aiCHATS-ს?", answer: "aiCONTENT კონტენტს ქმნის, aiADS რეკლამას ამზადებს და მართავს, aiCHATS კი კლიენტებს პასუხობს და მოთხოვნებს აგროვებს. iAI ამ სამ საქმეს აერთიანებს." },
      { id: "give_task", question: "როგორ მივცე iAI-ს დავალება?", answer: "უთხარით ჩვეულებრივი სიტყვებით, რა შედეგი გჭირდებათ. iAI დავალებას ნაწილებად ყოფს და თითოეულ ნაწილს შესაბამის პროდუქტს გადასცემს." },
      { id: "demo_contents", question: "რას ვნახავ დემოში?", answer: "დემო თქვენი ბიზნესის ერთ კონკრეტულ მოთხოვნას თავიდან ბოლომდე აჩვენებს: მფლობელის შეტყობინებას, iAI-ს მიერ დავალების განაწილებას, თითოეული პროდუქტის მოქმედებას და საბოლოო შედეგს." },
      { id: "demo_timing", question: "როდის იქნება დემო მზად?", answer: "aiNOW თქვენს ბიზნესზე მორგებულ დემოს 3 სამუშაო დღეში მოამზადებს." },
      { id: "launch_timing", question: "რამდენ ხანში ამუშავდება სისტემა?", answer: "მარტივი სისტემის დანერგვას 5-10 სამუშაო დღე სჭირდება. ვებსაიტის მომზადებას, მოცულობის მიხედვით, 2-4 კვირა სჭირდება." },
      { id: "service_languages", question: "რომელ ენებზეა მომსახურება ხელმისაწვდომი?", answer: "aiNOW-ის მომსახურება ხელმისაწვდომია ქართულ, ინგლისურ და რუსულ ენებზე." },
      { id: "technical_knowledge", question: "ტექნიკური ცოდნა მჭირდება?", answer: "არა. თქვენ ბიზნესის მიზანს ჩვეულებრივი სიტყვებით აღწერთ. iAI მოთხოვნას კონკრეტულ საქმეებად ყოფს და გაჩვენებთ, რომელი პროდუქტი რას აკეთებს და რა შედეგი მიიღეთ." },
    ],
  },
  en: {
    metadataDescription: "aiNOW builds chatbots, websites, automation, content and ads for businesses in Georgia. Get a first working demo in 3 business days.",
    hero: {
      eyebrow: "Your AI team for business",
      h1: "You say what the business needs. iAI assigns the work.",
      supportingSentence: "iAI understands your request, sends the work to aiCONTENT, aiADS and aiCHATS, and shows the result in one place.",
      decorativeVerbs: ["understands", "assigns", "creates", "advertises", "answers"],
      primaryCta: "Request a demo",
      proof: "First working demo in 3 business days",
      ownerDemoRequest: "We have a new offer starting Monday. Prepare a post, start the advertising and answer every incoming question.",
      demoOutcome: {
        title: "iAI understood the request",
        body: "aiCONTENT prepares the post, aiADS sets up the advertising campaign, and aiCHATS answers incoming questions. You see the progress and result on one screen.",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "What is iAI?", answer: "iAI is the coordinator. You describe the business goal in plain language. iAI understands the request, splits it into tasks, sends each task to the right product, and shows the result in one place." },
      { id: "product_roles", question: "What do aiCONTENT, aiADS and aiCHATS do?", answer: "aiCONTENT creates content, aiADS prepares and manages advertising, and aiCHATS answers customers and collects requests. iAI coordinates all three." },
      { id: "give_task", question: "How do I give iAI a task?", answer: "Describe the result you need in everyday language. iAI divides the request into tasks and sends each task to the right product." },
      { id: "demo_contents", question: "What will I see in the demo?", answer: "The demo follows one request from your business from start to finish: the owner's message, task assignment by iAI, the work of each product, and the final result." },
      { id: "demo_timing", question: "When will the demo be ready?", answer: "aiNOW prepares a demo tailored to your business within 3 business days." },
      { id: "launch_timing", question: "How long does launch take?", answer: "A simple system takes 5-10 business days to launch. A website takes 2-4 weeks, depending on scope." },
      { id: "service_languages", question: "Which service languages are available?", answer: "aiNOW provides service in Georgian, English and Russian." },
      { id: "technical_knowledge", question: "Do I need technical knowledge?", answer: "No. You describe the business goal in everyday language. iAI turns the request into clear tasks and shows which product is working and what result it produced." },
    ],
  },
  ru: {
    metadataDescription: "aiNOW создает для бизнеса чат-боты, сайты, автоматизацию, контент и рекламу. Первый рабочий демо-результат готов за 3 рабочих дня.",
    hero: {
      eyebrow: "AI-команда для вашего бизнеса",
      h1: "Вы говорите, что нужно бизнесу. iAI распределяет работу.",
      supportingSentence: "iAI понимает вашу задачу, передаёт работу aiCONTENT, aiADS и aiCHATS и показывает результат в одном месте.",
      decorativeVerbs: ["понимает", "распределяет", "создаёт", "рекламирует", "отвечает"],
      primaryCta: "Запросить демо",
      proof: "Первый рабочий демо-результат за 3 рабочих дня",
      ownerDemoRequest: "С понедельника у нас новое предложение. Подготовь пост, запусти рекламу и ответь на все входящие вопросы.",
      demoOutcome: {
        title: "iAI понял задачу",
        body: "aiCONTENT готовит пост, aiADS настраивает рекламную кампанию, а aiCHATS отвечает на входящие вопросы. Ход работы и результат видны на одном экране.",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "Что такое iAI?", answer: "iAI является координатором. Вы описываете цель бизнеса обычными словами. iAI понимает запрос, делит его на задачи, передаёт каждую задачу нужному продукту и показывает результат в одном месте." },
      { id: "product_roles", question: "Что делают aiCONTENT, aiADS и aiCHATS?", answer: "aiCONTENT создаёт контент, aiADS готовит и управляет рекламой, а aiCHATS отвечает клиентам и собирает обращения. iAI координирует все три продукта." },
      { id: "give_task", question: "Как поставить задачу iAI?", answer: "Опишите обычными словами, какой результат вам нужен. iAI разделит запрос на задачи и передаст каждую задачу нужному продукту." },
      { id: "demo_contents", question: "Что я увижу в демо?", answer: "Демо показывает один запрос вашего бизнеса от начала до конца: сообщение владельца, распределение задач через iAI, работу каждого продукта и итоговый результат." },
      { id: "demo_timing", question: "Когда будет готово демо?", answer: "aiNOW подготовит демо под ваш бизнес в течение 3 рабочих дней." },
      { id: "launch_timing", question: "Сколько занимает запуск?", answer: "Простая система запускается за 5-10 рабочих дней. Подготовка сайта занимает 2-4 недели в зависимости от объёма." },
      { id: "service_languages", question: "На каких языках доступно обслуживание?", answer: "aiNOW оказывает услуги на грузинском, английском и русском языках." },
      { id: "technical_knowledge", question: "Нужны ли мне технические знания?", answer: "Нет. Вы описываете цель бизнеса обычными словами. iAI превращает запрос в понятные задачи и показывает, какой продукт работает и какой результат получен." },
    ],
  },
  de: {
    metadataDescription: "aiNOW entwickelt Chatbots, Websites, Automatisierung, Content und Werbung für Unternehmen. Ein erstes funktionsfähiges Demo ist in 3 Werktagen fertig.",
    hero: {
      eyebrow: "Ihr AI-Team für das Unternehmen",
      h1: "Sie sagen, was Ihr Unternehmen braucht. iAI verteilt die Arbeit.",
      supportingSentence: "iAI versteht Ihre Aufgabe, verteilt sie an aiCONTENT, aiADS und aiCHATS und zeigt das Ergebnis an einem Ort.",
      decorativeVerbs: ["versteht", "verteilt", "erstellt", "bewirbt", "antwortet"],
      primaryCta: "Demo anfragen",
      proof: "Erstes funktionsfähiges Demo in 3 Arbeitstagen",
      ownerDemoRequest: "Ab Montag haben wir ein neues Angebot. Erstelle einen Beitrag, starte die Werbung und beantworte alle eingehenden Fragen.",
      demoOutcome: {
        title: "iAI hat die Aufgabe verstanden",
        body: "aiCONTENT erstellt den Beitrag, aiADS richtet die Werbekampagne ein und aiCHATS beantwortet eingehende Fragen. Fortschritt und Ergebnis sehen Sie auf einem Bildschirm.",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "Was ist iAI?", answer: "iAI ist der Koordinator. Sie beschreiben Ihr Geschäftsziel in Alltagssprache. iAI versteht die Anfrage, teilt sie in Aufgaben auf, leitet jede Aufgabe an das passende Produkt weiter und zeigt das Ergebnis an einem Ort." },
      { id: "product_roles", question: "Was machen aiCONTENT, aiADS und aiCHATS?", answer: "aiCONTENT erstellt Inhalte, aiADS bereitet Werbung vor und steuert sie, aiCHATS beantwortet Kundenfragen und nimmt Anfragen auf. iAI koordiniert alle drei Produkte." },
      { id: "give_task", question: "Wie gebe ich iAI eine Aufgabe?", answer: "Beschreiben Sie in einfachen Worten, welches Ergebnis Sie brauchen. iAI teilt die Anfrage in Aufgaben auf und leitet jede Aufgabe an das passende Produkt weiter." },
      { id: "demo_contents", question: "Was sehe ich in der Demo?", answer: "Die Demo zeigt eine konkrete Aufgabe aus Ihrem Unternehmen von Anfang bis Ende: Ihre Nachricht, die Aufgabenverteilung durch iAI, die Arbeit jedes Produkts und das fertige Ergebnis." },
      { id: "demo_timing", question: "Wann ist die Demo fertig?", answer: "aiNOW erstellt innerhalb von 3 Arbeitstagen eine auf Ihr Unternehmen zugeschnittene Demo." },
      { id: "launch_timing", question: "Wie lange dauert der Start?", answer: "Ein einfaches System ist in 5-10 Arbeitstagen einsatzbereit. Eine Website benötigt je nach Umfang 2-4 Wochen." },
      { id: "service_languages", question: "In welchen Sprachen ist der Service verfügbar?", answer: "aiNOW bietet seine Leistungen auf Georgisch, Englisch und Russisch an." },
      { id: "technical_knowledge", question: "Brauche ich technische Kenntnisse?", answer: "Nein. Sie beschreiben das Geschäftsziel in einfachen Worten. iAI macht daraus klare Aufgaben und zeigt, welches Produkt arbeitet und welches Ergebnis entstanden ist." },
    ],
  },
  tr: {
    metadataDescription: "aiNOW işletmeler için chatbot, web sitesi, otomasyon, içerik ve reklam çözümleri geliştirir. İlk çalışan demo 3 iş gününde hazırdır.",
    hero: {
      eyebrow: "İşletmeniz için AI ekibi",
      h1: "Siz işletmenin neye ihtiyacı olduğunu söylersiniz. iAI işi dağıtır.",
      supportingSentence: "iAI talebinizi anlar, işi aiCONTENT, aiADS ve aiCHATS arasında dağıtır ve sonucu tek yerde gösterir.",
      decorativeVerbs: ["anlar", "dağıtır", "üretir", "tanıtır", "yanıtlar"],
      primaryCta: "Demo isteyin",
      proof: "İlk çalışan demo 3 iş gününde",
      ownerDemoRequest: "Pazartesiden itibaren yeni bir teklifimiz var. Bir gönderi hazırla, reklamı başlat ve gelen tüm soruları yanıtla.",
      demoOutcome: {
        title: "iAI talebi anladı",
        body: "aiCONTENT gönderiyi hazırlar, aiADS reklam kampanyasını kurar ve aiCHATS gelen soruları yanıtlar. İlerlemeyi ve sonucu tek ekranda görürsünüz.",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "iAI nedir?", answer: "iAI koordinatördür. İş hedefinizi günlük dille anlatırsınız. iAI talebi anlar, görevlere böler, her görevi doğru ürüne iletir ve sonucu tek yerde gösterir." },
      { id: "product_roles", question: "aiCONTENT, aiADS ve aiCHATS ne yapar?", answer: "aiCONTENT içerik üretir, aiADS reklamı hazırlar ve yönetir, aiCHATS müşterileri yanıtlar ve talepleri toplar. iAI üç ürünü koordine eder." },
      { id: "give_task", question: "iAI'ye nasıl görev veririm?", answer: "İhtiyacınız olan sonucu günlük dille anlatın. iAI talebi görevlere böler ve her görevi doğru ürüne iletir." },
      { id: "demo_contents", question: "Demoda ne göreceğim?", answer: "Demo, işletmenizden gelen tek bir talebi baştan sona gösterir: işletme sahibinin mesajı, iAI tarafından yapılan görev dağılımı, her ürünün çalışması ve son sonuç." },
      { id: "demo_timing", question: "Demo ne zaman hazır olur?", answer: "aiNOW, işletmenize özel demoyu 3 iş günü içinde hazırlar." },
      { id: "launch_timing", question: "Kurulum ne kadar sürer?", answer: "Basit bir sistem 5-10 iş gününde devreye alınır. Bir web sitesi, kapsamına göre 2-4 haftada hazırlanır." },
      { id: "service_languages", question: "Hizmet hangi dillerde sunuluyor?", answer: "aiNOW hizmetlerini Gürcüce, İngilizce ve Rusça sunar." },
      { id: "technical_knowledge", question: "Teknik bilgiye ihtiyacım var mı?", answer: "Hayır. İş hedefinizi günlük dille anlatırsınız. iAI talebi açık görevlere dönüştürür ve hangi ürünün çalıştığını ve hangi sonucun çıktığını gösterir." },
    ],
  },
  fa: {
    metadataDescription: "aiNOW برای کسب‌وکارها چت‌بات، وب‌سایت، اتوماسیون، محتوا و تبلیغات می‌سازد. اولین دموی عملی در ۳ روز کاری آماده می‌شود.",
    hero: {
      eyebrow: "تیم AI برای کسب‌وکار شما",
      h1: "شما می‌گویید کسب‌وکار به چه چیزی نیاز دارد. iAI کار را تقسیم می‌کند.",
      supportingSentence: "iAI درخواست شما را می‌فهمد، کار را بین aiCONTENT، aiADS و aiCHATS تقسیم می‌کند و نتیجه را در یک جا نشان می‌دهد.",
      decorativeVerbs: ["می‌فهمد", "می‌سپارد", "می‌نویسد", "می‌فروشد", "می‌سنجد"],
      primaryCta: "درخواست دمو",
      proof: "اولین دموی عملی در 3 روز کاری",
      ownerDemoRequest: "از دوشنبه پیشنهاد تازه‌ای داریم. یک پست آماده کن، تبلیغ را شروع کن و به همه پرسش‌های ورودی پاسخ بده.",
      demoOutcome: {
        title: "iAI درخواست را فهمید",
        body: "aiCONTENT پست را آماده می‌کند، aiADS کمپین تبلیغاتی را تنظیم می‌کند و aiCHATS به پرسش‌های ورودی پاسخ می‌دهد. روند کار و نتیجه را در یک صفحه می‌بینید.",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "iAI چیست؟", answer: "iAI هماهنگ‌کننده است. شما هدف کسب‌وکار را با زبان روزمره توضیح می‌دهید. iAI درخواست را می‌فهمد، آن را به کارهای مشخص تقسیم می‌کند، هر کار را به محصول مناسب می‌سپارد و نتیجه را در یک جا نشان می‌دهد." },
      { id: "product_roles", question: "aiCONTENT، aiADS و aiCHATS چه کاری انجام می‌دهند؟", answer: "aiCONTENT محتوا تولید می‌کند، aiADS تبلیغات را آماده و مدیریت می‌کند و aiCHATS به مشتریان پاسخ می‌دهد و درخواست‌ها را جمع می‌کند. iAI هر سه محصول را هماهنگ می‌کند." },
      { id: "give_task", question: "چگونه به iAI کار بدهم؟", answer: "با زبان روزمره توضیح دهید چه نتیجه‌ای می‌خواهید. iAI درخواست را به کارهای مشخص تقسیم می‌کند و هر کار را به محصول مناسب می‌سپارد." },
      { id: "demo_contents", question: "در دمو چه می‌بینم؟", answer: "دمو یک درخواست واقعی از کسب‌وکار شما را از ابتدا تا پایان نشان می‌دهد: پیام صاحب کسب‌وکار، تقسیم کار توسط iAI، کار هر محصول و نتیجه نهایی." },
      { id: "demo_timing", question: "دمو چه زمانی آماده می‌شود؟", answer: "aiNOW دموی متناسب با کسب‌وکار شما را ظرف 3 روز کاری آماده می‌کند." },
      { id: "launch_timing", question: "راه‌اندازی چقدر زمان می‌برد؟", answer: "راه‌اندازی یک سیستم ساده 5-10 روز کاری زمان می‌برد. آماده‌سازی وب‌سایت، بسته به دامنه کار، 2-4 هفته زمان می‌برد." },
      { id: "service_languages", question: "خدمات به چه زبان‌هایی ارائه می‌شود؟", answer: "aiNOW خدمات را به زبان‌های گرجی، انگلیسی و روسی ارائه می‌دهد." },
      { id: "technical_knowledge", question: "آیا به دانش فنی نیاز دارم؟", answer: "خیر. هدف کسب‌وکار را با واژه‌های معمولی توضیح می‌دهید. iAI درخواست را به کارهای روشن تبدیل می‌کند و نشان می‌دهد هر محصول چه می‌کند و چه نتیجه‌ای به دست آمده است." },
    ],
  },
  zh: {
    metadataDescription: "aiNOW 为企业打造聊天机器人、网站、自动化、内容和广告。首个可运行演示在 3 个工作日内交付。",
    hero: {
      eyebrow: "为你的企业服务的 AI 团队",
      h1: "你说明业务需要什么，iAI负责分配工作。",
      supportingSentence: "iAI理解你的要求，把工作分配给aiCONTENT、aiADS和aiCHATS，并在一个地方展示结果。",
      decorativeVerbs: ["理解", "分配", "创作", "投放", "回复"],
      primaryCta: "申请演示",
      proof: "3个工作日内提供首个可运行演示",
      ownerDemoRequest: "从周一开始我们有一个新优惠。准备一篇帖子，启动广告，并回复所有新咨询。",
      demoOutcome: {
        title: "iAI已理解任务",
        body: "aiCONTENT准备帖子，aiADS设置广告活动，aiCHATS回复新咨询。你可以在一个屏幕上看到进度和结果。",
      },
    },
    faqs: [
      { id: "what_is_iai", question: "iAI是什么？", answer: "iAI是协调系统。你用日常语言说明业务目标。iAI理解要求，将其拆分为任务，把每项任务交给合适的产品，并在一个地方展示结果。" },
      { id: "product_roles", question: "aiCONTENT、aiADS和aiCHATS分别做什么？", answer: "aiCONTENT制作内容，aiADS准备并管理广告，aiCHATS回复客户并收集需求。iAI负责协调这三个产品。" },
      { id: "give_task", question: "我怎样给iAI安排任务？", answer: "用日常语言说明你想得到什么结果。iAI会将要求拆分为任务，并把每项任务交给合适的产品。" },
      { id: "demo_contents", question: "我会在演示中看到什么？", answer: "演示会完整展示你业务中的一个具体要求：企业主的消息、iAI分配任务、每个产品的工作以及最终结果。" },
      { id: "demo_timing", question: "演示什么时候准备好？", answer: "aiNOW会在3个工作日内准备好适合你业务的演示。" },
      { id: "launch_timing", question: "上线需要多长时间？", answer: "简单系统可在5-10个工作日内上线。网站根据工作范围需要2-4周。" },
      { id: "service_languages", question: "服务支持哪些语言？", answer: "aiNOW提供格鲁吉亚语、英语和俄语服务。" },
      { id: "technical_knowledge", question: "我需要技术知识吗？", answer: "不需要。你用日常语言说明业务目标。iAI会把要求转换为清晰任务，并展示每个产品正在做什么以及得到什么结果。" },
    ],
  },
};

/**
 * The pricing screen is a client component, but pricing-data.ts is deliberately
 * a pure data module. This projection is the server-safe public catalog used by
 * JSON, llms.txt and schema consumers. Keeping the projection here means the
 * public machine surfaces cannot silently keep an older set of plans.
 */
const PUBLIC_PRODUCT_NOTES: Readonly<Record<string, readonly string[]>> = {
  aichats: [
    "Personal standard price: 100 GEL per month.",
    "50 GEL per month is only a promotional rate with three-month prepayment; the first month is free and the first three months total 100 GEL.",
    "Personal includes 600 AI replies and one Instagram account or Facebook page; the knowledge base and catalog are not included.",
  ],
  aicall: [
    "One simultaneous inbound channel is included in every plan.",
    "Inbound minutes have no separate per-minute fee.",
    "Each additional channel costs 60 GEL per month.",
    "Connected outbound minutes cost 1.50 GEL per minute.",
    "Initial setup costs 150 GEL once.",
  ],
  aicontent: [
    "Public prices are per video: product promo 50-100 GEL, generative UGC 100-200 GEL, and personal AI avatar from 200 GEL.",
    "Recurring monthly content packages are agreed separately by scope and volume.",
  ],
  aistaff: [
    "aiSTAFF recruits and selects human AI specialists for companies.",
    "aiSTAFF is a human specialist recruitment service, not an automated chatbot or an AI employee product.",
  ],
};

const PUBLIC_PRODUCT_DESCRIPTIONS: Readonly<Record<string, string>> = {
  aichats: "AI chat for customer questions, requests, orders and bookings across supported channels.",
  aicall: "AI voice calls for approved inbound support and agreed outbound call workflows.",
  aicontent: "AI-generated product, UGC-style and avatar videos for social media and advertising.",
  aiweb: "Business websites, online stores and custom web products built for the client's process.",
  aistaff: "Human AI specialist recruitment and selection for companies that need people with practical AI experience.",
  iai: "Process coordination that connects the aiNOW products and custom systems a business actually needs.",
};

export const PUBLIC_PRODUCT_CATALOG = PRICING_PRODUCTS.filter((product) => product.id === "vibecoding").map((product) => ({
  id: product.id,
  name: product.name,
  url: product.url,
  label: product.label,
  summary: product.summary,
  description: PUBLIC_PRODUCT_DESCRIPTIONS[product.id] ?? product.summary,
  pricingModel: product.pricingModel,
  pricingModelLabel: product.pricingModelLabel,
  pricingModelDetail: product.pricingModelDetail,
  startingPrice: product.priceLead,
  decisionPrompt: product.decisionPrompt,
  sectionLabel: product.sectionLabel,
  billingLabel: product.billingLabel,
  scopeNotice: product.scopeNotice ?? null,
  rowLabels: product.rowLabels.map((row) => row.label),
  agentFacts: product.agentFacts,
  pricingNotes: PUBLIC_PRODUCT_NOTES[product.id] ?? [],
  plans: product.plans.map((plan) => ({
    id: plan.id,
    name: plan.name,
    price: plan.price,
    cadence: plan.cadence,
    note: plan.note,
    values: plan.values,
    limits: plan.values.map((value, index) => ({
      label: product.rowLabels[index]?.label ?? `Value ${index + 1}`,
      value,
    })),
  })),
}));

export type PublicProduct = (typeof PUBLIC_PRODUCT_CATALOG)[number];

/**
 * Browser-safe product links used by the refreshed public aiNOW homepage.
 * Keep this list limited to the current product surfaces; planned work stays
 * outside the homepage navigation and lead form.
 */
export const AGENT_PRODUCTS = PRICING_PRODUCTS.map((product) => ({
  id: product.id,
  name: product.name,
  labelKa: product.label,
  url: product.url,
  summary: product.summary,
}));

export type AgentProduct = (typeof AGENT_PRODUCTS)[number];

function buildVisibleFaqs(locale: string): readonly PublicFaq[] {
  return Object.entries(getAiNowHomeCopy(locale).faq.items).map(([id, item]) => ({
    id,
    question: item.question,
    answer: item.answer,
  }));
}

/** The machine FAQ is the same 15-item source rendered by AiNowFaq.tsx. */
export const PUBLIC_FAQS = buildVisibleFaqs("en");

export const PUBLIC_LOCALIZED_FAQS: Readonly<Record<PublicSiteLocale, readonly PublicFaq[]>> =
  Object.fromEntries(
    PUBLIC_FACTS.site.locales.map((locale) => [locale, buildVisibleFaqs(locale)]),
  ) as Readonly<Record<PublicSiteLocale, readonly PublicFaq[]>>;

const SERVICES = [
  {
    id: "websites",
    name: "Web Development",
    url: "https://ainow.ge/services/websites",
    summary: "Custom multilingual websites and web applications built for search, speed and conversion.",
    deliverables: ["landing pages", "marketing sites", "web applications", "headless CMS integrations", "i18n setup"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
  },
  {
    id: "automation",
    name: "AI Automation",
    url: "https://ainow.ge/services/automation",
    summary: "Business process automation using AI, integrations, internal tools and controlled agent workflows.",
    deliverables: ["AI workflows", "API integrations", "internal admin tools", "data pipelines", "agentic systems"],
    stack: ["Python", "Node.js", "Claude API", "OpenAI API", "n8n", "Make"],
  },
  {
    id: "seo",
    name: "SEO Georgia",
    url: "https://ainow.ge/services/seo",
    summary: "Search optimization for businesses in Georgia, including technical SEO, content and local discovery.",
    deliverables: ["technical SEO audit", "keyword research", "on-page optimization", "link building", "monthly reports"],
  },
  {
    id: "llm-seo",
    name: "LLM SEO / Generative Engine Optimization",
    url: "https://ainow.ge/services/llm-seo",
    summary: "Entity, schema and citation work that helps AI answer engines understand and cite a business accurately.",
    deliverables: ["llms.txt", "/.well-known/ai.txt", "JSON-LD schema", "FAQ blocks", "entity disambiguation", "AI crawler audit"],
  },
  {
    id: "graphics",
    name: "Graphics and Design",
    url: "https://ainow.ge/services/graphics",
    summary: "Brand identity, marketing visuals, motion graphics and product video from concept to final files.",
    deliverables: ["UI design", "brand identity", "logo design", "illustration", "motion graphics", "ad creatives", "product video"],
  },
  {
    id: "bots",
    name: "Chatbots and Bots",
    url: "https://ainow.ge/services/bots",
    summary: "AI assistants for sales, support and bookings across messaging apps and websites.",
    deliverables: ["Telegram bots", "WhatsApp bots", "web chat widgets", "RAG knowledge bots", "sales and support bots"],
  },
  {
    id: "voice-agents",
    name: "AI Voice Agents",
    url: "https://ainow.ge/services/voice-agents",
    summary: "Voice agents for outbound calls, inbound support, appointment booking and lead qualification.",
    deliverables: ["outbound call agents", "inbound support agents", "appointment booking", "lead qualification", "multilingual call routing"],
  },
  {
    id: "ai-characters",
    name: "AI Mascot Characters",
    url: "https://ainow.ge/services/ai-characters",
    summary: "Reusable brand characters and influencer-style personas for advertising, product stories and social media content.",
    deliverables: ["character design", "AI persona design", "AI video production", "scripted content series", "branded voice", "ad reuse rights"],
  },
  {
    id: "auction-logistics-marketing",
    name: "Auto Auction Logistics Marketing",
    url: "https://ainow.ge/services/auction-logistics-marketing",
    summary: "Search, advertising and lead funnels for vehicle-import logistics businesses.",
    deliverables: ["niche SEO", "Google Ads campaigns", "Meta Ads campaigns", "auction-feed landing pages", "lead funnels", "WhatsApp lead routing"],
  },
  {
    id: "consulting",
    name: "AI Consulting",
    url: "https://ainow.ge/services/consulting",
    summary: "AI readiness review, integration roadmap, use-case workshops and vendor selection.",
    deliverables: ["AI readiness report", "integration roadmap", "use-case workshops", "vendor benchmark", "prototype roadmap"],
  },
] as const;

const CAPABILITIES = [
  "Web and mobile product development",
  "AI chatbot and voice agent development",
  "Business process automation and integrations",
  "AI content, video and brand production",
  "Search and Generative Engine Optimization",
  "Paid advertising and campaign operations",
  "AI readiness and implementation consulting",
] as const;

export function getPublicMetadataDescription(locale: string): string {
  return getPublicHomeContent(locale).metadataDescription;
}

export function getPublicHomeContent(locale: string): PublicHomeContent {
if ((PUBLIC_FACTS.site.locales as readonly string[]).includes(locale)) {
    return PUBLIC_HOME_CONTENT[locale as PublicSiteLocale];
  }

  return PUBLIC_HOME_CONTENT.en;
}

export function buildAiCatalog(): Record<string, unknown> {
  return {
    schemaVersion: "ainow.public-product-catalog.v1",
    name: PUBLIC_FACTS.brand.name,
    url: PUBLIC_FACTS.brand.url,
    currency: "GEL",
    lastUpdated: PUBLIC_FACTS.lastUpdated,
    source: "aiNOW pricing page and current public pricing data",
    positioning: PUBLIC_POSITIONING,
    products: PUBLIC_PRODUCT_CATALOG,
  };
}

export function serializePublicAiJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

export function buildAiSummary(): Record<string, unknown> {
  return {
    name: PUBLIC_FACTS.brand.name,
    legalName: PUBLIC_FACTS.brand.legalName,
    slogan: PUBLIC_FACTS.brand.slogan,
    description: PUBLIC_FACTS.description,
    summary: PUBLIC_FACTS.summary,
    url: PUBLIC_FACTS.brand.url,
    type: PUBLIC_FACTS.brand.type,
    brandEstablished: PUBLIC_FACTS.brandEstablished,
    founded: PUBLIC_FACTS.founded,
    founder: PUBLIC_FACTS.founder,
    location: PUBLIC_FACTS.location,
    languages: [...PUBLIC_FACTS.service.languages],
    languagesScope: "service",
    siteLocales: [...PUBLIC_FACTS.site.locales],
    serviceLanguages: [...PUBLIC_FACTS.service.languages],
    delivery: PUBLIC_FACTS.delivery,
    areaServed: [...PUBLIC_FACTS.areaServed],
    contact: PUBLIC_FACTS.contact,
    positioning: PUBLIC_POSITIONING,
    productCatalog: PUBLIC_PRODUCT_CATALOG,
    services: SERVICES.map((service) => service.name),
    engagementModels: [
      {
        name: "CONSULTING_AND_IMPLEMENTATION",
        description:
          "aiNOW studies the business process, chooses a ready product or scopes a custom AI system, then agrees the implementation scope and price before work starts. Standalone products can be purchased directly.",
      },
    ],
    links: {
      llms: "https://ainow.ge/llms.txt",
      sitemap: "https://ainow.ge/sitemap.xml",
      robots: "https://ainow.ge/robots.txt",
      aiTxt: "https://ainow.ge/.well-known/ai.txt",
      faq: "https://ainow.ge/ai/faq.json",
      service: "https://ainow.ge/ai/service.json",
      catalog: "https://ainow.ge/ai/catalog.json",
      integrations: "https://ainow.ge/ai/integrations.json",
      apiCatalog: "https://ainow.ge/.well-known/api-catalog",
      openapi: "https://ainow.ge/openapi.json",
      agentSkills: "https://ainow.ge/.well-known/agent-skills/index.json",
    },
    social: {
      facebook: "https://www.facebook.com/ainow.ge",
      instagram: "https://www.instagram.com/ainow.ge/",
      linkedin: "https://www.linkedin.com/company/ainowgeorgia",
      telegram: "https://t.me/ainow_ge",
      github: "https://github.com/ainowgeorgia",
    },
    lastUpdated: PUBLIC_FACTS.lastUpdated,
    plannedIntegrations: TIKTOK_PRODUCT_ROADMAP,
  };
}

export function buildAiFaq(): Record<string, unknown> & {
  faqs: typeof PUBLIC_FAQS;
  localizedFaqs: typeof PUBLIC_LOCALIZED_FAQS;
} {
  return {
    name: PUBLIC_FACTS.brand.name,
    url: PUBLIC_FACTS.brand.url,
    lastUpdated: PUBLIC_FACTS.lastUpdated,
    siteLocales: [...PUBLIC_FACTS.site.locales],
    serviceLanguages: [...PUBLIC_FACTS.service.languages],
    productCatalog: "https://ainow.ge/ai/catalog.json",
    faqs: PUBLIC_FAQS,
    localizedFaqs: PUBLIC_LOCALIZED_FAQS,
  };
}

export function buildAiService(): Record<string, unknown> {
  return {
    name: PUBLIC_FACTS.brand.name,
    description: PUBLIC_FACTS.description,
    url: PUBLIC_FACTS.brand.url,
    provider: {
      name: PUBLIC_FACTS.brand.name,
      url: PUBLIC_FACTS.brand.url,
      founder: PUBLIC_FACTS.founder,
      location: `${PUBLIC_FACTS.location.city}, ${PUBLIC_FACTS.location.country}`,
    },
    siteLocales: [...PUBLIC_FACTS.site.locales],
    serviceLanguages: [...PUBLIC_FACTS.service.languages],
    positioning: PUBLIC_POSITIONING,
    delivery: PUBLIC_FACTS.delivery,
    lastUpdated: PUBLIC_FACTS.lastUpdated,
    capabilities: CAPABILITIES,
    services: SERVICES,
    productCatalog: PUBLIC_PRODUCT_CATALOG,
    integrations: TIKTOK_PRODUCT_ROADMAP,
  };
}

export function buildAiTxt(): string {
  return [
    "# AI Crawler Policy, ainow.ge",
    "# https://ainow.ge/.well-known/ai.txt",
    `# Updated: ${PUBLIC_FACTS.lastUpdated}`,
    "",
    "# Organization",
    `Name: ${PUBLIC_FACTS.brand.name}`,
    `LegalName: ${PUBLIC_FACTS.brand.legalName}`,
    `Type: ${PUBLIC_FACTS.brand.type}`,
    `Slogan: ${PUBLIC_FACTS.brand.slogan}`,
    `Positioning: ${PUBLIC_FACTS.summary}`,
    `Positioning-Model: ${PUBLIC_POSITIONING.model}`,
    `Positioning-Workflow: ${PUBLIC_POSITIONING.workflow.join(" | ")}`,
    `Standalone-Products: ${PUBLIC_POSITIONING.standaloneProducts}`,
    `URL: ${PUBLIC_FACTS.brand.url}`,
    `Brand-Established: ${PUBLIC_FACTS.brandEstablished}`,
    `Founded: ${PUBLIC_FACTS.founded}`,
    `Founder: ${PUBLIC_FACTS.founder.name} (${PUBLIC_FACTS.founder.url})`,
    `Location: ${PUBLIC_FACTS.location.city}, ${PUBLIC_FACTS.location.country}`,
    `Site-Languages: ${PUBLIC_FACTS.site.locales.join(", ")}`,
    `Service-Languages: ${PUBLIC_FACTS.service.languages.join(", ")}`,
    `Delivery-Qualification: ${PUBLIC_FACTS.delivery.qualification}`,
    `First-Working-Demo: ${PUBLIC_FACTS.delivery.firstWorkingDemo.qualifiedLabel}`,
    `Simple-Full-Launch: ${PUBLIC_FACTS.delivery.simpleFullLaunch.qualifiedLabel}`,
    `Website-Full-Launch: ${PUBLIC_FACTS.delivery.website.qualifiedLabel}`,
    `AreaServed: ${PUBLIC_FACTS.areaServed.join(", ")}`,
    `Contact: ${PUBLIC_FACTS.contact.email}`,
    "",
    "# Default policy",
    "User-Agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /admin/",
    "Disallow: /agreements/",
    "Disallow: /invoices/",
    "Disallow: /questionnaires/",
    "",
    "# Training and inference allowed for major AI engines",
    ...[
      "GPTBot",
      "ChatGPT-User",
      "OAI-SearchBot",
      "ClaudeBot",
      "Claude-Web",
      "anthropic-ai",
      "Google-Extended",
      "PerplexityBot",
      "Perplexity-User",
      "Applebot-Extended",
      "cohere-ai",
      "meta-externalagent",
      "Bytespider",
    ].flatMap((agent) => [`User-Agent: ${agent}`, "Allow: /", ""]),
    "# Citation policy",
    "Citation-Policy: required",
    `Citation-Format: ${PUBLIC_FACTS.brand.name} (${PUBLIC_FACTS.brand.url})`,
    "",
    "# Structured machine-readable references",
    "Sitemap: https://ainow.ge/sitemap.xml",
    "LLMs-File: https://ainow.ge/llms.txt",
    "Summary: https://ainow.ge/ai/summary.json",
    "FAQ: https://ainow.ge/ai/faq.json",
    "Services: https://ainow.ge/ai/service.json",
    "Catalog: https://ainow.ge/ai/catalog.json",
    "Integrations: https://ainow.ge/ai/integrations.json",
    "Cases: https://ainow.ge/ai/cases.json",
    "API-Catalog: https://ainow.ge/.well-known/api-catalog",
    "OpenAPI: https://ainow.ge/openapi.json",
    "Agent-Skills: https://ainow.ge/.well-known/agent-skills/index.json",
  ].join("\n");
}
