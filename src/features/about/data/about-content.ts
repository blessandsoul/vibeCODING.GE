export type AboutLocale = 'ka' | 'en' | 'ru';
type ProductId = 'aichats' | 'aicall' | 'aiweb' | 'aicontent' | 'aiads' | 'aioffice' | 'aidocs' | 'aiapp' | 'vibecoding' | 'aitaxi' | 'aistaff' | 'aibrain';
type Product = { id: ProductId; label: string; name: string; description: string; href: string; color: string };
type PipelineStep = { id: ProductId; name: string; title: string; description: string; color: string };
type Value = { title: string; description: string };

export type AboutContent = {
  title: string;
  description: string;
  pipelineTitle: string;
  pipelineDescription: string;
  pipeline: readonly PipelineStep[];
  productsTitle: string;
  productsDescription: string;
  teamTitle: string;
  valuesTitle: string;
  products: readonly Product[];
  values: readonly Value[];
};

const BASE: Record<ProductId, { name: string; color: string; domain: string }> = {
  aichats: { name: 'aiCHATS', color: '#2563eb', domain: 'aichats.ge' },
  aicall: { name: 'aiCALL', color: '#f4511e', domain: 'aicall.ge' },
  aiweb: { name: 'aiWEB', color: '#0891b2', domain: 'aiweb.ge' },
  aicontent: { name: 'aiCONTENT', color: '#db2777', domain: 'aicontent.ge' },
  aiads: { name: 'aiADS', color: '#7c3aed', domain: 'aiads.ge' },
  aioffice: { name: 'aiOFFICE', color: '#0f766e', domain: 'aioffice.ge' },
  aidocs: { name: 'aiDOCS', color: '#b45309', domain: 'aidocs.ge' },
  aiapp: { name: 'aiAPP', color: '#2563eb', domain: 'aiapp.ge' },
  vibecoding: { name: 'vibeCODING', color: '#9333ea', domain: 'vibecoding.ge' },
  aitaxi: { name: 'aiTAXI', color: '#b58900', domain: 'aitaxi.ge' },
  aistaff: { name: 'aiSTAFF', color: '#0f766e', domain: 'aistaff.ge' },
  aibrain: { name: 'aiBRAIN', color: '#4f46e5', domain: 'aibrain.ge' },
};

const ORDER: readonly ProductId[] = ['aichats', 'aicall', 'aiweb', 'aicontent', 'aiads', 'aioffice', 'aidocs', 'aiapp', 'vibecoding', 'aitaxi', 'aistaff', 'aibrain'];

