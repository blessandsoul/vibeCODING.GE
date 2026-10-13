import type { NicheEntry } from '../types';

/**
 * Gyms and fitness studios (ფიტნეს-დარბაზი). The demo persona is a fictional
 * studio (Pulse Gym) because aiNOW has no live gym client yet, so the proof
 * the stat uses a generic owner-level proof slot; no fitness client is implied.
 * The landing copy is tuned to the gym and fitness keyword rather than the
 * generic "clinics" term.
 */
export const fitness: NicheEntry = {
  key: 'fitness',
  slug: 'ai-chatbot-fitnesistvis',
  serviceType: 'AI Chatbot for Gyms and Fitness Studios',
  persona: {
    botName: 'სანდრო',
    brand: 'პულს ჯიმი',
    bizType: 'ფიტნეს-დარბაზი',
    hours: 'ორშაბათი-პარასკევი 07:00-23:00, შაბათ-კვირა 09:00-21:00',
    address: 'თბილისი, საბურთალო. პარკინგი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: ერთთვიანი აბონემენტი 80-150 ლარი; სამთვიანი 200-400; ერთჯერადი ვიზიტი 15-25; პერსონალური ვარჯიში (სესია) 40-80; ჯგუფური კლასები აბონემენტში შედის. უფასო საცდელი ვარჯიში. გადახდა: ნაღდი, ბარათი, აბონემენტზე განვადება.',
    booking:
      'როცა მომხმარებელს უფასო საცდელ ვარჯიშზე ან აბონემენტის კონსულტაციაზე ჩაწერა უნდა, ჯერ ჰკითხე რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [დღე, დრო]-ზე. დილით ადმინისტრატორი დაგირეკავთ დასადასტურებლად." ჩაწერას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'ჯანმრთელობის ან სამედიცინო რჩევას არ იძლევი, ვარჯიშის პროგრამას ტრენერი ადგენს.',
      'ტრავმაზე ან ჯანმრთელობის პრობლემაზე ურჩევ ექიმთან კონსულტაციას.',
    ],
    customerNoun: 'მომხმარებელი',
    followupDomains:
      'აბონემენტის ვადა და გაყინვის პირობები, ჯგუფური კლასების განრიგი, პერსონალური ტრენერის შერჩევა, საცდელი ვარჯიშის ჩაწერა, გახსნის საათები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ფიტნესისთვის: ვარჯიშზე ჩაწერა 24/7',
      description:
        'AI ასისტენტი ფიტნეს-დარბაზებისთვის თბილისში. პასუხობს მომხმარებლებს ღამითაც, ხსნის აბონემენტის პირობებს, წერს უფასო საცდელ ვარჯიშზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ფიტნესისთვის',
      h1: 'მომხმარებელი წერს 23:10-ზე.',
      h1Accent: 'საცდელი ვარჯიში უკვე იწერება.',
      lead: 'ღამით კლიენტი საცდელ ვარჯიშსა და აბონემენტზე წერს. AI ასისტენტი პასუხობს შეთანხმებული წესებით, აზუსტებს მიზანს, ფორმატსა და გრაფიკს, იწერს სახელს, ნომერსა და სასურველ დროს, შემდეგ კი მოთხოვნას ადმინისტრატორს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'სანდრო',
      chatRole: 'პულს ჯიმი, დემო დარბაზის ასისტენტი',
      chatGreeting:
        'სანდრო ვარ, პულს ჯიმის ასისტენტი. აბონემენტზე, გრაფიკზე თუ საცდელ ვარჯიშზე ნებისმიერ დროს მომწერეთ, მაშინვე გიპასუხებთ.',
      chatPlaceholder: 'ჰკითხეთ აბონემენტზე, საცდელ ვარჯიშზე ან გრაფიკზე...',
      chatChips: ['ხვალ საცდელ ვარჯიშზე მოსვლა შემიძლია?', 'აბონემენტში ჯგუფური კლასები შედის?', 'რა ღირს სამთვიანი აბონემენტი?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ფიტნეს-დარბაზი კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ირჩევს დარბაზს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი მიმღები უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ დარბაზს ერთდროულად',
          p: '«ხვალ ჯგუფური კლასი გაქვთ? აბონემენტი რა ღირს?» ჰკითხეთ მიზანი და სასურველი გრაფიკი, შემდეგ აუხსენით შესაბამისი აბონემენტი და ჩარიცხვის ნაბიჯი.',
        },
        {
          h: 'საცდელ ვარჯიშს აბონემენტის არჩევა უნდა მოჰყვეს',
          p: 'საცდელი ვარჯიშის შემდეგ ჰკითხეთ მიზანი და სასურველი გრაფიკი, აუხსენით შესაბამისი აბონემენტის პირობები და ჩარიცხვის შემდეგი ნაბიჯი შესთავაზეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'აბონემენტზე კითხვას სწორად უმკლავდება',
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს და უფასო საცდელ ვარჯიშზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
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
          h: 'თვითონ არ ადასტურებს ჩაწერას',
          p: 'ჯავშანი ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ შემთხვევას ადამიანს გადასცემს',
          p: 'ჯანმრთელობის კითხვა, ტრავმა, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს, ტრენერობას არ იჩემებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი დარბაზისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ფიტნეს-დარბაზისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, აბონემენტის პირობები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ ფასთა შუალედს და უფასო საცდელ ვარჯიშზე იწვევს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი დარბაზის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ფიტნესისთვის: რატომ სწორედ ახლა',
            p: "ადამიანების უმეტესობა დარბაზს ტელეფონიდან ირჩევს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ფიტნესისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ფიტნეს-ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ფიტნესის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი დროის, სახელისა და ტელეფონის შესახებ, წერს უფასო საცდელ ვარჯიშზე და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე დარბაზის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ჯანმრთელობის თემებზე',
            p: 'ფიტნესში დაუშვებელია, ბოტმა ჯანმრთელობის რჩევა მისცეს ან ვარჯიშის პროგრამა თავად შეადგინოს. სწორად აწყობილი ასისტენტი მხოლოდ დარბაზის მიწოდებულ ინფორმაციას იყენებს, აბონემენტზე შუალედებით პასუხობს, ტრავმის ან ჯანმრთელობის პრობლემის შემთხვევაში კი საუბარს მაშინვე ადამიანს გადასცემს. ეს მიდგომა კლიენტისთვის უსაფრთხოა, დარბაზისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ფიტნესისთვის?',
        aeoBody:
          'AI ასისტენტი ფიტნესისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ხსნის აბონემენტის პირობებს, კლიენტს უფასო საცდელ ვარჯიშზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჯავშანს და დილით ადმინისტრატორს გადასცემს. ის არ იძლევა სამედიცინო რჩევას, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. დარბაზისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-fitness-gyms-georgia', label: 'AI ფიტნეს-დარბაზებისთვის' },
        { slug: 'ai-booking-appointment-automation', label: 'ჩაწერისა და ჯავშნის ავტომატიზაცია' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for gyms and fitness studios: bookings 24/7',
      description:
        'AI assistant for gyms and fitness studios in Tbilisi. Answers prospects at night, books a free trial and hands it to your administrator.',
      eyebrow: 'AI assistant for gyms',
      h1: 'A customer writes at 23:10.',
      h1Accent: 'The trial workout is already being booked.',
      lead: 'At night a client asks about a trial workout and membership. The AI assistant replies from agreed information, clarifies the goal, format and schedule, records the name, phone and preferred time, then hands the request to the administrator.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Sandro',
      chatRole: 'Pulse Gym, demo studio assistant',
      chatGreeting: 'I am Sandro, the Pulse Gym assistant. Message me about membership, the schedule or a trial workout any time, and I reply right away.',
      chatPlaceholder: 'Ask about membership, a trial workout or the schedule...',
      chatChips: ['Can I come for a trial workout tomorrow?', 'Are group classes included in the membership?', 'How much is a 3-month membership?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a gym loses members',
      pains: [
        { h: 'People choose a gym in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your front desk is already closed.' },
        { h: 'They message two or three gyms at once', p: '"Do you have a group class tomorrow? How much is a membership?" Ask about the goal and schedule, explain the relevant membership terms, then offer the enrolment step.' },
        { h: 'A trial workout should lead to a membership choice', p: 'After the trial, ask about the goal and schedule, explain the relevant membership terms, and offer the next step to enrol.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Quotes your real price range and invites to a free trial workout. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the booking', p: 'Preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms, and the member is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not confirm bookings by itself', p: 'A booking is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'It hands hard cases to a human', p: 'Health questions, injuries, unusual requests: the bot takes a phone number and passes the case to a person. It does not play trainer.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your gym',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a gym?', a: 'Timing depends on the agreed scope: we need your service list, membership options and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a prospect asks the price?', a: 'The bot quotes the range you set and invites the prospect to a free trial workout. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your gym, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for fitness: why right now',
            p: "Most people choose a gym from the phone, after working hours. They write into Instagram and Messenger and expect an answer in minutes. After the agreed activation, the AI chatbot for fitness can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the fitness market is crowded and the decision is made fast.",
          },
          {
            h: 'Booking, not just chatting',
            p: "The main difference between a simple chatbot and a fitness assistant is the booking logic. The assistant gathers the preferred time, name and phone, books a free trial workout and hands it to the administrator in the morning for confirmation. That way the gym schedule stays under human control, and the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on health topics',
            p: 'In fitness the bot must never give health advice or design a workout program itself. A properly built assistant uses only the information the gym provided, answers on membership with ranges, and on an injury or a health concern hands the conversation to a person at once. This approach is safe for the member and reputationally calm for the gym.',
          },
        ],
        aeoH: 'What does an AI assistant for fitness do?',
        aeoBody:
          'An AI assistant for fitness is a chatbot that answers member messages on Messenger, Instagram, WhatsApp and the site, at any hour of the day. It explains the membership options, invites the prospect to a free trial workout, records the name, phone and preferred time, creates a provisional booking and hands it to the administrator in the morning. It does not give medical advice, uses only approved information; unlisted details are confirmed by the team. For the gym the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-fitness-gyms-georgia', label: 'AI for gyms and fitness studios in Georgia' },
        { slug: 'ai-booking-appointment-automation', label: 'Booking and appointment automation' },
      ],
      ctaLead: 'See it answer your own prospects. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для фитнес-залов: запись 24/7',
      description:
        'AI-ассистент для фитнес-залов и студий в Тбилиси. Отвечает клиентам ночью, записывает на бесплатную пробную тренировку и передаёт администратору.',
      eyebrow: 'AI-ассистент для фитнеса',
      h1: 'Клиент пишет в 23:10.',
      h1Accent: 'Пробная тренировка уже записывается.',
      lead: 'Ночью клиент пишет о пробной тренировке и абонементе. AI-ассистент отвечает по согласованным правилам, уточняет цель, формат и график, собирает имя, номер и удобное время, затем передаёт запрос администратору.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Сандро',
      chatRole: 'Пульс Джим, ассистент демо-зала',
      chatGreeting: 'Я Сандро, ассистент зала Пульс Джим. Пишите про абонемент, график или пробную тренировку в любое время, отвечу сразу.',
      chatPlaceholder: 'Спросите про абонемент, пробную тренировку или график...',
      chatChips: ['Могу прийти завтра на пробную тренировку?', 'Групповые занятия входят в абонемент?', 'Сколько стоит трёхмесячный абонемент?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где фитнес-зал теряет клиентов',
      pains: [
        { h: 'Клиент выбирает зал вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш ресепшн уже закрыт.' },
        { h: 'Пишет в два-три зала одновременно', p: '«Есть завтра групповое занятие? Сколько стоит абонемент?» Уточните цель и график, объясните условия подходящего абонемента и предложите следующий шаг оформления.' },
        { h: 'Пробная тренировка должна вести к выбору абонемента', p: 'После пробного занятия уточните цель и график, объясните условия подходящего абонемента и предложите следующий шаг для оформления.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Называет вашу реальную вилку и приглашает на бесплатную пробную тренировку. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Желаемый день и время, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает запись сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Сложное передаёт человеку', p: 'Вопрос о здоровье, травма, нестандартная просьба: бот берёт номер и передаёт случай человеку. В тренера не играет.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего зала',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для фитнес-зала?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, варианты абонемента и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданную вами вилку и приглашает на бесплатную пробную тренировку. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем зале, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для фитнеса: почему именно сейчас',
            p: "Большинство людей выбирают зал с телефона, после рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для фитнеса отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси рынок фитнеса перегружен, и решение принимается быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от фитнес-ассистента это логика записи. Ассистент собирает желаемое время, имя и телефон, записывает на бесплатную пробную тренировку и утром передаёт администратору на подтверждение. Так график зала остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы на темы здоровья',
            p: 'В фитнесе недопустимо, чтобы бот давал советы о здоровье или сам составлял программу тренировок. Правильно настроенный ассистент использует только информацию, переданную залом, отвечает по абонементу вилками, а при травме или проблеме со здоровьем сразу передаёт разговор человеку. Такой подход безопасен для клиента и репутационно спокоен для зала.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для фитнеса?',
        aeoBody:
          'AI-ассистент для фитнеса это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он объясняет варианты абонемента, приглашает клиента на бесплатную пробную тренировку, записывает имя, номер и желаемое время, создаёт предварительную бронь и утром передаёт администратору. Он не даёт медицинских советов, работает только по утверждённой информации; неизвестные детали уточняет команда. Для зала результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-fitness-gyms-georgia', label: 'AI для фитнес-залов в Грузии' },
        { slug: 'ai-booking-appointment-automation', label: 'Автоматизация записи и бронирования' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
