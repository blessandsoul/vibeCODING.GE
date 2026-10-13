import type { NicheEntry } from '../types';

/**
 * Private medical and diagnostic centers (სამედიცინო და დიაგნოსტიკური ცენტრი):
 * labs, imaging and specialist consults. The demo persona is a diagnostics
 * center (მედლაინ დიაგნოსტიკა). The landing leans hard on the safety story: the
 * bot never diagnoses, never interprets results, and hands urgent cases to a
 * human. Landing copy is tuned to the diagnostics keyword, not the generic term.
 */
export const medical: NicheEntry = {
  key: 'medical',
  slug: 'ai-chatbot-samedicino-centrebistvis',
  serviceType: 'AI Chatbot for Medical and Diagnostic Centers',
  persona: {
    botName: 'მარიამ',
    brand: 'მედლაინ დიაგნოსტიკა',
    bizType: 'სამედიცინო და დიაგნოსტიკური ცენტრი',
    hours: 'ორშაბათი-შაბათი 09:00-19:00, კვირას 10:00-15:00',
    address: 'თბილისი, ცენტრი.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ექიმ-სპეციალისტის კონსულტაცია 40-120 ლარი; სისხლის საერთო ანალიზი 15-40; ბიოქიმიური პანელი 60-200; ჰორმონები 30-90; მუცლის ღრუს ულტრაბგერა 50-120; MRI 250-600; KT 200-450. გადახდა: ნაღდი, ბარათი, დაზღვევასთან მუშაობა.',
    booking:
      'როცა პაციენტს ჩაწერა უნდა, ჯერ ჰკითხე რომელი კვლევა ან კონსულტაცია სურს და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [კვლევა] [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ჩაწერას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ და ანალიზის პასუხს არ განმარტავ.',
      'გადაუდებელ ან სასწრაფო შემთხვევაზე ურჩევ 112-ს დარეკვას და საუბარს ადამიანს გადასცემ.',
    ],
    customerNoun: 'პაციენტი',
    followupDomains: 'კვლევისთვის მზადება, უზმოზე ჩაბარება, პასუხის მიღების ვადა, დაზღვევასთან მუშაობა, ონლაინ პასუხის გამოგზავნა',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი დიაგნოსტიკური ცენტრებისთვის: ჩაწერა 24/7',
      description:
        'AI ასისტენტი დიაგნოსტიკური ცენტრებისთვის თბილისში. პასუხობს პაციენტებს ღამითაც, ასახელებს ფასთა შუალედს, იწერს კვლევაზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი დიაგნოსტიკური ცენტრებისთვის',
      h1: 'პაციენტი წერს დილის 07:40-ზე.',
      h1Accent: 'პასუხი უკვე გზაშია.',
      lead: 'უზმოზე ანალიზის ჩასაბარებლად პაციენტს დილით ვიწრო ფანჯარა აქვს: სამსახურამდე უნდა მოასწროს და პასუხი მაშინვე სჭირდება, მიიღებთ თუ არა უზმოზე, რომელ საათზე იღებთ და რა ჯდება. AI ასისტენტი ნებისმიერ საათზე პასუხობს ავტომატურად, ასახელებს ფასთა შუალედს, იწერს კვლევას, ნომერსა და დროს და ადმინისტრატორს გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'მარიამ',
      chatRole: 'მედლაინ დიაგნოსტიკა, დემო ცენტრის ასისტენტი',
      chatGreeting:
        'მარიამ ვარ, მედლაინ დიაგნოსტიკის ასისტენტი. დამიწერეთ, რომელი ანალიზი ან კვლევა გჭირდებათ, უზმოზე მზადებას აგიხსნით და დილის თავისუფალ საათზე ჩაგწერთ.',
      chatPlaceholder: 'ჰკითხეთ ანალიზზე, კვლევაზე ან ჩაწერაზე...',
      chatChips: ['აკეთებთ მუცლის ღრუს ულტრაბგერას?', 'MRI-ზე ჩაწერა მინდა', 'სისხლის ანალიზი ხვალ შემიძლია?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს დიაგნოსტიკური ცენტრი პაციენტებს',
      pains: [
        {
          h: 'პაციენტი საღამოს ეძებს კვლევას',
          p: 'ექიმის მიმართვის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი რეგისტრატურა უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ ცენტრს ერთდროულად',
          p: '«აკეთებთ ამ ანალიზს? MRI-ზე როდის მოვიდე?» დააზუსტეთ კვლევა და ექიმის მითითება, შემდეგ გაუგზავნეთ მომზადების წესი და ხელმისაწვდომი დრო.',
        },
        {
          h: 'კვლევის კითხვას მომზადება და ჩაწერის დრო უნდა მოჰყვეს',
          p: 'დააზუსტეთ რომელი კვლევა სჭირდება პაციენტს და აქვს თუ არა ექიმის მითითება, შემდეგ კი მომზადების წესები და ხელმისაწვდომი დრო გაუგზავნეთ.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და კვლევაზე ჩაწერისკენ მიჰყავს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'კვლევა ან კონსულტაცია, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
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
          h: 'დიაგნოზს არ სვამს და პასუხს არ განმარტავს',
          p: 'ბოტი არასდროს სვამს დიაგნოზს და ანალიზის ან კვლევის პასუხს არ განმარტავს. ეს მხოლოდ ექიმის საქმეა. ის მხოლოდ გიწერთ კვლევაზე და სამედიცინო კითხვას ექიმს გადასცემს.',
        },
        {
          h: 'თვითონ არ ადასტურებს ჩაწერას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'გადაუდებელ შემთხვევას ადამიანს გადასცემს',
          p: 'სასწრაფო ან შემაშფოთებელი სიმპტომი: ასეთ დროს ბოტი ურჩევს 112-ს დარეკვას და საუბარს მაშინვე ადამიანს გადასცემს, ექიმობას არ იჩემებს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი დიაგნოსტიკური ცენტრისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება კვლევებისა და კონსულტაციების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და პაციენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'დასვამს დიაგნოზს ან განმარტავს ანალიზის პასუხს?',
          a: 'არა, არასდროს. ბოტი არ სვამს დიაგნოზს და კვლევის პასუხს არ განმარტავს. ის ასახელებს ფასთა შუალედს, გიწერთ კვლევაზე და სამედიცინო კითხვას ექიმს გადასცემს. პასუხის ინტერპრეტაცია მხოლოდ ექიმის საქმეა.',
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
            h: 'AI ჩატბოტი დიაგნოსტიკური ცენტრებისთვის: რატომ სწორედ ახლა',
            p: "პაციენტების უმეტესობა კვლევასა და ანალიზს ტელეფონიდან ეძებს, ხშირად ექიმის მიმართვის შემდეგ და სამუშაო საათების მიღმა. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან: აკეთებთ თუ არა ამ კვლევას, როგორია ფასთა შუალედი და როდის მოვიდნენ. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი დიაგნოსტიკური ცენტრებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და დიაგნოსტიკური ცენტრის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი კვლევის ან კონსულტაციის, დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე ცენტრის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები სამედიცინო თემებზე',
            p: "დიაგნოსტიკაში დაუშვებელია, ბოტმა დიაგნოზი დასვას, ანალიზის პასუხი განმარტოს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ ცენტრის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, გადაუდებელი ან შემაშფოთებელი სიმპტომის შემთხვევაში კი ურჩევს 112-ს დარეკვას და საუბარს მაშინვე ადამიანს გადასცემს. საუბრის გადაცემის შემდეგ საბოლოო შეფასება შესაბამის სპეციალისტს რჩება შეთანხმებული წესით.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი დიაგნოსტიკური ცენტრისთვის?',
        aeoBody:
          'AI ასისტენტი დიაგნოსტიკური ცენტრისთვის არის ჩატბოტი, რომელიც პაციენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს კვლევებისა და კონსულტაციების ფასთა შუალედებს, პაციენტს კვლევაზე ჩაწერისკენ მიჰყავს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, არ განმარტავს ანალიზის პასუხს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ცენტრისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI სამედიცინო კლინიკებისთვის: გზამკვლევი' },
        { slug: 'ai-voice-agent-medical-clinic-appointments', label: 'AI ხმოვანი აგენტი კლინიკის ჩაწერისთვის' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს პაციენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for medical and diagnostic centers: booking 24/7',
      description:
        'AI assistant for diagnostic centers in Tbilisi. Answers patients at night, quotes the price range, books the exam or consult and hands it to your administrator.',
      eyebrow: 'AI assistant for diagnostic centers',
      h1: 'A patient writes at 07:40 in the morning.',
      h1Accent: 'The answer is already on its way.',
      lead: 'To give a fasting sample, a patient has a narrow morning window: they must make it before work and need an answer right away, do you take fasting walk-ins, what hours you run them and what it costs. The AI assistant answers automatically at any hour, quotes the price range, records the exam, number and time, and hands it to your administrator to confirm.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Mariam',
      chatRole: 'Medline Diagnostics, demo center assistant',
      chatGreeting: 'I am Mariam, the Medline Diagnostics assistant. Tell me which test or scan you need, I will walk you through the fasting prep and book you into a free morning slot.',
      chatPlaceholder: 'Ask about a test, a scan or booking...',
      chatChips: ['Do you do an abdominal ultrasound?', 'I want to book an MRI', 'Can I do a blood test tomorrow?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a diagnostic center loses patients',
      pains: [
        { h: 'Patients look for a test in the evening', p: 'After a doctor referral, from the phone. They write straight into Instagram or Messenger, when your front desk is already closed.' },
        { h: 'They message two or three centers at once', p: '"Do you do this test? When can I come for an MRI?" Clarify the test and whether there is a doctor referral, then send preparation instructions and available times.' },
        { h: 'A test question needs preparation and an appointment', p: 'Clarify which test the patient needs and whether they have a referral from a doctor, then send the preparation instructions and available times.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and moves the patient toward booking the exam. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Exam or consult, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the patient is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'It does not diagnose or interpret results', p: 'The bot never makes a diagnosis and never interprets a test or lab result. That is a job for the doctor alone. It only books the exam and passes the medical question to a physician.' },
        { h: 'It does not confirm bookings by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands urgent cases to a human', p: 'An urgent or worrying symptom: the bot advises calling 112 and passes the conversation to a person right away. It does not play doctor.' },
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
        { q: 'How fast can the assistant go live for a diagnostic center?', a: 'Timing depends on the agreed scope: we need your list of exams and consultations, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'Does it diagnose or interpret lab results?', a: 'No, never. The bot does not make a diagnosis and does not interpret test results. It quotes the price range, books the exam and passes any medical question to a doctor. Interpreting a result is a job for the physician alone.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your center, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for diagnostic centers: why right now',
            p: "Most patients look for a test or a scan from the phone, often after a doctor referral and outside working hours. They write into Instagram and Messenger and expect an answer in minutes: do you do this exam, what is the price range and when can they come. After the agreed activation, the AI chatbot for diagnostic centers can answer at night using only the information you approve and hand complex requests to the team.",
          },
          {
            h: 'Booking, not just messaging',
            p: "The main difference between a simple chatbot and a diagnostic center assistant is the booking logic. The assistant collects information about the desired exam or consultation, the time, the name and the phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. This keeps the center schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on medical topics',
            p: "In diagnostics the bot must never make a diagnosis, interpret a lab result or invent a price. A properly configured assistant uses only the information the center provided, answers prices as ranges, and in an urgent or worrying case advises calling 112 and hands the conversation to a person right away. The team reviews the handoff under agreed rules; the final medical decision remains with a professional.",
          },
        ],
        aeoH: 'What does an AI assistant for a diagnostic center do?',
        aeoBody:
          'An AI assistant for a diagnostic center is a chatbot that answers patient messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It quotes the price ranges for exams and consultations, moves the patient toward booking an exam, records the name, number and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not make a diagnosis, does not interpret lab results, uses only approved information; unlisted details are confirmed by the team. For the center the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI for medical clinics: the guide' },
        { slug: 'ai-voice-agent-medical-clinic-appointments', label: 'AI voice agent for clinic appointments' },
      ],
      ctaLead: 'See it answer your own patients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для медицинских и диагностических центров: запись 24/7',
      description:
        'AI-ассистент для диагностических центров в Тбилиси. Отвечает пациентам ночью, называет вилку цен, записывает на исследование и передаёт администратору.',
      eyebrow: 'AI-ассистент для диагностических центров',
      h1: 'Пациент пишет в 07:40 утра.',
      h1Accent: 'Ответ уже в пути.',
      lead: 'Чтобы сдать анализ натощак, у пациента узкое утреннее окно: нужно успеть до работы и ответ нужен сразу, принимаете ли натощак, во сколько принимаете и сколько стоит. AI-ассистент отвечает автоматически в любой час, называет вилку цен, записывает исследование, номер и время и передаёт администратору на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Мариам',
      chatRole: 'Медлайн Диагностика, ассистент демо-центра',
      chatGreeting: 'Я Мариам, ассистент центра Медлайн Диагностика. Напишите, какой анализ или исследование вам нужны, объясню подготовку натощак и запишу на свободный утренний час.',
      chatPlaceholder: 'Спросите об анализе, исследовании или записи...',
      chatChips: ['Делаете УЗИ брюшной полости?', 'Хочу записаться на MRI', 'Можно сдать анализ крови завтра?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где диагностический центр теряет пациентов',
      pains: [
        { h: 'Пациент ищет исследование вечером', p: 'После направления от врача, с телефона. Пишет сразу в Instagram или Messenger, когда ваша регистратура уже закрыта.' },
        { h: 'Пишет в два-три центра одновременно', p: '«Делаете этот анализ? Когда прийти на MRI?» Уточните исследование и наличие направления врача, затем отправьте правила подготовки и доступное время.' },
        { h: 'Вопрос об исследовании требует подготовки и записи', p: 'Уточните, какое исследование нужно пациенту и есть ли направление врача, затем отправьте правила подготовки и доступное время.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и ведёт пациента к записи на исследование. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Исследование или консультация, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, пациент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Не ставит диагноз и не расшифровывает результат', p: 'Бот никогда не ставит диагноз и не расшифровывает результат анализа или исследования. Это работа только врача. Он лишь записывает на исследование и передаёт вопрос врачу.' },
        { h: 'Не подтверждает запись сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Срочные случаи передаёт человеку', p: 'Срочный или тревожный симптом: бот советует позвонить 112 и сразу передаёт разговор человеку. В доктора не играет.' },
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
        { q: 'Как быстро ассистент запускается для диагностического центра?', a: 'Сроки зависят от согласованного объёма: нужны список исследований и консультаций, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Ставит диагноз или расшифровывает анализы?', a: 'Нет, никогда. Бот не ставит диагноз и не расшифровывает результаты исследований. Он называет вилку цен, записывает на исследование и передаёт любой медицинский вопрос врачу. Расшифровка результата это работа только врача.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем центре, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для диагностических центров: почему именно сейчас',
            p: "Большинство пациентов ищут исследование или анализ с телефона, часто после направления врача и вне рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты: делаете ли вы это исследование, какая вилка цен и когда прийти. После согласованного включения AI-чатбот для диагностических центров отвечает ночью только по утверждённой информации и передаёт сложные запросы команде.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента диагностического центра это логика записи. Ассистент собирает информацию о желаемом исследовании или консультации, времени, имени и телефоне, создаёт предварительную бронь и утром передаёт администратору на подтверждение. Так график центра остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на медицинские темы',
            p: "В диагностике недопустимо, чтобы бот ставил диагноз, расшифровывал результат анализа или выдумывал цену. Правильно настроенный ассистент использует только предоставленную центром информацию, отвечает по ценам вилками, а в срочном или тревожном случае советует позвонить 112 и сразу передаёт разговор человеку. После передачи вопрос рассматривает специалист по согласованным правилам; медицинское решение остаётся за человеком.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для диагностического центра?',
        aeoBody:
          "AI-ассистент для диагностического центра это чатбот, который отвечает на сообщения пациентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на исследования и консультации, ведёт пациента к записи на исследование, записывает имя, номер и желаемое время, создаёт предварительную бронь и утром передаёт администратору. Он не ставит диагноз, не расшифровывает результаты анализов, работает только по утверждённой информации; неизвестные детали уточняет команда. Для центра вечерние и выходные обращения можно передавать команде по согласованным правилам; медицинское решение остаётся за специалистом.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-medical-clinics-georgia-guide', label: 'AI для медицинских клиник: гид' },
        { slug: 'ai-voice-agent-medical-clinic-appointments', label: 'AI голосовой агент для записи в клинику' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим пациентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
