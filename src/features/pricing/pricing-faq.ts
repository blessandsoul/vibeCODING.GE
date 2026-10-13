import { normalizePricingLocale, type PricingLocale, type PricingProductId } from "./pricing-copy";

export type PricingQuestion = { question: string; answer: string };

export type PricingCalculatorCopy = {
  title: string;
  description: string;
  packageLabel: string;
  inboundLabel: string;
  extraChannelLabel: string;
  outboundLabel: string;
  inboundRate: string;
  extraChannelRate: string;
  outboundRate: string;
  firstMonthLabel: string;
  subscriptionLabel: string;
  inboundCallsLabel: string;
  extraChannelsCallsLabel: string;
  outboundCallsLabel: string;
  setupOnceLabel: string;
  totalExampleLabel: string;
  disclaimer: string;
  minuteUnit: string;
};

export type PricingDisclosureCopy = {
  orderTitle: string;
  callTitle: string;
  callAriaLabel: string;
  callDisclaimer: string;
  callLink: string;
  contentTitle: string;
  contentBody: string;
  contentLink: string;
};

export type PricingDetailsCopy = {
  productQuestions: Record<PricingProductId, readonly PricingQuestion[]>;
  commonQuestions: readonly PricingQuestion[];
  calculator: PricingCalculatorCopy;
  disclosure: PricingDisclosureCopy;
};

const question = (questionText: string, answer: string): PricingQuestion => ({ question: questionText, answer });

