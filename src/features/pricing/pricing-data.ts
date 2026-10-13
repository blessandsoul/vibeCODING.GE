export type PricingValue = string | boolean;

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  note: string;
  cta: string;
  values: readonly PricingValue[];
};

export type PricingModel = "subscription" | "project" | "mixed" | "custom";

export type PricingFact = {
  label: string;
  value: string;
  icon: string;
};

export type PricingRow = {
  label: string;
  icon: string;
};

export type PricingVisualSignal = {
  icon: string;
  labels: Readonly<Record<"ka" | "en" | "ru", string>>;
};

export type PricingProduct = {
  id: string;
  name: string;
  label: string;
  summary: string;
  accent: string;
  icon: string;
  url: string;
  pricingModel: PricingModel;
  pricingModelLabel: string;
  pricingModelDetail: string;
  priceLead: string;
  decisionPrompt: string;
  visualAsset: string;
  visualAlt: string;
  visualSignals: readonly PricingVisualSignal[];
  agentFacts: readonly PricingFact[];
  sectionLabel: string;
  billingLabel: string;
  scopeNotice?: string;
  rowLabels: readonly PricingRow[];
  plans: readonly PricingPlan[];
};

/* DESIGN PLAN
 * Theme: aiNOW OBSIDIAN glass for a Georgian small-business owner.
 * DESIGN_VARIANCE: 6. Every product has its own glass object and clear buying signal.
 * MOTION_INTENSITY: 3. Selection uses short, interruptible control feedback only.
 * VISUAL_DENSITY: 5. The visual explains the service before the matrix explains its levels.
 * The left rail answers what the product does. The matrix answers what each level includes.
 */

