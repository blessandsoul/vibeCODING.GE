import type { NicheEntry } from '../types';

/**
 * Instagram and online shops (ონლაინ მაღაზია). Order-capture niche: the demo
 * persona (ვიტრინა) clarifies size, color and price, then collects the order
 * details (product, size, color, name, phone, delivery address) and hands them
 * to a human operator to process. Adapted from the dental booking flow to order
 * capture rather than an appointment.
 */
export const shop: NicheEntry = {
  key: 'shop',
  slug: 'ai-chatbot-online-maghaziebistvis',
  serviceType: 'AI Chatbot for Instagram and Online Shops',
  persona: {
    botName: 'დეა',
    brand: 'ვიტრინა',
    bizType: 'ონლაინ მაღაზია',
    hours: '24/7 ონლაინ. მიტანა თბილისსა და რეგიონებში.',
    address: 'თბილისი. მიტანა მთელ საქართველოში.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ტანსაცმელი, აქსესუარები, კოსმეტიკა. ტანსაცმელი 40-250 ლარი; აქსესუარები 20-120; კოსმეტიკა 25-150. ზომასა და ფერს შეკვეთამდე ვაზუსტებთ. მიტანა თბილისში 5 ლარი, უფასო 150 ლარიდან; რეგიონებში 8-15 ლარი. გადახდა: ბარათი ან ადგილზე ნაღდით.',
    booking:
      'როცა მომხმარებელს შეკვეთა უნდა, ჯერ დააზუსტე პროდუქტი, ზომა და ფერი, შემდეგ სახელი, ტელეფონის ნომერი და მიტანის მისამართი. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "შეკვეთა მივიღე: [პროდუქტი, ზომა, ფერი]. მალე ოპერატორი დაგირეკავთ მარაგის, მისამართისა და მიტანის დასადასტურებლად." შეკვეთას საბოლოოდ შენ არ ადასტურებ, ეს ოპერატორის ზარია.',
    guardrails: [
      'მარაგს არ იგონებ: თუ ზომა ან ფერი შესაძლოა აღარ იყოს, ამბობ, რომ ოპერატორი მარაგს დააზუსტებს.',
      'შეკვეთის დეტალებს აგროვებ და ოპერატორს გადასცემ დასამუშავებლად.',
    ],
    customerNoun: 'მყიდველი',
    followupDomains: 'მიწოდების ვადა, ზომების ცხრილი, ხელმისაწვდომი ფერები, გაცვლა და დაბრუნება, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ონლაინ მაღაზიისთვის: შეკვეთების მიღება 24/7',
      description:
        'AI ასისტენტი ონლაინ და Instagram მაღაზიებისთვის თბილისში. პასუხობს მომხმარებელს ღამითაც, აზუსტებს ზომას, ფერსა და ფასს, იღებს შეკვეთას და გადასცემს ოპერატორს.',
      eyebrow: 'AI ასისტენტი ონლაინ მაღაზიისთვის',
      h1: 'მყიდველი სთორიდან წერს, 00:10-ია.',
      h1Accent: 'შეკვეთა უკვე იწერება.',
      lead: 'სთორიში მოწონებული ნივთი დილამდე შეიძლება გაიყიდოს, პასუხს კი მყიდველი ახლავე ელოდება. AI ასისტენტი ავტომატურად პასუხობს, ზომას, ფერსა და ფასს აზუსტებს, შეკვეთას იღებს და დილით ოპერატორს გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'დეა',
      chatRole: 'ვიტრინა, დემო მაღაზიის ასისტენტი',
      chatGreeting:
        'დეა ვარ, ვიტრინის ასისტენტი. ზომა, ფერი ან მიტანა, კითხე რაც გინდა, შუაღამესაც აქ ვარ და შეკვეთასაც გავაფორმებ.',
      chatPlaceholder: 'ჰკითხეთ ზომაზე, ფერსა თუ მიტანაზე...',
      chatChips: ['ეს კაბა M ზომაში გაქვთ?', 'რა ღირს მიტანა თბილისში?', 'შავ ფერში მოდის?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ონლაინ მაღაზია მომხმარებელს',
      pains: [
        {
          h: 'მომხმარებელი საღამოს ყიდულობს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან, Instagram-ის სქროლვისას. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენ უკვე ონლაინ აღარ ხართ.',
        },
        {
          h: 'წერს ორ-სამ მაღაზიას ერთდროულად',
          p: '«ეს ზომა გაქვთ? რა ღირს მიტანა?» დააზუსტეთ ზომა, ფერი და მიტანის მისამართი, შემდეგ მოთხოვნა ოპერატორს გადაეცით მარაგისა და მიტანის პირობების დასადასტურებლად.',
        },
        {
          h: 'პროდუქტის კითხვას ოპერატორის დადასტურება უნდა მოჰყვეს',
          p: 'ზომა, ფერი და მიწოდების მისამართი დააზუსტეთ, შემდეგ მოთხოვნა ოპერატორს გადასცით მარაგის, ფასისა და მიტანის პირობების დასადასტურებლად.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ზომას, ფერსა და ფასს აზუსტებს',
          p: 'ასახელებს პროდუქტის რეალურ ფასს და ხელმისაწვდომ ზომა-ფერს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს შეკვეთის დეტალებს',
          p: 'პროდუქტი, ზომა, ფერი, სახელი, ტელეფონი და მიტანის მისამართი. ერთ მოწესრიგებულ შეკვეთად.',
        },
        {
          h: 'ოპერატორი ამუშავებს შეკვეთას',
          p: 'ყველა ღამის შეკვეთა ერთ სიაშია. ოპერატორი რეკავს, ადასტურებს მარაგსა და მისამართს და შეკვეთა იგზავნება.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'მარაგს არ ჰპირდება',
          p: 'თუ ზომა ან ფერი შესაძლოა აღარ იყოს, ბოტი არ ამბობს „არის". ოპერატორი მარაგს ამოწმებს, სანამ შეკვეთა დადასტურდება.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'დაბრუნება, პრეტენზია, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ოპერატორს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი მაღაზიისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ონლაინ მაღაზიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება პროდუქტების სია, ფასები და მიტანის პირობები; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და მომხმარებელს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა მომხმარებელი ფასს ან ზომას ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასს და ხელმისაწვდომ ზომა-ფერს, შემდეგ კი შეკვეთის დეტალებს აგროვებს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ოპერატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ოპერატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი მაღაზიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ონლაინ მაღაზიისთვის: რატომ სწორედ ახლა',
            p: "მომხმარებელთა უმეტესობა ონლაინ ყიდვას საღამოს იწყებს, ტელეფონიდან, Instagram-ის სქროლვისას. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ონლაინ მაღაზიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ონლაინ ვაჭრობის ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'შეკვეთა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და მაღაზიის ასისტენტს შორის შეკვეთის ლოგიკაა. ასისტენტი აზუსტებს პროდუქტს, ზომას, ფერს, სახელს, ტელეფონსა და მიტანის მისამართს, ქმნის მოწესრიგებულ შეკვეთას და ოპერატორს გადასცემს დასამუშავებლად. ასე მარაგი და გაგზავნა ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები მარაგსა და ფასზე',
            p: 'ონლაინ მაღაზიისთვის საზიანოა, ბოტმა მარაგი ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ მაღაზიის მიწოდებულ ინფორმაციას იყენებს, ხელმისაწვდომ ზომა-ფერსა და ფასს ასახელებს, გამორიცხული პოზიციის შემთხვევაში კი შეკვეთის დადასტურებას ოპერატორს ანდობს. ეს მიდგომა მომხმარებლისთვის სამართლიანია, მაღაზიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ონლაინ მაღაზიისთვის?',
        aeoBody:
          'AI ასისტენტი ონლაინ მაღაზიისთვის არის ჩატბოტი, რომელიც მომხმარებლის შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის აზუსტებს პროდუქტის ზომას, ფერსა და ფასს, იღებს შეკვეთას სახელით, ნომრითა და მიტანის მისამართით და ოპერატორს გადასცემს დასამუშავებლად. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. მაღაზიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის შეკვეთები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-ecommerce-stores-georgia', label: 'AI ონლაინ მაღაზიებისთვის' },
        { slug: 'ai-chatbot-ecommerce-store-guide', label: 'AI ჩატბოტი ონლაინ მაღაზიისთვის: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს მომხმარებელს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for online shops: order capture 24/7',
      description:
        'AI assistant for Instagram and online shops in Tbilisi. Answers customers at night, captures the order and hands it to your operator.',
      eyebrow: 'AI assistant for online shops',
      h1: 'A buyer writes from a Story, it is 00:10.',
      h1Accent: 'The order is already being placed.',
      lead: 'An item liked in a Story can sell out by morning, and the buyer wants an answer now. The AI assistant replies automatically, clarifies size, color and price, captures the order and hands it to your operator in the morning to confirm.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Dea',
      chatRole: 'Vitrina, demo shop assistant',
      chatGreeting: 'I am Dea, the Vitrina assistant. Ask about size, color or delivery, I will place your order too, and I am here even past midnight.',
      chatPlaceholder: 'Ask about size, color or delivery...',
      chatChips: ['Do you have this dress in size M?', 'How much is delivery in Tbilisi?', 'Does it come in black?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where an online shop loses customers',
      pains: [
        { h: 'Customers buy in the evening', p: 'After work, from the phone, scrolling Instagram. They write straight into Instagram or Messenger, when you are no longer online.' },
        { h: 'They message two or three shops at once', p: '"Do you have this size? How much is delivery?" Clarify the size, color and delivery address, then hand the request to your operator to confirm stock and delivery details.' },
        { h: 'A product question needs operator confirmation', p: 'Clarify the size, color and delivery address, then hand the request to your operator to confirm stock, price and delivery details.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Clarifies size, color and price', p: 'Quotes the real product price and the available size and color. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the order details', p: 'Product, size, color, name, phone and delivery address. As one clean order.' },
        { h: 'Your operator processes the order', p: 'Every night order lands in one list. The operator calls, confirms stock and address, and the order ships.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the operator will clarify.' },
        { h: 'It does not promise stock', p: 'If a size or color might be gone, the bot does not say "in stock". The operator checks availability before the order is confirmed.' },
        { h: 'It hands hard cases to a human', p: 'Returns, complaints, unusual requests: the bot takes a phone number and passes the case to a person.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your shop',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for an online shop?', a: 'Timing depends on the agreed scope: we need your product list, prices and delivery terms; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a customer asks about price or size?', a: 'The bot quotes the price you set and the available size and color, then collects the order details. It uses only approved information; unlisted details are confirmed by your team.' },
        { q: 'Does it replace the operator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your shop, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for an online shop: why now',
            p: "Most customers start shopping online in the evening, from the phone, scrolling Instagram. They write into Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for an online shop can answer at night using only the information you approve and hand complex requests to the team. Online retail in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'An order, not just a chat',
            p: "The main difference between a simple chatbot and a shop assistant is the order logic. The assistant clarifies the product, size, color, name, phone and delivery address, builds one clean order and hands it to the operator to process. Stock and shipping stay under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers about stock and price',
            p: 'For an online shop it is damaging when a bot invents stock or a price. A properly built assistant uses only the information the shop provided, names the available size, color and price, and when an item is out it leaves order confirmation to the operator. This approach is fair to the customer and reputationally calm for the shop.',
          },
        ],
        aeoH: 'What does an AI assistant for an online shop do?',
        aeoBody:
          'An AI assistant for an online shop is a chatbot that answers customer messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It clarifies the product size, color and price, captures the order with a name, phone number and delivery address, and hands it to the operator to process. Uses approved stock information, uses only approved information; unlisted details are confirmed by the team. For the shop the result is simple: evening and weekend orders stop slipping away.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-ecommerce-stores-georgia', label: 'AI for e-commerce stores in Georgia' },
        { slug: 'ai-chatbot-ecommerce-store-guide', label: 'AI chatbot for an e-commerce store: the guide' },
      ],
      ctaLead: 'See it answer your own customers. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для онлайн-магазина: приём заказов 24/7',
      description:
        'AI-ассистент для Instagram и онлайн-магазинов в Тбилиси. Отвечает клиентам ночью, уточняет размер, цвет и цену, принимает заказ и передаёт оператору.',
      eyebrow: 'AI-ассистент для онлайн-магазина',
      h1: 'Покупатель пишет из сторис, 00:10.',
      h1Accent: 'Заказ уже оформляется.',
      lead: 'Понравившийся в сторис товар к утру может уйти, а покупатель ждёт ответа сейчас. AI-ассистент отвечает автоматически, уточняет размер, цвет и цену, принимает заказ и утром передаёт оператору на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Деа',
      chatRole: 'Витрина, ассистент демо-магазина',
      chatGreeting: 'Я Деа, ассистент магазина Витрина. Спросите про размер, цвет или доставку, оформлю и заказ, я на связи даже за полночь.',
      chatPlaceholder: 'Спросите про размер, цвет или доставку...',
      chatChips: ['Это платье есть в размере M?', 'Сколько стоит доставка по Тбилиси?', 'В чёрном цвете есть?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где онлайн-магазин теряет клиентов',
      pains: [
        { h: 'Клиент покупает вечером', p: 'После работы, с телефона, листая Instagram. Пишет сразу в Instagram или Messenger, когда вы уже не онлайн.' },
        { h: 'Пишет в два-три магазина одновременно', p: '«Есть этот размер? Сколько доставка?» Уточните размер, цвет и адрес доставки, затем передайте запрос оператору для проверки наличия и условий доставки.' },
        { h: 'Вопрос о товаре требует подтверждения оператором', p: 'Уточните размер, цвет и адрес доставки, затем передайте запрос оператору для проверки наличия, цены и условий доставки.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Уточняет размер, цвет и цену', p: 'Называет реальную цену товара и доступный размер и цвет. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает детали заказа', p: 'Товар, размер, цвет, имя, телефон и адрес доставки. Одним аккуратным заказом.' },
        { h: 'Оператор обрабатывает заказ', p: 'Все ночные заказы в одном списке. Оператор звонит, подтверждает наличие и адрес, и заказ отправляется.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не обещает наличие', p: 'Если размера или цвета может не быть, бот не говорит «есть». Оператор проверяет наличие до подтверждения заказа.' },
        { h: 'Сложное передаёт человеку', p: 'Возврат, претензия, нестандартная просьба: бот берёт номер и передаёт случай человеку.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего магазине',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для онлайн-магазина?', a: 'Сроки зависят от согласованного объёма: нужны список товаров, цены и условия доставки; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену или размер?', a: 'Бот называет заданную вами цену и доступный размер и цвет, затем собирает детали заказа. Цифру или наличие, которых вы не подтверждали, он называет только утверждённые диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит оператора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем магазине, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для онлайн-магазина: почему именно сейчас',
            p: "Большинство клиентов начинают покупки онлайн вечером, с телефона, листая Instagram. Они пишут в Instagram и Messenger и ждут ответа в течение минут. После согласованного включения AI-чатбот для онлайн-магазина отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок онлайн-торговли в Тбилиси перегружен, а решение принимается быстро.",
          },
          {
            h: 'Заказ, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента магазина это логика заказа. Ассистент уточняет товар, размер, цвет, имя, телефон и адрес доставки, формирует один аккуратный заказ и передаёт оператору на обработку. Наличие и отправка остаются под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы о наличии и цене',
            p: 'Для онлайн-магазина вредно, когда бот выдумывает наличие или цену. Правильно собранный ассистент использует только переданную магазином информацию, называет доступный размер, цвет и цену, а при отсутствии позиции доверяет подтверждение заказа оператору. Такой подход честен для клиента и репутационно спокоен для магазина.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для онлайн-магазина?',
        aeoBody:
          "AI-ассистент для онлайн-магазина это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он уточняет размер, цвет и цену товара, принимает заказ с именем, номером и адресом доставки и передаёт оператору на обработку. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для магазина вечерние и выходные заказы можно передавать оператору по согласованным правилам; подтверждение остаётся за командой.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-ecommerce-stores-georgia', label: 'AI для интернет-магазинов в Грузии' },
        { slug: 'ai-chatbot-ecommerce-store-guide', label: 'AI-чатбот для интернет-магазина: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
