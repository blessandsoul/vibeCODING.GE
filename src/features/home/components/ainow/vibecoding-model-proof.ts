/*
 * The visual rail keeps the source's eleven provider slots. The second line
 * is a localized vibeCODING workflow function, not a claim that a provider
 * model is available, selected or endorsed for this product.
 */
const providerFunctions = {
  ka: {
    OpenAI: "საჯარო URL-ის სკანი",
    Anthropic: "ავტორიზებული ფარგლები",
    Google: "ხილული მტკიცებულება",
    xAI: "რისკების პრიორიტეტი",
    "Mistral AI": "ბიზნესზე გავლენა",
    DeepSeek: "ხარვეზების გამოსწორების სამუშაო სია",
    Meta: "ხელახალი სკანი",
    Qwen: "მფლობელის თანხმობა",
    Cohere: "უცნობი საკითხების გამოყოფა",
    "Z.ai": "გამოშვების გადაწყვეტილება",
    "Moonshot AI": "შემდეგი ნაბიჯები",
  },
  en: {
    OpenAI: "Public URL scan",
    Anthropic: "Authorized scope",
    Google: "Visible evidence",
    xAI: "Risk priority",
    "Mistral AI": "Business impact",
    DeepSeek: "Repair worklist",
    Meta: "Agreed rescan",
    Qwen: "Owner approval",
    Cohere: "Unknowns separated",
    "Z.ai": "Release decision",
    "Moonshot AI": "Next steps",
  },
  ru: {
    OpenAI: "Проверка публичного URL",
    Anthropic: "Согласованные границы",
    Google: "Видимые свидетельства",
    xAI: "Приоритет риска",
    "Mistral AI": "Влияние на бизнес",
    DeepSeek: "Список исправлений",
    Meta: "Согласованный перескан",
    Qwen: "Разрешение владельца",
    Cohere: "Отделение неизвестного",
    "Z.ai": "Решение о релизе",
    "Moonshot AI": "Следующие шаги",
  },
} as const;

const commonTrustImages = [
  "/graphics-3d/products/vibecoding-hero-scan-v1.png",
  "/graphics-3d/products/vibecoding-surface-audit-v1.png",
  "/graphics-3d/products/vibecoding-severity-triage-v1.png",
  "/graphics-3d/products/vibecoding-handover-v1.png",
] as const;

export const VIBECODING_MODEL_PROOF = {
  ka: {
    eyebrow: "უსაფრთხოების შემოწმება",
    title: "მტკიცებულება გამოშვებამდე, არა ცარიელი გარანტია.",
    description: "ვიწყებთ საჯარო URL-ით და პირად სისტემებზე მხოლოდ ნებართვით გადავდივართ. ანგარიში აჩვენებს, რა რისკები გამოვლინდა, რას ეხება ისინი, როგორ უნდა გამოსწორდეს ხარვეზები და როგორ გადამოწმდეს შედეგი.",
    radar: "რას ამოწმებს მიმოხილვა",
    moreTechnologies: "დამატებითი დეტალი",
    jevKicker: "ნებართვის ფარგლები",
    jevTitle: "ადამიანის შემოწმება",
    jevDescription: "vibeCODING აპს სრულად დაცულად არ აცხადებს; მფლობელი და დეველოპერი წყვეტენ ხარვეზების გამოსწორების ნაბიჯს.",
    providerFunctions: providerFunctions.ka,
    trustLabel: "მტკიცებულება და ხარვეზების გამოსწორება",
    brand: { established: "vibeCODING · aiNOW", title: "მტკიცებულება. რისკი. ხარვეზების გამოსწორება.", language: "AI-ით შექმნილი აპი, გამოშვებამდე შემოწმებული.", location: "თბილისი / aiNOW-ის გუნდი" },
    trust: [
      { value: "სკანი", label: "საჯარო ზედაპირი", detail: "URL, გვერდი და სკრიპტები ჩვეულებრივი ვიზიტორის ხედიდან.", image: commonTrustImages[0] },
      { value: "ფარგლები", label: "ნებართვითი შემოწმება", detail: "პირადი შესვლა, API და მონაცემთა გზები ცალკე შეთანხმებული მასშტაბია.", image: commonTrustImages[1] },
      { value: "ტრიაჟი", label: "პრიორიტეტი", detail: "კრიტიკული, სასწრაფო და მოგვიანო სამუშაო მტკიცებულებით იყოფა.", image: commonTrustImages[2] },
      { value: "გადამოწმება", label: "ხარვეზების გამოსწორება და ხელახალი სკანი", detail: "დეველოპერის სამუშაო სია და შეთანხმებული გადამოწმების გზა.", image: commonTrustImages[3], slot: "always-on" },
    ],
  },
  en: {
    eyebrow: "Security review",
    title: "Evidence before release, not an empty guarantee.",
    description: "We start with a public URL and enter private systems only with permission. The report describes each risk and its impact, sets out remediation steps and explains how the fix should be verified.",
    radar: "What the review checks",
    moreTechnologies: "More detail",
    jevKicker: "Authorized scope",
    jevTitle: "Human review",
    jevDescription: "vibeCODING does not call an app secure; the owner and developer choose the repair path.",
    providerFunctions: providerFunctions.en,
    trustLabel: "Evidence and repair",
    brand: { established: "vibeCODING · aiNOW", title: "EVIDENCE. RISK. REPAIR.", language: "AI-built software, reviewed before release.", location: "Tbilisi / aiNOW team" },
    trust: [
      { value: "Scan", label: "Public surface", detail: "URL, page and scripts from a normal visitor view.", image: commonTrustImages[0] },
      { value: "Scope", label: "Authorized review", detail: "Private login, API and data paths are separate scope.", image: commonTrustImages[1] },
      { value: "Triage", label: "Priority", detail: "Critical, urgent and later work is tied to evidence.", image: commonTrustImages[2] },
      { value: "Rescan", label: "Repair and rescan", detail: "A developer worklist and agreed verification path.", image: commonTrustImages[3], slot: "always-on" },
    ],
  },
  ru: {
    eyebrow: "Проверка безопасности",
    title: "Проверка до релиза, а не пустые обещания.",
    description: "Начинаем с публичного URL и входим в приватные системы только с разрешением. Отчёт показывает, какие риски найдены, что они затрагивают, как устранить проблемы и проверить результат.",
    radar: "Что проверяет обзор",
    moreTechnologies: "Подробнее",
    jevKicker: "Согласованные границы проверки",
    jevTitle: "Проверка человеком",
    jevDescription: "vibeCODING не называет приложение защищённым; владелец и разработчик выбирают путь исправления.",
    providerFunctions: providerFunctions.ru,
    trustLabel: "Свидетельства и исправление",
    brand: { established: "vibeCODING · aiNOW", title: "СВИДЕТЕЛЬСТВА. РИСК. ИСПРАВЛЕНИЕ.", language: "AI-приложение, проверенное до релиза.", location: "Тбилиси / команда aiNOW" },
    trust: [
      { value: "Скан", label: "Публичная поверхность", detail: "URL, страница и скрипты глазами обычного посетителя.", image: commonTrustImages[0] },
      { value: "Границы", label: "Авторизованная проверка", detail: "Приватный вход, API и данные — отдельные согласованные рамки.", image: commonTrustImages[1] },
      { value: "Триаж", label: "Приоритет", detail: "Критические, срочные и поздние задачи связаны с доказательствами.", image: commonTrustImages[2] },
      { value: "Перескан", label: "Исправление и перескан", detail: "Список работ разработчика и согласованный путь проверки.", image: commonTrustImages[3], slot: "always-on" },
    ],
  },
} as const;