const PRODUCT_COPY: Record<AboutLocale, Record<ProductId, { label: string; description: string }>> = {
  ka: {
    aichats: { label: 'შეტყობინებები', description: 'კლიენტებს პასუხობს, საკონტაქტო ნომერს აგროვებს და საჭიროების შემთხვევაში საუბარში ადამიანს რთავს.' },
    aicall: { label: 'ზარები', description: 'ლიდს ურეკავს ან შემომავალ ზარს იღებს დამტკიცებული სცენარის მიხედვით და შედეგსაც აფიქსირებს.' },
    aiweb: { label: 'საიტი და შეკვეთა', description: 'საიტს, ონლაინ შეკვეთის პროცესს და ლიდების მისაღებ ფორმებს ქმნის ან აახლებს.' },
    aicontent: { label: 'კონტენტი', description: 'ერთი ბრიფიდან ვიდეოს, სურათს, კარუსელსა და ტექსტს ამზადებს და დასამტკიცებლად გაჩვენებთ.' },
    aiads: { label: 'რეკლამა', description: 'კამპანიას აწყობს და მართავს, გაჩვენებთ ბიუჯეტს, ლიდებსა და შემდეგ ნაბიჯს.' },
    aioffice: { label: 'ოფისის პროცესი', description: 'ყოველდღიურ საქმეს, სტატუსებსა და პასუხისმგებლობებს ერთ გასაგებ პროცესში აერთიანებს.' },
    aidocs: { label: 'დოკუმენტები', description: 'ფოტოს ან PDF-ს ამოწმებს და მისგან სააღრიცხვო ჩანაწერს ან დოკუმენტის მონახაზს ამზადებს.' },
    aiapp: { label: 'მობილური აპი', description: 'ბიზნესის იდეის iOS-ისა და Android-ის სამუშაო preview-ვერსიას ამზადებს.' },
    vibecoding: { label: 'კოდის შემოწმება', description: 'საჯარო აპში პოულობს რისკებს, ალაგებს პრიორიტეტებს და მარტივად ხსნის, რა უნდა გამოსწორდეს.' },
    aitaxi: { label: 'ტაქსის ოპერაცია', description: 'pre-launch პროდუქტი, სადაც ჩანს მანქანის დანიშვნა, მარშრუტი და მგზავრობის სტატუსი.' },
    aistaff: { label: 'სპეციალისტის შერჩევა', description: 'კონკრეტული სამუშაოსთვის AI-ში გამოცდილი ადამიანის მოძებნაში გეხმარებათ.' },
    aibrain: { label: 'ბიზნესის ცოდნა', description: 'კომპანიის წესებსა და პასუხებს ინახავს, რომ თანამშრომლებმა ერთსა და იმავე საკითხზე მენეჯერს ხელახლა აღარ მიმართონ.' },
  },
  en: {
    aichats: { label: 'Messages', description: 'Replies to customers, captures a phone number and hands a conversation to a person when needed.' },
    aicall: { label: 'Calls', description: 'Calls a lead or receives an inbound call with an approved script and records the result.' },
    aiweb: { label: 'Website and order', description: 'Builds or updates a website, online order flow and the forms that collect leads.' },
    aicontent: { label: 'Content', description: 'Turns one brief into video, visuals, carousels and copy before approval.' },
    aiads: { label: 'Advertising', description: 'Builds and manages a campaign; shows budget, leads and the next step.' },
    aioffice: { label: 'Office process', description: 'Brings recurring work, statuses and responsibility into one clear process.' },
    aidocs: { label: 'Documents', description: 'Checks a photo or PDF and prepares a reviewable accounting record or document draft.' },
    aiapp: { label: 'Mobile app', description: 'Turns a business idea into a working iOS and Android app preview.' },
    vibecoding: { label: 'Code review', description: 'Finds risks in a public app, ranks them and explains the needed fixes plainly.' },
    aitaxi: { label: 'Taxi operation', description: 'Pre-launch product: shows vehicle assignment, route and ride status.' },
    aistaff: { label: 'Specialist matching', description: 'Helps find an AI professional for a clearly defined piece of work.' },
    aibrain: { label: 'Business knowledge', description: 'Keeps company rules and answers so employees do not need to ask a manager the same question again.' },
  },
  ru: {
    aichats: { label: 'Сообщения', description: 'Отвечает клиентам, берёт номер и при необходимости передаёт диалог человеку.' },
    aicall: { label: 'Звонки', description: 'Звонит лиду или принимает входящий звонок по согласованному сценарию и фиксирует результат.' },
    aiweb: { label: 'Сайт и заказ', description: 'Создаёт или обновляет сайт, онлайн-заказ и формы, из которых приходят лиды.' },
    aicontent: { label: 'Контент', description: 'Из одного брифа готовит видео, визуалы, карусели и тексты до утверждения.' },
    aiads: { label: 'Реклама', description: 'Собирает и ведёт кампанию; показывает бюджет, лиды и следующий шаг.' },
    aioffice: { label: 'Офисный процесс', description: 'Объединяет регулярную работу, статусы и ответственность в одном понятном процессе.' },
    aidocs: { label: 'Документы', description: 'Проверяет фото или PDF и готовит проверяемую учётную запись или черновик документа.' },
    aiapp: { label: 'Мобильное приложение', description: 'Превращает идею бизнеса в рабочий preview приложения для iOS и Android.' },
    vibecoding: { label: 'Проверка кода', description: 'Находит риски в публичном приложении, расставляет приоритеты и понятно объясняет исправления.' },
    aitaxi: { label: 'Операция такси', description: 'Pre-launch продукт: показывает назначение автомобиля, маршрут и статус поездки.' },
    aistaff: { label: 'Подбор специалиста', description: 'Помогает найти AI-специалиста для чётко определённой работы.' },
    aibrain: { label: 'Знания бизнеса', description: 'Хранит правила и ответы компании, чтобы сотрудники не задавали менеджеру одни и те же вопросы.' },
  },
};

function productsFor(locale: AboutLocale): readonly Product[] {
  return ORDER.map((id) => ({ id, name: BASE[id].name, color: BASE[id].color, href: `https://${BASE[id].domain}/${locale}`, ...PRODUCT_COPY[locale][id] }));
}

function pipelineFor(locale: AboutLocale): readonly PipelineStep[] {
  const ids: readonly ProductId[] = ['aicontent', 'aiads', 'aichats', 'aicall', 'aiweb', 'aioffice', 'aidocs'];
  const titles: Record<AboutLocale, Record<ProductId, string>> = {
    ka: { aichats: 'შეტყობინება და ნომერი', aicall: 'ზარი და დადასტურება', aiweb: 'შეკვეთა საიტზე', aicontent: 'მასალა მზადდება', aiads: 'რეკლამა გადის', aioffice: 'შეკვეთა მუშავდება', aidocs: 'დოკუმენტი მზადაა', aiapp: '', vibecoding: '', aitaxi: '', aistaff: '', aibrain: '' },
    en: { aichats: 'Message and number', aicall: 'Call and confirmation', aiweb: 'Order on the site', aicontent: 'Content is prepared', aiads: 'Advertising launches', aioffice: 'Order is processed', aidocs: 'Document is ready', aiapp: '', vibecoding: '', aitaxi: '', aistaff: '', aibrain: '' },
    ru: { aichats: 'Сообщение и номер', aicall: 'Звонок и подтверждение', aiweb: 'Заказ на сайте', aicontent: 'Контент готовится', aiads: 'Реклама запускается', aioffice: 'Заказ обрабатывается', aidocs: 'Документ готов', aiapp: '', vibecoding: '', aitaxi: '', aistaff: '', aibrain: '' },
  };
  return ids.map((id) => ({ id, name: BASE[id].name, title: titles[locale][id], description: PRODUCT_COPY[locale][id].description, color: BASE[id].color }));
}

