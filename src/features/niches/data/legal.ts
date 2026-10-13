import type { NicheEntry } from '../types';

/**
 * Law firms and notaries (იურიდიული ფირმები). The demo persona is a fictional
 * firm (Beridze and Partners), so nothing here claims a real client in this
 * niche. The whole trust story leans on the no-legal-advice guard: the bot books
 * consultations and never assesses a matter, that stays with the lawyer.
 */
export const legal: NicheEntry = {
  key: 'legal',
  slug: 'ai-chatbot-iuristebistvis',
  serviceType: 'AI Chatbot for Law Firms and Notaries',
  persona: {
    botName: 'ქეთი',
    brand: 'ბერიძე და პარტნიორები',
    bizType: 'იურიდიული ფირმა',
    hours: 'ორშაბათი-პარასკევი 10:00-19:00, შაბათ-კვირას დასვენება',
    address: 'თბილისი, ცენტრი. შეხვედრა წინასწარი ჩაწერით.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: პირველი კონსულტაცია 50-150 ლარი; ხელშეკრულებების შედგენა; საქმის წარმოება ფასდება საკითხის მიხედვით; სანოტარო მომსახურება დადგენილი ტარიფით. კონსულტაციაზე ჩაწერა. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა კლიენტს კონსულტაციაზე ჩაწერა უნდა, ჯერ ჰკითხე რომელ საკითხს ეხება და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ კონსულტაციაზე [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." შეხვედრას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია. საქმის დეტალებს არ აზუსტებ და იურიდიულ რჩევას არ იძლევი.',
    guardrails: [
      'იურიდიულ რჩევას არასოდეს იძლევი. საკითხს იურისტი აფასებს კონსულტაციაზე.',
      'საქმის დეტალებს ინახავ კონფიდენციალურად და რთულ საკითხს ადამიანს გადასცემ: სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრატორი პირველ რიგში დაგირეკავს.',
    ],
    customerNoun: 'კლიენტი',
    followupDomains: 'საჭირო დოკუმენტების სია, კონსულტაციის ხანგრძლივობა, საქმის წარმოების ვადა, ონლაინ კონსულტაცია, გადახდის მეთოდები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი იურისტებისთვის: კონსულტაციაზე ჩაწერა 24/7',
      description:
        'AI ასისტენტი იურიდიული ფირმებისა და ნოტარიუსებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, იწერს კონსულტაციაზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი იურისტებისთვის',
      h1: 'ხვალ ხელმოწერაა, კლიენტი 22:20-ზე წერს.',
      h1Accent: 'ასისტენტმა უკვე უპასუხა.',
      lead: 'ხელმოწერამდე დარჩენილი შეკითხვა საღამოსაც შეიძლება გაჩნდეს. კლიენტი ფირმას წერს, როცა საკითხის ტიპისა და ვადის დაზუსტება სჭირდება. AI ასისტენტი პასუხობს ავტომატურად, იწერს სახელს, ნომერსა და სასურველ დროს, დილით კი ადმინისტრატორს გადასცემს. იურიდიულ რჩევას არ იძლევა, ეს იურისტის საქმეა.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ქეთი',
      chatRole: 'ბერიძე და პარტნიორები, დემო ფირმის ასისტენტი',
      chatGreeting:
        'ქეთი ვარ, ბერიძე და პარტნიორების ასისტენტი. დღეც და ღამეც ხაზზე ვარ: დამიწერეთ, რა საკითხი გაწუხებთ, და გეტყვით, ვიღებთ თუ არა და როდის ჩაგწერთ კონსულტაციაზე.',
      chatPlaceholder: 'ჰკითხეთ საკითხზე, კონსულტაციის ფასზე ან ჩაწერაზე...',
      chatChips: ['ხელშეკრულება მაქვს ხელმოსაწერი, გადახედავთ?', 'შრომით დავას იღებთ?', 'რა ღირს ხელშეკრულების შემოწმება?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს იურიდიული ფირმა კლიენტებს',
      pains: [
        {
          h: 'კლიენტი ფირმას სტრესში ირჩევს',
          p: 'იურიდიული პრობლემა ხშირად საღამოს ან შაბათ-კვირას ჩნდება: ხელშეკრულება, დავა, ვადა. კლიენტი პირდაპირ Instagram-ში ან Messenger-ში წერს, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ ფირმას ერთდროულად',
          p: '«ამ საკითხს იღებთ? კონსულტაცია რა ღირს?» დააზუსტეთ საკითხის ტიპი და ვადა, შემდეგ შესთავაზეთ იურისტთან კონსულტაციის დრო.',
        },
        {
          h: 'იურიდიულ კითხვას საქმის მოკლე აღწერა და კონსულტაცია სჭირდება',
          p: 'პირველ შეტყობინებაში დააზუსტეთ საკითხის ტიპი, ვადა და საჭირო დოკუმენტები; შემდეგ შესთავაზეთ იურისტთან კონსულტაციის დრო, სადაც საკითხის დეტალები განიხილება.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ფასსა და საკითხს სწორად უმკლავდება',
          p: "ამბობს, რომელ საკითხებს იღებთ, ასახელებს კონსულტაციის ფასს და შეხვედრაზე იწვევს. იურიდიულ რჩევას არ იძლევა და კონსულტაციის ფასს მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციის მიხედვით ასახელებს; უცნობ დეტალს გუნდი აზუსტებს.",
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'საკითხის ტიპი, სასურველი დღე და დრო, სახელი, ტელეფონი. საქმის დეტალებში არ იჭრება, ამას იურისტი კონსულტაციაზე არკვევს.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და კლიენტი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        {
          h: 'იურიდიულ რჩევას არ იძლევა',
          p: 'ბოტი საკითხს არ აფასებს და სამართლებრივ დასკვნას არ აკეთებს. ის მხოლოდ ამბობს, რომელ სფეროებში მუშაობთ, და კონსულტაციაზე ჩაწერს. საკითხს იურისტი აფასებს.',
        },
        {
          h: 'თვითონ არ ადასტურებს შეხვედრას',
          p: 'ჩაწერა ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'კონფიდენციალურ საქმეს ადამიანს გადასცემს',
          p: 'რთული ან სენსიტიური საკითხი: ბოტი დეტალებში არ იჭრება, ნომერს იღებს და საქმეს იურისტს გადასცემს. იურისტობას არ იჩემებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი ფირმისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი იურიდიული ფირმისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, რომელ საკითხებს იღებთ და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'უპასუხებს კლიენტის იურიდიულ კითხვას?',
          a: 'არა. სწორედ ეს არის მთავარი: ბოტი იურიდიულ რჩევას არ იძლევა და საქმეს არ აფასებს. ის ამბობს, რომ საკითხს იურისტი კონსულტაციაზე შეისწავლის, და შეხვედრაზე ჩაწერს. ასე კლიენტიც დაცულია და თქვენც.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს ან იურისტს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადამიანი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება, კონსულტაცია და საქმის წარმოება ადამიანს რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი ფირმის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი იურისტებისთვის: რატომ სწორედ ახლა',
            p: "იურიდიულ ფირმას კლიენტი ხშირად სტრესულ მომენტში ეძებს: ხელშეკრულების ხელმოწერამდე, დავის დაწყებისას, ვადის გასვლის წინ. ეს მომენტები სამუშაო საათებს არ ერგება. კლიენტი Instagram-სა და Messenger-ში წერს და პასუხს წუთებში ელოდება. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი იურისტებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში იურიდიული ბაზარი გაჯერებულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და იურიდიული ფირმის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი არკვევს, რომელ საკითხს ეხება მიმართვა, აგროვებს სასურველ დროს, სახელსა და ტელეფონს, ქმნის წინასწარ ჩანაწერს კონსულტაციაზე და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. საქმის დეტალებში ის არ იჭრება. ასე ფირმის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები იურიდიულ საკითხებზე',
            p: "იურიდიულ სფეროში ყველაზე მნიშვნელოვანი წესია: ბოტმა რჩევა არ უნდა მისცეს და საკითხი არ უნდა შეაფასოს. არასწორი პასუხი კლიენტსაც აზიანებს და ფირმის რეპუტაციასაც. სწორად აწყობილი ასისტენტი მხოლოდ იმას ამბობს, რომელ სფეროებში მუშაობთ და რა ღირს კონსულტაცია, დანარჩენს კი იურისტს ტოვებს. სენსიტიურ საკითხს დეტალების გარეშე, შეთანხმებული წვდომის წესით, ადამიანს გადასცემს. ასეთ მიმართვას ადამიანი ამოწმებს შეთანხმებული წესით, საბოლოო შეფასება კი იურისტს რჩება.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი იურისტებისთვის?',
        aeoBody:
          "AI ასისტენტი იურისტებისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ამბობს, რომელ საკითხებს იღებს ფირმა, ასახელებს კონსულტაციის ფასს, კლიენტს შეხვედრაზე იწერს, სახელს, ნომერსა და სასურველ დროს აგროვებს და დილით ადმინისტრატორს გადასცემს. ის იურიდიულ რჩევას არ იძლევა, საქმეს არ აფასებს, კონსულტაციის ფასს მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციის მიხედვით ასახელებს; უცნობ დეტალს გუნდი აზუსტებს. ფირმისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.",
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-law-firms-georgia', label: 'AI იურიდიული ფირმებისთვის' },
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების აღრიცხვის ავტომატიზაცია: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for law firms: consultation booking 24/7',
      description:
        'AI assistant for law firms and notaries in Tbilisi. Answers clients at night, books the consultation and hands it to your administrator.',
      eyebrow: 'AI assistant for law firms',
      h1: 'Tomorrow is the signing, the client writes at 22:20.',
      h1Accent: 'The assistant has already answered.',
      lead: 'A question before signing may arrive after hours. A client writes to the firm with a matter that needs clarification. The AI assistant replies automatically, clarifies the matter, collects the name, phone and preferred time, and hands everything to your administrator in the morning. It gives no legal advice; that is a job for the lawyer.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Keti',
      chatRole: 'Beridze and Partners, demo firm assistant',
      chatGreeting: 'I am Keti, the Beridze and Partners assistant. I am on the line day and night: tell me what your matter is and I will say whether we take it and when I can book you a consultation.',
      chatPlaceholder: 'Ask about your matter, the consultation fee or booking...',
      chatChips: ['I have a contract to sign, can you review it?', 'Do you take labor disputes?', 'How much is a contract review?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a law firm loses clients',
      pains: [
        { h: 'Clients choose a firm under stress', p: 'A legal problem often appears in the evening or on a weekend: a contract, a dispute, a deadline. The client writes straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message two or three firms at once', p: '"Do you take this matter? How much is a consultation?" Clarify the matter and deadline, then offer a lawyer consultation slot.' },
        { h: 'A legal question needs a short case brief and consultation', p: 'Clarify the matter, deadline and available documents in the first message, then offer a lawyer consultation slot to discuss the case.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles price and scope correctly', p: 'It says which matters you take, quotes the consultation fee and invites to a meeting. It gives no legal advice and uses only approved information; unlisted details are confirmed by the team.' },
        { h: 'Collects the booking', p: 'Matter type, preferred day and time, name, phone. It does not dig into case details, the lawyer clarifies those at the consultation.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'It gives no legal advice', p: 'The bot does not assess the matter and draws no legal conclusion. It only says which areas you work in and books the consultation. The lawyer assesses the matter.' },
        { h: 'It does not confirm the meeting by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands confidential cases to a human', p: 'A complex or sensitive matter: the bot does not dig into details, takes a phone number and passes the case to the lawyer. It does not play lawyer.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your firm',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a law firm?', a: 'Timing depends on the agreed scope: we need your service list, the matters you take and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'Will it answer a client legal question?', a: 'No. That is the whole point: the bot gives no legal advice and does not assess the case. It says the lawyer will review the matter at the consultation, and books the meeting. That protects the client and you.' },
        { q: 'Does it replace the administrator or the lawyer?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation, the consultation and the case handling stay with people.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your firm, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for lawyers: why right now',
            p: "A law firm is often searched for in a stressful moment: before a contract is signed, when a dispute begins, right before a deadline runs out. These moments do not fit business hours. The client writes on Instagram and Messenger and waits for an answer in minutes. After the agreed activation, the AI chatbot for lawyers can answer at night using only the information you approve and hand complex requests to the team. The legal market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a law firm assistant is the booking logic. The assistant clarifies which matter the inquiry concerns, collects the preferred time, the name and the phone, creates a provisional consultation booking and hands it to the administrator in the morning for confirmation. It does not dig into case details. This keeps the firm schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on legal matters',
            p: "In the legal field the most important rule is this: the bot must not give advice and must not assess the matter. A wrong answer harms both the client and the firm reputation. A well-built assistant only says which areas you work in and how much a consultation costs, and leaves the rest to the lawyer. For a sensitive matter it passes only the needed details to a human under agreed access rules. Review remains with the lawyer under agreed rules; the firm confirms the next step.",
          },
        ],
        aeoH: 'What does an AI assistant for lawyers do?',
        aeoBody:
          'An AI assistant for lawyers is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It says which matters the firm takes, names the consultation price, books the client for a meeting, collects the name, number and preferred time, and hands it to the administrator in the morning. It gives no legal advice, does not assess the case, uses only approved information; unlisted details are confirmed by the team. For the firm the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-law-firms-georgia', label: 'AI for law firms in Georgia' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Lead capture automation: the guide' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для юристов: запись на консультацию 24/7',
      description:
        'AI-ассистент для юридических фирм и нотариусов в Тбилиси. Отвечает клиентам ночью, записывает на консультацию и передаёт администратору.',
      eyebrow: 'AI-ассистент для юристов',
      h1: 'Завтра подписание, клиент пишет в 22:20.',
      h1Accent: 'Ассистент уже ответил.',
      lead: 'Вопрос перед подписанием может прийти после рабочего дня. Клиент пишет в фирму, чтобы уточнить суть и сроки. AI-ассистент отвечает автоматически, собирает имя, номер и удобное время, а утром передаёт всё администратору. Юридического совета он не даёт, это работа юриста.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Кети',
      chatRole: 'Беридзе и партнёры, ассистент демо-фирмы',
      chatGreeting: 'Я Кети, ассистент фирмы Беридзе и партнёры. На линии днём и ночью: напишите, какой у вас вопрос, и я скажу, берёмся ли мы за него и когда запишу на консультацию.',
      chatPlaceholder: 'Спросите о вопросе, цене консультации или записи...',
      chatChips: ['У меня договор на подпись, посмотрите?', 'Берёте трудовые споры?', 'Сколько стоит проверка договора?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где юридическая фирма теряет клиентов',
      pains: [
        { h: 'Клиент выбирает фирму в стрессе', p: 'Юридическая проблема часто возникает вечером или в выходные: договор, спор, срок. Клиент пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в две-три фирмы одновременно', p: '«Берёте этот вопрос? Сколько консультация?» Уточните суть вопроса и сроки, затем предложите время консультации юриста.' },
        { h: 'Юридический вопрос требует краткого описания дела и консультации', p: 'В первом сообщении уточните суть вопроса, сроки и имеющиеся документы, затем предложите время консультации юриста.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит цену и рамки', p: 'Говорит, какие вопросы вы ведёте, называет стоимость консультации и приглашает на встречу. Юридического совета не даёт и цену работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Тип вопроса, желаемый день и время, имя, телефон. В детали дела не вникает, их юрист уточняет на консультации.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Не даёт юридических советов', p: 'Бот не оценивает вопрос и не делает правовых выводов. Он только говорит, в каких областях вы работаете, и записывает на консультацию. Вопрос оценивает юрист.' },
        { h: 'Сам не подтверждает встречу', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Конфиденциальное передаёт человеку', p: 'Сложный или чувствительный вопрос: бот не вникает в детали, берёт номер и передаёт дело юристу. В юриста не играет.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей фирмы',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для юридической фирмы?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, какие вопросы вы ведёте, и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Ответит на юридический вопрос клиента?', a: 'Нет. В этом и суть: бот не даёт юридических советов и не оценивает дело. Он говорит, что вопрос изучит юрист на консультации, и записывает на встречу. Так защищён и клиент, и вы.' },
        { q: 'Он заменит администратора или юриста?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение, консультация и ведение дела остаются за людьми.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей фирме, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для юристов: почему именно сейчас',
            p: "Юридическую фирму часто ищут в стрессовый момент: перед подписанием договора, в начале спора, накануне истечения срока. Эти моменты не укладываются в рабочие часы. Клиент пишет в Instagram и Messenger и ждёт ответа за минуты. После согласованного включения AI-чатбот для юристов отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Юридический рынок в Тбилиси насыщен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента юридической фирмы это логика записи. Ассистент уточняет, какого вопроса касается обращение, собирает удобное время, имя и телефон, создаёт предварительную запись на консультацию и утром передаёт её администратору для подтверждения. В детали дела он не вникает. Так график фирмы остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы по юридическим вопросам',
            p: "В юридической сфере самое важное правило такое: бот не должен давать совет и не должен оценивать вопрос. Неверный ответ вредит и клиенту, и репутации фирмы. Правильно настроенный ассистент говорит лишь, в каких областях вы работаете и сколько стоит консультация, а остальное оставляет юристу. Чувствительный вопрос он передаёт человеку без лишних деталей по согласованным правилам доступа. Проверка остаётся за юристом по согласованным правилам, а следующий шаг определяет фирма.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для юристов?',
        aeoBody:
          'AI-ассистент для юристов это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он говорит, какие вопросы ведёт фирма, называет стоимость консультации, записывает клиента на встречу, собирает имя, номер и удобное время и утром передаёт администратору. Он не даёт юридических советов, не оценивает дело, работает только по утверждённой информации; неизвестные детали уточняет команда. Для фирмы результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-law-firms-georgia', label: 'AI для юридических фирм в Грузии' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Автоматизация сбора лидов: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
