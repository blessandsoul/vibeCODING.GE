import type { NicheEntry } from '../types';

/**
 * Tour operators and travel agencies (ტუროპერატორები). The demo persona is a
 * generic Tbilisi tour operator (Caucasia Tour), so the landing copy is tuned to
 * the tour keyword: day tours, seat availability, provisional booking and RU/EN
 * tourists rather than the generic "clinics" term.
 */
export const tour: NicheEntry = {
  key: 'tour',
  slug: 'ai-chatbot-turebistvis',
  serviceType: 'AI Chatbot for Tour Operators and Travel Agencies',
  persona: {
    botName: 'ნუცა',
    brand: 'კავკასია ტური',
    bizType: 'ტუროპერატორი და ტურისტული სააგენტო',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. ტრანსფერი ტურის ფასში შედის.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ერთდღიანი ტურები (ყაზბეგი, კახეთი, ბაკურიანი) 80-200 ლარი; ღვინის ტური კახეთში; ჯგუფური და ინდივიდუალური ტურები; ტრანსფერი ფასში შედის. ჯავშანი წინასწარ, ადგილების რაოდენობა შეზღუდულია. გადახდა: ნაღდი ან ბარათი.',
    booking:
      'როცა კლიენტს ტურის ჯავშანი უნდა, ჯერ ჰკითხე რომელი ტური და თარიღი აწყობს და რამდენი ადამიანია, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ დაგიჯავშნეთ [ტური, თარიღი] [N] ადამიანზე. დილით ოპერატორი დაგირეკავთ ადგილების დასადასტურებლად." ჯავშანს საბოლოოდ შენ არ ადასტურებ, ეს ოპერატორის ზარია.',
    guardrails: [
      'თავისუფალ თარიღებსა და ჯგუფის ზომას საბოლოოდ ოპერატორი ადასტურებს.',
      'ამინდზე დამოკიდებულ ცვლილებაზე: სთხოვე ტელეფონი და უთხარი, რომ ოპერატორი დაგირეკავთ და დეტალებს შეათანხმებთ.',
    ],
    customerNoun: 'ტურისტი',
    followupDomains:
      'გასვლის დრო და აყვანის ადგილი, ტურის ხანგრძლივობა, რა შედის ფასში, რა ჩავიცვათ და რა წავიღოთ, გადახდის მეთოდი',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ტუროპერატორებისთვის: ტურების ჯავშანი 24/7',
      description:
        'AI ასისტენტი ტუროპერატორებისა და ტურისტული სააგენტოებისთვის თბილისში. პასუხობს ტურისტებს ღამითაც, ასახელებს ტურის ფასს, ჯავშნის ადგილს და გადასცემს ოპერატორს.',
      eyebrow: 'AI ასისტენტი ტუროპერატორებისთვის',
      h1: 'ტურისტი 22:50-ზე ხვალინდელ ტურს ეძებს.',
      h1Accent: 'ადგილი უკვე იჯავშნება.',
      lead: 'ღამით ტურისტი ხვალინდელ ტურზე წერს. AI ასისტენტი დამტკიცებული ინფორმაციით ამოწმებს მარშრუტსა და ხელმისაწვდომობას, იწერს სახელს, ნომერსა და თარიღს, შემდეგ კი მოთხოვნას ოპერატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ნუცა',
      chatRole: 'კავკასია ტური, დემო სააგენტოს ასისტენტი',
      chatGreeting:
        'ნუცა ვარ, კავკასია ტურის ასისტენტი. მოგიყვებით ტურებზე, ვნახავ თავისუფალ ადგილებს და დაგიჯავშნით ნებისმიერ დროს.',
      chatPlaceholder: 'ჰკითხეთ ტურზე, თარიღზე ან თავისუფალ ადგილებზე...',
      chatChips: ['ხვალ ყაზბეგზე ადგილი გაქვთ?', 'რა ღირს ღვინის ტური?', 'ტური რამდენ საათს გრძელდება?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ტუროპერატორი ტურისტებს',
      pains: [
        {
          h: 'ტურისტი საღამოს ირჩევს ტურს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ სააგენტოს ერთდროულად',
          p: '«შაბათს ყაზბეგის ტური გაქვთ? რა ღირს?» დააზუსტეთ მგზავრობის თარიღი, ჯგუფის ზომა და ინტერესები, შემდეგ გაუგზავნეთ მარშრუტი და დაჯავშნის ნაბიჯი.',
        },
        {
          h: 'ტურის კითხვას თარიღი და ჯგუფის შემადგენლობა აკონკრეტებს',
          p: 'დააზუსტეთ მგზავრობის თარიღი, მონაწილეების რაოდენობა და ინტერესები, შემდეგ კი ხელმისაწვდომი მარშრუტი და დაჯავშნის შემდეგი ნაბიჯი გაუგზავნეთ.',
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
          p: 'ასახელებს ტურის რეალურ ფასს, ამბობს რა შედის მასში და ჯავშანზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჯავშნის დეტალებს',
          p: 'ტური, სასურველი თარიღი, ადამიანების რაოდენობა, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ოპერატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ოპერატორი რეკავს, ადასტურებს ადგილებს და ტურისტი თქვენს ჯგუფშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჯავშანს',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ოპერატორის ზარია. თავისუფალი ადგილები თქვენს კონტროლში რჩება.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'ამინდით გამოწვეული ცვლილება, ინდივიდუალური მარშრუტი, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი ტუროპერატორისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება ტურების სია, ფასები და თავისუფალი თარიღები; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და უცხოელ ტურისტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა ტურისტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ტურის ფასს, ამბობს რა შედის მასში და ჯავშანზე იწვევს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ოპერატორს?',
          a: 'არა. ის ფარავს იმ საათებს, როცა ოპერატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის სეზონი. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სააგენტოს მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ტუროპერატორებისთვის: რატომ სწორედ ახლა',
            p: "ტურისტების უმეტესობა ტურს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან, ხშირად რუსულ ან ინგლისურ ენაზე. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ტუროპერატორებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ტურისტული ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჯავშანი და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ტუროპერატორის ასისტენტს შორის ჯავშნის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას ტურის, სასურველი თარიღის, ჯგუფის ზომის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ოპერატორს გადასცემს ადგილების დასადასტურებლად. ასე სააგენტოს გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები თარიღებსა და ამინდზე',
            p: 'ტურიზმში დაუშვებელია, ბოტმა დაკავებული თარიღი დაპირდეს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ სააგენტოს მიწოდებულ ინფორმაციას იყენებს, ფასზე ზუსტად პასუხობს, ამინდზე დამოკიდებულ ცვლილებას ან ინდივიდუალურ მარშრუტს კი მაშინვე ადამიანს გადასცემს. ეს მიდგომა ტურისტისთვის სანდოა, სააგენტოსთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ტუროპერატორებისთვის?',
        aeoBody:
          'AI ასისტენტი ტუროპერატორებისთვის არის ჩატბოტი, რომელიც ტურისტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს, ქართულ, რუსულ და ინგლისურ ენაზე. ის ასახელებს ტურების ფასს, ამბობს რა შედის მასში, იწერს სახელს, ნომერსა და სასურველ თარიღს, ქმნის წინასწარ ჯავშანს და დილით ოპერატორს გადასცემს. ის არ დებს დაპირებას დაკავებულ თარიღზე, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სააგენტოსთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-tourism-agencies-georgia', label: 'AI ტურისტული სააგენტოებისთვის' },
        { slug: 'ai-for-hotels-georgia-guide', label: 'AI სასტუმროებისთვის: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს ტურისტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for tour operators: tour booking 24/7',
      description:
        'AI assistant for tour operators and travel agencies in Tbilisi. Answers tourists at night, quotes the tour price, books a seat and hands it to your operator.',
      eyebrow: 'AI assistant for tour operators',
      h1: 'A tourist looks for a tour tomorrow at 22:50.',
      h1Accent: 'A seat is already being booked.',
      lead: 'At night a tourist asks about tomorrow’s tour. The AI assistant checks the itinerary and availability from approved information, records the name, phone and date, then hands the request to the operator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Nutsa',
      chatRole: 'Caucasia Tour, demo agency assistant',
      chatGreeting: 'I am Nutsa, the Caucasia Tour assistant. I can tell you about the tours, check free seats and hold a booking for you any time of day.',
      chatPlaceholder: 'Ask about a tour, a date or free seats...',
      chatChips: ['Any seats on Kazbegi tomorrow?', 'How much is the wine tour?', 'How long does the tour last?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a tour operator loses tourists',
      pains: [
        { h: 'Tourists choose a tour in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message two or three agencies at once', p: '"Do you have the Kazbegi tour on Saturday? How much is it?" Clarify the travel dates, group size and interests, then send an itinerary and the next booking step.' },
        { h: 'A tour question needs dates and group details', p: 'Clarify travel dates, group size and interests, then send an available itinerary and the next booking step.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes the real tour price, says what is included and invites to book. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Tour, preferred date, number of people, name, phone. With an optional provisional slot.' },
        { h: 'Your operator confirms in the morning', p: 'Every night inquiry lands in one list. The operator calls, confirms the seats, and the tourist is in your group.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the operator will clarify.' },
        { h: 'It does not confirm bookings by itself', p: 'A booking is always provisional; the final word is your operator. Available seats stay in your control.' },
        { h: 'It hands hard cases to a human', p: 'A weather change, a custom route, an unusual request: the bot takes a phone number and passes the case to a person.' },
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
        { q: 'How fast can the assistant go live for a tour operator?', a: 'Timing depends on the agreed scope: we need your tour list, prices and open dates; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies to a foreign tourist in kind.' },
        { q: 'What happens when a tourist asks the price?', a: 'The bot quotes the tour price you set, says what is included and invites the tourist to book. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the operator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak season. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your agency, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for tour operators: why now',
            p: "Most tourists choose a tour from their phone, after working hours. They write on Instagram and Messenger and expect an answer within minutes, often in Russian or English. After the agreed activation, the AI chatbot for tour operators can answer at night using only the information you approve and hand complex requests to the team. The Tbilisi tourism market is crowded and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a tour operator assistant is the booking logic. The assistant collects the tour, the preferred date, the group size, the name and the phone, creates a provisional booking and hands it to the operator in the morning to confirm the seats. That way the agency schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers about dates and weather',
            p: 'In tourism a bot must never promise a booked-out date or invent a price. A correctly built assistant uses only the information the agency supplied, answers precisely on price, and passes a weather-driven change or a custom route straight to a human. This approach feels trustworthy to the tourist and keeps the agency reputation calm.',
          },
        ],
        aeoH: 'What does an AI assistant for tour operators do?',
        aeoBody:
          'An AI assistant for tour operators is a chatbot that answers tourists messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day, in Georgian, Russian and English. It quotes the tour price, says what is included, records the name, phone and preferred date, creates a provisional booking and hands it to the operator in the morning. It does not promise a booked-out date, uses only approved information; unlisted details are confirmed by the team. For the agency the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-tourism-agencies-georgia', label: 'AI for tourism agencies in Georgia' },
        { slug: 'ai-for-hotels-georgia-guide', label: 'AI for hotels: the guide' },
      ],
      ctaLead: 'See it answer your own tourists. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для турагентств: бронирование туров 24/7',
      description:
        'AI-ассистент для туроператоров и турагентств в Тбилиси. Отвечает туристам ночью, называет цену тура, бронирует место и передаёт оператору.',
      eyebrow: 'AI-ассистент для туроператоров',
      h1: 'Турист в 22:50 ищет тур на завтра.',
      h1Accent: 'Место уже бронируется.',
      lead: 'Ночью турист спрашивает о завтрашнем туре. AI-ассистент проверяет маршрут и доступность по утверждённой информации, собирает имя, номер и дату, затем передаёт запрос оператору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Нуца',
      chatRole: 'Кавкасия Тур, ассистент демо-агентства',
      chatGreeting: 'Я Нуца, ассистент Кавкасия Тур. Расскажу про туры, проверю свободные места и придержу бронь в любое время суток.',
      chatPlaceholder: 'Спроси про тур, дату или свободные места...',
      chatChips: ['Есть места в Казбеги на завтра?', 'Сколько стоит винный тур?', 'Сколько длится тур?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где турагентство теряет туристов',
      pains: [
        { h: 'Турист выбирает тур вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в два-три агентства одновременно', p: '«Есть тур в Казбеги в субботу? Сколько стоит?» Уточните даты поездки, размер группы и интересы, затем отправьте маршрут и следующий шаг для бронирования.' },
        { h: 'Вопрос о туре требует дат и состава группы', p: 'Уточните даты поездки, число участников и интересы, затем отправьте доступный маршрут и следующий шаг для бронирования.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет реальную цену тура, говорит что в неё входит и приглашает забронировать. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает бронь', p: 'Тур, желаемая дата, количество человек, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром оператор подтверждает', p: 'Все ночные обращения в одном списке. Оператор звонит, подтверждает места, турист в вашей группе.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает бронь сам', p: 'Бронь всегда предварительная, финальное слово за звонком оператора. Свободные места остаются под вашим контролем.' },
        { h: 'Сложное передаёт человеку', p: 'Изменение из-за погоды, индивидуальный маршрут, нестандартная просьба: бот берёт номер и передаёт случай человеку.' },
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
        { q: 'Как быстро ассистент запускается для туроператора?', a: 'Сроки зависят от согласованного объёма: нужны список туров, цены и свободные даты; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает иностранному туристу на нём же.' },
        { q: 'Что происходит, когда турист спрашивает цену?', a: 'Бот называет заданную вами цену тура, говорит что в неё входит и приглашает забронировать. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит оператора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковый сезон. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем агентстве, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для туроператоров: почему именно сейчас',
            p: "Большинство туристов выбирают тур с телефона, после рабочего дня. Они пишут в Instagram и Messenger и ждут ответа за минуты, часто на русском или английском. После согласованного включения AI-чатбот для туроператоров отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Туристический рынок в Тбилиси перегружен, а решение принимается быстро.",
          },
          {
            h: 'Бронь, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента туроператора это логика брони. Ассистент собирает тур, желаемую дату, размер группы, имя и телефон, создаёт предварительную бронь и утром передаёт оператору для подтверждения мест. Так график агентства остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы о датах и погоде',
            p: 'В туризме недопустимо, чтобы бот пообещал занятую дату или выдумал цену. Правильно собранный ассистент использует только переданную агентством информацию, точно отвечает о цене, а изменение из-за погоды или индивидуальный маршрут сразу передаёт человеку. Такой подход надёжен для туриста и репутационно спокоен для агентства.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для туроператоров?',
        aeoBody:
          'AI-ассистент для туроператоров это чатбот, который отвечает на сообщения туристов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток, на грузинском, русском и английском. Он называет цену туров, говорит что в неё входит, записывает имя, номер и желаемую дату, создаёт предварительную бронь и утром передаёт оператору. Он не обещает занятую дату, работает только по утверждённой информации; неизвестные детали уточняет команда. Для агентства результат прост: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-tourism-agencies-georgia', label: 'AI для туристических агентств Грузии' },
        { slug: 'ai-for-hotels-georgia-guide', label: 'AI для отелей: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим туристам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
