type Locale = "ka" | "en" | "ru";
type Feature = { name: string; description: string };

const copy: Record<Locale, Record<string, Feature>> = {
  ka: {
    scan: { name: "საჯარო სკანი", description: "შეამოწმეთ ნორმალური ბრაუზერისთვის ხილული ზედაპირი." },
    surface: { name: "წვდომის ზედაპირი", description: "დააფიქსირეთ საჯარო გვერდები, სკრიპტები და შესასვლელები." },
    triage: { name: "მიგნებების ტრიაჟი", description: "მიგნებები კრიტიკულობისა და ბიზნესზემოქმედების მიხედვით ლაგდება." },
    findings: { name: "მიგნებები", description: "ანგარიში აერთიანებს მტკიცებულებას და რეკომენდებულ ნაბიჯს." },
    severity: { name: "კრიტიკულობის დონე", description: "პრიორიტეტი ცალკე გამოიყოფა რისკისა და გავლენის მიხედვით." },
    repair: { name: "აღდგენის გეგმა", description: "შეკეთების სამუშაო სია შეთანხმებულ ფარგლებს მიჰყვება." },
    handover: { name: "ჩაბარება", description: "შედეგი და დაუმთავრებელი ნაბიჯები ადამიანურ ჩაბარებაში იკრიბება." },
    scope: { name: "შემოწმების ფარგლები", description: "კერძო სისტემები მხოლოდ ნებართვითა და უსაფრთხო ზღვარით მოწმდება." },
    rescan: { name: "ხელახალი სკანი", description: "ცვლილების შემდეგ ხელახალი შემოწმება მხოლოდ შეთანხმებულად ტარდება." },
    public: { name: "საჯარო ნაწილი", description: "საჯარო ზედაპირის შედეგები ცალკე აღირიცხება." },
    private: { name: "პირადი ნაწილი", description: "პირადი სისტემის შემოწმება მოითხოვს უფლებამოსილებას." },
    release: { name: "გამოშვების გადაწყვეტილება", description: "გამოშვება მტკიცებულებისა და პასუხისმგებელი პირის გადაწყვეტილებაა." },
  },
  en: {
    scan: { name: "Public scan", description: "Check the surface visible to a normal browser." },
    surface: { name: "Access surface", description: "Record public pages, scripts and entry points." },
    triage: { name: "Finding triage", description: "Prioritize findings by severity and business impact." },
    findings: { name: "Findings", description: "Keep evidence and the recommended next step together." },
    severity: { name: "Severity", description: "Separate priority by risk and impact." },
    repair: { name: "Repair plan", description: "Keep the repair worklist inside the agreed scope." },
    handover: { name: "Handover", description: "Collect results and open items for human handover." },
    scope: { name: "Review scope", description: "Check private systems only with permission and a safe boundary." },
    rescan: { name: "Rescan", description: "Run a follow-up check only when it is agreed." },
    public: { name: "Public surface", description: "Record public-surface evidence separately." },
    private: { name: "Private surface", description: "Private-system review requires authorization." },
    release: { name: "Release decision", description: "Release remains a decision based on evidence and an owner." },
  },
  ru: {
    scan: { name: "Публичное сканирование", description: "Проверьте поверхность, видимую обычному браузеру." },
    surface: { name: "Поверхность доступа", description: "Зафиксируйте публичные страницы, скрипты и входы." },
    triage: { name: "Приоритизация находок", description: "Расставьте приоритеты по критичности и влиянию на бизнес." },
    findings: { name: "Находки", description: "Соберите доказательство и следующий рекомендуемый шаг." },
    severity: { name: "Критичность", description: "Отдельно укажите приоритет по риску и влиянию." },
    repair: { name: "План исправления", description: "Список исправлений остаётся в согласованных рамках." },
    handover: { name: "Передача", description: "Результаты и открытые пункты передаются человеку." },
    scope: { name: "Границы проверки", description: "Приватные системы проверяются только с разрешением и безопасной границей." },
    rescan: { name: "Повторная проверка", description: "Повторную проверку проводят только по согласованию." },
    public: { name: "Публичная часть", description: "Результаты по публичной поверхности фиксируются отдельно." },
    private: { name: "Приватная часть", description: "Проверка приватной системы требует разрешения." },
    release: { name: "Решение о релизе", description: "Релиз остаётся решением владельца на основе доказательств." },
  },
};

export function getOwnCategoryFeatures(locale: string): Record<string, Feature> {
  return copy[locale === "ka" || locale === "ru" ? locale : "en"];
}