const CONTENT: Record<AboutLocale, AboutContent> = {
  ka: {
    title: 'aiNOW — კონსულტაცია, ტექნოლოგია და დანერგვა',
    description: 'ჯერ ვარკვევთ, როგორ მუშაობს თქვენი ბიზნესი და სად გამოგადგებათ AI. შემდეგ ვირჩევთ შესაბამის პროდუქტს ან ვქმნით ახალ სისტემას, ვნერგავთ და შეთანხმებული პირობებით მხარს ვუჭერთ.',
    pipelineTitle: 'ერთი კლიენტის გზა — პირველი კონტაქტიდან დოკუმენტამდე',
    pipelineDescription: 'ეს მხოლოდ ერთი შესაძლო გზაა: ჯერ ამოცანას ვარკვევთ, შემდეგ კი მხოლოდ საჭირო პროდუქტებს ვარჩევთ.',
    pipeline: pipelineFor('ka'),
    productsTitle: 'ყველა აქტიური პროდუქტი', productsDescription: 'ყველა პროდუქტი ერთ კონკრეტულ საქმეს ემსახურება.', teamTitle: 'ვინ მართავს aiNOW-ს', valuesTitle: 'როგორ ვმუშაობთ', products: productsFor('ka'),
    values: [
      { title: 'ერთი ამოცანით ვიწყებთ', description: 'ჯერ ვირჩევთ პროცესს, რომლის შეცვლაც რეალურად გსურთ.' },
      { title: 'კონტროლი თქვენთან რჩება', description: 'წესებს, წყაროებსა და დამტკიცების ეტაპებს წინასწარ ვათანხმებთ.' },
      { title: 'ფასი და ფარგლები წინასწარ ჩანს', description: 'შეკვეთამდე ვაზუსტებთ სამუშაოს მოცულობას, ვადებსა და აუცილებელ გარე ხარჯებს.' },
    ],
  },
  en: {
    title: 'aiNOW — consulting, technology and implementation',
    description: 'We first understand how your business works and where AI is useful. Then we choose the right product or build a custom system, integrate it and support it after launch.',
    pipelineTitle: 'One customer journey — from first content to document', pipelineDescription: 'This is one possible implementation. We define the business task first, then use only the products it actually needs.', pipeline: pipelineFor('en'),
    productsTitle: 'All active products', productsDescription: 'Each one has one clear responsibility.', teamTitle: 'Who runs aiNOW', valuesTitle: 'How we work', products: productsFor('en'),
    values: [
      { title: 'Start with one task', description: 'We first choose the process you actually want to change.' },
      { title: 'You keep control', description: 'Rules, sources and approval points are agreed before launch.' },
      { title: 'Scope is visible upfront', description: 'Before work starts, we confirm volume, timing and necessary external costs.' },
    ],
  },
  ru: {
    title: 'aiNOW — консалтинг, технологии и внедрение',
    description: 'Сначала разбираемся, как устроен ваш бизнес и где полезен AI. Затем выбираем готовый продукт или создаём отдельную систему, внедряем её и поддерживаем после запуска.',
    pipelineTitle: 'Путь одного клиента — от контента до документа', pipelineDescription: 'Это один из вариантов внедрения. Сначала определяем задачу бизнеса, затем подключаем только нужные продукты.', pipeline: pipelineFor('ru'),
    productsTitle: 'Все активные продукты', productsDescription: 'У каждого одна понятная зона ответственности.', teamTitle: 'Кто управляет aiNOW', valuesTitle: 'Как мы работаем', products: productsFor('ru'),
    values: [
      { title: 'Начинаем с одной задачи', description: 'Сначала выбираем процесс, который вы действительно хотите изменить.' },
      { title: 'Контроль остаётся у вас', description: 'Правила, источники и точки утверждения согласуются до запуска.' },
      { title: 'Объём и цена видны заранее', description: 'До начала работ уточняем объём, сроки и необходимые внешние расходы.' },
    ],
  },
};

export function getAboutContent(locale: string): AboutContent {
  return CONTENT[locale as AboutLocale] ?? CONTENT.en;
}