const KA: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("კატალოგის ზომა და განახლება რას ნიშნავს?", "კატალოგის ზომა პროდუქტებისა და შეთავაზებების რაოდენობას ნიშნავს. განახლება ნიშნავს შეცვლილი ინფორმაციის ცოდნის ბაზაში შეტანას. საწყის პაკეტში კატალოგს ხელით მართავთ; ავტომატური სინქრონიზაცია კი „ზრდისა“ და „მასშტაბის“ პაკეტებშია ხელმისაწვდომი."),
      question("ჩატის ჩასართავად რა უნდა მოვამზადო?", "მოამზადეთ ფასები, პროდუქტების ან მომსახურების აღწერა, ხშირი კითხვები და პირობები. წინასწარ განვსაზღვრავთ იმასაც, რომელ საკითხებზე უპასუხებს ჩატი და როდის გადასცემს საუბარს თანამშრომელს."),
      question("რა ხდება, თუ პაკეტის მოცულობა აღარ გყოფნით?", "დამატებითი მოცულობის ან სხვა პაკეტზე გადასვლის პირობებს საბოლოო შეთავაზებაში დავაზუსტებთ. ცხრილში პაკეტის თვიური მოცულობაა ნაჩვენები; დამატებითი პასუხის ცალკე ფასი აქ არ არის მითითებული."),
    ],
    aicall: [
      question("შეუძლია AI-ს კლიენტებთან თავად დარეკოს?", "დიახ, მაგრამ მხოლოდ თქვენს მიერ დამტკიცებული კონკრეტული დავალებისთვის. მასობრივი კამპანიები, CSV-რიგები და ავტომატური განმეორებითი ზარები ჯერ მზადდება და აქტიურ ფუნქციებად არ ითვლება."),
      question("პაკეტის ფასს კიდევ რა ემატება?", "პირველ გამართვაზე ერთხელ იხდით 150 ₾-ს. ყველა პაკეტში შედის ერთი ერთდროული შემომავალი არხი და შემომავალ წუთებზე ცალკე სატელეფონო გადასახადი არ არის. დამატებითი არხი თვეში 60 ₾ ღირს, ხოლო დაკავშირებული გამავალი წუთი — 1,50 ₾. დამატებითი მოხმარება ავტომატურად არ დაირიცხება — ამისთვის თქვენი თანხმობაა საჭირო."),
      question("რა უნდა მოგაწოდოთ?", "დაგვჭირდება ზარის მიზანი, კითხვები და პასუხები, მოქმედი პირობები და თანამშრომელთან გადამისამართების წესი. სხვა პროგრამასთან დაკავშირებას წინასწარ ვამოწმებთ."),
    ],
    aicontent: [
      question("სამი ვიდეოფორმატი რით განსხვავდება?", "პროდუქტის ვიდეოში მთავარი პროდუქტი ან სივრცეა. გენერაციულ UGC-ვიდეოში გენერირებული კონტენტ-შემქმნელი პროდუქტს ბუნებრივ სტილში აჩვენებს. პერსონალურ AI-ავატარში კი თქვენთვის შექმნილი ავატარი ჩანს. გენერირებული UGC რეალური მომხმარებლის მიერ გადაღებული შეფასება არ არის."),
      question("ერთ ვიდეოში რა შედის?", "თითოეული ფორმატი ერთ მზა ვიდეოს მოიცავს. პროდუქტის პრომო-ვიდეოში მთავარი ობიექტია; UGC-ში გენერირებული კონტენტ-შემქმნელი პროდუქტს აჩვენებს ან იყენებს; ავატარის ვიდეოში კი ერთი მუდმივი სახე ჩანს. თითო ფორმატში ერთი შესწორების ეტაპია; რეალური გადაღება, მსახიობი და ინფლუენსერი არ შედის."),
      question("ერთი ვიდეოს ფასი რის მიხედვით იცვლება?", "ცხრილში საწყისი ფასებია ნაჩვენები. საბოლოო თანხა სცენაზე, ვიდეოს ხანგრძლივობასა და საჭირო გენერაციის მოცულობაზეა დამოკიდებული. დაწყებამდე იდეას, მასალებსა და შესწორებების მოცულობას შევათანხმებთ."),
      question("ყოველთვიური პაკეტიც არსებობს?", "დიახ. განმეორებადი კონტენტისთვის ყოველთვიურ პაკეტს ვათანხმებთ. სამუშაოს მოცულობა და ფასი ინდივიდუალურად განისაზღვრება და ხელშეკრულებაში იწერება; წინასწარ დადგენილი საჯარო თვიური ფასი არ გვაქვს."),
    ],
    aiweb: [
      question("შექმნისა და ყოველთვიური მოვლის ფასი ცალ-ცალკეა?", "დიახ. საიტის შექმნა ერთჯერადი სამუშაოა. ტექნიკურ მოვლას სურვილის შემთხვევაში ამატებთ და ის ყოველთვიურად იანგარიშება, ამიტომ ფასები ცალ-ცალკეა ნაჩვენები."),
      question("ახალი ფუნქციების დამატება მოვლაში შედის?", "მოვლა და ახალი ფუნქციის შექმნა სხვადასხვა სამუშაოა. საბოლოო შეთავაზებაში ცალ-ცალკე ჩაიწერება, რა შედის მხარდაჭერაში და რა ჩაითვლება ახალ სამუშაოდ."),
      question("პროექტის შესაფასებლად რა მოვამზადო?", "აღწერეთ თქვენი ბიზნესი და ის, რისი გაკეთება უნდა შეძლოს კლიენტმა საიტზე: დაგიკავშირდეთ, დაჯავშნოს, შეუკვეთოს თუ გადაიხადოს. თუ გაქვთ, გამოგვიგზავნეთ არსებული საიტი და სასურველი მაგალითები."),
    ],
    aistaff: [
      question("aiSTAFF ახალი თანამშრომლების მოძიება და შერჩევაა?", "დიახ. aiSTAFF გეხმარებათ თქვენი კომპანიისთვის AI-ში გამოცდილი ადამიანების მოძიებასა და შერჩევაში — ისეთი სპეციალისტების, რომლებიც AI ინსტრუმენტებთან მუშაობენ და მათ ბიზნეს-პროცესებში იყენებენ."),
      question("როგორ განისაზღვრება aiSTAFF-ის ფასი?", "ფიქსირებული საჯარო ფასი და სტანდარტული პაკეტები არ გვაქვს. შეთავაზება დამოკიდებულია როლზე, საჭირო AI გამოცდილებასა და შერჩევის მოცულობაზე. პირობებს ჯერ განვიხილავთ, შემდეგ კი ინდივიდუალურ შეთავაზებას ვამზადებთ."),
    ],
    iai: [
      question("როდის გჭირდებათ iAI და არა მხოლოდ ერთი პროდუქტი?", "როცა საქმე ერთ ინსტრუმენტში ვერ სრულდება. მაგალითად, მოთხოვნა დავალებად უნდა გადაიქცეს და შედეგი სხვა სისტემაში გადავიდეს. ასეთ დროს მთელ პროცესს განვიხილავთ და არა მხოლოდ ჩატს ან ზარს."),
      question("რითი დავიწყოთ?", "მოგვიყევით, რა ხდება კლიენტის მოთხოვნის მიღების შემდეგ: ვინ რას აკეთებს და რომელ პროგრამებს იყენებთ. ერთად ვნახავთ, რა უნდა დავაკავშიროთ და როდის უნდა ჩაერთოს თანამშრომელი."),
    ],
  },
  commonQuestions: [
    question("როდის შემიძლია დაწყება?", "ვადა არჩეულ პროდუქტზე, საჭირო მასალებსა და სხვა სისტემებთან კავშირზეა დამოკიდებული. დაწყებამდე შევათანხმებთ სამუშაოს მოცულობასა და ვადას."),
    question("გაშვების შემდეგ დახმარებისთვის ან ცვლილებისთვის ვის მივმართო?", "მხარდაჭერის მოცულობა პროდუქტსა და პაკეტზეა დამოკიდებული. დაწყებამდე ვაზუსტებთ საკონტაქტო პირს, ცვლილებების წესსა და მომსახურების პირობებს. AI-ის მუშაობა თავისთავად არ ნიშნავს სადღეღამისო ადამიანურ მხარდაჭერას."),
    question("ფასში დღგ შედის?", "ამ გვერდზე დღგ-ის ჩათვლის პირობა მითითებული არ არის. გადახდამდე მოითხოვეთ საბოლოო შეთავაზება, სადაც გადასახადები და სრული გადასახდელი თანხა ცალსახად იქნება ნაჩვენები."),
  ],
  calculator: {
    title: "გამოთვალეთ ზარის სავარაუდო ხარჯი",
    description: "პაკეტში ერთი შემომავალი არხი შედის. მიუთითეთ დაკავშირებული გამავალი ზარების სავარაუდო ხანგრძლივობა.",
    packageLabel: "პაკეტი",
    inboundLabel: "შემომავალი არხი",
    extraChannelLabel: "დამატებითი შემომავალი არხები",
    outboundLabel: "დაკავშირებული გამავალი წუთები",
    inboundRate: "პაკეტში შედის 1 ერთდროული არხი; შემომავალ წუთებზე ცალკე გადასახადი არ არის",
    extraChannelRate: "60 ₾ / არხი / თვე",
    outboundRate: "1,50 ₾ / დაკავშირებული წუთი",
    firstMonthLabel: "პირველი თვე: გამართვა +150 ₾",
    subscriptionLabel: "პაკეტი",
    inboundCallsLabel: "შემომავალი ზარები",
    extraChannelsCallsLabel: "დამატებითი არხები",
    outboundCallsLabel: "გამავალი ზარები",
    setupOnceLabel: "ერთჯერადი გამართვა",
    totalExampleLabel: "მაგალითის ჯამი",
    disclaimer: "ეს გამოთვლა აქ მითითებულ ტარიფებს ეფუძნება და საბოლოო შეთავაზება არ არის; დღგ-ის პირობა ცალკე უნდა დაზუსტდეს.",
    minuteUnit: "წთ",
  },
  disclosure: {
    orderTitle: "შეკვეთამდე გაითვალისწინეთ",
    callTitle: "მოუსმინეთ aiCALL-ის ზარის დემოს",
    callAriaLabel: "aiCALL-ის ზარის დემო-ფრაგმენტი",
    callDisclaimer: "ეს დემო ჩანაწერია და არა რეალური კლიენტის ზარი.",
    callLink: "სრული მაგალითი aiCALL-ზე",
    contentTitle: "ნახეთ ვიდეოს ფორმატები",
    contentBody: "aiCONTENT-ზე სამი ფორმატია: პროდუქტის პრომო-ვიდეო, გენერაციული UGC-ვიდეო და პერსონალური AI-ავატარი. თითოეული ფორმატის ფასი ერთ ვიდეოზეა გათვლილი. განმეორებადი კონტენტისთვის ყოველთვიური პაკეტიც შეგვიძლია შევათანხმოთ — მისი მოცულობა და ფასი ინდივიდუალურად, ხელშეკრულებით განისაზღვრება. თითო ფორმატში ერთი შესწორების ეტაპი შედის. რეალური გადაღება, მსახიობი და ინფლუენსერი არ შედის.",
    contentLink: "aiCONTENT-ზე ნახეთ მოქმედი მაგალითები და პირობები",
  },
};

