import type { NicheEntry } from '../types';

/**
 * Physiotherapy and rehab clinics (ფიზიოთერაპია და რეაბილიტაცია). The demo
 * persona is a generic rehab-clinic assistant (Physio Tbilisi), not a real
 * named client, so the landing copy is tuned to the physiotherapy keyword:
 * the "do you treat my problem" question plus session booking, with the
 * no-diagnosis guard carrying the trust story.
 */
export const physio: NicheEntry = {
  key: 'physio',
  slug: 'ai-chatbot-fizioterapiistvis',
  serviceType: 'AI Chatbot for Physiotherapy and Rehab Clinics',
  persona: {
    botName: 'ზურა',
    brand: 'ფიზიო თბილისი',
    bizType: 'ფიზიოთერაპიისა და რეაბილიტაციის ცენტრი',
    hours: 'ორშაბათი-შაბათი 09:00-20:00, კვირას დასვენება',
    address: 'თბილისი, საბურთალო. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: პირველადი შეფასება 40-80 ლარი; ფიზიოთერაპიის სეანსი 50-100; მასაჟი და მანუალური თერაპია 60-120; სარეაბილიტაციო კურსი პაკეტად ფასდება, სეანსების რაოდენობის მიხედვით. გადახდა: ნაღდი ან ბარათი, კურსზე განვადება.',
    booking:
      'როცა პაციენტს სეანსზე ჩაწერა უნდა, ჯერ ჰკითხე რომელი სერვისი აინტერესებს და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." სეანსს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ, მდგომარეობას ფიზიოთერაპევტი აფასებს.',
      'მწვავე ტკივილზე ურჩიე ექიმთან მისვლა და გადაეცი ადამიანს: სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრატორი პირველ რიგში დაგირეკავს.',
    ],
    customerNoun: 'პაციენტი',
    followupDomains:
      'კურსში სესიების რაოდენობა, ერთი სესიის ხანგრძლივობა, განვადება კურსზე, სახლში შესასრულებელი ვარჯიშები, შედეგამდე რამდენი სესია სჭირდება',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ფიზიოთერაპიისთვის: სეანსებზე ჩაწერა 24/7',
      description:
        'AI ასისტენტი ფიზიოთერაპიისა და რეაბილიტაციის ცენტრებისთვის თბილისში. პასუხობს პაციენტებს ღამითაც, იწერს სეანსზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ფიზიოთერაპიისთვის',
      h1: '21:05, ზურგის ტკივილით პაციენტი სესიას ეძებს.',
      h1Accent: 'სესია უკვე იჯავშნება.',
      lead: 'ზურგის ტკივილის შემდეგ პაციენტი ფიზიოთერაპევტზე წერს. ზურა ავტომატურად აზუსტებს, მუშაობთ თუ არა მის პრობლემასთან, იწერს სახელს, ნომერსა და სასურველ დროს, შემდეგ კი შეფასების ვიზიტის მოთხოვნას ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ზურა',
      chatRole: 'ფიზიო თბილისი, დემო ცენტრის ასისტენტი',
      chatGreeting:
        'ფიზიო თბილისის ასისტენტი ზურა გისმენთ. მითხარით, სად გაწუხებთ, გეტყვით ვმუშაობთ თუ არა ამ პრობლემასთან, ფასს დაგისახელებთ და სესიაზე ჩაგწერთ.',
      chatPlaceholder: 'ჰკითხეთ პრობლემაზე, სესიაზე ან ჩაწერაზე...',
      chatChips: ['ზურგის ტკივილთან მუშაობთ?', 'რა ღირს პირველადი შეფასება?', 'ხვალ საღამოს სესიაზე ჩამწერთ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ფიზიოთერაპია პაციენტებს',
      pains: [
        {
          h: 'პაციენტი საღამოს ეძებს ფიზიოთერაპევტს',
          p: 'ტკივილი საღამოს ან ვარჯიშის შემდეგ ძლიერდება. პაციენტი ტელეფონიდან წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი რეგისტრატურა უკვე დაკეტილია.',
        },
        {
          h: 'ჯერ ეკითხება "ჩემს პრობლემასთან მუშაობთ?"',
          p: '«ზურგის თიაქარი მაქვს, დამეხმარებით?» დააზუსტეთ, რა პრობლემაზე სჭირდება დახმარება პაციენტს და სასურველი დრო, შემდეგ შესთავაზეთ ფიზიოთერაპევტის შეფასების ვიზიტი.',
        },
        {
          h: 'ტკივილის აღწერას შეფასების ვიზიტი უნდა მოჰყვეს',
          p: 'დააზუსტეთ, რომელ პრობლემაზე სჭირდება დახმარება და სასურველი დრო, შემდეგ შეფასების მოთხოვნა ადმინისტრატორს გადასცით; მწვავე ტკივილის შემთხვევაში პაციენტს ექიმთან მისვლა ურჩიეთ და მოთხოვნა გუნდის წევრს გადაეცით.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ეუბნება, მუშაობთ თუ არა მის პრობლემასთან',
          p: 'ზურგი, კისერი, სახსრები, ოპერაციის შემდგომი აღდგენა, სპორტული ტრავმა. ასახელებს თქვენს რეალურ ფასთა შუალედს და პირველად შეფასებაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
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
        {
          h: 'არ სვამს დიაგნოზს',
          p: 'ბოტი მდგომარეობას არ აფასებს და მკურნალობას არ ნიშნავს. მხოლოდ ეუბნება, მუშაობთ თუ არა ამ პრობლემასთან, შეფასებას კი ფიზიოთერაპევტი აკეთებს ადგილზე.',
        },
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'მწვავე ტკივილს ადამიანს გადასცემს',
          p: 'ძლიერი, მწვავე ტკივილის დროს ურჩევს ექიმთან მისვლას, ნომერს იღებს და საქმეს მაშინვე ადამიანს გადასცემს. სეანსსაც თვითონ არ ადასტურებს, ეს ადმინისტრატორის ზარია.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი ფიზიოთერაპიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და პაციენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა პაციენტი კითხულობს "ჩემს პრობლემასთან მუშაობთ?"',
          a: 'ბოტი პასუხობს თქვენი მიწოდებული სიით, რომელ მდგომარეობებთან მუშაობთ (ზურგი, სახსრები, ოპერაციის შემდგომი აღდგენა და სხვა), და პირველად შეფასებაზე იწვევს. ის დიაგნოზს არ სვამს, ამას ფიზიოთერაპევტი აკეთებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი ცენტრის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ფიზიოთერაპიისთვის: რატომ სწორედ ახლა',
            p: "პაციენტების უმეტესობა ფიზიოთერაპევტს ტელეფონიდან ეძებს, ტკივილის ან ვარჯიშის შემდეგ, სამუშაო საათების მიღმა. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ფიზიოთერაპიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სარეაბილიტაციო ცენტრები ბევრია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'სეანსზე ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ფიზიოთერაპიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი ჯერ არკვევს, რომელ პრობლემასთან მოდის პაციენტი, აგროვებს ინფორმაციას სერვისის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე ცენტრის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ჯანმრთელობის თემებზე',
            p: "ფიზიოთერაპიაში დაუშვებელია, ბოტმა დიაგნოზი დასვას ან მკურნალობა დანიშნოს. სწორად აწყობილი ასისტენტი მხოლოდ ცენტრის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, მწვავე ტკივილის შემთხვევაში კი ურჩევს ექიმთან მისვლას და საუბარს მაშინვე ადამიანს გადასცემს. საუბრის გადაცემის შემდეგ შემდეგ ნაბიჯს ექიმი და გუნდი შეთანხმებული წესით ადგენენ.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ფიზიოთერაპიისთვის?',
        aeoBody:
          'AI ასისტენტი ფიზიოთერაპიისთვის არის ჩატბოტი, რომელიც პაციენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ეუბნება პაციენტს, რომელ პრობლემებთან მუშაობს ცენტრი, ასახელებს სერვისების ფასთა შუალედებს, პირველად შეფასებაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ცენტრისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI სამედიცინო კლინიკებისთვის: გზამკვლევი' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს პაციენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for physiotherapy clinics: session booking 24/7',
      description:
        'AI assistant for physiotherapy and rehab clinics in Tbilisi. Answers patients at night, books the session and hands it to your administrator.',
      eyebrow: 'AI assistant for physiotherapy clinics',
      h1: '21:05, a patient with back pain looks for a session.',
      h1Accent: 'The session is already being booked.',
      lead: 'After a day with back pain, a patient asks about physiotherapy. Zura clarifies whether the clinic handles the problem, records the name, phone and preferred time, then hands the assessment request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Zura',
      chatRole: 'Physio Tbilisi, demo clinic assistant',
      chatGreeting: 'Zura here, the Physio Tbilisi assistant. Tell me where it hurts, I will say whether we treat that problem, name the price and book your session.',
      chatPlaceholder: 'Ask about your problem, a session or booking...',
      chatChips: ['Do you treat back pain?', 'How much is the initial assessment?', 'Can you book me for a session tomorrow evening?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a physiotherapy clinic loses patients',
      pains: [
        { h: 'Patients look for a physiotherapist in the evening', p: 'Pain gets worse in the evening or after a workout. They write straight into Instagram or Messenger from the phone, when your front desk is already closed.' },
        { h: 'They first ask "do you treat my problem?"', p: '"I have a herniated disc, can you help?" Clarify which problem the patient needs help with and the preferred time, then offer an assessment visit with a physiotherapist.' },
        { h: 'A pain description needs an assessment visit', p: 'Clarify which problem needs help and the preferred time, then hand the assessment request to your administrator; for acute pain, advise the patient to see a doctor and hand the case to a person.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Says whether you treat their problem', p: 'Back, neck, joints, post-surgery recovery, sports injury. It quotes your real price range and invites to a first assessment. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Service, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the patient is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'It does not diagnose', p: 'The bot does not assess the condition or prescribe treatment. It only says whether you work with this problem; the physiotherapist does the assessment on site.' },
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the physiotherapist will clarify.' },
        { h: 'It hands acute pain to a human', p: 'On strong, acute pain it advises seeing a doctor, takes a phone number and passes the case to a person. It does not confirm the session itself either; that is the administrator call.' },
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
        { q: 'How fast can the assistant go live for a physiotherapy clinic?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a patient asks "do you treat my problem?"', a: 'The bot answers from the list you provided of conditions you work with (back, joints, post-surgery recovery and so on) and invites the patient to a first assessment. It does not diagnose; the physiotherapist does that.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your center, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for physiotherapy: why exactly now',
            p: "Most patients look for a physiotherapist from their phone, after pain or a workout, outside working hours. They write on Instagram and Messenger and expect an answer within minutes. After the agreed activation, the AI chatbot for physiotherapy can answer at night using only the information you approve and hand complex requests to the team. Tbilisi has plenty of rehab centers and the decision is made fast.",
          },
          {
            h: 'Session booking, not just messaging',
            p: "The real difference between a simple chatbot and a physiotherapy assistant is the booking logic. The assistant first finds out which problem the patient comes with, collects the service, preferred time, name and phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. This keeps the center schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on health topics',
            p: "In physiotherapy a bot must never diagnose or prescribe treatment. A properly built assistant uses only the information the center provided, answers on prices with ranges, and on acute pain advises seeing a doctor and hands the conversation straight to a human. The handoff keeps the next step with the team and doctor under agreed rules.",
          },
        ],
        aeoH: 'What does an AI assistant for physiotherapy do?',
        aeoBody:
          'An AI assistant for physiotherapy is a chatbot that answers patient messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It tells the patient which problems the center treats, names the price ranges of services, invites them to a first assessment, records the name, phone and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not diagnose, uses only approved information; unlisted details are confirmed by the team. For the center the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI for medical clinics: the guide' },
        { slug: 'ai-booking-appointment-automation', label: 'AI booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own patients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для физиотерапии: запись на сеансы 24/7',
      description:
        'AI-ассистент для клиник физиотерапии и реабилитации в Тбилиси. Отвечает пациентам ночью, записывает на сеанс и передаёт администратору.',
      eyebrow: 'AI-ассистент для физиотерапии',
      h1: '21:05, пациент с болью в спине ищет сеанс.',
      h1Accent: 'Сеанс уже бронируется.',
      lead: 'После дня с болью в спине пациент пишет о физиотерапии. Зура уточняет, работает ли центр с такой проблемой, собирает имя, номер и удобное время, затем передаёт запрос на оценочный визит администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Зура',
      chatRole: 'Физио Тбилиси, ассистент демо-клиники',
      chatGreeting: 'На связи Зура, ассистент клиники Физио Тбилиси. Расскажите, что беспокоит, скажу, работаем ли мы с этой проблемой, назову цену и запишу на сеанс.',
      chatPlaceholder: 'Спросите о проблеме, сеансе или записи...',
      chatChips: ['Работаете с болью в спине?', 'Сколько стоит первичная оценка?', 'Запишете на сеанс завтра вечером?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где физиотерапия теряет пациентов',
      pains: [
        { h: 'Пациент ищет физиотерапевта вечером', p: 'Боль усиливается вечером или после тренировки. Пишет сразу в Instagram или Messenger с телефона, когда ваша регистратура уже закрыта.' },
        { h: 'Сначала спрашивает «с моей проблемой работаете?»', p: '«У меня грыжа диска, поможете?» Уточните, с какой проблемой нужна помощь и какое время удобно, затем предложите оценочный визит к физиотерапевту.' },
        { h: 'Описание боли должно вести к оценочному визиту', p: 'Уточните, с какой проблемой нужна помощь и какое время удобно, затем передайте запрос на оценочный визит администратору; при острой боли посоветуйте пациенту обратиться к врачу и передайте запрос сотруднику.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Говорит, работаете ли вы с его проблемой', p: 'Спина, шея, суставы, восстановление после операции, спортивная травма. Называет вашу реальную вилку цен и приглашает на первичную оценку. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Услуга, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, пациент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Не ставит диагноз', p: 'Бот не оценивает состояние и не назначает лечение. Он только говорит, работаете ли вы с этой проблемой; оценку делает физиотерапевт на месте.' },
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Острую боль передаёт человеку', p: 'При сильной, острой боли советует обратиться к врачу, берёт номер и передаёт случай человеку. Сеанс он тоже сам не подтверждает, это звонок администратора.' },
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
        { q: 'Как быстро ассистент запускается для физиотерапии?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда пациент спрашивает «с моей проблемой работаете?»', a: 'Бот отвечает по вашему списку состояний, с которыми вы работаете (спина, суставы, восстановление после операции и так далее), и приглашает на первичную оценку. Диагноз он не ставит, это делает физиотерапевт.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем центре, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для физиотерапии: почему именно сейчас',
            p: "Большинство пациентов ищут физиотерапевта с телефона, после боли или тренировки, вне рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для физиотерапии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси реабилитационных центров много, и решение принимается быстро.",
          },
          {
            h: 'Запись на сеанс, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента физиотерапии в логике записи. Ассистент сначала выясняет, с какой проблемой приходит пациент, собирает услугу, желаемое время, имя и телефон, создаёт предварительную бронь и утром передаёт администратору на подтверждение. Так график центра остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на темы здоровья',
            p: "В физиотерапии недопустимо, чтобы бот ставил диагноз или назначал лечение. Правильно настроенный ассистент использует только предоставленную центром информацию, отвечает по ценам вилками, а при острой боли советует обратиться к врачу и сразу передаёт разговор человеку. После передачи следующий шаг определяют врач и команда по согласованным правилам.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для физиотерапии?',
        aeoBody:
          'AI-ассистент для физиотерапии это чатбот, который отвечает на сообщения пациентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он говорит пациенту, с какими проблемами работает центр, называет вилки цен на услуги, приглашает на первичную оценку, записывает имя, номер и желаемое время, создаёт предварительную бронь и утром передаёт администратору. Он не ставит диагноз, работает только по утверждённой информации; неизвестные детали уточняет команда. Для центра результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI для медицинских клиник: гид' },
        { slug: 'ai-booking-appointment-automation', label: 'AI-автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим пациентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
