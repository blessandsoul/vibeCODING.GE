import type { NicheEntry } from '../types';

/**
 * Barbershops (ბარბერშოპი). The demo persona is a clean Georgian barbershop
 * brand (ოსტატი), tuned to the barbershop keyword: men book a specific barber
 * and time, and evening Instagram DMs go to A timely, useful reply helps continue the conversation.
 * kept generic; no barbershop client is implied.
 */
export const barbershop: NicheEntry = {
  key: 'barbershop',
  slug: 'ai-chatbot-barbershopistvis',
  serviceType: 'AI Chatbot for Barbershops',
  persona: {
    botName: 'ლუკა',
    brand: 'ბარბერშოპი ოსტატი',
    bizType: 'ბარბერშოპი',
    hours: 'ორშაბათი-შაბათი 11:00-21:00, კვირას დასვენება',
    address: 'თბილისი, ვაკე.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: თმის შეჭრა 25-50 ლარი; წვერის მოვლა 15-30; კომბო (შეჭრა და წვერი) 40-70; ბავშვის შეჭრა 20-35; სამეფო გაპარსვა 30-50. გადახდა: ნაღდი ან ბარათი.',
    booking:
      'როცა კლიენტს ჩაწერა უნდა, ჯერ ჰკითხე რომელი სერვისი სურს, რომელი დღე და დრო აწყობს და სურვილის შემთხვევაში რომელ ბარბერთან. შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." კონკრეტული ბარბერის თავისუფალ დროს შენ არ იგონებ, ჩაწერას საბოლოოდ ადმინისტრატორი ადასტურებს.',
    guardrails: [
      'კონკრეტული ბარბერის თავისუფალ დროს არ იგონებ, ამას ადმინისტრატორი ადასტურებს.',
      'უჩვეულო ან რთულ თხოვნაზე: სთხოვე ტელეფონი და საქმე ადამიანს გადააბარე.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains:
      'სასურველი ბარბერის გრაფიკი, სერვისის ხანგრძლივობა, კომბოს (შეჭრა და წვერი) დეტალები, ბავშვის შეჭრა, გადახდის მეთოდი',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ბარბერშოპისთვის: კლიენტების ჩაწერა 24/7',
      description:
        'AI ასისტენტი ბარბერშოპებისთვის თბილისში. პასუხობს კლიენტებს საღამოსაც, ასახელებს ფასებს, იწერს ჩაწერას სასურველ ბარბერთან და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ბარბერშოპისთვის',
      h1: 'კლიენტი წერს 21:40-ზე.',
      h1Accent: 'ხვალინდელი ჯავშანი უკვე იწერება.',
      lead: 'კლიენტს ხვალ დილით საყვარელ ბარბერთან ჩაწერა უნდა, ბარბერშოპი კი უკვე დაკეტილია. AI ასისტენტი ავტომატურად პასუხობს, იწერს სასურველ ბარბერს, სახელს, ნომერსა და დროს, დილით კი ადმინისტრატორი დაურეკავს და დაადასტურებს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ლუკა',
      chatRole: 'ბარბერშოპი ოსტატი, დემო ასისტენტი',
      chatGreeting:
        'ოსტატის ასისტენტი ვარ. მითხარი, შეჭრა, წვერი თუ კომბო გინდა და რომელ ბარბერთან, დროს მაშინვე მოგიძებნი, გვიან საღამოსაც.',
      chatPlaceholder: 'ჰკითხეთ შეჭრაზე, წვერზე ან ბარბერზე...',
      chatChips: ['ხვალ დილით საყვარელ ბარბერთან ჩავეწერო?', 'ფეიდი გააკეთებთ?', 'რა ღირს შეჭრა და წვერი?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ბარბერშოპი კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ირჩევს ბარბერშოპს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ადმინისტრატორი უკვე წასულია.',
        },
        {
          h: 'წერს ორ-სამ ბარბერშოპს ერთდროულად',
          p: '«ხვალ საღამოს თავისუფალი ხართ? შეჭრა რა ღირს?» დააზუსტეთ სასურველი შეჭრა და ბარბერი, შემდეგ გადაამოწმეთ თავისუფალი საათები და ჩაწერა შესთავაზეთ.',
        },
        {
          h: 'ვარცხნილობის მოთხოვნას თავისუფალი დრო უნდა მოჰყვეს',
          p: 'კლიენტი წერს სასურველ ვარცხნილობასა და ბარბერზე. უპასუხოდ დატოვების ნაცვლად, გადაამოწმეთ თავისუფალი საათები და პირდაპირ ჩაწერის ვარიანტი შესთავაზეთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასებს შეჭრაზე, წვერსა და გაპარსვაზე. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სერვისი, სასურველი ბარბერი, დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა საღამოს მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ბარბერის გრაფიკს ამოწმებს, ადასტურებს და კლიენტი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჩაწერას',
          p: 'კონკრეტული ბარბერის თავისუფალ დროს იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია.',
        },
        {
          h: 'რთულ თხოვნას ადამიანს გადასცემს',
          p: 'უჩვეულო შეკვეთა, ჯგუფური ჩაწერა, სპეციალური სტილი: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი ბარბერშოპისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ბარბერშოპისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'შეუძლია კონკრეტულ ბარბერთან ჩამწეროს?',
          a: "დიახ. ბოტი კითხავს რომელი ბარბერი გირჩევნიათ და რომელი დრო აწყობთ, აგროვებს დეტალებს და ქმნის წინასწარ ჯავშანს. კონკრეტული ბარბერის თავისუფალ დროს ასახელებს მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციის მიხედვით; უცნობ დეტალს გუნდი აზუსტებს.",
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ვერ პასუხობს: საღამო, შაბათი, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი ბარბერშოპის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ბარბერშოპისთვის: რატომ სწორედ ახლა',
            p: "კლიენტების უმეტესობა ბარბერშოპს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ბარბერშოპისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ბარბერშოპების ბაზარი გადატვირთულია და კლიენტი სწრაფად წყვეტს, სად ჩაეწეროს.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ბარბერშოპის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სერვისის, სასურველი ბარბერის, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე ბარბერების გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'მუდმივი კლიენტი და სწრაფი პასუხი',
            p: "ბარბერშოპის ბიზნესი მუდმივ კლიენტთან ურთიერთობაზეა აგებული: კლიენტს შეიძლება კონკრეტული ბარბერი და სასურველი დრო აინტერესებდეს. თუ ჩაწერის მოთხოვნა საღამოს მოვიდა, სწორად აწყობილი ასისტენტი აფიქსირებს სასურველ ბარბერს, დროს, სახელსა და ნომერს და მოთხოვნას შეთანხმებული წესით გუნდს გადასცემს. ჩაწერა წინასწარია, საბოლოო დროს კი ბარბერი ან ადმინისტრატორი ადასტურებს.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ბარბერშოპისთვის?',
        aeoBody:
          'AI ასისტენტი ბარბერშოპისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასებს, კლიენტს სასურველ ბარბერსა და დროზე წერს ჩაწერას, იწერს სახელს, ნომერსა და დეტალებს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ბარბერშოპისთვის შედეგი მარტივია: საღამოს და შაბათის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'voice-agent-salon-bookings', label: 'ხმოვანი AI აგენტი სალონის ჯავშნებზე' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for barbershops: client booking 24/7',
      description:
        'AI assistant for barbershops in Tbilisi. Answers clients in the evening, quotes prices, books a slot with the chosen barber and hands it to your administrator.',
      eyebrow: 'AI assistant for barbershops',
      h1: 'A client writes at 21:40.',
      h1Accent: 'Tomorrow morning slot is already being taken.',
      lead: 'The client wants a slot with his regular barber tomorrow morning, but the shop has already closed. The AI assistant replies automatically, notes the preferred barber, name, number and time, and in the morning your administrator calls and confirms.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Luka',
      chatRole: 'Ostati Barbershop, demo assistant',
      chatGreeting: 'I am the Ostati barbershop assistant. Tell me if you want a haircut, beard or combo and which barber you like, and I will find you a slot right away, late evening included.',
      chatPlaceholder: 'Ask about a haircut, beard or your barber...',
      chatChips: ['Can I book with my regular barber tomorrow morning?', 'Do you do fades?', 'How much is a haircut and beard?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a barbershop loses clients',
      pains: [
        { h: 'Clients choose a barbershop in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your administrator has already left.' },
        { h: 'They message two or three barbershops at once', p: '"Are you free tomorrow evening? How much is a haircut?" Clarify the desired cut and barber, then check open times and offer a booking slot.' },
        { h: 'A haircut request needs an available slot', p: 'The client names the desired cut and barber. Check the open times and offer a direct booking option instead of leaving the message unanswered.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real prices for haircuts, beard work and shaves. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Service, preferred barber, day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every evening inquiry lands in one list. The administrator calls, checks the barber schedule, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not confirm bookings by itself', p: 'It uses only approved information; unlisted details are confirmed by your team. A booking is always provisional; the final word is your administrator.' },
        { h: 'It hands hard requests to a human', p: 'An unusual order, a group booking, a special style: the bot takes a phone number and passes the case to a person.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your barbershop',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a barbershop?', a: 'Timing depends on the agreed scope: we need your service list, prices and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'Can it book with a specific barber?', a: 'Yes. The bot asks which barber you would like and what time suits you, collects the details and creates a provisional booking. It uses only approved information; unlisted details are confirmed by the team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human cannot cover: evenings, Saturdays, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your barbershop, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for a barbershop: why right now',
            p: "Most clients pick a barbershop from their phone, after working hours. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for a barbershop can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the barbershop market is crowded and a client decides fast where to book.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The real difference between a simple chatbot and a barbershop assistant is the booking logic. The assistant gathers the service, the preferred barber, the time, the name and the phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. That keeps the barber schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'The regular client and a fast reply',
            p: "A barbershop business often depends on a client finding the right barber and time. When a booking request arrives in the evening, a properly configured assistant records the preferred barber, time, name and phone and hands the request to the team under agreed rules. The booking remains provisional; the barber or administrator confirms the final time.",
          },
        ],
        aeoH: 'What does an AI assistant for a barbershop do?',
        aeoBody:
          'An AI assistant for a barbershop is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes service prices, books the client with the preferred barber and time, records the name, number and details, creates a provisional booking and hands it to the administrator in the morning. It uses only approved information; unlisted details are confirmed by the team. For a barbershop the result is simple: evening and Saturday inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'voice-agent-salon-bookings', label: 'Voice AI agent for salon bookings' },
        { slug: 'ai-booking-appointment-automation', label: 'AI booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для барбершопа: запись клиентов 24/7',
      description:
        'AI-ассистент для барбершопов в Тбилиси. Отвечает клиентам вечером, называет цены, записывает к выбранному барберу и передаёт администратору.',
      eyebrow: 'AI-ассистент для барбершопа',
      h1: 'Клиент пишет в 21:40.',
      h1Accent: 'Запись на завтра уже оформляется.',
      lead: 'Клиенту нужна запись к своему барберу завтра утром, а барбершоп уже закрыт. AI-ассистент отвечает автоматически, фиксирует желаемого барбера, имя, номер и время, а утром администратор перезванивает и подтверждает.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Лука',
      chatRole: 'Барбершоп Остати, демо-ассистент',
      chatGreeting: 'Я ассистент барбершопа Остати. Скажите, нужна стрижка, борода или комбо и к какому барберу, и я сразу подберу время, даже поздним вечером.',
      chatPlaceholder: 'Спросите про стрижку, бороду или барбера...',
      chatChips: ['Могу записаться к своему барберу завтра утром?', 'Делаете фейд?', 'Сколько стоит стрижка и борода?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где барбершоп теряет клиентов',
      pains: [
        { h: 'Клиент выбирает барбершоп вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш администратор уже ушёл.' },
        { h: 'Пишет в два-три барбершопа одновременно', p: '«Есть время завтра вечером? Сколько стрижка?» Уточните желаемую стрижку и барбера, затем проверьте свободные окна и предложите запись.' },
        { h: 'Запрос на стрижку должен вести к свободному времени', p: 'Клиент описывает стрижку и желаемого барбера. Проверьте свободные окна и сразу предложите запись, не оставляя сообщение без ответа.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет ваши реальные цены на стрижку, бороду и бритьё. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Услуга, желаемый барбер, день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все вечерние обращения в одном списке. Администратор звонит, проверяет график барбера, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает запись сам', p: 'Он никогда работает только по утверждённой информации; неизвестные детали уточняет команда. Запись всегда предварительная, финальное слово за администратором.' },
        { h: 'Сложное передаёт человеку', p: 'Необычный заказ, групповая запись, особый стиль: бот берёт номер и передаёт случай человеку.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего барбершопа',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для барбершопа?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, цены и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Может записать к конкретному барберу?', a: 'Да. Бот спрашивает, к какому барберу вы хотели бы записаться и какое время удобно, собирает детали и создаёт предварительную запись. Свободный слот конкретного барбера он работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек не закрывает: вечер, суббота, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем барбершопе, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для барбершопа: почему именно сейчас',
            p: "Большинство клиентов выбирают барбершоп с телефона, после рабочего дня. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для барбершопа отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок барбершопов перегружен, и клиент быстро решает, куда записаться.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента барбершопа, это логика записи. Ассистент собирает услугу, желаемого барбера, время, имя и телефон, создаёт предварительную запись и утром передаёт администратору на подтверждение. Так график барберов остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Постоянный клиент и быстрый ответ',
            p: "Бизнес барбершопа часто строится на том, что клиент выбирает подходящего барбера и время. Когда запрос на запись приходит вечером, правильно настроенный ассистент фиксирует желаемого барбера, время, имя и телефон и передаёт запрос команде по согласованным правилам. Запись остаётся предварительной; итоговое время подтверждает барбер или администратор.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для барбершопа?',
        aeoBody:
          "AI-ассистент для барбершопа, это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет цены на услуги, записывает клиента к желаемому барберу на удобное время, фиксирует имя, номер и детали, создаёт предварительную запись и утром передаёт администратору. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для барбершопа вечерние и субботние обращения можно передавать команде по согласованным правилам; итог подтверждает администратор.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'voice-agent-salon-bookings', label: 'Голосовой AI-агент для записи в салоне' },
        { slug: 'ai-booking-appointment-automation', label: 'Автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