const EN: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("What do catalogue size and updates mean?", "Catalogue size is the number of products or offers. An update means processing changed information in the knowledge base. The starter level is managed manually; automatic sync is available in Growth and Scale."),
      question("What should I prepare for the chat?", "Prepare prices, product or service descriptions, common questions, and terms. We also define what the chat answers and when it hands the conversation to your team."),
      question("What if the plan is no longer enough?", "The final offer must define extra capacity or a move to another plan. The table shows the monthly capacity; no separate price for extra replies is listed here."),
    ],
    aicall: [
      question("Can AI call customers by itself?", "Yes, but only for an individual task you approve. Mass campaigns, CSV queues, and automatic repeat calls are still being prepared and are not active features."),
      question("What is added to the plan price?", "Setup is 150 ₾ once. Every plan includes one simultaneous inbound channel with no separate per-minute phone charge for inbound calls. Each extra channel is 60 ₾ per month, and connected outbound minutes cost 1.50 ₾ each. Extra usage is not charged automatically; your approval is required."),
      question("What do you need from me?", "We need the call goal, questions and answers, current terms, and the handoff rule. We check compatibility before connecting another system."),
    ],
    aicontent: [
      question("How do the three video formats differ?", "The product video keeps the product or space central. Generative UGC uses a generated creator in a natural style. A personal AI avatar puts your created avatar on screen. Generative UGC is not a filmed testimonial from a real customer."),
      question("What is included in one video?", "Each format includes one finished video. The product promo focuses on the object, UGC shows a generated creator holding or using it, and the avatar keeps a consistent face on screen. One revision round is included per format; real filming, an actor, and an influencer are not included."),
      question("What changes the price of one video?", "The table shows starting prices. The final amount depends on the scene, video length, and generation work required. We agree on the idea, materials, and revision scope before work starts."),
      question("Is a monthly package available?", "Yes. Recurring content can be arranged as a monthly package. Its scope and price are set individually in a contract; there is no fixed public monthly price."),
    ],
    aiweb: [
      question("Are the build and monthly care billed separately?", "Yes. Building the site is a one-time project. Optional technical care is billed monthly, so the build and care prices are shown separately."),
      question("Does care include new features?", "Care and building a new feature are different work. The offer must state what support includes and what counts as new work."),
      question("What should I prepare for an estimate?", "Describe your business and what customers should do on the site: contact you, book, order, or pay. Share an existing site and examples if available."),
    ],
    aistaff: [
      question("Is aiSTAFF for recruiting new employees?", "Yes. aiSTAFF helps you find and select people with AI experience for your company—specialists who can work with AI tools and use them in business processes."),
      question("How is the aiSTAFF price determined?", "There is no fixed public price or standard package. The offer depends on the role, required AI experience, and recruitment scope. We discuss the terms first, then prepare an individual offer."),
    ],
    iai: [
      question("When do I need iAI instead of one product?", "When the work does not end in one tool—for example, a request must become a task and then move into another system. iAI looks at the whole process, not only a chat or call."),
      question("Where should we start?", "Start with one real workflow: where a request comes from, which steps it passes through, and what result you need. Then we define products, connections, and human checkpoints."),
    ],
  },
  commonQuestions: [
    question("When can I start?", "Timing depends on the product, required materials, and connections to other systems. We agree the scope and schedule before work starts."),
    question("Who do I contact after launch for help or changes?", "Support depends on the product and plan. Before starting, we agree the contact person, change process, and service terms. AI operation alone does not mean 24/7 human support."),
    question("Is VAT included in the price?", "This page does not state the VAT treatment. Ask for a final offer before payment with taxes and the total payable amount shown clearly."),
  ],
  calculator: {
    title: "Estimate your call cost",
    description: "One inbound channel is already included in the plan; enter the expected duration of connected outbound calls.",
    packageLabel: "Plan",
    inboundLabel: "Included inbound channel",
    extraChannelLabel: "Extra inbound channels",
    outboundLabel: "Connected outbound minutes",
    inboundRate: "1 simultaneous channel included; no separate per-minute inbound phone charge",
    extraChannelRate: "60 ₾ / channel / month",
    outboundRate: "1.50 ₾ / connected minute",
    firstMonthLabel: "First month: setup +150 ₾",
    subscriptionLabel: "Plan",
    inboundCallsLabel: "Incoming calls",
    extraChannelsCallsLabel: "Extra channels",
    outboundCallsLabel: "Outbound calls",
    setupOnceLabel: "One-time setup",
    totalExampleLabel: "Example total",
    disclaimer: "This estimate uses the rates shown here. It is not a final offer; VAT treatment must be confirmed separately.",
    minuteUnit: "min",
  },
  disclosure: {
    orderTitle: "Before you order",
    callTitle: "Listen to a call demo",
    callAriaLabel: "aiCALL call demonstration",
    callDisclaimer: "This is a demonstration recording, not a real customer call.",
    callLink: "Full example on aiCALL",
    contentTitle: "See the video formats",
    contentBody: "aiCONTENT offers three formats: product promo, generative UGC, and personal AI avatar. Each public price is per video. Recurring content can be arranged monthly; scope and price are set individually in a contract. One revision round is included per format. Real filming, an actor, and an influencer are not included.",
    contentLink: "See current examples and terms on aiCONTENT",
  },
};

