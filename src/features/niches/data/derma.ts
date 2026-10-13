import type { NicheEntry } from '../types';

/**
 * Dermatology and trichology clinics (დერმატოლოგია). The demo persona is a
 * generic demo derma clinic (Derma Tbilisi); no real client is claimed in this
 * niche, so the proof stat is attributed to a generic aiNOW client. The landing
 * copy is tuned to the dermatology and hair-loss keyword rather than the generic
 * "clinics" term.
 */
export const derma: NicheEntry = {
  key: 'derma',
  slug: 'ai-chatbot-dermatologiistvis',
  serviceType: 'AI Chatbot for Dermatology and Trichology Clinics',
  persona: {
    botName: 'ია',
    brand: 'დერმა თბილისი',
    bizType: 'დერმატოლოგიისა და ტრიქოლოგიის კლინიკა',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: დერმატოლოგის კონსულტაცია 40-100 ლარი; კანის დათვალიერება დერმატოსკოპით; თმის ცვენის დიაგნოსტიკა; PRP თერაპია 150-350; ლაზერული პროცედურები 80-300. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა პაციენტს ჩაწერა უნდა, ჯერ ჰკითხე რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ვიზიტს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ და მედიკამენტს ან დოზას არ ნიშნავ.',
      'კანის ან თმის პრობლემაზე: სთხოვე ტელეფონი და უთხარი, რომ ექიმი ცოცხლად შეაფასებს და ადმინისტრატორი დაგირეკავს.',
    ],
    customerNoun: 'პაციენტი',
    followupDomains:
      'ფოტოთი წინასწარი შეფასების შესაძლებლობა, რომელი ექიმი გიღებთ, პროცედურის მომზადება და მოვლა, შედეგის ვადა, ფასთა შუალედი კონკრეტულ პროცედურაზე',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი დერმატოლოგიისთვის: პაციენტების ჩაწერა 24/7',
      description:
        'AI ასისტენტი დერმატოლოგიური და ტრიქოლოგიური კლინიკებისთვის თბილისში. პასუხობს პაციენტებს ღამითაც, იწერს ვიზიტს და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი დერმატოლოგიისთვის',
      h1: 'პაციენტი კანის ფოტოს გზავნის 22:05-ზე.',
      h1Accent: 'ჯავშანი უკვე იწერება.',
      lead: 'გვიან საღამოს პაციენტი გამონაყრის ფოტოს აგზავნის. AI ასისტენტი დიაგნოზის გარეშე აზუსტებს ჩივილს, იღებს ფოტოსა და საკონტაქტო მონაცემებს, სთავაზობს დერმატოლოგის გასინჯვის დროს და მოთხოვნას ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ია',
      chatRole: 'დერმა თბილისი, დემო კლინიკის ასისტენტი',
      chatGreeting:
        'დერმა თბილისი გისმენთ. კანსა და თმაზე რასაც მკითხავთ, მაშინვე გიპასუხებთ და ვიზიტზე ჩაგწერთ, გვიან საღამოსაც.',
      chatPlaceholder: 'ჰკითხეთ კანზე, თმაზე ან ჩაწერაზე...',
      chatChips: ['კანის ფოტოს გამოგიგზავნით, შეაფასებთ?', 'ხალის დათვალიერებაზე პარასკევს ჩავეწერები?', 'თმის ცვენის დიაგნოსტიკა როგორ ტარდება?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს დერმატოლოგია პაციენტებს',
      pains: [
        {
          h: 'პაციენტი საღამოს ეძებს ექიმს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. კანის გამონაყარს ან ხალს სურათზე იღებს და პირდაპირ Instagram-ში ან Messenger-ში წერს, როცა თქვენი რეგისტრატურა უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ კლინიკას ერთდროულად',
          p: '«ხვალ თავისუფალი დრო გაქვთ? კონსულტაცია რა ღირს?» დააზუსტეთ ჩივილი და ვიზიტის საჭიროება; დიაგნოზის ნაცვლად შესთავაზეთ დერმატოლოგის გასინჯვის დრო.',
        },
        {
          h: 'კანის ფოტოს ექიმის შეფასების გზა უნდა მოჰყვეს',
          p: 'გამონაყრის ან ხალის ფოტოზე პასუხმა დიაგნოზი არ უნდა ჩაანაცვლოს: დააზუსტეთ ჩივილი და პაციენტს დერმატოლოგის კონსულტაციის ან გასინჯვის დრო შესთავაზეთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და კონსულტაციაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სერვისი, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს და პაციენტი თქვენს გრაფიკშია.',
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
          h: 'დიაგნოზს არ სვამს და წამალს არ ნიშნავს',
          p: 'კანის ან თმის მდგომარეობას ცოცხლად ექიმი აფასებს. გამონაყარზე, ხალზე ან თმის ცვენაზე ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს, მედიკამენტსა და დოზას არ ნიშნავს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი დერმატოლოგიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და პაციენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა პაციენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და კონსულტაციაზე იწვევს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი კლინიკის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი დერმატოლოგიისთვის: რატომ სწორედ ახლა',
            p: "პაციენტების უმეტესობა დერმატოლოგს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. კანის გამონაყარს ან ხალს ფოტოზე იღებენ, წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი დერმატოლოგიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში დერმატოლოგიური ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და დერმატოლოგიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სერვისის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კლინიკის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები სამედიცინო თემებზე',
            p: "დერმატოლოგიაში დაუშვებელია, ბოტმა დიაგნოზი დასვას, წამალი დანიშნოს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ კლინიკის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, კანის ან თმის პრობლემის შემთხვევაში კი საუბარს მაშინვე ადამიანს გადასცემს. საუბრის გადაცემის შემდეგ საბოლოო შეფასებას შესაბამისი ექიმი აკეთებს შეთანხმებული წესით.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი დერმატოლოგიისთვის?',
        aeoBody:
          'AI ასისტენტი დერმატოლოგიისთვის არის ჩატბოტი, რომელიც პაციენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, პაციენტს კონსულტაციაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, არ ნიშნავს მედიკამენტს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კლინიკისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI სამედიცინო კლინიკებისთვის: გზამკვლევი' },
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI სილამაზის სალონებისთვის' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს პაციენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for dermatology clinics: patient booking 24/7',
      description:
        'AI assistant for dermatology and trichology clinics in Tbilisi. Answers patients at night, books the visit and hands it to your administrator.',
      eyebrow: 'AI assistant for dermatology clinics',
      h1: 'A patient sends a skin photo at 22:05.',
      h1Accent: 'The booking is already underway.',
      lead: 'Late in the evening a patient sends a photo of a rash. The AI assistant does not diagnose by message: it clarifies the concern, takes the photo and contact details, offers a dermatologist examination slot, and hands the request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Ia',
      chatRole: 'Derma Tbilisi, demo clinic assistant',
      chatGreeting: 'Derma Tbilisi here. Ask me anything about skin or hair, I reply right away and book your visit, late in the evening too.',
      chatPlaceholder: 'Ask about skin, hair or booking...',
      chatChips: ['I will send a photo of my skin, can you assess it?', 'Can I book a mole check for Friday?', 'How is hair-loss diagnosis done?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a dermatology clinic loses patients',
      pains: [
        { h: 'Patients look for a doctor in the evening', p: 'After work, from the phone. They photograph a rash or a mole and write straight into Instagram or Messenger, when your front desk is already closed.' },
        { h: 'They message two or three clinics at once', p: '"Is tomorrow free? How much is a consultation?" Clarify the concern and whether a visit is needed; do not diagnose by message, offer an examination slot.' },
        { h: 'A skin photo needs a clinician assessment path', p: 'A rash or mole photo should not receive a diagnosis by message: clarify the concern and offer a dermatologist consultation or examination slot.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to a consultation. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Service, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the patient is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the doctor will clarify.' },
        { h: 'It does not confirm visits by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It does not diagnose or prescribe', p: 'A doctor assesses the skin or hair in person. On a rash, a mole or hair loss the bot takes a phone number and passes the case to a person. It prescribes no medication or dose.' },
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
        { q: 'How fast can the assistant go live for a dermatology clinic?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a patient asks the price?', a: 'The bot quotes the range you set and invites the patient to a consultation for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your clinic, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for dermatology: why right now',
            p: "Most patients pick a dermatologist from the phone, after working hours. They photograph a rash or a mole, write into Instagram and Messenger, and expect a reply within minutes. After the agreed activation, the AI chatbot for dermatology can answer at night using only the information you approve and hand complex requests to the team. The dermatology market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The real difference between a simple chatbot and a dermatology assistant is the booking logic. The assistant gathers the service, the preferred time, the name and the phone number, creates a provisional booking and hands it to the administrator in the morning to confirm. The clinic schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on medical topics',
            p: "In dermatology a bot must never diagnose, prescribe a medication or invent a price. A properly built assistant uses only the information the clinic provided, answers on price with ranges, and on any skin or hair concern it passes the conversation straight to a person. The handoff keeps the final assessment with the relevant clinician under agreed rules.",
          },
        ],
        aeoH: 'What does an AI assistant for dermatology do?',
        aeoBody:
          'An AI assistant for dermatology is a chatbot that answers patient messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes service price ranges, invites the patient to a consultation, records the name, number and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not diagnose, does not prescribe medication, uses only approved information; unlisted details are confirmed by the team. For the clinic the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI for medical clinics: the guide' },
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI for beauty salons in Georgia' },
      ],
      ctaLead: 'See it answer your own patients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для дерматологии: запись пациентов 24/7',
      description:
        'AI-ассистент для дерматологических и трихологических клиник в Тбилиси. Отвечает пациентам ночью, называет вилку цен, записывает визит и передаёт администратору.',
      eyebrow: 'AI-ассистент для дерматологии',
      h1: 'Пациент присылает фото кожи в 22:05.',
      h1Accent: 'Запись уже оформляется.',
      lead: 'Поздно вечером пациент присылает фото высыпания. AI-ассистент не ставит диагноз по переписке: уточняет жалобу, принимает фото и контакты, предлагает время осмотра дерматолога и передаёт запрос администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Иа',
      chatRole: 'Дерма Тбилиси, ассистент демо-клиники',
      chatGreeting: 'Дерма Тбилиси на связи. Спросите про кожу или волосы, отвечу сразу и запишу на визит, даже поздним вечером.',
      chatPlaceholder: 'Спросите о коже, волосах или записи...',
      chatChips: ['Пришлю фото кожи, оцените?', 'Могу записаться на осмотр родинки в пятницу?', 'Как проходит диагностика выпадения волос?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где дерматология теряет пациентов',
      pains: [
        { h: 'Пациент ищет врача вечером', p: 'После работы, с телефона. Фотографирует высыпание или родинку и пишет сразу в Instagram или Messenger, когда ваша регистратура уже закрыта.' },
        { h: 'Пишет в две-три клиники одновременно', p: '«Есть время завтра? Сколько консультация?» Уточните жалобу и необходимость визита; не ставьте диагноз по переписке, предложите время осмотра дерматолога.' },
        { h: 'Фото кожи должно вести к осмотру врача', p: 'По фото высыпания или родинки нельзя ставить диагноз: уточните жалобу и предложите консультацию дерматолога или время осмотра.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на консультацию. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Услуга, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, пациент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает визит сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Не ставит диагноз и не назначает лекарства', p: 'Состояние кожи или волос вживую оценивает врач. По высыпанию, родинке или выпадению волос бот берёт номер и передаёт случай человеку, дозы и препараты не назначает.' },
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
        { q: 'Как быстро ассистент запускается для дерматологии?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда пациент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на консультацию за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей клинике, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для дерматологии: почему именно сейчас',
            p: "Большинство пациентов выбирают дерматолога с телефона, после рабочих часов. Фотографируют высыпание или родинку, пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для дерматологии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок дерматологии в Тбилиси перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента дерматологии это логика записи. Ассистент собирает услугу, желаемое время, имя и телефон, создаёт предварительную запись и утром передаёт её администратору на подтверждение. График клиники остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на медицинские темы',
            p: "В дерматологии недопустимо, чтобы бот ставил диагноз, назначал лекарство или выдумывал цену. Правильно настроенный ассистент использует только предоставленную клиникой информацию, отвечает о ценах вилками, а при любой проблеме кожи или волос сразу передаёт разговор человеку. После передачи вопрос рассматривает соответствующий специалист по согласованным правилам.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для дерматологии?',
        aeoBody:
          'AI-ассистент для дерматологии это чатбот, который отвечает на сообщения пациентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги, приглашает пациента на консультацию, записывает имя, номер и желаемое время, создаёт предварительную запись и утром передаёт администратору. Он не ставит диагноз, не назначает лекарства, работает только по утверждённой информации; неизвестные детали уточняет команда. Для клиники результат прост: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI для медицинских клиник: гид' },
        { slug: 'ai-for-beauty-salons-georgia', label: 'AI для салонов красоты в Грузии' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим пациентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
