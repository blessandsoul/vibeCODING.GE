import type { NicheEntry } from '../types';

/**
 * Veterinary clinics (ვეტერინარია). The demo persona is a generic vet-clinic
 * assistant tuned to the veterinary keyword: appointment booking, "do you treat
 * X" questions and after-hours triage handed to a human. Prices are illustrative
 * demo ranges only; the bot never diagnoses and never confirms a visit itself.
 */
export const vet: NicheEntry = {
  key: 'vet',
  slug: 'ai-chatbot-veterinariistvis',
  serviceType: 'AI Chatbot for Veterinary Clinics',
  persona: {
    botName: 'დათო',
    brand: 'ვეტა თბილისი',
    bizType: 'ვეტერინარული კლინიკა',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას 11:00-16:00',
    address: 'თბილისი, ცენტრი. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: კონსულტაცია 30-60 ლარი; ვაქცინაცია 25-80; კასტრაცია და სტერილიზაცია 100-300; ლაბორატორიული ანალიზები 20-120; ულტრაბგერითი კვლევა 40-90. სასწრაფო მიღება ცალკე ფასდება. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა მფლობელს ჩაწერა უნდა, ჯერ ჰკითხე რომელი დღე და დრო აწყობს და რა სჭირდება ცხოველს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ვიზიტს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ, ცხოველს ექიმი აფასებს.',
      'სასწრაფო შემთხვევაზე: ურჩიე, დაუყოვნებლივ მობრძანდნენ და საქმე მაშინვე ადამიანს გადაეცი, სთხოვე ტელეფონი.',
    ],
    customerNoun: 'მფლობელი',
    followupDomains:
      'სასწრაფო მიღება ღამით, რომელ ცხოველებს იღებთ, ვაქცინაციისა და პარაზიტების გრაფიკი, ანალიზის წინ მომზადება, სახლში ვიზიტის შესაძლებლობა, ფასთა შუალედი',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ვეტერინარიისთვის: მიღებაზე ჩაწერა 24/7',
      description:
        'AI ასისტენტი ვეტერინარული კლინიკებისთვის თბილისში. პასუხობს ცხოველების მფლობელებს ღამითაც, ასახელებს ფასთა შუალედს, იწერს მიღებაზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ვეტერინარიისთვის',
      h1: 'კატა ღამით შეუძლოდ გახდა, მფლობელი 06:50-ზე წერს.',
      h1Accent: 'ასისტენტმა უკვე უპასუხა.',
      lead: 'ღამით მფლობელი ცხოველის საჭიროებაზე წერს. AI ასისტენტი იწერს რა აწუხებს ცხოველს, მფლობელის სახელს, ნომერსა და სასურველ დროს; სასწრაფო შემთხვევას ექიმს გადასცემს, გეგმურ ჩაწერას კი ადმინისტრატორს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'დათო',
      chatRole: 'ვეტა თბილისი, დემო კლინიკის ასისტენტი',
      chatGreeting:
        'დათო გახლავართ, ვეტა თბილისის ასისტენტი. თუ ცხოველი გაწუხებთ ან მიღება გჭირდებათ, მომწერეთ, ნებისმიერ საათს ვარ აქ.',
      chatPlaceholder: 'ჰკითხეთ მიღებაზე, ვაქცინაზე ან სასწრაფო შემთხვევაზე...',
      chatChips: ['კატა ღამით შეუძლოდ გახდა, რა ვქნა?', 'დღეს სასწრაფოდ მიმიღებთ?', 'რა ღირს ძაღლის ვაქცინაცია?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ვეტერინარული კლინიკა კლიენტებს',
      pains: [
        {
          h: 'მფლობელი საღამოს ეძებს კლინიკას',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი რეგისტრატურა უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ კლინიკას ერთდროულად',
          p: '«ხვალ თავისუფალი დრო გაქვთ? ვაქცინა რა ღირს?» დააზუსტეთ რა აწუხებს ცხოველს, მფლობელის სახელი, ნომერი და სასურველი დრო, შემდეგ მოთხოვნა ექიმს ან ადმინისტრატორს გადასცით.',
        },
        {
          h: 'ცხოველის სიმპტომებს ვეტერინარის ვიზიტი უნდა მოჰყვეს',
          p: 'დააზუსტეთ, რა აწუხებს ცხოველს და ჩაიწერეთ მფლობელის საკონტაქტო მონაცემები; სასწრაფო შემთხვევა დაუყოვნებლივ ადამიანს გადაეცემა, გეგმური მოთხოვნა კი ადმინისტრატორს.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და მიღებაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'ცხოველის საჭიროება, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
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
          h: 'თვითონ არ ადასტურებს ვიზიტს',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'დიაგნოზს არ სვამს',
          p: 'ცხოველს ბოტი ვერ ხედავს, ამიტომ დიაგნოზს არ სვამს. სასწრაფო ნიშნებზე ურჩევს, დაუყოვნებლივ მობრძანდნენ, და საქმეს მაშინვე ადამიანს გადასცემს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი ვეტერინარიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და მფლობელს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა მფლობელი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და მიღებაზე იწვევს ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'დიაგნოზს დასვამს ჩატში?',
          a: 'არა. დიაგნოზს ბოტი არ სვამს, ცხოველს ექიმი ათვალიერებს და აფასებს. სასწრაფო ნიშნებზე ის ურჩევს დაუყოვნებლივ მობრძანებას და საქმეს ადამიანს გადასცემს.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი კლინიკის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ვეტერინარიისთვის: რატომ სწორედ ახლა',
            p: "ცხოველის მფლობელი ვეტერინარს ტელეფონიდან ირჩევს, ხშირად სამუშაო საათების შემდეგ ან ღამით, როცა შინაურ ცხოველს რაღაც აწუხებს. ის წერს Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდება. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ვეტერინარიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ვეტერინარული კლინიკა ბევრია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ვეტერინარიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას ცხოველის საჭიროების, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კლინიკის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები და სასწრაფო შემთხვევები',
            p: "ვეტერინარიაში დაუშვებელია, ბოტმა დიაგნოზი დასვას ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ კლინიკის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, სასწრაფო ნიშნების შემთხვევაში კი მფლობელს დაუყოვნებლივ მობრძანებას ურჩევს და საუბარს მაშინვე ადამიანს გადასცემს. საუბრის გადაცემის შემდეგ საბოლოო შეფასებას ვეტერინარი აკეთებს შეთანხმებული წესით.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ვეტერინარიისთვის?',
        aeoBody:
          'AI ასისტენტი ვეტერინარიისთვის არის ჩატბოტი, რომელიც ცხოველების მფლობელების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, მფლობელს მიღებაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კლინიკისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-booking-appointment-automation', label: 'AI ჯავშნისა და ჩაწერის ავტომატიზაცია' },
        { slug: 'night-sales-automation-ai-chatbots', label: 'ღამის გაყიდვების ავტომატიზაცია AI ჩატბოტებით' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for veterinary clinics: appointment booking 24/7',
      description:
        'AI assistant for veterinary clinics in Tbilisi. Answers pet owners at night, quotes the price range, books the appointment and hands it to your administrator.',
      eyebrow: 'AI assistant for veterinary clinics',
      h1: 'The cat fell ill overnight, the owner writes at 06:50.',
      h1Accent: 'The assistant has already answered.',
      lead: 'At night an owner writes about an animal that needs help. The AI assistant records the concern, owner name, phone and preferred time; urgent cases go to the vet, and routine bookings go to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Dato',
      chatRole: 'VETA Tbilisi, demo clinic assistant',
      chatGreeting: 'I am Dato, the assistant at VETA Tbilisi. If your pet is unwell or you need a visit, message me any hour of the day or night.',
      chatPlaceholder: 'Ask about a visit, a vaccination or an emergency...',
      chatChips: ['My cat got sick overnight, what should I do?', 'Can you see me urgently today?', 'How much is a dog vaccination?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a veterinary clinic loses clients',
      pains: [
        { h: 'Owners look for a clinic in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your front desk is already closed.' },
        { h: 'They message two or three clinics at once', p: '"Is tomorrow free? How much is a vaccination?" Clarify the animal need, owner name, phone and preferred time, then hand the request to the vet or administrator.' },
        { h: 'Animal symptoms need a veterinary visit', p: 'Clarify the animal need and owner contact, then hand urgent cases to a human immediately and routine requests to the administrator.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to an appointment. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'The animal need, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the vet will clarify.' },
        { h: 'It does not confirm visits by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It does not make a diagnosis', p: 'The bot cannot see the animal, so it makes no diagnosis. On emergency signs it advises coming in immediately and passes the case to a person at once.' },
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
        { q: 'How fast can the assistant go live for a veterinary clinic?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when an owner asks the price?', a: 'The bot quotes the range you set and invites the owner to an appointment for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Will it diagnose in the chat?', a: 'No. The bot makes no diagnosis; the vet examines and assesses the animal. On emergency signs it advises coming in immediately and passes the case to a human.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your clinic, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for veterinary clinics: why right now',
            p: "A pet owner picks a vet from the phone, often after working hours or at night, when something is wrong with the animal. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for veterinary clinics can answer at night using only the information you approve and hand complex requests to the team. Tbilisi has many veterinary clinics, and the decision is made fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and a veterinary assistant is the booking logic. The assistant gathers the animal need, the preferred time, the name and the phone, creates a provisional booking and hands it to the administrator in the morning for confirmation. That keeps the clinic schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers and emergencies',
            p: "In veterinary work a bot must never diagnose or invent a price. A properly set up assistant uses only the information the clinic provides, answers price questions with ranges, and on emergency signs advises coming in immediately and hands the conversation to a human at once. The handoff keeps the final assessment with the veterinarian under agreed rules.",
          },
        ],
        aeoH: 'What does an AI assistant for veterinary clinics do?',
        aeoBody:
          'An AI assistant for veterinary clinics is a chatbot that answers messages from pet owners on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It names the service price ranges, invites the owner to an appointment, records the name, the number and the preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not diagnose, it uses only approved information; unlisted details are confirmed by the team. For the clinic the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-booking-appointment-automation', label: 'AI booking and appointment automation' },
        { slug: 'night-sales-automation-ai-chatbots', label: 'Night sales automation with AI chatbots' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для ветеринарии: запись на приём 24/7',
      description:
        'AI-ассистент для ветеринарных клиник в Тбилиси. Отвечает владельцам животных ночью, называет вилку цен, записывает на приём и передаёт администратору.',
      eyebrow: 'AI-ассистент для ветеринарии',
      h1: 'Кошке ночью стало плохо, владелец пишет в 06:50.',
      h1Accent: 'Ассистент уже ответил.',
      lead: 'Ночью владелец пишет о том, что животному нужна помощь. AI-ассистент записывает проблему, имя владельца, номер и удобное время; срочные случаи передаёт врачу, а плановую запись — администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Дато',
      chatRole: 'Вета Тбилиси, ассистент демо-клиники',
      chatGreeting: 'Я Дато, ассистент клиники Вета Тбилиси. Если питомцу плохо или нужна запись, напишите мне в любой час.',
      chatPlaceholder: 'Спросите о приёме, вакцинации или срочном случае...',
      chatChips: ['Кошке ночью стало плохо, что делать?', 'Примете сегодня срочно?', 'Сколько стоит вакцинация собаки?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где ветеринарная клиника теряет клиентов',
      pains: [
        { h: 'Владелец ищет клинику вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваша регистратура уже закрыта.' },
        { h: 'Пишет в две-три клиники одновременно', p: '«Есть время завтра? Сколько вакцинация?» Уточните, что беспокоит животное, имя владельца, номер и удобное время, затем передайте запрос врачу или администратору.' },
        { h: 'Симптомы животного должны вести к визиту к ветеринару', p: 'Уточните, что беспокоит животное, и контакты владельца; срочный случай сразу передайте человеку, плановый запрос — администратору.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на приём. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Что нужно животному, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает визит сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Не ставит диагноз', p: 'Бот не видит животное, поэтому диагноз не ставит. При тревожных признаках советует приехать немедленно и сразу передаёт случай человеку.' },
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
        { q: 'Как быстро ассистент запускается для ветеринарии?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда владелец спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на приём за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он поставит диагноз в чате?', a: 'Нет. Диагноз бот не ставит, животное осматривает и оценивает врач. При тревожных признаках он советует приехать немедленно и передаёт случай человеку.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей клинике, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для ветеринарии: почему именно сейчас',
            p: "Владелец выбирает ветеринара с телефона, часто после рабочих часов или ночью, когда с животным что-то не так. Он пишет в Instagram и Messenger и ждёт ответа за минуты. После согласованного включения AI-чатбот для ветеринарии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси ветеринарных клиник много, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ветеринарного ассистента это логика записи. Ассистент собирает потребность животного, желаемое время, имя и телефон, создаёт предварительную запись и утром передаёт её администратору для подтверждения. Так график клиники остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы и срочные случаи',
            p: "В ветеринарии недопустимо, чтобы бот ставил диагноз или выдумывал цену. Правильно настроенный ассистент использует только информацию, переданную клиникой, отвечает на вопрос о цене вилками, а при тревожных признаках советует приехать немедленно и сразу передаёт разговор человеку. После передачи вопрос рассматривает ветеринар по согласованным правилам.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для ветеринарии?',
        aeoBody:
          "AI-ассистент для ветеринарии это чатбот, который отвечает на сообщения владельцев животных в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги, приглашает владельца на приём, записывает имя, номер и желаемое время, создаёт предварительную запись и утром передаёт её администратору. Он не ставит диагноз, работает только по утверждённой информации; неизвестные детали уточняет команда. Для клиники вечерние и выходные обращения можно передавать команде по согласованным правилам; итог подтверждает администратор.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-booking-appointment-automation', label: 'AI-автоматизация записи и бронирования' },
        { slug: 'night-sales-automation-ai-chatbots', label: 'Автоматизация ночных продаж с AI-чатботами' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