const RU: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("Что означают объём каталога и его обновление?", "Объём каталога — это количество товаров или предложений. Обновление означает обработку изменившейся информации в базе знаний. В стартовом уровне каталог ведётся вручную; автоматическая синхронизация доступна в Growth и Scale."),
      question("Что подготовить для запуска чата?", "Подготовьте цены, описания товаров или услуг, частые вопросы и условия. Также определим, на что отвечает чат и когда передаёт разговор команде."),
      question("Что делать, если пакета уже не хватает?", "Дополнительный объём или переход на другой пакет фиксируются в итоговом предложении. В таблице указана месячная ёмкость; отдельная цена дополнительного ответа здесь не указана."),
    ],
    aicall: [
      question("Может ли AI сам звонить клиентам?", "Да, но только по индивидуальной задаче, которую вы утвердили. Массовые кампании, CSV-очереди и автоматические повторные звонки ещё готовятся и не считаются активными функциями."),
      question("Что добавляется к цене пакета?", "Настройка оплачивается один раз — 150 ₾. В каждый пакет входит один одновременный входящий канал, отдельной поминутной платы за входящие нет. Дополнительный канал стоит 60 ₾ в месяц, соединённая исходящая минута — 1,50 ₾. Дополнительное использование не списывается автоматически — нужно ваше согласие."),
      question("Что понадобится от меня?", "Нужны цель звонка, вопросы и ответы, действующие условия и правило передачи сотруднику. Совместимость с другой системой проверяем заранее."),
    ],
    aicontent: [
      question("Чем отличаются три видеоформата?", "В продуктном видео главным остаётся товар или пространство. В генеративном UGC продукт показывает созданный creator в естественной манере. В персональном AI-аватаре на экране появляется созданный для вас аватар. Генеративный UGC не является отзывом, снятым реальным клиентом."),
      question("Что входит в одно видео?", "Каждый формат включает один готовый ролик. В промо главным является объект, в UGC созданный creator держит или использует продукт, а в аватаре сохраняется постоянное лицо. На каждый формат включён один раунд правок; настоящая съёмка, актёр и инфлюенсер не входят."),
      question("От чего меняется цена одного видео?", "В таблице указаны стартовые цены. Итог зависит от сцены, длительности и объёма генерации. До начала согласуем идею, материалы и объём правок."),
      question("Есть ли ежемесячный пакет?", "Да. Повторяющийся контент можно оформить ежемесячным пакетом. Объём и цена индивидуально фиксируются в договоре; фиксированной публичной месячной цены нет."),
    ],
    aiweb: [
      question("Разработка и ежемесячная поддержка считаются отдельно?", "Да. Создание сайта — разовый проект. Опциональная техническая поддержка оплачивается ежемесячно, поэтому цены показаны раздельно."),
      question("В поддержку входят новые функции?", "Поддержка и разработка новой функции — разные работы. В предложении отдельно указывается, что входит в поддержку и что считается новой задачей."),
      question("Что подготовить для оценки проекта?", "Опишите бизнес и действия клиента на сайте: связаться, забронировать, заказать или оплатить. Если есть, пришлите существующий сайт и примеры."),
    ],
    aistaff: [
      question("aiSTAFF — это поиск и подбор новых сотрудников?", "Да. aiSTAFF помогает найти и отобрать для вашей компании людей с опытом работы с AI — специалистов, которые умеют работать с AI-инструментами и применять их в бизнес-процессах."),
      question("Как определяется цена aiSTAFF?", "Фиксированной публичной цены и стандартных пакетов нет. Предложение зависит от роли, нужного опыта в AI и объёма подбора. Сначала обсуждаем условия, затем готовим индивидуальное предложение."),
    ],
    iai: [
      question("Когда нужен iAI, а не один продукт?", "Когда работа не заканчивается в одном инструменте: например, запрос нужно превратить в задачу и передать в другую систему. iAI рассматривает весь процесс, а не только чат или звонок."),
      question("С чего начать обсуждение?", "Начните с одного рабочего примера: откуда приходит запрос, какие шаги проходит и какой результат нужен. Затем определим продукты, связи и точки участия человека."),
    ],
  },
  commonQuestions: [
    question("Когда можно начать?", "Срок зависит от продукта, необходимых материалов и связей с другими системами. До начала согласуем объём и график."),
    question("К кому обращаться после запуска за помощью или изменениями?", "Поддержка зависит от продукта и пакета. До начала согласуем контактное лицо, порядок изменений и условия сервиса. Работа AI сама по себе не означает круглосуточную поддержку человека."),
    question("Входит ли НДС в цену?", "На этой странице условие по НДС не указано. До оплаты запросите итоговое предложение с налогами и полной суммой к оплате."),
  ],
  calculator: {
    title: "Рассчитайте примерную стоимость звонков",
    description: "Один одновременный входящий канал уже входит в пакет; укажите примерную длительность соединённых исходящих звонков.",
    packageLabel: "Пакет",
    inboundLabel: "Включённый входящий канал",
    extraChannelLabel: "Дополнительные входящие каналы",
    outboundLabel: "Соединённые исходящие минуты",
    inboundRate: "1 одновременный канал включён; отдельной поминутной платы за входящие нет",
    extraChannelRate: "60 ₾ / канал / месяц",
    outboundRate: "1,50 ₾ / соединённая минута",
    firstMonthLabel: "Первый месяц: настройка +150 ₾",
    subscriptionLabel: "Пакет",
    inboundCallsLabel: "Входящие звонки",
    extraChannelsCallsLabel: "Дополнительные каналы",
    outboundCallsLabel: "Исходящие звонки",
    setupOnceLabel: "Разовая настройка",
    totalExampleLabel: "Итого в примере",
    disclaimer: "Расчёт использует тарифы, указанные здесь. Это не итоговое предложение; условие по НДС нужно уточнить отдельно.",
    minuteUnit: "мин",
  },
  disclosure: {
    orderTitle: "Что учесть до заказа",
    callTitle: "Послушайте демо звонка",
    callAriaLabel: "Демонстрационный фрагмент звонка aiCALL",
    callDisclaimer: "Это демонстрационная запись, а не реальный звонок клиента.",
    callLink: "Полный пример на aiCALL",
    contentTitle: "Посмотрите форматы видео",
    contentBody: "aiCONTENT предлагает три формата: промо продукта, генеративный UGC и персональный AI-аватар. Каждая публичная цена указана за видео. Повторяющийся контент можно оформить ежемесячно; объём и цена индивидуально фиксируются в договоре. На каждый формат включён один раунд правок. Настоящая съёмка, актёр и инфлюенсер не входят.",
    contentLink: "Актуальные примеры и условия на aiCONTENT",
  },
};

