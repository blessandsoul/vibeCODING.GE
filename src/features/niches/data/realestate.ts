import type { NicheEntry } from '../types';

/**
 * Real estate agencies and developers (უძრავი ქონება). The demo persona is a
 * generic agency assistant; the landing copy is tuned to the real estate
 * keyword rather than the generic "clinics" term. Booking = viewing scheduling;
 * the agent confirms exact price and availability, and the bot gives no legal
 * or tax advice.
 */
export const realestate: NicheEntry = {
  key: 'realestate',
  slug: 'ai-chatbot-udzravi-qonebistvis',
  serviceType: 'AI Chatbot for Real Estate Agencies and Developers',
  persona: {
    botName: 'თამარი',
    brand: 'დომუს თბილისი',
    bizType: 'უძრავი ქონების სააგენტო',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. ოფისში შეხვედრა შესაძლებელია.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ვეხმარებით ბინის შერჩევაში ბიუჯეტისა და უბნის მიხედვით, ვნიშნავთ ჩვენებას და ვხსნით ახალ კორპუსებში განვადების პირობებს. მაგალითად, ქირავდება ბინები თვეში დაახლოებით 600 ლარიდან 3000 ლარამდე, იყიდება კვადრატული მეტრის ფასით უბნის მიხედვით. საკომისიო შეთანხმებით. ზუსტ ფასსა და ხელმისაწვდომობას აგენტი ადასტურებს.',
    booking:
      'როცა კლიენტს ბინის ჩვენება უნდა, ჯერ ჰკითხე რომელი ობიექტი ან რა ბიუჯეტი და უბანი აინტერესებს და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ ჩვენებაზე [დღე, დრო]-ზე. დილით აგენტი დაგირეკავთ და დაგიდასტურებთ ობიექტის ხელმისაწვდომობას." ჩვენებას საბოლოოდ შენ არ ადასტურებ, ეს აგენტის ზარია.',
    guardrails: [
      'ზუსტ ფასსა და ხელმისაწვდომობას თვითონ არ ადასტურებ, ამას აგენტი ადასტურებს.',
      'იურიდიულ ან საგადასახადო რჩევას არ იძლევი: ასეთ კითხვას აგენტს გადასცემ.',
    ],
    customerNoun: 'მყიდველი',
    followupDomains: 'განვადებისა და იპოთეკის პირობები, ობიექტის ფართობი და სართული, დათვალიერების დრო, საკომისიო, საკუთრების დოკუმენტები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი უძრავი ქონებისთვის: ჩვენების ჩაწერა 24/7',
      description:
        'AI ასისტენტი უძრავი ქონების სააგენტოებისა და დეველოპერებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, წერს ჩვენებაზე და გადასცემს აგენტს.',
      eyebrow: 'AI ასისტენტი უძრავი ქონებისთვის',
      h1: 'მყიდველი 23:05-ზე განცხადებას ინახავს.',
      h1Accent: 'დათვალიერება უკვე იწერება.',
      lead: 'საღამოს მყიდველი განცხადებას ინახავს და დათვალიერებაზე წერს. AI ასისტენტი დამტკიცებული ინფორმაციით ამოწმებს ობიექტის სტატუსს, აზუსტებს უბანს, ბიუჯეტსა და გადახდის ფორმას, შემდეგ კი მოთხოვნას აგენტს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'თამარი',
      chatRole: 'დომუს თბილისი, დემო სააგენტოს ასისტენტი',
      chatGreeting:
        'თამარი გახლავართ, დომუს თბილისის ასისტენტი. მოვძებნი ობიექტს უბნისა და ბიუჯეტის მიხედვით და დათვალიერებაზე ჩაგწერთ, დღეც იქნება თუ ღამე.',
      chatPlaceholder: 'ჰკითხეთ ობიექტზე, უბანზე ან დათვალიერებაზე...',
      chatChips: ['ეს განცხადება ჯერ ხელმისაწვდომია?', 'შაბათს დათვალიერებაზე ჩამწერთ?', 'საბურთალოზე ორ ოთახიანი გაქვთ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სააგენტო კლიენტებს',
      pains: [
        {
          h: 'კლიენტი ობიექტს საღამოს ეძებს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. აგზავნის შეკითხვას პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს რამდენიმე სააგენტოს ერთდროულად',
          p: '«ეს ბინა ხელმისაწვდომია? ჩვენება ხვალ შეიძლება?» დააზუსტეთ უბანი, ბიუჯეტი და გადახდის ფორმა, შემდეგ შესთავაზეთ შესაბამისი ბინის ჩვენების დრო.',
        },
        {
          h: 'ბინის კითხვას ჩვენების დრო უნდა მოჰყვეს',
          p: 'მყიდველის მოთხოვნაში დააზუსტეთ უბანი, ბიუჯეტი და გადახდის ფორმა, შემდეგ კი შესაბამისი ბინის ჩვენების თავისუფალი დრო შესთავაზეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ფასსა და ბიუჯეტს სწორად უმკლავდება',
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს, ფილტრავს ბიუჯეტითა და უბნით, ზუსტ ფასს კი აგენტს ანდობს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს ჩვენების დეტალებს',
          p: 'ობიექტი ან ბიუჯეტი და უბანი, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჩაწერით.',
        },
        {
          h: 'დილით აგენტი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. აგენტი რეკავს, ადასტურებს ობიექტის ხელმისაწვდომობას და კლიენტი ჩვენებაზეა ჩაწერილი.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჩვენებას',
          p: 'ჩაწერა ყოველთვის წინასწარია, საბოლოო დადასტურება აგენტის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'იურიდიულ რჩევას არ იძლევა',
          p: 'გადასახადები, საკუთრების რეგისტრაცია, სამართლებრივი დეტალები: ასეთ დროს ბოტი ნომერს იღებს და საქმეს აგენტს გადასცემს, რჩევას არ იჩემებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სააგენტოსთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი უძრავი ქონებისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება ობიექტების ბაზა, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს. ეს განსაკუთრებით მნიშვნელოვანია უცხოელი მყიდველებისთვის.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს, ფილტრავს ბიუჯეტითა და უბნით, ზუსტი ფასისა და ხელმისაწვდომობისთვის კი აგენტს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს აგენტს?',
a: 'არა. ის ფარავს იმ საათებს, როცა აგენტი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება, ჩვენება და გარიგება ცოცხალ აგენტთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სააგენტოს მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი უძრავი ქონებისთვის: რატომ სწორედ ახლა',
            p: "მყიდველებისა და მოქირავეების უმეტესობა ბინას ტელეფონიდან ეძებს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში ობიექტის შესახებ და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი უძრავი ქონებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში უძრავი ქონების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩვენების ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და უძრავი ქონების ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას ობიექტის, ბიუჯეტის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჩანაწერს ჩვენებაზე და დილით აგენტს გადასცემს დასადასტურებლად. ასე სააგენტოს გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები და უცხოელი მყიდველი',
            p: 'უძრავ ქონებაში დაუშვებელია, ბოტმა ფასი ან ობიექტის სტატუსი გამოიგონოს, ან იურიდიული რჩევა მისცეს. სწორად აწყობილი ასისტენტი მხოლოდ სააგენტოს მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, გადასახადებსა და სამართლებრივ დეტალებზე კი საუბარს აგენტს გადასცემს. რუსულ და ინგლისურ ენებზე მკაფიო პასუხი უცხოელ მყიდველს საჭირო ინფორმაციის მიღებაში ეხმარება.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი უძრავი ქონებისთვის?',
        aeoBody:
          'AI ასისტენტი უძრავი ქონებისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს ობიექტების ფასთა შუალედებს, ფილტრავს ბიუჯეტითა და უბნით, წერს კლიენტს ჩვენებაზე, აგროვებს სახელს, ნომერსა და სასურველ დროს და დილით აგენტს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სააგენტოსთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-real-estate-agencies-georgia', label: 'AI უძრავი ქონების სააგენტოებისთვის' },
        { slug: 'ai-real-estate-development-georgia-automation', label: 'AI დეველოპერებისთვის: გაყიდვების ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for real estate: viewing booking 24/7',
      description:
        'AI assistant for real estate agencies and developers in Tbilisi. Answers clients at night, books the viewing and hands it to your agent.',
      eyebrow: 'AI assistant for real estate',
      h1: 'A buyer saves a listing at 23:05.',
      h1Accent: 'The viewing is already being booked.',
      lead: 'In the evening a buyer saves a listing and writes about a viewing. The AI assistant checks the listing status from approved information, clarifies area, budget and payment method, then hands the request to the agent.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Tamar',
      chatRole: 'Domus Tbilisi, demo agency assistant',
      chatGreeting: 'I am Tamar, the Domus Tbilisi assistant. I will find a listing by district and budget and book your viewing, day or night.',
      chatPlaceholder: 'Ask about a listing, district or viewing...',
      chatChips: ['Is this listing still available?', 'Can you book me a viewing on Saturday?', 'Do you have a two-room in Saburtalo?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where an agency loses clients',
      pains: [
        { h: 'Clients search for a listing in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message several agencies at once', p: '"Is this flat available? Can I view it tomorrow?" Clarify the area, budget and payment method, then offer a viewing time for a suitable property.' },
        { h: 'An apartment question needs a viewing time', p: 'Clarify the area, budget and payment method, then offer an available time to view a suitable property.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles price and budget correctly', p: 'Quotes your real price range, filters by budget and district, and leaves the exact price to the agent. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the viewing details', p: 'Listing or budget and district, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your agent confirms in the morning', p: 'Every night inquiry lands in one list. The agent calls, confirms the listing is available, and the client is booked for a viewing.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price and availability information', p: 'It answers only from the data you provided. The exact price and status of a listing are confirmed by the agent.' },
        { h: 'It does not confirm viewings by itself', p: 'A booking is always provisional; the final word is your agent. Your schedule stays in your hands.' },
        { h: 'It gives no legal advice', p: 'Taxes, property registration, legal details: the bot takes a phone number and passes the case to your agent. It does not play lawyer.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your agency',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a real estate agency?', a: 'Timing depends on the agreed scope: we need your listing base, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind. This matters especially for foreign buyers.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set, filters by budget and district, and hands over to the agent for the exact price and availability. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the agent?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation, the viewing and the deal stay with a live agent.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your agency, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for real estate: why right now',
            p: "Most buyers and renters look for a flat from the phone, after working hours. They message on Instagram and Messenger about a listing and expect a reply within minutes. After the agreed activation, the AI chatbot for real estate can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the property market is crowded and decisions are made fast.",
          },
          {
            h: 'Booking a viewing, not just a chat',
            p: "The main difference between a simple chatbot and a real estate assistant is the booking logic. The assistant gathers the listing, budget, preferred time, name and phone, creates a provisional viewing booking and hands it to the agent in the morning for confirmation. This keeps the agency schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers and the foreign buyer',
            p: 'In real estate it is unacceptable for a bot to invent a price or a listing status, or to give legal advice. A properly configured assistant uses only the information the agency provided, answers on prices with ranges, and passes tax and legal details to the agent. A clear reply in Russian and English helps a foreign buyer understand the available information before speaking with an agent.',
          },
        ],
        aeoH: 'What does an AI assistant for real estate do?',
        aeoBody:
          'An AI assistant for real estate is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes listing price ranges, filters by budget and district, books the client for a viewing, collects the name, number and preferred time, and hands it to the agent in the morning. It uses only approved information; unlisted details are confirmed by the team. For the agency the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-real-estate-agencies-georgia', label: 'AI for real estate agencies in Georgia' },
        { slug: 'ai-real-estate-development-georgia-automation', label: 'AI for developers: sales automation' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для недвижимости: запись на показ 24/7',
      description:
        'AI-ассистент для агентств недвижимости и застройщиков в Тбилиси. Отвечает клиентам ночью, проверяет доступность объекта, записывает на показ и передаёт агенту.',
      eyebrow: 'AI-ассистент для недвижимости',
      h1: 'Покупатель сохраняет объявление в 23:05.',
      h1Accent: 'Показ уже записывается.',
      lead: 'Вечером покупатель сохраняет объявление и пишет о просмотре. AI-ассистент проверяет статус объекта по утверждённой информации, уточняет район, бюджет и способ оплаты, затем передаёт запрос агенту.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Тамара',
      chatRole: 'Домус Тбилиси, ассистент демо-агентства',
      chatGreeting: 'Я Тамара, ассистент агентства Домус Тбилиси. Подберу объект по району и бюджету и запишу на показ, днём или ночью.',
      chatPlaceholder: 'Спросите об объекте, районе или показе...',
      chatChips: ['Этот объект ещё доступен?', 'Запишете на показ в субботу?', 'Есть двухкомнатная на Сабуртало?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где агентство теряет клиентов',
      pains: [
        { h: 'Клиент ищет объект вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в несколько агентств сразу', p: '«Этот объект доступен? Показ завтра можно?» Уточните район, бюджет и способ оплаты, затем предложите время просмотра подходящего объекта.' },
        { h: 'Вопрос о квартире должен вести к просмотру', p: 'Уточните район, бюджет и способ оплаты, затем предложите свободное время для просмотра подходящего объекта.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит цену и бюджет', p: 'Называет вашу реальную вилку, фильтрует по бюджету и району, а точную цену оставляет агенту. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает детали показа', p: 'Объект или бюджет и район, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром агент подтверждает', p: 'Все ночные обращения в одном списке. Агент звонит, подтверждает доступность объекта, клиент записан на показ.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает показ сам', p: 'Запись всегда предварительная, финальное слово за звонком агента. Ваш график остаётся в ваших руках.' },
        { h: 'Не даёт юридических советов', p: 'Налоги, регистрация собственности, правовые детали: бот берёт номер и передаёт случай агенту. В юриста не играет.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего агентства',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для недвижимости?', a: 'Сроки зависят от согласованного объёма: нужны база объектов, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же. Это особенно важно для иностранных покупателей.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку, фильтрует по бюджету и району, а для точной цены и доступности передаёт агенту. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит агента?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение, показ и сделка остаются за живым агентом.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем агентстве, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для недвижимости: почему именно сейчас',
            p: "Большинство покупателей и арендаторов ищут квартиру с телефона, после рабочего дня. Они пишут в Instagram и Messenger об объекте и ждут ответа за минуты. После согласованного включения AI-чатбот для недвижимости отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок недвижимости перегружен, и решения принимаются быстро.",
          },
          {
            h: 'Запись на показ, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента по недвижимости в логике записи. Ассистент собирает объект, бюджет, удобное время, имя и телефон, создаёт предварительную запись на показ и утром передаёт агенту на подтверждение. Так график агентства остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы и иностранный покупатель',
            p: 'В недвижимости недопустимо, чтобы бот выдумывал цену или статус объекта или давал юридические советы. Правильно настроенный ассистент использует только переданную агентством информацию, отвечает по ценам вилками, а вопросы налогов и права передаёт агенту. Чёткий ответ на русском и английском помогает иностранному покупателю понять доступную информацию до разговора с агентом.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для недвижимости?',
        aeoBody:
          "AI-ассистент для недвижимости это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен по объектам, фильтрует по бюджету и району, записывает клиента на показ, собирает имя, номер и удобное время и утром передаёт агенту. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для агентства вечерние и выходные обращения можно передавать команде по согласованным правилам; итог подтверждает агент.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-real-estate-agencies-georgia', label: 'AI для агентств недвижимости в Грузии' },
        { slug: 'ai-real-estate-development-georgia-automation', label: 'AI для застройщиков: автоматизация продаж' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
