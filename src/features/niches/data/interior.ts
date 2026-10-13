import type { NicheEntry } from '../types';

/**
 * Interior design studios (ინტერიერის დიზაინი). Consultation + quote niche:
 * the demo persona collects the object type, area and preferred time, then
 * hands the lead to a human designer. The bot never quotes an exact price,
 * it depends on area and package, so the landing leans on the "the designer
 * calculates after the area is clarified" trust story rather than a number.
 */
export const interior: NicheEntry = {
  key: 'interior',
  slug: 'ai-chatbot-interieris-dizainistvis',
  serviceType: 'AI Chatbot for Interior Design Studios',
  persona: {
    botName: 'გვანცა',
    brand: 'ფორმა თბილისი',
    bizType: 'ინტერიერის დიზაინის სტუდია',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი, ვაკე. პორტფოლიოს სტუდიაში გაჩვენებთ.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: კონსულტაცია და შეხვედრა 50-150 ლარი; სრული სადიზაინო პროექტი კვადრატულ მეტრზე 30-80 ლარი; 3D ვიზუალიზაცია პროექტის ნაწილია; ავტორის ზედამხედველობა ცალკე პაკეტით; საბოლოო ღირებულება ფართობსა და პაკეტზეა დამოკიდებული. გადახდა: ნაღდი, ბარათი, დიდ პროექტებზე ეტაპობრივი გადახდა.',
    booking:
      'როცა კლიენტს კონსულტაცია უნდა, ჯერ ჰკითხე რა ტიპის ობიექტია (ბინა, კერძო სახლი თუ კომერციული ფართი) და დაახლოებით რამდენი კვადრატული მეტრია, შემდეგ რომელი დღე და დრო აწყობს, ბოლოს სახელი და ტელეფონის ნომერი. როცა ეს ყველაფერი გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ კონსულტაციაზე [დღე, დრო]-ზე. დილით მენეჯერი დაგირეკავთ დასადასტურებლად." ზუსტ ფასს შენ არ ასახელებ, ის ფართობისა და პაკეტის დაზუსტების შემდეგ დგინდება. კონსულტაციას საბოლოოდ შენ არ ადასტურებ, ეს მენეჯერის ზარია.',
    guardrails: [
      'ზუსტ ფასს არასოდეს ასახელებ: ის ფართობისა და სამუშაოს მოცულობის დაზუსტების შემდეგ დგინდება.',
      'პორტფოლიოსა და დეტალურ კითხვებზე: სთხოვე ტელეფონი და უთხარი, რომ დიზაინერი პირველ რიგში დაგირეკავს.',
    ],
    customerNoun: 'მფლობელი',
    followupDomains:
      'პროექტის ვადა და ეტაპები, 3D ვიზუალიზაცია, სტილის მიმართულებები, ავტორის ზედამხედველობა, გადახდის ეტაპები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ინტერიერის დიზაინისთვის: კონსულტაციების ჩაწერა 24/7',
      description:
        'AI ასისტენტი ინტერიერის დიზაინის სტუდიებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ხსნის მუშაობის ეტაპებს, იწერს კონსულტაციაზე და გადასცემს დიზაინერს.',
      eyebrow: 'AI ასისტენტი ინტერიერის დიზაინისთვის',
      h1: 'მფლობელი 21:20-ზე ბინის გეგმას აგზავნის.',
      h1Accent: 'პასუხი უკვე გზაშია.',
      lead: 'ახალ ბინაში გადასვლის წინ მფლობელი საღამოს დიზაინს ეძებს და 3D პროექტზე კითხულობს. AI ასისტენტი პასუხობს ავტომატურად, აზუსტებს ობიექტს, ფართობსა და სტილს, იწერს სახელსა და ნომერს, შემდეგ კი დიზაინერს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'გვანცა',
      chatRole: 'ფორმა თბილისი, დემო სტუდიის ასისტენტი',
      chatGreeting:
        'გვანცა გახლავართ, ფორმა თბილისის ასისტენტი. ბინის თუ კომერციული ფართის დიზაინზე მკითხეთ, ეტაპებს აგიხსნით და კონსულტაციაზე ჩაგწერთ, გვიან საათებშიც.',
      chatPlaceholder: 'ჰკითხეთ დიზაინის ეტაპებზე, 3D-ზე ან ვადებზე...',
      chatChips: ['ახალი ბინის გეგმა მაქვს, 3D-ს აკეთებთ?', 'რა ღირს კვადრატულ მეტრზე პროექტი?', 'მთელი პროექტი რამდენ ხანში მზადდება?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სტუდია კლიენტებს',
      pains: [
        {
          h: 'კლიენტი დიზაინერს საღამოს ეძებს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი სტუდია უკვე დაკეტილია.',
        },
        {
          h: 'წერს რამდენიმე სტუდიას ერთდროულად',
          p: '«ბინის დიზაინი რა ღირს? როდის შემიძლია კონსულტაცია?» დააზუსტეთ ოთახი, ფართობი და სტილი, შემდეგ შესთავაზეთ დიზაინერთან საწყისი კონსულტაცია.',
        },
        {
          h: 'ინტერიერის იდეას მოკლე ბრიფი და კონსულტაცია უნდა მოჰყვეს',
          p: 'პროექტის დასაწყებად დააზუსტეთ ოთახი, ფართობი, სტილი და სასურველი ვადა, შემდეგ კი დიზაინერთან საწყისი კონსულტაციის დრო შესთავაზეთ.',
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
          p: 'ხსნის, რომ ღირებულება ფართობსა და პაკეტზეა დამოკიდებული, ასახელებს კვადრატული მეტრის შუალედს და კონსულტაციაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს კონსულტაციის დეტალებს',
          p: 'ობიექტის ტიპი და ფართობი, სასურველი დღე და დრო, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჩაწერით.',
        },
        {
          h: 'დილით დიზაინერი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. მენეჯერი რეკავს, ადასტურებს და კლიენტი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს კონსულტაციას',
          p: 'ჩაწერა ყოველთვის წინასწარია, საბოლოო დადასტურება მენეჯერის ზარია. თქვენი გრაფიკი თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ კითხვას ადამიანს გადასცემს',
          p: 'პორტფოლიო, კონკრეტული სტილი, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს დიზაინერს გადასცემს, თავს დიზაინერად არ ასაღებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სტუდიისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ინტერიერის დიზაინის სტუდიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, მუშაობის ეტაპები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ხსნის, რომ ღირებულება ფართობსა და პაკეტზეა დამოკიდებული, ასახელებს კვადრატული მეტრის შუალედს და კონსულტაციაზე იწვევს ზუსტი გათვლისთვის. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს მენეჯერს?',
a: 'არა. ის ფარავს იმ საათებს, როცა მენეჯერი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სტუდიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ინტერიერის დიზაინისთვის: რატომ სწორედ ახლა',
            p: "კლიენტების უმეტესობა დიზაინერს ტელეფონიდან ეძებს, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში, სადაც პორტფოლიოსაც უყურებენ, და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ინტერიერის დიზაინისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ახალი ბინების ბაზარი დიდია და დიზაინერის არჩევა სწრაფად ხდება.",
          },
          {
            h: 'ჩაწერა და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და დიზაინის სტუდიის ასისტენტს შორის კონსულტაციის ჩაწერის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას ობიექტის ტიპის, ფართობის, სასურველი დროის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჩაწერას და დილით დიზაინერს გადასცემს დასადასტურებლად. ასე სტუდიის გრაფიკი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'ზუსტი ფასი მხოლოდ ფართობის დაზუსტების შემდეგ',
            p: 'ინტერიერის დიზაინში ღირებულება ფართობსა და სამუშაოს მოცულობაზეა დამოკიდებული, ამიტომ დაუშვებელია, ბოტმა ზუსტი თანხა გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ სტუდიის მიწოდებულ ინფორმაციას იყენებს, კვადრატული მეტრის შუალედით პასუხობს და კონსულტაციაზე იწვევს, სადაც დიზაინერი ზუსტ პროექტს დათვლის. ეს მიდგომა კლიენტისთვის გამჭვირვალეა, სტუდიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ინტერიერის დიზაინისთვის?',
        aeoBody:
          'AI ასისტენტი ინტერიერის დიზაინისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ხსნის მუშაობის ეტაპებს, ასახელებს კვადრატული მეტრის ფასთა შუალედს, კლიენტს კონსულტაციაზე იწვევს, იწერს ობიექტის ტიპს, ფართობს, სახელს, ნომერსა და სასურველ დროს, ქმნის წინასწარ ჩაწერას და დილით დიზაინერს გადასცემს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სტუდიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-construction-companies-georgia', label: 'AI სამშენებლო კომპანიებისთვის' },
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების ავტომატური შეგროვება: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for interior design studios: consultation booking 24/7',
      description:
        'AI assistant for interior design studios in Tbilisi. Answers clients at night, books the consultation and hands it to your designer.',
      eyebrow: 'AI assistant for interior design studios',
      h1: 'An owner sends the apartment plan at 21:20.',
      h1Accent: 'The answer is already on its way.',
      lead: 'Before moving into a new apartment, an owner asks about design and a 3D project in the evening. The AI assistant replies automatically, clarifies the property, area and style, records the name and phone, then hands the request to the designer.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Gvantsa',
      chatRole: 'Forma Tbilisi, demo studio assistant',
      chatGreeting: 'I am Gvantsa, the Forma Tbilisi assistant. Ask about designing an apartment or a commercial space, I will walk you through the stages and book your consultation, even late in the evening.',
      chatPlaceholder: 'Ask about design stages, 3D or timelines...',
      chatChips: ['I have a plan for a new apartment, do you do 3D?', 'How much is a project per square meter?', 'How long does the full project take?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a design studio loses clients',
      pains: [
        { h: 'Clients look for a designer in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your studio is already closed.' },
        { h: 'They message several studios at once', p: '"How much is an apartment design? When can I get a consultation?" Clarify the room, area and style, then offer an initial designer consultation.' },
        { h: 'An interior idea needs a brief and consultation', p: 'Clarify the room, area, style and target timeline, then offer an initial consultation with a designer.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'Explains that the cost depends on area and package, quotes the per square meter range and invites to a consultation. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the consultation details', p: 'Object type and area, preferred day and time, name, phone. With an optional provisional slot.' },
        { h: 'Your designer confirms in the morning', p: 'Every night inquiry lands in one list. The manager calls, confirms, and the client is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price ranges', p: 'It answers only from the data you provided. It says the designer will calculate the exact cost after the area and scope are clarified.' },
        { h: 'It does not confirm consultations by itself', p: 'A booking is always provisional; the final word is your manager. Your schedule stays in your hands.' },
        { h: 'It hands hard questions to a human', p: 'Portfolio, a specific style, an unusual request: the bot takes a phone number and passes the case to the designer. It does not pose as a designer.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your studio',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for an interior design studio?', a: 'Timing depends on the agreed scope: we need your service list, workflow stages and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot explains that the cost depends on area and package, quotes the per square meter range and invites the client to a consultation for the exact calculation. It uses only approved information; unlisted details are confirmed by your team.' },
        { q: 'Does it replace the manager?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your studio, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for interior design: why now',
            p: "Most clients look for a designer from their phone, after working hours. They write on Instagram and Messenger, where they also browse the portfolio, and they expect an answer within minutes. After the agreed activation, the AI chatbot for interior design can answer at night using only the information you approve and hand complex requests to the team. The market for new apartments in Tbilisi is large, and a designer is chosen quickly.",
          },
          {
            h: 'Booking, not just messaging',
            p: "The main difference between a simple chatbot and a design studio assistant is the booking logic. The assistant gathers the object type, the area, the preferred time, the name and the phone, creates a provisional booking and hands it to the designer in the morning for confirmation. The studio schedule stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'An exact price only after the area is clear',
            p: 'In interior design the cost depends on the area and the scope of work, so the bot should use approved information and route exact details to the team. A properly configured assistant uses only the information the studio provided, answers with a per square meter range and invites the client to a consultation, where the designer works out the exact project. This is transparent for the client and reputationally calm for the studio.',
          },
        ],
        aeoH: 'What does an AI assistant for interior design do?',
        aeoBody:
          'An AI assistant for interior design is a chatbot that answers client messages in Messenger, Instagram, WhatsApp and on the site, at any hour of the day or night. It explains the work stages, names the per square meter price range, invites the client to a consultation, records the object type, area, name, number and preferred time, creates a provisional booking and hands it to the designer in the morning. Uses approved price ranges and passes the portfolio and hard questions to a human. For the studio the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-for-construction-companies-georgia', label: 'AI for construction companies in Georgia' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Lead capture automation: the guide' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для дизайна интерьера: запись на консультацию 24/7',
      description:
        'AI-ассистент для студий дизайна интерьера в Тбилиси. Отвечает клиентам ночью, объясняет этапы работы, записывает на консультацию и передаёт дизайнеру.',
      eyebrow: 'AI-ассистент для дизайна интерьера',
      h1: 'Владелец в 21:20 отправляет план квартиры.',
      h1Accent: 'Ответ уже в пути.',
      lead: 'Перед переездом в новую квартиру владелец вечером спрашивает о дизайне и 3D-проекте. AI-ассистент отвечает автоматически, уточняет объект, площадь и стиль, записывает имя и номер, затем передаёт запрос дизайнеру.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Гванца',
      chatRole: 'Форма Тбилиси, ассистент демо-студии',
      chatGreeting: 'Я Гванца, ассистент студии Форма Тбилиси. Спросите о дизайне квартиры или коммерческого помещения, расскажу об этапах и запишу на консультацию, даже поздним вечером.',
      chatPlaceholder: 'Спросите об этапах дизайна, 3D или сроках...',
      chatChips: ['У меня есть план новой квартиры, делаете 3D?', 'Сколько стоит проект за квадратный метр?', 'За сколько готов весь проект?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где студия теряет клиентов',
      pains: [
        { h: 'Клиент ищет дизайнера вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваша студия уже закрыта.' },
        { h: 'Пишет в несколько студий одновременно', p: '«Сколько стоит дизайн квартиры? Когда можно на консультацию?» Уточните комнату, площадь и стиль, затем предложите первичную консультацию дизайнера.' },
        { h: 'Идея интерьера требует брифа и консультации', p: 'Уточните комнату, площадь, стиль и желаемые сроки, затем предложите первичную консультацию дизайнера.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Объясняет, что стоимость зависит от площади и пакета, называет вилку за квадратный метр и приглашает на консультацию. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает детали консультации', p: 'Тип объекта и площадь, желаемый день и время, имя, телефон. По желанию с предварительной записью.' },
        { h: 'Утром дизайнер подтверждает', p: 'Все ночные обращения в одном списке. Менеджер звонит, подтверждает, клиент в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает консультацию сам', p: 'Запись всегда предварительная, финальное слово за звонком менеджера. Ваш график остаётся в ваших руках.' },
        { h: 'Сложное передаёт человеку', p: 'Портфолио, конкретный стиль, нестандартная просьба: бот берёт номер и передаёт случай дизайнеру. Дизайнером себя не выдаёт.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей студии',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для студии дизайна интерьера?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, этапы работы и график; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот объясняет, что стоимость зависит от площади и пакета, называет вилку за квадратный метр и приглашает на консультацию за точным расчётом. Сумму, которую вы не утверждали, он называет только утверждённые диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит менеджера?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей студии, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для дизайна интерьера: почему именно сейчас',
            p: "Большинство клиентов ищут дизайнера с телефона, после рабочих часов. Они пишут в Instagram и Messenger, где заодно смотрят портфолио, и ждут ответа за минуты. После согласованного включения AI-чатбот для дизайна интерьера отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок новых квартир в Тбилиси большой, а дизайнера выбирают быстро.",
          },
          {
            h: 'Запись, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента студии дизайна это логика записи на консультацию. Ассистент собирает тип объекта, площадь, удобное время, имя и телефон, создаёт предварительную запись и утром передаёт дизайнеру на подтверждение. График студии остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Точная цена только после уточнения площади',
            p: 'В дизайне интерьера стоимость зависит от площади и объёма работ, поэтому бот не должен выдумывать точную сумму. Правильно настроенный ассистент использует только те данные, что дала студия, отвечает вилкой за квадратный метр и приглашает на консультацию, где дизайнер рассчитает точный проект. Для клиента это прозрачно, а для студии репутационно спокойно.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для дизайна интерьера?',
        aeoBody:
          'AI-ассистент для дизайна интерьера это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он объясняет этапы работы, называет вилку цены за квадратный метр, приглашает клиента на консультацию, записывает тип объекта, площадь, имя, номер и удобное время, создаёт предварительную запись и утром передаёт дизайнеру. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для студии результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-for-construction-companies-georgia', label: 'AI для строительных компаний Грузии' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Автоматизация захвата лидов: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