const DE: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("Was bedeuten Kataloggröße und Aktualisierungen?", "Die Kataloggröße ist die Zahl der Produkte oder Angebote. Eine Aktualisierung verarbeitet geänderte Informationen in der Wissensbasis. Im Starter-Paket wird der Katalog manuell gepflegt; automatische Synchronisierung gibt es bei Growth und Scale."),
      question("Was muss ich für den Chat vorbereiten?", "Bereiten Sie Preise, Produkt- oder Leistungsbeschreibungen, häufige Fragen und Bedingungen vor. Wir legen außerdem fest, was der Chat beantwortet und wann er an Ihr Team übergibt."),
      question("Was, wenn das Paket nicht mehr reicht?", "Zusätzliche Kapazität oder ein Paketwechsel werden im finalen Angebot festgelegt. Die Tabelle zeigt die Monatskapazität; ein separater Preis pro zusätzlicher Antwort ist hier nicht angegeben."),
    ],
    aicall: [
      question("Kann die AI Kunden selbst anrufen?", "Ja, aber nur für eine von Ihnen freigegebene individuelle Aufgabe. Massenkampagnen, CSV-Warteschlangen und automatische Wiederholungsanrufe werden noch vorbereitet und sind keine aktiven Funktionen."),
      question("Was kommt zum Paketpreis hinzu?", "Die Einrichtung kostet einmalig 150 ₾. Jedes Paket enthält einen gleichzeitigen eingehenden Kanal ohne separate Telefongebühr pro eingehender Minute. Ein zusätzlicher Kanal kostet 60 ₾ pro Monat, eine verbundene ausgehende Minute 1,50 ₾. Zusätzliche Nutzung wird nicht automatisch abgerechnet; Ihre Zustimmung ist nötig."),
      question("Was brauchen Sie von mir?", "Wir brauchen Ziel, Fragen und Antworten des Anrufs, aktuelle Bedingungen und die Übergaberegel. Die Kompatibilität mit anderen Systemen prüfen wir vorher."),
    ],
    aicontent: [
      question("Wie unterscheiden sich die drei Videoformate?", "Beim Produktvideo stehen Produkt oder Raum im Mittelpunkt. Beim generativen UGC zeigt ein generierter Creator das Produkt natürlich. Beim persönlichen AI-Avatar ist Ihr erstellter Avatar zu sehen. Generatives UGC ist kein gefilmtes Kundenzeugnis."),
      question("Was ist in einem Video enthalten?", "Jedes Format enthält ein fertiges Video. Der Promo-Film zeigt das Objekt, UGC zeigt einen generierten Creator damit, und der Avatar bleibt als konstantes Gesicht im Bild. Pro Format ist eine Korrekturrunde enthalten; echte Drehs, Schauspieler und Influencer sind nicht enthalten."),
      question("Wovon hängt der Preis eines Videos ab?", "Die Tabelle zeigt Startpreise. Der Endbetrag hängt von Szene, Länge und nötiger Generierung ab. Idee, Materialien und Korrekturumfang werden vor Beginn vereinbart."),
      question("Gibt es ein Monatsangebot?", "Ja. Wiederkehrender Content kann monatlich vereinbart werden. Umfang und Preis werden individuell im Vertrag festgelegt; es gibt keinen festen öffentlichen Monatspreis."),
    ],
    aiweb: [
      question("Werden Erstellung und monatliche Betreuung getrennt berechnet?", "Ja. Die Website-Erstellung ist ein einmaliges Projekt. Optionale technische Betreuung wird monatlich berechnet, daher sind beide Preise getrennt aufgeführt."),
      question("Enthält die Betreuung neue Funktionen?", "Betreuung und die Entwicklung einer neuen Funktion sind unterschiedliche Leistungen. Im Angebot wird getrennt beschrieben, was Betreuung und was neue Arbeit ist."),
      question("Was soll ich für eine Einschätzung vorbereiten?", "Beschreiben Sie Ihr Geschäft und was Kunden auf der Website tun sollen: Kontakt aufnehmen, buchen, bestellen oder bezahlen. Teilen Sie vorhandene Websites und Beispiele, falls vorhanden."),
    ],
    aistaff: [
      question("Geht es bei aiSTAFF um die Suche nach neuen Mitarbeitern?", "Ja. aiSTAFF hilft Ihnen, Menschen mit AI-Erfahrung für Ihr Unternehmen zu finden und auszuwählen – Fachkräfte, die mit AI-Tools arbeiten und sie in Geschäftsprozessen einsetzen können."),
      question("Wie wird der Preis für aiSTAFF bestimmt?", "Es gibt keinen festen öffentlichen Preis und keine Standardpakete. Das Angebot hängt von der Rolle, der erforderlichen AI-Erfahrung und dem Umfang der Auswahl ab. Wir besprechen die Bedingungen zuerst und erstellen ein individuelles Angebot."),
    ],
    iai: [
      question("Wann brauche ich iAI statt nur eines Produkts?", "Wenn die Arbeit nicht in einem Tool endet – etwa wenn eine Anfrage zu einer Aufgabe und anschließend in ein anderes System wird. iAI betrachtet den gesamten Prozess, nicht nur Chat oder Anruf."),
      question("Womit beginnen wir?", "Beginnen Sie mit einem echten Ablauf: Woher kommt die Anfrage, welche Schritte durchläuft sie und welches Ergebnis brauchen Sie? Danach definieren wir Produkte, Verbindungen und menschliche Prüfpunkte."),
    ],
  },
  commonQuestions: [
    question("Wann kann ich starten?", "Der Zeitplan hängt vom Produkt, den nötigen Materialien und Verbindungen zu anderen Systemen ab. Umfang und Termin werden vor Beginn vereinbart."),
    question("An wen wende ich mich nach dem Start bei Hilfe oder Änderungen?", "Die Betreuung hängt von Produkt und Paket ab. Vor Beginn vereinbaren wir Kontaktperson, Änderungsprozess und Servicebedingungen. AI-Betrieb bedeutet nicht automatisch menschlichen Support rund um die Uhr."),
    question("Ist die Mehrwertsteuer im Preis enthalten?", "Diese Seite nennt keine Mehrwertsteuerregel. Fordern Sie vor der Zahlung ein finales Angebot mit Steuern und dem vollständigen Zahlbetrag an."),
  ],
  calculator: {
    title: "Geschätzte Anrufkosten berechnen",
    description: "Ein gleichzeitiger eingehender Kanal ist bereits enthalten; geben Sie die erwartete Dauer verbundener ausgehender Anrufe ein.",
    packageLabel: "Paket",
    inboundLabel: "Enthaltener eingehender Kanal",
    extraChannelLabel: "Zusätzliche eingehende Kanäle",
    outboundLabel: "Verbundene ausgehende Minuten",
    inboundRate: "1 gleichzeitiger Kanal enthalten; keine separate Telefongebühr pro eingehender Minute",
    extraChannelRate: "60 ₾ / Kanal / Monat",
    outboundRate: "1,50 ₾ / verbundene Minute",
    firstMonthLabel: "Erster Monat: Einrichtung +150 ₾",
    subscriptionLabel: "Paket",
    inboundCallsLabel: "Eingehende Anrufe",
    extraChannelsCallsLabel: "Zusätzliche Kanäle",
    outboundCallsLabel: "Ausgehende Anrufe",
    setupOnceLabel: "Einrichtung einmalig",
    totalExampleLabel: "Beispielsumme",
    disclaimer: "Die Schätzung verwendet die hier genannten Tarife. Sie ist kein finales Angebot; die Mehrwertsteuer muss separat bestätigt werden.",
    minuteUnit: "Min.",
  },
  disclosure: {
    orderTitle: "Vor der Bestellung",
    callTitle: "Anruf-Demo anhören",
    callAriaLabel: "Demonstrationsausschnitt eines aiCALL-Anrufs",
    callDisclaimer: "Dies ist eine Demoaufnahme, kein echter Kundenanruf.",
    callLink: "Vollständiges Beispiel auf aiCALL",
    contentTitle: "Videoformate ansehen",
    contentBody: "aiCONTENT bietet drei Formate: Produkt-Promo, generatives UGC und persönlichen AI-Avatar. Jeder öffentliche Preis gilt pro Video. Wiederkehrender Content kann monatlich vereinbart werden; Umfang und Preis werden individuell im Vertrag festgelegt. Pro Format ist eine Korrekturrunde enthalten. Echte Drehs, Schauspieler und Influencer sind nicht enthalten.",
    contentLink: "Aktuelle Beispiele und Bedingungen auf aiCONTENT",
  },
};

