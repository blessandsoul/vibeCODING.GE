import type { NicheEntry } from '../types';

/**
 * Wedding photographers and videographers (ფოტოგრაფები). The demo persona is a
 * generic photo and video studio (Studio Kadri). The landing copy is tuned to the
 * photographer keyword: date availability, package price and booking, rather than
 * the generic "clinics" term.
 */
export const photographer: NicheEntry = {
  key: 'photographer',
  slug: 'ai-chatbot-fotografebistvis',
  serviceType: 'AI Chatbot for Wedding Photographers and Videographers',
  persona: {
    botName: 'ლევანი',
    brand: 'სტუდია კადრი',
    bizType: 'ფოტო და ვიდეო სტუდია',
    hours: 'ორშაბათი-შაბათი 11:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. შეხვედრა სტუდიაში ან ონლაინ.',
    services:
      'სადემონსტრაციო ფასები ამ ბიზნესის მაგალითისთვისაა და aiCHATS-ის გეგმების ფასი არ არის: საქორწინო ფოტო და ვიდეო პაკეტები დღის საათების მიხედვით; წყვილის სასიყვარულო ფოტოსესია; საათობრივი გადაღება 100-250 ლარი; დამუშავება და მონტაჟი ფასში შედის. თარიღი წინასწარ ჯავშანდება. გადახდა: ნაღდი, ბარათი, დიდ პაკეტებზე განვადება.',
    booking:
      'როცა კლიენტს გადაღება უნდა, ჯერ ჰკითხე რომელი თარიღი და რა ტიპის გადაღება აინტერესებს (ქორწილი, წყვილის ფოტოსესია, საათობრივი), შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩავიწერე [თარიღი] თქვენი გადაღებისთვის. დილით ფოტოგრაფი დაგირეკავთ თარიღის თავისუფლების დასადასტურებლად." თარიღის თავისუფლებას საბოლოოდ შენ არ ადასტურებ, ამას ფოტოგრაფი ამოწმებს კალენდარში.',
    guardrails: [
      'თარიღის საბოლოო თავისუფლებას თვითონ არ ადასტურებ; ამას ფოტოგრაფი ამოწმებს კალენდარში.',
      'ინდივიდუალურ ან არასტანდარტულ პაკეტზე: სთხოვე ტელეფონი და უთხარი, რომ ფოტოგრაფი პირადად დაგირეკავთ დეტალებისთვის.',
    ],
    customerNoun: 'წყვილი',
    followupDomains: 'პაკეტში რამდენი საათი შედის, ფოტოების დამუშავებისა და მიწოდების ვადა, ვიდეოგრაფის დამატება, ლოკაციაზე გამოსვლა, ავანსი და გადახდის პირობები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ფოტოგრაფებისთვის: თარიღების ჯავშანი 24/7',
      description:
        'AI ასისტენტი საქორწინო ფოტოგრაფებისა და ვიდეოგრაფებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ამოწმებს თარიღის თავისუფლებას და გადასცემს ფოტოგრაფს.',
      eyebrow: 'AI ასისტენტი ფოტოგრაფებისთვის',
      h1: 'წყვილი 23:50-ზე თარიღზე წერს.',
      h1Accent: 'ლევანი უკვე ამოწმებს თარიღს.',
      lead: 'გვიან ღამით წყვილი ქორწილის თარიღს ამოწმებს და თავისუფალ ფოტოგრაფს ეძებს. AI ასისტენტი ამოწმებს თარიღს, იწერს სახელს, ნომერსა და გადაღების ტიპს, შემდეგ კი მოთხოვნას ფოტოგრაფს გადასცემს დასადასტურებლად.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ლევანი',
      chatRole: 'სტუდია კადრი, დემო სტუდიის ასისტენტი',
      chatGreeting:
        'გამარჯობა, ლევანი ვარ, სტუდია კადრის ასისტენტი. მითხარით ქორწილის თარიღი და მაშინვე გეტყვით, ფოტოგრაფი თავისუფალია თუ არა.',
      chatPlaceholder: 'ჰკითხეთ თარიღზე, პაკეტზე ან ვიდეოზე...',
      chatChips: ['20 სექტემბერს ქორწილი გვაქვს, თავისუფალი ხართ?', 'პაკეტში ვიდეოგრაფიც შედის?', 'ფოტოებს რამდენ ხანში ამუშავებთ?'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს ფოტოგრაფი შეკვეთებს',
      pains: [
        {
          h: 'წყვილი საღამოს ეძებს ფოტოგრაფს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში, სადაც თქვენი პორტფოლიო ნახა, როცა თქვენ გადაღებაზე ხართ ან უკვე გძინავთ.',
        },
        {
          h: 'წერს რამდენიმე ფოტოგრაფს ერთდროულად',
          p: '«15 ივნისი თავისუფალია? ქორწილის პაკეტი რა ღირს?» დააზუსტეთ თარიღი, ადგილი და გადაღების ტიპი, შემდეგ გაუგზავნეთ შესაბამისი პაკეტი და კონსულტაციის დრო.',
        },
        {
          h: 'თარიღის კითხვას პაკეტი და მოკლე ბრიფი უნდა მოჰყვეს',
          p: 'ქორწილის ან ფოტოსესიის მოთხოვნაზე დააზუსტეთ თარიღი, ადგილი და გადაღების ტიპი, შემდეგ კი შესაბამისი პაკეტი და კონსულტაციის დრო გაუგზავნეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'ფასსა და პაკეტზე კითხვას სწორად უმკლავდება',
          p: 'ასახელებს თქვენს რეალურ პაკეტების ფასს და გადაღების ტიპებს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'ამოწმებს თარიღს და აგროვებს ჯავშნის დეტალებს',
          p: 'გადაღების ტიპი, სასურველი თარიღი, სახელი, ტელეფონი. თარიღს წინასწარ ინიშნავს, საბოლოო შემოწმება ფოტოგრაფზეა.',
        },
        {
          h: 'დილით ფოტოგრაფი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. ფოტოგრაფი რეკავს, ამოწმებს კალენდარს, ადასტურებს და წყვილი თქვენს გრაფიკშია.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს თარიღს',
          p: 'ჯავშანი ყოველთვის წინასწარია, თარიღის თავისუფლების საბოლოო შემოწმება ფოტოგრაფის საქმეა. თქვენი კალენდარი თქვენს ხელში რჩება.',
        },
        {
          h: 'ინდივიდუალურ პაკეტს ადამიანს გადასცემს',
          p: 'დიდი ქორწილი, არასტანდარტული თხოვნა, სპეციალური მონტაჟი: ასეთ დროს ბოტი ნომერს იღებს და საქმეს ფოტოგრაფს გადასცემს.',
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
          q: 'რამდენ ხანში ეშვება ასისტენტი ფოტოგრაფისთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება პაკეტების სია, ფასები და დაკავებული თარიღები; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი ფასს ეკითხება?',
          a: 'ბოტი ასახელებს თქვენს მითითებულ პაკეტების ფასს და გადაღების ტიპებს. ის იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს ფოტოგრაფს?',
          a: 'არა. ის ფარავს იმ საათებს, როცა თქვენ გადაღებაზე ხართ ან ვერ პასუხობთ: ღამე, შაბათ-კვირა, დატვირთული სეზონი. თარიღის საბოლოო დადასტურება და ცოცხალი ურთიერთობა თქვენთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სტუდიის მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ფოტოგრაფებისთვის: რატომ სწორედ ახლა',
            p: "წყვილების უმეტესობა ფოტოგრაფს Instagram-იდან ირჩევს, სამუშაო საათების შემდეგ. ისინი ხედავენ პორტფოლიოს, წერენ Instagram-ში და პასუხს წუთებში ელოდებიან. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ფოტოგრაფებისთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში საქორწინო სეზონი მოკლეა და თარიღები სწრაფად იკავება.",
          },
          {
            h: 'ჯავშანი და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ფოტოგრაფის ასისტენტს შორის ჯავშნის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას გადაღების ტიპის, სასურველი თარიღის, სახელისა და ტელეფონის შესახებ, წინასწარ ინიშნავს თარიღს და დილით ფოტოგრაფს გადასცემს დასადასტურებლად. ასე სტუდიის კალენდარი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'ზუსტი პასუხები თარიღსა და ფასზე',
            p: 'ფოტოგრაფის საქმეში დაუშვებელია, ბოტმა თავისუფალი თარიღი დაადასტუროს, რომელიც უკვე დაკავებულია, ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ თქვენს მიწოდებულ ინფორმაციას იყენებს, პაკეტების ფასს შუალედებით ასახელებს, თარიღის საბოლოო შემოწმებას კი ფოტოგრაფს უტოვებს. ეს მიდგომა წყვილისთვის გასაგებია, სტუდიისთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ფოტოგრაფებისთვის?',
        aeoBody:
          'AI ასისტენტი ფოტოგრაფებისთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის ასახელებს პაკეტების ფასს, ამოწმებს სასურველი თარიღის თავისუფლებას, იწერს სახელს, ნომერსა და გადაღების ტიპს, წინასწარ ინიშნავს თარიღს და დილით ფოტოგრაფს გადასცემს. ის თარიღს თვითონ არ ადასტურებს, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სტუდიისთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Instagram-ის მიმოწერის ავტომატიზაცია ჩატბოტით' },
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების შეგროვების ავტომატიზაცია: გზამკვლევი' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for photographers: date booking 24/7',
      description:
        'AI assistant for wedding photographers and videographers in Tbilisi. Answers clients at night, checks the date and hands it to the photographer.',
      eyebrow: 'AI assistant for photographers',
      h1: 'A couple writes about the date at 23:50.',
      h1Accent: 'Levan is already checking the date.',
      lead: 'Late at night a couple checks a wedding date and looks for an available photographer. The AI assistant checks the date, records the name, phone and shoot type, then hands the request to the photographer for confirmation.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Levan',
      chatRole: 'Studio Kadri, demo studio assistant',
      chatGreeting: 'Hi, I am Levan, the Studio Kadri assistant. Tell me your wedding date and I will check right away whether the photographer is free.',
      chatPlaceholder: 'Ask about the date, a package or video...',
      chatChips: ['We have a wedding on September 20, are you free?', 'Does the package include a videographer?', 'How long does photo editing take?'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where a photographer loses bookings',
      pains: [
        { h: 'Couples look for a photographer in the evening', p: 'After work, from the phone. They write straight into Instagram, where they saw your portfolio, while you are on a shoot or already asleep.' },
        { h: 'They message several photographers at once', p: '"Is June 15 free? How much is a wedding package?" Clarify the date, location and shoot type, then send the relevant package and offer a consultation time.' },
        { h: 'A date question needs a package and brief', p: 'For a wedding or photoshoot request, clarify the date, location and shoot type, then send the relevant package and offer a consultation time.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the price and package question correctly', p: 'Quotes your real package prices and shoot types. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { h: 'Checks the date and collects the booking', p: 'Shoot type, preferred date, name, phone. It pencils the date in provisionally; the final check stays with the photographer.' },
        { h: 'The photographer confirms in the morning', p: 'Every night inquiry lands in one list. The photographer calls, checks the calendar, confirms, and the couple is on your schedule.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the packages and prices you provided. On an unknown question it honestly says the photographer will clarify.' },
        { h: 'It does not confirm the date by itself', p: 'A booking is always provisional; the final date check is up to the photographer. Your calendar stays in your hands.' },
        { h: 'It hands individual packages to a human', p: 'A big wedding, an unusual request, special editing: the bot takes a phone number and passes the case to the photographer.' },
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
        { q: 'How fast can the assistant go live for a photographer?', a: 'Timing depends on the agreed scope: we need your package list, prices and booked dates; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks the price?', a: 'The bot quotes your set package prices and shoot types. It uses only the ranges you approve; an unlisted figure is confirmed by your team.' },
        { q: 'Does it replace the photographer?', a: 'No. It catches the hours you cannot answer: nights, weekends, a busy shooting season. The final date confirmation and the live relationship stay with you.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your studio, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for photographers: why now',
            p: "Most couples choose their photographer on Instagram, after working hours. They see the portfolio, write on Instagram and expect a reply within minutes. After the agreed activation, the AI chatbot for photographers can answer at night using only the information you approve and hand complex requests to the team. In Tbilisi the wedding season is short and dates fill up fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and an assistant built for a photographer is the booking logic. The assistant gathers the shoot type, the preferred date, the name and the phone, pencils the date in provisionally and hands it to the photographer in the morning to confirm. That way the studio calendar stays under human control, and the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Exact answers on date and price',
            p: 'In photography it is unacceptable for the bot to confirm a free date that is already taken, or to invent a price. A properly configured assistant uses only the information you provide, quotes package prices in ranges and leaves the final date check to the photographer. This approach is clear for the couple and reputationally calm for the studio.',
          },
        ],
        aeoH: 'What does the AI assistant for photographers do?',
        aeoBody:
          'The AI assistant for photographers is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any time of day. It quotes package prices, checks whether the desired date is free, records the name, number and shoot type, pencils the date in and hands it to the photographer in the morning. It does not confirm the date itself, uses only approved information; unlisted details are confirmed by the team. For the studio the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Instagram DM automation with a chatbot' },
        { slug: 'ai-lead-capture-automation-guide', label: 'AI lead capture automation: the guide' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для фотографов: бронь дат 24/7',
      description:
        'AI-ассистент для свадебных фотографов и видеографов в Тбилиси. Отвечает клиентам ночью, проверяет свободна ли дата, называет цену пакетов и передаёт фотографу.',
      eyebrow: 'AI-ассистент для фотографов',
      h1: 'Пара пишет о дате свадьбы в 23:50.',
      h1Accent: 'Леван уже проверяет дату.',
      lead: 'Поздно ночью пара проверяет дату свадьбы и ищет свободного фотографа. AI-ассистент проверяет дату, собирает имя, номер и формат съёмки, затем передаёт запрос фотографу на подтверждение.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Леван',
      chatRole: 'Студия Кадри, ассистент демо-студии',
      chatGreeting: 'Здравствуйте, я Леван, ассистент студии Кадри. Назовите дату свадьбы, и я сразу скажу, свободен ли фотограф.',
      chatPlaceholder: 'Спросите про дату, пакет или видео...',
      chatChips: ['У нас свадьба 20 сентября, вы свободны?', 'В пакет входит видеограф?', 'Сколько занимает обработка фото?'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где фотограф теряет заказы',
      pains: [
        { h: 'Пара ищет фотографа вечером', p: 'После работы, с телефона. Пишет сразу в Instagram, где увидела ваше портфолио, когда вы на съёмке или уже спите.' },
        { h: 'Пишет нескольким фотографам сразу', p: '«Свободно 15 июня? Сколько стоит свадебный пакет?» Уточните дату, место и формат съёмки, затем отправьте подходящий пакет и предложите время консультации.' },
        { h: 'Вопрос о дате требует пакета и брифа', p: 'По запросу на свадьбу или съёмку уточните дату, место и формат, затем отправьте подходящий пакет и предложите время консультации.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о цене и пакете', p: 'Называет ваши реальные цены пакетов и типы съёмки. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Проверяет дату и собирает бронь', p: 'Тип съёмки, желаемая дата, имя, телефон. Предварительно помечает дату, финальная проверка остаётся за фотографом.' },
        { h: 'Утром фотограф подтверждает', p: 'Все ночные обращения в одном списке. Фотограф звонит, проверяет календарь, подтверждает, пара в вашем графике.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает дату сам', p: 'Бронь всегда предварительная, финальная проверка даты за фотографом. Ваш календарь остаётся в ваших руках.' },
        { h: 'Индивидуальные пакеты передаёт человеку', p: 'Большая свадьба, нестандартная просьба, особый монтаж: бот берёт номер и передаёт случай фотографу.' },
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
        { q: 'Как быстро ассистент запускается для фотографа?', a: 'Сроки зависят от согласованного объёма: нужны список пакетов, цены и занятые даты; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает цену?', a: 'Бот называет заданные вами цены пакетов и типы съёмки. Называет только утверждённые вами диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит фотографа?', a: 'Нет. Он ловит часы, когда вы не можете ответить: ночь, выходные, загруженный сезон съёмок. Финальное подтверждение даты и живое общение остаются за вами.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашей студии, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для фотографов: почему именно сейчас',
            p: "Большинство пар выбирает фотографа в Instagram, после рабочего дня. Они смотрят портфолио, пишут в Instagram и ждут ответа за считанные минуты. После согласованного включения AI-чатбот для фотографов отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. В Тбилиси свадебный сезон короткий, и даты занимаются быстро.",
          },
          {
            h: 'Бронь, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента для фотографа это логика брони. Ассистент собирает тип съёмки, желаемую дату, имя и телефон, предварительно помечает дату и утром передаёт фотографу на подтверждение. Так календарь студии остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Точные ответы по дате и цене',
            p: 'В работе фотографа недопустимо, чтобы бот подтвердил свободную дату, которая уже занята, или выдумал цену. Правильно настроенный ассистент использует только предоставленную вами информацию, называет цены пакетов диапазонами, а финальную проверку даты оставляет фотографу. Такой подход понятен паре и репутационно спокоен для студии.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для фотографов?',
        aeoBody:
          'AI-ассистент для фотографов это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте, в любое время суток. Он называет цены пакетов, проверяет свободна ли желаемая дата, записывает имя, номер и тип съёмки, предварительно помечает дату и утром передаёт фотографу. Он не подтверждает дату сам, работает только по утверждённой информации; неизвестные детали уточняет команда. Для студии результат простой: вечерние и выходные обращения можно передавать команде по согласованным правилам.',
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Автоматизация Instagram Direct чатботом' },
        { slug: 'ai-lead-capture-automation-guide', label: 'Автоматизация сбора лидов: гид' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
