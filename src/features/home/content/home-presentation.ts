export type HomeLocale = 'ka' | 'en' | 'ru' | 'de' | 'tr' | 'fa' | 'zh';

export type HomePresentation = {
  outcomes: {
    label: string;
    heading: string;
    description: string;
    items: readonly { title: string; description: string }[];
  };
  compare: {
    label: string;
    heading: string;
    description: string;
    beforeLabel: string;
    afterLabel: string;
    rows: readonly { before: string; after: string }[];
  };
  products: {
    label: string;
    heading: string;
    description: string;
    coordinator: string;
  };
  results: {
    label: string;
    heading: string;
    description: string;
    demoLabel: string;
  };
  reviews: {
    label: string;
    heading: string;
    description: string;
    link: string;
    count: string;
  };
  cases: {
    label: string;
    heading: string;
    description: string;
    link: string;
    method: string;
  };
  team: {
    label: string;
    heading: string;
    description: string;
    members: readonly { name: string; role: string; bio: string }[];
  };
  faq: { label: string; heading: string; description: string };
  cta: {
    label: string;
    heading: string;
    description: string;
    button: string;
  };
  demo: {
    label: string;
    illustrative: string;
    online: string;
    owner: string;
    understood: string;
    replay: string;
    inspect: string;
    result: string;
    products: readonly { name: 'CONTENT' | 'ADS' | 'CHATS'; role: string; done: string }[];
  };
};

