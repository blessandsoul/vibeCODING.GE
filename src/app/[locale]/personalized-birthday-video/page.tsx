import type { Metadata } from "next";
import { FaqPageSchema } from "@/components/seo/FaqPageSchema";
import { PersonalizedVideoLanding } from "@/features/personalized-video/components/PersonalizedVideoLanding";

type Props = {
  params: Promise<{ locale: string }>;
};

type Content = {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  highlights: string[];
  priceLabel: string;
  price: string;
  priceNote: string;
  primaryCta: string;
  secondaryCta: string;
  rightsNote: string;
  answerTitle: string;
  answerParagraphs: string[];
  suitableTitle: string;
  suitableItems: { title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  includedTitle: string;
  includedItems: string[];
  pricingTitle: string;
  pricingBody: string;
  compareTitle: string;
  compareHeaders: [string, string, string, string];
  compareRows: [string, string, string, string][];
  limitsTitle: string;
  limits: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  relatedTitle: string;
  related: { href: string; label: string }[];
  finalTitle: string;
  finalBody: string;
  finalCta: string;
};

const PATH = "/personalized-birthday-video";
const SITE = "https://ainow.ge";
const SUPPORTED_LOCALES = ["ka", "en", "ru"] as const;

const CONTENT: Record<(typeof SUPPORTED_LOCALES)[number], Content> = {
  ka: {
    title: "პერსონალური ვიდეო მილოცვა შეკვეთით",
    description:
      "პერსონალური AI ვიდეო მილოცვა დაბადების დღისთვის ან სხვა დღესასწაულისთვის. ბავშვისთვის ან ზრდასრულისთვის, ნებისმიერი ორიგინალური სიუჟეტით. ფასი 150-300 ₾.",
    eyebrow: "პერსონალური AI ვიდეო",
    h1: "პერსონალური AI ვიდეო მილოცვა შეკვეთით",
    lead:
      "გვითხარით, ვის ულოცავთ და რა სამყაროში გინდათ მისი ნახვა. შევქმნით სახელზე, ისტორიასა და სურვილზე მორგებულ ვიდეოს ბავშვისთვის, ოჯახის წევრისთვის, მეგობრისთვის ან კოლეგისთვის.",
    highlights: [
      "ბავშვი, ზრდასრული, მეგობარი, მშობელი ან კოლეგა",
      "დაბადების დღე, იუბილე, ქორწილი ან სხვა დღესასწაული",
      "თქვენი იდეა ან ჩვენ მიერ შეთავაზებული სიუჟეტი",
      "ქართული, ინგლისური ან რუსული მზა ვიდეო",
    ],
    priceLabel: "ღირებულება",
    price: "150-300 ₾",
    priceNote:
      "საბოლოო ფასი დამოკიდებულია სცენარზე, პერსონაჟების რაოდენობაზე, ენასა და დამუშავების სირთულეზე.",
    primaryCta: "ვიდეოს შეკვეთა",
    secondaryCta: "როგორ მზადდება",
    rightsNote:
      "ცნობილი ადამიანის სახეს, ხმას ან დაცულ პერსონაჟს მხოლოდ შესაბამისი ნებართვით ვიყენებთ. სხვა შემთხვევაში ორიგინალურ გმირს ვქმნით.",
    answerTitle: "საჩუქარი, რომელიც კონკრეტული ადამიანისთვის იქმნება",
    answerParagraphs: [
      "დასამახსოვრებელი საჩუქარი ყოველთვის ნივთი არ არის. პერსონალურ ვიდეოში ადამიანი საკუთარ სახელს ისმენს, მისთვის დაწერილ სურვილს იღებს და იმ სამყაროში ხვდება, რომელიც მის ინტერესებს ან თქვენს საერთო ისტორიას შეესაბამება.",
      "ვიდეო შეიძლება შეიქმნას ბავშვისთვის, პარტნიორისთვის, მეგობრისთვის, მშობლისთვის, ბებია-ბაბუისთვის, კოლეგისთვის ან მთელი გუნდისთვის. ასაკი და ურთიერთობა ფორმატს არ ზღუდავს.",
      "შეგიძლიათ მოგვცეთ მზა იდეა ან მხოლოდ რამდენიმე მინიშნება. ჩვენ შევთავაზებთ ორიგინალურ სიუჟეტს, რომელსაც დღესასწაულზე აჩვენებთ, შეტყობინებით გაუგზავნით ან ციფრულ მოგონებად შეინახავთ.",
    ],
    suitableTitle: "ვის და როგორი ისტორიით შეიძლება მიულოცოთ",
    suitableItems: [
      {
        title: "ბავშვს",
        body: "ზღაპარი, კოსმოსი, დინოზავრები, თამაშები, სპორტი, მუსიკა ან მისთვის შექმნილი სრულიად ახალი სამყარო.",
      },
      {
        title: "საყვარელ ადამიანს ან მეგობარს",
        body: "რომანტიკული, სახალისო, კინემატოგრაფიული ან თქვენს საერთო მოგონებაზე აგებული სიუჟეტი.",
      },
      {
        title: "ოჯახის წევრს",
        body: "თბილი ისტორია ოჯახის ფოტოებით, მნიშვნელოვანი თარიღებით, მოგონებებითა და პირადი სურვილით.",
      },
      {
        title: "კოლეგას ან გუნდს",
        body: "მსუბუქი იუმორი, პროფესიული გარემო ან საერთო მიღწევებზე აგებული სადღესასწაულო ვიდეო.",
      },
    ],
    stepsTitle: "როგორ მზადდება პერსონალური ვიდეო მილოცვა",
    steps: [
      {
        title: "1. გვიგზავნით მოკლე ბრიფს",
        body: "გვჭირდება ადამიანის სახელი, დღესასწაული, სასურველი ენა, თქვენი ურთიერთობა და რამდენიმე დეტალი მისი ინტერესების შესახებ.",
      },
      {
        title: "2. ვათანხმებთ კონცეფციასა და ტექსტს",
        body: "თქვენ გვიზიარებთ ფანტაზიას ან ჩვენ გთავაზობთ ორიგინალურ მიმართულებას. წარმოების დაწყებამდე ვათანხმებთ სიუჟეტსა და მთავარ ტექსტს.",
      },
      {
        title: "3. ვქმნით და ვამონტაჟებთ ვიდეოს",
        body: "ვქმნით ვიზუალურ სამყაროს, ხმას, მუსიკასა და ტიტრებს, შემდეგ კი ყველაფერს ერთ დასრულებულ ვიდეოში ვაერთიანებთ.",
      },
      {
        title: "4. იღებთ გასაზიარებელ ფაილს",
        body: "გადმოგცემთ ტელეფონით, მესენჯერით ან ეკრანზე საჩვენებლად გამზადებულ ვიდეოს. ვადა ბრიფის შეთანხმების შემდეგ ზუსტდება.",
      },
    ],
    includedTitle: "რა შედის 150-300 ლარის ღირებულებაში",
    includedItems: [
      "პერსონალური მოკლე სცენარი და მილოცვის ტექსტი",
      "AI ვიზუალის, ხმისა და მუსიკის შექმნა",
      "ადამიანის სახელის, ისტორიისა და სურვილის დამატება",
      "ვიდეოს მონტაჟი და ტელეფონისთვის მომზადება",
      "საბოლოო ფაილის ფორმატის წინასწარ შეთანხმება",
    ],
    pricingTitle: "რა განსაზღვრავს პერსონალური ვიდეოს ფასს",
    pricingBody:
      "მარტივი, ერთი სცენის ვიდეო ჩვეულებრივ ქვედა დიაპაზონში ხვდება. რამდენიმე პერსონაჟი, რთული სცენარი, განსხვავებული ხმები, დამატებითი კადრები ან რამდენიმე ფორმატი სამუშაოს მოცულობას ზრდის. შეკვეთამდე მიიღებთ ზუსტ მოცულობასა და ფასს, რათა გაურკვეველი ხარჯი არ დაგრჩეთ.",
    compareTitle: "რა განსხვავებაა ჩვეულებრივ და პერსონალურ საჩუქარს შორის",
    compareHeaders: ["ვარიანტი", "პერსონალიზაცია", "გაზიარება", "რას იღებს ადამიანი"],
    compareRows: [
      ["ჩვეულებრივი საჩუქარი", "დაბალი ან საშუალო", "ფორმატზეა დამოკიდებული", "ნივთს ან გამოცდილებას"],
      ["საჩუქრის ბარათი", "დაბალი", "მარტივი", "არჩევანის შესაძლებლობას"],
      ["პერსონალური AI ვიდეო", "მაღალი", "მარტივი", "მისთვის შექმნილ ისტორიას"],
    ],
    limitsTitle: "რა უნდა იცოდეთ შეკვეთამდე",
    limits: [
      "რეალური ცნობილი ადამიანის სახე, ხმა ან სხვა მსგავსება ნებართვის გარეშე არ გამოიყენება.",
      "დაცული პერსონაჟის ზუსტ ასლს ნებართვის გარეშე არ ვქმნით. მის ნაცვლად შეგთავაზებთ ორიგინალურ გმირსა და სამყაროს.",
      "ფოტო ან სხვა პირადი მონაცემი მხოლოდ შეთანხმებული მიზნისთვის უნდა მოგვაწოდოთ.",
      "გენერირებულ კადრებში მცირე ვიზუალური განსხვავებები შესაძლებელია, ამიტომ კონცეფციას წინასწარ ვათანხმებთ.",
      "შედეგი შემოქმედებითი ვიდეოა და კონკრეტული ემოციური რეაქცია გარანტირებული ვერ იქნება.",
    ],
    faqTitle: "ხშირად დასმული კითხვები",
    faq: [
      {
        q: "რამდენი ღირს პერსონალური ვიდეო მილოცვა?",
        a: "ფასი 150-300 ₾-ია. ზუსტი ღირებულება დამოკიდებულია ვიდეოს ხანგრძლივობაზე, სცენარზე, პერსონაჟების რაოდენობაზე, ენასა და მონტაჟის სირთულეზე.",
      },
      {
        q: "ვისთვის შეიძლება ვიდეოს შექმნა?",
        a: "ვიდეო შეიძლება შეიქმნას ბავშვისთვის ან ზრდასრულისთვის: ოჯახის წევრისთვის, მეგობრისთვის, პარტნიორისთვის, კოლეგისთვის ან გუნდისთვის.",
      },
      {
        q: "როგორი სიუჟეტის შექმნა შეიძლება?",
        a: "შეიძლება შეიქმნას ზღაპრული, კოსმოსური, სპორტული, სათამაშო, მუსიკალური, რომანტიკული, სახალისო ან სრულიად ორიგინალური სამყარო. იდეას თქვენ გვთავაზობთ ან ჩვენ შეგირჩევთ.",
      },
      {
        q: "შეიძლება ცნობილი ადამიანის ან დაცული პერსონაჟის გამოყენება?",
        a: "მხოლოდ შესაბამისი ნებართვის ან ლიცენზიის არსებობისას. სხვა შემთხვევაში ვქმნით ორიგინალურ პერსონაჟს, რომელიც სასურველ განწყობას ინარჩუნებს, მაგრამ კონკრეტულ ადამიანს ან დაცულ გმირს არ იმეორებს.",
      },
      {
        q: "რომელ ენაზე შეიძლება ვიდეოს გაკეთება?",
        a: "შეკვეთის მიხედვით ვიდეოს ტექსტი შეიძლება მომზადდეს ქართულად, ინგლისურად ან რუსულად. სხვა ენის შესაძლებლობა ბრიფის მიღების შემდეგ მოწმდება.",
      },
      {
        q: "რა ინფორმაცია უნდა გამოგვიგზავნოთ?",
        a: "საჭიროა ადამიანის სახელი, დღესასწაული, სასურველი ენა, ინტერესები, მილოცვის მთავარი აზრი და თქვენი იდეა სიუჟეტისთვის. თუ იდეა არ გაქვთ, მიმართულებას ჩვენ შემოგთავაზებთ.",
      },
      {
        q: "რამდენ ხანში მზადდება ვიდეო?",
        a: "ვადა კონცეფციისა და სამუშაოს მოცულობის მიხედვით განისაზღვრება. ზუსტ თარიღს ბრიფისა და ტექსტის შეთანხმების შემდეგ გეტყვით.",
      },
    ],
    relatedTitle: "სხვა AI კონტენტის სერვისები",
    related: [
      { href: "/services/content-studio", label: "AI კონტენტ-სტუდია" },
      { href: "/services/ai-characters", label: "AI პერსონაჟების შექმნა" },
      { href: "/ai-konteni", label: "AI ვიდეო და კონტენტი" },
      { href: "/pricing", label: "aiNOW-ის ტარიფები" },
    ],
    finalTitle: "ვისთვის და რა სამყაროში შევქმნათ მილოცვა?",
    finalBody:
      "გამოგვიგზავნეთ ადამიანის სახელი, დღესასწაული და რამდენიმე დეტალი. პასუხად მიიღებთ სიუჟეტის მიმართულებას, ზუსტ ღირებულებასა და სამუშაოს ვადას.",
    finalCta: "მოითხოვეთ შეთავაზება",
  },
  en: {
    title: "Personalized birthday video | Custom AI greeting",
    description:
      "A personalized AI video for a birthday or another celebration. Made for a child or adult with an original fantasy story. Custom production in Georgia for 150-300 GEL.",
    eyebrow: "Personalized AI video",
    h1: "Personalized AI video greetings made to order",
    lead:
      "Tell us who you are celebrating and the world you imagine for them. We create a custom video around their name, story and interests, whether it is for a child, partner, friend, parent or colleague.",
    highlights: [
      "A child, adult, friend, parent or colleague",
      "A birthday, anniversary, wedding or another occasion",
      "Your idea or an original concept from our team",
      "A share-ready video in Georgian, English or Russian",
    ],
    priceLabel: "Price range",
    price: "150-300 GEL",
    priceNote:
      "The final quote depends on the script, number of characters, language and production complexity.",
    primaryCta: "Order a video",
    secondaryCta: "See how it works",
    rightsNote:
      "Real celebrities and protected characters require the appropriate permission. Otherwise, we create an original hero.",
    answerTitle: "A gift created for one specific person",
    answerParagraphs: [
      "A memorable gift does not have to be another object. In a personalized video, the recipient hears their name, receives a message written for them and enters a world shaped around their interests or your shared story.",
      "We can create a video for a child, partner, friend, parent, grandparent, colleague or an entire team. The format is not limited by age or relationship.",
      "Bring us a complete idea or just a few details. We can propose an original story to play at a celebration, send through a messenger or keep as a digital memory.",
    ],
    suitableTitle: "Who you can celebrate and what we can imagine",
    suitableItems: [
      {
        title: "A child",
        body: "A fairytale, space mission, dinosaurs, games, sport, music or a completely new world created for them.",
      },
      {
        title: "A partner or friend",
        body: "A romantic, funny or cinematic story shaped around your shared memories and private jokes.",
      },
      {
        title: "A family member",
        body: "A warm story built from family photos, important dates, memories and a personal message.",
      },
      {
        title: "A colleague or team",
        body: "Light humor, a professional setting or a celebratory story based on shared achievements.",
      },
    ],
    stepsTitle: "How a personalized video greeting is made",
    steps: [
      {
        title: "1. Send a short brief",
        body: "Tell us the person's name, the occasion, preferred language, your relationship and a few details about their interests.",
      },
      {
        title: "2. Approve the concept and script",
        body: "Share your fantasy or let us propose an original direction. We confirm the story and key message before production begins.",
      },
      {
        title: "3. We create and edit the video",
        body: "We build the visual world, voice, music and titles, then assemble everything into one complete greeting video.",
      },
      {
        title: "4. Receive a shareable file",
        body: "You receive a video prepared for phones, messaging apps or a party screen. Timing is confirmed after the brief is approved.",
      },
    ],
    includedTitle: "What the 150-300 GEL price includes",
    includedItems: [
      "A short personalized concept and greeting script",
      "AI visuals, voice and music production",
      "The recipient's name, story and personal message",
      "Editing and delivery in a phone-friendly format",
      "A delivery format agreed before production",
    ],
    pricingTitle: "What affects the price of a personalized video",
    pricingBody:
      "A simple one-scene greeting usually sits near the lower end of the range. Multiple characters, a more complex story, several voices, additional shots or extra formats increase the production scope. You receive a defined scope and exact quote before work begins.",
    compareTitle: "How a personalized video compares with common gifts",
    compareHeaders: ["Gift idea", "Personalization", "Easy to share", "What the person receives"],
    compareRows: [
      ["Standard gift", "Low or medium", "Depends on format", "An item or experience"],
      ["Gift card", "Low", "Yes", "Freedom to choose"],
      ["Personalized AI video", "High", "Yes", "A story created for them"],
    ],
    limitsTitle: "What to know before ordering",
    limits: [
      "A real celebrity's face, voice or likeness is not used without permission.",
      "We do not copy a protected character without rights. We can create an original hero and world with the desired mood instead.",
      "Only provide photos or personal data for the agreed production purpose.",
      "Small visual variations can occur in generated scenes, so the direction is agreed in advance.",
      "This is a creative deliverable. No particular emotional reaction can be guaranteed.",
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "How much does a personalized video greeting cost?",
        a: "The price range is 150-300 GEL. The exact quote depends on duration, script, number of characters, language and editing complexity.",
      },
      {
        q: "Who can the video be made for?",
        a: "It can be made for a child or adult, including a family member, friend, partner, colleague or an entire team.",
      },
      {
        q: "What kind of story can you create?",
        a: "We can create a fairytale, space, sports, gaming, music, romantic, funny or completely original world. Bring your idea or ask us to propose one.",
      },
      {
        q: "Can the video include a celebrity or protected character?",
        a: "Only when the required permission or license exists. Otherwise, we create an original character that keeps the desired mood without copying a real person or protected hero.",
      },
      {
        q: "Which languages are available?",
        a: "The script can be prepared in Georgian, English or Russian. Other languages are checked after we receive the brief.",
      },
      {
        q: "What information do you need?",
        a: "Send the person's name, occasion, preferred language, interests, main message and any story idea. If you do not have a concept, we can propose one.",
      },
      {
        q: "How long does production take?",
        a: "Timing depends on the concept and production scope. We confirm a delivery date after the brief and script are approved.",
      },
    ],
    relatedTitle: "Related AI content services",
    related: [
      { href: "/services/content-studio", label: "AI content studio" },
      { href: "/services/ai-characters", label: "AI character production" },
      { href: "/ai-konteni", label: "AI video and content" },
      { href: "/pricing", label: "aiNOW pricing" },
    ],
    finalTitle: "Who are we celebrating, and in which world?",
    finalBody:
      "Send the person's name, the occasion and a few details. We will reply with a story direction, exact quote and production timing.",
    finalCta: "Request a quote",
  },
  ru: {
    title: "Персональное видеопоздравление на заказ",
    description:
      "Персональное AI-видеопоздравление на день рождения или другой праздник. Для ребёнка или взрослого, с оригинальным фантазийным сюжетом. Цена 150-300 GEL.",
    eyebrow: "Персональное AI-видеопоздравление",
    h1: "Персональное AI-видеопоздравление на заказ",
    lead:
      "Расскажите, кого вы хотите поздравить и в каком мире хотите его увидеть. Создадим видео под имя, историю и интересы ребёнка, любимого человека, друга, родителя или коллеги.",
    highlights: [
      "Ребёнок, взрослый, друг, родитель или коллега",
      "День рождения, юбилей, свадьба или другой праздник",
      "Ваша фантазия или оригинальная идея от нашей команды",
      "Готовое видео на грузинском, русском или английском",
    ],
    priceLabel: "Стоимость",
    price: "150-300 GEL",
    priceNote:
      "Итоговая цена зависит от сценария, количества персонажей, языка и сложности производства.",
    primaryCta: "Заказать видео",
    secondaryCta: "Как это работает",
    rightsNote:
      "Знаменитости и защищённые персонажи используются только при наличии нужного разрешения. В остальных случаях мы создаём оригинального героя.",
    answerTitle: "Подарок, созданный для конкретного человека",
    answerParagraphs: [
      "Запоминающийся подарок не обязательно должен быть ещё одной вещью. В персональном видео человек слышит своё имя, получает написанное для него пожелание и попадает в мир, связанный с его интересами или вашей общей историей.",
      "Можно поздравить ребёнка, партнёра, друга, родителей, бабушку или дедушку, коллегу либо целую команду. Возраст и ваши отношения не ограничивают формат.",
      "Приходите с готовой фантазией или расскажите несколько деталей. Мы предложим оригинальный сюжет, который можно показать на празднике, отправить в мессенджере или сохранить как цифровое воспоминание.",
    ],
    suitableTitle: "Кого поздравим и какую историю создадим",
    suitableItems: [
      {
        title: "Ребёнка",
        body: "Сказка, космос, динозавры, игры, спорт, музыка или полностью новый мир, придуманный специально для него.",
      },
      {
        title: "Любимого человека или друга",
        body: "Романтическая, смешная или кинематографичная история на основе общих воспоминаний и понятных только вам шуток.",
      },
      {
        title: "Члена семьи",
        body: "Тёплая история с семейными фотографиями, важными датами, воспоминаниями и личным пожеланием.",
      },
      {
        title: "Коллегу или команду",
        body: "Лёгкий юмор, профессиональный сюжет или праздничная история на основе общих достижений.",
      },
    ],
    stepsTitle: "Как создаётся персональное видеопоздравление",
    steps: [
      {
        title: "1. Вы отправляете короткий бриф",
        body: "Нужны имя человека, повод, язык, ваши отношения и несколько деталей о его интересах.",
      },
      {
        title: "2. Согласовываем идею и текст",
        body: "Вы делитесь своей фантазией или мы предлагаем оригинальное направление. До начала производства согласовываем сюжет и ключевой текст.",
      },
      {
        title: "3. Создаём и монтируем видео",
        body: "Создаём визуальный мир, голос, музыку и титры, а затем собираем их в законченное видеопоздравление.",
      },
      {
        title: "4. Передаём готовый файл",
        body: "Вы получаете видео для телефона, мессенджера или экрана на празднике. Срок уточняется после согласования брифа.",
      },
    ],
    includedTitle: "Что входит в стоимость 150-300 GEL",
    includedItems: [
      "Короткая персональная концепция и текст поздравления",
      "Создание AI-визуала, голоса и музыкального оформления",
      "Добавление имени, истории и личного пожелания",
      "Монтаж и подготовка удобного для телефона файла",
      "Формат готового файла, согласованный до старта",
    ],
    pricingTitle: "От чего зависит цена персонального видео",
    pricingBody:
      "Простое поздравление с одной сценой обычно находится ближе к нижней границе. Несколько персонажей, сложный сюжет, разные голоса, дополнительные кадры или форматы увеличивают объём работы. До старта вы получите точное описание результата и окончательную цену.",
    compareTitle: "Чем персональное видео отличается от обычного подарка",
    compareHeaders: ["Вариант", "Персонализация", "Легко поделиться", "Что получает человек"],
    compareRows: [
      ["Обычный подарок", "Низкая или средняя", "Зависит от формата", "Вещь или впечатление"],
      ["Подарочная карта", "Низкая", "Да", "Возможность выбрать"],
      ["Персональное AI-видео", "Высокая", "Да", "Историю, созданную для него"],
    ],
    limitsTitle: "Что важно знать до заказа",
    limits: [
      "Лицо, голос или образ реальной знаменитости без разрешения не используются.",
      "Мы не копируем защищённого персонажа без прав. Вместо этого можем создать оригинального героя и мир с нужным настроением.",
      "Фотографии и персональные данные следует передавать только для согласованной цели.",
      "В сгенерированных кадрах возможны небольшие визуальные различия, поэтому концепция утверждается заранее.",
      "Это творческий продукт, поэтому определённую эмоциональную реакцию гарантировать невозможно.",
    ],
    faqTitle: "Частые вопросы",
    faq: [
      {
        q: "Сколько стоит персональное видеопоздравление?",
        a: "Стоимость составляет 150-300 GEL. Точная цена зависит от длительности, сценария, количества персонажей, языка и сложности монтажа.",
      },
      {
        q: "Для кого можно сделать видео?",
        a: "Для ребёнка или взрослого: родственника, друга, партнёра, коллеги или целой команды.",
      },
      {
        q: "Какой сюжет можно создать?",
        a: "Сказочный, космический, спортивный, игровой, музыкальный, романтический, смешной или полностью оригинальный. Вы можете принести свою идею или попросить нас предложить концепцию.",
      },
      {
        q: "Можно использовать знаменитость или защищённого персонажа?",
        a: "Только при наличии нужного разрешения или лицензии. В остальных случаях мы создаём оригинального героя с нужным настроением, не копируя реального человека или защищённого персонажа.",
      },
      {
        q: "На каком языке можно сделать видео?",
        a: "Текст можно подготовить на грузинском, русском или английском. Другие языки проверяются после получения брифа.",
      },
      {
        q: "Какая информация нужна для заказа?",
        a: "Нужны имя человека, повод, язык, интересы, главное пожелание и ваша идея сюжета. Если готовой идеи нет, мы предложим направление.",
      },
      {
        q: "Сколько времени занимает производство?",
        a: "Срок зависит от концепции и объёма работы. Точную дату мы подтверждаем после согласования брифа и текста.",
      },
    ],
    relatedTitle: "Другие услуги по AI-контенту",
    related: [
      { href: "/services/content-studio", label: "AI-контент-студия" },
      { href: "/services/ai-characters", label: "Создание AI-персонажей" },
      { href: "/ai-konteni", label: "AI-видео и контент" },
      { href: "/pricing", label: "Тарифы aiNOW" },
    ],
    finalTitle: "Кого поздравляем и в каком мире?",
    finalBody:
      "Пришлите имя человека, повод и несколько деталей. В ответ вы получите направление сюжета, точную стоимость и срок производства.",
    finalCta: "Получить предложение",
  },
};

