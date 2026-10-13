import type { NicheEntry } from '../types';

/**
 * Auto service and detailing (ავტოსერვისი). The demo persona is a generic demo
 * auto service (AutoHub Tbilisi); the landing copy is tuned to the auto-service
 * keyword: evening breakdown inquiries, slot booking and "do you fix X, how much".
 * No real client is claimed in this niche; the proof stat is attributed generically.
 */
export const autoservice: NicheEntry = {
  key: 'autoservice',
  slug: 'ai-chatbot-avtoservisistvis',
  serviceType: 'AI Chatbot for Auto Service and Detailing',
  persona: {
    botName: 'გიორგი',
    brand: 'ავტოჰაბ თბილისი',
    bizType: 'ავტოსერვისი და დითეილინგი',
    hours: 'ორშაბათი-შაბათი 09:00-19:00, კვირას დასვენება',
    address: 'თბილისი. ავტომობილს ადგილზე ვიღებთ დიაგნოსტიკაზე.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: კომპიუტერული დიაგნოსტიკა 30-60 ლარი; ზეთის შეცვლა 40-120; სამუხრუჭე ხუნდების შეცვლა 80-250; სავალი ნაწილის შეკეთება ფასდება დათვალიერების შემდეგ; დითეილინგი (პოლირება და სალონის წმენდა) 80-300; საბურავის გამოცვლა 20-60. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს ჩაწერა უნდა, ჯერ ჰკითხე რა სერვისი სჭირდება და მანქანის მოდელი, შემდეგ რომელი დღე და დრო აწყობს, ბოლოს სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ჩაწერას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'ზუსტ ფასს არასოდეს ასახელებ დიაგნოსტიკამდე.',
      'რთულ ტექნიკურ შემთხვევაზე: სთხოვე ტელეფონი და უთხარი, რომ ხელოსანი პირველ რიგში დაგირეკავთ.',
    ],
    customerNoun: 'მძღოლი',
    followupDomains:
      'დიაგნოსტიკის ხანგრძლივობა, ნაწილი ადგილზეა თუ უნდა შეკვეთა, სამუშაოს გარანტია, დღესვე მიიღებთ თუ არა მანქანას, ევაკუატორი და გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ავტოსერვისისთვის: ჩაწერა და ფასები 24/7',
      description:
        'AI ასისტენტი ავტოსერვისისა და დითეილინგისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, იწერს მანქანას სერვისზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ავტოსერვისისთვის',
      h1: 'მძღოლი წერს დილის 08:10-ზე.',
      h1Accent: 'ადგილი დღესვე იჯავშნება.',
      lead: 'დილის 08:10, სამსახურის წინ: მანქანა უცნაურ ხმაურს იწყებს და მძღოლს დღესვე შეკეთება სჭირდება. სერვისი ჯერ არ გახსნილა, მაგრამ AI ასისტენტი პასუხობს ავტომატურად, არკვევს პრობლემას, იწერს მოდელს, ნომერსა და სასურველ დროს, შემდეგ კი ადმინისტრატორს გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'გიორგი',
      chatRole: 'ავტოჰაბ თბილისი, დემო ავტოსერვისის ასისტენტი',
      chatGreeting:
        'ავტოჰაბ თბილისი გისმენთ. აღწერეთ, რა ემართება მანქანას, გეტყვით ფასთა შუალედს და მოგძებნით თავისუფალ დროს დიაგნოსტიკაზე.',
      chatPlaceholder: 'ჰკითხეთ ხმაურზე, ფასზე ან დიაგნოსტიკის დროზე...',
      chatChips: ['მანქანამ უცნაური ხმაური დაიწყო, დღეს მიმიღებთ?', 'სამუხრუჭეების შეცვლა რამდენ ხანს გრძელდება?', 'რა ღირს კომპიუტერული დიაგნოსტიკა?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ავტოსერვისი კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ეძებს ავტოსერვისს',
          p: 'სამუშაო დღის ბოლოს, ხშირად გზაზევე, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი მიმღები უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ სერვისს ერთდროულად',
          p: '«სამუხრუჭეებს იცვლით? რა ღირს?» ჰკითხეთ მანქანის მოდელი და სიმპტომი, შემდეგ შესთავაზეთ დიაგნოსტიკის თავისუფალი დრო.',
        },
        {
          h: 'სერვისის პრობლემას დიაგნოსტიკის დრო უნდა მოჰყვეს',
          p: 'ხმაურის ან გამაფრთხილებელი ნათურის შესახებ შეტყობინებაში ჯერ მოდელი და სიმპტომები დააზუსტეთ, შემდეგ კი მომხმარებელს დიაგნოსტიკისთვის თავისუფალი დრო შესთავაზეთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და დიაგნოსტიკაზე იწერს ზუსტი შეფასებისთვის. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სერვისი, მანქანის მოდელი, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და მანქანა თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჩაწერას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ ტექნიკურ საკითხს ხელოსანს გადასცემს',
          p: 'უჩვეულო ხმა, გაურკვეველი გაუმართაობა, იშვიათი მოდელი: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ხელოსანს გადასცემს, თვითონ დიაგნოზს არ სვამს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი ავტოსერვისისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ავტოსერვისისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და დიაგნოსტიკაზე იწერს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი ავტოსერვისის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ავტოსერვისისთვის: რატომ სწორედ ახლა',
            p: "მძღოლების უმეტესობა ავტოსერვისს ტელეფონიდან ეძებს, ხშირად სწორედ მაშინ, როცა მანქანა უკვე გაფუჭდა, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ავტოსერვისისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ავტოსერვისების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ავტოსერვისის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი სერვისის, მანქანის მოდელის, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე სერვისის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ტექნიკურ საკითხებზე',
            p: 'ავტოსერვისში დაუშვებელია, ბოტმა ზუსტი ფასი დიაგნოსტიკამდე დაასახელოს ან გაუმართაობის მიზეზი გამოიცნოს. სწორად აწყობილი ასისტენტი მხოლოდ სერვისის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, რთული ტექნიკური შემთხვევისას კი საუბარს მაშინვე ხელოსანს გადასცემს. ეს მიდგომა კლიენტისთვის გასაგებია, სერვისისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ავტოსერვისისთვის?',
        aeoBody:
          'AI ასისტენტი ავტოსერვისისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, კლიენტს დიაგნოსტიკაზე იწერს, აფიქსირებს მანქანის მოდელს, სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ ასახელებს ზუსტ ფასს დიაგნოსტიკამდე, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ავტოსერვისისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-auto-dealers-georgia', label: 'AI ავტოდილერებისთვის' },
        { slug: 'ai-booking-appointment-automation', label: 'ჯავშნისა და ჩაწერის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for auto service: booking and prices 24/7',
      description:
        'AI assistant for auto service and detailing in Tbilisi. Answers customers at night, quotes the price range, books the car in and hands it to your administrator.',
      eyebrow: 'AI assistant for auto service',
      h1: 'A driver writes at 08:10.',
      h1Accent: 'A slot for today is already booking.',
      lead: 'At 08:10, before work, the car starts making a strange noise and the driver needs it fixed today. The service is not open yet, but the AI assistant replies automatically, clarifies the problem, records the model, phone and preferred time, then hands it to your administrator to confirm.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Giorgi',
      chatRole: 'AutoHub Tbilisi, demo auto service assistant',
      chatGreeting: 'AutoHub Tbilisi here. Tell me what the car is doing, and I will give you a price range and find a free diagnostic slot.',
      chatPlaceholder: 'Ask about a noise, a price or a diagnostic slot...',
      chatChips: ['My car started making a strange noise, can you take it today?', 'How long does a brake pad change take?', 'How much is a computer diagnostic?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where an auto service loses customers',
      pains: [
        { h: 'Customers look for a service in the evening', p: 'At the end of the workday, often right on the road, from the phone. They write straight into Instagram or Messenger, when your front desk is already closed.' },
        { h: 'They message two or three services at once', p: '"Do you replace brake pads? How much?" Ask for the car model and symptom, then offer an available diagnostic slot.' },
        { h: 'A service problem needs a diagnostic slot', p: 'For a noise or warning-light message, clarify the model and symptoms first, then offer an available time for diagnostics.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and books a diagnostic for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Service, car model, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the car is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. The exact price is set by the mechanic after the diagnostic.' },
        { h: 'It does not confirm bookings by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands hard technical cases to a mechanic', p: 'An unusual noise, an unclear fault, a rare model: the bot takes a phone number and passes the case to a person. It does not diagnose on its own.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your auto service',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for an auto service?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a customer asks the price?', a: 'The bot quotes the range you set and books a diagnostic for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your auto service, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'An AI chatbot for auto service: why now',
            p: "Most drivers look for a service from their phone, often right when the car has already broken down, after working hours. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for an auto service can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the auto-service market is crowded and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and an auto-service assistant is the booking logic. The assistant gathers the service needed, the car model, the time, the name and the phone number, creates a provisional booking and hands it to the administrator in the morning to confirm. That keeps the service schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on technical questions',
            p: 'In an auto service it is unacceptable for a bot to name an exact price before a diagnostic or to guess the cause of a fault. A properly configured assistant uses only the information the service provided, answers on price with ranges, and on a difficult technical case hands the conversation straight to a mechanic. That approach is clear for the customer and reputationally calm for the service.',
          },
        ],
        aeoH: 'What does an AI assistant for an auto service do?',
        aeoBody:
          'An AI assistant for an auto service is a chatbot that answers customer messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It quotes the price ranges of services, books the customer in for a diagnostic, records the car model, name, number and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not name an exact price before a diagnostic, uses only approved information; unlisted details are confirmed by the team. For the service the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-auto-dealers-georgia', label: 'AI for auto dealers in Georgia' },
        { slug: 'ai-booking-appointment-automation', label: 'AI booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own customers. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для автосервиса: запись и цены 24/7',
      description:
        'AI-ассистент для автосервиса и детейлинга в Тбилиси. Отвечает клиентам ночью, называет вилку цен, записывает машину на сервис и передаёт администратору.',
      eyebrow: 'AI-ассистент для автосервиса',
      h1: 'Водитель пишет в 08:10.',
      h1Accent: 'Место на сегодня уже бронируется.',
      lead: 'В 08:10, перед работой, машина начинает издавать странный шум, и водителю нужен ремонт сегодня же. Сервис ещё не открылся, но AI-ассистент отвечает автоматически, уточняет проблему, записывает модель, номер и удобное время, а затем передаёт администратору на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Гиорги',
      chatRole: 'АвтоХаб Тбилиси, ассистент демо-автосервиса',
      chatGreeting: 'АвтоХаб Тбилиси на связи. Опишите, что с машиной, назову вилку цен и найду свободное время на диагностику.',
      chatPlaceholder: 'Спроси о шуме, цене или времени диагностики...',
      chatChips: ['Машина начала издавать странный шум, примете сегодня?', 'Сколько длится замена колодок?', 'Сколько стоит компьютерная диагностика?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где автосервис теряет клиентов',
      pains: [
        { h: 'Клиент ищет сервис вечером', p: 'После работы, часто прямо в дороге, с телефона. Пишет сразу в Instagram или Messenger, когда ваша приёмка уже закрыта.' },
        { h: 'Пишет в два-три сервиса одновременно', p: '«Колодки меняете? Сколько стоит?» Уточните модель машины и симптом, затем предложите свободное время для диагностики.' },
        { h: 'Проблема с машиной должна вести к диагностике', p: 'Если клиент пишет о шуме или лампе на панели, уточните модель и симптомы, затем предложите свободное время для диагностики.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и записывает на диагностику для точной оценки. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Услуга, модель машины, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, машина в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает запись сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Сложные технические случаи передаёт мастеру', p: 'Непонятный звук, неясная неисправность, редкая модель: бот берёт номер и передаёт случай человеку. Сам диагноз не ставит.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего автосервиса',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для автосервиса?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и записывает на диагностику для точной оценки. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем автосервисе, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для автосервиса: почему именно сейчас',
            p: "Большинство водителей ищут автосервис с телефона, часто как раз тогда, когда машина уже сломалась, после рабочих часов. Они пишут в Instagram и Messenger и ждут ответа в считаные минуты. После согласованного включения AI-чатбот для автосервиса отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок автосервисов перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента автосервиса это логика записи. Ассистент собирает информацию об услуге, модели машины, времени, имени и телефоне, создаёт предварительную запись и утром передаёт её администратору на подтверждение. Так график сервиса остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на технические вопросы',
            p: 'В автосервисе недопустимо, чтобы бот называл точную цену до диагностики или угадывал причину неисправности. Правильно настроенный ассистент использует только переданную сервисом информацию, отвечает по ценам вилками, а сложный технический случай сразу передаёт мастеру. Такой подход понятен клиенту и репутационно спокоен для сервиса.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для автосервиса?',
        aeoBody:
          'AI-ассистент для автосервиса это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он называет вилки цен на услуги, записывает клиента на диагностику, фиксирует модель машины, имя, номер и удобное время, создаёт предварительную запись и утром передаёт её администратору. Он не называет точную цену до диагностики, работает только по утверждённой информации; неизвестные детали уточняет команда. Для сервиса результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-auto-dealers-georgia', label: 'AI для автодилеров Грузии' },
        { slug: 'ai-booking-appointment-automation', label: 'AI-автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
