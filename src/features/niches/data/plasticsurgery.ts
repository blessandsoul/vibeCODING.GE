import type { NicheEntry } from '../types';

/**
 * Plastic and cosmetic surgery clinics (პლასტიკური ქირურგია). The demo persona
 * is a generic aesthetic surgery clinic (ESTETIKA Tbilisi); the landing copy is
 * tuned to the plastic surgery keyword and the medical tourism angle (RU/EN
 * patients), never reused from the dental pilot.
 */
export const plasticsurgery: NicheEntry = {
  key: 'plasticsurgery',
  slug: 'ai-chatbot-plastikuri-qirurgiistvis',
  serviceType: 'AI Chatbot for Plastic and Cosmetic Surgery Clinics',
  persona: {
    botName: 'ეკა',
    brand: 'ესთეტიკა თბილისი',
    bizType: 'პლასტიკური და ესთეტიკური ქირურგიის კლინიკა',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: საკონსულტაციო შეხვედრა 50-150 ლარი; რინოპლასტიკა, ბლეფაროპლასტიკა, ლიპოსაქცია, მამოპლასტიკა: ზუსტი ღირებულება კონსულტაციაზე დგინდება, ფასთა შუალედი მხოლოდ ორიენტირისთვისაა. გადახდა: ნაღდი, ბარათი, ოპერაციებზე განვადება.',
    booking:
      'როცა პაციენტს კონსულტაციაზე ჩაწერა უნდა, ჯერ ჰკითხე რომელი მიმართულება აინტერესებს და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ კონსულტაციაზე [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." კონსულტაციას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ და შედეგს არ ჰპირდები.',
      'ოპერაციის შესახებ გადაწყვეტილებას ქირურგი კონსულტაციაზე იღებს: სამედიცინო კითხვა ადამიანს გადაეცი.',
    ],
    customerNoun: 'პაციენტი',
    followupDomains:
      'რეაბილიტაციის ვადა, ანესთეზიის ტიპი, ქირურგის გამოცდილება, ოპერაციამდე საჭირო ანალიზები, შედეგის ხანგრძლივობა, განვადების პირობები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი პლასტიკური ქირურგიისთვის: კონსულტაციების ჩაწერა 24/7',
      description:
        'AI ასისტენტი პლასტიკური და ესთეტიკური ქირურგიის კლინიკებისთვის თბილისში. პასუხობს პაციენტებს ღამითაც, იწერს კონსულტაციას და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი პლასტიკური ქირურგიისთვის',
      h1: 'პაციენტი 23:25-ზე წერს.',
      h1Accent: 'კონსულტაცია უკვე იწერება.',
      lead: 'გადაწყვეტილება, რომელსაც თვეობით ფიქრობდა, პაციენტმა 23:25-ზე მიიღო და კონსულტაციის შესახებ კლინიკას წერს. AI ასისტენტი ავტომატურად პასუხობს, აგროვებს სახელს, ნომერსა და სასურველ დროს, დილით კი ადმინისტრატორი ადასტურებს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ეკა',
      chatRole: 'ესთეტიკა თბილისი, დემო კლინიკის ასისტენტი',
      chatGreeting:
        'მე ეკა ვარ, ესთეტიკა თბილისის ასისტენტი. თუ დიდი ხანია ფიქრობთ, მშვიდად მიწერეთ მიმართულებაზე ან საორიენტაციო ღირებულებაზე, ნებისმიერ დროს გიპასუხებთ და ქირურგთან კონსულტაციაზე ჩაგწერთ.',
      chatPlaceholder: 'ჰკითხეთ მიმართულებაზე, ღირებულებაზე ან კონსულტაციაზე...',
      chatChips: ['დიდი ხანია ვფიქრობ რინოპლასტიკაზე, კონსულტაცია მინდა', 'ლიპოსაქციის შემდეგ რეაბილიტაცია რამდენ ხანს გრძელდება?', 'კონსულტაცია ამ კვირაში შესაძლებელია?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს პლასტიკური ქირურგია პაციენტებს',
      pains: [
        {
          h: 'პაციენტი საღამოს, მარტო იღებს გადაწყვეტილებას',
          p: 'ესთეტიკური ოპერაცია პირადი გადაწყვეტილებაა. პაციენტი საღამოს ეძებს, ტელეფონიდან წერს Instagram-ში ან Messenger-ში, როცა თქვენი კლინიკა უკვე დაკეტილია.',
        },
        {
          h: 'ერთდროულად რამდენიმე კლინიკას წერს',
          p: '«რინოპლასტიკა რა ღირს? კონსულტაცია როდის შეიძლება?» დააზუსტეთ პროცედურის მიზანი და სასურველი დრო, შემდეგ შესთავაზეთ ქირურგის კონსულტაცია.',
        },
        {
          h: 'ოპერაციის კითხვას ქირურგის კონსულტაცია უნდა მოჰყვეს',
          p: 'პროცედურის შესახებ შეტყობინებაში დააზუსტეთ პაციენტის მიზანი და სასურველი დრო, შემდეგ კი ქირურგის კონსულტაცია და საჭირო წინასწარი კვლევების სია გაუგზავნეთ.',
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
          p: 'ასახელებს მხოლოდ საორიენტაციო შუალედს და კონსულტაციაზე იწვევს, სადაც ქირურგი ზუსტ ღირებულებას განსაზღვრავს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სასურველი მიმართულება, დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და პაციენტი კონსულტაციის გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს კონსულტაციას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'სამედიცინო კითხვას ადამიანს გადასცემს',
          p: 'დიაგნოზი, ოპერაციის შესაძლებლობა, ჯანმრთელობის დეტალები: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ქირურგს გადასცემს, ექიმობას არ იჩემებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი კლინიკისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი პლასტიკური ქირურგიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება მიმართულებების სია, საორიენტაციო შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და პაციენტს იმავე ენაზე პასუხობს. სამედიცინო ტურიზმის პაციენტისთვის ეს გადამწყვეტია.',
        },
        {
          q: 'რა ხდება, როცა პაციენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს მხოლოდ საორიენტაციო შუალედს და კონსულტაციაზე იწვევს, სადაც ქირურგი ზუსტ ღირებულებას განსაზღვრავს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი კლინიკის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი პლასტიკური ქირურგიისთვის: რატომ სწორედ ახლა',
            p: "ესთეტიკურ ოპერაციაზე გადაწყვეტილება პირადი და ხანგრძლივია. პაციენტი კლინიკას ხშირად საღამოს, მარტო ეძებს, წერს Instagram-სა და Messenger-ში და სწრაფ პასუხს ელოდება. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი პლასტიკური ქირურგიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ესთეტიკური ქირურგიის ბაზარი გადატვირთულია, სამედიცინო ტურიზმის პაციენტი კი კიდევ უფრო სწრაფ რეაქციას მოითხოვს.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და პლასტიკური ქირურგიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი მიმართულების, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს კონსულტაციაზე და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კლინიკის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები სამედიცინო თემებზე',
            p: "პლასტიკურ ქირურგიაში დაუშვებელია, ბოტმა დიაგნოზი დასვას, შედეგი დაჰპირდეს ან ზუსტი ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ კლინიკის მიწოდებულ საორიენტაციო ინფორმაციას იყენებს, ოპერაციის შესახებ გადაწყვეტილებას კი მთლიანად ქირურგსა და კონსულტაციას უტოვებს. საბოლოო გადაწყვეტილებას ქირურგი იღებს კონსულტაციისა და შეთანხმებული განხილვის შემდეგ.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი პლასტიკური ქირურგიისთვის?',
        aeoBody:
          'AI ასისტენტი პლასტიკური ქირურგიისთვის არის ჩატბოტი, რომელიც პაციენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს მიმართულებების საორიენტაციო შუალედებს, პაციენტს კონსულტაციაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, არ ჰპირდება შედეგს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კლინიკისთვის შედეგი მარტივია: საღამოს, შაბათ-კვირისა და უცხოელი პაციენტების მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI სამედიცინო კლინიკებისთვის: გზამკვლევი' },
        { slug: 'voice-agent-clinic-reception', label: 'ხმოვანი ასისტენტი კლინიკის რეგისტრატურისთვის' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს პაციენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for plastic surgery clinics: consultation booking 24/7',
      description:
        'AI assistant for plastic and cosmetic surgery clinics in Tbilisi. Answers patients at night, books the consultation and hands it to your administrator.',
      eyebrow: 'AI assistant for plastic surgery clinics',
      h1: 'A patient writes at 23:25.',
      h1Accent: 'The consultation is already being booked.',
      lead: 'The patient makes a decision she has weighed for months at 23:25 and writes to a clinic about a consultation. The AI assistant replies automatically, collects the name, phone and preferred time, and in the morning your administrator confirms.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Eka',
      chatRole: 'ESTETIKA Tbilisi, demo clinic assistant',
      chatGreeting: 'I am Eka, the ESTETIKA Tbilisi assistant. If you have been considering this for a while, just ask me about a procedure or an orientation cost, I reply at any hour and book you a consultation with the surgeon.',
      chatPlaceholder: 'Ask about a procedure, cost or a consultation...',
      chatChips: ['I have been thinking about rhinoplasty for a long time, I want a consultation', 'How long is recovery after liposuction?', 'Is a consultation possible this week?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a plastic surgery clinic loses patients',
      pains: [
        { h: 'Patients decide in the evening, privately', p: 'An aesthetic operation is a personal decision. The patient searches in the evening, writes from the phone into Instagram or Messenger, when your clinic is already closed.' },
        { h: 'They message two or three clinics at once', p: '"How much is rhinoplasty? When is a consultation possible?" Clarify the procedure goal and preferred timing, then offer a surgeon consultation.' },
        { h: 'A surgery question needs a surgeon consultation', p: 'Clarify the goal described by the patient and preferred timing, then send the surgeon consultation option and any required pre-visit tests.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'It quotes only the orientation range and invites to a consultation, where the surgeon sets the exact cost. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the booking', p: 'Preferred procedure, day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the patient is on the consultation schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information; results stay with the specialist', p: 'It answers only from the orientation data you provided. It promises no result, and on an unknown question it honestly says the surgeon will clarify.' },
        { h: 'It does not confirm consultations by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands medical questions to a human', p: 'Diagnosis, whether an operation is possible, health details: the bot takes a phone number and passes the case to the surgeon. It does not play doctor.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your clinic',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a plastic surgery clinic?', a: 'Timing depends on the agreed scope: we need your list of procedures, orientation ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind. For a medical-tourism patient this is decisive.' },
        { q: 'What happens when a patient asks the price?', a: 'The bot quotes only the orientation range and invites the patient to a consultation, where the surgeon sets the exact cost. It uses only approved information; unlisted details are confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your clinic, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for plastic surgery clinics: why now',
            p: "The decision to have an aesthetic operation is personal and slow. The patient often searches in the evening, alone, writes into Instagram and Messenger and expects a fast reply. After the agreed activation, the AI chatbot for a plastic surgery clinic can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the aesthetic surgery market is crowded, and the medical-tourism patient demands an even faster reaction.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The real difference between a simple chatbot and a plastic surgery assistant is the booking logic. The assistant gathers the desired procedure, time, name and phone, creates a provisional consultation slot and hands it to the administrator in the morning for confirmation. That way the clinic schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on medical topics',
            p: "In plastic surgery it is unacceptable for a bot to make a diagnosis, promise a result or invent an exact price. A properly configured assistant uses only the orientation information the clinic supplied and leaves the decision about an operation entirely to the surgeon and the consultation. The surgeon and consultation keep the final decision under human review and agreed rules.",
          },
        ],
        aeoH: 'What does an AI assistant for plastic surgery do?',
        aeoBody:
          'An AI assistant for plastic surgery is a chatbot that answers patient messages in Messenger, Instagram, WhatsApp and on the site, at any hour of the day or night. It quotes orientation ranges for procedures, invites the patient to a consultation, records the name, phone and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not make a diagnosis, does not promise a result, uses only approved information; unlisted details are confirmed by the team. For the clinic the outcome is simple: evening, weekend and foreign-patient inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI for medical clinics: the guide' },
        { slug: 'voice-agent-clinic-reception', label: 'Voice agent for clinic reception' },
      ],
      ctaLead: 'See it answer your own patients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для пластической хирургии: запись на консультацию 24/7',
      description:
        'AI-ассистент для клиник пластической и эстетической хирургии в Тбилиси. Отвечает пациентам ночью, записывает на консультацию и передаёт администратору.',
      eyebrow: 'AI-ассистент для пластической хирургии',
      h1: 'Пациент пишет в 23:25.',
      h1Accent: 'Консультация уже записывается.',
      lead: 'Решение, которое пациент обдумывал месяцами, он принимает в 23:25 и пишет в клинику о консультации. AI-ассистент отвечает автоматически, собирает имя, номер и удобное время, а утром администратор подтверждает.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Эка',
      chatRole: 'Эстетика Тбилиси, ассистент демо-клиники',
      chatGreeting: 'Я Эка, ассистент клиники Эстетика Тбилиси. Если вы давно об этом думаете, спокойно спросите о направлении или ориентировочной стоимости, отвечу в любое время и запишу на консультацию к хирургу.',
      chatPlaceholder: 'Спросите о направлении, стоимости или консультации...',
      chatChips: ['Давно думаю о ринопластике, хочу консультацию', 'Сколько длится восстановление после липосакции?', 'Консультация на этой неделе возможна?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где пластическая хирургия теряет пациентов',
      pains: [
        { h: 'Пациент решает вечером, наедине', p: 'Эстетическая операция это личное решение. Пациент ищет вечером, пишет с телефона в Instagram или Messenger, когда ваша клиника уже закрыта.' },
        { h: 'Пишет в две-три клиники одновременно', p: '«Сколько стоит ринопластика? Когда возможна консультация?» Уточните цель процедуры и желаемые сроки, затем предложите консультацию хирурга.' },
        { h: 'Вопрос об операции требует консультации хирурга', p: 'Уточните цель пациента и желаемые сроки, затем отправьте вариант консультации хирурга и список нужных анализов до визита.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет только ориентировочную вилку и приглашает на консультацию, где хирург определит точную стоимость. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Желаемое направление, день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, пациент в графике консультаций.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает консультацию сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Медицинский вопрос передаёт человеку', p: 'Диагноз, возможность операции, детали здоровья: бот берёт номер и передаёт случай хирургу. В доктора не играет.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей клиники',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для пластической хирургии?', a: 'Сроки зависят от согласованного объёма: нужны список направлений, ориентировочные вилки и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же. Для пациента медицинского туризма это решающе.' },
        { q: 'Что происходит, когда пациент спрашивает цену?', a: 'Бот называет только ориентировочную вилку и приглашает на консультацию, где хирург определит точную стоимость. Цифру или результат, которые вы не утверждали, он называет только утверждённые диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей клинике, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для пластической хирургии: почему именно сейчас',
            p: "Решение об эстетической операции личное и небыстрое. Пациент часто ищет вечером, наедине, пишет в Instagram и Messenger и ждёт быстрого ответа. После согласованного включения AI-чатбот для клиники пластической хирургии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок эстетической хирургии перегружен, а пациент медицинского туризма требует ещё более быстрой реакции.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента пластической хирургии в логике записи. Ассистент собирает желаемое направление, время, имя и телефон, создаёт предварительную запись на консультацию и утром передаёт её администратору для подтверждения. Так график клиники остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на медицинские темы',
            p: "В пластической хирургии недопустимо, чтобы бот ставил диагноз, обещал результат или выдумывал точную цену. Правильно настроенный ассистент использует только ориентировочную информацию, которую предоставила клиника, а решение об операции полностью оставляет хирургу и консультации. Окончательное решение остаётся за хирургом и консультацией при согласованном человеческом рассмотрении.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для пластической хирургии?',
        aeoBody:
          'AI-ассистент для пластической хирургии это чатбот, который отвечает на сообщения пациентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет ориентировочные вилки по направлениям, приглашает пациента на консультацию, записывает имя, номер и удобное время, создаёт предварительную запись и утром передаёт администратору. Он не ставит диагноз, не обещает результат, работает только по утверждённой информации; неизвестные детали уточняет команда. Для клиники результат прост: вечерние, выходные и обращения иностранных пациентов можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI для медицинских клиник: гид' },
        { slug: 'voice-agent-clinic-reception', label: 'Голосовой агент для регистратуры клиники' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим пациентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
