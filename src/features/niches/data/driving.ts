import type { NicheEntry } from '../types';

/**
 * Driving schools (ავტოსკოლა). The demo persona is a generic Tbilisi driving
 * school (AvtoStart Tbilisi); the landing copy is tuned to the driving-school
 * keyword rather than the generic "clinics" term. Enrollment flow: the bot
 * collects the category, preferred start, name and phone, then hands to a
 * human; the admin confirms the group start date and instructor schedule, and
 * the bot points to the official source on exam rules.
 */
export const driving: NicheEntry = {
  key: 'driving',
  slug: 'ai-chatbot-avtoskolebistvis',
  serviceType: 'AI Chatbot for Driving Schools',
  persona: {
    botName: 'ლაშა',
    brand: 'ავტოსტარტი თბილისი',
    bizType: 'ავტოსკოლა',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. სავარჯიშო მოედანი გვაქვს.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: B კატეგორიის სრული კურსი (თეორია და პრაქტიკა) 400-700 ლარი; დამატებითი პრაქტიკული საათი 25-40; გამოცდისთვის მომზადება. ჩარიცხვა ეტაპობრივი გადახდით. გადახდა: ნაღდი, ბარათი.',
    booking:
      'როცა მსურველს კურსზე ჩაწერა უნდა, ჯერ ჰკითხე რომელი კატეგორია აინტერესებს და როდის სურს დაწყება, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ. დილით ადმინისტრატორი დაგირეკავთ ჯგუფის დაწყების თარიღისა და გრაფიკის დასაზუსტებლად." ჯგუფის დაწყებას საბოლოოდ შენ არ ადასტურებ, ეს ადმინისტრატორის ზარია.',
    guardrails: [
      'ჯგუფის დაწყების თარიღსა და ინსტრუქტორის გრაფიკს ადმინისტრატორი ადასტურებს, არა შენ.',
      'გამოცდის წესებზე კითხვისას მიუთითე ოფიციალურ წყაროზე და საქმე ადამიანს გადაეცი, წესებს არ იგონებ.',
    ],
    customerNoun: 'მსურველი',
    followupDomains:
      'ჯგუფის დაწყების თარიღი, გაკვეთილების გრაფიკი, თეორიისა და პრაქტიკის საათები, ეტაპობრივი გადახდა, ინსტრუქტორის შერჩევა, გამოცდისთვის მომზადება',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ავტოსკოლისთვის: მსურველების ჩაწერა 24/7',
      description:
        'AI ასისტენტი ავტოსკოლებისთვის თბილისში. პასუხობს მსურველებს ღამითაც, ასახელებს კურსის ფასთა შუალედს, იწერს ჩარიცხვაზე და გადასცემს ადმინისტრატორს.',
      eyebrow: 'AI ასისტენტი ავტოსკოლისთვის',
      h1: 'მსურველი წერს 20:40-ზე.',
      h1Accent: 'თარიღი ასისტენტმა უკვე უთხრა.',
      lead: 'შემდეგი ჯგუფის დაწყების თარიღი ხშირად საღამოს აინტერესებთ, როცა ოფისი უკვე დაკეტილია. AI ასისტენტი პასუხობს ავტომატურად, ასახელებს გრაფიკს, იწერს სახელს, ნომერსა და კატეგორიას, დილით კი ადმინისტრატორი ურეკავს და დაწყებას ადასტურებს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ლაშა',
      chatRole: 'ავტოსტარტი თბილისი, დემო ავტოსკოლის ასისტენტი',
      chatGreeting:
        'ლაშა ვარ, ავტოსტარტი თბილისის ასისტენტი. მოგიყვებით კურსზე, ჯგუფის გრაფიკზე და ჩაგწერთ ჩარიცხვაზე ნებისმიერ საათს.',
      chatPlaceholder: 'ჰკითხეთ ჯგუფის დაწყებაზე, კურსსა თუ პრაქტიკის საათებზე...',
      chatChips: ['შემდეგი ჯგუფი როდის იწყება?', 'კურსში პრაქტიკის რამდენი საათია?', 'რა ღირს B კატეგორიის კურსი?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ავტოსკოლა მსურველებს',
      pains: [
        {
          h: 'მსურველი საღამოს ირჩევს ავტოსკოლას',
          p: 'სამუშაო დღის ან სწავლის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს ორ-სამ ავტოსკოლას ერთდროულად',
          p: '«B კატეგორია რა ღირს? ახალი ჯგუფი როდის იწყება?» დააზუსტეთ კატეგორია და სასურველი დაწყების დრო, შემდეგ ჩარიცხვის მოთხოვნა ადმინისტრატორს გადასცით.',
        },
        {
          h: 'მართვის კურსის კითხვას ადმინისტრატორის დადასტურება უნდა მოჰყვეს',
          p: 'დააზუსტეთ კატეგორია და სასურველი დაწყების დრო, შემდეგ ჩარიცხვის მოთხოვნა ადმინისტრატორს გადასცით.',
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
          p: 'ასახელებს თქვენს რეალურ ფასთა შუალედს, ჰყვება თეორიასა და პრაქტიკაზე და ჩარიცხვაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჩარიცხვის დეტალებს',
          p: 'კატეგორია, სასურველი დაწყების დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჩაწერით.',
        },
        {
          h: 'დილით ადმინისტრატორი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ადმინისტრატორი რეკავს, ადასტურებს ჯგუფის დაწყებას და მსურველი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს ჯგუფის დაწყებას',
          p: 'ჩაწერა ყოველთვის წინასწარია, საბოლოო დადასტურება ადმინისტრატორის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'გამოცდის წესებს თვითონ არ ადგენს',
          p: 'გამოცდის წესებზე მიუთითებს დადასტურებულ ინფორმაციასა და ოფიციალურ წყაროზე; უცნობ დეტალს ადმინისტრატორი აზუსტებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი ავტოსკოლისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ავტოსკოლისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება კურსების სია, ფასთა შუალედები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და მსურველს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა მსურველი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ კურსის ფასთა შუალედს და ჩარიცხვაზე იწვევს. ჯგუფის ზუსტ დაწყების თარიღს ადმინისტრატორი ადასტურებს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ადმინისტრატორს?',
a: 'არა. ის ფარავს იმ საათებს, როცა ადმინისტრატორი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი ავტოსკოლის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ავტოსკოლისთვის: რატომ სწორედ ახლა',
            p: "მართვის კურსის მსურველების უმეტესობა ავტოსკოლას ტელეფონიდან ირჩევს, სამუშაო ან სასწავლო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ავტოსკოლისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ავტოსკოლების ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'ჩარიცხვა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ავტოსკოლის ასისტენტს შორის ჩარიცხვის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას სასურველი კატეგორიის, დაწყების დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჩანაწერს და დილით ადმინისტრატორს გადასცემს დასადასტურებლად. ასე ავტოსკოლის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები გამოცდისა და წესების შესახებ',
            p: 'ავტოსკოლისთვის მნიშვნელოვანია, ბოტმა გამოცდის წესები არ გამოიგონოს ან ფასი არ მოიჭრას. სწორად აწყობილი ასისტენტი მხოლოდ ავტოსკოლის მიწოდებულ ინფორმაციას იყენებს, ფასებზე შუალედებით პასუხობს, გამოცდის წესებზე კი ოფიციალურ წყაროზე მიუთითებს და საუბარს ადამიანს გადასცემს. ეს მიდგომა მსურველისთვის სანდოა, ავტოსკოლისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ავტოსკოლისთვის?',
        aeoBody:
          'AI ასისტენტი ავტოსკოლისთვის არის ჩატბოტი, რომელიც მსურველების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს კურსების ფასთა შუალედებს, ჰყვება თეორიასა და პრაქტიკაზე, იწერს სახელს, ნომერსა და სასურველ დაწყების დროს, ქმნის წინასწარ ჩანაწერს და დილით ადმინისტრატორს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. ავტოსკოლისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI საგანმანათლებლო ცენტრებისთვის' },
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების ავტომატური აღრიცხვა: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს მსურველებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for driving schools: student enrollment 24/7',
      description:
        'AI assistant for driving schools in Tbilisi. Answers prospective students at night, signs them up and hands it to your administrator.',
      eyebrow: 'AI assistant for driving schools',
      h1: 'A student writes at 20:40.',
      h1Accent: 'The assistant already named the date.',
      lead: 'The next group start date is exactly what students ask in the evening, when the office is already closed. The AI assistant replies automatically, gives the schedule, records the name, phone and category, and in the morning your administrator calls and confirms the start.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Lasha',
      chatRole: 'AvtoStart Tbilisi, demo driving school assistant',
      chatGreeting: 'I am Lasha, the AvtoStart Tbilisi assistant. I can walk you through the course, the group schedule and sign you up at any hour.',
      chatPlaceholder: 'Ask about the group start, the course or practice hours...',
      chatChips: ['When does the next group start?', 'How many practice hours are in the course?', 'How much is the B category course?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a driving school loses students',
      pains: [
        { h: 'Students choose a school in the evening', p: 'After work or class, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message two or three schools at once', p: '"How much is the B category course? When does the next group start?" Clarify the licence category and preferred start date, then hand the enrolment request to your administrator.' },
        { h: 'A driving-course question needs administrator confirmation', p: 'Clarify the licence category and preferred start date, then hand the enrolment request to your administrator.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the course and price question correctly', p: 'Quotes your real price range, explains theory and practice, and invites the student to enroll. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Collects the enrollment', p: 'Category, preferred start time, name, phone. With an optional provisional sign-up.' },
        { h: 'Your administrator confirms in the morning', p: 'Every night inquiry lands in one list. The administrator calls, confirms the group start, and the student is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the data you provided. On an unknown question it honestly says the administrator will clarify.' },
        { h: 'It does not confirm the group start by itself', p: 'A sign-up is always provisional; the final word is your administrator. Your schedule stays in your hands.' },
        { h: 'Uses approved exam rules', p: 'On exam-rule questions it points to the official source and passes the case to a person. It does not answer from guesswork.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your driving school',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a driving school?', a: 'Timing depends on the agreed scope: we need your course list, price ranges and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a student asks the price?', a: 'The bot quotes the course range you set and invites the student to enroll. The exact group start date is confirmed by your administrator. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the administrator?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your driving school, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for driving schools: why right now',
            p: "Most driving-course applicants pick a school straight from the phone, after work or class. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for a driving school can answer at night using only the information you approve and hand complex requests to the team. The Tbilisi driving-school market is crowded and the decision is made fast.",
          },
          {
            h: 'Enrollment, not just a chat thread',
            p: "The real difference between a simple chatbot and a driving-school assistant is the enrollment logic. The assistant gathers the desired category, the preferred start time, the name and the phone number, creates a provisional record and passes it to the administrator in the morning for confirmation. That keeps the school schedule under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers about the exam and the rules',
            p: 'For a driving school it matters that the bot uses only approved information; unlisted details are confirmed by the team. A properly configured assistant uses only the information the school provided, answers price questions with ranges, and on exam rules points to the official source and hands the conversation to a person. That approach is trustworthy for the applicant and reputationally calm for the school.',
          },
        ],
        aeoH: 'What does an AI assistant for a driving school do?',
        aeoBody:
          'An AI assistant for a driving school is a chatbot that answers messages from applicants on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It quotes the course price ranges, explains theory and practice, records the name, phone and preferred start time, creates a provisional entry and hands it to the administrator in the morning. Uses approved price information, points to the official source on exam rules, and passes difficult cases to a person. For the driving school the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI for education centers in Georgia' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Lead capture automation: the guide' },
      ],
      ctaLead: 'See it answer your own students. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для автошколы: запись учеников 24/7',
      description:
        'AI-ассистент для автошкол в Тбилиси. Отвечает будущим ученикам ночью, называет вилку цен на курс, записывает и передаёт администратору. Демо проверяется по согласованной информации и правилам.',
      eyebrow: 'AI-ассистент для автошколы',
      h1: 'Ученик пишет в 20:40.',
      h1Accent: 'Дату ассистент уже назвал.',
      lead: 'Дату старта следующей группы чаще всего спрашивают вечером, когда офис уже закрыт. AI-ассистент отвечает автоматически, называет график, собирает имя, номер и категорию, а утром администратор звонит и подтверждает старт группы.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Лаша',
      chatRole: 'АвтоСтарт Тбилиси, ассистент демо-автошколы',
      chatGreeting: 'Я Лаша, ассистент автошколы АвтоСтарт Тбилиси. Расскажу про курс, график групп и запишу на обучение в любой час.',
      chatPlaceholder: 'Спросите о старте группы, курсе или часах практики...',
      chatChips: ['Когда стартует следующая группа?', 'Сколько часов практики в курсе?', 'Сколько стоит курс категории B?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где автошкола теряет учеников',
      pains: [
        { h: 'Ученик выбирает автошколу вечером', p: 'После работы или учёбы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в две-три автошколы одновременно', p: '«Сколько стоит курс категории B? Когда стартует новая группа?» Уточните категорию прав и желаемую дату начала, затем передайте запрос администратору для записи на курс.' },
        { h: 'Вопрос об автошколе требует подтверждения администратора', p: 'Уточните категорию прав и желаемую дату начала, затем передайте запрос администратору для записи на курс.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о курсе и цене', p: 'Называет вашу реальную вилку, рассказывает о теории и практике и приглашает записаться. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает запись', p: 'Категория, желаемое время старта, имя, телефон. По желанию с предварительной записью.' },
        { h: 'Утром администратор подтверждает', p: 'Все ночные обращения в одном списке. Администратор звонит, подтверждает старт группы, ученик в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает старт группы сам', p: 'Запись всегда предварительная, финальное слово за звонком администратора. Ваш график остаётся в ваших руках.' },
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей автошколы',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для автошколы?', a: 'Сроки зависят от согласованного объёма: нужны список курсов, вилки цен и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда ученик спрашивает цену?', a: 'Бот называет заданную вами вилку по курсу и приглашает записаться. Точную дату старта группы подтверждает администратор. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит администратора?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей автошколе, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для автошколы: почему именно сейчас',
            p: "Большинство желающих пройти курс вождения выбирают автошколу прямо с телефона, после работы или учёбы. Они пишут в Instagram и Messenger и ждут ответа за минуты. После согласованного включения AI-чатбот для автошколы отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок автошкол в Тбилиси перегружен, а решение принимается быстро.",
          },
          {
            h: 'Зачисление, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента автошколы это логика зачисления. Ассистент собирает информацию о нужной категории, времени старта, имени и телефоне, создаёт предварительную запись и утром передаёт администратору на подтверждение. Так график автошколы остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы об экзамене и правилах',
            p: 'Для автошколы важно, чтобы бот не выдумывал правила экзамена и не срезал цену. Правильно настроенный ассистент использует только предоставленную автошколой информацию, на цены отвечает вилками, а по правилам экзамена указывает на официальный источник и передаёт разговор человеку. Такой подход вызывает доверие у будущего ученика и репутационно спокоен для автошколы.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для автошколы?',
        aeoBody:
          'AI-ассистент для автошколы это чатбот, который отвечает на сообщения желающих в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он называет вилки цен на курсы, рассказывает о теории и практике, записывает имя, номер и желаемое время старта, создаёт предварительную запись и утром передаёт администратору. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для автошколы результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-education-centers-georgia', label: 'AI для образовательных центров Грузии' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Автоматизация сбора лидов: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим ученикам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
