import type { NicheEntry } from '../types';

/**
 * Hotels and guesthouses (სასტუმროები). The demo persona is a generic Tbilisi
 * hotel (Old Tbilisi) with a genuinely 24/7 reception, so the landing leans on
 * the international-guest angle: availability, rate by dates and booking,
 * answered instantly in Georgian, Russian and English. proofStat is attributed
 * as a generic owner-level proof slot; no hotel client is implied.
 */
export const hotel: NicheEntry = {
  key: 'hotel',
  slug: 'ai-chatbot-sastumroebistvis',
  serviceType: 'AI Chatbot for Hotels and Guesthouses',
  persona: {
    botName: 'ანა',
    brand: 'სასტუმრო ძველი თბილისი',
    bizType: 'სასტუმრო',
    hours: 'რეცეფცია 24/7, ყოველდღე',
    address: 'თბილისი, ძველი ქალაქი. აეროპორტიდან ტრანსფერი გვაქვს.',
    services:
      'ნომრები: სტანდარტული, დელუქსი და საოჯახო. ფასი დამოკიდებულია სეზონსა და კონკრეტულ თარიღებზე. ადრეული ჩექ-ინი, აეროპორტის ტრანსფერი და საუზმე ფასში შედის. ჯავშანი დეპოზიტით. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა სტუმარს ჯავშანი უნდა, ჯერ ჰკითხე თარიღები (შემოსვლა და გასვლა), ნომრის ტიპი და სტუმრების რაოდენობა, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ დაგიჯავშნეთ [თარიღები]-ზე. დილით ადმინისტრატორი დაგირეკავთ, დაგიდასტურებთ თავისუფალ ნომერსა და ზუსტ ფასს." ჯავშანს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დაკავებულ თარიღს არასოდეს ყიდი: თავისუფალ ნომერსა და ზუსტ ფასს თარიღების მიხედვით ადმინისტრატორი ადასტურებს.',
      'ჯგუფურ ან განსაკუთრებულ თხოვნაზე: სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრატორი პირველ რიგში დაგირეკავთ.',
    ],
    customerNoun: 'სტუმარი',
    followupDomains:
      'ჩექ-ინისა და ჩექ-აუთის დრო, საუზმე და კვება, აეროპორტის ტრანსფერი, გადახდა და დეპოზიტი, გაუქმების პირობები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი სასტუმროებისთვის: ჯავშნები 24/7',
      description:
        'AI ასისტენტი სასტუმროებისა და გესტჰაუსებისთვის თბილისში. პასუხობს სტუმრებს ღამითაც, აგროვებს ჯავშანს და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი სასტუმროებისთვის',
      h1: 'სტუმარი საზღვარგარეთიდან წერს 01:30-ზე.',
      h1Accent: 'ასისტენტმა მის ენაზე უკვე უპასუხა.',
      lead: 'სტუმარი სხვა დროის სარტყელიდან წერს, როცა რეცეფცია ისვენებს. AI ასისტენტი აზუსტებს ჩამოსვლისა და გასვლის თარიღებს, სტუმრების რაოდენობასა და ნომრის ტიპს, შემდეგ კი მოთხოვნას რეცეფციას გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ანა',
      chatRole: 'სასტუმრო ძველი თბილისი, დემო სასტუმროს ასისტენტი',
      chatGreeting:
        'მოგესალმებით! სასტუმრო ძველი თბილისის ასისტენტი ვარ, რეცეფცია 24/7 პასუხობს. მითხარით შემოსვლისა და გასვლის თარიღები და ვნახავ, რა ნომრები გვაქვს თავისუფალი.',
      chatPlaceholder: 'ჰკითხეთ თავისუფალ ნომრებზე, თარიღებზე ან ტრანსფერზე...',
      chatChips: ['თავისუფალი ნომერი გაქვთ 12-14 მარტს?', 'ღამის 2-ზე ჩამოვფრინდები, ჩექ-ინი მექნება?', 'აეროპორტიდან ტრანსფერს აწყობთ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სასტუმრო სტუმრებს',
      pains: [
        {
          h: 'სტუმარი ღამით ირჩევს სასტუმროს',
          p: 'მოგზაურობის დაგეგმვისას, ტელეფონიდან, ხშირად სხვა დროის სარტყლიდან. წერს პირდაპირ Instagram-ში ან WhatsApp-ში, როცა თქვენი რეცეფცია სხვა სტუმარზეა დაკავებული.',
        },
        {
          h: 'წერს ორ-სამ სასტუმროს ერთდროულად',
          p: '«თავისუფალი ნომერი გაქვთ ამ თარიღებზე? რა ღირს?» დააზუსტეთ ჩამოსვლისა და გასვლის თარიღები, სტუმრების რაოდენობა და ნომრის ტიპი, შემდეგ მოთხოვნა რეცეფციას გადასცით ხელმისაწვდომობისა და ტარიფის დასადასტურებლად.',
        },
        {
          h: 'ჯავშნის კითხვას თარიღი და ნომრის ტიპი უნდა მოჰყვეს',
          p: 'ჩამოსვლისა და გასვლის თარიღები, სტუმრების რაოდენობა და ნომრის ტიპი დააზუსტეთ, შემდეგ მოთხოვნა რეცეფციას გადასცით ხელმისაწვდომობისა და ტარიფის დასადასტურებლად.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას, საერთაშორისო სტუმრებისთვისაც.',
        },
        {
          h: 'ფასსა და თავისუფლებაზე კითხვას სწორად უმკლავდება',
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს სეზონისა და თარიღების მიხედვით და ჯავშანზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს ჯავშნის დეტალებს',
          p: 'თარიღები, ნომრის ტიპი, სტუმრების რაოდენობა, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს თავისუფალ ნომერსა და ზუსტ ფასს, სტუმარი კი დაჯავშნილია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'დაკავებულ თარიღს არ ყიდის',
          p: 'ჯავშანი ყოველთვის წინასწარია, თავისუფალ ნომერს საბოლოოდ ადმინისტრატორი ადასტურებს. თქვენი დატვირთვა თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ თხოვნას ადამიანს გადასცემს',
          p: 'ჯგუფური ჯავშანი, ღონისძიება, განსაკუთრებული პირობა: ასეთ დროს ბოტი ტელეფონს იღებს და საქმეს ადამიანს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სასტუმროსთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და WhatsApp-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი სასტუმროსთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება ნომრების ტიპები, ფასის ლოგიკა სეზონის მიხედვით და პირობები; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის რუსული და ინგლისური?',
          a: 'დიახ, სასტუმროსთვის ეს მთავარია: ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და საერთაშორისო სტუმარს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა სტუმარი თავისუფალ ნომერსა და ფასს ეკითხება?',
          a: 'ბოტი ასახელებს ფასთა შუალედს თარიღების მიხედვით და ჯავშანზე იწვევს, თავისუფლებას კი ადმინისტრატორი ადასტურებს. ის იყენებს მხოლოდ დადასტურებულ ხელმისაწვდომობის ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს რეცეფციას?',
a: 'არა. ის ფარავს იმ წუთებს, როცა რეცეფცია ფიზიკურად ვერ პასუხობს: ღამე, პიკის საათები, სხვა სტუმრის მიღება. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სასტუმროს მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი სასტუმროებისთვის: რატომ სწორედ ახლა',
            p: "სტუმრების უმეტესობა სასტუმროს ტელეფონიდან ირჩევს, ხშირად ღამით და სხვა ქვეყნიდან, სხვა დროის სარტყელში. ისინი წერენ Instagram-სა და WhatsApp-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი სასტუმროებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სასტუმროების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჯავშანი და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სასტუმროს ასისტენტს შორის ჯავშნის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას თარიღების, ნომრის ტიპის, სტუმრების რაოდენობის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს თავისუფლებისა და ზუსტი ფასის დასადასტურებლად. ასე სასტუმროს დატვირთვა ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები თავისუფლებასა და ფასზე',
            p: 'სასტუმროსთვის დაუშვებელია, ბოტმა დაკავებული თარიღი გაყიდოს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ სასტუმროს მიწოდებულ ინფორმაციას იყენებს, ფასზე შუალედებით პასუხობს სეზონის მიხედვით, თავისუფალ ნომერსა და ზუსტ ფასს კი ადამიანს ადასტურებინებს. ჯგუფურ ჯავშანსა და ღონისძიებას მაშინვე ადამიანს გადასცემს. ეს მიდგომა სტუმრისთვის მკაფიოა, სასტუმროსთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი სასტუმროსთვის?',
        aeoBody:
          'AI ასისტენტი სასტუმროსთვის არის ჩატბოტი, რომელიც სტუმრების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს, ქართულად, რუსულად და ინგლისურად. ის ასახელებს ნომრების ფასთა შუალედებს სეზონისა და თარიღების მიხედვით, სტუმარს ჯავშანზე იწვევს, იწერს სახელს, ტელეფონსა და თარიღებს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ ყიდის დაკავებულ თარიღს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სასტუმროსთვის შედეგი მარტივია: ღამის და საერთაშორისო სტუმრების მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-hotels-georgia-guide', label: 'AI სასტუმროებისთვის: გზამკვლევი' },
        { slug: 'ai-voice-agents-clinics-restaurants-hotels-georgia', label: 'AI ხმოვანი ასისტენტები კლინიკებს, რესტორნებსა და სასტუმროებს' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს სტუმრებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for hotels: bookings 24/7',
      description:
        'AI assistant for hotels and guesthouses in Tbilisi. Answers guests at night, checks room availability, collects the booking and hands it to your reception.',
      eyebrow: 'AI assistant for hotels',
      h1: 'A guest writes from abroad at 01:30.',
      h1Accent: 'The assistant already answered in their language.',
      lead: 'A guest writes from another time zone while reception is asleep. The AI assistant clarifies check-in and check-out dates, guest count and room type, then hands the request to reception for confirmation.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Ana',
      chatRole: 'Old Tbilisi Hotel, demo hotel assistant',
      chatGreeting: 'Welcome! I am the Old Tbilisi Hotel assistant, our reception answers 24/7. Tell me your check-in and check-out dates and I will see what rooms we have free.',
      chatPlaceholder: 'Ask about free rooms, dates or transfer...',
      chatChips: ['Do you have a free room on March 12-14?', 'I land at 2am, can I still check in?', 'Do you arrange an airport transfer?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a hotel loses guests',
      pains: [
        { h: 'Guests choose a hotel at night', p: 'While planning a trip, from the phone, often from another time zone. They write straight into Instagram or WhatsApp, while your reception is busy with another guest.' },
        { h: 'They message two or three hotels at once', p: '"Do you have a free room for these dates? How much?" Clarify check-in and check-out dates, guest count and room type, then hand the request to reception to confirm availability and rate.' },
        { h: 'A booking question needs dates and room type', p: 'Clarify check-in and check-out dates, guest count and room type, then hand the request to reception to confirm availability and rate.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected, for international guests too.' },
        { h: 'Handles the rate and availability question correctly', p: 'Quotes your real rate range by season and dates and invites to book. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the booking', p: 'Dates, room type, number of guests, name, phone. With an optional provisional hold.' },
        { h: 'Your reception confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms the free room and the exact rate, and the guest is booked.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved rate information', p: 'It answers only from the data you provided. The exact rate by dates is confirmed by your administrator.' },
        { h: 'It does not sell an occupied date', p: 'A booking is always provisional; a free room is confirmed by the administrator. Your occupancy stays in your hands.' },
        { h: 'It hands hard requests to a human', p: 'Group bookings, events, special conditions: the bot takes a phone number and passes the case to a person.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your hotel',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and WhatsApp by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a hotel?', a: 'Timing depends on the agreed scope: we need your room types, the seasonal rate logic and conditions; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Russian and English?', a: 'Yes, and for a hotel this is the point: the assistant speaks Georgian, Russian and English, detects the language automatically and replies to an international guest in kind.' },
        { q: 'What happens when a guest asks about a free room and the rate?', a: 'The bot quotes the rate range by dates and invites the guest to book, while availability is confirmed by the administrator. It does not confirm an occupied date; the administrator confirms availability and rates.' },
        { q: 'Does it replace the reception?', a: 'No. It covers the minutes a human cannot: night, peak load, checking in another guest. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your hotel, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for hotels: why right now',
            p: "Most guests choose a hotel from their phone, often at night and from another country, in a different time zone. They write in Instagram and WhatsApp and expect an answer within minutes. After the agreed activation, the AI chatbot for hotels can answer at night using only the information you approve and hand complex requests to the team. The hotel market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a hotel assistant is the booking logic. The assistant collects the dates, room type, number of guests, name and phone, creates a provisional booking and hands it to the administrator in the morning to confirm availability and the exact rate. This keeps the hotel occupancy under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on availability and rate',
            p: 'For a hotel it is unacceptable for the bot to sell an occupied date or invent a rate. A properly set up assistant uses only the information the hotel provided, answers on price with ranges by season, and lets a human confirm the free room and the exact rate. Group bookings and events go straight to a person. This approach is clear for the guest and reputationally calm for the hotel.',
          },
        ],
        aeoH: 'What does an AI assistant do for a hotel?',
        aeoBody:
          'An AI assistant for a hotel is a chatbot that answers guest messages in Messenger, Instagram, WhatsApp and on the site, at any hour of the day or night, in Georgian, Russian and English. It quotes room rate ranges by season and dates, invites the guest to book, records the name, phone and dates, creates a provisional booking and hands it to the administrator in the morning. It does not sell an occupied date, uses only approved information; unlisted details are confirmed by the team. For the hotel the result is simple: night and international guest inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-hotels-georgia-guide', label: 'AI for hotels in Georgia: the guide' },
        { slug: 'ai-voice-agents-clinics-restaurants-hotels-georgia', label: 'AI voice agents for clinics, restaurants and hotels' },
      ],
      ctaLead: 'See it answer your own guests. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для отелей: бронирования 24/7',
      description:
        'AI-ассистент для отелей и гостевых домов в Тбилиси. Отвечает гостям ночью, проверяет свободные номера, собирает бронь и передаёт на ресепшн.',
      eyebrow: 'AI-ассистент для отелей',
      h1: 'Гость пишет из-за границы в 01:30.',
      h1Accent: 'Ассистент уже ответил на его языке.',
      lead: 'Гость пишет из другого часового пояса, когда ресепшн спит. AI-ассистент уточняет даты заезда и выезда, число гостей и тип номера, затем передаёт запрос на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Ана',
      chatRole: 'Отель Старый Тбилиси, ассистент демо-отеля',
      chatGreeting: 'Здравствуйте! Я ассистент отеля Старый Тбилиси, ресепшн отвечает 24/7. Назовите даты заезда и выезда, и я посмотрю, какие номера свободны.',
      chatPlaceholder: 'Спросите про свободные номера, даты или трансфер...',
      chatChips: ['Есть свободный номер 12-14 марта?', 'Прилетаю в 2 ночи, смогу заселиться?', 'Организуете трансфер из аэропорта?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где отель теряет гостей',
      pains: [
        { h: 'Гость выбирает отель ночью', p: 'Планируя поездку, с телефона, часто из другого часового пояса. Пишет сразу в Instagram или WhatsApp, когда ваш ресепшн занят другим гостем.' },
        { h: 'Пишет в два-три отеля одновременно', p: '«Есть свободный номер на эти даты? Сколько стоит?» Уточните даты заезда и выезда, число гостей и тип номера, затем передайте запрос на ресепшн для подтверждения доступности и тарифа.' },
        { h: 'Вопрос о бронировании требует дат и типа номера', p: 'Уточните даты заезда и выезда, число гостей и тип номера, затем передайте запрос на ресепшн для подтверждения доступности и тарифа.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически, в том числе для иностранных гостей.' },
        { h: 'Правильно держит вопрос о цене и наличии', p: 'Называет вашу реальную вилку по сезону и датам и приглашает забронировать. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает бронь', p: 'Даты, тип номера, число гостей, имя, телефон. По желанию с предварительной бронью.' },
        { h: 'Утром ресепшн подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает свободный номер и точную цену, гость забронирован.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не продаёт занятую дату', p: 'Бронь всегда предварительная, свободный номер подтверждает администратор. Ваша загрузка остаётся в ваших руках.' },
        { h: 'Сложное передаёт человеку', p: 'Групповая бронь, мероприятие, особые условия: бот берёт номер телефона и передаёт случай человеку.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего отеля',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и WhatsApp без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для отеля?', a: 'Сроки зависят от согласованного объёма: нужны типы номеров, логика цен по сезону и условия; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-русски и по-английски?', a: 'Да, и для отеля это главное: ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает иностранному гостю на его языке.' },
        { q: 'Что происходит, когда гость спрашивает про свободный номер и цену?', a: 'Бот называет вилку цен по датам и приглашает забронировать, а наличие подтверждает администратор. Он никогда не продаёт занятую дату и работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { q: 'Он заменит ресепшн?', a: 'Нет. Он закрывает минуты, которые человек не успевает: ночь, пиковую нагрузку, заселение другого гостя. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем отеле, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для отелей: почему именно сейчас',
            p: "Большинство гостей выбирают отель с телефона, часто ночью и из другой страны, в другом часовом поясе. Они пишут в Instagram и WhatsApp и ждут ответа за минуты. После согласованного включения AI-чатбот для отелей отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок отелей в Тбилиси перегружен, и решение принимается быстро.",
          },
          {
            h: 'Бронь, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента отеля это логика брони. Ассистент собирает даты, тип номера, число гостей, имя и телефон, создаёт предварительную бронь и утром передаёт администратору для подтверждения свободного номера и точной цены. Так загрузка отеля остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы о наличии и цене',
            p: 'Для отеля недопустимо, чтобы бот продал занятую дату или выдумал цену. Правильно настроенный ассистент использует только переданную отелем информацию, отвечает о цене вилками по сезону, а свободный номер и точную цену даёт подтвердить человеку. Групповую бронь и мероприятие сразу передаёт человеку. Такой подход понятен гостю и репутационно спокоен для отеля.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для отеля?',
        aeoBody:
          'AI-ассистент для отеля это чатбот, который отвечает на сообщения гостей в Messenger, Instagram, WhatsApp и на сайте, в любое время суток, по-грузински, по-русски и по-английски. Он называет вилки цен на номера по сезону и датам, приглашает гостя забронировать, записывает имя, телефон и даты, создаёт предварительную бронь и утром передаёт администратору. Он не продаёт занятую дату, работает только по утверждённой информации; неизвестные детали уточняет команда. Для отеля результат простой: ночные и иностранные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-hotels-georgia-guide', label: 'AI для отелей в Грузии: гид' },
        { slug: 'ai-voice-agents-clinics-restaurants-hotels-georgia', label: 'AI голосовые агенты для клиник, ресторанов и отелей' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим гостям. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
