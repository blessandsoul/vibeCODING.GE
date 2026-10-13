import type { NicheEntry } from '../types';

/**
 * Tattoo and piercing studios (ტატუ და პირსინგის სტუდია). The demo persona is a
 * generic studio (Melani Tbilisi), no aiNOW client is implied in this niche; the
 * landing copy is tuned to the tattoo keyword rather than the generic "clinics"
 * term. Angle: portfolio, deposit and slot booking.
 */
export const tattoo: NicheEntry = {
  key: 'tattoo',
  slug: 'ai-chatbot-tatu-studiistvis',
  serviceType: 'AI Chatbot for Tattoo and Piercing Studios',
  persona: {
    botName: 'ნიკა',
    brand: 'მელანი თბილისი',
    bizType: 'ტატუ და პირსინგის სტუდია',
    hours: 'ორშაბათი-შაბათი 12:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. სტუდიაში ნამუშევრების პორტფოლიო გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ესკიზზე კონსულტაცია უფასოა. პატარა ტატუ 100-250 ლარი, საშუალო 250-600, დიდი ან სახელო სესიის მიხედვით, საათში 150-250 ლარი. პირსინგი 40-120 ლარი. ჩაწერა წინასწარია, დეპოზიტით. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს ჩაწერა უნდა, ჯერ ჰკითხე რა აინტერესებს (ესკიზზე კონსულტაცია, ტატუ თუ პირსინგი) და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად და დეპოზიტს შეგითანხმებთ." ჩაწერას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია. ესკიზსა და ზუსტ ფასს ოსტატი კონსულტაციაზე განსაზღვრავს.',
    guardrails: [
      'ესკიზსა და ზუსტ ფასს ყოველთვის ოსტატი განსაზღვრავს კონსულტაციაზე, შენ არ იგონებ.',
      'ჯანმრთელობის უკუჩვენებებზე (ალერგია, ორსულობა, კანის პრობლემა): სთხოვე ტელეფონი და საკითხი ოსტატს გადააბარე.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains: 'ესკიზის შეთანხმება, დეპოზიტის ოდენობა, სესიის ხანგრძლივობა, მოვლის ინსტრუქცია, ოსტატის არჩევა და გაუტკივარება',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ტატუ სტუდიისთვის: კლიენტების ჩაწერა 24/7',
      description:
        'AI ასისტენტი ტატუ და პირსინგის სტუდიებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ასახელებს ფასთა შუალედს, იწერს ჩაწერას დეპოზიტით და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ტატუ სტუდიისთვის',
      h1: 'კლიენტი ესკიზს გზავნის 00:30-ზე.',
      h1Accent: 'ფასის შუალედი უკვე იცის.',
      lead: 'შუაღამისას კლიენტი ესკიზის ფოტოს გზავნის და ფასს კითხულობს. AI ასისტენტი მაშინვე პასუხობს, ასახელებს ფასთა შუალედს, ესკიზზე უფასო კონსულტაციაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, დილით კი ადმინისტრატორი ადასტურებს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ნიკა',
      chatRole: 'მელანი თბილისი, დემო სტუდიის ასისტენტი',
      chatGreeting:
        'მელანი თბილისის ასისტენტი ვარ, სტუდია დაკეტილიც რომ იყოს, აქ ვარ. მომწერე ესკიზზე, ფასის შუალედზე ან ოსტატის თავისუფალ დღეებზე.',
      chatPlaceholder: 'ჰკითხეთ ესკიზზე, ფასის შუალედზე ან ჩაწერაზე...',
      chatChips: ['ესკიზის ფოტო მაქვს, რას დამიჯდება?', 'სახელოს რამდენ სესიად აკეთებთ?', 'შაბათს ოსტატთან ჩავეწერო?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ტატუ სტუდია კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ირჩევს სტუდიას',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. ათვალიერებს ნამუშევრებს და წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი სტუდია უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ სტუდიას ერთდროულად',
          p: '«ხვალ თავისუფალი დრო გაქვთ? პატარა ტატუ რა ღირს?» დააზუსტეთ სხეულის ადგილი, ზომა და სტილი, შემდეგ შესთავაზეთ ესკიზის კონსულტაცია შესაბამის არტისტთან.',
        },
        {
          h: 'ტატუს იდეას ესკიზის კონსულტაცია უნდა მოჰყვეს',
          p: 'დააზუსტეთ სხეულის ადგილი, ზომა და სტილი, შემდეგ კი შესაბამის არტისტთან ესკიზის კონსულტაციის დრო შესთავაზეთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და ესკიზზე უფასო კონსულტაციაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სასურველი სერვისი, დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით და დეპოზიტით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს, დეპოზიტს ათანხმებს და კლიენტი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჩაწერას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება და დეპოზიტი ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'ესკიზსა და ზუსტ ფასს ოსტატს ტოვებს',
          p: 'ესკიზის იდეა, ზუსტი ფასი და ჯანმრთელობის კითხვები: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ოსტატს გადასცემს, თვითონ არ წყვეტს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სტუდიისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ტატუ სტუდიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და ესკიზზე უფასო კონსულტაციაზე იწვევს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
          a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სტუდიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ტატუ სტუდიისთვის: რატომ სწორედ ახლა',
            p: "კლიენტების უმეტესობა ტატუს ოსტატს Instagram-იდან ირჩევს, სამუშაო საათების შემდეგ. ისინი ათვალიერებენ ნამუშევრებს, წერენ Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ტატუ სტუდიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ტატუ სტუდიები ბევრია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სტუდიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი სერვისის, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს დეპოზიტით და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე სტუდიის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ესკიზსა და ფასზე',
            p: 'ტატუ სტუდიაში დაუშვებელია, ბოტმა ესკიზის იდეა თვითონ მოიფიქროს ან ზუსტი ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ სტუდიის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, ესკიზის, ჯანმრთელობის უკუჩვენებისა და დიდი ნამუშევრის შემთხვევაში კი საუბარს მაშინვე ოსტატს გადასცემს. ეს მიდგომა კლიენტისთვის გასაგებია, სტუდიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ტატუ სტუდიისთვის?',
        aeoBody:
          'AI ასისტენტი ტატუ სტუდიისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, კლიენტს ესკიზზე უფასო კონსულტაციაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს დეპოზიტით და დილით ადმინისტრატორს გადასცემს. ის თვითონ არ ქმნის ესკიზს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სტუდიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Instagram Direct-ის ავტომატიზაცია ჩატბოტით' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for tattoo studios: client booking 24/7',
      description:
        'AI assistant for tattoo and piercing studios in Tbilisi. Answers clients at night, books with a deposit and hands it to your administrator.',
      eyebrow: 'AI assistant for tattoo studios',
      h1: 'A client sends a sketch at 00:30.',
      h1Accent: 'The price range is already quoted.',
      lead: 'At half past midnight a client sends a photo of a sketch and asks the price. The AI assistant answers at once, quotes the price range, invites the client to a free sketch consultation, collects the name, phone and preferred time, and in the morning your administrator confirms.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Nika',
      chatRole: 'Melani Tbilisi, demo studio assistant',
      chatGreeting: 'I am the Melani Tbilisi assistant, here even when the studio is closed. Send me a sketch, ask about the price range or when the artist is free.',
      chatPlaceholder: 'Ask about a sketch, price range or booking...',
      chatChips: ['I have a sketch photo, what will it cost?', 'How many sessions for a sleeve?', 'Can I book with the artist on Saturday?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a tattoo studio loses clients',
      pains: [
        { h: 'Clients choose a studio in the evening', p: 'After work, from the phone. They scroll the portfolio and write straight into Instagram or Messenger, when your studio is already closed.' },
        { h: 'They message two or three studios at once', p: '"Is tomorrow free? How much is a small tattoo?" Clarify the body area, size and style, then offer a sketch consultation with the right artist.' },
        { h: 'A tattoo idea needs a design consultation', p: 'Clarify the body area, size and style, then offer a sketch consultation with the right artist.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to a free sketch consultation. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Preferred service, day and time, name, phone. With an optional provisional slot and deposit.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, agrees the deposit, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the artist will clarify.' },
        { h: 'It does not confirm bookings by itself', p: 'A booking is always provisional; the final word and the deposit are your administrator. Your schedule stays in your hands.' },
        { h: 'It leaves the sketch and exact price to the artist', p: 'The sketch idea, the exact price and health questions: the bot takes a phone number and passes the case to the artist. It does not decide itself.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your studio',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a tattoo studio?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set and invites the client to a free sketch consultation for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, Sundays, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your studio, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for a tattoo studio: why right now',
            p: "Most clients pick their tattoo artist on Instagram, after working hours. They scroll the portfolio, write on Messenger and expect an answer within minutes. After the agreed activation, the AI chatbot for a tattoo studio can answer at night using only the information you approve and hand complex requests to the team. Tbilisi has many tattoo studios and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a studio assistant is the booking logic. The assistant gathers the preferred service, time, name and phone, creates a provisional slot with a deposit and hands it to the administrator in the morning for confirmation. This keeps the studio schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on the sketch and the price',
            p: 'In a tattoo studio the bot must never dream up the sketch idea or invent an exact price. A properly configured assistant uses only the information the studio provided, answers on prices with ranges, and hands the conversation straight to the artist when it comes to the sketch, health contraindications or a large piece. This approach is clear for the client and reputationally calm for the studio.',
          },
        ],
        aeoH: 'What does the AI assistant for a tattoo studio do?',
        aeoBody:
          'The AI assistant for a tattoo studio is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes the price ranges of the services, invites the client to a free sketch consultation, collects the name, phone and preferred time, creates a provisional slot with a deposit and hands it to the administrator in the morning. It does not create the sketch itself, uses only approved information; unlisted details are confirmed by the team. For the studio the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Instagram DM automation with a chatbot' },
        { slug: 'ai-booking-appointment-automation', label: 'Booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для тату-студии: запись клиентов 24/7',
      description:
        'AI-ассистент для тату- и пирсинг-студий в Тбилиси. Отвечает клиентам ночью, называет вилку цен, записывает с депозитом и передаёт администратору.',
      eyebrow: 'AI-ассистент для тату-студии',
      h1: 'Клиент присылает эскиз в 00:30.',
      h1Accent: 'Вилка цен уже названа.',
      lead: 'В половине первого ночи клиент присылает фото эскиза и спрашивает цену. AI-ассистент отвечает сразу, называет вилку цен, приглашает на бесплатную консультацию по эскизу, собирает имя, номер и удобное время, а утром администратор подтверждает.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Ника',
      chatRole: 'Мелани Тбилиси, ассистент демо-студии',
      chatGreeting: 'Я ассистент студии Мелани Тбилиси, на месте даже когда студия закрыта. Пришлите эскиз, спросите про вилку цен или свободные дни мастера.',
      chatPlaceholder: 'Спросите про эскиз, вилку цен или запись...',
      chatChips: ['У меня есть фото эскиза, сколько выйдет?', 'Рукав за сколько сеансов делаете?', 'Можно записаться к мастеру в субботу?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где тату-студия теряет клиентов',
      pains: [
        { h: 'Клиент выбирает студию вечером', p: 'После работы, с телефона. Листает портфолио и пишет сразу в Instagram или Messenger, когда ваша студия уже закрыта.' },
        { h: 'Пишет в две-три студии одновременно', p: '«Есть время завтра? Сколько маленькое тату?» Уточните место на теле, размер и стиль, затем предложите консультацию по эскизу с подходящим мастером.' },
        { h: 'Идея татуировки требует консультации по эскизу', p: 'Уточните место на теле, размер и стиль, затем предложите время консультации по эскизу с подходящим мастером.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на бесплатную консультацию по эскизу. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Желаемая услуга, день и время, имя, телефон. По желанию с предварительным слотом и депозитом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, согласовывает депозит, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает запись сам', p: 'Запись всегда предварительная, финальное слово и депозит за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Эскиз и точную цену оставляет мастеру', p: 'Идея эскиза, точная цена и вопросы здоровья: бот берёт номер и передаёт случай мастеру. Сам не решает.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей студии',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для тату-студии?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на бесплатную консультацию по эскизу за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей студии, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для тату-студии: почему именно сейчас',
            p: "Большинство клиентов выбирают тату-мастера в Instagram, после рабочего дня. Они листают портфолио, пишут в Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для тату-студии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси тату-студий много, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чат-бота от студийного ассистента это логика записи. Ассистент собирает желаемую услугу, время, имя и телефон, создаёт предварительный слот с депозитом и утром передаёт администратору на подтверждение. Так график студии остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы про эскиз и цену',
            p: 'В тату-студии недопустимо, чтобы бот сам придумывал идею эскиза или выдумывал точную цену. Правильно настроенный ассистент использует только переданную студией информацию, отвечает по ценам вилками, а при вопросах об эскизе, противопоказаниях по здоровью или крупной работе сразу передаёт разговор мастеру. Такой подход понятен клиенту и репутационно спокоен для студии.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для тату-студии?',
        aeoBody:
          'AI-ассистент для тату-студии это чат-бот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он называет вилки цен на услуги, приглашает клиента на бесплатную консультацию по эскизу, собирает имя, номер и удобное время, создаёт предварительный слот с депозитом и утром передаёт администратору. Он сам не создаёт эскиз, работает только по утверждённой информации; неизвестные детали уточняет команда. Для студии результат простой: вечерние обращения и обращения на выходных можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Автоматизация Instagram Direct чат-ботом' },
        { slug: 'ai-booking-appointment-automation', label: 'Автоматизация записи и брони' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
