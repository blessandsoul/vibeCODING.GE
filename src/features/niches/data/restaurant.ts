import type { NicheEntry } from '../types';

/**
 * Restaurants (რესტორნები). The demo persona is a table-reservation host for a
 * generic Tbilisi restaurant (SUPRA Tbilisi), tuned to the reservation and
 * banquet keyword rather than delivery. The booking flow collects date, time
 * and party size, then name and phone, and hands a provisional reservation to a
 * human. proofStat is attributed to a generic aiNOW client, never a real
 * restaurant client.
 */
export const restaurant: NicheEntry = {
  key: 'restaurant',
  slug: 'ai-chatbot-restornebistvis',
  serviceType: 'AI Chatbot for Restaurants',
  persona: {
    botName: 'ნათია',
    brand: 'სუფრა თბილისი',
    bizType: 'რესტორანი',
    hours: 'ყოველდღე 12:00-24:00',
    address: 'თბილისი, ცენტრი. დარბაზი და ღია ტერასა გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: მაგიდის ჯავშანი უფასოა. ვახშმის საშუალო ანგარიში ერთ სტუმარზე დაახლოებით 40-90 ლარი. ბანკეტი და ღონისძიება სტუმრების რაოდენობით ითვლება, სავარაუდოდ ერთ სტუმარზე 60-150 ლარი მენიუს მიხედვით. დაბადების დღის პაკეტები 200-500 ლარი. მენიუსა და კერძებზე ინფორმაციას გაძლევთ. ჯავშანი წინასწარ. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა სტუმარს მაგიდის დაჯავშნა უნდა, ჯერ ჰკითხე რომელი დღე და დრო აწყობს და რამდენი სტუმარია, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "წინასწარ დაგიჯავშნეთ მაგიდა [დღე, დრო]-ზე, [სტუმრების რაოდენობა] სტუმარზე. ადმინისტრატორი მალე დაგირეკავთ ხელმისაწვდომობის დასადასტურებლად." ჯავშანს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დაკავებულ დროს ან მაგიდას არასოდეს გპირდები, ხელმისაწვდომობას ადმინისტრატორი ადასტურებს.',
      'დიდ ბანკეტს ან განსაკუთრებულ თხოვნას მენეჯერს გადასცემ.',
    ],
    customerNoun: 'სტუმარი',
    followupDomains:
      'მენიუ და კერძები, ტერასა თუ დარბაზი, ბანკეტისა და დაბადების დღის პაკეტები, ცოცხალი მუსიკა და ღონისძიებები, სამუშაო საათები, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი რესტორნებისთვის: მაგიდის ჯავშანი 24/7',
      description:
        'AI ასისტენტი რესტორნებისთვის თბილისში. პასუხობს სტუმრებს ღამითაც, ჯავშნის მაგიდას, აგროვებს ბანკეტის დეტალებს და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი რესტორნებისთვის',
      h1: 'პარასკევი, 22:15. სტუმარი ამაღამ მაგიდას ეძებს.',
      h1Accent: 'ჯავშანი უკვე იწერება.',
      lead: 'პარასკევის საღამოს სტუმარი მაგიდისა და ტერასის შესახებ წერს. AI ასისტენტი ავტომატურად პასუხობს, იწერს სახელს, ნომერს, თარიღსა და სტუმრების რაოდენობას, შემდეგ კი მოთხოვნას ადმინისტრატორს გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ნათია',
      chatRole: 'სუფრა თბილისი, დემო რესტორნის ასისტენტი',
      chatGreeting:
        'მოგესალმებით! სუფრა თბილისის ასისტენტი ვარ. მაგიდის დაჯავშნაზე, მენიუზე თუ ბანკეტზე მკითხეთ, გვიან საღამოსაც პასუხს მიიღებთ.',
      chatPlaceholder: 'ჰკითხეთ მაგიდაზე, მენიუზე ან ბანკეტზე...',
      chatChips: ['ამაღამ ოთხ კაცზე მაგიდა თუ იქნება?', 'ტერასაზე დაჯავშნა შესაძლებელია?', 'ბანკეტი 30 კაცზე რა ღირს?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს რესტორანი სტუმრებს',
      pains: [
        {
          h: 'სტუმარი მაგიდას საღამოს ჯავშნის',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ადმინისტრატორი უკვე დაკავებულია დარბაზში.',
        },
        {
          h: 'წერს ორ-სამ რესტორანს ერთდროულად',
          p: '«შაბათს საღამოს მაგიდა თავისუფალია? ტერასაზე შესაძლებელია?» დააზუსტეთ თარიღი, დრო, სტუმრების რაოდენობა და ტერასის სურვილი, შემდეგ მაგიდის მოთხოვნა ადმინისტრატორს გადასცით დასადასტურებლად.',
        },
        {
          h: 'ბანკეტის კითხვას მენიუ და სივრცე უნდა მოჰყვეს',
          p: 'დააზუსტეთ დამტკიცებული მენიუს ვარიანტი, ბანკეტის მოთხოვნა, თარიღი და სტუმრების რაოდენობა, შემდეგ კი მენეჯერს გადასცით დასადასტურებლად.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'მენიუსა და ფასზე კითხვას სწორად უმკლავდება',
          p: 'პასუხობს მენიუზე, კერძებსა და თქვენს რეალურ ფასთა შუალედზე, ბანკეტს კი სტუმრების რაოდენობით ითვლის. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჯავშნის დეტალებს',
          p: 'თარიღი და დრო, სტუმრების რაოდენობა, სახელი, ტელეფონი. სურვილისამებრ ტერასა თუ დარბაზი.',
        },
        {
          h: 'ადმინისტრატორი ადასტურებს ხელმისაწვდომობას',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს მაგიდას და სტუმარი თქვენს ჯავშანშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჯავშანს',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი დარბაზი და გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'დიდ ბანკეტს ადამიანს გადასცემს',
          p: 'დიდი ბანკეტი, განსაკუთრებული მენიუ, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს მენეჯერს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი რესტორნისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი რესტორნისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება მენიუ, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და სტუმარს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა სტუმარი მაგიდის ხელმისაწვდომობას ეკითხება?',
          a: 'ბოტი აგროვებს თარიღს, დროსა და სტუმრების რაოდენობას, ქმნის წინასწარ ჯავშანს, დაკავებულ დროს კი არ გპირდებათ. ხელმისაწვდომობას ადმინისტრატორი ადასტურებს ზარით.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი დარბაზშია ან ვერ პასუხობს: საღამო, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი რესტორნის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი რესტორნებისთვის: რატომ სწორედ ახლა',
            p: "სტუმრების უმეტესობა რესტორანს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი რესტორნებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სარესტორნო ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჯავშანი და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და რესტორნის ასისტენტს შორის ჯავშნის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას თარიღის, დროის, სტუმრების რაოდენობის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და ადმინისტრატორს გადასცემს დასადასტურებლად. ასე რესტორნის დარბაზი და გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'სანდო პასუხები მენიუსა და ბანკეტზე',
            p: 'რესტორანში დაუშვებელია, ბოტმა დაკავებული მაგიდა დაპირდეს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ რესტორნის მიწოდებულ ინფორმაციას იყენებს, მენიუსა და ფასებზე შუალედებით პასუხობს, დიდი ბანკეტის ან განსაკუთრებული თხოვნის შემთხვევაში კი საუბარს მენეჯერს გადასცემს. ეს მიდგომა სტუმრისთვის გასაგებია, რესტორნისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი რესტორნისთვის?',
        aeoBody:
          'AI ასისტენტი რესტორნისთვის არის ჩატბოტი, რომელიც სტუმრების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის პასუხობს მენიუსა და კერძებზე, ასახელებს ფასთა შუალედებს, ჯავშნის მაგიდას თარიღით, დროითა და სტუმრების რაოდენობით, ქმნის წინასწარ ჯავშანს და ადმინისტრატორს გადასცემს. ის არ გპირდებათ დაკავებულ მაგიდას, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. რესტორნისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'voice-agent-restaurant-reservations', label: 'ხმოვანი აგენტი რესტორნის ჯავშნებისთვის' },
        { slug: 'restaurant-vake-ai-hostess-savings', label: 'რესტორანი ვაკეში: AI ჰოსტესის ეკონომია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს სტუმრებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for restaurants: table reservations 24/7',
      description:
        'AI assistant for restaurants in Tbilisi. Answers guests at night, reserves the table, collects banquet details and hands it to your administrator.',
      eyebrow: 'AI assistant for restaurants',
      h1: 'Friday, 22:15. A guest is looking for a table tonight.',
      h1Accent: 'The reservation is already being written.',
      lead: 'On a Friday night a guest asks about a table and the terrace. The AI assistant replies automatically, records the name, phone, date and party size, then hands the request to the administrator for confirmation.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Natia',
      chatRole: 'SUPRA Tbilisi, demo restaurant assistant',
      chatGreeting: 'Welcome! I am the SUPRA Tbilisi assistant. Ask me about a table, the menu or a banquet, and you will get an answer even late in the evening.',
      chatPlaceholder: 'Ask about a table, the menu or a banquet...',
      chatChips: ['Will there be a table for four tonight?', 'Can I reserve on the terrace?', 'How much is a banquet for 30?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a restaurant loses guests',
      pains: [
        { h: 'Guests reserve a table in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your administrator is already busy in the dining room.' },
        { h: 'They message two or three restaurants at once', p: '"Is a table free on Saturday night? Is the terrace available?" Clarify the date, time, party size and terrace preference, then hand the table request to your administrator.' },
        { h: 'A banquet question needs menu and space details', p: 'Clarify the approved menu option, banquet request, date and guest count, then hand it to the manager for confirmation.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the menu and price question correctly', p: 'Answers on the menu, the dishes and your real price range, and counts a banquet by guest number. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the reservation', p: 'Date and time, party size, name, phone. With an optional terrace or hall preference.' },
        { h: 'Your administrator confirms availability', p: 'Every night inquiry lands in one list. The administrator calls, confirms the table, and the guest is in your book.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not confirm reservations by itself', p: 'A reservation is always provisional; the final word is your administrator. Your dining room and schedule stay in your hands.' },
        { h: 'It hands a large banquet to a human', p: 'A big banquet, a special menu, an unusual request: the bot takes a phone number and passes the case to the manager.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your restaurant',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a restaurant?', a: 'Timing depends on the agreed scope: we need your menu, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a guest asks about table availability?', a: 'The bot collects the date, time and party size and creates a provisional reservation, without promising an occupied slot. Availability is confirmed by the administrator on a call.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human cannot cover: a busy service, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your restaurant, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for restaurants: why now',
            p: "Most guests pick a restaurant from their phone, after service hours. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for restaurants can answer at night using only the information you approve and hand complex requests to the team. The Tbilisi dining market is crowded and the choice is made fast.",
          },
          {
            h: 'A reservation, not just a chat',
            p: "The real difference between a simple chatbot and a restaurant assistant is the reservation logic. The assistant gathers the date, time, party size, name and phone, creates a provisional reservation and passes it to the administrator to confirm. That way the dining room and the schedule stay under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Reliable answers on the menu and banquets',
            p: 'In a restaurant the bot must never promise an occupied table or invent a price. A properly tuned assistant uses only the information the restaurant supplied, answers the menu and prices in ranges, and hands a large banquet or a special request to the manager. This approach is clear for the guest and calm for the restaurant reputation.',
          },
        ],
        aeoH: 'What does an AI assistant for a restaurant do?',
        aeoBody:
          'An AI assistant for a restaurant is a chatbot that answers guest messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It answers questions about the menu and dishes, states price ranges, books a table by date, time and party size, creates a provisional reservation and passes it to the administrator. It does not promise an occupied table, uses only approved information; unlisted details are confirmed by the team. For the restaurant the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'voice-agent-restaurant-reservations', label: 'Voice agent for restaurant reservations' },
        { slug: 'restaurant-vake-ai-hostess-savings', label: 'A Vake restaurant: AI hostess savings' },
      ],
      ctaLead: 'See it answer your own guests. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для ресторанов: бронь столика 24/7',
      description:
        'AI-ассистент для ресторанов в Тбилиси. Отвечает гостям ночью, бронирует столик, собирает детали банкета и передаёт администратору. Демо проверяется по согласованной информации и правилам.',
      eyebrow: 'AI-ассистент для ресторанов',
      h1: 'Пятница, 22:15. Гость ищет столик на сегодня.',
      h1Accent: 'Бронь уже записывается.',
      lead: 'В пятницу вечером гость спрашивает о столике и террасе. AI-ассистент отвечает автоматически, записывает имя, номер, дату и число гостей, затем передаёт запрос администратору на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Натия',
      chatRole: 'Супра Тбилиси, ассистент демо-ресторана',
      chatGreeting: 'Приветствуем! Я ассистент ресторана Супра Тбилиси. Спросите про столик, меню или банкет, ответ придёт даже поздним вечером.',
      chatPlaceholder: 'Спросите про столик, меню или банкет...',
      chatChips: ['Будет столик на четверых сегодня вечером?', 'Можно забронировать на террасе?', 'Сколько стоит банкет на 30?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где ресторан теряет гостей',
      pains: [
        { h: 'Гость бронирует столик вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш администратор уже занят в зале.' },
        { h: 'Пишет в два-три ресторана одновременно', p: '«В субботу вечером есть столик? Терраса свободна?» Уточните дату, время, число гостей и желание сидеть на террасе, затем передайте запрос администратору.' },
        { h: 'Вопрос о банкете требует меню и деталей зала', p: 'Уточните утверждённый вариант меню, запрос на банкет, дату и число гостей, затем передайте его менеджеру на подтверждение.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о меню и цене', p: 'Отвечает по меню, блюдам и вашей реальной вилке цен, а банкет считает по числу гостей. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает бронь', p: 'Дата и время, число гостей, имя, телефон. По желанию терраса или зал.' },
        { h: 'Администратор подтверждает наличие', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает столик, гость в вашей брони.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает бронь сам', p: 'Бронь всегда предварительная, финальное слово за звонком администратора. Ваш зал и график остаются в ваших руках.' },
        { h: 'Большой банкет передаёт человеку', p: 'Большой банкет, особое меню, нестандартная просьба: бот берёт номер и передаёт случай менеджеру.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего ресторана',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для ресторана?', a: 'Сроки зависят от согласованного объёма: нужны меню, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда гость спрашивает про свободный столик?', a: 'Бот собирает дату, время и число гостей и создаёт предварительную бронь, не обещая занятое время. Наличие подтверждает администратор звонком.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек не закрывает: занятый зал, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем ресторане, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для ресторанов: почему именно сейчас',
            p: "Большинство гостей выбирают ресторан с телефона, уже после рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для ресторанов отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Ресторанный рынок Тбилиси перегружен, и решение принимается быстро.",
          },
          {
            h: 'Бронь, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента ресторана в логике брони. Ассистент собирает дату, время, число гостей, имя и телефон, создаёт предварительную бронь и передаёт администратору на подтверждение. Так зал и график остаются под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Надёжные ответы о меню и банкете',
            p: 'В ресторане недопустимо, чтобы бот обещал занятый столик или выдумывал цену. Правильно настроенный ассистент использует только предоставленную рестораном информацию, отвечает о меню и ценах вилками, а большой банкет или особую просьбу передаёт менеджеру. Такой подход понятен гостю и репутационно спокоен для ресторана.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для ресторана?',
        aeoBody:
          'AI-ассистент для ресторана это чатбот, который отвечает на сообщения гостей в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он отвечает о меню и блюдах, называет вилки цен, бронирует столик по дате, времени и числу гостей, создаёт предварительную бронь и передаёт администратору. Он не обещает занятый столик, работает только по утверждённой информации; неизвестные детали уточняет команда. Для ресторана результат прост: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'voice-agent-restaurant-reservations', label: 'Голосовой агент для броней ресторана' },
        { slug: 'restaurant-vake-ai-hostess-savings', label: 'Ресторан в Ваке: экономия на AI-хостес' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим гостям. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
