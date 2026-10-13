import type { NicheEntry } from '../types';

/**
 * Cleaning services (დასუფთავება). Order/quote niche: the price depends on the
 * apartment or office area, so the demo persona collects the cleaning type,
 * area, day and time, then hands the exact quote to a human. The landing copy
 * is tuned to the cleaning keyword, with the recurring plan as the high-value
 * hook rather than a single visit.
 */
export const cleaning: NicheEntry = {
  key: 'cleaning',
  slug: 'ai-chatbot-dasuftavebistvis',
  serviceType: 'AI Chatbot for Cleaning Services',
  persona: {
    botName: 'სოფო',
    brand: 'ბროლი',
    bizType: 'დასუფთავების კომპანია',
    hours: 'ორშაბათი-შაბათი 09:00-20:00, კვირას დასვენება',
    address: 'თბილისი. მთელ ქალაქში ვმუშაობთ.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ბინის დასუფთავება ფართობის მიხედვით 80-250 ლარი; გენერალური დასუფთავება 150-400; ოფისების დასუფთავება ხელშეკრულებით; სარემონტო შემდგომი დასუფთავება ცალკე ფასდება. მუდმივ აბონემენტზე ფასდაკლება. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს დასუფთავება უნდა, ჯერ ჰკითხე რა ტიპის დასუფთავება სჭირდება და ბინის ან ოფისის დაახლოებითი ფართობი, შემდეგ რომელი დღე და დრო აწყობს, ბოლოს სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ, დააზუსტებს ფართობს და ზუსტ ფასს დაგისახელებთ." შეკვეთას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'ზუსტ ფასს არ ასახელებ, სანამ ფართობი და დასუფთავების ტიპი არ დაზუსტდება. ასახელებ მხოლოდ შუალედს.',
      'დიდ ან უჩვეულო შეკვეთას (ოფისი, სარემონტო შემდგომი, კომერციული ობიექტი): სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრატორი პირველ რიგში დაგირეკავთ.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains:
      'რა შედის დასუფთავებაში, საწმენდი საშუალებები თქვენია თუ ჩვენი, რამდენ ხანს გრძელდება, მუდმივ აბონემენტზე ფასდაკლება, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი დასუფთავებისთვის: შეკვეთების მიღება 24/7',
      description:
        'AI ასისტენტი დასუფთავების კომპანიებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ასახელებს ფასთა შუალედს, იღებს შეკვეთას და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი დასუფთავებისთვის',
      h1: 'კლიენტი წერს დილის 08:20-ზე.',
      h1Accent: 'შეკვეთა უკვე ფორმდება.',
      lead: 'დილით, სამსახურის წინ, კლიენტი მაშინ წერს, როცა სტუმრები საღამოს მოდიან და ბინა დღესვე უნდა დასუფთავდეს. AI ასისტენტი ავტომატურად პასუხობს, იღებს დასუფთავების ტიპს, ფართობს, სასურველ დროს, სახელსა და ნომერს, ადმინისტრატორი კი მალევე რეკავს და ბრიგადას აგზავნის.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'სოფო',
      chatRole: 'ბროლი, დემო კომპანიის ასისტენტი',
      chatGreeting:
        'მოგესალმებით! ბროლის ასისტენტი ვარ და მთელ თბილისში ვმუშაობთ. მითხარით რა ტიპის დასუფთავება და რომელი ფართობი გჭირდებათ, დანარჩენს მოვაგვარებ.',
      chatPlaceholder: 'ჰკითხეთ ტიპზე, ფართობსა და დღეზე...',
      chatChips: ['დღეს ბინის დასუფთავება მოასწრებთ?', 'საწმენდი საშუალებები თქვენია?', 'გენერალური დასუფთავება რა ღირს?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს დასუფთავების კომპანია კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ირჩევს კომპანიას',
          p: 'სამუშაო დღის ან სტუმრების დაანონსების შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ კომპანიას ერთდროულად',
          p: '«ხვალ თავისუფალი ხართ? სამოთახიანის დასუფთავება რა ღირს?» დააზუსტეთ ობიექტის ტიპი, ფართობი და სიხშირე, შემდეგ დაგეგმეთ შეფასების ზარი.',
        },
        {
          h: 'დასუფთავების მოთხოვნას ობიექტის შეფასება უნდა მოჰყვეს',
          p: 'ფასის დასაზუსტებლად საჭიროა ობიექტის ტიპი, ფართობი და სიხშირე. ეს დეტალები შეაგროვეთ და შემდეგ შეფასების ზარი ან ადგილზე ვიზიტი დაგეგმეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ფასზე კითხვას სწორად უმკლავდება',
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს ფართობის მიხედვით, ზუსტ შეფასებას კი ადმინისტრატორს ანდობს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს შეკვეთის დეტალებს',
          p: 'დასუფთავების ტიპი, ფართობი, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ფართობს აზუსტებს, ზუსტ ფასს ასახელებს და შეკვეთა თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს შეკვეთას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'დიდი ობიექტი, სარემონტო შემდგომი, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი კომპანიისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი დასუფთავების კომპანიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს ფართობის მიხედვით და ზუსტი შეფასებისთვის ადმინისტრატორთან აკავშირებს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი კომპანიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი დასუფთავებისთვის: რატომ სწორედ ახლა',
            p: "კლიენტების უმეტესობა დასუფთავების კომპანიას ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ ან სტუმრების მოსვლის წინ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი დასუფთავებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში დასუფთავების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'შეკვეთა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და დასუფთავების ასისტენტს შორის შეკვეთის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას დასუფთავების ტიპის, ფართობის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კომპანიის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'გამჭვირვალე პასუხები ფასზე',
            p: 'დასუფთავებაში ფასი ფართობსა და დასუფთავების ტიპზეა დამოკიდებული, ამიტომ დაუშვებელია, ბოტმა ზუსტი თანხა გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ კომპანიის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, ზუსტ შეფასებას კი ადმინისტრატორს ანდობს, რომელიც ფართობს დააზუსტებს. ეს მიდგომა კლიენტისთვის გამჭვირვალეა, კომპანიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი დასუფთავებისთვის?',
        aeoBody:
          'AI ასისტენტი დასუფთავებისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს ფართობის მიხედვით, აგროვებს დასუფთავების ტიპს, ფართობს, სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კომპანიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'what-to-automate-first-small-business', label: 'რა ავტომატიზირდეს პირველ რიგში მცირე ბიზნესში' },
        { slug: 'ai-booking-appointment-automation', label: 'ჯავშნებისა და ჩაწერების ავტომატიზაცია AI-ით' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for cleaning services: order capture 24/7',
      description:
        'AI assistant for cleaning companies in Tbilisi. Answers clients at night, quotes the price range, takes the order and hands it to your administrator.',
      eyebrow: 'AI assistant for cleaning services',
      h1: 'A client writes at 08:20 in the morning.',
      h1Accent: 'The order is already taking shape.',
      lead: 'Early in the morning, before work, the client writes because guests arrive in the evening and the apartment has to be cleaned today. The AI assistant replies automatically, collects the cleaning type, area, preferred time, name and phone, and the administrator calls back shortly and sends the crew.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Sopo',
      chatRole: 'Broli, demo company assistant',
      chatGreeting: 'Hello! I am the Broli assistant and we work across all of Tbilisi. Tell me the cleaning type and the area you need, and I will handle the rest.',
      chatPlaceholder: 'Ask about the type, area or day...',
      chatChips: ['Can you fit in an apartment clean today?', 'Do you bring the cleaning supplies?', 'How much is a deep clean?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a cleaning company loses clients',
      pains: [
        { h: 'Clients choose a company in the evening', p: 'After work or once guests are announced, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message two or three companies at once', p: '"Are you free tomorrow? How much for a three-room apartment?" Clarify the property type, area and frequency, then arrange an assessment call.' },
        { h: 'A cleaning request needs a property assessment', p: 'Clarify the property type, area and service frequency, then arrange a call or on-site assessment.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range by area and leaves the exact estimate to the administrator. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the order', p: 'Cleaning type, area, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms the area, quotes the exact price, and the order is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. The exact price depends on the area, so it says the administrator will clarify.' },
        { h: 'It does not confirm orders by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands hard cases to a human', p: 'A large site, a post-renovation job, an unusual request: the bot takes a phone number and passes the case to a person.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your company',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a cleaning company?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set by area and connects the client to the administrator for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your company, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for cleaning services: why right now',
            p: "Most clients pick a cleaning company from their phone, after working hours or just before guests arrive. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for cleaning services can answer at night using only the information you approve and hand complex requests to the team. The cleaning market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'An order, not just a chat',
            p: "The real difference between a simple chatbot and a cleaning assistant is the order logic. The assistant gathers the cleaning type, the area, the preferred time, the name and the phone number, creates a provisional booking and hands it to the administrator in the morning to confirm. This way the company schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Transparent answers on price',
            p: 'In cleaning the price depends on the area and the type of work, so the bot should use approved information and route exact details to the team. A properly built assistant uses only the information the company provided, answers with price ranges and leaves the exact estimate to the administrator, who will confirm the area. This approach is transparent for the client and reputationally calm for the company.',
          },
        ],
        aeoH: 'What does the AI assistant for cleaning services do?',
        aeoBody:
          'The AI assistant for cleaning services is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes service price ranges by area, collects the cleaning type, area, name, phone number and preferred time, creates a provisional booking and hands it to the administrator in the morning. Uses approved price ranges, leaves the precise estimate to a person and passes complex cases to a human. For the company the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'what-to-automate-first-small-business', label: 'What to automate first in a small business' },
        { slug: 'ai-booking-appointment-automation', label: 'AI booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для клининга: приём заказов 24/7',
      description:
        'AI-ассистент для клининговых компаний в Тбилиси. Отвечает клиентам ночью, называет вилку цен, принимает заказ и передаёт администратору. Демо проверяется по согласованной информации и правилам.',
      eyebrow: 'AI-ассистент для клининга',
      h1: 'Клиент пишет в 08:20 утра.',
      h1Accent: 'Заказ уже оформляется.',
      lead: 'Утром, перед работой, клиент пишет, потому что вечером приходят гости и квартиру нужно убрать сегодня же. AI-ассистент отвечает автоматически, принимает тип уборки, площадь, удобное время, имя и номер, а администратор вскоре перезванивает и отправляет бригаду.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Софо',
      chatRole: 'Броли, ассистент демо-компании',
      chatGreeting: 'Здравствуйте! Я ассистент Броли, мы работаем по всему Тбилиси. Скажите тип уборки и площадь, а остальное я возьму на себя.',
      chatPlaceholder: 'Спросите о типе, площади или дне...',
      chatChips: ['Успеете убрать квартиру сегодня?', 'Моющие средства ваши?', 'Сколько стоит генеральная уборка?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где клининг теряет клиентов',
      pains: [
        { h: 'Клиент выбирает компанию вечером', p: 'После работы или когда объявили гостей, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в две-три компании одновременно', p: '«Свободны завтра? Сколько уборка трёхкомнатной?» Уточните тип объекта, площадь и частоту уборки, затем назначьте звонок для оценки.' },
        { h: 'Запрос на уборку требует оценки объекта', p: 'Уточните тип объекта, площадь и частоту уборки, затем назначьте звонок или выездную оценку.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку по площади, а точную оценку оставляет администратору. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает заказ', p: 'Тип уборки, площадь, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, уточняет площадь, называет точную цену, и заказ в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает заказ сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Сложное передаёт человеку', p: 'Большой объект, уборка после ремонта, нестандартная просьба: бот берёт номер и передаёт случай человеку.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей компании',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для клининговой компании?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку по площади и связывает клиента с администратором за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей компании, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для клининга: почему именно сейчас',
            p: "Большинство клиентов выбирают клининговую компанию с телефона, после рабочих часов или перед приходом гостей. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для клининга отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок клининга в Тбилиси перегружен, а решение принимается быстро.",
          },
          {
            h: 'Заказ, а не просто переписка',
            p: "Главное отличие простого чатбота от клинингового ассистента это логика заказа. Ассистент собирает тип уборки, площадь, удобное время, имя и номер телефона, создаёт предварительную бронь и утром передаёт её администратору на подтверждение. Так график компании остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Прозрачные ответы о цене',
            p: 'В клининге цена зависит от площади и типа работы, поэтому бот не должен выдумывать точную сумму. Правильно настроенный ассистент использует только данные, которые передала компания, отвечает вилками цен и оставляет точную оценку администратору, который уточнит площадь. Такой подход прозрачен для клиента и репутационно спокоен для компании.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для клининга?',
        aeoBody:
          "AI-ассистент для клининга это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги по площади, собирает тип уборки, площадь, имя, номер и удобное время, создаёт предварительную бронь и утром передаёт её администратору. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для клининга вечерние и выходные обращения можно передавать команде по согласованным правилам; итог подтверждает человек.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'what-to-automate-first-small-business', label: 'Что автоматизировать в малом бизнесе в первую очередь' },
        { slug: 'ai-booking-appointment-automation', label: 'Автоматизация записи и бронирований на AI' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