export const HOME_PRESENTATION: Record<HomeLocale, HomePresentation> = {
  ka: {
    outcomes: {
      label: 'მარტივი მართვა',
      heading: 'ერთი მოთხოვნა. კონტროლი თქვენთან რჩება.',
      description: 'თქვენ აღწერთ მიზანს, iAI ანაწილებს საქმეს და შედეგს ერთ ეკრანზე გაჩვენებთ.',
      items: [
        { title: 'ერთი მოთხოვნა', description: 'უთხარით iAI-ს ჩვეულებრივი სიტყვებით, რა სჭირდება ბიზნესს.' },
        { title: 'დადასტურება მოქმედებამდე', description: 'iAI გაჩვენებთ მომზადებულ ნაბიჯს და მოქმედებას მხოლოდ თქვენი დადასტურების შემდეგ იწყებს.' },
        { title: 'ერთი შედეგების ეკრანი', description: 'კონტენტის, რეკლამისა და კლიენტებთან მუშაობის შედეგებს ერთ ადგილას ხედავთ.' },
      ],
    },
    compare: {
      label: 'რა იცვლება', heading: 'საქმე დღეს და iAI-სთან', description: 'ნაკლები გადაცემა, მეტი კონტროლი და ერთი საერთო სურათი.',
      beforeLabel: 'დღეს', afterLabel: 'aiNOW-სთან',
      rows: [
        { before: 'დავალებას სხვადასხვა ადამიანს უხსნით', after: 'ერთ მოთხოვნას iAI ანაწილებს' },
        { before: 'მოქმედება შეიძლება შემოწმების გარეშე დაიწყოს', after: 'ჯერ ამოწმებთ და ადასტურებთ' },
        { before: 'შედეგები სხვადასხვა ადგილასაა', after: 'ყველაფერი ერთ ეკრანზე ჩანს' },
      ],
    },
    products: {
      label: 'როგორ მუშაობს', heading: 'ერთი კოორდინატორი. სამი სამუშაო პროდუქტი.',
      description: 'თითოეული პროდუქტი თავის საქმეს ასრულებს, iAI კი მათ ერთ პროცესად აერთიანებს.',
      coordinator: 'iAI ბიზნესის ენაზე ნათქვამ დავალებას იგებს და გადასცემს aiCONTENT-ს, aiADS-სა და aiCHATS-ს. თქვენ აკონტროლებთ თითოეულ ნაბიჯს.',
    },
    results: { label: 'შედეგები', heading: 'ყველა შედეგი ერთ ეკრანზე', description: 'ნახეთ, რა მომზადდა, რა დადასტურდა და რა შედეგი მიიღო ბიზნესმა.', demoLabel: 'სადემონსტრაციო მონაცემები' },
    reviews: { label: 'შეფასებები', heading: 'რას ამბობენ ჩვენი კლიენტები', description: 'კლიენტების გამოცდილება aiNOW-სთან მუშაობის შესახებ.', link: 'ყველა შეფასება Google-ზე', count: 'შეფასება Google-ზე' },
    cases: { label: 'საქმეები', heading: 'როგორ ვაგვარებთ ბიზნესის ამოცანებს', description: 'კონკრეტული პრობლემა, შესრულებული სამუშაო და მიღებული შედეგი.', link: 'ყველა ქეისი', method: 'გაზომვის მეთოდი' },
    team: {
      label: 'გუნდი', heading: 'ვინ მართავს aiNOW-ს', description: 'ბიზნესის ხედვა და ტექნიკური შესრულება ერთ გუნდში.',
      members: [
        { name: 'Andrew Altair', role: 'დამფუძნებელი · CEO', bio: 'ადგენს ბიზნესის მიზანს, პროდუქტების მიმართულებასა და შედეგის სტანდარტს.' },
      ],
    },
    faq: { label: 'FAQ', heading: 'ხშირი კითხვები', description: 'პირდაპირი პასუხები დაწყების, ვადებისა და მართვის შესახებ.' },
    cta: { label: 'დავიწყოთ', heading: 'აჩვენეთ, რა სჭირდება თქვენს ბიზნესს', description: 'aiNOW მოამზადებს გასაგებ დემოს თქვენი ამოცანის მიხედვით.', button: 'მოითხოვეთ დემო' },
    demo: {
      label: 'ცოცხალი მაგალითი', illustrative: 'სადემონსტრაციო სცენარი', online: 'აქტიურია', owner: 'ბიზნესის მფლობელი', understood: 'iAI-მ დავალება გაიგო', replay: 'თავიდან', inspect: 'დააჭირეთ ნაბიჯს დეტალების სანახავად', result: 'მზადაა დასადასტურებლად',
      products: [
        { name: 'CONTENT', role: 'ამზადებს პოსტს', done: 'პოსტი მზადაა' },
        { name: 'ADS', role: 'აწყობს კამპანიას', done: 'კამპანია მზადაა' },
        { name: 'CHATS', role: 'ამზადებს პასუხებს', done: 'პასუხის წესი მზადაა' },
      ],
    },
  },
  en: {
    outcomes: {
      label: 'Simple control', heading: 'One request. You stay in control.', description: 'You describe the goal, iAI assigns the work and shows the result on one screen.',
      items: [
        { title: 'One request', description: 'Tell iAI what the business needs in everyday language.' },
        { title: 'Approval before action', description: 'iAI shows you the prepared step and acts only after your approval.' },
        { title: 'One result screen', description: 'See content, advertising and customer work results in one place.' },
      ],
    },
    compare: {
      label: 'What changes', heading: 'Today and with iAI', description: 'Fewer handoffs, more control and one shared view.', beforeLabel: 'Today', afterLabel: 'With aiNOW',
      rows: [
        { before: 'You explain the task to different people', after: 'iAI assigns one request' },
        { before: 'Work can start without your review', after: 'You review and approve first' },
        { before: 'Results are spread across different places', after: 'Everything appears on one screen' },
      ],
    },
    products: { label: 'How it works', heading: 'One coordinator. Three working products.', description: 'Each product handles its own job while iAI connects them into one process.', coordinator: 'iAI understands your business request and sends it to aiCONTENT, aiADS and aiCHATS. You control every step.' },
    results: { label: 'Results', heading: 'Every result on one screen', description: 'See what was prepared, what you approved and what the business received.', demoLabel: 'Illustrative demo data' },
    reviews: { label: 'Reviews', heading: 'What our clients say', description: 'Client experiences of working with aiNOW.', link: 'See all reviews on Google', count: 'reviews on Google' },
    cases: { label: 'Cases', heading: 'How we solve business tasks', description: 'The business problem, the work completed and the resulting outcome.', link: 'See all cases', method: 'Measurement method' },
    team: {
      label: 'Team', heading: 'Who leads aiNOW', description: 'Business direction and technical delivery in one team.',
      members: [
        { name: 'Andrew Altair', role: 'Founder · CEO', bio: 'Sets the business goal, product direction and quality bar for every result.' },
      ],
    },
    faq: { label: 'FAQ', heading: 'Common questions', description: 'Direct answers about setup, timing and control.' },
    cta: { label: 'Start', heading: 'Show us what your business needs', description: 'aiNOW will prepare a clear demo around your task.', button: 'Request a demo' },
    demo: {
      label: 'Live example', illustrative: 'Illustrative scenario', online: 'online', owner: 'Business owner', understood: 'iAI understood the request', replay: 'Replay', inspect: 'Select a step to inspect it', result: 'Ready for approval',
      products: [
        { name: 'CONTENT', role: 'Prepares the post', done: 'Post is ready' },
        { name: 'ADS', role: 'Builds the campaign', done: 'Campaign is ready' },
        { name: 'CHATS', role: 'Prepares replies', done: 'Reply rule is ready' },
      ],
    },
  },
  ru: {
    outcomes: {
      label: 'Простое управление', heading: 'Один запрос. Контроль остаётся у вас.', description: 'Вы описываете цель, iAI распределяет работу и показывает результат на одном экране.',
      items: [
        { title: 'Один запрос', description: 'Расскажите iAI обычными словами, что нужно бизнесу.' },
        { title: 'Подтверждение до действия', description: 'iAI показывает подготовленный шаг и действует только после вашего подтверждения.' },
        { title: 'Один экран результатов', description: 'Результаты контента, рекламы и работы с клиентами видны в одном месте.' },
      ],
    },
    compare: {
      label: 'Что меняется', heading: 'Сегодня и с iAI', description: 'Меньше передач между людьми, больше контроля и одна общая картина.', beforeLabel: 'Сегодня', afterLabel: 'С aiNOW',
      rows: [
        { before: 'Задачу приходится объяснять разным людям', after: 'iAI распределяет один запрос' },
        { before: 'Работа может начаться без вашей проверки', after: 'Сначала вы проверяете и подтверждаете' },
        { before: 'Результаты находятся в разных местах', after: 'Всё видно на одном экране' },
      ],
    },
    products: { label: 'Как это работает', heading: 'Один координатор. Три рабочих продукта.', description: 'Каждый продукт выполняет свою задачу, а iAI объединяет их в один процесс.', coordinator: 'iAI понимает задачу на языке бизнеса и передаёт её aiCONTENT, aiADS и aiCHATS. Вы контролируете каждый шаг.' },
    results: { label: 'Результаты', heading: 'Все результаты на одном экране', description: 'Смотрите, что подготовлено, что подтверждено и какой результат получил бизнес.', demoLabel: 'Демонстрационные данные' },
    reviews: { label: 'Отзывы', heading: 'Что говорят наши клиенты', description: 'Опыт клиентов, которые работали с aiNOW.', link: 'Все отзывы в Google', count: 'отзывов в Google' },
    cases: { label: 'Кейсы', heading: 'Как мы решаем задачи бизнеса', description: 'Конкретная проблема, выполненная работа и полученный результат.', link: 'Все кейсы', method: 'Методика измерения' },
    team: {
      label: 'Команда', heading: 'Кто управляет aiNOW', description: 'Бизнес-направление и техническая реализация в одной команде.',
      members: [
        { name: 'Andrew Altair', role: 'Основатель · CEO', bio: 'Задаёт бизнес-цель, направление продуктов и стандарт качества результата.' },
      ],
    },
    faq: { label: 'FAQ', heading: 'Частые вопросы', description: 'Прямые ответы о запуске, сроках и управлении.' },
    cta: { label: 'Начнём', heading: 'Покажите, что нужно вашему бизнесу', description: 'aiNOW подготовит понятное демо под вашу задачу.', button: 'Запросить демо' },
    demo: {
      label: 'Живой пример', illustrative: 'Демонстрационный сценарий', online: 'активен', owner: 'Владелец бизнеса', understood: 'iAI понял задачу', replay: 'Повторить', inspect: 'Нажмите на шаг, чтобы посмотреть детали', result: 'Готово к подтверждению',
      products: [
        { name: 'CONTENT', role: 'Готовит пост', done: 'Пост готов' },
        { name: 'ADS', role: 'Собирает кампанию', done: 'Кампания готова' },
        { name: 'CHATS', role: 'Готовит ответы', done: 'Правило ответа готово' },
      ],
    },
  },
  de: {
    outcomes: {
      label: 'Einfache Steuerung', heading: 'Ein Auftrag. Die Kontrolle bleibt bei Ihnen.', description: 'Sie beschreiben das Ziel, iAI verteilt die Arbeit und zeigt das Ergebnis auf einem Bildschirm.',
      items: [
        { title: 'Ein Auftrag', description: 'Sagen Sie iAI in einfachen Worten, was Ihr Unternehmen braucht.' },
        { title: 'Freigabe vor der Ausführung', description: 'iAI zeigt Ihnen den vorbereiteten Schritt und führt ihn erst nach Ihrer Freigabe aus.' },
        { title: 'Ein Ergebnisbildschirm', description: 'Ergebnisse aus Inhalten, Werbung und Kundenarbeit erscheinen an einem Ort.' },
      ],
    },
    compare: {
      label: 'Was sich ändert', heading: 'Heute und mit iAI', description: 'Weniger Übergaben, mehr Kontrolle und eine gemeinsame Übersicht.', beforeLabel: 'Heute', afterLabel: 'Mit aiNOW',
      rows: [
        { before: 'Sie erklären die Aufgabe mehreren Personen', after: 'iAI verteilt einen Auftrag' },
        { before: 'Die Arbeit kann ohne Ihre Prüfung beginnen', after: 'Sie prüfen und bestätigen zuerst' },
        { before: 'Ergebnisse liegen an verschiedenen Orten', after: 'Alles erscheint auf einem Bildschirm' },
      ],
    },
    products: { label: 'So funktioniert es', heading: 'Ein Koordinator. Drei arbeitende Produkte.', description: 'Jedes Produkt übernimmt seine Aufgabe, während iAI alles zu einem Prozess verbindet.', coordinator: 'iAI versteht Ihre geschäftliche Anfrage und leitet sie an aiCONTENT, aiADS und aiCHATS weiter. Sie kontrollieren jeden Schritt.' },
    results: { label: 'Ergebnisse', heading: 'Alle Ergebnisse auf einem Bildschirm', description: 'Sehen Sie, was vorbereitet, freigegeben und für das Unternehmen erreicht wurde.', demoLabel: 'Beispielhafte Demodaten' },
    reviews: { label: 'Bewertungen', heading: 'Was unsere Kunden sagen', description: 'Erfahrungen von Kunden aus der Zusammenarbeit mit aiNOW.', link: 'Alle Google-Bewertungen', count: 'Google-Bewertungen' },
    cases: { label: 'Projekte', heading: 'Wie wir Geschäftsaufgaben lösen', description: 'Das konkrete Problem, die ausgeführte Arbeit und das erzielte Ergebnis.', link: 'Alle Projekte', method: 'Messmethode' },
    team: {
      label: 'Team', heading: 'Wer aiNOW leitet', description: 'Geschäftliche Richtung und technische Umsetzung in einem Team.',
      members: [
        { name: 'Andrew Altair', role: 'Gründer · CEO', bio: 'Definiert Geschäftsziel, Produktrichtung und Qualitätsstandard der Ergebnisse.' },
      ],
    },
    faq: { label: 'FAQ', heading: 'Häufige Fragen', description: 'Klare Antworten zu Start, Zeitplan und Kontrolle.' },
    cta: { label: 'Start', heading: 'Zeigen Sie uns, was Ihr Unternehmen braucht', description: 'aiNOW erstellt eine verständliche Demo für Ihre Aufgabe.', button: 'Demo anfragen' },
    demo: {
      label: 'Live-Beispiel', illustrative: 'Beispielszenario', online: 'aktiv', owner: 'Unternehmensinhaber', understood: 'iAI hat die Aufgabe verstanden', replay: 'Wiederholen', inspect: 'Wählen Sie einen Schritt für Details', result: 'Bereit zur Freigabe',
      products: [
        { name: 'CONTENT', role: 'Erstellt den Beitrag', done: 'Beitrag ist fertig' },
        { name: 'ADS', role: 'Baut die Kampagne', done: 'Kampagne ist fertig' },
        { name: 'CHATS', role: 'Bereitet Antworten vor', done: 'Antwortregel ist fertig' },
      ],
    },
  },
  tr: {
    outcomes: {
      label: 'Kolay yönetim', heading: 'Tek talep. Kontrol sizde kalır.', description: 'Siz hedefi anlatırsınız, iAI işi dağıtır ve sonucu tek ekranda gösterir.',
      items: [
        { title: 'Tek talep', description: "İşletmenizin neye ihtiyacı olduğunu iAI'ye günlük dille anlatın." },
        { title: 'İşlem öncesi onay', description: 'iAI hazırlanan adımı gösterir ve yalnızca onayınızdan sonra uygular.' },
        { title: 'Tek sonuç ekranı', description: 'İçerik, reklam ve müşteri çalışmalarının sonuçlarını tek yerde görün.' },
      ],
    },
    compare: {
      label: 'Ne değişir', heading: 'Bugün ve iAI ile', description: 'Daha az aktarım, daha fazla kontrol ve tek bir genel görünüm.', beforeLabel: 'Bugün', afterLabel: 'aiNOW ile',
      rows: [
        { before: 'Görevi farklı kişilere anlatırsınız', after: 'iAI tek talebi dağıtır' },
        { before: 'İş, kontrolünüz olmadan başlayabilir', after: 'Önce siz inceler ve onaylarsınız' },
        { before: 'Sonuçlar farklı yerlerde bulunur', after: 'Her şey tek ekranda görünür' },
      ],
    },
    products: { label: 'Nasıl çalışır', heading: 'Tek koordinatör. Üç çalışan ürün.', description: 'Her ürün kendi görevini yapar, iAI ise hepsini tek süreçte birleştirir.', coordinator: "iAI işletme dilindeki talebinizi anlar ve aiCONTENT, aiADS ile aiCHATS'a iletir. Her adımı siz kontrol edersiniz." },
    results: { label: 'Sonuçlar', heading: 'Tüm sonuçlar tek ekranda', description: 'Neyin hazırlandığını, neyi onayladığınızı ve işletmenin hangi sonucu aldığını görün.', demoLabel: 'Örnek demo verileri' },
    reviews: { label: 'Yorumlar', heading: 'Müşterilerimiz ne söylüyor', description: 'aiNOW ile çalışan müşterilerin deneyimleri.', link: "Google'daki tüm yorumlar", count: 'Google yorumu' },
    cases: { label: 'Projeler', heading: 'İşletme sorunlarını nasıl çözüyoruz', description: 'Somut sorun, tamamlanan çalışma ve elde edilen sonuç.', link: 'Tüm projeler', method: 'Ölçüm yöntemi' },
    team: {
      label: 'Ekip', heading: "aiNOW'u kim yönetiyor", description: 'İş yönü ve teknik uygulama tek ekipte.',
      members: [
        { name: 'Andrew Altair', role: 'Kurucu · CEO', bio: 'İş hedefini, ürün yönünü ve sonuçlar için kalite standardını belirler.' },
      ],
    },
    faq: { label: 'FAQ', heading: 'Sık sorulan sorular', description: 'Başlangıç, süre ve kontrol hakkında net yanıtlar.' },
    cta: { label: 'Başlayalım', heading: 'İşletmenizin neye ihtiyacı olduğunu gösterin', description: 'aiNOW görevinize uygun, anlaşılır bir demo hazırlayacak.', button: 'Demo isteyin' },
    demo: {
      label: 'Canlı örnek', illustrative: 'Örnek senaryo', online: 'aktif', owner: 'İşletme sahibi', understood: 'iAI talebi anladı', replay: 'Tekrarla', inspect: 'Ayrıntı için bir adım seçin', result: 'Onaya hazır',
      products: [
        { name: 'CONTENT', role: 'Gönderiyi hazırlar', done: 'Gönderi hazır' },
        { name: 'ADS', role: 'Kampanyayı kurar', done: 'Kampanya hazır' },
        { name: 'CHATS', role: 'Yanıtları hazırlar', done: 'Yanıt kuralı hazır' },
      ],
    },
  },
  fa: {
    outcomes: {
      label: 'مدیریت ساده', heading: 'یک درخواست. کنترل در دست شما می‌ماند.', description: 'شما هدف را توضیح می‌دهید، iAI کار را تقسیم می‌کند و نتیجه را در یک صفحه نشان می‌دهد.',
      items: [
        { title: 'یک درخواست', description: 'با زبان روزمره به iAI بگویید کسب‌وکار شما به چه چیزی نیاز دارد.' },
        { title: 'تأیید پیش از اجرا', description: 'iAI مرحله آماده‌شده را نشان می‌دهد و تنها پس از تأیید شما آن را اجرا می‌کند.' },
        { title: 'یک صفحه برای نتایج', description: 'نتایج محتوا، تبلیغات و ارتباط با مشتری را در یک جا ببینید.' },
      ],
    },
    compare: {
      label: 'چه چیزی تغییر می‌کند', heading: 'امروز و با iAI', description: 'ارجاع کمتر، کنترل بیشتر و یک نمای مشترک.', beforeLabel: 'امروز', afterLabel: 'با aiNOW',
      rows: [
        { before: 'کار را برای افراد مختلف توضیح می‌دهید', after: 'iAI یک درخواست را تقسیم می‌کند' },
        { before: 'کار ممکن است بدون بررسی شما آغاز شود', after: 'ابتدا شما بررسی و تأیید می‌کنید' },
        { before: 'نتایج در جاهای مختلف هستند', after: 'همه چیز در یک صفحه دیده می‌شود' },
      ],
    },
    products: { label: 'روش کار', heading: 'یک هماهنگ‌کننده. سه محصول کاری.', description: 'هر محصول کار خودش را انجام می‌دهد و iAI آن‌ها را در یک فرایند هماهنگ می‌کند.', coordinator: 'iAI درخواست کسب‌وکار شما را می‌فهمد و آن را به aiCONTENT، aiADS و aiCHATS می‌سپارد. کنترل هر مرحله در دست شماست.' },
    results: { label: 'نتایج', heading: 'همه نتایج در یک صفحه', description: 'ببینید چه چیزی آماده شده، چه چیزی را تأیید کرده‌اید و کسب‌وکار چه نتیجه‌ای گرفته است.', demoLabel: 'داده‌های نمونه برای دمو' },
    reviews: { label: 'نظر مشتریان', heading: 'مشتریان ما چه می‌گویند', description: 'تجربه مشتریان از همکاری با aiNOW.', link: 'همه نظرها در Google', count: 'نظر در Google' },
    cases: { label: 'پروژه‌ها', heading: 'چگونه مسائل کسب‌وکار را حل می‌کنیم', description: 'مسئله مشخص، کار انجام‌شده و نتیجه به‌دست‌آمده.', link: 'همه پروژه‌ها', method: 'روش اندازه‌گیری' },
    team: {
      label: 'تیم', heading: 'چه کسانی aiNOW را مدیریت می‌کنند', description: 'مسیر کسب‌وکار و اجرای فنی در یک تیم.',
      members: [
        { name: 'Andrew Altair', role: 'بنیان‌گذار · مدیرعامل', bio: 'هدف کسب‌وکار، مسیر محصول و معیار کیفیت نتیجه را تعیین می‌کند.' },
      ],
    },
    faq: { label: 'FAQ', heading: 'پرسش‌های رایج', description: 'پاسخ‌های روشن درباره شروع، زمان‌بندی و کنترل.' },
    cta: { label: 'شروع کنیم', heading: 'نشان دهید کسب‌وکار شما به چه چیزی نیاز دارد', description: 'aiNOW یک دموی روشن و متناسب با درخواست شما آماده می‌کند.', button: 'درخواست دمو' },
    demo: {
      label: 'نمونه زنده', illustrative: 'سناریوی نمونه', online: 'فعال', owner: 'صاحب کسب‌وکار', understood: 'iAI درخواست را فهمید', replay: 'تکرار', inspect: 'برای دیدن جزئیات یک مرحله را انتخاب کنید', result: 'آماده تأیید',
      products: [
        { name: 'CONTENT', role: 'پست را آماده می‌کند', done: 'پست آماده است' },
        { name: 'ADS', role: 'کمپین را می‌سازد', done: 'کمپین آماده است' },
        { name: 'CHATS', role: 'پاسخ‌ها را آماده می‌کند', done: 'قاعده پاسخ آماده است' },
      ],
    },
  },
  zh: {
    outcomes: {
      label: '简单管理', heading: '一个要求，控制权始终在你手中。', description: '你说明目标，iAI分配工作，并在一个屏幕上展示结果。',
      items: [
        { title: '一个要求', description: '用日常语言告诉iAI你的业务需要什么。' },
        { title: '执行前确认', description: 'iAI先展示准备好的步骤，得到你的确认后再执行。' },
        { title: '一个结果屏幕', description: '在一个地方查看内容、广告和客户沟通的结果。' },
      ],
    },
    compare: {
      label: '发生什么变化', heading: '现在与使用iAI之后', description: '减少转交，增加控制，并获得统一视图。', beforeLabel: '现在', afterLabel: '使用aiNOW后',
      rows: [
        { before: '你需要向不同的人解释任务', after: 'iAI分配一个要求' },
        { before: '工作可能未经你检查就开始', after: '你先检查并确认' },
        { before: '结果分散在不同地方', after: '所有结果都在一个屏幕上' },
      ],
    },
    products: { label: '工作方式', heading: '一个协调系统，三个执行产品。', description: '每个产品负责自己的工作，iAI把它们连接成一个流程。', coordinator: 'iAI理解你的业务要求，并把任务交给aiCONTENT、aiADS和aiCHATS。每一步都由你控制。' },
    results: { label: '结果', heading: '所有结果都在一个屏幕上', description: '查看准备了什么、确认了什么，以及业务获得了什么结果。', demoLabel: '演示示例数据' },
    reviews: { label: '客户评价', heading: '我们的客户怎么说', description: '客户与aiNOW合作后的真实体验。', link: '查看所有Google评价', count: '条Google评价' },
    cases: { label: '案例', heading: '我们如何解决业务问题', description: '具体问题、完成的工作和最终结果。', link: '查看所有案例', method: '衡量方法' },
    team: {
      label: '团队', heading: '谁在管理aiNOW', description: '业务方向和技术交付由同一团队负责。',
      members: [
        { name: 'Andrew Altair', role: '创始人 · 首席执行官', bio: '负责业务目标、产品方向和结果质量标准。' },
      ],
    },
    faq: { label: 'FAQ', heading: '常见问题', description: '关于开始、时间和控制方式的直接回答。' },
    cta: { label: '开始', heading: '告诉我们你的业务需要什么', description: 'aiNOW会围绕你的任务准备清晰的演示。', button: '申请演示' },
    demo: {
      label: '实时示例', illustrative: '演示场景', online: '在线', owner: '企业主', understood: 'iAI已理解任务', replay: '重新播放', inspect: '选择一个步骤查看详情', result: '等待确认',
      products: [
        { name: 'CONTENT', role: '准备帖子', done: '帖子已准备' },
        { name: 'ADS', role: '设置广告活动', done: '广告活动已准备' },
        { name: 'CHATS', role: '准备回复', done: '回复规则已准备' },
      ],
    },
  },
};

export function getHomePresentation(locale: string): HomePresentation {
  return HOME_PRESENTATION[(locale in HOME_PRESENTATION ? locale : 'en') as HomeLocale];
}
