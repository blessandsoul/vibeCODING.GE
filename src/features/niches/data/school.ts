import type { NicheEntry } from '../types';

/**
 * Private kindergartens and schools (კერძო ბაღები და სკოლები). Enrollment and
 * open-day booking niche. The demo persona is a generic private school (Nateli
 * School), so the landing copy is tuned to the enrollment keyword rather than
 * the generic "clinics" term. No real client is implied in this niche; the
 * proof stat is attributed to one generic aiNOW client.
 */
export const school: NicheEntry = {
  key: 'school',
  slug: 'ai-chatbot-kerdzo-skolebistvis',
  serviceType: 'AI Chatbot for Private Kindergartens and Schools',
  persona: {
    botName: 'ხატია',
    brand: 'ნათელი სკოლა',
    bizType: 'კერძო სკოლა და საბავშვო ბაღი',
    hours: 'ორშაბათი-პარასკევი 09:00-18:00, შაბათ-კვირას დასვენება',
    address: 'თბილისი. მწვანე ეზო და დაცული ტერიტორია გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: საბავშვო ბაღი და დაწყებითი საფეხური. საბავშვო ბაღი: თვეში 500-900 ლარი; დაწყებითი კლასები: თვეში 700-1400 ლარი; ჩარიცხვის ერთჯერადი საფასური 200-500 ლარი. ღია კარის დღე და ტური უფასოა. კვება და სახელმძღვანელოები ცალკე ითვლება. გადახდა: ნაღდი, ბარათი, სემესტრულ გადასახადზე განვადება.',
    booking:
      'როცა მშობელს ღია კარის დღეზე ან ჩარიცხვის კონსულტაციაზე მოსვლა უნდა, ჯერ ჰკითხე რომელი საფეხური აინტერესებს (ბაღი თუ დაწყებითი) და რომელი დღე და დრო აწყობს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ ტურზე [დღე, დრო]-ზე. დილით ადმინისტრაცია დაგირეკავთ დასადასტურებლად." თავისუფალ ადგილსა და ჩარიცხვას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრაციის ზარია.',
    guardrails: [
      'ზუსტ სწავლის საფასურსა და თავისუფალ ადგილს არასოდეს ადასტურებ, ამას ადმინისტრაცია ამოწმებს.',
      'ბავშვის ინდივიდუალურ საკითხზე: სთხოვე ტელეფონი და უთხარი, რომ ადმინისტრაცია პირველ რიგში დაგირეკავს.',
    ],
    customerNoun: 'მშობელი',
    followupDomains:
      'სასწავლო პროგრამა, ენების სწავლება, კვება და ტრანსპორტი, გახანგრძლივებული ჯგუფი, ჩარიცხვის დოკუმენტები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი კერძო სკოლისთვის: ჩარიცხვა და ტური 24/7',
      description:
        'AI ასისტენტი კერძო სკოლებისა და საბავშვო ბაღებისთვის თბილისში. პასუხობს მშობლებს ღამითაც, იწერს ღია კარის დღეზე და გადასცემს ადმინისტრაციას.',
      eyebrow: 'AI ასისტენტი კერძო სკოლისთვის',
      h1: 'მშობელი კვირას 21:10-ზე წერს.',
      h1Accent: 'ასისტენტმა უკვე უპასუხა.',
      lead: 'კვირა საღამოა, ადმინისტრაცია დაკეტილია, მშობელი კი სექტემბრის მიღებასა და ღია კარის დღეზე პასუხს ახლა ეძებს. AI ასისტენტი პასუხობს ავტომატურად, უამბობს საფეხურებზე, იწერს სახელს, ნომერსა და ტურის დროს, დილით კი ადმინისტრაცია ურეკავს და ადასტურებს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ხატია',
      chatRole: 'ნათელი სკოლა, დემო სკოლის ასისტენტი',
      chatGreeting:
        'ნათელი სკოლა გისმენთ. მოგიყვებით საფეხურებზე, გავარკვევთ თქვენს შვილს რომელი ჯგუფი უხდება და ღია კარის დღეზეც ჩაგწერთ. კითხვა ნებისმიერ დროს დაწერეთ.',
      chatPlaceholder: 'ჰკითხეთ საფეხურზე, ჩარიცხვაზე ან ღია კარის დღეზე...',
      chatChips: ['სექტემბრის მიღება ჯერ ღიაა?', 'ინგლისური რომელი კლასიდან ისწავლება?', 'ღია კარის დღეზე ბავშვი თან წავიყვანო?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს კერძო სკოლა მოსწავლეებს',
      pains: [
        {
          h: 'მშობელი საღამოს ირჩევს სკოლას',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ადმინისტრაცია უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ სკოლას ერთდროულად',
          p: '«ადგილი გაქვთ დაწყებით კლასში? სწავლა რა ღირს?» დააზუსტეთ ბავშვის ასაკი ან კლასი და სასურველი დაწყება, შემდეგ შესთავაზეთ სკოლის ტური და მისაღები შეხვედრა.',
        },
        {
          h: 'ჩარიცხვის კითხვას ბავშვის დონე და ვიზიტი უნდა მოჰყვეს',
          p: 'მშობელს ჰკითხეთ ბავშვის ასაკი ან კლასი და სასურველი დაწყების დრო, შემდეგ კი სკოლის დათვალიერება და მისაღები შეხვედრის დრო შესთავაზეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'სწავლის საფასურის კითხვას სწორად უმკლავდება',
          p: 'ასახელებს თქვენს რეალურ საფასურის შუალედს საფეხურების მიხედვით და ღია კარის დღეზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს ჩაწერის დეტალებს',
          p: 'საფეხური (ბაღი თუ დაწყებითი), სასურველი დღე და დრო, მშობლის სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჩანაწერით ტურზე.',
        },
        {
          h: 'დილით ადმინისტრაცია ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრაცია რეკავს, ადასტურებს და მშობელი ტურის ან კონსულტაციის გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ადგილს',
          p: 'ჩანაწერი ყოველთვის წინასწარია, თავისუფალი ადგილისა და ჩარიცხვის საბოლოო დადასტურება ადმინისტრაციის ზარია. თქვენი ნაკადი თქვენს ხელში რჩება.',
        },
        {
          h: 'ბავშვის საკითხს ადამიანს გადასცემს',
          p: 'ინდივიდუალური საჭიროება, სპეციალური თხოვნა, დელიკატური კითხვა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ადამიანს გადასცემს, გადაწყვეტილებას თავად არ იღებს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი კერძო სკოლისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება საფეხურების სია, სწავლის საფასურის შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და მშობელს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა მშობელი სწავლის საფასურს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ საფასურის შუალედს საფეხურის მიხედვით და ღია კარის დღეზე ან ჩარიცხვის კონსულტაციაზე იწვევს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრაციას?',
          a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრაცია ფიზიკურად ვერ პასუხობს: საღამო, ღამე, შაბათ-კვირა, პიკური დატვირთვა ჩარიცხვის სეზონზე. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სკოლის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი კერძო სკოლისთვის: რატომ სწორედ ახლა',
            p: "მშობლების უმეტესობა სკოლას ან ბაღს ტელეფონიდან ეძებს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი კერძო სკოლისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. ჩარიცხვის სეზონზე თბილისში კონკურენცია მაღალია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩარიცხვა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სკოლის ასისტენტს შორის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას საფეხურის, სასურველი დროის, მშობლის სახელისა და ტელეფონის შესახებ, წინასწარ იწერს ღია კარის დღეზე ან კონსულტაციაზე და დილით ადმინისტრაციას გადასცემს დასადასტურებლად. ასე სკოლის ნაკადი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ბავშვის საკითხებზე',
            p: 'სკოლის თემაში დაუშვებელია, ბოტმა თავისუფალი ადგილი დაპირდეს ან ზუსტი სწავლის საფასური თავად დაადგინოს. სწორად აწყობილი ასისტენტი მხოლოდ სკოლის მიწოდებულ ინფორმაციას იყენებს, საფასურზე შუალედებით პასუხობს, ბავშვის ინდივიდუალურ ან დელიკატურ საკითხს კი მაშინვე ადამიანს გადასცემს. ეს მიდგომა მშობლისთვის სანდოა, სკოლისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი კერძო სკოლისთვის?',
        aeoBody:
          'AI ასისტენტი კერძო სკოლისთვის არის ჩატბოტი, რომელიც მშობლების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის უამბობს საფეხურებზე (ბაღი და დაწყებითი), ასახელებს სწავლის საფასურის შუალედებს, მშობელს ღია კარის დღეზე ან ჩარიცხვის კონსულტაციაზე იწვევს, იწერს სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჩანაწერს და დილით ადმინისტრაციას გადასცემს. ის არ ადასტურებს თავისუფალ ადგილს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სკოლისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI საგანმანათლებლო ცენტრებისთვის' },
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების ავტომატური მოგროვება: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს მშობლებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for private schools: enrollment 24/7',
      description:
        'AI assistant for private schools and kindergartens in Tbilisi. Answers parents at night, books the open day and hands it to your administration.',
      eyebrow: 'AI assistant for private schools',
      h1: 'A parent writes on Sunday at 21:10.',
      h1Accent: 'The assistant has already replied.',
      lead: 'It is Sunday evening, the administration is closed, and a parent wants an answer about September admission and the open day right now. The AI assistant replies automatically, explains the stages, collects the name, phone and tour time, and in the morning your administration calls and confirms.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Khatia',
      chatRole: 'Nateli School, demo school assistant',
      chatGreeting: 'This is Nateli School. I will walk you through the stages, help you find the right group for your child, and sign you up for an open day. Write any time, day or night.',
      chatPlaceholder: 'Ask about stages, enrollment or the open day...',
      chatChips: ['Is September admission still open?', 'From which grade is English taught?', 'Should I bring my child to the open day?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a private school loses students',
      pains: [
        { h: 'Parents choose a school in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your administration is already closed.' },
        { h: 'They message two or three schools at once', p: '"Do you have a spot in the primary class? How much is tuition?" Clarify the student age or class and preferred start date, then offer a school tour and admissions meeting.' },
        { h: 'A school-enrolment question needs class details and a visit', p: 'Ask which age group or class the student is in and the preferred start date, then offer a school tour and an admissions meeting.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the tuition question correctly', p: 'Quotes your real tuition range by stage and invites to an open day. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the booking', p: 'Stage (kindergarten or primary), preferred day and time, parent name, phone. With an optional provisional tour slot.' },
        { h: 'Your administration confirms in the morning', p: 'Every night inquiry lands in one list. Administration calls, confirms, and the parent is on your tour or consultation schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved tuition information', p: 'It answers only from the data you provided. On an unknown question it honestly says administration will clarify.' },
        { h: 'It does not confirm a spot by itself', p: 'A booking is always provisional; free seats and enrollment are confirmed by administration. Your intake stays in your hands.' },
        { h: 'It hands a child matter to a human', p: 'An individual need, a special request, a delicate question: the bot takes a phone number and passes the case to a person. It does not decide by itself.' },
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
        { q: 'How fast can the assistant go live for a private school?', a: 'Timing depends on the agreed scope: we need your list of stages, tuition ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a parent asks about tuition?', a: 'The bot quotes the range you set by stage and invites the parent to an open day or enrollment consultation. It uses only approved information; unlisted details are confirmed by your team.' },
        { q: 'Does it replace administration?', a: 'No. It catches the hours a human physically cannot cover: evenings, nights, weekends, peak load during enrollment season. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your school, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for a private school: why right now',
            p: "Most parents look for a school or kindergarten from their phone, after working hours. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for a private school can answer at night using only the information you approve and hand complex requests to the team. During enrollment season in Tbilisi the competition is high and the decision is made fast.",
          },
          {
            h: 'Enrollment, not just messaging',
            p: "The real difference between a simple chatbot and a school assistant is the booking logic. The assistant gathers the stage, the preferred time, the parent name and phone, pre-books the open day or a consultation, and hands it to administration in the morning for confirmation. That way the school intake stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers on child matters',
            p: 'In the school context the bot must never promise a free spot or set exact tuition on its own. A properly built assistant uses only the information the school provided, answers tuition in ranges, and passes any individual or delicate matter about a child straight to a human. This approach is trustworthy for the parent and reputationally calm for the school.',
          },
        ],
        aeoH: 'What does the AI assistant for a private school do?',
        aeoBody:
          'An AI assistant for a private school is a chatbot that answers parent messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It explains the stages (kindergarten and primary), quotes tuition ranges, invites the parent to an open day or an enrollment consultation, records the name, phone and preferred time, creates a provisional booking and hands it to administration in the morning. It does not confirm a free spot, uses only approved information; unlisted details are confirmed by the team. For the school the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI for education centers in Georgia' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Automated lead capture: the guide' },
      ],
      ctaLead: 'See it answer your own parents. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для частных школ: запись на зачисление 24/7',
      description:
        'AI-ассистент для частных школ и детских садов в Тбилиси. Отвечает родителям ночью, записывает на день открытых дверей и передаёт администрации.',
      eyebrow: 'AI-ассистент для частных школ',
      h1: 'Родитель пишет в воскресенье в 21:10.',
      h1Accent: 'Ассистент уже ответил.',
      lead: 'Воскресный вечер, администрация закрыта, а родитель прямо сейчас хочет ответ про приём на сентябрь и день открытых дверей. AI-ассистент отвечает автоматически, рассказывает о ступенях, собирает имя, номер и время тура, а утром администрация звонит и подтверждает.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Хатия',
      chatRole: 'Школа Натели, ассистент демо-школы',
      chatGreeting: 'Это школа Натели. Расскажу о ступенях, помогу подобрать группу для вашего ребёнка и запишу на день открытых дверей. Пишите в любое время, хоть поздно вечером.',
      chatPlaceholder: 'Спросите о ступенях, зачислении или дне открытых дверей...',
      chatChips: ['Приём на сентябрь ещё открыт?', 'С какого класса преподаётся английский?', 'Брать ребёнка на день открытых дверей?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где частная школа теряет учеников',
      pains: [
        { h: 'Родитель выбирает школу вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваша администрация уже закрыта.' },
        { h: 'Пишет в две-три школы одновременно', p: '«Есть место в начальном классе? Сколько стоит обучение?» Уточните возраст или класс ребёнка и желаемую дату начала, затем предложите экскурсию и встречу по поступлению.' },
        { h: 'Вопрос о поступлении требует уровня ребёнка и визита', p: 'Уточните возраст или класс ребёнка и желаемую дату начала, затем предложите экскурсию по школе и встречу по поступлению.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о стоимости', p: 'Называет вашу реальную вилку по ступеням и приглашает на день открытых дверей. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Ступень (сад или начальная школа), желаемый день и время, имя родителя, телефон. По желанию с предварительным слотом на тур.' },
        { h: 'Утром администрация подтверждает', p: 'Все ночные обращения в одном списке. Администрация звонит, подтверждает, родитель в графике тура или консультации.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает место сам', p: 'Запись всегда предварительная, свободные места и зачисление подтверждает администрация. Ваш набор остаётся в ваших руках.' },
        { h: 'Вопрос ребёнка передаёт человеку', p: 'Индивидуальная потребность, особая просьба, деликатный вопрос: бот берёт номер и передаёт случай человеку. Решения сам не принимает.' },
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
        { q: 'Как быстро ассистент запускается для частной школы?', a: 'Сроки зависят от согласованного объёма: нужны список ступеней, вилки оплаты и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда родитель спрашивает о стоимости?', a: 'Бот называет заданную вами вилку по ступеням и приглашает на день открытых дверей или консультацию по зачислению. Сумму, которую вы не утверждали, он называет только утверждённые диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администрацию?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: вечер, ночь, выходные, пиковую нагрузку в сезон зачисления. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей школе, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для частной школы: почему именно сейчас',
            p: "Большинство родителей ищут школу или сад с телефона, после рабочего дня. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для частной школы отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В сезон зачисления в Тбилиси конкуренция высокая, а решение принимается быстро.",
          },
          {
            h: 'Зачисление, а не просто переписка',
            p: "Главное отличие простого чатбота от школьного ассистента это логика записи. Ассистент собирает ступень, желаемое время, имя родителя и телефон, заранее записывает на день открытых дверей или консультацию и утром передаёт администрации на подтверждение. Так набор в школу остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы по вопросам ребёнка',
            p: 'В школьной теме недопустимо, чтобы бот обещал свободное место или сам устанавливал точную стоимость обучения. Правильно настроенный ассистент использует только информацию, которую передала школа, отвечает по стоимости вилками, а индивидуальный или деликатный вопрос о ребёнке сразу передаёт человеку. Такой подход надёжен для родителя и репутационно спокоен для школы.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для частной школы?',
        aeoBody:
          'AI-ассистент для частной школы это чатбот, который отвечает на сообщения родителей в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он рассказывает о ступенях (сад и начальная школа), называет вилки стоимости обучения, приглашает родителя на день открытых дверей или консультацию по зачислению, записывает имя, номер и желаемое время, создаёт предварительную запись и утром передаёт администрации. Он не подтверждает свободное место, работает только по утверждённой информации; неизвестные детали уточняет команда. Для школы результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI для образовательных центров Грузии' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Автоматический сбор лидов: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим родителям. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