const TR: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("Katalog kapasitesi ve güncellemeler ne demek?", "Katalog kapasitesi, ürün veya teklif sayısıdır. Güncelleme, değişen bilgilerin bilgi tabanında işlenmesidir. Başlangıç seviyesinde katalog manuel yönetilir; otomatik senkronizasyon Growth ve Scale paketlerinde bulunur."),
      question("Sohbet için ne hazırlamalıyım?", "Fiyatları, ürün veya hizmet açıklamalarını, sık sorulan soruları ve koşulları hazırlayın. Sohbetin neyi yanıtlayacağını ve ne zaman ekibinize aktaracağını da belirleriz."),
      question("Paket artık yetmezse ne olur?", "Ek kapasite veya başka pakete geçiş nihai teklifte belirlenir. Tabloda aylık kapasite gösterilir; ek yanıt için ayrı bir fiyat burada yer almaz."),
    ],
    aicall: [
      question("AI müşterileri kendi başına arayabilir mi?", "Evet, ancak yalnızca onayladığınız bireysel görev için. Toplu kampanyalar, CSV kuyrukları ve otomatik tekrar aramaları hazırlanıyor; aktif özellik değiller."),
      question("Paket fiyatına ne eklenir?", "Kurulum bir kez 150 ₾'dir. Her pakete bir eşzamanlı gelen kanal dahildir ve gelen dakikalar için ayrı dakika telefon ücreti yoktur. Ek kanal ayda 60 ₾, bağlı giden dakika 1,50 ₾'dir. Ek kullanım otomatik olarak ücretlendirilmez, onayınız gerekir."),
      question("Siz benden neye ihtiyaç duyarsınız?", "Arama amacı, soru ve yanıtlar, güncel koşullar ve çalışana aktarma kuralı gerekir. Başka bir sistemle bağlantıyı önceden kontrol ederiz."),
    ],
    aicontent: [
      question("Üç video formatı nasıl farklı?", "Ürün videosunda ürün veya mekân merkezde olur. Üretken UGC'de ürünü doğal tarzda üretilmiş bir creator gösterir. Kişisel AI avatarında sizin için oluşturulan avatar görünür. Üretken UGC, gerçek müşterinin çektiği bir yorum değildir."),
      question("Bir videoya neler dahil?", "Her format bir bitmiş video içerir. Promo nesneyi gösterir, UGC'de üretilmiş creator ürünü tutar veya kullanır, avatar formatında sabit bir yüz görünür. Format başına bir revizyon turu dahildir; gerçek çekim, oyuncu ve influencer dahil değildir."),
      question("Tek videonun fiyatı neye göre değişir?", "Tabloda başlangıç fiyatları vardır. Son tutar sahneye, video uzunluğuna ve gereken üretime bağlıdır. İş başlamadan önce fikir, materyal ve revizyon kapsamını kararlaştırırız."),
      question("Aylık paket var mı?", "Evet. Tekrarlayan içerik aylık paket olarak düzenlenebilir. Kapsam ve fiyat sözleşmede ayrı ayrı belirlenir; sabit bir herkese açık aylık fiyat yoktur."),
    ],
    aiweb: [
      question("Geliştirme ve aylık bakım ayrı mı ücretlendirilir?", "Evet. Site geliştirme tek seferlik projedir. İsteğe bağlı teknik bakım aylık ücretlendirilir; bu nedenle fiyatlar ayrı gösterilir."),
      question("Bakım yeni özellikleri de kapsar mı?", "Bakım ile yeni özellik geliştirmek farklı işlerdir. Teklifte desteğin kapsamı ve yeni iş olarak sayılanlar ayrı yazılır."),
      question("Değerlendirme için ne hazırlamalıyım?", "İşletmenizi ve müşterilerin sitede ne yapacağını anlatın: iletişim, rezervasyon, sipariş veya ödeme. Varsa mevcut siteyi ve örnekleri paylaşın."),
    ],
    aistaff: [
      question("aiSTAFF yeni çalışan bulma hizmeti mi?", "Evet. aiSTAFF, şirketiniz için yapay zekâ konusunda deneyimli insanları bulup seçmenize yardımcı olur — AI araçlarıyla çalışabilen ve bunları iş süreçlerinde kullanabilen uzmanlar."),
      question("aiSTAFF fiyatı nasıl belirlenir?", "Sabit bir kamuya açık fiyat veya standart paket yoktur. Teklif; role, gereken AI deneyimine ve işe alım kapsamına göre değişir. Koşulları önce görüşür, ardından size özel bir teklif hazırlarız."),
    ],
    iai: [
      question("Tek ürün yerine ne zaman iAI gerekir?", "İş tek araçta bitmediğinde; örneğin bir talep göreve dönüşüp başka sisteme aktarılacaksa. iAI yalnızca sohbet veya aramayı değil, tüm süreci ele alır."),
      question("Görüşmeye nereden başlayalım?", "Gerçek bir akışla başlayın: talep nereden geliyor, hangi adımlardan geçiyor ve hangi sonucu istiyorsunuz? Sonra ürünleri, bağlantıları ve insan kontrol noktalarını belirleriz."),
    ],
  },
  commonQuestions: [
    question("Ne zaman başlayabilirim?", "Süre ürün, gerekli materyaller ve diğer sistem bağlantılarına bağlıdır. Kapsam ve takvim işe başlamadan önce kararlaştırılır."),
    question("Yayından sonra yardım veya değişiklik için kime ulaşmalıyım?", "Destek ürün ve pakete bağlıdır. Başlamadan önce iletişim kişisini, değişiklik sürecini ve hizmet koşullarını belirleriz. AI çalışması tek başına 7/24 insan desteği anlamına gelmez."),
    question("Fiyata KDV dahil mi?", "Bu sayfada KDV koşulu belirtilmemiştir. Ödeme öncesinde vergileri ve toplam ödemeyi açıkça gösteren nihai teklif isteyin."),
  ],
  calculator: {
    title: "Tahmini arama maliyetini hesaplayın",
    description: "Bir eşzamanlı gelen kanal pakete dahildir; bağlı giden aramaların tahmini süresini girin.",
    packageLabel: "Paket",
    inboundLabel: "Dahil gelen kanal",
    extraChannelLabel: "Ek gelen kanallar",
    outboundLabel: "Bağlı giden dakikalar",
    inboundRate: "1 eşzamanlı kanal dahil; gelen dakikalar için ayrı dakika telefon ücreti yok",
    extraChannelRate: "60 ₾ / kanal / ay",
    outboundRate: "1,50 ₾ / bağlı dakika",
    firstMonthLabel: "İlk ay: kurulum +150 ₾",
    subscriptionLabel: "Paket",
    inboundCallsLabel: "Gelen aramalar",
    extraChannelsCallsLabel: "Ek kanallar",
    outboundCallsLabel: "Giden aramalar",
    setupOnceLabel: "Tek seferlik kurulum",
    totalExampleLabel: "Örnek toplam",
    disclaimer: "Bu tahmin burada gösterilen tarifleri kullanır. Nihai teklif değildir; KDV koşulu ayrıca doğrulanmalıdır.",
    minuteUnit: "dk",
  },
  disclosure: {
    orderTitle: "Siparişten önce",
    callTitle: "Arama demosunu dinleyin",
    callAriaLabel: "aiCALL arama gösterimi",
    callDisclaimer: "Bu bir demo kaydıdır, gerçek müşteri araması değildir.",
    callLink: "aiCALL üzerinde tam örnek",
    contentTitle: "Video formatlarını görün",
    contentBody: "aiCONTENT üç format sunar: ürün promosu, üretken UGC ve kişisel AI avatarı. Her herkese açık fiyat video başınadır. Tekrarlayan içerik aylık düzenlenebilir; kapsam ve fiyat sözleşmede ayrı belirlenir. Format başına bir revizyon turu dahildir. Gerçek çekim, oyuncu ve influencer dahil değildir.",
    contentLink: "aiCONTENT üzerinde güncel örnekler ve koşullar",
  },
};

