import type { NicheEntry } from '../types';

/**
 * Aesthetic and cosmetology clinics (კოსმეტოლოგია / ესთეტიკური მედიცინა).
 * The demo persona (Glow Aesthetics) is an illustrative aesthetic clinic; the
 * landing copy is tuned to the cosmetology keyword and the evening Instagram
 * inquiry that carries a high-ticket laser, botox or filler question.
 */
export const aesthetic: NicheEntry = {
  key: 'aesthetic',
  slug: 'ai-chatbot-kosmetologiistvis',
  serviceType: 'AI Chatbot for Aesthetic and Cosmetology Clinics',
  persona: {
    botName: 'ელენე',
    brand: 'გლოუ ესთეტიკა',
    bizType: 'ესთეტიკური და კოსმეტოლოგიური კლინიკა',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ვაკე. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: კონსულტაცია 0-50 ლარი; ლაზერული ეპილაცია (ზონის მიხედვით) 40-250; ბოტოქსი 300-600; ჰიალურონის ფილერი 400-900; მეზოთერაპია 150-300; კანის ღრმა წმენდა 80-150; RF-ლიფტინგი 120-250. გადახდა: ნაღდი, ბარათი, კურსზე განვადება.',
    booking:
      'როცა კლიენტს ჩაწერა უნდა, ჯერ ჰკითხე რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ვიზიტს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ და შედეგს არ ჰპირდები.',
      'უკუჩვენებებზე ან ჯანმრთელობის მდგომარეობაზე კითხვისას საუბარს ექიმ-კოსმეტოლოგს გადასცემ.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains: 'კურსში პროცედურების რაოდენობა, პროცედურებს შორის ინტერვალი, მომზადება და უკუჩვენებები, კურსზე განვადება, შედეგის ხანგრძლივობა',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი კოსმეტოლოგიისთვის: კლიენტების ჩაწერა 24/7',
      description:
        'AI ასისტენტი ესთეტიკური და კოსმეტოლოგიური კლინიკებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ასახელებს ფასთა შუალედს, კონსულტაციაზე იწვევს და იწერს ვიზიტს.',
      eyebrow: 'AI ასისტენტი კოსმეტოლოგიისთვის',
      h1: 'კლიენტი 22:30-ზე ლაზერის კურსზე კითხულობს.',
      h1Accent: 'ელენემ უკვე უპასუხა.',
      lead: 'საღამოს კლიენტი Instagram-ში ლაზერზე, ბოტოქსზე ან ფილერზე კითხვას აგზავნის, როცა ადმინისტრატორი უკვე წასულია. AI ასისტენტი პასუხობს დამტკიცებული ინფორმაციით, აზუსტებს ზონასა და მიზანს, იწერს სახელს, ნომერსა და სასურველ დროს, შემდეგ კი კონსულტაციის მოთხოვნას გუნდს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ელენე',
      chatRole: 'გლოუ ესთეტიკა, დემო კლინიკის ასისტენტი',
      chatGreeting:
        'გამარჯობა, ელენე ვარ, გლოუ ესთეტიკას ონლაინ ასისტენტი. ლაზერზე, ბოტოქსსა თუ ფილერზე მკითხე ან კონსულტაციაზე ჩაგწერ, საათი მნიშვნელობა არ აქვს.',
      chatPlaceholder: 'ჰკითხეთ ლაზერზე, ფასზე ან ჩაწერაზე...',
      chatChips: ['რა ღირს ლაზერული ეპილაციის სრული კურსი?', 'ბოტოქსზე ხვალ ჩამწერთ?', 'ფილერის შემდეგ შეშუპება ხომ არ იქნება?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს კოსმეტოლოგია კლიენტებს',
      pains: [
        {
          h: 'კლიენტი პროცედურას საღამოს ირჩევს',
          p: 'სამუშაო დღის შემდეგ, სარკის წინ, ტელეფონიდან. Instagram-ში რეკლამის ან პოსტის ნახვისთანავე წერს პირდაპირ შეტყობინებაში, სწორედ მაშინ, როცა თქვენი ადმინისტრატორი უკვე წასულია.',
        },
        {
          h: 'ერთდროულად სამ კლინიკას წერს',
          p: '«რა ღირს ლაზერული ეპილაცია? ხვალ თავისუფალი ხართ?» დააზუსტეთ სასურველი ზონა და პროცედურა, შემდეგ შესთავაზეთ კონსულტაციის ან შეფასების დრო.',
        },
        {
          h: 'პროცედურის კითხვას შეფასების გზა უნდა მოჰყვეს',
          p: 'ლაზერზე, ბოტოქსზე ან ფილერზე შეკითხვას მეტი სჭირდება: უნდა დაზუსტდეს ზონა და მიზანი, შემდეგ კი კლიენტს შესაბამისი კონსულტაციის ან შეფასების დრო შესთავაზოთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და კონსულტაციაზე იწვევს, სადაც ექიმ-კოსმეტოლოგი ზუსტ გეგმას დასახავს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სასურველი პროცედურა, დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და კლიენტი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'დიაგნოზს არ სვამს და შედეგს არ ჰპირდება',
          p: 'არ ამბობს, კონკრეტულად რომელი პროცედურა «გჭირდებათ», და საბოლოო შედეგს არ გახვევთ. კანის შეფასება და მკურნალობის გეგმა ექიმ-კოსმეტოლოგის საქმეა.',
        },
        {
          h: 'ჯანმრთელობის კითხვას ექიმს გადასცემს',
          p: 'უკუჩვენება, ორსულობა, ალერგია ან ქრონიკული მდგომარეობა: ასეთ დროს ბოტი ნომერს იღებს და საუბარს ექიმ-კოსმეტოლოგს გადასცემს, თვითონ არ პასუხობს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი კლინიკისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი კოსმეტოლოგიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება პროცედურების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და კონსულტაციაზე იწვევს ზუსტი გეგმისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
          a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'უსაფრთხოა სამედიცინო კუთხით?',
          a: 'დიახ. ბოტი დიაგნოზს არ სვამს, შედეგს არ ჰპირდება და უკუჩვენებებზე ან ჯანმრთელობის კითხვებზე საუბარს ექიმ-კოსმეტოლოგს გადასცემს. ის მხოლოდ თქვენს მიწოდებულ ინფორმაციას იყენებს.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი კოსმეტოლოგიისთვის: რატომ სწორედ ახლა',
            p: "ესთეტიკურ პროცედურას კლიენტების უმეტესობა ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ლაზერის, ბოტოქსის თუ ფილერის შესახებ გადაწყვეტილებას ხშირად Instagram-ის რეკლამა ან პოსტი უბიძგებს და პასუხს იმავე წუთში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი კოსმეტოლოგიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ესთეტიკური მედიცინის ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და კოსმეტოლოგიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი პროცედურის, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კლინიკის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ესთეტიკურ პროცედურებზე',
            p: "ესთეტიკურ მედიცინაში დაუშვებელია, ბოტმა დიაგნოზი დასვას, შედეგი დაჰპიროს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ კლინიკის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, უკუჩვენებაზე ან ჯანმრთელობის კითხვაზე კი საუბარს მაშინვე ექიმ-კოსმეტოლოგს გადასცემს. საუბრის გადაცემის შემდეგ გადაწყვეტილებას ექიმ-კოსმეტოლოგი იღებს შეთანხმებული წესით.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი კოსმეტოლოგიისთვის?',
        aeoBody:
          'AI ასისტენტი კოსმეტოლოგიისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს პროცედურების ფასთა შუალედებს, კლიენტს კონსულტაციაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, არ ჰპირდება შედეგს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კლინიკისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI სილამაზის სალონებისთვის' },
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI სამედიცინო კლინიკებისთვის: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for aesthetic clinics: client booking 24/7',
      description:
        'AI assistant for aesthetic and cosmetology clinics in Tbilisi. Answers clients at night, quotes the price range, invites to a consultation and books the visit.',
      eyebrow: 'AI assistant for aesthetic clinics',
      h1: 'A client asks about the laser course at 22:30.',
      h1Accent: 'Elene has already replied.',
      lead: 'In the evening a client messages Instagram about laser, Botox or filler after the administrator has left. The AI assistant answers from approved information, clarifies the area and goal, records the name, phone and preferred time, and hands the consultation request to the team.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Elene',
      chatRole: 'Glow Aesthetics, demo clinic assistant',
      chatGreeting: 'Hi, I am Elene, the online assistant at Glow Aesthetics. Ask me about laser, botox or fillers, or I can book your consultation, any hour works.',
      chatPlaceholder: 'Ask about laser, price or booking...',
      chatChips: ['How much is a full laser hair removal course?', 'Can you book me for botox tomorrow?', 'Will there be swelling after filler?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where an aesthetic clinic loses clients',
      pains: [
        { h: 'Clients choose a procedure in the evening', p: 'After work, in front of the mirror, from the phone. Right after an Instagram ad or post they write straight into a message, exactly when your administrator has already left for the day.' },
        { h: 'They message two or three clinics at once', p: '"How much is laser hair removal? Are you free tomorrow?" Ask which area and procedure the client is considering, then offer a consultation or assessment slot.' },
        { h: 'A procedure question needs an assessment path', p: 'A laser, Botox, or filler question needs more than a general reply: clarify the area and goal, then offer the right consultation or assessment slot.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to a consultation where the doctor sets the exact plan. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Desired procedure, day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only with the price ranges you provided. The exact figure is set by a live consultation after assessment; the bot uses only approved information; unlisted details are confirmed by the team.' },
        { h: 'It does not diagnose or promise results', p: 'It does not tell a client which procedure they "need". Skin assessment, the treatment plan and outcome expectations are set by the doctor-cosmetologist.' },
        { h: 'It hands health questions to the doctor', p: 'Contraindications, pregnancy, allergies or a chronic condition: the bot takes a phone number and passes the conversation to the doctor-cosmetologist instead of answering itself.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your clinic',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for an aesthetic clinic?', a: 'Timing depends on the agreed scope: we need your procedure list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes the range you set and invites the client to a consultation for the exact plan. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'Is it safe on the medical side?', a: 'Yes. The bot does not diagnose, never promises results, and hands any question about contraindications or health to the doctor-cosmetologist. It uses only the information you provide.' },
      ],
      article: {
        sections: [
          { h: 'AI chatbot for cosmetology: why right now', p: "Most clients choose an aesthetic procedure from their phone, after working hours. The decision about laser, botox or filler is often nudged by an Instagram ad or post, and they expect an answer that same minute. After the agreed activation, the AI chatbot for cosmetology can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the aesthetic medicine market is crowded and the decision is made fast." },
          { h: 'A booking, not just a chat', p: "The real difference between a simple chatbot and a cosmetology assistant is the booking logic. The assistant gathers the desired procedure, the time, the name and the phone number, creates a provisional slot and hands it to the administrator in the morning for confirmation. The clinic schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules." },
          { h: 'Safe answers on aesthetic procedures', p: "In aesthetic medicine the bot must never diagnose, promise a result or invent a price. A properly built assistant uses only the information the clinic provided, answers on price with ranges, and hands any question about contraindications or health straight to the doctor-cosmetologist. The handoff keeps review with the doctor-cosmetologist under agreed rules." },
        ],
        aeoH: 'What does an AI assistant for cosmetology do?',
        aeoBody:
          'An AI assistant for cosmetology is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes the price ranges of procedures, invites the client to a consultation, records the name, number and preferred time, creates a provisional slot and hands it to the administrator in the morning. It does not diagnose, does not promise results, uses only approved information; unlisted details are confirmed by the team. For the clinic the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI for beauty salons in Georgia' },
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI for medical clinics: the guide' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для косметологии: запись клиентов 24/7',
      description:
        'AI-ассистент для эстетических и косметологических клиник в Тбилиси. Отвечает клиентам ночью, называет вилку цен, приглашает на консультацию и записывает визит.',
      eyebrow: 'AI-ассистент для косметологии',
      h1: 'Клиент пишет про курс лазера в 22:30.',
      h1Accent: 'Элене уже ответила.',
      lead: 'Вечером клиент пишет в Instagram о лазере, ботоксе или филлере, когда администратор уже ушёл. AI-ассистент отвечает по утверждённой информации, уточняет зону и цель, собирает имя, номер и удобное время, а затем передаёт запрос на консультацию команде.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Элене',
      chatRole: 'Глоу Эстетика, ассистент демо-клиники',
      chatGreeting: 'Здравствуйте, я Элене, онлайн-ассистент клиники Глоу Эстетика. Спросите про лазер, ботокс или филлеры, или запишу на консультацию, время суток не важно.',
      chatPlaceholder: 'Спросите про лазер, цену или запись...',
      chatChips: ['Сколько стоит полный курс лазерной эпиляции?', 'Запишете завтра на ботокс?', 'Будет ли отёк после филлера?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где косметология теряет клиентов',
      pains: [
        { h: 'Клиент выбирает процедуру вечером', p: 'После работы, перед зеркалом, с телефона. Сразу после рекламы или поста в Instagram пишет прямо в сообщения, ровно тогда, когда ваш администратор уже ушёл.' },
        { h: 'Пишет в две-три клиники одновременно', p: '«Сколько стоит лазерная эпиляция? Завтра свободны?» Уточните зону и процедуру, затем предложите время консультации или оценки.' },
        { h: 'Вопрос о процедуре должен вести к консультации', p: 'Вопрос о лазере, ботоксе или филлере нельзя закрыть общей фразой: уточните зону и цель, затем предложите время консультации или оценки.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на консультацию, где врач составит точный план. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Желаемая процедура, день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не ставит диагноз и не обещает результат', p: 'Не говорит, какая процедура вам «нужна», и не гарантирует итог. Оценка кожи и план лечения это работа врача-косметолога.' },
        { h: 'Вопрос о здоровье передаёт врачу', p: 'Противопоказания, беременность, аллергия или хроническое состояние: бот берёт номер и передаёт разговор врачу-косметологу, сам не отвечает.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей клиники',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для косметологии?', a: 'Сроки зависят от согласованного объёма: нужны список процедур, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает клиента на консультацию за точным планом. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Это безопасно с медицинской стороны?', a: 'Да. Бот не ставит диагноз, не обещает результат и передаёт любой вопрос о противопоказаниях или здоровье врачу-косметологу. Он использует только предоставленную вами информацию.' },
      ],
      article: {
        sections: [
          { h: 'AI-чатбот для косметологии: почему именно сейчас', p: "Большинство клиентов выбирают эстетическую процедуру с телефона, после рабочего дня. Решение о лазере, ботоксе или филлере часто подталкивает реклама или пост в Instagram, и ответа ждут в ту же минуту. После согласованного включения AI-чатбот для косметологии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок эстетической медицины перегружен, и решение принимается быстро." },
          { h: 'Запись, а не просто переписка', p: "Главное различие между простым чатботом и ассистентом для косметологии это логика записи. Ассистент собирает желаемую процедуру, время, имя и телефон, создаёт предварительный слот и утром передаёт администратору на подтверждение. График клиники остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам." },
          { h: 'Безопасные ответы об эстетических процедурах', p: "В эстетической медицине недопустимо, чтобы бот ставил диагноз, обещал результат или выдумывал цену. Правильно собранный ассистент использует только предоставленную клиникой информацию, на вопрос о цене отвечает вилками, а вопрос о противопоказаниях или здоровье сразу передаёт врачу-косметологу. После передачи вопрос рассматривает врач-косметолог по согласованным правилам." },
        ],
        aeoH: 'Что делает AI-ассистент для косметологии?',
        aeoBody:
          'AI-ассистент для косметологии это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на процедуры, приглашает клиента на консультацию, записывает имя, номер и желаемое время, создаёт предварительный слот и утром передаёт администратору. Он не ставит диагноз, не обещает результат, работает только по утверждённой информации; неизвестные детали уточняет команда. Для клиники результат прост: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI для салонов красоты в Грузии' },
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI для медицинских клиник: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
