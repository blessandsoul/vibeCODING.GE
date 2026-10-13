import type { NicheEntry } from '../types';

/**
 * Spa, massage and wellness centers (სპა და მასაჟის ცენტრი). The demo persona
 * is a wellness front desk (ზენ სპა) that quotes service ranges, books
 * procedures and fields gift-certificate questions around the clock. The
 * landing copy is tuned to the spa keyword: evening self-care bookings, weekend
 * slots and gift certificates that otherwise sit unanswered until morning.
 */
export const spa: NicheEntry = {
  key: 'spa',
  slug: 'ai-chatbot-spa-centrebistvis',
  serviceType: 'AI Chatbot for Spa and Massage Centers',
  persona: {
    botName: 'სალომე',
    brand: 'ზენ სპა',
    bizType: 'სპა და მასაჟის ცენტრი',
    hours: 'ყოველდღე 10:00-22:00',
    address: 'თბილისი, ვაკე. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: კლასიკური მასაჟი (60 წთ) 80-150 ლარი; თაი მასაჟი 100-180; ცხელი ქვების მასაჟი 120-200; სახის მოვლა 70-140; სპა-რიტუალი (პაკეტი) 200-350; საჩუქრის სერტიფიკატი ხელმისაწვდომია. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა სტუმარს ჩაწერა უნდა, ჯერ ჰკითხე რომელი პროცედურა აინტერესებს და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [პროცედურა], [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ვიზიტს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია. საჩუქრის სერტიფიკატზე კითხვასაც უპასუხე: უთხარი, რომ ხელმისაწვდომია და დეტალებს ადმინისტრატორი დააზუსტებს.',
    guardrails: [
      'სამკურნალო ან სამედიცინო რჩევას არ იძლევი.',
      'ორსულობის ან ჯანმრთელობის მდგომარეობის შემთხვევაში ურჩევ წინასწარ კონსულტაციას სპეციალისტთან.',
    ],
    customerNoun: 'სტუმარი',
    followupDomains:
      'პროცედურის ხანგრძლივობა, წყვილური ოთახის ხელმისაწვდომობა, საჩუქრის სერტიფიკატის ვადა, სპა-რიტუალის პაკეტები და ჯავშნის გადატანა',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი სპა და მასაჟის ცენტრისთვის: ჩაწერა 24/7',
      description:
        'AI ასისტენტი სპა და მასაჟის ცენტრებისთვის თბილისში. პასუხობს სტუმრებს ღამითაც, ასახელებს ფასთა შუალედს, იწერს ვიზიტს და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი სპა ცენტრისთვის',
      h1: 'წყვილი კვირას 20:45-ზე საჩუქარს ეძებს.',
      h1Accent: 'წყვილური მასაჟი უკვე იჯავშნება.',
      lead: 'კვირა საღამოს წყვილი სპა პროცედურაზე წერს. AI ასისტენტი აზუსტებს სასურველ პროცედურასა და დროს, იწერს სახელსა და ნომერს, შემდეგ კი მოთხოვნას ადმინისტრატორს გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'სალომე',
      chatRole: 'ზენ სპა, დემო ცენტრის ასისტენტი',
      chatGreeting:
        'ზენ სპა მოგესალმებათ, სალომე ვარ. მასაჟზე, სპა-რიტუალზე თუ საჩუქრის სერტიფიკატზე ნებისმიერ საათს გიპასუხებთ და თავისუფალ დროს შეგირჩევთ.',
      chatPlaceholder: 'ჰკითხეთ მასაჟზე, სპა-რიტუალზე ან სერტიფიკატზე...',
      chatChips: ['რა ღირს წყვილური მასაჟი?', 'წყვილურ მასაჟს ერთ ოთახში აკეთებთ?', 'საჩუქრად სერტიფიკატის გაფორმება მინდა'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სპა ცენტრი სტუმრებს',
      pains: [
        {
          h: 'სტუმარი საღამოს ირჩევს ცენტრს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან, თავის მოსავლელად. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ადმინისტრატორი უკვე წასულია.',
        },
        {
          h: 'წერს ორ-სამ ცენტრს ერთდროულად',
          p: '«შაბათს თავისუფალი დრო გაქვთ? წყვილის მასაჟი რა ღირს?» დააზუსტეთ სასურველი პროცედურა და დრო, შემდეგ მოთხოვნა ადმინისტრატორს გადაეცით დასადასტურებლად.',
        },
        {
          h: 'საჩუქრის სერტიფიკატის კითხვას მომსახურების არჩევა უნდა მოჰყვეს',
          p: 'დააზუსტეთ სასურველი პროცედურა და დრო; საჩუქრის სერტიფიკატზე გამოიყენეთ მხოლოდ დამტკიცებული ვარიანტები და სასურველი თარიღი ადმინისტრატორს გადასცით დასადასტურებლად.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და ჩაწერაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'პროცედურა, სასურველი დღე და დრო, სახელი, ტელეფონი. საჩუქრის სერტიფიკატზეც პასუხობს. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და სტუმარი თქვენს გრაფიკშია.',
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
          h: 'სამედიცინო რჩევას არ იძლევა',
          p: 'ორსულობა, ჯანმრთელობის მდგომარეობა, უჩვეულო თხოვნა: ასეთ დროს ბოტი წინასწარ კონსულტაციას ურჩევს, ნომერს იღებს და საქმეს ადამიანს გადასცემს, ექიმობას არ იჩემებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი ცენტრისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი სპა ცენტრისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და სტუმარს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა სტუმარი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და ჩაწერაზე იწვევს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'პასუხობს საჩუქრის სერტიფიკატზე?',
          a: 'დიახ. ბოტი ხსნის, რომ საჩუქრის სერტიფიკატი ხელმისაწვდომია, აგროვებს კონტაქტს და დეტალებს ადმინისტრატორს გადასცემს გასაფორმებლად. საღამოს საჩუქრის მაძიებელი შეთანხმებული წესით გადაეცემა გუნდს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი სპა ცენტრისთვის: რატომ სწორედ ახლა',
            p: "სტუმრების უმეტესობა სპა ცენტრს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ, როცა თავის მოვლა და მოსვენება უნდა. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი სპა ცენტრისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სპა და მასაჟის ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სპა ცენტრის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას პროცედურის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. საჩუქრის სერტიფიკატზეც პასუხობს და კონტაქტს აგროვებს. ასე ცენტრის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ჯანმრთელობის თემებზე',
            p: 'სპა ცენტრში დაუშვებელია, ბოტმა სამედიცინო რჩევა მისცეს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ ცენტრის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, ორსულობის ან ჯანმრთელობის მდგომარეობის შემთხვევაში კი წინასწარ კონსულტაციას ურჩევს და საუბარს ადამიანს გადასცემს. ეს მიდგომა სტუმრისთვის უსაფრთხოა, ცენტრისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი სპა ცენტრისთვის?',
        aeoBody:
          'AI ასისტენტი სპა ცენტრისთვის არის ჩატბოტი, რომელიც სტუმრების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, სტუმარს ჩაწერაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ პროცედურას, პასუხობს საჩუქრის სერტიფიკატზე, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ იძლევა სამედიცინო რჩევას, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ცენტრისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI სილამაზის სალონებისთვის' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს სტუმრებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for spa and massage centers: booking 24/7',
      description:
        'AI assistant for spa and massage centers in Tbilisi. Answers guests at night, quotes the price range, books the visit and hands it to your administrator.',
      eyebrow: 'AI assistant for spa centers',
      h1: 'A couple is picking a gift, Sunday 20:45.',
      h1Accent: 'The couples massage is already being booked.',
      lead: 'On a Sunday evening a client asks about a spa procedure. The AI assistant clarifies the preferred service and time, records the name and phone, then hands the request to the administrator for confirmation.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Salome',
      chatRole: 'Zen Spa, demo center assistant',
      chatGreeting: 'Welcome to Zen Spa, I am Salome. Ask about a massage, a spa ritual or a gift certificate, I answer at any hour and help you pick a free slot.',
      chatPlaceholder: 'Ask about a massage, a ritual or a certificate...',
      chatChips: ['How much is a couples massage?', 'Is the couples massage in one room?', 'I want to arrange a gift certificate'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a spa center loses guests',
      pains: [
        { h: 'Guests choose a center in the evening', p: 'After work, from the phone, looking to unwind. They write straight into Instagram or Messenger, when your front desk has already gone home.' },
        { h: 'They message two or three centers at once', p: '"Any slots on Saturday? How much is a couples massage?" Clarify the preferred service and time, then hand the request to your administrator for confirmation.' },
        { h: 'A gift-certificate question needs a service choice', p: 'Clarify the preferred service and time; for a gift certificate, use only approved options and pass the preferred date to the administrator for confirmation.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites the guest to book. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Procedure, preferred day and time, name, phone. It answers gift-certificate questions too. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the guest is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not confirm visits by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It gives no medical advice', p: 'Pregnancy, a health condition, an unusual request: the bot recommends a consultation first, takes a phone number and passes the case to a person. It does not play doctor.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your center',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a spa center?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a guest asks the price?', a: 'The bot quotes the range you set and invites the guest to book. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it handle gift certificates?', a: 'Yes. The bot explains that a gift certificate is available, collects the contact and passes the details to your administrator to finalize. The evening gift-hunter is can be routed under agreed rules.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for a spa center: why right now',
            p: "Most guests choose a spa center from the phone, after working hours, when they want care and rest. They write on Instagram and Messenger and expect an answer within minutes. After the agreed activation, the AI chatbot for a spa center can answer at night using only the information you approve and hand complex requests to the team. The spa and massage market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a spa center assistant is the booking logic. The assistant gathers the procedure, the preferred time, the name and the phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. It answers gift-certificate questions too and collects the contact. That way the center schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on health topics',
            p: 'In a spa center it is unacceptable for the bot to give medical advice or invent a price. A properly built assistant uses only the information the center provided, answers price questions with ranges, and in case of pregnancy or a health condition it recommends a consultation first and hands the conversation to a person. This approach is safe for the guest and reputationally calm for the center.',
          },
        ],
        aeoH: 'What does an AI assistant for a spa center do?',
        aeoBody:
          'An AI assistant for a spa center is a chatbot that answers guest messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It names the price ranges of services, invites the guest to book, records the name, number and preferred procedure, answers gift-certificate questions, creates a provisional booking and hands it to the administrator in the morning. It gives no medical advice, uses only approved information; unlisted details are confirmed by the team. For the center the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI for beauty salons in Georgia' },
        { slug: 'ai-booking-appointment-automation', label: 'AI booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own guests. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для спа и массажных центров: запись 24/7',
      description:
        'AI-ассистент для спа и массажных центров в Тбилиси. Отвечает гостям ночью, называет вилку цен, записывает визит и передаёт администратору.',
      eyebrow: 'AI-ассистент для спа центра',
      h1: 'Пара выбирает подарок, воскресенье 20:45.',
      h1Accent: 'Массаж для двоих уже бронируется.',
      lead: 'В воскресный вечер клиент спрашивает о процедуре в спа. AI-ассистент уточняет желаемую услугу и время, собирает имя и номер, затем передаёт запрос администратору на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Саломе',
      chatRole: 'Зен Спа, ассистент демо-центра',
      chatGreeting: 'Зен Спа приветствует вас, я Саломе. Спросите про массаж, спа-ритуал или подарочный сертификат, отвечу в любой час и подберу свободное время.',
      chatPlaceholder: 'Спросите про массаж, ритуал или сертификат...',
      chatChips: ['Сколько стоит массаж для двоих?', 'Массаж для двоих делаете в одной комнате?', 'Хочу оформить подарочный сертификат'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где спа центр теряет гостей',
      pains: [
        { h: 'Гость выбирает центр вечером', p: 'После работы, с телефона, чтобы расслабиться. Пишет сразу в Instagram или Messenger, когда ваш администратор уже ушёл.' },
        { h: 'Пишет в два-три центра одновременно', p: '«Есть время в субботу? Сколько стоит массаж для двоих?» Уточните желаемую услугу и время, затем передайте запрос администратору на подтверждение.' },
        { h: 'Вопрос о подарочном сертификате требует выбора услуги', p: 'Уточните желаемую услугу и время; для сертификата используйте только утверждённые варианты и передайте желаемую дату администратору на подтверждение.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает записаться. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Процедура, желаемый день и время, имя, телефон. Отвечает и про подарочные сертификаты. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, гость в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает визит сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Не даёт медицинских советов', p: 'Беременность, состояние здоровья, нестандартная просьба: бот советует сначала консультацию, берёт номер и передаёт случай человеку. В доктора не играет.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего центра',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для спа центра?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда гость спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает записаться. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Отвечает про подарочные сертификаты?', a: 'Да. Бот объясняет, что подарочный сертификат доступен, собирает контакт и передаёт детали администратору для оформления. Вечерний искатель подарка больше не теряется.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для спа центра: почему именно сейчас',
            p: "Большинство гостей выбирают спа центр с телефона, после рабочих часов, когда хочется заботы и отдыха. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для спа центра отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок спа и массажа в Тбилиси перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента спа центра, это логика записи. Ассистент собирает процедуру, желаемое время, имя и телефон, создаёт предварительную бронь и утром передаёт администратору на подтверждение. Отвечает и про подарочный сертификат, собирает контакт. Так график центра остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на темы здоровья',
            p: 'В спа центре недопустимо, чтобы бот давал медицинский совет или выдумывал цену. Правильно настроенный ассистент использует только информацию, переданную центром, отвечает на вопрос о цене вилками, а при беременности или состоянии здоровья советует сначала консультацию и передаёт разговор человеку. Такой подход безопасен для гостя и репутационно спокоен для центра.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для спа центра?',
        aeoBody:
          'AI-ассистент для спа центра, это чатбот, который отвечает на сообщения гостей в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги, приглашает гостя записаться, фиксирует имя, номер и желаемую процедуру, отвечает про подарочный сертификат, создаёт предварительную бронь и утром передаёт администратору. Он не даёт медицинских советов, работает только по утверждённой информации; неизвестные детали уточняет команда. Для центра результат прост: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI для салонов красоты в Грузии' },
        { slug: 'ai-booking-appointment-automation', label: 'AI-автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим гостям. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
