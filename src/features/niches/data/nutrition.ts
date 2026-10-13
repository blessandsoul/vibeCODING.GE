import type { NicheEntry } from '../types';

/**
 * Nutritionists and dietitians (ნუტრიციოლოგია და დიეტოლოგია). The demo persona
 * is a private nutrition practice with an online option, so the booking flow asks
 * online-or-in-person first; the landing copy is tuned to the nutrition keyword
 * rather than the generic "clinics" term.
 */
export const nutrition: NicheEntry = {
  key: 'nutrition',
  slug: 'ai-chatbot-nutriciologistvis',
  serviceType: 'AI Chatbot for Nutritionists and Dietitians',
  persona: {
    botName: 'მაკა',
    brand: 'ნუტრი ბალანსი',
    bizType: 'ნუტრიციოლოგისა და დიეტოლოგის პრაქტიკა',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. ონლაინ კონსულტაცია მთელი საქართველოსთვის.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: პირველი კონსულტაცია 50-120 ლარი; ინდივიდუალური კვების გეგმა 100-250; ყოველთვიური მეთვალყურეობა პაკეტად, ცალკე შეთანხმებით; ონლაინ კონსულტაცია ხელმისაწვდომია. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს კონსულტაციაზე ჩაწერა უნდა, ჯერ ჰკითხე ონლაინ სურს თუ ადგილზე, შემდეგ რომელი დღე და დრო აწყობს, ბოლოს კი სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." კონსულტაციას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არ სვამ და მედიკამენტს არ ნიშნავ.',
      'სამედიცინო მდგომარეობაზე (ორსულობა, დიაბეტი, ქრონიკული დაავადება): ურჩიე ექიმთან კონსულტაცია და გადაეცი ადამიანს.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains: 'კონსულტაციის ხანგრძლივობა, ონლაინ და ადგილზე ფორმატის განსხვავება, კვების გეგმის მიღების ვადა, ყოველთვიური მეთვალყურეობის პირობები, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ნუტრიციოლოგისთვის: კონსულტაციების ჩაწერა 24/7',
      description:
        'AI ასისტენტი ნუტრიციოლოგებისა და დიეტოლოგებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, იწერს კონსულტაციას და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ნუტრიციოლოგისთვის',
      h1: 'კლიენტი წერს 21:50-ზე.',
      h1Accent: 'მაკამ უკვე უპასუხა.',
      lead: 'ახალ კვებას ხშირად ორშაბათიდან იწყებენ, გადაწყვეტილება კი წინა საღამოს მწიფდება. სწორედ მაშინ წერს კლიენტი ნუტრიციოლოგს გეგმაზე, როცა კაბინეტი უკვე დაკეტილია. AI ასისტენტი პასუხობს ავტომატურად, აზუსტებს რა სურს, იწერს სახელს, ნომერსა და დროს, დილით კი ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'მაკა',
      chatRole: 'ნუტრი ბალანსი, დემო პრაქტიკის ასისტენტი',
      chatGreeting:
        'მოგესალმებით! მაკა ვარ, ნუტრი ბალანსის ასისტენტი. კვების გეგმაზე, ფასზე თუ კონსულტაციის ჩაწერაზე ნებისმიერ საათს გპასუხობთ, გამოხმაურებას დილამდე ნუ დაელოდებით.',
      chatPlaceholder: 'ჰკითხეთ კვების გეგმაზე, ფასზე ან ჩაწერაზე...',
      chatChips: ['რა ღირს პირველი კონსულტაცია?', 'ორშაბათიდან ჯანსაღ კვებას ვიწყებ, დამეხმარებით?', 'ინდივიდუალურ გეგმას რამდენ ხანში მივიღებ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ნუტრიციოლოგი კლიენტებს',
      pains: [
        {
          h: 'კლიენტი მოტივაციას საღამოს პოულობს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი კაბინეტი უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ სპეციალისტს ერთდროულად',
          p: '«პირველი კონსულტაცია რა ღირს? ონლაინ შესაძლებელია?» ჰკითხეთ მიზანი და კვებითი შეზღუდვები, შემდეგ შესთავაზეთ ნუტრიციოლოგის საწყისი კონსულტაცია.',
        },
        {
          h: 'კვების გეგმის კითხვას საწყისი კონსულტაცია უნდა მოჰყვეს',
          p: 'მიზნის, კვებითი შეზღუდვებისა და სასურველი რეჟიმის გასაგებად ჯერ მოკლე კითხვები დაუსვით, შემდეგ კი ნუტრიციოლოგთან საწყისი კონსულტაციის დრო შესთავაზეთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და პირველ კონსულტაციაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'ონლაინ თუ ადგილზე, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
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
          h: 'თვითონ არ ადასტურებს კონსულტაციას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'დიაგნოზს არ სვამს',
          p: 'ბოტი არ სვამს დიაგნოზს და მედიკამენტს არ ნიშნავს. სამედიცინო მდგომარეობაზე ურჩევს ექიმთან მისვლას და საქმეს ადამიანს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი პრაქტიკისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ნუტრიციოლოგისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და პირველ კონსულტაციაზე იწვევს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'ონლაინ კონსულტაციასაც წერს?',
          a: 'დიახ. ასისტენტი არჩევს ონლაინ და ადგილზე კონსულტაციას შორის და ორივე შემთხვევაში წინასწარ ჯავშანს ქმნის. ონლაინ ფორმატი კომფორტული და დისკრეტულია მათთვის, ვისაც პირადი თემის განხილვა სახლიდან ურჩევნია.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ნუტრიციოლოგისთვის: რატომ სწორედ ახლა',
            p: "კვების შეცვლის გადაწყვეტილება ხშირად საღამოს მიიღება, სამუშაო საათების შემდეგ. კლიენტი წერს Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდება. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ნუტრიციოლოგისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ნუტრიციოლოგებისა და დიეტოლოგების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ნუტრიციოლოგის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სერვისის, ონლაინ თუ ადგილზე ფორმატის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე პრაქტიკის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები კვებისა და ჯანმრთელობის თემებზე',
            p: "ნუტრიციოლოგიაში დაუშვებელია, ბოტმა დიაგნოზი დასვას, მედიკამენტი დანიშნოს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ პრაქტიკის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, სამედიცინო მდგომარეობის შემთხვევაში კი (ორსულობა, დიაბეტი, ქრონიკული დაავადება) ურჩევს ექიმთან მისვლას და საუბარს მაშინვე ადამიანს გადასცემს. საუბრის გადაცემის შემდეგ საკითხს ადამიანი და შესაბამისი ექიმი ამოწმებენ შეთანხმებული წესით.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ნუტრიციოლოგისთვის?',
        aeoBody:
          'AI ასისტენტი ნუტრიციოლოგისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, კლიენტს პირველ კონსულტაციაზე იწვევს, არჩევს ონლაინ და ადგილზე ფორმატს შორის, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, არ ნიშნავს მედიკამენტს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. პრაქტიკისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI სამედიცინო კლინიკებისთვის: გზამკვლევი' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for nutritionists: consultation booking 24/7',
      description:
        'AI assistant for nutritionists and dietitians in Tbilisi. Answers clients at night, books the consultation and hands it to your administrator.',
      eyebrow: 'AI assistant for nutritionists',
      h1: 'A client writes at 21:50.',
      h1Accent: 'Maka has already replied.',
      lead: 'People often start new eating on Monday, and the decision ripens the evening before. That is exactly when a client writes to a nutritionist about the plan, while the office is already closed. The AI assistant replies automatically, clarifies what they want, collects the name, phone and time, and hands it to the administrator in the morning.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Maka',
      chatRole: 'Nutri Balansi, demo practice assistant',
      chatGreeting: 'Hi! I am Maka, the Nutri Balansi assistant. Ask about a meal plan, prices or booking a consultation and I reply at any hour, no waiting until morning.',
      chatPlaceholder: 'Ask about a meal plan, price or booking...',
      chatChips: ['How much is the first consultation?', 'I am starting healthy eating on Monday, can you help?', 'How soon do I get an individual plan?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a nutritionist loses clients',
      pains: [
        { h: 'Clients find motivation in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message two or three specialists at once', p: '"How much is the first consultation? Is online possible?" Ask about the goal and dietary restrictions, then offer an initial nutrition consultation.' },
        { h: 'A nutrition-plan question needs an initial consultation', p: 'Ask a few questions about the goal, dietary restrictions and preferred routine, then offer an initial consultation with a nutritionist.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to a first consultation. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Online or in person, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the specialist will clarify.' },
        { h: 'It does not confirm consultations by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It does not diagnose', p: 'The bot does not diagnose and does not prescribe medication. On a medical condition it advises seeing a doctor and passes the case to a person.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your practice',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a nutritionist?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set and invites the client to a first consultation for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'Does it book online consultations too?', a: 'Yes. The assistant chooses between an online and an in-person consultation and creates a provisional booking either way. The online format is comfortable and discreet for those who prefer to discuss a private topic from home.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for a nutritionist: why right now',
            p: "The decision to change how you eat is usually made in the evening, after working hours. The client writes on Instagram and Messenger and expects a reply within minutes. After the agreed activation, the AI chatbot for a nutritionist can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the market of nutritionists and dietitians is crowded and the choice is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a nutritionist assistant is the booking logic. The assistant gathers the service, the online or in-person format, the preferred time, the name and the phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. This way the practice schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on food and health topics',
            p: "In nutrition it is unacceptable for a bot to make a diagnosis, prescribe medication or invent a price. A properly built assistant uses only the information the practice supplied, answers prices with ranges, and in the case of a medical condition (pregnancy, diabetes, a chronic illness) advises seeing a doctor and immediately hands the conversation to a person. The team reviews the handoff under agreed rules; medical decisions remain with a doctor.",
          },
        ],
        aeoH: 'What does an AI assistant for a nutritionist do?',
        aeoBody:
          'An AI assistant for a nutritionist is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It quotes the price ranges of services, invites the client to a first consultation, chooses between the online and in-person format, records the name, number and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not diagnose, does not prescribe medication, uses only approved information; unlisted details are confirmed by the team. For the practice the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI for medical clinics: the guide' },
        { slug: 'ai-booking-appointment-automation', label: 'Booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для нутрициолога: запись на консультацию 24/7',
      description:
        'AI-ассистент для нутрициологов и диетологов в Тбилиси. Отвечает клиентам ночью, записывает на консультацию и передаёт администратору.',
      eyebrow: 'AI-ассистент для нутрициолога',
      h1: 'Клиент пишет в 21:50.',
      h1Accent: 'Мака уже ответила.',
      lead: 'Новое питание часто начинают с понедельника, а решение созревает накануне вечером. Именно тогда клиент пишет нутрициологу про план, когда кабинет уже закрыт. AI-ассистент отвечает автоматически, уточняет, что нужно, собирает имя, номер и время, а утром передаёт администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Мака',
      chatRole: 'Нутри Баланси, ассистент демо-практики',
      chatGreeting: 'Здравствуйте! Я Мака, ассистент Нутри Баланси. Спросите про план питания, цены или запись на консультацию, отвечаю в любой час, ждать до утра не придётся.',
      chatPlaceholder: 'Спросите про план питания, цену или запись...',
      chatChips: ['Сколько стоит первая консультация?', 'С понедельника начинаю правильное питание, поможете?', 'Как быстро я получу индивидуальный план?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где нутрициолог теряет клиентов',
      pains: [
        { h: 'Клиент находит мотивацию вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш кабинет уже закрыт.' },
        { h: 'Пишет двум-трём специалистам одновременно', p: '«Сколько стоит первая консультация? Онлайн возможно?» Уточните цель и ограничения в питании, затем предложите первичную консультацию нутрициолога.' },
        { h: 'Вопрос о плане питания требует первичной консультации', p: 'Задайте несколько вопросов о цели, ограничениях в питании и привычном режиме, затем предложите первичную консультацию нутрициолога.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на первую консультацию. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Онлайн или очно, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает консультацию сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Не ставит диагноз', p: 'Бот не ставит диагноз и не назначает медикаменты. При медицинском состоянии советует обратиться к врачу и передаёт случай человеку.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей практики',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для нутрициолога?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на первую консультацию за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Записывает и на онлайн-консультацию?', a: 'Да. Ассистент выбирает между онлайн и очной консультацией и в обоих случаях создаёт предварительную запись. Онлайн-формат удобен и деликатен для тех, кто предпочитает обсуждать личную тему из дома.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для нутрициолога: почему именно сейчас',
            p: "Решение изменить питание чаще всего принимается вечером, после рабочих часов. Клиент пишет в Instagram и Messenger и ждёт ответа за считанные минуты. После согласованного включения AI-чатбот для нутрициолога отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок нутрициологов и диетологов перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента нутрициолога это логика записи. Ассистент собирает услугу, формат (онлайн или очно), желаемое время, имя и телефон, создаёт предварительную запись и утром передаёт администратору на подтверждение. Так график практики остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на темы питания и здоровья',
            p: "В нутрициологии недопустимо, чтобы бот ставил диагноз, назначал медикаменты или выдумывал цену. Правильно настроенный ассистент использует только предоставленную практикой информацию, отвечает по ценам вилками, а при медицинском состоянии (беременность, диабет, хроническое заболевание) советует обратиться к врачу и сразу передаёт разговор человеку. После передачи вопрос рассматривает команда по согласованным правилам; медицинское решение принимает врач.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для нутрициолога?',
        aeoBody:
          'AI-ассистент для нутрициолога это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен услуг, приглашает клиента на первую консультацию, выбирает между онлайн и очным форматом, записывает имя, номер и желаемое время, создаёт предварительную запись и утром передаёт администратору. Он не ставит диагноз, не назначает медикаменты, работает только по утверждённой информации; неизвестные детали уточняет команда. Для практики результат прост: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI для медицинских клиник: гид' },
        { slug: 'ai-booking-appointment-automation', label: 'Автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
