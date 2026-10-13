import type { NicheEntry } from '../types';

/**
 * Home services (სახლის სერვისები): AC install, plumbing, electrical and solar.
 * A quote/call-out niche: the exact price is set only after an on-site
 * inspection, so the bot collects what broke plus name, phone and address,
 * schedules a provisional call-out, and hands the morning confirmation to a human.
 */
export const homeservices: NicheEntry = {
  key: 'homeservices',
  slug: 'ai-chatbot-saxlis-servisebistvis',
  serviceType: 'AI Chatbot for Home Services',
  persona: {
    botName: 'რეზი',
    brand: 'სახლის ოსტატი',
    bizType: 'სახლის სერვისების კომპანია',
    hours: 'ორშაბათი-შაბათი 09:00-20:00, კვირას დასვენება',
    address: 'თბილისი და შემოგარენი. ოსტატი ადგილზე გამოდის.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: გამოძახება და დიაგნოსტიკა 30-60 ლარი; კონდიციონერის მონტაჟი 100-300; სანტექნიკისა და ელექტრობის სამუშაოები ფასდება სამუშაოს მიხედვით; მზის პანელების მონტაჟი ფასდება ადგილზე დათვალიერების შემდეგ. გამოძახებას წინასწარ ვნიშნავთ. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს ოსტატის გამოძახება უნდა, ჯერ ჰკითხე რა სახის სამუშაოა (კონდიციონერი, სანტექნიკა, ელექტრობა თუ მზის პანელი) და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "წინასწარ ჩაგნიშნეთ გამოძახება [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად და ოსტატს გამოგიგზავნით." გამოძახებას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'ზუსტ ფასს არასოდეს ასახელებ ადგილზე დათვალიერებამდე, მხოლოდ შუალედს ეუბნები.',
      'სასწრაფო შემთხვევაზე (მილის გახეთქვა, ელექტრობის გათიშვა): სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრატორი პრიორიტეტულ გამოძახებას პირველ რიგში დაგინიშნავთ.',
    ],
    customerNoun: 'მფლობელი',
    followupDomains: 'გამოძახების დრო, გამოძახების საფასური, სამუშაოს გარანტია, რომელ უბნებში გადიხართ, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი სახლის სერვისებისთვის: გამოძახებების მიღება 24/7',
      description:
        'AI ასისტენტი სახლის სერვისების კომპანიებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ნიშნავს ოსტატის გამოძახებას და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი სახლის სერვისებისთვის',
      h1: 'მფლობელი წერს 19:45-ზე.',
      h1Accent: 'გამოძახება უკვე იწერება.',
      lead: 'სიცხეში კონდიციონერი გაითიშა და მფლობელი ტექნიკურ დახმარებას ეძებს. AI ასისტენტი პასუხობს ავტომატურად, იწერს რა გაფუჭდა, მისამართს, მოწყობილობის ტიპს, სახელსა და ნომერს, შემდეგ კი წინასწარ გამოძახებას ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'რეზი',
      chatRole: 'სახლის ოსტატი, დემო კომპანიის ასისტენტი',
      chatGreeting:
        'სახლის ოსტატის ასისტენტი ვარ. მითხარით რა გაფუჭდა, კონდიციონერი, სანტექნიკა თუ ელექტრობა, და ოსტატის გამოძახებას მაშინვე დაგინიშნავთ, საღამოსაც.',
      chatPlaceholder: 'ჰკითხეთ გამოძახებაზე, ფასზე ან სამუშაოზე...',
      chatChips: ['კონდიციონერი გაითიშა, დღეს ოსტატი გამოვა?', 'გამოძახება და დიაგნოსტიკა რა ღირს?', 'რომელ უბნებში გადიხართ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სახლის სერვისი კლიენტებს',
      pains: [
        {
          h: 'გაფუჭება საღამოს ხდება',
          p: 'კონდიციონერი, მილი ან ელექტრობა ხშირად სამუშაო საათების შემდეგ ფუჭდება. კლიენტი პირდაპირ Instagram-ში ან Messenger-ში წერს, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს რამდენიმე კომპანიას ერთდროულად',
          p: '«კონდიციონერის მონტაჟი რა ღირს? ხვალ ოსტატს გამომიგზავნით?» დააზუსტეთ მონტაჟის მისამართი და სასურველი დრო, შემდეგ გამოძახების მოთხოვნა ადმინისტრატორს გადასცით.',
        },
        {
          h: 'ტექნიკურ პრობლემას ადგილზე შეფასება უნდა მოჰყვეს',
          p: 'საჭირო სამუშაო, მისამართი და სასურველი დრო დააზუსტეთ, შემდეგ მოთხოვნა ადმინისტრატორს გადასცით დასადასტურებლად.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და ადგილზე დათვალიერებაზე იწვევს ზუსტი შეფასებისთვის. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს გამოძახების დეტალებს',
          p: 'რა სამუშაოა, სასურველი დღე და დრო, სახელი, ტელეფონი, მისამართი. სურვილისამებრ წინასწარი ჩანიშვნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და ოსტატს გზავნის.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს გამოძახებას',
          p: 'ჩანიშვნა ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'სასწრაფო დატბორვა, ელექტრობის გათიშვა, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს, ოსტატობას არ იჩემებს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი სახლის სერვისისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და ადგილზე დათვალიერებაზე იწვევს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
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
            h: 'AI ჩატბოტი სახლის სერვისებისთვის: რატომ სწორედ ახლა',
            p: "კლიენტების უმეტესობა ოსტატს ტელეფონიდან ეძებს, სამუშაო საათების შემდეგ, ხშირად სწორედ მაშინ, როცა რაღაც გაფუჭდა. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი სახლის სერვისებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ოსტატების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'გამოძახება და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სახლის სერვისის ასისტენტს შორის გამოძახების ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას იმის შესახებ, თუ რა გაფუჭდა, სასურველ დროს, სახელს, ტელეფონსა და მისამართს, ქმნის წინასწარ ჩანიშვნას და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კომპანიის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ფასსა და სასწრაფო შემთხვევებზე',
            p: 'სახლის სერვისში დაუშვებელია, ბოტმა ზუსტი ფასი დათვალიერებამდე გამოიგონოს, რადგან რეალური ღირებულება ადგილზე დათვალიერების შემდეგ დგინდება. სწორად აწყობილი ასისტენტი მხოლოდ კომპანიის მიწოდებულ შუალედებს ასახელებს, სასწრაფო შემთხვევაში კი, როგორიცაა დატბორვა ან ელექტრობის გათიშვა, კლიენტს პრიორიტეტულ გამოძახებას სთავაზობს და საუბარს მაშინვე ადამიანს გადასცემს. ეს მიდგომა კლიენტისთვის უსაფრთხოა, კომპანიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი სახლის სერვისებისთვის?',
        aeoBody:
          'AI ასისტენტი სახლის სერვისებისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, კლიენტს ადგილზე დათვალიერებაზე იწვევს, იწერს რა გაფუჭდა, სახელს, ნომერსა და მისამართს, ქმნის წინასწარ ჩანიშვნას და დილით ადმინისტრატორს გადასცემს. ის არ ასახელებს ზუსტ ფასს დათვალიერებამდე, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კომპანიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის გამოძახებები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'what-to-automate-first-small-business', label: 'რა ავტომატიზირდეს პირველად მცირე ბიზნესში' },
        { slug: 'cost-of-missed-whatsapp-lead-georgia-automation-2026', label: 'გამოტოვებული WhatsApp შეტყობინების ფასი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for home services: call-out capture 24/7',
      description:
        'AI assistant for home-services companies in Tbilisi. Answers clients at night, schedules the call-out and hands it to your administrator.',
      eyebrow: 'AI assistant for home services',
      h1: 'An owner writes at 19:45.',
      h1Accent: 'The call-out is already being booked.',
      lead: 'The AC cuts out in the heat and the owner needs technical help. The AI assistant replies automatically, records what broke, the address, equipment type, name and phone, then hands a provisional call-out request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Rezi',
      chatRole: 'Sakhlis Ostati, demo company assistant',
      chatGreeting: 'I am the Sakhlis Ostati assistant. Tell me what broke, the AC, plumbing or wiring, and I will book a technician call-out right away, evenings included.',
      chatPlaceholder: 'Ask about a call-out, price or the job...',
      chatChips: ['The AC just died, can a technician come today?', 'How much is the call-out and diagnostic?', 'Which districts do you cover?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a home-services company loses clients',
      pains: [
        { h: 'Things break in the evening', p: 'The AC, a pipe or the wiring often fails after working hours. The client writes straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message several companies at once', p: '"How much is an AC installation? Can a technician come tomorrow?" Clarify the installation address and preferred time, then hand the call-out request to your administrator.' },
        { h: 'A technical problem needs an on-site assessment', p: 'Clarify the requested work, address and preferred time, then hand the request to your administrator for confirmation.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to an on-site inspection for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the call-out details', p: 'What broke, preferred day and time, name, phone, address. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and sends the technician.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. The exact price is named by the technician after the on-site inspection.' },
        { h: 'It does not confirm call-outs by itself', p: 'A slot is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands hard cases to a human', p: 'An urgent flood, a power cut, an unusual request: the bot takes a phone number and passes the case to a person. It does not play technician.' },
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
        { q: 'How fast can the assistant go live for a home-services company?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set and invites the client to an on-site inspection for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your company, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for home services: why right now',
            p: "Most clients look for a technician from their phone, after working hours, often at the exact moment something has broken. They write on Instagram and Messenger and expect an answer within minutes. After the agreed activation, the AI chatbot for home services can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the technician market is crowded and the decision is made fast.",
          },
          {
            h: 'A call-out, not just a chat thread',
            p: "The main difference between a simple chatbot and a home-services assistant is the call-out logic. The assistant collects what broke, the preferred time, the name, phone and address, creates a provisional booking and hands it to the administrator in the morning for confirmation. This keeps the company schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on price and emergencies',
            p: 'In home services the bot should use approved information and route exact details to the team. A well-built assistant names only the ranges the company provided, and in an emergency such as a flood or a power cut it offers the client a priority call-out and passes the conversation straight to a human. This approach is safe for the client and reputationally calm for the company.',
          },
        ],
        aeoH: 'What does the AI assistant for home services do?',
        aeoBody:
          'The AI assistant for home services is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It names the service price ranges, invites the client to an on-site inspection, notes what broke, the name, number and address, creates a provisional booking and hands it to the administrator in the morning. It does not name an exact price before the inspection, uses only approved information; unlisted details are confirmed by the team. For the company the result is simple: evening and weekend call-outs can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'what-to-automate-first-small-business', label: 'What to automate first in a small business' },
        { slug: 'cost-of-missed-whatsapp-lead-georgia-automation-2026', label: 'The cost of a missed WhatsApp lead' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для домашних сервисов: приём вызовов 24/7',
      description:
        'AI-ассистент для компаний домашних сервисов в Тбилиси. Отвечает клиентам ночью, называет вилку цен, назначает вызов мастера и передаёт администратору.',
      eyebrow: 'AI-ассистент для домашних сервисов',
      h1: 'Владелец пишет в 19:45.',
      h1Accent: 'Вызов уже оформляется.',
      lead: 'В жару отключается кондиционер, и владельцу нужна техническая помощь. AI-ассистент отвечает автоматически, записывает неисправность, адрес, тип оборудования, имя и номер, затем передаёт администратору предварительный вызов.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Рези',
      chatRole: 'Сахлис Остати, ассистент демо-компании',
      chatGreeting: 'Я ассистент компании Сахлис Остати. Скажите, что сломалось, кондиционер, сантехника или электрика, и я сразу назначу вызов мастера, даже вечером.',
      chatPlaceholder: 'Спросите о вызове, цене или работе...',
      chatChips: ['Кондиционер отключился, мастер сможет сегодня приехать?', 'Сколько стоит вызов и диагностика?', 'В каких районах вы работаете?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где компания домашних сервисов теряет клиентов',
      pains: [
        { h: 'Поломки случаются вечером', p: 'Кондиционер, труба или проводка часто выходят из строя после рабочих часов. Клиент пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в несколько компаний сразу', p: '«Сколько стоит монтаж кондиционера? Мастер сможет завтра?» Уточните адрес монтажа и удобное время, затем передайте запрос администратору.' },
        { h: 'Техническая проблема требует выездной оценки', p: 'Уточните нужные работы, адрес и удобное время, затем передайте запрос администратору на подтверждение.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на осмотр на месте для точной оценки. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает детали вызова', p: 'Что сломалось, желаемый день и время, имя, телефон, адрес. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает и отправляет мастера.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает вызов сам', p: 'Слот всегда предварительный, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Сложное передаёт человеку', p: 'Срочный потоп, отключение электричества, нестандартная просьба: бот берёт номер и передаёт случай человеку. В мастера не играет.' },
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
        { q: 'Как быстро ассистент запускается для домашних сервисов?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на осмотр на месте за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей компании, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для домашних сервисов: почему именно сейчас',
            p: "Большинство клиентов ищут мастера с телефона, после рабочих часов, часто ровно тогда, когда что-то сломалось. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для домашних сервисов отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок мастеров перегружен, и решение принимается быстро.",
          },
          {
            h: 'Вызов, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента домашних сервисов это логика вызова. Ассистент собирает информацию о том, что сломалось, желаемое время, имя, телефон и адрес, создаёт предварительную запись и утром передаёт администратору на подтверждение. Так график компании остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы о цене и срочных случаях',
            p: 'В домашних сервисах недопустимо, чтобы бот выдумывал точную цену до осмотра, потому что реальная стоимость определяется после визита на место. Правильно настроенный ассистент называет только предоставленные компанией вилки, а в срочном случае, таком как потоп или отключение электричества, предлагает клиенту приоритетный вызов и сразу передаёт разговор человеку. Такой подход безопасен для клиента и репутационно спокоен для компании.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для домашних сервисов?',
        aeoBody:
          'AI-ассистент для домашних сервисов это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги, приглашает клиента на осмотр на месте, записывает что сломалось, имя, номер и адрес, создаёт предварительную запись и утром передаёт администратору. Он не называет точную цену до осмотра, работает только по утверждённой информации; неизвестные детали уточняет команда. Для компании результат простой: вечерние и выходные вызовы можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'what-to-automate-first-small-business', label: 'Что автоматизировать первым в малом бизнесе' },
        { slug: 'cost-of-missed-whatsapp-lead-georgia-automation-2026', label: 'Цена упущенного лида в WhatsApp' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