const FA: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("اندازه کاتالوگ و به‌روزرسانی یعنی چه؟", "اندازه کاتالوگ تعداد محصولات یا پیشنهادهاست. به‌روزرسانی یعنی پردازش اطلاعات تغییرکرده در پایگاه دانش. در سطح شروع، کاتالوگ دستی مدیریت می‌شود؛ همگام‌سازی خودکار در Growth و Scale موجود است."),
      question("برای راه‌اندازی چت چه چیزی آماده کنم؟", "قیمت‌ها، توضیح محصولات یا خدمات، پرسش‌های رایج و شرایط را آماده کنید. همچنین مشخص می‌کنیم چت به چه پرسش‌هایی پاسخ دهد و چه زمانی گفتگو را به تیم منتقل کند."),
      question("اگر ظرفیت پکیج کافی نباشد چه می‌شود؟", "ظرفیت اضافه یا تغییر پکیج در پیشنهاد نهایی مشخص می‌شود. جدول ظرفیت ماهانه را نشان می‌دهد و قیمت جداگانه‌ای برای پاسخ اضافه در این صفحه درج نشده است."),
    ],
    aicall: [
      question("آیا AI می‌تواند خودش با مشتری تماس بگیرد؟", "بله، اما فقط برای وظیفه‌ای که شما تأیید کرده‌اید. کمپین‌های انبوه، صف‌های CSV و تماس‌های تکراری خودکار هنوز آماده نیستند و قابلیت فعال محسوب نمی‌شوند."),
      question("چه هزینه‌ای به قیمت پکیج اضافه می‌شود؟", "راه‌اندازی یک‌بار 150 ₾ است. هر پکیج شامل یک کانال ورودی هم‌زمان است و برای دقیقه‌های ورودی هزینه تلفنی جداگانه ندارد. کانال اضافه ماهانه ۶۰ ₾ و هر دقیقه خروجی متصل ۱٫۵۰ ₾ است. مصرف اضافه خودکار صورتحساب نمی‌شود و تأیید شما لازم است."),
      question("از طرف من به چه چیزی نیاز دارید؟", "هدف تماس، پرسش‌ها و پاسخ‌ها، شرایط فعلی و قانون انتقال به کارمند لازم است. اتصال به سیستم دیگر را از قبل بررسی می‌کنیم."),
    ],
    aicontent: [
      question("سه قالب ویدیو چه تفاوتی دارند؟", "در ویدیوی محصول، خود محصول یا فضا محور است. در UGC مولد، یک creator تولیدشده محصول را طبیعی نشان می‌دهد. در آواتار شخصی، آواتاری که برای شما ساخته شده روی تصویر است. UGC مولد نظر ضبط‌شده یک مشتری واقعی نیست."),
      question("یک ویدیو شامل چه چیزهایی است؟", "هر قالب یک ویدیوی آماده دارد. پرومو روی شیء تمرکز می‌کند، در UGC creator تولیدشده محصول را نشان می‌دهد یا استفاده می‌کند و در آواتار چهره‌ای ثابت دیده می‌شود. برای هر قالب یک مرحله اصلاح شامل است؛ فیلم‌برداری واقعی، بازیگر و اینفلوئنسر شامل نیستند."),
      question("قیمت یک ویدیو بر چه اساسی تغییر می‌کند؟", "جدول قیمت‌های شروع را نشان می‌دهد. مبلغ نهایی به صحنه، طول و میزان تولید لازم بستگی دارد. قبل از شروع، ایده، مواد و حجم اصلاح را توافق می‌کنیم."),
      question("پکیج ماهانه وجود دارد؟", "بله. محتوای تکرارشونده را می‌توان ماهانه تنظیم کرد. حجم و قیمت به‌صورت فردی در قرارداد تعیین می‌شود و قیمت عمومی ماهانه ثابت نداریم."),
    ],
    aiweb: [
      question("ساخت و نگهداری ماهانه جداگانه محاسبه می‌شوند؟", "بله. ساخت سایت پروژه‌ای یک‌باره است. نگهداری فنی اختیاری ماهانه محاسبه می‌شود؛ به همین دلیل قیمت‌ها جدا آمده‌اند."),
      question("نگهداری شامل قابلیت‌های جدید هم می‌شود؟", "نگهداری و ساخت قابلیت جدید دو کار متفاوت‌اند. در پیشنهاد مشخص می‌شود پشتیبانی شامل چه چیزهایی است و چه چیزی کار جدید محسوب می‌شود."),
      question("برای برآورد پروژه چه آماده کنم؟", "کسب‌وکار و کارهایی را که مشتری باید در سایت انجام دهد توضیح دهید: تماس، رزرو، سفارش یا پرداخت. اگر دارید، سایت فعلی و نمونه‌ها را بفرستید."),
    ],
    aistaff: [
      question("آیا aiSTAFF برای پیدا کردن نیروی جدید است؟", "بله. aiSTAFF به شما کمک می‌کند افراد باتجربه در AI را برای شرکت‌تان پیدا و انتخاب کنید؛ متخصصانی که می‌توانند با ابزارهای AI کار کنند و آن‌ها را در فرایندهای کسب‌وکار به کار ببرند."),
      question("قیمت aiSTAFF چگونه تعیین می‌شود؟", "قیمت ثابت عمومی یا پکیج‌های استاندارد نداریم. مبلغ پیشنهادی به نقش، تجربه موردنیاز در AI و حجم فرایند انتخاب بستگی دارد. ابتدا شرایط را بررسی می‌کنیم و سپس پیشنهاد اختصاصی آماده می‌کنیم."),
    ],
    iai: [
      question("چه زمانی iAI لازم است، نه فقط یک محصول؟", "وقتی کار در یک ابزار تمام نمی‌شود؛ مثلاً درخواست باید به وظیفه تبدیل و به سیستم دیگری منتقل شود. iAI کل فرایند را بررسی می‌کند، نه فقط چت یا تماس را."),
      question("گفتگو را از کجا شروع کنیم؟", "با یک جریان واقعی شروع کنید: درخواست از کجا می‌آید، چه مراحلی دارد و چه نتیجه‌ای لازم است؟ سپس محصولات، اتصال‌ها و نقاط کنترل انسانی را مشخص می‌کنیم."),
    ],
  },
  commonQuestions: [
    question("چه زمانی می‌توانم شروع کنم؟", "زمان به محصول، مواد لازم و اتصال به سیستم‌های دیگر بستگی دارد. حجم کار و زمان‌بندی پیش از شروع توافق می‌شود."),
    question("پس از راه‌اندازی برای کمک یا تغییر با چه کسی تماس بگیرم؟", "پشتیبانی به محصول و پکیج بستگی دارد. پیش از شروع، فرد تماس، روند تغییر و شرایط خدمت را مشخص می‌کنیم. کارکرد AI به‌تنهایی به معنی پشتیبانی انسانی ۲۴ساعته نیست."),
    question("آیا مالیات بر ارزش افزوده در قیمت هست؟", "شرط مالیات بر ارزش افزوده در این صفحه مشخص نشده است. پیش از پرداخت پیشنهاد نهایی را با مالیات‌ها و مبلغ کامل دریافت کنید."),
  ],
  calculator: {
    title: "هزینه تقریبی تماس را محاسبه کنید",
    description: "یک کانال ورودی هم‌زمان در پکیج شامل است؛ مدت تقریبی تماس‌های خروجیِ متصل را وارد کنید.",
    packageLabel: "پکیج",
    inboundLabel: "کانال ورودی شامل",
    extraChannelLabel: "کانال‌های ورودی اضافه",
    outboundLabel: "دقیقه‌های خروجیِ متصل",
    inboundRate: "۱ کانال هم‌زمان شامل است؛ هزینه تلفنی جداگانه برای دقیقه‌های ورودی ندارد",
    extraChannelRate: "۶۰ ₾ / کانال / ماه",
    outboundRate: "۱٫۵۰ ₾ / دقیقه متصل",
    firstMonthLabel: "ماه اول: راه‌اندازی +150 ₾",
    subscriptionLabel: "پکیج",
    inboundCallsLabel: "تماس‌های ورودی",
    extraChannelsCallsLabel: "کانال‌های اضافه",
    outboundCallsLabel: "تماس‌های خروجی",
    setupOnceLabel: "راه‌اندازی یک‌باره",
    totalExampleLabel: "جمع نمونه",
    disclaimer: "این برآورد بر اساس تعرفه‌های درج‌شده در اینجا است. پیشنهاد نهایی نیست؛ شرط مالیات بر ارزش افزوده باید جداگانه مشخص شود.",
    minuteUnit: "دقیقه",
  },
  disclosure: {
    orderTitle: "پیش از سفارش",
    callTitle: "نمونه تماس را بشنوید",
    callAriaLabel: "نمونه نمایشی تماس aiCALL",
    callDisclaimer: "این یک ضبط نمایشی است، نه تماس واقعی مشتری.",
    callLink: "نمونه کامل در aiCALL",
    contentTitle: "قالب‌های ویدیو را ببینید",
    contentBody: "aiCONTENT سه قالب دارد: پروموی محصول، UGC مولد و آواتار شخصی AI. هر قیمت عمومی برای یک ویدیو است. محتوای تکرارشونده را می‌توان ماهانه تنظیم کرد؛ حجم و قیمت به‌صورت فردی در قرارداد تعیین می‌شود. برای هر قالب یک مرحله اصلاح شامل است. فیلم‌برداری واقعی، بازیگر و اینفلوئنسر شامل نیستند.",
    contentLink: "نمونه‌ها و شرایط فعلی در aiCONTENT",
  },
};

