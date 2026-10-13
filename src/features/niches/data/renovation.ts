import type { NicheEntry } from '../types';

/**
 * Construction and renovation companies (სარემონტო და სამშენებლო კომპანიები).
 * Quote niche: the booking flow is adapted to a site-visit plus quote request.
 * The assistant collects the project details (object type, area, needed work),
 * the name and the phone, then hands the request to the project manager for a
 * free on-site estimate. The demo persona is a generic demo renovation company,
 * no aiNOW client is implied.
 */
export const renovation: NicheEntry = {
  key: 'renovation',
  slug: 'ai-chatbot-remontistvis',
  serviceType: 'AI Chatbot for Construction and Renovation Companies',
  persona: {
    botName: 'ბექა',
    brand: 'ალფა რემონტი',
    bizType: 'სარემონტო და სამშენებლო კომპანია',
    hours: 'ორშაბათი-შაბათი 10:00-19:00, კვირას დასვენება',
    address: 'თბილისი. გასვლითი შეფასება უფასოა.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: გასვლითი შეფასება და ხარჯთაღრიცხვა უფასოა. სარემონტო სამუშაო კვადრატულ მეტრზე ითვლება: კოსმეტიკური რემონტი დაახლოებით 150-250 ლარი კვადრატულ მეტრზე, ევრორემონტი 300-500 ლარი, ფილის დაგება 40-70 ლარი. ვაკეთებთ ევრორემონტს, ფილის დაგებას, გაზისა და ელექტროობის სამუშაოებს. საბოლოო ღირებულება პროექტზეა დამოკიდებული და ზუსტდება ადგილზე დათვალიერების შემდეგ. გადახდა: ნაღდი, ბარათი, ეტაპობრივი გადახდა დიდ პროექტებზე.',
    booking:
      'როცა კლიენტს რემონტი აინტერესებს, ჯერ დააზუსტე პროექტის დეტალები: ობიექტის ტიპი (ბინა, სახლი, ოფისი), დაახლოებითი ფართი და რა სამუშაო სჭირდება (სრული ევრორემონტი, ფილა, გაზი, ელექტროობა). შემდეგ სთხოვე სახელი და ტელეფონის ნომერი და შესთავაზე უფასო გასვლითი შეფასება. როცა ყველა დეტალი გაქვს, დაადასტურე ასე: "თქვენი მოთხოვნა მივიღე. დილით მენეჯერი დაგირეკავთ, დაათანხმებთ გასვლის დროს და ადგილზე გააკეთებს ზუსტ ხარჯთაღრიცხვას." ზუსტ ფასს შენ არ ასახელებ, ის ადგილზე შეფასების შემდეგ დგინდება.',
    guardrails: [
      'ზუსტ ფასს არასოდეს ასახელებ. სარემონტო ღირებულება მხოლოდ ადგილზე დათვალიერების შემდეგ დგინდება.',
      'ტექნიკურ დეტალებს (მასალა, ვადები, გადახდის ეტაპები) პროექტის მენეჯერს გადასცემ: აიღე ტელეფონი და უთხარი, რომ მენეჯერი დაგირეკავს.',
    ],
    customerNoun: 'მფლობელი',
    followupDomains: 'რემონტის ხანგრძლივობა, ეტაპობრივი გადახდა, მასალის შერჩევა, სამუშაოს გარანტია, დაწყების თარიღი',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი სარემონტო კომპანიისთვის: მოთხოვნების მიღება 24/7',
      description:
        'AI ასისტენტი სარემონტო და სამშენებლო კომპანიებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, აგროვებს მოთხოვნას გასვლით შეფასებაზე და გადასცემს მენეჯერს.',
      eyebrow: 'AI ასისტენტი სარემონტო კომპანიისთვის',
      h1: 'ბინის მფლობელი წერს 20:30-ზე.',
      h1Accent: 'შეფასება უკვე იწერება.',
      lead: 'საღამოს, ბინის მფლობელი ოთახებს ფოტოზე იღებს და აგზავნის, რომ გაიგოს რა დაუჯდება რემონტი. AI ასისტენტი პასუხობს ავტომატურად, აზუსტებს ფართსა და სასურველ სამუშაოს, ასახელებს საორიენტაციო შუალედს, იწერს სახელსა და ნომერს, დილით კი მენეჯერს გადასცემს ზუსტი გასვლითი შეფასებისთვის.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ბექა',
      chatRole: 'ალფა რემონტი, დემო კომპანიის ასისტენტი',
      chatGreeting:
        'ბექა ვარ, ალფა რემონტის ასისტენტი. აღწერეთ ბინა ან ფოტოები გამომიგზავნეთ, გეტყვით საორიენტაციო ღირებულებას და მოვამზადებ მოთხოვნას უფასო გასვლით შეფასებაზე.',
      chatPlaceholder: 'ჰკითხეთ ფასზე, ვადებზე ან გამოგზავნე ბინის ფოტო...',
      chatChips: ['ბინის ევრორემონტი რა ღირს კვადრატზე?', 'ფოტოებით შემიძლია ბინა გაჩვენოთ?', 'სამზარეულოს რემონტს რამდენ ხანში ასრულებთ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სარემონტო კომპანია კლიენტებს',
      pains: [
        {
          h: 'კლიენტი რემონტს საღამოს ეძებს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'ერთდროულად რამდენიმე კომპანიას წერს',
          p: '«ბინის რემონტი რა ღირს? გასვლით შეფასებას აკეთებთ?» დააზუსტეთ ობიექტის ტიპი, ფართობი და სამუშაოები, შემდეგ დაგეგმეთ ადგილზე შეფასება.',
        },
        {
          h: 'რემონტის მოთხოვნას ობიექტის ბრიფი და შეფასება უნდა მოჰყვეს',
          p: 'დააზუსტეთ ობიექტის ტიპი, ფართობი და საჭირო სამუშაოები, შემდეგ კი პროექტის მენეჯერთან ზარი ან ადგილზე შეფასების დრო დაგეგმეთ.',
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
          p: 'ხსნის, რომ ფასი კვადრატულ მეტრზეა და პროექტზეა დამოკიდებული, ასახელებს საორიენტაციო შუალედს და უფასო გასვლით შეფასებაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          h: 'აგროვებს პროექტის დეტალებს',
          p: 'ობიექტის ტიპი, ფართი, საჭირო სამუშაო, სახელი და ტელეფონი. ასე მენეჯერს უკვე მზა მოთხოვნა ხვდება.',
        },
        {
          h: 'დილით მენეჯერი გადის შესაფასებლად',
          p: 'ყველა ღამის მოთხოვნა ერთ სიაშია. მენეჯერი რეკავს, ათანხმებს გასვლის დროს და ადგილზე აკეთებს ზუსტ ხარჯთაღრიცხვას.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადგენს ხარჯთაღრიცხვას',
          p: 'მოთხოვნა ყოველთვის წინასწარია, ზუსტ ფასს გასვლითი შეფასება ადგენს. თქვენი ფასის ლოგიკა თქვენს ხელში რჩება.',
        },
        {
          h: 'ტექნიკურ დეტალს ადამიანს გადასცემს',
          p: 'მასალა, ვადები, გადახდის ეტაპები: ასეთ დროს ბოტი ნომერს იღებს და საქმეს პროექტის მენეჯერს გადასცემს, არაფერს იგონებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი კომპანიისთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი სარემონტო კომპანიისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, ფასის ლოგიკა (რა ითვლება კვადრატზე, რა პროექტზე) და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ხსნის, რომ სარემონტო ფასი კვადრატულ მეტრსა და პროექტზეა დამოკიდებული, ასახელებს საორიენტაციო შუალედს და უფასო გასვლით შეფასებაზე იწვევს ზუსტი ხარჯთაღრიცხვისთვის. ზუსტ თანხას, რომელიც არ დაგიდასტურებიათ, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს მენეჯერს?',
a: 'არა. ის ფარავს იმ საათებს, როცა მენეჯერი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. გასვლა, ზუსტი შეფასება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მოთხოვნების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი კომპანიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი სარემონტო კომპანიისთვის: რატომ სწორედ ახლა',
            p: "ბინის რემონტს ადამიანი ტელეფონიდან ეძებს, სამუშაო საათების შემდეგ. წერს Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდება. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი სარემონტო კომპანიისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში სარემონტო ბაზარი გადატვირთულია და გადაწყვეტილება სწრაფად მიიღება.",
          },
          {
            h: 'მოთხოვნის მიღება და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და სარემონტო კომპანიის ასისტენტს შორის მოთხოვნის აგროვების ლოგიკაა. ასისტენტი აზუსტებს ობიექტის ტიპს, ფართს, საჭირო სამუშაოს, აგროვებს სახელსა და ტელეფონს, ქმნის მზა მოთხოვნას გასვლით შეფასებაზე და დილით მენეჯერს გადასცემს. ასე კომპანიის ფასის ლოგიკა ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'უსაფრთხო პასუხები ფასზე',
            p: 'რემონტში დაუშვებელია, ბოტმა ზუსტი ფასი გამოიგონოს ან ვალდებულება აიღოს. სწორად აწყობილი ასისტენტი მხოლოდ კომპანიის მიწოდებულ საორიენტაციო შუალედებს იყენებს, ხსნის, რომ ზუსტი თანხა ადგილზე დგინდება, ტექნიკურ დეტალებს კი პროექტის მენეჯერს გადასცემს. ეს მიდგომა კლიენტისთვის გასაგებია, კომპანიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი სარემონტო კომპანიისთვის?',
        aeoBody:
          'AI ასისტენტი სარემონტო კომპანიისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ხსნის, რომ სარემონტო ფასი კვადრატულ მეტრსა და პროექტზეა დამოკიდებული, ასახელებს საორიენტაციო შუალედებს, აზუსტებს ობიექტის ტიპს, ფართსა და საჭირო სამუშაოს, აგროვებს სახელსა და ნომერს და დილით მენეჯერს გადასცემს გასვლით შესაფასებლად. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. კომპანიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მოთხოვნები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-for-construction-companies-georgia', label: 'AI სამშენებლო კომპანიებისთვის' },
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების მიღების ავტომატიზაცია: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for renovation companies: capturing requests 24/7',
      description:
        'AI assistant for construction and renovation companies in Tbilisi. Answers clients at night, captures the on-site request and hands it to your manager.',
      eyebrow: 'AI assistant for renovation companies',
      h1: 'An apartment owner writes at 20:30.',
      h1Accent: 'The estimate is already being prepared.',
      lead: 'In the evening, an apartment owner photographs the rooms and sends them over to find out what the renovation will cost. The AI assistant answers automatically, clarifies the area and the desired work, quotes an orientation range, writes down the name and number, and in the morning hands it to the manager for an exact on-site estimate.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Beka',
      chatRole: 'Alpha Remonti, demo company assistant',
      chatGreeting: 'I am Beka, the Alpha Remonti assistant. Describe your apartment or send photos, and I will give you an orientation cost and prepare a request for a free on-site assessment.',
      chatPlaceholder: 'Ask about price, timeline or send a photo of the apartment...',
      chatChips: ['How much is an apartment euro-renovation per square meter?', 'Can I show you the apartment with photos?', 'How long does a kitchen renovation take?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a renovation company loses clients',
      pains: [
        { h: 'Clients look for renovation in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message several companies at once', p: '"How much is an apartment renovation? Do you do on-site assessment?" Clarify the property type, area and required work, then schedule an on-site assessment.' },
        { h: 'A renovation request needs a project brief and assessment', p: 'Clarify the property type, area and required work, then schedule a call with the project manager or an on-site assessment.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price question correctly', p: 'It explains that the price is per square meter and depends on the project, quotes an orientation range and invites to a free on-site assessment. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the project details', p: 'Object type, area, needed work, name and phone. So the manager receives a ready request.' },
        { h: 'In the morning the manager goes to assess', p: 'Every night request lands in one list. The manager calls, agrees on a visit time and makes an exact estimate on site.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only with the orientation ranges you provided. On the exact amount it honestly says it is set after the on-site assessment.' },
        { h: 'It does not draw up the estimate itself', p: 'A request is always provisional; the exact price is set by the on-site assessment. Your price logic stays in your hands.' },
        { h: 'It hands technical details to a human', p: 'Materials, deadlines, payment stages: the bot takes a number and passes the case to the project manager. It invents nothing.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your company',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for a renovation company?', a: 'Timing depends on the agreed scope: we need your service list, price logic (what is counted per square meter, what per project) and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot explains that the renovation price depends on the square meters and the project, quotes an orientation range and invites to a free on-site assessment for the exact estimate. It uses only approved information; unlisted details are confirmed by your team.' },
        { q: 'Does it replace the manager?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. The visit, the exact estimate and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and request volume. First we show a live demo on your company, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for a renovation company: why right now',
            p: "People look for an apartment renovation from their phone, after working hours. They write on Instagram and Messenger and expect a reply within minutes. After the agreed activation, the AI chatbot for a renovation company can answer at night using only the information you approve and hand complex requests to the team. The renovation market in Tbilisi is crowded and the decision is made fast.",
          },
          {
            h: 'Capturing a request, not just chatting',
            p: "The main difference between a simple chatbot and a renovation company assistant is the request-collection logic. The assistant clarifies the object type, the area and the needed work, gathers the name and phone, builds a ready request for an on-site assessment and hands it to the manager in the morning. This way the company price logic stays under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Safe answers about price',
            p: 'In renovation it is unacceptable for the bot to invent an exact price or take on an obligation. A properly set up assistant uses only the orientation ranges the company provided, explains that the exact amount is set on site, and passes technical details to the project manager. This approach is clear for the client and reputationally calm for the company.',
          },
        ],
        aeoH: 'What does an AI assistant for a renovation company do?',
        aeoBody:
          'An AI assistant for a renovation company is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any hour of the day or night. It explains that the renovation price depends on the square meters and the project, quotes orientation ranges, clarifies the object type, area and needed work, collects the name and number, and in the morning hands the request to the manager for an on-site assessment. Uses approved price ranges, does not take on technical obligations, and passes complex details to a human. For the company the result is simple: evening and weekend requests can be routed to the team under agreed rules.',
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
      title: 'AI-чатбот для ремонтных компаний: приём заявок 24/7',
      description:
        'AI-ассистент для строительных и ремонтных компаний в Тбилиси. Отвечает клиентам ночью, собирает заявку на выезд с оценкой и передаёт менеджеру.',
      eyebrow: 'AI-ассистент для ремонтных компаний',
      h1: 'Владелец квартиры пишет в 20:30.',
      h1Accent: 'Оценка уже готовится.',
      lead: 'Вечером владелец квартиры фотографирует комнаты и присылает снимки, чтобы узнать, во сколько обойдётся ремонт. AI-ассистент отвечает автоматически, уточняет площадь и нужные работы, называет ориентировочную вилку, записывает имя и номер, а утром передаёт менеджеру для точной оценки на выезде.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Бека',
      chatRole: 'Альфа Ремонти, ассистент демо-компании',
      chatGreeting: 'Я Бека, ассистент компании Альфа Ремонти. Опишите квартиру или пришлите фото, я назову ориентировочную стоимость и подготовлю заявку на бесплатный выезд с оценкой.',
      chatPlaceholder: 'Спросите о цене, сроках или пришлите фото квартиры...',
      chatChips: ['Сколько стоит евроремонт квартиры за квадрат?', 'Могу показать квартиру по фото?', 'За сколько делаете ремонт кухни?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где ремонтная компания теряет клиентов',
      pains: [
        { h: 'Клиент ищет ремонт вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет сразу нескольким компаниям', p: '«Сколько стоит ремонт квартиры? Выезд с оценкой делаете?» Уточните тип объекта, площадь и нужные работы, затем назначьте выездную оценку.' },
        { h: 'Запрос на ремонт требует брифа и оценки объекта', p: 'Уточните тип объекта, площадь и нужные работы, затем назначьте звонок с менеджером проекта или выездную оценку.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене', p: 'Объясняет, что цена за квадратный метр и зависит от проекта, называет ориентировочную вилку и приглашает на бесплатный выезд с оценкой. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает детали проекта', p: 'Тип объекта, площадь, нужные работы, имя и телефон. Так менеджеру приходит готовая заявка.' },
        { h: 'Утром менеджер выезжает на оценку', p: 'Все ночные заявки в одном списке. Менеджер звонит, согласует время выезда и делает точную смету на месте.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Сам не составляет смету', p: 'Заявка всегда предварительная, точную цену определяет выезд с оценкой. Ваша логика цены остаётся в ваших руках.' },
        { h: 'Технические детали передаёт человеку', p: 'Материалы, сроки, этапы оплаты: бот берёт номер и передаёт случай менеджеру проекта. Ничего работает только по утверждённой информации; неизвестные детали уточняет команда.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашей компании',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для ремонтной компании?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, логика цены (что считается за квадрат, что за проект) и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот объясняет, что цена ремонта зависит от квадратных метров и проекта, называет ориентировочную вилку и приглашает на бесплатный выезд с оценкой за точной сметой. Сумму, которую вы не утверждали, он называет только утверждённые диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит менеджера?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Выезд, точная оценка и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма заявок. Сначала показываем живое демо на вашей компании, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для ремонтной компании: почему именно сейчас',
            p: "Ремонт квартиры человек ищет с телефона, после рабочего дня. Пишет в Instagram и Messenger и ждёт ответа за считанные минуты. После согласованного включения AI-чатбот для ремонтной компании отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок ремонта в Тбилиси перегружен, а решение принимается быстро.",
          },
          {
            h: 'Приём заявки, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента ремонтной компании это логика сбора заявки. Ассистент уточняет тип объекта, площадь и нужные работы, собирает имя и телефон, формирует готовую заявку на выезд с оценкой и утром передаёт менеджеру. Так логика цены компании остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Безопасные ответы о цене',
            p: 'В ремонте недопустимо, чтобы бот выдумывал точную цену или брал на себя обязательства. Правильно настроенный ассистент использует только ориентировочные вилки, которые передала компания, объясняет, что точная сумма определяется на месте, а технические детали передаёт менеджеру проекта. Такой подход понятен клиенту и репутационно спокоен для компании.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для ремонтной компании?',
        aeoBody:
          'AI-ассистент для ремонтной компании это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он объясняет, что цена ремонта зависит от квадратных метров и проекта, называет ориентировочные вилки, уточняет тип объекта, площадь и нужные работы, собирает имя и номер и утром передаёт заявку менеджеру на выезд с оценкой. Он работает только по утверждённой информации; неизвестные детали уточняет команда. Для компании результат прост: вечерние и выходные заявки можно передавать команде по согласованным правилам.',
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
