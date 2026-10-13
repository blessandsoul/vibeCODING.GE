import type { NicheEntry } from '../types';

/**
 * Language schools and tutoring centers (ენების სკოლები). The demo persona is a
 * generic demo school (Lingva Tbilisi); no named client is implied, so the
 * proof stat stays attributed generically. The landing copy is tuned to the
 * language-school keyword: trial-lesson booking, course info and pricing rather
 * than the generic "clinics" term.
 */
export const language: NicheEntry = {
  key: 'language',
  slug: 'ai-chatbot-enis-skolebistvis',
  serviceType: 'AI Chatbot for Language Schools and Tutoring Centers',
  persona: {
    botName: 'თეკლა',
    brand: 'ლინგვა თბილისი',
    bizType: 'ენების სკოლა',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ვასწავლით ინგლისურს, გერმანულსა და ქართულს უცხოელებისთვის. ჯგუფური კურსი 150-300 ლარი თვეში; ინდივიდუალური გაკვეთილი 30-60 ლარი; დონის ტესტი უფასოა; საცდელი გაკვეთილი ხელმისაწვდომია. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა მსურველს საცდელ გაკვეთილზე ჩაწერა უნდა, ჯერ ჰკითხე რომელი ენა და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ საცდელ გაკვეთილზე [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ჩაწერას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'მოსწავლის დონესა და ჯგუფს თავად არ ადგენ, ამას საცდელი გაკვეთილის შემდეგ სკოლა წყვეტს.',
      'ინდივიდუალურ გრაფიკზე: სთხოვე ტელეფონი და უთხარი, რომ გრაფიკს ადმინისტრატორი დაადასტურებს.',
    ],
    customerNoun: 'მშობელი',
    followupDomains:
      'გაკვეთილის განრიგი და ხანგრძლივობა, ჯგუფის ზომა და ბავშვის ასაკობრივი ჯგუფი, მასწავლებლის გამოცდილება, დონის ტესტი, ონლაინ თუ დასწრებით სწავლა, გადახდის პირობები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ენების სკოლისთვის: საცდელ გაკვეთილზე ჩაწერა 24/7',
      description:
        'AI ასისტენტი ენების სკოლებისა და სასწავლო ცენტრებისთვის თბილისში. პასუხობს მსურველებს ღამითაც, წერს საცდელ გაკვეთილზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ენების სკოლისთვის',
      h1: 'მშობელი წერს 21:30-ზე.',
      h1Accent: 'საცდელი გაკვეთილი უკვე იწერება.',
      lead: 'საღამოს მშობელი შვილს ინგლისურის საცდელ გაკვეთილს ეძებს. AI ასისტენტი პასუხობს ავტომატურად, უხსნის ჯგუფების ვარიანტებს, აზუსტებს დონეს, მიზანსა და გრაფიკს, იწერს სახელსა და ნომერს, შემდეგ კი ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'თეკლა',
      chatRole: 'ლინგვა თბილისი, დემო სკოლის ასისტენტი',
      chatGreeting:
        'თეკლა გახლავართ, ლინგვა თბილისის ასისტენტი. მიწერეთ, რომელი ენა და რომელი ასაკი გაინტერესებთ, და საცდელ გაკვეთილზე მაშინვე ჩაგწერთ, გვიან საღამოსაც.',
      chatPlaceholder: 'ჰკითხეთ ენაზე, განრიგსა თუ საცდელ გაკვეთილზე...',
      chatChips: ['9 წლის ბავშვს ინგლისური სჭირდება', 'საცდელი გაკვეთილი შაბათს გაქვთ?', 'ჯგუფში რამდენი ბავშვია?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ენების სკოლა მოსწავლეებს',
      pains: [
        {
          h: 'მსურველი საღამოს ირჩევს სკოლას',
          p: 'სამუშაო ან სასწავლო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ადმინისტრაცია უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ სკოლას ერთდროულად',
          p: '«ინგლისურის ჯგუფი როდის იწყება? რა ღირს?» დააზუსტეთ ენა, მიზანი და გრაფიკი, შემდეგ დაუნიშნეთ დონის ტესტი ან საცდელი გაკვეთილი.',
        },
        {
          h: 'კურსის კითხვას დონის შემოწმება უნდა მოჰყვეს',
          p: 'მოსწავლეს ჰკითხეთ ენა, მიზანი და სასურველი გრაფიკი, შემდეგ კი დონის შესამოწმებელი მოკლე ტესტი ან საცდელი გაკვეთილი დაუნიშნეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'კურსსა და ფასზე კითხვას სწორად უმკლავდება',
          p: 'ჰყვება, რომელი ენები ისწავლება, ასახელებს ჯგუფური და ინდივიდუალური სწავლების ფასთა შუალედს და უფასო დონის ტესტზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სასურველი ენა, ჯგუფური თუ ინდივიდუალური, სასურველი დღე და დრო, სახელი, ტელეფონი. საცდელ გაკვეთილზე წინასწარი ჩაწერით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს დონესა და ჯგუფს და მოსწავლე თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადგენს დონესა და ჯგუფს',
          p: 'ჩაწერა ყოველთვის წინასწარია. მოსწავლის დონესა და ჯგუფს საცდელი გაკვეთილის შემდეგ სკოლა ადგენს, საბოლოო დადასტურება კი ადმინისტრატორის ზარია.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'არასტანდარტული თხოვნა, ინდივიდუალური გრაფიკი, კორპორაციული ჯგუფი: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სკოლისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ენების სკოლისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება კურსების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და მსურველს იმავე ენაზე პასუხობს. ეს განსაკუთრებით მოსახერხებელია უცხოელებისთვის, რომლებიც ქართულის კურსს ეძებენ.',
        },
        {
          q: 'რა ხდება, როცა მსურველი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ჯგუფური და ინდივიდუალური სწავლების ფასთა შუალედს და უფასო დონის ტესტზე იწვევს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სკოლის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ენების სკოლისთვის: რატომ სწორედ ახლა',
            p: "ენის სასწავლად ადამიანების უმეტესობა სკოლას ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ენების სკოლისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ენების სკოლების არჩევანი დიდია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სკოლის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი ენის, ჯგუფური თუ ინდივიდუალური ფორმატის, დროის, სახელისა და ტელეფონის შესახებ, წერს საცდელ გაკვეთილზე და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე სკოლის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'ზუსტი პასუხები დონესა და ფასზე',
            p: 'ენების სკოლაში დაუშვებელია, ბოტმა მოსწავლის დონე თავად შეაფასოს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ სკოლის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს და დონის დადგენას საცდელ გაკვეთილს უტოვებს. ეს მიდგომა მსურველისთვის გასაგებია, სკოლისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ენების სკოლისთვის?',
        aeoBody:
          'AI ასისტენტი ენების სკოლისთვის არის ჩატბოტი, რომელიც მსურველების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ჰყვება, რომელი ენები ისწავლება, ასახელებს ჯგუფური და ინდივიდუალური სწავლების ფასთა შუალედებს, უფასო დონის ტესტზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს საცდელ გაკვეთილზე და დილით ადმინისტრატორს გადასცემს. ის თავად არ ადგენს მოსწავლის დონეს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სკოლისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI სასწავლო ცენტრებისთვის' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს მსურველებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for language schools: trial-lesson booking 24/7',
      description:
        'AI assistant for language schools and tutoring centers in Tbilisi. Answers prospects at night, books the trial lesson and hands it to your administrator.',
      eyebrow: 'AI assistant for language schools',
      h1: 'A parent writes at 21:30.',
      h1Accent: 'The trial lesson is already being booked.',
      lead: 'In the evening a parent looks for a trial English lesson for a child. The AI assistant explains the group options, clarifies level, goal and schedule, records the name and phone, then hands the request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Tekla',
      chatRole: 'Lingva Tbilisi, demo school assistant',
      chatGreeting: 'I am Tekla, the Lingva Tbilisi assistant. Tell me which language and which age you have in mind, and I will book the trial lesson right away, late evening included.',
      chatPlaceholder: 'Ask about a language, the schedule or a trial lesson...',
      chatChips: ['My 9-year-old needs English', 'Do you have a trial lesson on Saturday?', 'How many children are in a group?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a language school loses students',
      pains: [
        { h: 'Prospects choose a school in the evening', p: 'After the work or study day, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message two or three schools at once', p: '"When does the English group start? How much is it?" Clarify the language, goal and schedule, then arrange a placement test or trial lesson.' },
        { h: 'A course question needs a level check', p: 'Ask about the language, goal and preferred schedule, then arrange a short placement test or trial lesson.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the course and price question correctly', p: 'Explains which languages are taught, quotes your group and individual price ranges and invites to a free level test. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Preferred language, group or individual, preferred day and time, name, phone. With a provisional trial-lesson slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms the level and group, and the student is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not set the level or group by itself', p: 'A booking is always provisional. The school sets the level and group after the trial lesson, and the final word is your administrator.' },
        { h: 'It hands hard cases to a human', p: 'A non-standard request, an individual schedule, a corporate group: the bot takes a phone number and passes the case to a person.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your school',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a language school?', a: 'Timing depends on the agreed scope: we need your course list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind. This is especially handy for foreigners looking for a Georgian course.' },
        { q: 'What happens when a prospect asks the price?', a: 'The bot quotes the group and individual ranges you set and invites the prospect to a free level test. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your school, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'An AI chatbot for a language school: why right now',
            p: "Most people choose a language school from their phone, after working hours. They write on Instagram and Messenger and expect an answer within minutes. After the agreed activation, the AI chatbot for a language school can answer at night using only the information you approve and hand complex requests to the team. Tbilisi has a wide choice of language schools and the decision is made fast.",
          },
          {
            h: 'Booking, not just messaging',
            p: "The main difference between a simple chatbot and a school assistant is the booking logic. The assistant gathers the preferred language, the group or individual format, the time, the name and the phone number, reserves the trial lesson and hands it to your administrator in the morning for confirmation. This way the school schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Precise answers on level and price',
            p: 'In a language school the bot must not assess a student level or invent a price on its own. A properly set up assistant uses only the information the school provided, answers on price with ranges and leaves the level assessment to the trial lesson. This approach is clear for the prospect and reputationally calm for the school.',
          },
        ],
        aeoH: 'What does an AI assistant for a language school do?',
        aeoBody:
          'An AI assistant for a language school is a chatbot that answers prospect messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It explains which languages are taught, quotes the price ranges for group and individual lessons, invites the prospect to a free level test, records the name, phone and preferred time for the trial lesson and hands it to the administrator in the morning. It does not set the student level by itself, uses only approved information; unlisted details are confirmed by the team. For the school the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI for education centers in Georgia' },
        { slug: 'ai-booking-appointment-automation', label: 'Booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own prospects. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для языковых школ: запись на пробный урок 24/7',
      description:
        'AI-ассистент для языковых школ и учебных центров в Тбилиси. Отвечает желающим ночью, записывает на пробный урок и передаёт администратору.',
      eyebrow: 'AI-ассистент для языковых школ',
      h1: 'Родитель пишет в 21:30.',
      h1Accent: 'Пробный урок уже записывается.',
      lead: 'Вечером родитель ищет пробный урок английского для ребёнка. AI-ассистент объясняет варианты групп, уточняет уровень, цель и график, собирает имя и номер, затем передаёт запрос администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Текла',
      chatRole: 'Лингва Тбилиси, ассистент демо-школы',
      chatGreeting: 'Я Текла, ассистент школы Лингва Тбилиси. Напишите, какой язык и какой возраст интересует, и я сразу запишу на пробный урок, даже поздним вечером.',
      chatPlaceholder: 'Спросите о языке, расписании или пробном уроке...',
      chatChips: ['Ребёнку 9 лет, нужен английский', 'Пробный урок в субботу есть?', 'Сколько детей в группе?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где языковая школа теряет учеников',
      pains: [
        { h: 'Ученик выбирает школу вечером', p: 'После рабочего или учебного дня, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в две-три школы одновременно', p: '«Когда стартует группа английского? Сколько стоит?» Уточните язык, цель и график, затем назначьте тест на уровень или пробный урок.' },
        { h: 'Вопрос о курсе требует проверки уровня', p: 'Уточните язык, цель и удобный график, затем назначьте короткий тест на уровень или пробный урок.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о курсе и цене', p: 'Рассказывает, какие языки преподаются, называет вилку групповых и индивидуальных занятий и приглашает на бесплатный тест уровня. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Желаемый язык, группа или индивидуально, желаемый день и время, имя, телефон. С предварительной записью на пробный урок.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает уровень и группу, ученик в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Сам не определяет уровень и группу', p: 'Запись всегда предварительная. Уровень и группу школа определяет после пробного урока, а финальное слово за звонком администратора.' },
        { h: 'Сложное передаёт человеку', p: 'Нестандартная просьба, индивидуальный график, корпоративная группа: бот берёт номер и передаёт случай человеку.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей школы',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для языковой школы?', a: 'Сроки зависят от согласованного объёма: нужны список курсов, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же. Это особенно удобно для иностранцев, которые ищут курс грузинского.' },
        { q: 'Что происходит, когда ученик спрашивает цену?', a: 'Бот называет заданные вами вилки групповых и индивидуальных занятий и приглашает на бесплатный тест уровня. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей школе, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для языковой школы: почему именно сейчас',
            p: "Большинство людей выбирают языковую школу с телефона, после рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для языковой школы отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси выбор языковых школ большой, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента школы это логика записи. Ассистент собирает желаемый язык, групповой или индивидуальный формат, время, имя и телефон, записывает на пробный урок и утром передаёт администратору на подтверждение. Так график школы остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Точные ответы об уровне и цене',
            p: 'В языковой школе недопустимо, чтобы бот сам оценивал уровень ученика или выдумывал цену. Правильно настроенный ассистент использует только переданную школой информацию, отвечает по ценам вилками и оставляет определение уровня пробному уроку. Такой подход понятен желающему и репутационно спокоен для школы.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для языковой школы?',
        aeoBody:
          'AI-ассистент для языковой школы это чатбот, который отвечает на сообщения желающих в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он рассказывает, какие языки преподаются, называет вилки цен на групповые и индивидуальные занятия, приглашает на бесплатный тест уровня, записывает имя, номер и удобное время на пробный урок и утром передаёт администратору. Он сам не определяет уровень ученика, работает только по утверждённой информации; неизвестные детали уточняет команда. Для школы результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI для учебных центров в Грузии' },
        { slug: 'ai-booking-appointment-automation', label: 'Автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим ученикам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