const ZH: PricingDetailsCopy = {
  productQuestions: {
    aichats: [
      question("目录容量和更新是什么意思？", "目录容量是产品或方案的数量。更新是将变化的信息处理到知识库中。入门级需要手动管理目录；Growth 和 Scale 支持自动同步。"),
      question("开通聊天功能需要准备什么？", "请准备价格、产品或服务说明、常见问题和服务条件。我们还会确定聊天机器人回答什么，以及何时转交给团队。"),
      question("套餐容量不够时怎么办？", "额外容量或更换套餐会写入最终报价。表格展示月度容量；本页不列出额外回复的单独价格。"),
    ],
    aicall: [
      question("AI 能自动给客户打电话吗？", "可以，但只执行您批准的具体任务。批量活动、CSV 队列和自动重复外呼仍在准备中，目前不是启用功能。"),
      question("套餐价格之外还会有哪些费用？", "设置费一次性 150 ₾。每个套餐包含一个同时来电通道，来电没有单独的按分钟电话费。额外通道每月 60 ₾，已接通外呼分钟为 1.50 ₾。额外使用不会自动扣费，需要您的确认。"),
      question("需要我提供什么？", "需要通话目标、问答内容、当前条件和转交工作人员的规则。连接其他系统前，我们会先检查兼容性。"),
    ],
    aicontent: [
      question("三种视频格式有什么区别？", "产品视频以产品或空间为主。生成式 UGC 由生成的 creator 以自然方式展示产品。个人 AI 虚拟形象视频使用为您创建的形象。生成式 UGC 不是由真实客户拍摄的评价。"),
      question("一个视频包含哪些内容？", "每种格式包含一个成片。产品宣传展示主体，UGC 中生成的 creator 会拿着或使用产品，虚拟形象视频保持统一的画面形象。每种格式包含一轮修改；不包含真实拍摄、演员和网红。"),
      question("单个视频的价格会因什么变化？", "表格显示起始价格。最终金额取决于场景、视频时长和所需生成工作。开始前会确认创意、素材和修改范围。"),
      question("有月度套餐吗？", "有。持续内容可以安排月度套餐，范围和价格在合同中单独确定；没有固定的公开月度价格。"),
    ],
    aiweb: [
      question("网站制作和月度维护分开收费吗？", "是的。网站制作是一次性项目；可选技术维护按月收费，因此两项价格分开显示。"),
      question("维护是否包含新功能？", "维护和开发新功能是不同的工作。报价会分别说明维护范围，以及哪些内容属于新工作。"),
      question("评估项目需要准备什么？", "请说明业务以及客户需要在网站上完成的操作：联系、预约、下单或付款。如有现有网站和参考案例，也请一并提供。"),
    ],
    aistaff: [
      question("aiSTAFF 是帮助招聘新员工吗？", "是的。aiSTAFF 帮助您为公司寻找和筛选有 AI 经验的人才——他们能够使用 AI 工具，并将其用于业务流程。"),
      question("aiSTAFF 的价格如何确定？", "没有固定的公开价格或标准套餐。报价取决于岗位、所需的 AI 经验和招聘范围。我们先讨论条件，再提供单独的方案。"),
    ],
    iai: [
      question("什么时候需要 iAI，而不只是一个产品？", "当工作无法在一个工具中完成时，例如需要把请求变成任务，再转入另一个系统。iAI 关注完整流程，而不只是聊天或电话。"),
      question("应该从哪里开始讨论？", "从一个真实流程开始：请求来自哪里、经过哪些步骤、需要什么结果。之后再确定产品、连接方式和人工检查点。"),
    ],
  },
  commonQuestions: [
    question("什么时候可以开始？", "时间取决于产品、所需素材和其他系统的连接。开始前会确认工作范围和时间表。"),
    question("上线后需要帮助或修改时联系谁？", "支持范围取决于产品和套餐。开始前会确认联系人、修改流程和服务条件。AI 的运行本身不代表提供 24/7 人工支持。"),
    question("价格包含增值税吗？", "本页没有说明增值税条件。付款前请索取最终报价，并确认税费和应付总额。"),
  ],
  calculator: {
    title: "估算通话费用",
    description: "套餐已包含一个同时来电通道，请输入预计的已接通外呼时长。",
    packageLabel: "套餐",
    inboundLabel: "包含的来电通道",
    extraChannelLabel: "额外来电通道",
    outboundLabel: "已接通外呼分钟",
    inboundRate: "包含 1 个同时通道；来电没有单独的按分钟电话费",
    extraChannelRate: "60 ₾ / 通道 / 月",
    outboundRate: "1.50 ₾ / 接通分钟",
    firstMonthLabel: "首月：设置费 +150 ₾",
    subscriptionLabel: "套餐",
    inboundCallsLabel: "来电",
    extraChannelsCallsLabel: "额外通道",
    outboundCallsLabel: "外呼",
    setupOnceLabel: "一次性设置",
    totalExampleLabel: "示例合计",
    disclaimer: "此估算使用本页列出的费率，不是最终报价；增值税条件需要单独确认。",
    minuteUnit: "分钟",
  },
  disclosure: {
    orderTitle: "下单前请注意",
    callTitle: "收听通话演示",
    callAriaLabel: "aiCALL 通话演示片段",
    callDisclaimer: "这是演示录音，不是真实客户通话。",
    callLink: "aiCALL 完整示例",
    contentTitle: "查看视频格式",
    contentBody: "aiCONTENT 提供三种格式：产品宣传、生成式 UGC 和个人 AI 虚拟形象。每个公开价格按一个视频计算。持续内容可以安排月度套餐，范围和价格在合同中单独确定。每种格式包含一轮修改。不包含真实拍摄、演员和网红。",
    contentLink: "在 aiCONTENT 查看当前示例和条件",
  },
};

const DETAILS_BY_LOCALE: Record<PricingLocale, PricingDetailsCopy> = { ka: KA, en: EN, ru: RU, de: DE, tr: TR, fa: FA, zh: ZH };

export function getPricingDetailsCopy(locale: string): PricingDetailsCopy {
  return DETAILS_BY_LOCALE[normalizePricingLocale(locale)];
}