export const PRICING_PRODUCTS: readonly PricingProduct[] = [
  {
    id: "aichats",
    name: "aiCHATS",
    label: "კლიენტებთან მიმოწერა",
    summary: "კლიენტების კითხვებს პასუხობს, აგროვებს შეკვეთისა და ჯავშნის მოთხოვნებს და საჭირო დეტალებს თქვენს გუნდს გადასცემს.",
    accent: "#2563eb",
    icon: "solar:chat-round-dots-bold-duotone",
    url: "https://aichats.ge",
    pricingModel: "subscription",
    pricingModelLabel: "ყოველთვიური პაკეტი",
    pricingModelDetail: "Personal პაკეტი ერთი Instagram ანგარიშისთვის ან Facebook გვერდისთვისაა; ბიზნესპაკეტებში პასუხების, ანგარიშებისა და კატალოგის მოცულობა იზრდება.",
    priceLead: "100 ₾-დან თვეში",
    decisionPrompt: "როცა კლიენტები ხშირად გეკითხებიან ფასს, ხელმისაწვდომობას, მისამართს ან შეკვეთის პირობებს.",
    visualAsset: "/graphics-3d/products/glass-v2/01-aichats.png",
    visualAlt: "aiCHATS-ის მინის ჩატის სიმბოლო",
    visualSignals: [],
    agentFacts: [
      { label: "როგორ ითვლება ფასი", value: "პირადი ან ბიზნესპაკეტი, ყოველთვიური გადახდით", icon: "solar:calendar-bold-duotone" },
      { label: "საწყისი ფასი", value: "100 ₾ თვეში", icon: "solar:wallet-money-bold-duotone" },
      { label: "რას აკეთებს", value: "პასუხები, ანგარიშები და კატალოგი — თქვენი სამუშაოს მოცულობის მიხედვით", icon: "solar:chat-round-dots-bold-duotone" },
    ],
    sectionLabel: "კლიენტებთან მიმოწერა",
    billingLabel: "ყოველთვიური პაკეტები",
    scopeNotice: "Personal-ის ფასი თვეში 100 ₾-ია; მოქმედი აქციის შემთხვევაში, სამი თვის წინასწარ გადახდისას, ფასი 50 ₾-ია და პირველი თვე უფასოა — პირველი სამი თვის ჯამი 100 ₾ გამოდის. Personal-ში შედის 600 AI პასუხი და ერთი Instagram ანგარიში ან Facebook გვერდი; ცოდნის ბაზა და კატალოგი არ შედის. ბიზნესპაკეტებში მოცულობა იზრდება, Custom-ის პირობები კი შეთანხმებით განისაზღვრება.",
    rowLabels: [
      { label: "პასუხები თვეში", icon: "solar:chat-round-dots-bold-duotone" },
      { label: "დაკავშირებული ანგარიშები", icon: "solar:link-round-bold-duotone" },
      { label: "კატალოგის მოცულობა", icon: "solar:book-2-bold-duotone" },
      { label: "ინფორმაციის განახლება თვეში", icon: "solar:refresh-circle-bold-duotone" },
      { label: "როცა გჭირდებათ", icon: "solar:target-bold-duotone" },
    ],
    plans: [
      { id: "start", name: "დაწყება", price: "220 ₾", cadence: "თვეში", note: "ერთი ანგარიშისა და მცირე კატალოგისთვის", cta: "პაკეტის ნახვა", values: ["3 000", "1", "20-100 პროდუქტი", "არ შედის", "პასუხები და კლიენტის მონაცემები"] },
      { id: "expanded", name: "გაფართოებული", price: "450 ₾", cadence: "თვეში", note: "რამდენიმე არხისა და ცოდნის ბაზისთვის", cta: "პაკეტის ნახვა", values: ["8 000", "3", "100-500 პროდუქტი", "1 000", "ცოდნის ბაზა და ლიდის შეფასება"] },
      { id: "growth", name: "ზრდა", price: "900 ₾", cadence: "თვეში", note: "დიდი კატალოგისა და მუდმივი მხარდაჭერისთვის", cta: "პაკეტის ნახვა", values: ["25 000", "5", "500-2 000 პროდუქტი", "4 000", "რთული პროცესები და მუდმივი მხარდაჭერა"] },
      { id: "scale", name: "მასშტაბი", price: "2 500 ₾", cadence: "თვეში", note: "დიდი მოცულობისა და მრავალი ანგარიშისთვის", cta: "პაკეტის ნახვა", values: ["75 000", "10", "2 000-5 000 პროდუქტი", "10 000", "მაქსიმალური მოცულობა და პრიორიტეტი"] },
      { id: "personal", name: "Personal", price: "100 ₾", cadence: "თვეში", note: "ერთი Instagram ანგარიშისთვის ან Facebook გვერდისთვის", cta: "პაკეტის ნახვა", values: ["600", "1", "არ შედის", "არ შედის", "პირადი შეტყობინებები"] },
      { id: "custom", name: "Custom", price: "შეთანხმებით", cadence: "მორგებული", note: "არასტანდარტული მოცულობისა და სამუშაო პროცესისთვის", cta: "პაკეტის განხილვა", values: ["შეთანხმებით", "შეთანხმებით", "5 000+ პროდუქტი", "შეთანხმებით", "ინდივიდუალური პირობები"] },
    ],
  },
  {
    id: "aicall",
    name: "aiCALL",
    label: "AI ზარები",
    summary: "შემომავალ ზარებს პასუხობს და თქვენი დამტკიცებული დავალების მიხედვით ცალკეულ გამავალ ზარებს ახორციელებს.",
    accent: "#f97316",
    icon: "solar:call-chat-rounded-bold-duotone",
    url: "https://aicall.ge",
    pricingModel: "mixed",
    pricingModelLabel: "პლატფორმის ფასი + გამოყენებული გამავალი წუთები",
    pricingModelDetail: "ყველა პაკეტში შედის ერთი ერთდროული შემომავალი არხი; შემომავალ წუთებზე ცალკე სატელეფონო გადასახადი არ არის. დამატებითი არხი თვეში 60 ₾ ღირს, დაკავშირებული გამავალი წუთები კი ცალკე იანგარიშება.",
    priceLead: "220 ₾-დან თვეში",
    decisionPrompt: "როცა გინდათ, შემომავალ ზარებს უპასუხოთ ან კლიენტებს თავად დაურეკოთ.",
    visualAsset: "/graphics-3d/products/glass-v2/02-aicall.png",
    visualAlt: "aiCALL-ის მინის ტელეფონის სიმბოლო",
    visualSignals: [
      { icon: "solar:phone-calling-rounded-bold-duotone", labels: { ka: "კავშირი", en: "Connection", ru: "Связь" } },
      { icon: "solar:clock-circle-bold-duotone", labels: { ka: "პასუხი", en: "Reply", ru: "Ответ" } },
      { icon: "solar:chart-square-bold-duotone", labels: { ka: "შედეგი", en: "Result", ru: "Результат" } },
    ],
    agentFacts: [
      { label: "როგორ ითვლება ფასი", value: "220 ₾-დან თვეში + დაკავშირებული გამავალი წუთები", icon: "solar:wallet-money-bold-duotone" },
      { label: "პირველი გამართვა", value: "150 ₾ ერთხელ", icon: "solar:tuning-3-bold-duotone" },
      { label: "ზარების ფასი", value: "შემომავალი: პაკეტში შედის 1 არხი და წუთებზე ცალკე გადასახადი არ არის; დამატებითი არხი: 60 ₾/თვე; გამავალი: 1,50 ₾/დაკავშირებული წთ", icon: "solar:phone-calling-rounded-bold-duotone" },
    ],
    sectionLabel: "AI ზარები",
    billingLabel: "პლატფორმის ფასი; გამავალი წუთები ცალკე ემატება",
    scopeNotice: "გამართვის საფასური 150 ₾-ია და ერთხელ იხდით. ყველა პაკეტში შედის 1 ერთდროული შემომავალი არხი და შემომავალ წუთებზე ცალკე სატელეფონო გადასახადი არ არის. დამატებითი არხი თვეში 60 ₾ ღირს, ხოლო დაკავშირებული გამავალი წუთი — 1,50 ₾. მასობრივ კამპანიებზე, CSV-რიგებსა და ავტომატურ განმეორებით ზარებზე ჯერ ვმუშაობთ და ისინი აქტიურ ფუნქციებად არ ითვლება.",
    rowLabels: [
      { label: "AI როლები", icon: "solar:user-id-bold-duotone" },
      { label: "ზარის ამოცანები", icon: "solar:document-text-bold-duotone" },
      { label: "ერთდროული შემომავალი არხები", icon: "solar:phone-calling-rounded-bold-duotone" },
      { label: "დაკავშირებული პროგრამები", icon: "solar:link-round-bold-duotone" },
      { label: "ზარების ისტორია", icon: "solar:history-bold-duotone" },
    ],
    plans: [
      { id: "start", name: "დაწყება", price: "220 ₾", cadence: "თვეში", note: "ერთი AI როლისა და ერთი ზარის ამოცანისთვის", cta: "პაკეტის ნახვა", values: ["1 როლი", "1 ამოცანა", "1", "არ შედის", "30 დღე"] },
      { id: "expanded", name: "გაფართოებული", price: "450 ₾", cadence: "თვეში", note: "მცირე გუნდისთვის, რომელსაც რამდენიმე ზარის ამოცანა სჭირდება", cta: "პაკეტის ნახვა", values: ["1 როლი", "3 ამოცანა", "1", "1 კავშირი", "90 დღე"] },
      { id: "growth", name: "ზრდა", price: "900 ₾", cadence: "თვეში", note: "რამდენიმე როლისა და პროცესისთვის", cta: "პაკეტის ნახვა", values: ["3 როლი", "10 ამოცანა", "1", "3 კავშირი", "365 დღე"] },
      { id: "scale", name: "მასშტაბი", price: "2 500 ₾", cadence: "თვეში", note: "დიდი სატელეფონო დატვირთვისთვის", cta: "პაკეტის ნახვა", values: ["10 როლი", "25 ამოცანა", "1", "10 კავშირი", "შეუზღუდავი"] },
      { id: "custom", name: "Custom", price: "5 000 ₾", cadence: "თვეში", note: "თქვენზე მორგებული მოცულობის, მართვისა და მხარდაჭერისთვის", cta: "პაკეტის განხილვა", values: ["შეთანხმებით", "შეთანხმებით", "1", "შეთანხმებით", "შეთანხმებით"] },
    ],
  },
  {
    id: "aicontent",
    name: "aiCONTENT",
    label: "სარეკლამო ვიდეოები",
    summary: "პროდუქტის, UGC-სტილისა და ავატარის ვიდეოები სოციალური ქსელებისა და რეკლამისთვის.",
    accent: "#ec4899",
    icon: "solar:videocamera-bold-duotone",
    url: "https://aicontent.ge",
    pricingModel: "mixed",
    pricingModelLabel: "ერთჯერადი და ყოველთვიური პაკეტები",
    pricingModelDetail: "საჯაროდ მითითებული თითოეული ფასი ერთ ვიდეოს მოიცავს. განმეორებადი კონტენტისთვის ყოველთვიური პაკეტი ხელშეკრულებით ფორმდება, ხოლო მოცულობა და ფასი ინდივიდუალურად განისაზღვრება.",
    priceLead: "50–100 ₾ ერთ ვიდეოზე",
    decisionPrompt: "როცა გინდათ, რომ პროდუქტმა ან მომსახურებამ ვიდეოში სწრაფად მიიქციოს ყურადღება.",
    visualAsset: "/graphics-3d/products/glass-v2/04-aicontent.png",
    visualAlt: "aiCONTENT-ის მინის ვიდეოკამერის სიმბოლო",
    visualSignals: [
      { icon: "solar:magic-stick-3-bold-duotone", labels: { ka: "იდეა", en: "Ideas", ru: "Идеи" } },
      { icon: "solar:camera-bold-duotone", labels: { ka: "კადრი", en: "Shot", ru: "Кадр" } },
      { icon: "solar:videocamera-record-bold-duotone", labels: { ka: "რეკლამა", en: "Ad", ru: "Реклама" } },
    ],
    agentFacts: [
      { label: "როგორ ითვლება ფასი", value: "თითო ვიდეოზე", icon: "solar:videocamera-bold-duotone" },
      { label: "ვიდეოს ფასები", value: "50–100 ₾, 100–200 ₾ ან 200 ₾-დან", icon: "solar:wallet-money-bold-duotone" },
      { label: "შესწორება", value: "თითო ფორმატში ერთი ეტაპი", icon: "solar:pen-new-square-bold-duotone" },
    ],
    sectionLabel: "სარეკლამო ვიდეოები",
    billingLabel: "ერთი ვიდეო; ყოველთვიური პაკეტი — ხელშეკრულებით",
    scopeNotice: "სამივე საჯარო ფასი ერთ ვიდეოზეა გათვლილი. განმეორებადი კონტენტისთვის ყოველთვიური პაკეტიც შეგვიძლია შევათანხმოთ: სამუშაოს მოცულობა და ფასი ინდივიდუალურად, ხელშეკრულებით განისაზღვრება. თითო ფორმატში ერთი შესწორების ეტაპი შედის. რეალური გადაღება, რეალური ინფლუენსერი და მსახიობი არ შედის.",
    rowLabels: [
      { label: "ფორმატი", icon: "solar:videocamera-bold-duotone" },
      { label: "ფასი", icon: "solar:wallet-money-bold-duotone" },
      { label: "რამდენი ვიდეო", icon: "solar:layers-bold-duotone" },
      { label: "შესწორებების რაუნდი", icon: "solar:pen-new-square-bold-duotone" },
      { label: "როდის გამოგადგებათ", icon: "solar:target-bold-duotone" },
    ],
    plans: [
      { id: "promo", name: "პროდუქტის პრომო-ვიდეო", price: "50–100 ₾", cadence: "ერთ ვიდეოზე", note: "მოკლე რეკლამა პროდუქტისთვის, სივრცისთვის ან მომსახურებისთვის, წამყვანის გარეშე", cta: "ვიდეოს განხილვა", values: ["პროდუქტის პრომო-ვიდეო", "50–100 ₾", "1 მზა ვიდეო", "1 ეტაპი", "პროდუქტის ან სივრცის ჩვენება"] },
      { id: "ugc", name: "გენერაციული UGC-ვიდეო", price: "100–200 ₾", cadence: "ერთ ვიდეოზე", note: "გენერირებული კონტენტ-შემქმნელი ბუნებრივი სტილით აჩვენებს ან იყენებს პროდუქტს", cta: "ვიდეოს განხილვა", values: ["გენერაციული UGC-ვიდეო", "100–200 ₾", "1 მზა ვიდეო", "1 ეტაპი", "პროდუქტის ჩვენება ან გამოყენება"] },
      { id: "avatar", name: "პერსონალური AI-ავატარი", price: "200 ₾-დან", cadence: "ერთ ვიდეოზე", note: "თქვენთვის შექმნილი მუდმივი სახე კადრში — კონტენტ-შემქმნელის სტილით", cta: "ვიდეოს განხილვა", values: ["პერსონალური AI-ავატარი", "200 ₾-დან", "1 მზა ვიდეო", "1 ეტაპი", "მუდმივი სახე კადრში"] },
      { id: "monthly", name: "ყოველთვიური პაკეტი", price: "შეთანხმებით", cadence: "თვეში", note: "განმეორებადი კონტენტის წარმოებისთვის; მოცულობა და ფასი ინდივიდუალურად განისაზღვრება", cta: "პაკეტის განხილვა", values: ["მორგებული თვიური პაკეტი", "შეთანხმებით", "შეთანხმებით", "შეთანხმებით", "განმეორებადი კონტენტის წარმოება"] },
    ],
  },
  {
    id: "aiweb",
    name: "aiWEB",
    label: "საიტები და ვებ-პროდუქტები",
    summary: "ვქმნით საიტს, ონლაინ-მაღაზიას ან თქვენს პროცესზე მორგებულ ვებ-პროდუქტს. გაშვების შემდეგ, საჭიროების შემთხვევაში, ტექნიკური მოვლაც შეგიძლიათ დაამატოთ.",
    accent: "#0ea5e9",
    icon: "solar:code-bold-duotone",
    url: "https://aiweb.ge",
    pricingModel: "mixed",
    pricingModelLabel: "ერთჯერადი შექმნა + სურვილის შემთხვევაში მოვლა",
    pricingModelDetail: "შექმნის საფასურს ერთხელ იხდით; ტექნიკურ მოვლას კი მხოლოდ საჭიროების შემთხვევაში ამატებთ.",
    priceLead: "2 000 ₾-დან ერთხელ",
    decisionPrompt: "როცა გჭირდებათ საიტი, რომელიც შეკვეთებს მიიღებს, ან თქვენს ბიზნესზე მორგებული ვებ-პროდუქტი.",
    visualAsset: "/graphics-3d/products/glass-v2/09-aiweb.png",
    visualAlt: "aiWEB-ის მინის ვებფანჯრის სიმბოლო",
    visualSignals: [
      { icon: "solar:code-bold-duotone", labels: { ka: "სიჩქარე", en: "Speed", ru: "Скорость" } },
      { icon: "solar:window-frame-bold-duotone", labels: { ka: "ნდობა", en: "Trust", ru: "Доверие" } },
      { icon: "solar:cart-large-bold-duotone", labels: { ka: "შეკვეთა", en: "Orders", ru: "Заказы" } },
    ],
    agentFacts: [
      { label: "შექმნის ფასი", value: "2 000 ₾-დან, პროექტის ტიპის მიხედვით", icon: "solar:wallet-money-bold-duotone" },
      { label: "ტექნიკური მოვლა", value: "250 ₾-დან თვეში", icon: "solar:tuning-3-bold-duotone" },
      { label: "შედეგი", value: "საიტი, მაღაზია ან მორგებული ვებ-პროდუქტი", icon: "solar:window-frame-bold-duotone" },
    ],
    sectionLabel: "საიტები და ვებ-პროდუქტები",
    billingLabel: "ერთჯერადი შექმნა; მოვლა სურვილისამებრ",
    scopeNotice: "Care-ის ტექნიკური მოვლა სურვილისამებრ ემატება: ბიზნესის საიტი 250 ₾-დან, ონლაინ მაღაზია 450 ₾-დან, ვებ-პლატფორმა 750 ₾-დან თვეში. საბოლოო მოცულობა და მესამე მხარის ხარჯები შეთავაზებაში ზუსტდება.",
    rowLabels: [
      { label: "პროექტი", icon: "solar:window-frame-bold-duotone" },
      { label: "შექმნის ფასი", icon: "solar:wallet-money-bold-duotone" },
      { label: "რას შეძლებს კლიენტი", icon: "solar:routing-2-bold-duotone" },
      { label: "ყოველთვიური მოვლა", icon: "solar:calendar-bold-duotone" },
      { label: "როდის გამოგადგებათ", icon: "solar:target-bold-duotone" },
    ],
    plans: [
      { id: "site", name: "ბიზნესის საიტი", price: "2 000 ₾-დან", cadence: "ერთხელ", note: "კლიენტებმა რომ გაიცნონ თქვენი სერვისები და დაგიკავშირდნენ", cta: "საიტის განხილვა", values: ["საიტი", "2 000 ₾-დან", "დაკავშირება და მოთხოვნის დატოვება", "250 ₾ / თვე", "მომსახურების ბიზნესი"] },
      { id: "shop", name: "ონლაინ მაღაზია", price: "4 000 ₾-დან", cadence: "ერთხელ", note: "კატალოგი, შეკვეთა და გადახდა ერთ ადგილზე", cta: "მაღაზიის განხილვა", values: ["მაღაზია", "4 000 ₾-დან", "კატალოგი და შეკვეთა", "450 ₾ / თვე", "ონლაინ ვაჭრობა"] },
      { id: "platform", name: "ვებ-პლატფორმა", price: "5 000 ₾-დან", cadence: "ერთხელ", note: "თუ სტანდარტული საიტი არ კმარა", cta: "პლატფორმის განხილვა", values: ["პლატფორმა", "5 000 ₾-დან", "მორგებული ფუნქციები", "750 ₾ / თვე", "თქვენი ბიზნესის კონკრეტული პროცესი"] },
    ],
  },
  {
    id: "aistaff",
    name: "aiSTAFF",
    label: "AI სპეციალისტების მოძიება",
    summary: "aiSTAFF გეხმარებათ თქვენი კომპანიისთვის AI-ში გამოცდილი სპეციალისტების მოძებნასა და შერჩევაში — ადამიანების, რომლებსაც AI ინსტრუმენტებთან მუშაობა და მათი ბიზნეს-პროცესებში გამოყენება შეუძლიათ.",
    accent: "#10b981",
    icon: "solar:users-group-rounded-bold-duotone",
    url: "https://aistaff.ge",
    pricingModel: "custom",
    pricingModelLabel: "ინდივიდუალური შეთავაზება",
    pricingModelDetail: "ჯერ ვაზუსტებთ როლს, საჭირო გამოცდილებასა და შერჩევის ფორმატს, შემდეგ კი ინდივიდუალურ შეთავაზებას ვამზადებთ.",
    priceLead: "შეთავაზება ინდივიდუალურად",
    decisionPrompt: "როცა კომპანიას AI ინსტრუმენტებში გამოცდილი სპეციალისტი სჭირდება.",
    visualAsset: "/graphics-3d/products/12-aistaff.png",
    visualAlt: "aiSTAFF-ის მინის გუნდის სიმბოლო",
    visualSignals: [
      { icon: "solar:users-group-rounded-bold-duotone", labels: { ka: "გუნდი", en: "Team", ru: "Команда" } },
      { icon: "solar:folder-with-files-bold-duotone", labels: { ka: "წესრიგი", en: "Order", ru: "Порядок" } },
      { icon: "solar:hand-shake-bold-duotone", labels: { ka: "როლი", en: "Role", ru: "Роль" } },
    ],
    agentFacts: [
      { label: "როგორ ყალიბდება ფასი", value: "ინდივიდუალური შეთავაზება", icon: "solar:wallet-money-bold-duotone" },
      { label: "რას ვაზუსტებთ", value: "როლს, AI გამოცდილებას და გუნდის საჭიროებას", icon: "solar:users-group-rounded-bold-duotone" },
      { label: "შედეგი", value: "თქვენი კომპანიისთვის შესაფერისი სპეციალისტი", icon: "solar:hand-shake-bold-duotone" },
    ],
    sectionLabel: "AI სპეციალისტები თქვენი კომპანიისთვის",
    billingLabel: "ინდივიდუალური შეთავაზება",
    scopeNotice: "ფასს საჯაროდ არ ვუთითებთ, რადგან ის პოზიციაზე, საჭირო AI გამოცდილებასა და შერჩევის მოცულობაზეა დამოკიდებული. პირობებს წინასწარ განვიხილავთ და წერილობით ვათანხმებთ.",
    rowLabels: [],
    plans: [],
  },
  {
    id: "iai",
    name: "iAI",
    label: "პროცესების გაერთიანება",
    summary: "აერთიანებს aiNOW-ის პროდუქტებს ერთ სისტემად, როცა მიმოწერა, ზარები, კონტენტი და სხვა სამუშაო სხვადასხვა ინსტრუმენტშია გაბნეული.",
    accent: "#7c3aed",
    icon: "solar:widget-5-bold-duotone",
    url: "https://iai.ge",
    pricingModel: "custom",
    pricingModelLabel: "საჯარო ფასი არ არის",
    pricingModelDetail: "iAI-ის ფასი საჯაროდ მითითებული არ არის. ჯერ ვარკვევთ, რომელი პროდუქტები გჭირდებათ და როგორ უნდა იმუშაოს მათმა ერთობლიობამ.",
    priceLead: "საჯარო ფასი არ არის",
    decisionPrompt: "როცა ერთი ამოცანისთვის რამდენიმე aiNOW პროდუქტი უნდა მუშაობდეს ერთად.",
    visualAsset: "/graphics-3d/products/glass-v2/18-iai-workspace.png",
    visualAlt: "iAI-ის მინის პროცესების გაერთიანების სიმბოლო",
    visualSignals: [
      { icon: "solar:widget-5-bold-duotone", labels: { ka: "სისტემა", en: "System", ru: "Система" } },
      { icon: "solar:routing-2-bold-duotone", labels: { ka: "პროცესი", en: "Process", ru: "Процесс" } },
      { icon: "solar:link-round-bold-duotone", labels: { ka: "კავშირი", en: "Connection", ru: "Связь" } },
    ],
    agentFacts: [
      { label: "როგორ ითვლება ფასი", value: "საჯარო ფასი არ არის მითითებული", icon: "solar:wallet-money-bold-duotone" },
      { label: "დაწყების წერტილი", value: "რა უნდა მოგვარდეს და რომელი პროდუქტებია საჭირო", icon: "solar:target-bold-duotone" },
      { label: "შედეგი", value: "ერთ სისტემაში გამართული პროდუქტები და პროცესები", icon: "solar:routing-2-bold-duotone" },
    ],
    sectionLabel: "პროცესების გაერთიანება",
    billingLabel: "საჯარო ფასი არ არის მითითებული",
    scopeNotice: "ფასი საჯაროდ მითითებული არ არის. ჯერ თქვენს საქმესა და საჭირო პროდუქტებზე ვისაუბრებთ.",
    rowLabels: [
      { label: "საიდან ვიწყებთ", icon: "solar:target-bold-duotone" },
      { label: "რა უნდა იმუშაოს ერთად", icon: "solar:routing-2-bold-duotone" },
      { label: "ჩართული პროდუქტები", icon: "solar:widget-5-bold-duotone" },
      { label: "როგორ იმართება", icon: "solar:tuning-3-bold-duotone" },
      { label: "ფასი", icon: "solar:wallet-money-bold-duotone" },
    ],
    plans: [
      { id: "one", name: "მოთხოვნიდან დავალებამდე", price: "საჯარო ფასი არ არის", cadence: "მორგებული", note: "განვიხილავთ, როგორ იქცეს შემოსული მოთხოვნა დავალებად და როგორ მივიდეს პასუხისმგებელ თანამშრომელთან.", cta: "ამოცანის განხილვა", values: ["მოთხოვნის დამუშავება", "ერთი პროცესი", "საჭირო პროდუქტები", "შეთანხმებული წესი", "საჯარო ფასი არ არის"] },
       { id: "connected", name: "პროდუქტების დაკავშირება", price: "საჯარო ფასი არ არის", cadence: "მორგებული", note: "მაგალითად, ჩატში მიღებულ ინფორმაციას ზარის მოსამზადებლად ვიყენებთ, შედეგი კი თქვენს სამუშაო სისტემაში ინახება.", cta: "კავშირის განხილვა", values: ["ჩატი, ზარი და სამუშაო სისტემა", "პროცესების გადაბმა", "საჭირო პროდუქტები", "ერთიანი წესები", "საჯარო ფასი არ არის"] },
      { id: "system", name: "გუნდის სამუშაო პროცესები", price: "საჯარო ფასი არ არის", cadence: "მორგებული", note: "ვადგენთ, ვინ იღებს დავალებას, სად მოწმდება შედეგი და რომელ ნაბიჯზეა აუცილებელი ადამიანის თანხმობა.", cta: "სისტემის განხილვა", values: ["დავალებები და კონტროლი", "პროცესების ერთ სისტემად გაერთიანება", "საჭირო პროდუქტები", "შეთანხმებული მართვის წესი", "საჯარო ფასი არ არის"] },
    ],
  },
  {
    id: "vibecoding",
    name: "vibeCODING",
    label: "AI-ით შექმნილი აპების უსაფრთხოებისა და გამოქვეყნებისთვის მზადყოფნის აუდიტი",
    summary: "ამოწმებს AI-ით შექმნილი აპის საჯარო ზედაპირს, აწყობს პრიორიტეტულ რისკების სიას და ადგენს შეთანხმებულ შეკეთებისა და ხელახალი შემოწმების გეგმას.",
    accent: "#ef4444",
    icon: "solar:bug-minimalistic-bold-duotone",
    url: "https://vibecoding.ge",
    pricingModel: "custom",
    pricingModelLabel: "ინდივიდუალური წერილობითი შეთავაზება",
    pricingModelDetail: "შემოწმების ფარგლები და ფასი წერილობით შეთავაზებაში ფიქსირდება; ჰაკერებისგან სრულ დაცვას ან შესაბამისობის გარანტიას არ ვაცხადებთ.",
    priceLead: "ფასი წერილობით თანხმდება",
    decisionPrompt: "როცა AI-ით შექმნილი აპის გამოქვეყნებამდე გჭირდებათ მტკიცებულებაზე დაფუძნებული შემოწმება.",
    visualAsset: "/graphics-3d/products/vibecoding-hero-scan-v1.png",
    visualAlt: "vibeCODING-ის საჯარო ზედაპირის სკანის ვიზუალი",
    visualSignals: [],
    agentFacts: [
      { label: "რას ამოწმებს", value: "ბრაუზერში ხილულ ნაწილს; სხვა შემოწმებას მხოლოდ შეთანხმებული ნებართვით ვატარებთ.", icon: "solar:monitor-camera-bold-duotone" },
      { label: "რას აბარებს", value: "გამოვლენილ რისკებს, მათ მტკიცებულებებსა და გამოსწორების გეგმას", icon: "solar:checklist-minimalistic-bold-duotone" },
      { label: "საზღვარი", value: "შემოწმება სრული დაცვის გარანტიასა და შესაბამისობის სერტიფიკატს არ ნიშნავს.", icon: "solar:shield-check-bold-duotone" },
    ],
    sectionLabel: "AI აპის აუდიტი",
    billingLabel: "შემოწმების მოცულობა",
    scopeNotice: "შემოწმების მოცულობასა და ფასს წერილობით ვათანხმებთ.",
    rowLabels: [
      { label: "საჯარო ზედაპირი", icon: "solar:monitor-camera-bold-duotone" },
      { label: "ავტორიზებული ფარგლები", icon: "solar:lock-keyhole-bold-duotone" },
      { label: "რისკების პრიორიტეტი", icon: "solar:sort-by-alphabet-bold-duotone" },
      { label: "შეკეთების გეგმა", icon: "solar:clipboard-check-bold-duotone" },
      { label: "ფასი", icon: "solar:wallet-money-bold-duotone" },
    ],
    plans: [
      { id: "scope", name: "აპის რისკების შემოწმება", price: "შეთანხმებით", cadence: "მორგებული", note: "შემოწმების მოცულობასა და ფასს წერილობით ვათანხმებთ.", cta: "აპის რისკების განხილვა", values: ["ბრაუზერული მტკიცებულება", "ავტორიზებული შემოწმება", "პრიორიტეტული რისკები", "შეკეთება და ხელახალი სკანი", "წერილობითი წინადადება"] },
    ],
  },
];
