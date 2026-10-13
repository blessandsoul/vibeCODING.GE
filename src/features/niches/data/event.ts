import type { NicheEntry } from '../types';

/**
 * Event and wedding agencies (ღონისძიებების სააგენტო). The demo persona is a
 * generic event agency ("ზეიმი"); this is not a live pilot niche, so proofStat
 * uses a generic owner-level proof slot; no event client is implied. The
 * landing copy is tuned to the date availability + package by guest count
 * keyword rather than the generic "clinics" term.
 */
export const event: NicheEntry = {
  key: 'event',
  slug: 'ai-chatbot-ghonisdziebebistvis',
  serviceType: 'AI Chatbot for Event and Wedding Agencies',
  persona: {
    botName: 'ანუკი',
    brand: 'ზეიმი',
    bizType: 'ღონისძიებების სააგენტო',
    hours: 'ორშაბათი-შაბათი 11:00-20:00, კვირას დასვენება',
    address: 'თბილისი, ცენტრი. შეხვედრა ოფისში ან ონლაინ.',
    services:
      'ვაწყობთ ქორწილებს, დაბადების დღეებსა და კორპორატიულ ღონისძიებებს. ვამოწმებთ დარბაზისა და თარიღის თავისუფლებას, პაკეტს კი სტუმრების რაოდენობის მიხედვით ვქმნით: დეკორი, მუსიკა, კეთერინგი. ზუსტ პაკეტსა და ფასს მენეჯერი კონსულტაციაზე ადგენს. გადახდა: ნაღდი, ბარათი, ეტაპობრივი გადახდა.',
    booking:
      'როცა კლიენტს ღონისძიების დაგეგმვა უნდა, ჯერ ჰკითხე რა ტიპის ღონისძიებაა (ქორწილი, დაბადების დღე თუ კორპორატიული) და რომელი თარიღი აინტერესებს, შემდეგ სახელი და ტელეფონის ნომერი. როცა სამივე გაქვს, დაადასტურე ასე: "წინასწარ ჩაგწერეთ [ღონისძიება, თარიღი]. დილით მენეჯერი დაგირეკავთ, დაათვალიერებს თარიღის თავისუფლებას და პაკეტს შეგირჩევთ." თარიღსა და პაკეტს საბოლოოდ შენ არ ადასტურებ, ეს მენეჯერის ზარია.',
    guardrails: [
      'თარიღის თავისუფლებას და ზუსტ პაკეტს არასოდეს ადასტურებ, ამას მენეჯერი ამოწმებს.',
      'დეტალურ ორგანიზებაზე (სცენარი, ხელშეკრულება, უჩვეულო თხოვნა): სთხოვე ტელეფონი და უთხარი, რომ მენეჯერი პირველ რიგში დაგირეკავთ.',
    ],
    customerNoun: 'წყვილი',
    followupDomains:
      'დარბაზის ტევადობა და ლოკაცია, დეკორის სტილი, კეთერინგის მენიუ, მუსიკა და წამყვანი, ავანსი და გადახდის ეტაპები',
  },
  content: {
    ka: {
      title: 'AI ჩატბოტი ღონისძიებებისა და ქორწილებისთვის: ჯავშანი 24/7',
      description:
        'AI ასისტენტი ღონისძიებებისა და ქორწილების სააგენტოებისთვის თბილისში. პასუხობს კლიენტებს ღამითაც, ამოწმებს თარიღს და გადასცემს მენეჯერს.',
      eyebrow: 'AI ასისტენტი ღონისძიებებისთვის',
      h1: 'კვირას, 22:40. წყვილი ნიშნობის დარბაზზე წერს.',
      h1Accent: 'ანუკიმ უკვე უპასუხა.',
      lead: 'ნიშნობასა და ქორწილს წყვილი ღამით გეგმავს, როცა ოფისი დაკეტილია. AI ასისტენტი აგროვებს ღონისძიების ტიპს, თარიღს, სტუმრების რაოდენობას, სახელსა და ნომერს, შემდეგ კი შეთავაზების მოთხოვნას მენეჯერს გადასცემს.',
      ctaDemo: 'სცადეთ ცოცხალი დემო',
      ctaPilot: 'მოითხოვეთ შეფასება',
      chatName: 'ანუკი',
      chatRole: 'ზეიმი, დემო სააგენტოს ასისტენტი',
      chatGreeting:
        'გამარჯობა, ანუკი ვარ, ზეიმის ასისტენტი. თარიღი, დარბაზი თუ პაკეტი, ნებისმიერ საათზე გიპასუხებთ და კონსულტაციაზეც ჩაგწერთ.',
      chatPlaceholder: 'ჰკითხეთ თარიღზე, დარბაზზე ან პაკეტზე...',
      chatChips: ['27 სექტემბერს დარბაზი თავისუფალია?', 'დარბაზი 150 სტუმარს იტევს?', 'ნიშნობას ვგეგმავთ, დეკორი და მუსიკა გვჭირდება'],
      chatNote: 'ეს არის არხისა და ჩაწერის სადემონსტრაციო მაგალითი: ჩართვამდე პასუხები მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციასა და წესებს დაეყრდნობა. აქ ნაჩვენები ფასები ამ ბიზნესის მაგალითებია და aiCHATS-ის გეგმის ფასს არ წარმოადგენს.',
      painTitle: 'სად კარგავს სააგენტო კლიენტებს',
      pains: [
        {
          h: 'კლიენტი საღამოს ირჩევს სააგენტოს',
          p: 'სამუშაო დღის შემდეგ, ტელეფონიდან. წერს პირდაპირ Instagram-ში ან Messenger-ში, როცა თქვენი ოფისი უკვე დაკეტილია.',
        },
        {
          h: 'წერს რამდენიმე სააგენტოს ერთდროულად',
          p: '«20 ივნისი თავისუფალია? რა ღირს 100 სტუმარზე?» დააზუსტეთ თარიღი, სტუმრების რაოდენობა და ფორმატი, შემდეგ დაგეგმეთ შეთავაზების განხილვის ზარი.',
        },
        {
          h: 'ღონისძიების მოთხოვნას თარიღი და სტუმრების რაოდენობა აკონკრეტებს',
          p: 'ქორწილის ან კორპორაციული საღამოს დაგეგმვისას პირველივე პასუხში დააზუსტეთ თარიღი, სტუმრების რაოდენობა და ფორმატი, შემდეგ კი შესაბამისი შეთავაზების მომზადება და ზარი დაგეგმეთ.',
        },
      ],
      stepsTitle: 'როგორ მუშაობს',
      steps: [
        {
          h: 'პასუხობს შეთანხმებული წესებით',
          p: 'Messenger, Instagram, WhatsApp, Telegram და საიტის ვიჯეტი. ქართულად, რუსულად და ინგლისურად, ავტომატურად ცნობს ენას.',
        },
        {
          h: 'თარიღსა და პაკეტზე კითხვას სწორად უმკლავდება',
          p: 'აღწერს თქვენს რეალურ პაკეტებს სტუმრების რაოდენობით და კონსულტაციაზე იწვევს. იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ფასთა შუალედებს; უცნობ კითხვას დასაზუსტებლად ადამიანს გადასცემს.',
        },
        {
          h: 'აგროვებს ჯავშნის დეტალებს',
          p: 'ღონისძიების ტიპი, სასურველი თარიღი, სტუმრების რაოდენობა, სახელი, ტელეფონი. სურვილისამებრ წინასწარი ჯავშნით.',
        },
        {
          h: 'დილით მენეჯერი ადასტურებს',
          p: 'ყველა ღამის მიმართვა ერთ სიაშია. მენეჯერი რეკავს, ამოწმებს თარიღს და პაკეტს კლიენტთან ერთად არჩევს.',
        },
      ],
      honestyTitle: 'რას არ აკეთებს',
      honestyLead: 'ნდობა კონკრეტიკაზე დგას, ამიტომ პირდაპირ ვამბობთ:',
      honesty: [
        { h: 'იყენებს დადასტურებულ ინფორმაციას', p: 'უცნობ დეტალს გუნდი აზუსტებს.' },
        {
          h: 'თვითონ არ ადასტურებს თარიღს',
          p: 'ჯავშანი ყოველთვის წინასწარია, თარიღის თავისუფლებას და საბოლოო პაკეტს მენეჯერი ადასტურებს. თქვენი კალენდარი თქვენს ხელში რჩება.',
        },
        {
          h: 'რთულ ორგანიზებას ადამიანს გადასცემს',
          p: 'დეტალური სცენარი, ხელშეკრულება, უჩვეულო თხოვნა: ასეთ დროს ბოტი ნომერს იღებს და საქმეს მენეჯერს გადასცემს, თვითონ ორგანიზებას არ იჩემებს.',
        },
      ],
      proofStat: 'თქვენი წესები',
      proofStatLabel: 'დამტკიცებულ ინფორმაციაზე მორგებული',
      proofNote: 'რეალური შედეგი ბიზნესისა და მისი ინფორმაციის მიხედვით იცვლება: ასისტენტი მუშაობს დამტკიცებული მასალითა და შეთანხმებული გადაცემის წესებით, ხოლო გამოყენებას შეთანხმებული საცდელი რეჟიმის შემდეგ ვზომავთ.',
      channelsLabel: 'არხები: Messenger · Instagram · WhatsApp · Telegram · საიტის ვიჯეტი',
      pilotTitle: 'საჭიროების შემთხვევაში, ჩრდილოვანი დაკვირვება თქვენი სააგენტოსთვის',
      pilotPoints: [
        'პირველ ეტაპზე ვამოწმებთ თქვენ მიერ მოწოდებულ ინფორმაციასა და შეთანხმებულ წესებს; ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული.',
        'საჭიროების შემთხვევაში, ორკვირიანი ჩრდილოვანი დაკვირვება შეთანხმებით ტარდება თქვენს Instagram-სა და Messenger-ზე — შეტყობინებების გაგზავნის გარეშე.',
        'ჩრდილოვანი დაკვირვება მხოლოდ შეფასებისთვისაა და თავისთავად არ ნიშნავს საჯარო ჩართვას ან კომერციული პირობების დადასტურებას.',
      ],
      pilotNote: 'საწყისი შეთანხმება აღწერს საჭირო ინფორმაციას, არხებსა და გადაცემის წესებს; კომერციული პირობები მხოლოდ ცალკე დადასტურების შემდეგ მოქმედებს.',
      faqTitle: 'ხშირი კითხვები',
      faq: [
        {
          q: 'რამდენ ხანში ეშვება ასისტენტი ღონისძიებების სააგენტოსთვის?',
          a: 'ვადა შეთანხმებულ მოცულობაზეა დამოკიდებული: გვჭირდება სერვისების სია, პაკეტები და სამუშაო გრაფიკი; შემდეგ წარმომადგენლობით დიალოგებში ვამოწმებთ პასუხებსა და გადაცემის წესებს.',
        },
        {
          q: 'ესმის ქართული და რუსული?',
          a: 'დიახ. ასისტენტი თავისუფლად საუბრობს ქართულად, რუსულად და ინგლისურად, ენას ავტომატურად ცნობს და კლიენტს იმავე ენაზე პასუხობს.',
        },
        {
          q: 'რა ხდება, როცა კლიენტი თარიღსა და ფასს ეკითხება?',
          a: 'ბოტი აღწერს თქვენს პაკეტებს სტუმრების რაოდენობით და კონსულტაციაზე იწვევს ზუსტი შეთავაზებისთვის. თარიღის თავისუფლებას მენეჯერი ამოწმებს, ბოტი კი იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ციფრებსა და შუალედებს; უცნობ საკითხს ადამიანი აზუსტებს.',
        },
        {
          q: 'ჩაანაცვლებს მენეჯერს?',
a: 'არა. ის ფარავს იმ საათებს, როცა მენეჯერი ფიზიკურად ვერ პასუხობს: ღამე, შაბათ-კვირა, პიკის საათები. საბოლოო დადასტურება და ცოცხალი ურთიერთობა ადამიანთან რჩება.',
        },
        {
          q: 'რა ღირს?',
          a: 'დამოკიდებულია არხების რაოდენობასა და მიმართვების მოცულობაზე. ჯერ გაჩვენებთ ცოცხალ დემოს თქვენი სააგენტოს მაგალითზე, შემდეგ კი ზუსტ პირობებს ერთ გვერდზე მიიღებთ. დემო არანაირ ვალდებულებას არ გაკისრებთ.',
        },
      ],
      article: {
        sections: [
          {
            h: 'AI ჩატბოტი ღონისძიებებისთვის: რატომ სწორედ ახლა',
            p: "ქორწილს, დაბადების დღეს ან კორპორატივს ადამიანები საღამოს გეგმავენ, სამუშაო საათების შემდეგ. ისინი წერენ Instagram-სა და Messenger-ში და პასუხს წუთებში ელოდებიან, განსაკუთრებით თარიღზე. შეთანხმებული ჩართვის შემდეგ AI ჩატბოტი ღონისძიებების სააგენტოსთვის მხოლოდ თქვენ მიერ დადასტურებული ინფორმაციით ღამითაც პასუხობს და რთულ საკითხს გუნდს გადასცემს. თბილისში ღონისძიებების ბაზარი გადატვირთულია და პოპულარული თარიღები სწრაფად იკავება.",
          },
          {
            h: 'ჯავშანი და არა უბრალოდ მიმოწერა',
            p: "მთავარი განსხვავება მარტივ ჩატბოტსა და ღონისძიებების ასისტენტს შორის ჯავშნის ლოგიკაა. ასისტენტი აგროვებს ინფორმაციას ღონისძიების ტიპის, სასურველი თარიღის, სტუმრების რაოდენობის, სახელისა და ტელეფონის შესახებ, ქმნის წინასწარ ჯავშანს და დილით მენეჯერს გადასცემს დასადასტურებლად. ასე სააგენტოს კალენდარი ადამიანის კონტროლქვეშ რჩება, ბოტი კი მოთხოვნას აფიქსირებს და შეთანხმებული წესით გუნდს გადასცემს.",
          },
          {
            h: 'ზუსტი პასუხები თარიღსა და პაკეტებზე',
            p: 'ღონისძიებების სფეროში დაუშვებელია, ბოტმა თარიღის თავისუფლება დაადასტუროს ან ფასი გამოიგონოს. სწორად აწყობილი ასისტენტი მხოლოდ სააგენტოს მიწოდებულ ინფორმაციას იყენებს, პაკეტებზე სტუმრების რაოდენობით პასუხობს, თარიღისა და დეტალური ორგანიზების საკითხს კი მაშინვე მენეჯერს გადასცემს. ეს მიდგომა კლიენტისთვის გამჭვირვალეა, სააგენტოსთვის კი რეპუტაციულად მშვიდი.',
          },
        ],
        aeoH: 'რას აკეთებს AI ასისტენტი ღონისძიებების სააგენტოსთვის?',
        aeoBody:
          'AI ასისტენტი ღონისძიებების სააგენტოსთვის არის ჩატბოტი, რომელიც კლიენტების შეტყობინებებს პასუხობს Messenger-ში, Instagram-ში, WhatsApp-სა და საიტზე, დღე-ღამის ნებისმიერ დროს. ის აღწერს ქორწილის, დაბადების დღისა და კორპორატიული პაკეტების პირობებს სტუმრების რაოდენობით, კლიენტს კონსულტაციაზე იწვევს, იწერს ღონისძიების ტიპს, თარიღს, სახელსა და ნომერს, ქმნის წინასწარ ჯავშანს და დილით მენეჯერს გადასცემს. ის არ ადასტურებს თარიღის თავისუფლებას, იყენებს მხოლოდ თქვენ მიერ დადასტურებულ ინფორმაციას; უცნობ დეტალს გუნდი აზუსტებს. სააგენტოსთვის შედეგი მარტივია: საღამოს და შაბათ-კვირის მიმართვები შეთანხმებული წესით გადაეცემა გუნდს.',
      },
      linksTitle: 'ვრცლად ბლოგში',
      links: [
        { slug: 'ai-lead-capture-automation-guide', label: 'ლიდების ავტომატური აღრიცხვა: გზამკვლევი' },
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Instagram DM-ების ავტომატიზაცია ჩატბოტით' },
      ],
      ctaLead: 'ნახეთ, როგორ უპასუხებს თქვენს კლიენტებს. დემო შეთანხმებული ინფორმაციისა და წესების მიხედვით.',
      ctaButton: 'მოითხოვეთ დემო',
    },
    en: {
      title: 'AI chatbot for event and wedding agencies: booking 24/7',
      description:
        'AI assistant for event and wedding agencies in Tbilisi. Answers clients at night, checks the date and hands it to your manager.',
      eyebrow: 'AI assistant for event agencies',
      h1: 'Sunday, 22:40. A couple is writing about the engagement venue.',
      h1Accent: 'Anuki has already replied.',
      lead: 'A couple plans an engagement or wedding at night, when the office is closed. The AI assistant collects the event type, date, guest count, name and phone, then hands the proposal request to the manager.',
      ctaDemo: 'Try the live demo',
      ctaPilot: 'Request an evaluation',
      chatName: 'Anuki',
      chatRole: 'Zeimi, demo agency assistant',
      chatGreeting: 'Hi, I am Anuki, the Zeimi assistant. Date, venue or package, I reply at any hour and can pencil you in for a consultation.',
      chatPlaceholder: 'Ask about a date, venue or package...',
      chatChips: ['Is the hall free on September 27?', 'Does the hall hold 150 guests?', 'We are planning an engagement, we need decor and music'],
      chatNote: 'This is an illustrative channel and booking example: before customer-facing activation is agreed, replies will use only your confirmed information and rules. Prices shown here are illustrative business examples, not aiCHATS plan prices.',
      painTitle: 'Where an event agency loses clients',
      pains: [
        { h: 'Clients choose an agency in the evening', p: 'After work, from the phone. They write straight into Instagram or Messenger, when your office is already closed.' },
        { h: 'They message several agencies at once', p: '"Is June 20 free? How much for 100 guests?" Clarify the date, guest count and format, then prepare a proposal and schedule a call.' },
        { h: 'An event request needs a date and guest count', p: 'For a wedding or corporate evening, clarify the date, guest count and format first, then prepare the relevant proposal and schedule a call.' },
      ],
      stepsTitle: 'How it works',
      steps: [
        { h: 'Replies from approved information', p: 'Messenger, Instagram, WhatsApp, Telegram and the site widget. Georgian, Russian and English, language auto-detected.' },
        { h: 'Handles the date and package question correctly', p: 'Describes your real packages by guest count and invites to a consultation. It uses only approved information; unlisted details are confirmed by your team.' },
        { h: 'Collects the booking', p: 'Event type, preferred date, guest count, name, phone. With an optional provisional slot.' },
        { h: 'Your manager confirms in the morning', p: 'Every night inquiry lands in one list. The manager calls, checks the date and picks the package together with the client.' },
      ],
      honestyTitle: 'What it does not do',
      honestyLead: 'Trust is built on specifics, so we say it plainly:',
      honesty: [
        { h: 'Uses approved price information', p: 'It answers only from the packages you provided. On an unknown question it honestly says the manager will clarify.' },
        { h: 'It does not confirm the date by itself', p: 'A booking is always provisional; date availability and the final package are confirmed by your manager. Your calendar stays in your hands.' },
        { h: 'It hands complex organization to a human', p: 'Detailed scenario, contract, special requests: the bot takes a phone number and passes the case to a person. It does not take the organizing on itself.' },
      ],
      proofStat: 'Your rules',
      proofStatLabel: 'built from approved information',
      proofNote: 'Actual results depend on the business and its information: the assistant works from approved content and agreed handoff rules, and usage is measured after a scoped test.',
      channelsLabel: 'Channels: Messenger · Instagram · WhatsApp · Telegram · site widget',
      pilotTitle: 'Optional shadow observation on your agency',
      pilotPoints: [
        'We prepare the test environment from your approved information and agreed rules; timing depends on scope.',
        'If useful, we can run a two-week shadow observation on your Instagram and Messenger by agreement, without sending messages.',
        'Shadow observation is for review only; it does not itself activate public messaging or confirm commercial terms.',
      ],
      pilotNote: 'The initial scope records the needed information, channels and handoff rules; commercial terms apply only after separate confirmation.',
      faqTitle: 'Frequent questions',
      faq: [
        { q: 'How fast can the assistant go live for an event agency?', a: 'Timing depends on the agreed scope: we need your service list, packages and working hours; then we review representative conversations and handoff rules.' },
        { q: 'Does it understand Georgian and Russian?', a: 'Yes. The assistant speaks Georgian, Russian and English, detects the language automatically and replies in kind.' },
        { q: 'What happens when a client asks about the date and price?', a: 'The bot describes your packages by guest count and invites the client to a consultation for the exact offer. Date availability is checked by the manager, and the bot uses only approved information; unlisted details are confirmed by the team.' },
        { q: 'Does it replace the manager?', a: 'No. It catches the hours a human physically cannot cover: nights, weekends, peak load. Final confirmation and the live relationship stay with your team.' },
        { q: 'How much does it cost?', a: 'It depends on the channels and inquiry volume. First we show a live demo on your agency, then you get exact terms on one page. The demo commits you to nothing.' },
      ],
      article: {
        sections: [
          {
            h: 'AI chatbot for event agencies: why right now',
            p: "People plan a wedding, birthday or corporate event in the evening, after working hours. They write on Instagram and Messenger and expect an answer in minutes, especially about the date. After the agreed activation, the AI chatbot for an event agency can answer at night using only the information you approve and hand complex requests to the team. The event market in Tbilisi is crowded and popular dates get taken fast.",
          },
          {
            h: 'A booking, not just a chat',
            p: "The main difference between a simple chatbot and an event assistant is the booking logic. The assistant gathers the event type, preferred date, guest count, name and phone, creates a provisional booking and hands it to the manager in the morning to confirm. This keeps the agency calendar under human control, while the bot only organizes the request and hands it to the team under agreed rules.",
          },
          {
            h: 'Precise answers on dates and packages',
            p: 'In the event field the bot must never confirm date availability or invent a price. A well-tuned assistant uses only the information the agency provided, answers on packages by guest count, and passes the date and any detailed organization straight to the manager. This approach is transparent for the client and reputationally calm for the agency.',
          },
        ],
        aeoH: 'What does the AI assistant for an event agency do?',
        aeoBody:
          'The AI assistant for an event agency is a chatbot that answers client messages on Messenger, Instagram, WhatsApp and the website, at any time of day or night. It describes the terms of wedding, birthday and corporate packages by guest count, invites the client to a consultation, records the event type, date, name and number, creates a provisional booking and hands it to the manager in the morning. It does not confirm date availability, uses only approved information; unlisted details are confirmed by the team. For the agency the result is simple: evening and weekend inquiries can be routed to the team under agreed rules.',
      },
      linksTitle: 'More in the blog',
      links: [
        { slug: 'ai-lead-capture-automation-guide', label: 'Lead capture automation: the guide' },
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Instagram DM automation with a chatbot' },
      ],
      ctaLead: 'See it answer your own clients. A demo is reviewed against agreed information and rules.',
      ctaButton: 'Request a demo',
    },
    ru: {
      title: 'AI-чатбот для агентств праздников и свадеб: бронь 24/7',
      description:
        'AI-ассистент для агентств по организации праздников и свадеб в Тбилиси. Отвечает клиентам ночью, проверяет дату и передаёт менеджеру.',
      eyebrow: 'AI-ассистент для организации праздников',
      h1: 'Воскресенье, 22:40. Пара пишет про зал для помолвки.',
      h1Accent: 'Ануки уже ответила.',
      lead: 'Пара планирует помолвку или свадьбу ночью, когда офис закрыт. AI-ассистент собирает тип события, дату, число гостей, имя и номер, затем передаёт запрос на предложение менеджеру.',
      ctaDemo: 'Попробовать живое демо',
      ctaPilot: 'Запросить оценку',
      chatName: 'Ануки',
      chatRole: 'Зеими, ассистент демо-агентства',
      chatGreeting: 'Здравствуйте, я Ануки, ассистент Зеими. Дата, зал или пакет, отвечу в любой час и запишу на консультацию.',
      chatPlaceholder: 'Спросите про дату, зал или пакет...',
      chatChips: ['Зал свободен 27 сентября?', 'Зал вмещает 150 гостей?', 'Планируем помолвку, нужен декор и музыка'],
      chatNote: 'Это демонстрационный пример канала и записи: до согласованного включения для клиентов ответы будут опираться только на подтверждённую вами информацию и правила. Указанные цены — примеры для бизнеса, а не цены планов aiCHATS.',
      painTitle: 'Где агентство теряет клиентов',
      pains: [
        { h: 'Клиент выбирает агентство вечером', p: 'После работы, с телефона. Пишет сразу в Instagram или Messenger, когда ваш офис уже закрыт.' },
        { h: 'Пишет в несколько агентств одновременно', p: '«20 июня свободно? Сколько на 100 гостей?» Уточните дату, число гостей и формат, затем подготовьте предложение и назначьте звонок.' },
        { h: 'Запрос на мероприятие уточняет дату и число гостей', p: 'Для свадьбы или корпоративного вечера сначала уточните дату, число гостей и формат, затем подготовьте подходящее предложение и назначьте звонок.' },
      ],
      stepsTitle: 'Как это работает',
      steps: [
        { h: 'Отвечает по согласованным правилам', p: 'Messenger, Instagram, WhatsApp, Telegram и виджет на сайте. Грузинский, русский, английский, язык определяется автоматически.' },
        { h: 'Правильно держит вопрос о дате и пакете', p: 'Описывает ваши реальные пакеты по числу гостей и приглашает на консультацию. Никогда работает только по утверждённой информации; неизвестные детали уточняет команда.' },
        { h: 'Собирает бронь', p: 'Тип события, желаемая дата, число гостей, имя, телефон. По желанию с предварительным слотом.' },
        { h: 'Утром менеджер подтверждает', p: 'Все ночные обращения в одном списке. Менеджер звонит, проверяет дату и подбирает пакет вместе с клиентом.' },
      ],
      honestyTitle: 'Чего он не делает',
      honestyLead: 'Доверие строится на конкретике, поэтому говорим прямо:',
      honesty: [
        { h: 'Работает по утверждённой информации', p: 'Неизвестные детали уточняет команда.' },
        { h: 'Не подтверждает дату сам', p: 'Бронь всегда предварительная, свободу даты и финальный пакет подтверждает менеджер. Ваш календарь остаётся в ваших руках.' },
        { h: 'Сложную организацию передаёт человеку', p: 'Детальный сценарий, договор, особые просьбы: бот берёт номер и передаёт случай человеку. Саму организацию на себя не берёт.' },
      ],
      proofStat: 'Ваши правила',
      proofStatLabel: 'на утверждённой информации',
      proofNote: 'Фактический результат зависит от бизнеса и его информации: ассистент работает по утверждённым материалам и согласованным правилам передачи, а использование измеряется после согласованной проверки.',
      channelsLabel: 'Каналы: Messenger · Instagram · WhatsApp · Telegram · виджет на сайте',
      pilotTitle: 'Теневое наблюдение при необходимости для вашего агентства',
      pilotPoints: [
        'Тестовую среду готовим по утверждённой информации и согласованным правилам; сроки зависят от объёма.',
        'При необходимости по договорённости проводим двухнедельное теневое наблюдение в вашем Instagram и Messenger без отправки сообщений.',
        'Теневое наблюдение нужно только для проверки; оно само по себе не включает публичные сообщения и не подтверждает коммерческие условия.',
      ],
      pilotNote: 'Начальный объём фиксирует нужную информацию, каналы и правила передачи; коммерческие условия действуют только после отдельного подтверждения.',
      faqTitle: 'Частые вопросы',
      faq: [
        { q: 'Как быстро ассистент запускается для агентства праздников?', a: 'Сроки зависят от согласованного объёма: нужны список услуг, пакеты и график работы; затем мы проверяем ответы и правила передачи на тестовых диалогах.' },
        { q: 'Поймёт по-грузински и по-русски?', a: 'Да. Ассистент свободно говорит по-грузински, по-русски и по-английски, определяет язык автоматически и отвечает на нём же.' },
        { q: 'Что происходит, когда клиент спрашивает про дату и цену?', a: 'Бот описывает ваши пакеты по числу гостей и приглашает клиента на консультацию за точным предложением. Свободу даты проверяет менеджер, а цифру, которую вы не утверждали, бот называет только утверждённые диапазоны; неизвестную цифру уточняет команда.' },
        { q: 'Он заменит менеджера?', a: 'Нет. Он ловит часы, которые человек физически не закрывает: ночь, выходные, пиковую нагрузку. Финальное подтверждение и живое общение остаются за вашей командой.' },
        { q: 'Сколько это стоит?', a: 'Зависит от каналов и объёма обращений. Сначала показываем живое демо на вашем агентстве, затем вы получаете точные условия на одной странице. Демо ни к чему не обязывает.' },
      ],
      article: {
        sections: [
          {
            h: 'AI-чатбот для агентств праздников: почему именно сейчас',
            p: "Свадьбу, день рождения или корпоратив люди планируют вечером, после рабочих часов. Они пишут в Instagram и Messenger и ждут ответа за минуты, особенно про дату. После согласованного включения AI-чатбот для агентства праздников отвечает ночью только по утверждённой информации и передаёт сложные запросы команде. Рынок праздников в Тбилиси перегружен, а популярные даты занимаются быстро.",
          },
          {
            h: 'Бронь, а не просто переписка',
            p: "Главное отличие простого чатбота от ассистента праздников это логика брони. Ассистент собирает тип события, желаемую дату, число гостей, имя и телефон, создаёт предварительную бронь и утром передаёт менеджеру на подтверждение. Так календарь агентства остаётся под контролем человека, а бот фиксирует запрос и передаёт его команде по согласованным правилам.",
          },
          {
            h: 'Точные ответы про даты и пакеты',
            p: 'В сфере праздников недопустимо, чтобы бот подтверждал свободу даты или выдумывал цену. Правильно настроенный ассистент использует только переданную агентством информацию, отвечает про пакеты по числу гостей, а вопрос даты и детальной организации сразу передаёт менеджеру. Такой подход прозрачен для клиента и репутационно спокоен для агентства.',
          },
        ],
        aeoH: 'Что делает AI-ассистент для агентства праздников?',
        aeoBody:
          "AI-ассистент для агентства праздников это чатбот, который отвечает на сообщения клиентов в Messenger, Instagram, WhatsApp и на сайте в любое время суток. Он описывает условия свадебных, детских и корпоративных пакетов по числу гостей, приглашает клиента на консультацию, записывает тип события, дату, имя и номер, создаёт предварительную бронь и утром передаёт менеджеру. Он не подтверждает свободу даты, работает только по утверждённой информации; неизвестные детали уточняет команда. Для агентства вечерние и выходные обращения можно передавать команде по согласованным правилам; итог подтверждает менеджер.",
      },
      linksTitle: 'Подробнее в блоге',
      links: [
        { slug: 'ai-lead-capture-automation-guide', label: 'Автоматический сбор лидов: гид' },
        { slug: 'instagram-dm-automation-chatbot-guide', label: 'Автоматизация Instagram Direct чатботом' },
      ],
      ctaLead: 'Посмотрите, как он ответит вашим клиентам. Демо проверяется по согласованной информации и правилам.',
      ctaButton: 'Запросить демо',
    },
  },
};
