import type { NicheEntry } from '../types';

/**
 * Car import and auction logistics (ავტოიმპორტი). Niche landing tuned to the
 * car-import keyword: sourcing at Copart and IAAI, shipping, and a VIN-based
 * landed-cost quote. This is a quote/lead niche, so the booking flow is adapted
 * to request capture (model or lot, VIN, budget, contact) that a human manager
 * then prices from the VIN. The demo persona is a generic demo company, not a
 * demo-only proof slot; no niche client is implied.
 */
export const autoimport: NicheEntry = {
  key: 'autoimport',
  slug: 'ai-chatbot-avtoimportistvis',
  serviceType: 'AI Chatbot for Car Import and Auction Logistics',
  persona: {
    botName: 'ირაკლი',
    brand: 'ავტოპორტი თბილისი',
    bizType: 'ავტოიმპორტის კომპანია',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი და რუსთავი. ოფისში ან ონლაინ გაკონსულტებთ.',
    services:
      'ავტომობილის შერჩევა და შეძენა აუქციონზე (Copart, IAAI); ტრანსპორტირება და განბაჟების დათვლა თითოეულ ავტომობილზე ინდივიდუალურად; ჩვენი საკომისიო შეთანხმებით. ჩამოტანილი ავტომობილის ზუსტ საბოლოო ღირებულებას VIN-კოდით ვთვლით. გადახდის სქემას მენეჯერი ადასტურებს.',
    booking:
      'როცა კლიენტს ავტომობილის ჩამოტანა აინტერესებს, ჯერ ჰკითხე რომელი მოდელი ან რომელი აუქციონის ლოტი უნდა (თუ აქვს, VIN-კოდი ან ლოტის ბმული), შემდეგ სახელი და ტელეფონის ნომერი. როცა ეს გაქვს, დაადასტურე ასე: "მოთხოვნა მივიღე. მენეჯერი დღეს დაგირეკავთ და VIN-კოდით ზუსტ საბოლოო ღირებულებას დაგითვლით." საბოლოო ფასს შენ არ ასახელებ, ეს მენეჯერის დასათვლელია.',
    guardrails: [
      'ზუსტ განბაჟებასა და საბოლოო ღირებულებას არასოდეს იგონებ, ეს VIN-კოდითა და პარამეტრებით იზომება.',
      'გადახდის სქემას მენეჯერი ადასტურებს: სთხოვე ტელეფონი და უთხარი, რომ დღესვე დაგირეკავენ.',
    ],
    customerNoun: 'მყიდველი',
    followupDomains: 'ჩამოტანის ვადა, განბაჟების გათვლა, აუქციონის ლოტის ისტორია, VIN-კოდით შემოწმება, ტრანსპორტირების დაზღვევა, გადახდის ეტაპები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ავტოიმპორტისთვის: მოთხოვნები და VIN-გათვლა 24/7',
      description:
        'AI ასისტენტი ავტოიმპორტის კომპანიებისთვის. პასუხობს კლიენტებს ღამითაც, აგროვებს VIN-კოდსა და მოთხოვნას და გადასცემს მენეჯერს.',
      eyebrow: 'AI ასისტენტი ავტოიმპორტისთვის',
      h1: 'მყიდველი წერს ღამის 02:15-ზე.',
      h1Accent: 'ასისტენტმა ლოტზე უკვე უპასუხა.',
      lead: 'ღამის ორ საათზე Copart-ის აუქციონზე მყიდველი კონკრეტულ ლოტს აკვირდება. AI ასისტენტი აზუსტებს ლოტის ან VIN-ის მონაცემებს, ბიუჯეტსა და ნომერს, შემდეგ კი მოთხოვნას ზუსტი გათვლისთვის მენეჯერს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ირაკლი',
      chatRole: 'ავტოპორტი თბილისი, დემო კომპანიის ასისტენტი',
      chatGreeting:
        'გამარჯობა, ავტოპორტი თბილისიდან. მკითხეთ Copart-ისა და IAAI-ის ლოტებზე, ჩამოტანის ვადასა თუ განბაჟებაზე. აუქციონები ღამით მიმდინარეობს, ამიტომ ღამის ორზეც ხაზზე ვარ.',
      chatPlaceholder: 'ჰკითხეთ ლოტზე, VIN-კოდზე ან ჩამოტანის ვადაზე...',
      chatChips: ['რა დაჯდება Camry-ს ჩამოტანა?', 'რამდენ ხანში ჩამოდის ავტომობილი?', 'განბაჟება როგორ ითვლება?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ავტოიმპორტი კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ეძებს ჩამომტანს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. ათვალიერებს აუქციონის ლოტებს და წერს პირდაპირ Instagram-ში ან WhatsApp-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს რამდენიმე კომპანიას ერთდროულად',
          p: '«რა დაჯდება ამ ლოტის ჩამოტანა?» დააზუსტეთ VIN-კოდი, ბიუჯეტი და ჩამოყვანის ვადა, შემდეგ მოთხოვნა მენეჯერს გაუგზავნეთ ზუსტი გათვლისთვის.',
        },
        {
          h: 'მანქანის მოთხოვნას კონკრეტული შერჩევა უნდა მოჰყვეს',
          p: 'მყიდველი მარკას, ბიუჯეტსა და ჩამოყვანის ვადას აზუსტებს. ამ დეტალების მიღების შემდეგ გაუგზავნეთ შესაბამისი ვარიანტები და საჭიროების შემთხვევაში მენეჯერთან საუბარი დაუნიშნეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ხსნის განბაჟებისა და ჩამოტანის ლოგიკას',
          p: 'ასახელებს, რაზეა დამოკიდებული საბოლოო ფასი (აუქციონის ლოტი, ტრანსპორტი, განბაჟება) და რა განსაზღვრავს ვადას. ზუსტ ციფრს კი VIN-კოდის შემდეგ მენეჯერი დაითვლის. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს მოთხოვნის დეტალებს',
          p: 'სასურველი მოდელი ან აუქციონის ლოტი, VIN-კოდი ან ბმული, ბიუჯეტი, სახელი და ტელეფონი. ყველაფერი ერთ მოთხოვნაშია თავმოყრილი.',
        },
        {
          h: 'მენეჯერი ითვლის და ადასტურებს',
          p: 'ყველა ღამის მოთხოვნა ერთ სიაშია. მენეჯერი რეკავს, VIN-კოდით ზუსტ საბოლოო ღირებულებას ითვლის და გადახდის სქემას ათანხმებს.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს გარიგებას',
          p: 'მოთხოვნა ყოველთვის წინასწარია, საბოლოო ფასსა და გადახდის სქემას მენეჯერი ადასტურებს. გარიგება თქვენს კონტროლში რჩება.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'არასტანდარტული ლოტი, სადავო VIN-კოდი, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს მენეჯერს გადასცემს, თავად არ წყვეტს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი კომპანიისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და WhatsApp-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ავტოიმპორტისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება აუქციონების სია, ლოგისტიკის სქემა და ჩამოტანის საშუალო ვადები; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ან განბაჟებას ეკითხება?',
          a: 'ბოტი უხსნის, რაზეა დამოკიდებული ჩამოტანილი ავტომობილის ღირებულება, და VIN-კოდს ითხოვს ზუსტი გათვლისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს მენეჯერს?',
a: 'არა. ის ფარავს იმ საათებს, როცა მენეჯერი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. ზუსტი გათვლა, გადახდის სქემა და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მოთხოვნების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი კომპანიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ავტოიმპორტისთვის: რატომ სწორედ ახლა',
            p: "ავტომობილის ჩამოტანა აშშ-ის აუქციონებიდან საქართველოში დიდი ბაზარია და კონკურენცია მაღალია. კლიენტი Copart-სა და IAAI-ს ლოტებს საღამოს ათვალიერებს, ტელეფონიდან, და პასუხს წუთებში ელოდება. წერს Instagram-სა და WhatsApp-ში: «რა დაჯდება ამის ჩამოტანა და რამდენ ხანში?» შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ავტოიმპორტისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს.",
          },
          {
            h: 'მოთხოვნის აღება და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ავტოიმპორტის ასისტენტს შორის მოთხოვნის აღების ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი მოდელის, აუქციონის ლოტის, VIN-კოდის, ბიუჯეტისა და კონტაქტის შესახებ, ქმნის ერთიან მოთხოვნას და მენეჯერს გადასცემს ზუსტი გათვლისთვის. ასე გარიგება ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ფასსა და განბაჟებაზე',
            p: 'ავტოიმპორტში დაუშვებელია, ბოტმა საბოლოო ღირებულება ან განბაჟება გამოიგონოს, რადგან ეს VIN-კოდსა და მრავალ პარამეტრზეა დამოკიდებული. სწორად აწყობილი ასისტენტი მხოლოდ იმ ლოგიკას ხსნის, რომელიც კომპანიამ მიაწოდა, VIN-კოდს ითხოვს და ზუსტ ციფრს მენეჯერს ანდობს. ეს მიდგომა კლიენტისთვის გამჭვირვალეა, კომპანიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ავტოიმპორტისთვის?',
        aeoBody:
          'AI ასისტენტი ავტოიმპორტისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ხსნის აუქციონზე (Copart, IAAI) შერჩევის, ტრანსპორტირებისა და განბაჟების ლოგიკას, აგროვებს VIN-კოდსა და მოთხოვნას, ქმნის ერთიან განაცხადს და მენეჯერს გადასცემს ზუსტი გათვლისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კომპანიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მოთხოვნები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'auto-import-business-georgia-marketing-guide', label: 'ავტოიმპორტის ბიზნესის მარკეტინგის გზამკვლევი' },
        { slug: 'ai-for-logistics-companies-georgia', label: 'AI ლოგისტიკის კომპანიებისთვის' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for car import: inquiries and VIN quotes 24/7',
      description:
        'AI assistant for car-import companies in Georgia. Answers clients at night, collects the VIN and the request, and hands it to your manager.',
      eyebrow: 'AI assistant for car import',
      h1: 'A buyer writes at 02:15 at night.',
      h1Accent: 'The assistant already replied about the lot.',
      lead: 'At two in the morning a buyer is tracking a specific Copart lot. The AI assistant captures the lot or VIN, budget and phone, then passes the request to the manager for an exact import quote.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Irakli',
      chatRole: 'AutoPort Tbilisi, demo company assistant',
      chatGreeting: 'Hi, this is AutoPort Tbilisi. Ask me about Copart and IAAI lots, shipping times or customs. The auctions run through the night, so I am on the line even at 2am.',
      chatPlaceholder: 'Ask about a lot, the VIN or shipping time...',
      chatChips: ['How much to bring in a Camry?', 'How long does shipping take?', 'How is customs calculated?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a car-import company loses clients',
      pains: [
        { h: 'Clients look for an importer in the evening', p: 'After work, from the phone. They browse auction lots and write straight into Instagram or WhatsApp, when your office is already closed.' },
        { h: 'They message several companies at once', p: '"How much to bring in this lot?" Clarify the VIN or make, budget range and import timeline, then pass the request to the manager for a precise quote.' },
        { h: 'A car request needs a specific shortlist', p: 'Ask for the make, budget and import timeline, then send suitable options and offer a call with the manager when needed.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Explains the customs and shipping logic', p: 'It tells the client what the final cost depends on (the auction lot, transport, customs) and what drives the timeline. The exact figure comes from the manager after the VIN. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the request', p: 'Desired model or auction lot, VIN or link, budget, name and phone. Everything gathered into one request.' },
        { h: 'The manager calculates and confirms', p: 'Every night inquiry lands in one list. The manager calls, computes the exact final cost from the VIN, and agrees the payment scheme.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved cost information', p: 'It answers only with the logic you provided. The exact customs and final cost are measured from the VIN and the parameters; the manager computes that.' },
        { h: 'It does not close the deal by itself', p: 'A request is always provisional; the manager confirms the final price and the payment scheme. The deal stays in your control.' },
        { h: 'It hands hard cases to a human', p: 'A non-standard lot, a disputed VIN, an unusual request: the bot takes a number and passes the case to the manager. It does not decide on its own.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your company',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and WhatsApp by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for car import?', a: 'Timing depends on the agreed scope: we need your auction list, logistics scheme and average shipping times; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price or customs?', a: 'The bot explains what the imported cost depends on and asks for the VIN for an exact quote. It uses only approved information; unlisted details are confirmed by your team.' },
        { q: 'Does it replace the manager?', a: 'No. It catches the hours a human cannot cover: nights, weekends, peak load. The exact quote, the payment scheme and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your company, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for car import: why now',
            p: "Importing cars from US auctions into Georgia is a large market, and the competition is fierce. A buyer browses Copart and IAAI lots in the evening, from the phone, and expects an answer within minutes. He writes on Instagram and WhatsApp: \"How much to bring this in, and how long?\" After the agreed activation, the AI chatbot for car import can answer at night using only the information you approve and hand complex requests to the team.",
          },
          {
            h: 'Capturing the request, not just chatting',
            p: "The real difference between a simple chatbot and a car-import assistant is request-capture logic. The assistant gathers the desired model, the auction lot, the VIN, the budget and the contact, builds one unified request and hands it to a manager for the exact quote. The deal stays under human control, and the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on price and customs',
            p: 'In car import it is unacceptable for a bot to invent the final cost or the customs figure, because both depend on the VIN and many parameters. A properly built assistant explains only the logic the company provided, asks for the VIN, and trusts the exact number to the manager. That approach is transparent for the buyer and reputationally calm for the company.',
          },
        ],
        aeoH: 'What does an AI assistant for car import do?',
        aeoBody:
          'An AI assistant for car import is a chatbot that answers client messages in Messenger, Instagram, WhatsApp and on the site, at any hour. It explains the logic of auction sourcing (Copart, IAAI), transport and customs, collects the VIN and the request, builds one unified application and hands it to a manager for the exact quote. Uses approved cost information, does not confirm the payment scheme, and passes hard cases to a human. For the company the result is simple: evening and weekend requests are can be routed under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'auto-import-business-georgia-marketing-guide', label: 'Marketing guide for the car-import business in Georgia' },
        { slug: 'ai-for-logistics-companies-georgia', label: 'AI for logistics companies in Georgia' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для автоимпорта: заявки и расчёт по VIN 24/7',
      description:
        'AI-ассистент для компаний по импорту авто в Грузии. Отвечает клиентам ночью, объясняет логику аукциона и растаможки, собирает VIN и заявку и передаёт менеджеру.',
      eyebrow: 'AI-ассистент для автоимпорта',
      h1: 'Покупатель пишет в 02:15 ночи.',
      h1Accent: 'Ассистент уже ответил по лоту.',
      lead: 'В два часа ночи покупатель следит за конкретным лотом на аукционе Copart. AI-ассистент уточняет лот или VIN, бюджет и номер, затем передаёт запрос менеджеру для точного расчёта доставки.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Иракли',
      chatRole: 'АвтоПорт Тбилиси, ассистент демо-компании',
      chatGreeting: 'Здравствуйте, это АвтоПорт Тбилиси. Спросите про лоты Copart и IAAI, сроки доставки или растаможку. Аукционы идут ночью, поэтому я на связи даже в два часа ночи.',
      chatPlaceholder: 'Спросите про лот, VIN или сроки доставки...',
      chatChips: ['Сколько стоит пригнать Camry?', 'Сколько идёт доставка?', 'Как считается растаможка?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где автоимпорт теряет клиентов',
      pains: [
        { h: 'Клиент ищет, кто пригонит, вечером', p: 'После работы, с телефона. Смотрит лоты аукциона и пишет сразу в Instagram или WhatsApp, когда ваш офис уже закрыт.' },
        { h: 'Пишет в несколько компаний сразу', p: '«Сколько пригнать этот лот?» Уточните VIN или марку, бюджет и срок доставки, затем передайте запрос менеджеру для точного расчёта.' },
        { h: 'Запрос на автомобиль требует конкретной подборки', p: 'Уточните марку, бюджет и сроки доставки, затем отправьте подходящие варианты и при необходимости предложите разговор с менеджером.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Объясняет логику растаможки и доставки', p: 'Рассказывает, от чего зависит итоговая стоимость (лот аукциона, транспорт, растаможка) и что влияет на срок. Точную цифру называет менеджер после VIN. Расчёт он работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает заявку', p: 'Желаемая модель или лот аукциона, VIN или ссылка, бюджет, имя и телефон. Всё собрано в одну заявку.' },
        { h: 'Менеджер считает и подтверждает', p: 'Все ночные обращения в одном списке. Менеджер звонит, считает точную итоговую стоимость по VIN и согласует схему оплаты.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не закрывает сделку сам', p: 'Заявка всегда предварительная, итоговую цену и схему оплаты подтверждает менеджер. Сделка остаётся под вашим контролем.' },
        { h: 'Сложное передаёт человеку', p: 'Нестандартный лот, спорный VIN, необычная просьба: бот берёт номер и передаёт случай менеджеру. Сам не решает.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей компании',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и WhatsApp без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для автоимпорта?', a: 'Сроки зависят от согласованного объёма: нужны список аукционов, схема логистики и средние сроки доставки; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену или растаможку?', a: 'Бот объясняет, от чего зависит стоимость пригона, и просит VIN для точного расчёта. Он никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { q: 'Он заменит менеджера?', a: 'Нет. Он ловит часы, которые человек не закрывает: ночь, выходные, пиковую нагрузку. Точный расчёт, схема оплаты и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей компании, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для автоимпорта: почему именно сейчас',
            p: "Пригон машин с аукционов США в Грузию это большой рынок, и конкуренция высокая. Покупатель смотрит лоты Copart и IAAI вечером, с телефона, и ждёт ответа за минуты. Пишет в Instagram и WhatsApp: «Сколько будет пригнать вот это и за какой срок?» После согласованного включения AI-чатбот для автоимпорта отвечает ночью только по утверждённой информации и передаёт сложные запросы команде.",
          },
          {
            h: 'Захват заявки, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента для автоимпорта это логика захвата заявки. Ассистент собирает желаемую модель, лот аукциона, VIN, бюджет и контакт, формирует единую заявку и передаёт менеджеру для точного расчёта. Так сделка остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы о цене и растаможке',
            p: 'В автоимпорте недопустимо, чтобы бот выдумывал итоговую стоимость или растаможку, ведь это зависит от VIN и множества параметров. Правильно настроенный ассистент объясняет только ту логику, которую передала компания, просит VIN и доверяет точную цифру менеджеру. Такой подход прозрачен для покупателя и репутационно спокоен для компании.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для автоимпорта?',
        aeoBody:
          'AI-ассистент для автоимпорта это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он объясняет логику подбора на аукционе (Copart, IAAI), транспортировки и растаможки, собирает VIN и заявку, формирует единое обращение и передаёт менеджеру для точного расчёта. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для компании результат прост: вечерние и выходные заявки можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'auto-import-business-georgia-marketing-guide', label: 'Маркетинговый гид для бизнеса по автоимпорту в Грузии' },
        { slug: 'ai-for-logistics-companies-georgia', label: 'AI для логистических компаний в Грузии' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