function isSupportedLocale(locale: string): locale is keyof typeof CONTENT {
  return (SUPPORTED_LOCALES as readonly string[]).includes(locale);
}

function pick(locale: string): Content {
  return isSupportedLocale(locale) ? CONTENT[locale] : CONTENT.ka;
}

function localizedPath(locale: string, path: string): string {
  return locale === "ka" ? path : `/${locale}${path}`;
}

function absoluteUrl(locale: string, path: string): string {
  return `${SITE}${localizedPath(locale, path)}`;
}

function PageSchemas({ locale, content }: { locale: string; content: Content }) {
  const canonical = absoluteUrl(isSupportedLocale(locale) ? locale : "ka", PATH);
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.description,
    url: canonical,
    serviceType: "Personalized AI Video Greeting Production",
    provider: {
      "@type": "Organization",
      name: "aiNOW",
      url: SITE,
    },
    areaServed: { "@type": "Country", name: "Georgia" },
    availableLanguage: ["ka", "en", "ru"],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "150",
      highPrice: "300",
      priceCurrency: "GEL",
      availability: "https://schema.org/InStock",
      url: canonical,
    },
  };
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const content = pick(locale);
  const supported = isSupportedLocale(locale);
  const canonicalLocale = supported ? locale : "ka";
  const canonical = absoluteUrl(canonicalLocale, PATH);
  return {
    title: content.title,
    description: content.description,
    robots: supported ? { index: true, follow: true } : { index: false, follow: true },
    alternates: {
      canonical,
      languages: {
        ka: absoluteUrl("ka", PATH),
        en: absoluteUrl("en", PATH),
        ru: absoluteUrl("ru", PATH),
        "x-default": absoluteUrl("ka", PATH),
      },
    },
    openGraph: {
      type: "website",
      title: content.title,
      description: content.description,
      url: canonical,
    },
    twitter: {
      card: "summary",
      title: content.title,
      description: content.description,
    },
  };
}

export default async function PersonalizedVideoGreetingPage({ params }: Props) {
  const { locale } = await params;
  const content = pick(locale);
  const contactHref = `${localizedPath(locale, "/contact")}?source=personalized-birthday-video`;

  return (
    <>
      <PageSchemas locale={locale} content={content} />
      <FaqPageSchema items={content.faq} />
      <PersonalizedVideoLanding
        content={content}
        contactHref={contactHref}
        localizedPath={(path) => localizedPath(locale, path)}
      />
    </>
  );
}
