import type { NicheEntry } from '../types';

/**
 * Dental clinics (სტომატოლოგია). Pilot niche #1. The demo persona is the same
 * real dental assistant the generic clinic landing already uses (DENTA Tbilisi),
 * so this pilot is high-fidelity; the landing copy is tuned to the dental
 * keyword rather than the generic "clinics" term.
 */
export const dental: NicheEntry = {
  key: 'dental',
  slug: 'ai-chatbot-stomatologiistvis',
  serviceType: 'AI Chatbot for Dental Clinics',
  persona: {
    botName: 'ნინო',
    brand: 'დენტა თბილისი',
    bizType: 'სტომატოლოგიური კლინიკა',
    hours: 'ორშაბათი-შაბათი 10:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: კონსულტაცია და დათვალიერება 30-50 ლარი; პროფესიული წმენდა 80-150; პლომბა 60-180; გათეთრება 300-500; ამოღება 50-200; იმპლანტი 1500-2500; ბრეკეტები 2500-დან. ბავშვთა სტომატოლოგი გვყავს. გადახდა: ნაღდი, ბარათი, იმპლანტსა და ბრეკეტებზე განვადება.',
    booking:
      'როცა პაციენტს ჩაწერა უნდა, ჯერ ჰკითხე რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ვიზიტს საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'დიაგნოზს არასოდეს სვამ.',
      'ტკივილზე ან სასწრაფოზე: სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრატორი პირველ რიგში დაგირეკავს.',
    ],
    customerNoun: 'პაციენტი',
    followupDomains:
      'გაუტკივარება და ანესთეზია, ერთ ვიზიტში პლომბა, განვადება იმპლანტსა და ბრეკეტებზე, ბავშვის მიღება, გადაუდებელი ტკივილი, ვიზიტის ხანგრძლივობა',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი სტომატოლოგიისთვის: პაციენტების ჩაწერა 24/7',
      description:
        'AI ასისტენტი სტომატოლოგიური კლინიკებისთვის თბილისში. პასუხობს პაციენტებს ღამითაც, ასახელებს ფასთა შუალედს, იწერს ვიზიტს და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი სტომატოლოგიისთვის',
      h1: 'პაციენტი წერს 23:40-ზე.',
      h1Accent: 'ნინომ უკვე უპასუხა.',
      lead: 'საღამოს ან შაბათ-კვირას პაციენტი წმენდის, ტკივილის ან იმპლანტის შესახებ წერს. AI ასისტენტი პასუხობს დამტკიცებული ინფორმაციით, აზუსტებს საჭირო სერვისს, იწერს სახელს, ნომერსა და სასურველ დროს და კონსულტაციის მოთხოვნას ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ნინო',
      chatRole: 'დენტა თბილისი, დემო კლინიკის ასისტენტი',
      chatGreeting:
        'დენტა თბილისი გისმენთ, ნინო ვარ. კბილის ტკივილი, ფასი თუ ვიზიტის დრო, დამიწერეთ ახლა და მაშინვე გიპასუხებთ, გვიან ღამესაც.',
      chatPlaceholder: 'ჰკითხეთ კბილის ტკივილზე, ფასზე ან ვიზიტის დროზე...',
      chatChips: ['კბილი მტკივა, დღეს მიმიღებთ?', 'გათეთრება ერთ ვიზიტში კეთდება?', 'რა ღირს იმპლანტი?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სტომატოლოგია პაციენტებს',
      pains: [
        {
          h: 'პაციენტი საღამოს ირჩევს კლინიკას',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი რეგისტრატურა უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ კლინიკას ერთდროულად',
          p: '«ხვალ თავისუფალი დრო გაქვთ? წმენდა რა ღირს?» დააზუსტეთ პრობლემა და სასურველი დრო, შემდეგ შესთავაზეთ სტომატოლოგის კონსულტაცია.',
        },
        {
          h: 'იმპლანტის კითხვას კონსულტაცია და გეგმა უნდა მოჰყვეს',
          p: 'ფასის ერთ რიცხვამდე დაყვანის ნაცვლად, დააზუსტეთ პაციენტის საჭიროება და შესთავაზეთ სტომატოლოგის კონსულტაციის დრო, სადაც შემდეგი ეტაპები განისაზღვრება.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და კონსულტაციაზე იწვევს კლინიკის მოქმედი წესით. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
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
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'ტკივილი, გართულება, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს, ექიმობას არ იჩემებს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი სტომატოლოგიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და პაციენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა პაციენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და კონსულტაციაზე იწვევს კლინიკის მოქმედი წესით ზუსტი შეფასებისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
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
            h: 'AI ჩატბოტი სტომატოლოგიისთვის: რატომ სწორედ ახლა',
            p: "პაციენტების უმეტესობა სტომატოლოგს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი სტომატოლოგიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სტომატოლოგიური ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სტომატოლოგიის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სერვისის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე კლინიკის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები სამედიცინო თემებზე',
            p: "სტომატოლოგიაში დაუშვებელია, ბოტმა დიაგნოზი დასვას ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ კლინიკის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, ტკივილის ან გართულების შემთხვევაში კი საუბარს მაშინვე ადამიანს გადასცემს. საუბრის გადაცემის შემდეგ საბოლოო შეფასებას სტომატოლოგი აკეთებს შეთანხმებული წესით.",
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი სტომატოლოგიისთვის?',
        aeoBody:
          'AI ასისტენტი სტომატოლოგიისთვის არის ჩატბოტი, რომელიც პაციენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს სერვისების ფასთა შუალედებს, პაციენტს კონსულტაციაზე იწვევს კლინიკის მოქმედი წესით, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ სვამს დიაგნოზს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კლინიკისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-dental-clinics-georgia', label: 'AI სტომატოლოგიური კლინიკებისთვის' },
        { slug: 'voice-agent-clinic-reception', label: 'ხმოვანი აგენტი კლინიკის რეგისტრატურისთვის' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს პაციენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for dental clinics: patient booking 24/7',
      description:
        'AI assistant for dental clinics in Tbilisi. Answers patients at night, quotes the price range, books the visit and hands it to your administrator.',
      eyebrow: 'AI assistant for dental clinics',
      h1: 'A patient writes at 23:40.',
      h1Accent: 'Nino already answered.',
      lead: 'In the evening or at the weekend, a patient asks about cleaning, pain or an implant. The AI assistant replies from approved information, clarifies the service needed, records the name, phone and preferred time, and hands the consultation request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Nino',
      chatRole: 'DENTA Tbilisi, demo clinic assistant',
      chatGreeting: 'DENTA Tbilisi here, I am Nino. A toothache, a price or a visit time, message me now and I reply at once, late at night too.',
      chatPlaceholder: 'Ask about a toothache, a price or a visit time...',
      chatChips: ['My tooth hurts, can you see me today?', 'Is whitening done in one visit?', 'How much is an implant?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a dental clinic loses patients',
      pains: [
        { h: 'Patients choose a clinic in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your front desk is already closed.' },
        { h: 'They message two or three clinics at once', p: '"Is tomorrow free? How much is a cleaning?" Clarify the concern and preferred time, then offer a dentist consultation.' },
        { h: 'An implant question needs a consultation and plan', p: 'Instead of reducing the answer to one price, clarify the concern raised by the patient and offer a dentist consultation where the next steps can be set.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to a a consultation under the clinic terms. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Service, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the patient is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the doctor will clarify.' },
        { h: 'It does not confirm visits by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands hard cases to a human', p: 'Pain, complications, unusual requests: the bot takes a phone number and passes the case to a person. It does not play doctor.' },
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
        { q: 'How fast can the assistant go live for a dental clinic?', a: 'Timing depends on the agreed scope: we need your service list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a patient asks the price?', a: 'The bot quotes the range you set and invites the patient to a a consultation under the clinic terms for the exact estimate. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your clinic, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for dental clinics: why right now',
            p: "Most patients pick a dentist from the phone, after working hours. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for dental clinics can answer at night using only the information you approve and hand complex requests to the team. The Tbilisi dental market is crowded and the decision is made fast.",
          },
          {
            h: 'Booking, not just a chat',
            p: "The real difference between a simple chatbot and a dental assistant is the booking logic. The assistant gathers the service, the preferred time, the name and the phone, creates a provisional slot and hands it to the administrator in the morning for confirmation. The clinic schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on medical topics',
            p: "In dentistry a bot must never diagnose or invent a price. A properly built assistant uses only the information the clinic provided, answers on price with ranges, and the moment there is pain or a complication it passes the conversation to a person. The handoff keeps the final assessment with the dentist under agreed rules.",
          },
        ],
        aeoH: 'What does an AI assistant for dental clinics do?',
        aeoBody:
          'An AI assistant for dental clinics is a chatbot that answers patient messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It names the price ranges for services, invites the patient to a a consultation under the clinic terms, records the name, number and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not diagnose, it uses only approved information; unlisted details are confirmed by the team. For the clinic the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-dental-clinics-georgia', label: 'AI for dental clinics in Georgia' },
        { slug: 'voice-agent-clinic-reception', label: 'Voice agent for clinic reception' },
      ],
      ctaLead: 'See it answer your own patients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для стоматологии: запись пациентов 24/7',
      description:
        'AI-ассистент для стоматологических клиник в Тбилиси. Отвечает пациентам ночью, называет вилку цен, записывает визит и передаёт администратору.',
      eyebrow: 'AI-ассистент для стоматологии',
      h1: 'Пациент пишет в 23:40.',
      h1Accent: 'Нино уже ответила.',
      lead: 'Вечером или в выходные пациент пишет о чистке, боли или импланте. AI-ассистент отвечает по утверждённой информации, уточняет нужную услугу, собирает имя, номер и удобное время, затем передаёт запрос на консультацию администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Нино',
      chatRole: 'Дента Тбилиси, ассистент демо-клиники',
      chatGreeting: 'Дента Тбилиси на связи, я Нино. Зубная боль, цена или время визита, напишите сейчас и отвечу сразу, даже поздно ночью.',
      chatPlaceholder: 'Спросите о зубной боли, цене или времени визита...',
      chatChips: ['Болит зуб, примете сегодня?', 'Отбеливание делается за один визит?', 'Сколько стоит имплант?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где стоматология теряет пациентов',
      pains: [
        { h: 'Пациент выбирает клинику вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваша регистратура уже закрыта.' },
        { h: 'Пишет в две-три клиники одновременно', p: '«Есть время завтра? Сколько чистка?» Уточните проблему и удобное время, затем предложите консультацию стоматолога.' },
        { h: 'Вопрос об импланте должен вести к консультации', p: 'Не сводите ответ к одной цене: уточните вопрос пациента и предложите время консультации стоматолога, где определят следующие шаги.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на консультацию по правилам клиники. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Услуга, желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, пациент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает визит сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Сложное передаёт человеку', p: 'Боль, осложнение, нестандартная просьба: бот берёт номер и передаёт случай человеку. В доктора не играет.' },
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
        { q: 'Как быстро ассистент запускается для стоматологии?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда пациент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на консультацию по правилам клиники за точной оценкой. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей клинике, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для стоматологии: почему именно сейчас',
            p: "Большинство пациентов выбирают стоматолога с телефона, после рабочего дня. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для стоматологии отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок стоматологии в Тбилиси перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента стоматологии в логике записи. Ассистент собирает услугу, желаемое время, имя и телефон, создаёт предварительную бронь и утром передаёт администратору на подтверждение. График клиники остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на медицинские темы',
            p: "В стоматологии недопустимо, чтобы бот ставил диагноз или выдумывал цену. Правильно собранный ассистент использует только переданную клиникой информацию, отвечает по ценам вилками, а при боли или осложнении сразу передаёт разговор человеку. После передачи вопрос рассматривает стоматолог по согласованным правилам.",
          },
        ],
        aeoH: 'Что делает AI-ассистент для стоматологии?',
        aeoBody:
          'AI-ассистент для стоматологии это чатбот, который отвечает на сообщения пациентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет вилки цен на услуги, приглашает пациента на консультацию по правилам клиники, записывает имя, номер и желаемое время, создаёт предварительную бронь и утром передаёт администратору. Он не ставит диагноз, работает только по утверждённой информации; неизвестные детали уточняет команда. Для клиники результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-dental-clinics-georgia', label: 'AI для стоматологических клиник Грузии' },
        { slug: 'voice-agent-clinic-reception', label: 'Голосовой агент для регистратуры клиники' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим пациентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
