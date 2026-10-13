import type { NicheEntry } from '../types';

/**
 * Beauty salons (სილამაზის სალონი). Pilot niche. The demo persona is a beauty
 * salon assistant (Stil Studia), tuned to hair, nails, brows and lashes. The
 * landing copy is written to the beauty keyword rather than the generic
 * "clinics" term, and the booking flow captures the desired service plus a
 * specific master, because salon clients re-book often.
 */
export const beauty: NicheEntry = {
  key: 'beauty',
  slug: 'ai-chatbot-silamazis-salonebistvis',
  serviceType: 'AI Chatbot for Beauty Salons',
  persona: {
    botName: 'ლიკა',
    brand: 'სტილ სტუდია',
    bizType: 'სილამაზის სალონი',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას 11:00-17:00',
    address: 'თბილისი, საბურთალო.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: თმის შეჭრა 25-60 ლარი; შეღებვა 80-250; ვარცხნილობა 40-120; მანიკური 30-60; პედიკური 40-80; წარბების კორექცია 20-40; წამწამების დაგება 60-120; მაკიაჟი 60-150. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს ჩაწერა უნდა, ჯერ ჰკითხე რომელი სერვისი აინტერესებს და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. სილამაზის სალონში კლიენტი ხშირად ერთსა და იმავე ოსტატს უბრუნდება, ამიტომ სასურველი ოსტატიც დააზუსტე. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ვიზიტს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'კონკრეტული ოსტატის თავისუფალ დროს არ იგონებ, ამბობ რომ ადმინისტრატორი დააზუსტებს.',
      'რთულ ან უჩვეულო თხოვნას ადამიანს გადასცემ.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains: 'კონკრეტული ოსტატის თავისუფალი დღეები, სერვისის ხანგრძლივობა, შეღებვის ტონის შერჩევა, ჩაწერის გადავადება, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი სილამაზის სალონისთვის: კლიენტების ჩაწერა 24/7',
      description:
        'AI ასისტენტი სილამაზის სალონებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ასახელებს ფასთა შუალედს, იწერს ვიზიტს და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი სილამაზის სალონისთვის',
      h1: 'შაბათი, 21:15. კლიენტი შეღებვაზე წერს.',
      h1Accent: 'ლიკამ უკვე უპასუხა.',
      lead: 'შაბათ საღამოს კლიენტი სასურველ მომსახურებასა და ოსტატზე წერს. ლიკა ავტომატურად პასუხობს, აზუსტებს მომსახურებას, ოსტატსა და სასურველ დროს, იწერს სახელსა და ნომერს, შემდეგ კი მოთხოვნას ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ლიკა',
      chatRole: 'სტილ სტუდია, დემო სალონის ასისტენტი',
      chatGreeting:
        'ლიკა ვარ, სტილ სტუდიის ონლაინ ასისტენტი. მკითხე შეღებვაზე, ოსტატებსა თუ თავისუფალ დროზე, დახურულ საათებშიც გპასუხობ.',
      chatPlaceholder: 'ჰკითხეთ შეღებვაზე, ოსტატზე ან ჩაწერაზე...',
      chatChips: ['ბალაიაჟი მინდა, რამდენი ხანი სჭირდება?', 'შაბათს ლელა ოსტატთან ადგილი არის?', 'რა ღირს ფესვების შეღებვა?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სილამაზის სალონი კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ირჩევს სალონს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ადმინისტრატორი უკვე წასულია.',
        },
        {
          h: 'წერს ორ-სამ სალონს ერთდროულად',
          p: '«ხვალ თავისუფალი დრო გაქვთ? ბალაიაჟი რა ღირს?» დააზუსტეთ სასურველი მომსახურება, ოსტატი და დრო, შემდეგ მოთხოვნა ადმინისტრატორს გადასცით დასადასტურებლად.',
        },
        {
          h: 'შეღებვის კითხვას ოსტატთან კონსულტაცია უნდა მოჰყვეს',
          p: 'დააზუსტეთ სასურველი მომსახურება, ოსტატი და დრო, შემდეგ მოთხოვნა ადმინისტრატორს გადასცით დასადასტურებლად.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და კონსულტაციაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სერვისი, სასურველი ოსტატი, დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და კლიენტი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ვიზიტს',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'კონკრეტული ოსტატის დროს არ იგონებს',
          p: 'თუ კლიენტს კონკრეტული ოსტატი უნდა, ადმინისტრატორი დააზუსტებს დროს; რთულ ან უჩვეულო თხოვნას ადამიანს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სალონისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი სილამაზის სალონისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და კონსულტაციაზე იწვევს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სალონის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი სილამაზის სალონისთვის: რატომ სწორედ ახლა',
            p: "კლიენტების უმეტესობა სალონს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი სილამაზის სალონისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სილამაზის ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სალონის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სერვისის, სასურველი ოსტატის, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე სალონის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'ოსტატი, დრო და განმეორებადი ვიზიტი',
          p: "სილამაზის სალონში კლიენტი ხშირად ერთსა და იმავე ოსტატს უბრუნდება, ამიტომ მნიშვნელოვანია სწორი ოსტატისა და დროის დაფიქსირება. კარგად აწყობილი ასისტენტი კითხავს, რომელი ოსტატი და რა დრო აწყობს კლიენტს, და ამ დეტალებს ჯავშანში ინახავს. ასე ადმინისტრატორი დილით მზა სიას იღებს და დაბრუნებულ კლიენტებთან მუშაობას შეთანხმებული წესით აგრძელებს.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი სილამაზის სალონისთვის?',
        aeoBody:
          'AI ასისტენტი სილამაზის სალონისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, კლიენტს ჩაწერაზე იწვევს, იწერს სასურველ ოსტატს, სახელს, ნომერსა და დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სალონისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI სილამაზის სალონებისთვის' },
        { slug: 'voice-agent-salon-bookings', label: 'ხმოვანი აგენტი სალონის ჩაწერებისთვის' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for beauty salons: client booking 24/7',
      description:
        'AI assistant for beauty salons in Tbilisi. Answers clients at night, quotes the price range, books the visit and hands it to your administrator.',
      eyebrow: 'AI assistant for beauty salons',
      h1: 'Saturday, 21:15. A client writes about coloring.',
      h1Accent: 'Lika has already answered.',
      lead: 'On Saturday evening a client asks about a service and stylist. Lika replies automatically, clarifies the requested service, stylist and preferred time, records the name and phone, then hands the request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Lika',
      chatRole: 'Stil Studia, demo salon assistant',
      chatGreeting: 'I am Lika, the online assistant at Stil Studia. Ask about coloring, masters or a free slot, I reply even outside opening hours.',
      chatPlaceholder: 'Ask about coloring, a master or booking...',
      chatChips: ['I want balayage, how long does it take?', 'Any slot with master Lela on Saturday?', 'How much is a root color?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a beauty salon loses clients',
      pains: [
        { h: 'Clients choose a salon in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your front desk has already left.' },
        { h: 'They message two or three salons at once', p: '"Is tomorrow free? How much for balayage?" Clarify the requested service, stylist and preferred time, then hand the request to your administrator for confirmation.' },
        { h: 'A color question needs a stylist consultation', p: 'Clarify the requested service, stylist and preferred time, then hand the request to your administrator for confirmation.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to book a consultation. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Service, preferred master, day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not confirm visits by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'Uses approved availability information', p: 'If a client wants a specific master, the bot says the administrator will confirm the time. It passes hard or unusual requests to a human.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your salon',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a beauty salon?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set and invites the client to book a consultation for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your salon, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for beauty salons: why right now',
            p: "Most clients choose a salon from the phone, after working hours. They write on Instagram and Messenger and expect an answer within minutes. After the agreed activation, the AI chatbot for beauty salons can answer at night using only the information you approve and hand complex requests to the team. The beauty market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'Booking, not just messaging',
            p: "The main difference between a simple chatbot and a salon assistant is the booking logic. The assistant collects the service, preferred master, time, name and phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. This keeps the salon schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Master, time and the repeat visit',
            p: "In a beauty salon a client often returns to the same master, so pinning down the right master and slot matters. A well-built assistant asks which master and which slot the client wants and stores that detail in the booking. This gives the administrator a ready list in the morning to follow up with returning clients under the agreed process.",
          },
        ],
        aeoH: 'What does an AI assistant for beauty salons do?',
        aeoBody:
          'An AI assistant for beauty salons is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It quotes the service price ranges, invites the client to book, records the preferred master, name, number and time, creates a provisional booking and hands it to the administrator in the morning. Uses approved price information, does not confirm the visit by itself and passes hard cases to a human. For the salon the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI for beauty salons in Georgia' },
        { slug: 'voice-agent-salon-bookings', label: 'Voice agent for salon bookings' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для салона красоты: запись клиентов 24/7',
      description:
        'AI-ассистент для салонов красоты в Тбилиси. Отвечает клиентам ночью, называет вилку цен, записывает визит и передаёт администратору. Демо проверяется по согласованной информации и правилам.',
      eyebrow: 'AI-ассистент для салонов красоты',
      h1: 'Суббота, 21:15. Клиент пишет об окрашивании.',
      h1Accent: 'Лика уже ответила.',
      lead: 'В субботу вечером клиент пишет об услуге и нужном мастере. Лика отвечает автоматически, уточняет услугу, мастера и удобное время, записывает имя и номер, затем передаёт запрос администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Лика',
      chatRole: 'Стил Студия, ассистент демо-салона',
      chatGreeting: 'Я Лика, онлайн-ассистент Стил Студии. Спросите про окрашивание, мастеров или свободное время, отвечаю даже в нерабочие часы.',
      chatPlaceholder: 'Спросите про окрашивание, мастера или запись...',
      chatChips: ['Хочу балаяж, сколько по времени?', 'Есть окно у мастера Лелы в субботу?', 'Сколько стоит окрашивание корней?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где салон красоты теряет клиентов',
      pains: [
        { h: 'Клиент выбирает салон вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш администратор уже ушёл.' },
        { h: 'Пишет в два-три салона одновременно', p: '«Есть время завтра? Сколько стоит балаяж?» Уточните услугу, мастера и удобное время, затем передайте запрос администратору на подтверждение.' },
        { h: 'Вопрос об окрашивании требует консультации мастера', p: 'Уточните услугу, мастера и удобное время, затем передайте запрос администратору на подтверждение.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает записаться на консультацию. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Услуга, желаемый мастер, день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает визит сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего салона',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для салона красоты?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает записаться на консультацию за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем салоне, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для салона красоты: почему именно сейчас',
            p: "Большинство клиентов выбирают салон с телефона, после рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для салона красоты отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок красоты в Тбилиси перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента салона это логика записи. Ассистент собирает информацию об услуге, желаемом мастере, времени, имени и телефоне, создаёт предварительную бронь и утром передаёт администратору на подтверждение. Так график салона остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Мастер, время и повторный визит',
            p: "В салоне красоты клиент часто возвращается к одному и тому же мастеру, поэтому важно зафиксировать правильного мастера и слот. Хорошо настроенный ассистент спрашивает, какого мастера и какой слот хочет клиент, и сохраняет эту деталь в брони. Так администратор утром получает готовый список и может продолжить работу с вернувшимся клиентом по согласованным правилам.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для салона красоты?',
        aeoBody:
          'AI-ассистент для салона красоты это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги, приглашает клиента записаться, фиксирует желаемого мастера, имя, номер и время, создаёт предварительную бронь и утром передаёт администратору. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для салона результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI для салонов красоты в Грузии' },
        { slug: 'voice-agent-salon-bookings', label: 'Голосовой агент для записи в салон' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
