import type { Project } from "../types/project.types";

// Anonymized NDA cases for the aiNOW portfolio. Client names, domains and staff
// are withheld; every metric is rounded and given as a range so no client can be
// identified. Copy is result-first (no model SKUs), the stack is Georgian-market,
// and each object carries real ru / ka / en (no placeholder duplicates).

export const anonymousCases: Project[] = [
  {
    slug: "kids-ecommerce-size-assistant",
    name: "Kids clothing e-commerce: AI size assistant",
    title: {
      ru: "Магазин детской одежды: AI-консультант по размерам",
      ka: "ბავშვთა ტანსაცმლის მაღაზია: AI კონსულტანტი ზომებში",
      en: "Kids clothing store: AI size assistant",
    },
    category: "ecommerce",
    categoryLabel: { ru: "E-commerce", ka: "ე-კომერცია", en: "E-commerce" },
    summary: {
      ru: "Интернет-магазин детской одежды с большим вечерним трафиком не справлялся с потоком одинаковых вопросов о размерах: пять операторов работали посменно, а в час пик клиент ждал ответа до 40 минут и нередко уходил к конкурентам. Мы собрали AI-ассистента в WhatsApp, который понимает живые вопросы, подбирает модели по росту и возрасту и сам заводит заявку в CRM. Рутинные обращения почти полностью закрываются ботом, ответ приходит за секунды, а конверсия из чата в корзину подросла.",
      ka: "ბავშვთა ტანსაცმლის ონლაინ-მაღაზია დიდი საღამოს ტრაფიკით ვერ უმკლავდებოდა ზომების ერთგვაროვანი კითხვების ნაკადს: ხუთი ოპერატორი ცვლებში მუშაობდა, პიკის საათში კი კლიენტი პასუხს 40 წუთამდე ელოდებოდა და ხშირად კონკურენტებთან მიდიოდა. ჩვენ შევქმენით AI ასისტენტი WhatsApp-ში, რომელსაც ესმის ცოცხალი კითხვები, არჩევს მოდელებს სიმაღლისა და ასაკის მიხედვით და თავად ქმნის განაცხადს CRM-ში. რუტინული მიმართვები თითქმის მთლიანად ბოტზე იხურება, პასუხი წამებში მოდის, ჩატიდან კალათაში კონვერსია კი გაიზარდა.",
      en: "An online kids clothing store with heavy evening traffic could not keep up with a stream of identical size questions: five operators worked in shifts, and at peak a customer waited up to 40 minutes for a reply and often left for a competitor. We built an AI assistant in WhatsApp that understands natural questions, matches models by height and age and files the order into the CRM itself. Routine requests are almost fully closed by the bot, replies arrive in seconds, and chat to cart conversion went up.",
    },
    metrics: [
      {
        label: { ru: "Время ответа", ka: "პასუხის დრო", en: "Reply time" },
        before: { ru: "до 40 минут", ka: "40 წუთამდე", en: "up to 40 minutes" },
        after: { ru: "секунды", ka: "წამები", en: "seconds" },
      },
      {
        label: { ru: "Рутина о размерах", ka: "რუტინა ზომებზე", en: "Routine size questions" },
        before: { ru: "на операторах", ka: "ოპერატორებზე", en: "on the operators" },
        after: { ru: "~60% на боте", ka: "~60% ბოტზე", en: "~60% on the bot" },
      },
      {
        label: { ru: "Конверсия в корзину", ka: "კონვერსია კალათაში", en: "Cart conversion" },
        before: { ru: "ниже из-за ожидания", ka: "ლოდინის გამო დაბალი", en: "lower from waiting" },
        after: { ru: "+~15%", ka: "+~15%", en: "+~15%" },
      },
    ],
    slogan: {
      ru: "Подбор размеров по росту и возрасту, круглосуточно в WhatsApp",
      ka: "ზომების შერჩევა სიმაღლისა და ასაკის მიხედვით, 24/7 WhatsApp-ში",
      en: "Size matching by height and age, 24/7 in WhatsApp",
    },
    description: {
      ru: "AI-ассистент подбирает детскую одежду по росту и возрасту и передаёт готовую заявку в CRM, снимая с операторов рутинные вопросы о размерах.",
      ka: "AI ასისტენტი არჩევს ბავშვთა ტანსაცმელს სიმაღლისა და ასაკის მიხედვით და გადასცემს მზა განაცხადს CRM-ს, ათავისუფლებს ოპერატორებს ზომებზე რუტინული კითხვებისგან.",
      en: "An AI assistant matches kids clothing by height and age and passes a ready order into the CRM, taking routine size questions off the operators.",
    },
    techStack: ["WhatsApp Business API", "Bitrix24", "RAG", "Google Sheets"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Интернет-магазин детской одежды с трафиком около 60 тысяч визитов в месяц и широким ассортиментом от нескольких десятков брендов. Продажи идут в основном через мессенджеры, и вечером, когда родители освобождаются после работы, поток обращений вырастал в несколько раз. Пять операторов работали посменно, но не успевали за пиком: в самые загруженные часы клиент ждал первого ответа до 40 минут, и часть покупателей просто закрывала чат.",
        ka: "ბავშვთა ტანსაცმლის ონლაინ-მაღაზია თვეში დაახლოებით 60 ათასი ვიზიტითა და რამდენიმე ათეული ბრენდის ფართო ასორტიმენტით. გაყიდვები ძირითადად მესენჯერებით მიდის და საღამოს, როცა მშობლები სამსახურის შემდეგ თავისუფლდებიან, მიმართვების ნაკადი რამდენჯერმე იზრდებოდა. ხუთი ოპერატორი ცვლებში მუშაობდა, მაგრამ პიკს ვერ ასწრებდა: ყველაზე დატვირთულ საათებში კლიენტი პირველ პასუხს 40 წუთამდე ელოდებოდა და მყიდველების ნაწილი უბრალოდ ხურავდა ჩატს.",
        en: "An online kids clothing store with about 60 thousand visits a month and a wide range from several dozen brands. Sales run mostly through messengers, and in the evening, when parents are free after work, the flow of requests grew several times over. Five operators worked in shifts but could not keep up with the peak: in the busiest hours a customer waited up to 40 minutes for a first reply, and some buyers simply closed the chat.",
      },
      diagnostic: {
        ru: "Мы разобрали переписку за полтора месяца и увидели, что больше половины сообщений это один и тот же вопрос: подойдёт ли размер по росту и возрасту ребёнка. Родители путались, потому что у разных брендов размерные сетки не совпадают, и переспрашивали снова и снова. Заметная доля рабочего времени уходила ещё и на ручной перенос контактов и заказов в CRM, а из-за долгого ожидания часть тёплых клиентов утекала к конкурентам.",
        ka: "ჩვენ გავარჩიეთ მიმოწერა თვენახევრის განმავლობაში და დავინახეთ, რომ შეტყობინებების ნახევარზე მეტი ერთი და იგივე კითხვაა: მოერგება თუ არა ზომა ბავშვის სიმაღლესა და ასაკს. მშობლები ებნეოდნენ, რადგან სხვადასხვა ბრენდის ზომების ბადეები არ ემთხვევა, და თავიდან ეკითხებოდნენ. სამუშაო დროის შესამჩნევი ნაწილი კონტაქტებისა და შეკვეთების CRM-ში ხელით გადატანასაც ხმარდებოდა, ხანგრძლივი ლოდინის გამო კი თბილი კლიენტების ნაწილი კონკურენტებთან გადიოდა.",
        en: "We reviewed a month and a half of correspondence and saw that more than half of the messages were the same question: will the size fit the child by height and age. Parents got confused because size grids differ between brands, and they asked again and again. A noticeable share of working time also went to manually copying contacts and orders into the CRM, and because of the long wait some warm clients drifted to competitors.",
      },
      problem: {
        ru: "Простые кнопочные боты здесь только раздражали: родителю нужен совет живого продавца, а не меню из вариантов. Задача была научить ассистента понимать свободные формулировки вроде «сыну пять лет, рост метр десять, что взять на осень» и отвечать конкретной моделью, а не общими словами. При этом он должен держать в голове различия размерных сеток брендов, видеть остатки на складе и ни в коем случае не выдумывать наличие, которого нет.",
        ka: "მარტივი ღილაკებიანი ბოტები აქ მხოლოდ აღიზიანებდა: მშობელს ცოცხალი გამყიდვლის რჩევა სჭირდება და არა ვარიანტების მენიუ. ამოცანა იყო გვესწავლებინა ასისტენტისთვის თავისუფალი ფორმულირებების გაგება, მაგალითად «ვაჟი ხუთი წლისაა, სიმაღლე მეტრ და ათი, რა ავიღო შემოდგომაზე», და პასუხი კონკრეტული მოდელით გაეცა და არა ზოგადი სიტყვებით. ამასთან მას უნდა ახსოვდეს ბრენდების ზომების ბადეების განსხვავება, ხედავდეს მარაგს საწყობში და არავითარ შემთხვევაში არ იგონებდეს ნაშთს, რომელიც არ არსებობს.",
        en: "Simple button bots only irritated people here: a parent needs advice from a real seller, not a menu of options. The task was to teach the assistant to understand free-form wording like my son is five, height one meter ten, what should I take for autumn and reply with a specific model rather than generic words. At the same time it has to keep brand size grids in mind, see stock levels and never invent availability that does not exist.",
      },
      solution: {
        ru: "Мы собрали AI-ассистента в WhatsApp, который понимает вопросы на обычном языке и советует конкретные модели с небольшим запасом на рост, сверяясь с базой размеров и текущими остатками. Он подсказывает размер по бренду, предлагает аналоги, если позиции нет, и сам заводит собранную заявку в CRM без ручного копирования. Тон задан примерами из реальной переписки магазина, поэтому ответы звучат по-человечески. В сложных случаях, например при возврате оплаты, диалог мягко уходит оператору.",
        ka: "ჩვენ შევქმენით AI ასისტენტი WhatsApp-ში, რომელსაც ესმის კითხვები ჩვეულებრივ ენაზე და გირჩევთ კონკრეტულ მოდელებს მცირე მარაგით ზრდისთვის, ზომებისა და მიმდინარე ნაშთების ბაზასთან შედარებით. ის გეუბნებათ ზომას ბრენდის მიხედვით, გთავაზობთ ანალოგებს, თუ პოზიცია არ არის, და თავად შეაქვს შეკრებილი განაცხადი CRM-ში ხელით კოპირების გარეშე. ტონი მოცემულია მაღაზიის რეალური მიმოწერის მაგალითებით, ამიტომ პასუხები ადამიანურად ჟღერს. რთულ შემთხვევებში, მაგალითად თანხის დაბრუნებისას, დიალოგი რბილად გადადის ოპერატორთან.",
        en: "We built an AI assistant in WhatsApp that understands questions in plain language and recommends specific models with a little room to grow, checking against the size database and current stock. It advises the size by brand, offers alternatives when an item is missing, and files the assembled order into the CRM itself with no manual copying. The tone is set by examples from the store real chats, so answers sound human. In hard cases, such as a refund, the dialog moves to an operator gently.",
      },
      steps: {
        ru: "Запуск занял около пяти недель. Сначала выгрузили историю диалогов и собрали из неё частые вопросы и формулировки родителей. Затем построили базу соответствия размеров по каждому бренду и связали её с остатками на складе. Отдельно проработали границы: где ассистент отвечает сам, а где обязан позвать человека. После этого обкатали формулировки на части трафика, поправили тон по живым диалогам и только потом вывели ассистента на весь поток обращений.",
        ka: "გაშვებას დაახლოებით ხუთი კვირა დასჭირდა. ჯერ გადმოვწერეთ დიალოგების ისტორია და მისგან შევკრიბეთ მშობლების ხშირი კითხვები და ფორმულირებები. შემდეგ ავაგეთ ზომების შესაბამისობის ბაზა თითოეული ბრენდისთვის და დავუკავშირეთ საწყობის ნაშთებს. ცალკე დავამუშავეთ საზღვრები: სად პასუხობს ასისტენტი თავად და სად ევალება ადამიანის მოწვევა. ამის შემდეგ ფორმულირებები გავტესტეთ ტრაფიკის ნაწილზე, ცოცხალი დიალოგებით გავასწორეთ ტონი და მხოლოდ მერე გავიტანეთ ასისტენტი მიმართვების მთელ ნაკადზე.",
        en: "The launch took about five weeks. First we exported the dialog history and gathered the frequent questions and parent phrasings from it. Then we built a size matching database for each brand and linked it to warehouse stock. Separately we worked out the boundaries: where the assistant answers on its own and where it must call a human. After that we ran the wording on part of the traffic, tuned the tone from real dialogs and only then rolled the assistant out to the whole flow of requests.",
      },
      impact: {
        ru: "Сейчас бот сам закрывает около 60 процентов рутинных обращений о размерах, а первый ответ приходит за секунды вместо прежних сорока минут. Ручной перенос заявок в CRM исчез: карточка клиента собирается автоматически. Операторы перестали отвечать на одинаковые вопросы и переключились на сложные случаи и допродажи. Конверсия из чата в корзину подросла примерно на 15 процентов, потому что покупатель получает совет сразу, пока желание купить ещё горячее.",
        ka: "ახლა ბოტი თავად ხურავს ზომებზე რუტინული მიმართვების დაახლოებით 60 პროცენტს, პირველი პასუხი კი წამებში მოდის ადრინდელი ორმოცი წუთის ნაცვლად. განაცხადების CRM-ში ხელით გადატანა გაქრა: კლიენტის ბარათი ავტომატურად იკრიბება. ოპერატორებმა ერთგვაროვან კითხვებზე პასუხი შეწყვიტეს და რთულ შემთხვევებსა და დამატებით გაყიდვებზე გადაერთვნენ. ჩატიდან კალათაში კონვერსია დაახლოებით 15 პროცენტით გაიზარდა, რადგან მყიდველი რჩევას მაშინვე იღებს, სანამ ყიდვის სურვილი ჯერ კიდევ ცხელია.",
        en: "Now the bot closes about 60 percent of routine size requests on its own, and the first reply arrives in seconds instead of the old forty minutes. Manual copying of orders into the CRM is gone: the client card is assembled automatically. Operators stopped answering identical questions and switched to complex cases and upsells. Chat to cart conversion grew by roughly 15 percent, because the buyer gets advice right away, while the urge to buy is still warm.",
      },
      limitations: {
        ru: "Ассистент не решает нестандартные возвраты без чека, споры по качеству вещи и жалобы на доставку. Он не обещает сроков, которых нет на складе, и не придумывает наличие. Как только вопрос выходит за рамки подбора и записи, бот передаёт диалог старшему администратору вместе с историей переписки.",
        ka: "ასისტენტი არ ჭრის არასტანდარტულ დაბრუნებებს ჩეკის გარეშე, ნივთის ხარისხზე დავებსა და მიწოდებაზე საჩივრებს. ის არ ჰპირდება ვადებს, რომლებიც საწყობში არ არის, და არ იგონებს ნაშთს. როგორც კი კითხვა შერჩევისა და ჩაწერის ფარგლებს სცილდება, ბოტი დიალოგს გადასცემს უფროს ადმინისტრატორს მიმოწერის ისტორიასთან ერთად.",
        en: "The assistant does not handle non-standard returns without a receipt, disputes over item quality or delivery complaints. It does not promise timelines that are not in stock and does not invent availability. As soon as a question goes beyond matching and booking, the bot hands the dialog to the senior administrator together with the chat history.",
      },
      methodology: {
        ru: "Сравнивали данные CRM за 30 дней до и 30 дней после полного запуска ассистента: время первого ответа, долю обращений, закрытых без оператора, и конверсию из чата в корзину. Все цифры округлены и приведены диапазонами, чтобы по ним нельзя было вычислить конкретный магазин.",
        ka: "ვადარებდით CRM-ის მონაცემებს ასისტენტის სრულ გაშვებამდე 30 დღისა და მის შემდეგ 30 დღის განმავლობაში: პირველი პასუხის დროს, ოპერატორის გარეშე დახურული მიმართვების წილსა და ჩატიდან კალათაში კონვერსიას. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კონკრეტული მაღაზიის დადგენა ვერ მოხერხდეს.",
        en: "We compared CRM data for 30 days before and 30 days after the full launch of the assistant: first reply time, the share of requests closed without an operator and chat to cart conversion. All figures are rounded and given in ranges so a specific store cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Бренд, домен и имена сотрудников не раскрываем по NDA. Названия мессенджера и таблиц указаны только чтобы показать реальный стек интеграций, а не как реклама. Все показатели округлены и даны в диапазонах, чтобы по ним нельзя было опознать компанию.",
        ka: "ბრენდს, დომენსა და თანამშრომლების სახელებს NDA-ს გამო არ ვამხელთ. მესენჯერისა და ცხრილების სახელები მითითებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. ყველა მაჩვენებელი დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კომპანიის ამოცნობა ვერ მოხერხდეს.",
        en: "We do not disclose the brand, domain or employee names under NDA. The messenger and spreadsheet names are given only to show the real integration stack, not as advertising. All figures are rounded and given in ranges so the company cannot be recognized from them.",
      },
      faq: [
        {
          q: {
            ru: "Как бот учитывает разные бренды?",
            ka: "როგორ ითვალისწინებს ბოტი სხვადასხვა ბრენდს?",
            en: "How does the bot account for different brands?",
          },
          a: {
            ru: "В базу загружены размерные таблицы каждого производителя, поэтому совет по размеру привязан к конкретному бренду, а не усреднён.",
            ka: "ბაზაში ჩატვირთულია თითოეული მწარმოებლის ზომების ცხრილები, ამიტომ ზომის რჩევა კონკრეტულ ბრენდზეა მიბმული და არა გასაშუალოებული.",
            en: "The size charts of each manufacturer are loaded into the database, so the size advice is tied to the specific brand rather than averaged.",
          },
        },
        {
          q: {
            ru: "Что если товара нет в наличии?",
            ka: "რა ხდება, თუ საქონელი მარაგში არ არის?",
            en: "What if an item is out of stock?",
          },
          a: {
            ru: "Бот сразу предлагает близкие аналоги в том же размере и ценовом диапазоне, а не отправляет клиента искать самому.",
            ka: "ბოტი მაშინვე გთავაზობთ ახლო ანალოგებს იმავე ზომასა და ფასების დიაპაზონში და არ აგზავნის კლიენტს დამოუკიდებლად საძებნელად.",
            en: "The bot immediately offers close alternatives in the same size and price range instead of sending the client to search on their own.",
          },
        },
        {
          q: {
            ru: "Когда подключается живой оператор?",
            ka: "როდის ერთვება ცოცხალი ოპერატორი?",
            en: "When does a live operator step in?",
          },
          a: {
            ru: "На возвратах, жалобах и любых нестандартных ситуациях бот сам передаёт диалог оператору вместе с историей переписки.",
            ka: "დაბრუნებებზე, საჩივრებსა და ნებისმიერ არასტანდარტულ სიტუაციაში ბოტი თავად გადასცემს დიალოგს ოპერატორს მიმოწერის ისტორიასთან ერთად.",
            en: "For returns, complaints and any non-standard situations the bot hands the dialog to an operator itself, together with the chat history.",
          },
        },
      ],
    },
  },
  {
    slug: "coffee-chain-catering-requests",
    name: "Coffee chain: B2B catering request automation",
    title: {
      ru: "Сеть кофеен: приём B2B-заявок на кейтеринг",
      ka: "ყავის ქსელი: B2B კეთერინგის განაცხადების მიღება",
      en: "Coffee chain: B2B catering intake",
    },
    category: "cafe",
    categoryLabel: { ru: "Кофейни", ka: "ყავის ქსელი", en: "Coffee" },
    summary: {
      ru: "Городская сеть кофеен с кондитерским цехом теряла крупные B2B-заявки на кейтеринг: их обрабатывали вручную через почту, звонки и мессенджеры, и первый ответ мог занять до трёх часов. Мы собрали AI-ассистента в Telegram и Instagram, который сам квалифицирует запрос, сверяет загрузку цеха и присылает готовую смету. Обработка заявки упала до пары минут, потери в пиковые дни сократились примерно втрое, а менеджеры теперь ведут только тёплые сделки.",
      ka: "ქალაქის ყავის ქსელი კონდიტერული საწარმოთი კარგავდა მსხვილ B2B განაცხადებს კეთერინგზე: მათ ხელით ამუშავებდნენ ფოსტით, ზარებითა და მესენჯერებით, პირველი პასუხი კი სამ საათამდე სჭირდებოდა. ჩვენ შევქმენით AI ასისტენტი Telegram-სა და Instagram-ში, რომელიც თავად ახდენს განაცხადის კვალიფიკაციას, ამოწმებს საწარმოს დატვირთვას და აგზავნის მზა ხარჯთაღრიცხვას. განაცხადის დამუშავება რამდენიმე წუთამდე დაეცა, დანაკარგები პიკურ დღეებში დაახლოებით სამჯერ შემცირდა, მენეჯერები კი ახლა მხოლოდ თბილ გარიგებებს უძღვებიან.",
      en: "A city coffee chain with its own bakery was losing large B2B catering leads: they were handled by hand over email, calls and messengers, and the first reply could take up to three hours. We built an AI assistant on Telegram and Instagram that qualifies the request itself, checks the kitchen load and sends a ready estimate. Request handling dropped to a couple of minutes, losses on peak days fell by about three times, and managers now work only warm deals.",
    },
    metrics: [
      {
        label: { ru: "Время до сметы", ka: "დრო ხარჯთაღრიცხვამდე", en: "Time to estimate" },
        before: { ru: "до 3 часов", ka: "3 საათამდე", en: "up to 3 hours" },
        after: { ru: "пара минут", ka: "რამდენიმე წუთი", en: "a couple of minutes" },
      },
      {
        label: { ru: "Потери заявок в пик", ka: "დაკარგული განაცხადები პიკში", en: "Lost requests at peak" },
        before: { ru: "терялись в праздники", ka: "იკარგებოდა დღესასწაულებზე", en: "lost on holidays" },
        after: { ru: "меньше в ~3 раза", ka: "~3-ჯერ ნაკლები", en: "about 3x fewer" },
      },
      {
        label: { ru: "Работа менеджера", ka: "მენეჯერის სამუშაო", en: "Manager focus" },
        before: { ru: "ручной пресейл", ka: "ხელით პრესეილი", en: "manual pre-sales" },
        after: { ru: "только тёплые сделки", ka: "მხოლოდ თბილი გარიგებები", en: "only warm deals" },
      },
    ],
    slogan: {
      ru: "Квалификация корпоративных заявок и предварительная смета за минуты",
      ka: "კორპორაციული განაცხადების კვალიფიკაცია და წინასწარი ხარჯთაღრიცხვა წუთებში",
      en: "Qualifying corporate requests and a draft estimate in minutes",
    },
    description: {
      ru: "AI-ассистент собирает параметры мероприятия и сразу формирует предварительное меню со сметой, оставляя менеджеру только подтверждение.",
      ka: "AI ასისტენტი აგროვებს ღონისძიების პარამეტრებს და მაშინვე ქმნის წინასწარ მენიუს ხარჯთაღრიცხვით, მენეჯერს მხოლოდ დადასტურებას უტოვებს.",
      en: "An AI assistant collects the event parameters and instantly builds a draft menu with an estimate, leaving the manager only to confirm.",
    },
    techStack: ["Telegram", "Instagram", "Google Sheets", "Make"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Городская сеть из полутора десятков кофеен с собственным кондитерским цехом. Кроме розницы компания активно продаёт офисный кейтеринг, корпоративные завтраки и торты на заказ, и именно эти B2B-заказы приносят самые крупные чеки. Заявки на них приходили вперемешку по всем каналам сразу: почта, Instagram Direct, WhatsApp и звонки на общий номер. Разбирал их фактически один менеджер вручную, и в загруженный день первый ответ клиенту мог занять до трёх часов.",
        ka: "ქალაქის ათ-თხუთმეტამდე ყავის ქსელი საკუთარი კონდიტერული საწარმოთი. საცალო გაყიდვების გარდა კომპანია აქტიურად ყიდის საოფისე კეთერინგს, კორპორაციულ საუზმეებსა და ტორტებს შეკვეთით, სწორედ ეს B2B შეკვეთები იძლევა ყველაზე მსხვილ ჩეკებს. განაცხადები მათზე ერთდროულად ყველა არხით მოდიოდა: ფოსტა, Instagram Direct, WhatsApp და ზარები საერთო ნომერზე. მათ ფაქტობრივად ერთი მენეჯერი არჩევდა ხელით, დატვირთულ დღეს კი კლიენტისთვის პირველი პასუხი სამ საათამდე გრძელდებოდა.",
        en: "A city chain of around a dozen and a half coffee shops with its own bakery. Beyond retail, the company actively sells office catering, corporate breakfasts and custom cakes, and it is exactly these B2B orders that bring the largest tickets. Requests for them arrived mixed across every channel at once: email, Instagram Direct, WhatsApp and calls to a shared number. One manager effectively sorted them by hand, and on a busy day the first reply to a client could take up to three hours.",
      },
      diagnostic: {
        ru: "Мы выгрузили переписку и журнал звонков за полтора месяца и разобрали, куда уходит время. Больше трети рабочего дня менеджера съедала ручная отправка одних и тех же презентаций меню и условий доставки. В праздники, когда заявок втрое больше обычного, линия перегружалась: часть звонков срывалась, а заявки из разных каналов терялись, потому что единого списка просто не было. Каждая упущенная заявка на кейтеринг это не мелочь, а крупный корпоративный чек, ушедший к конкуренту.",
        ka: "ჩვენ გადმოვწერეთ მიმოწერა და ზარების ჟურნალი თვენახევრის განმავლობაში და გავარჩიეთ, სად იხარჯება დრო. მენეჯერის სამუშაო დღის მესამედზე მეტს ჭამდა ერთი და იმავე მენიუს პრეზენტაციებისა და მიწოდების პირობების ხელით გაგზავნა. დღესასწაულებზე, როცა განაცხადები ჩვეულებრივზე სამჯერ მეტია, ხაზი იტვირთებოდა: ზარების ნაწილი წყდებოდა, სხვადასხვა არხის განაცხადები კი იკარგებოდა, რადგან ერთიანი სია უბრალოდ არ არსებობდა. ყოველი გამორჩენილი კეთერინგის განაცხადი წვრილმანი კი არა, კონკურენტთან წასული მსხვილი კორპორაციული ჩეკია.",
        en: "We pulled a month and a half of chats and the call log and broke down where the time went. More than a third of the manager working day was eaten by manually sending the same menu presentations and delivery terms. On holidays, when there are three times as many requests, the line overloaded: some calls dropped and requests from different channels got lost, because there simply was no single list. Every missed catering request is not a trifle but a large corporate ticket that walked to a competitor.",
      },
      problem: {
        ru: "Задача была не «повесить чат-бота для галочки», а закрыть настоящую квалификацию. Ассистент должен сам уточнить дату, формат мероприятия, число гостей и бюджет, свериться с реальной загрузкой цеха и сразу собрать черновую смету, при этом звучать по-человечески и в тоне бренда. В идеале менеджеру остаётся только проверить детали и подтвердить бронь, а не вести всю переписку с нуля.",
        ka: "ამოცანა იყო არა «ჩატბოტის ფორმალურად ჩამოკიდება», არამედ ნამდვილი კვალიფიკაციის დახურვა. ასისტენტმა თავად უნდა დააზუსტოს თარიღი, ღონისძიების ფორმატი, სტუმრების რაოდენობა და ბიუჯეტი, შეადაროს საწარმოს რეალურ დატვირთვას და მაშინვე შეადგინოს ხარჯთაღრიცხვის მონახაზი, ამასთან ჟღერდეს ადამიანურად და ბრენდის ტონში. იდეალურ შემთხვევაში მენეჯერს რჩება მხოლოდ დეტალების შემოწმება და ჯავშნის დადასტურება, და არა მთელი მიმოწერის ნულიდან წარმართვა.",
        en: "The task was not to hang up a chatbot for show, but to close real qualification. The assistant should clarify the date, event format, number of guests and budget itself, check it against the real kitchen load and immediately assemble a draft estimate, while sounding human and on brand. Ideally the manager is left only to check the details and confirm the booking, rather than running the entire conversation from scratch.",
      },
      solution: {
        ru: "Собрали ассистента, который работает в Telegram и Instagram Direct как единая точка входа для B2B. В диалоге он аккуратно собирает параметры мероприятия, обращается к таблице загрузки кондитерского цеха и проверяет, потянет ли команда заказ на нужную дату. Затем формирует персональное предложение с предварительной сметой и, если клиент готов, фиксирует заявку в общей базе и передаёт менеджеру карточку со всеми деталями. Тон общения задан примерами из реальной переписки бренда, поэтому ассистент звучит как живой сотрудник, а не как безликая форма, и не выдумывает цены, которых нет в прайсе.",
        ka: "შევქმენით ასისტენტი, რომელიც მუშაობს Telegram-სა და Instagram Direct-ში როგორც B2B-ის ერთიანი შესვლის წერტილი. დიალოგში ის ფრთხილად აგროვებს ღონისძიების პარამეტრებს, მიმართავს კონდიტერული საწარმოს დატვირთვის ცხრილს და ამოწმებს, გაუძლებს თუ არა გუნდი შეკვეთას საჭირო თარიღზე. შემდეგ ქმნის პერსონალურ შეთავაზებას წინასწარი ხარჯთაღრიცხვით და, თუ კლიენტი მზადაა, აფიქსირებს განაცხადს საერთო ბაზაში და მენეჯერს გადასცემს ბარათს ყველა დეტალით. ურთიერთობის ტონი მოცემულია ბრენდის რეალური მიმოწერის მაგალითებით, ამიტომ ასისტენტი ჟღერს ცოცხალ თანამშრომელივით და არა უსახო ფორმად, და არ იგონებს ფასებს, რომლებიც პრაისში არ არის.",
        en: "We built an assistant that works on Telegram and Instagram Direct as a single entry point for B2B. In the dialog it carefully collects the event parameters, queries the bakery load sheet and checks whether the team can take the order on the requested date. It then builds a personal offer with a preliminary estimate and, if the client is ready, records the request in a shared base and hands the manager a card with all the details. The tone is set by examples from the brand real correspondence, so the assistant sounds like a living employee rather than a faceless form, and it does not invent prices that are not in the price list.",
      },
      steps: {
        ru: "Проект занял около шести недель. Сначала оцифровали меню, тарифы кейтеринга и правила загрузки цеха, чтобы боту было на что опираться. Затем подключили его к таблицам и настроили расчёт предварительной сметы. Отдельную неделю потратили на то, чтобы ограничить «фантазию» ассистента: строгие рамки формулировок, никаких обещаний сверх прайса. После этого обкатали сценарий на части входящих заявок, поправили тон и формулировки по живым диалогам и только затем вывели ассистента на весь поток.",
        ka: "პროექტს დაახლოებით ექვსი კვირა დასჭირდა. ჯერ გავაციფრულეთ მენიუ, კეთერინგის ტარიფები და საწარმოს დატვირთვის წესები, რომ ბოტს რაზე დაყრდნობა ჰქონოდა. შემდეგ დავუკავშირეთ ის ცხრილებს და დავაყენეთ წინასწარი ხარჯთაღრიცხვის გამოთვლა. ცალკე კვირა დავხარჯეთ ასისტენტის «ფანტაზიის» შესაზღუდად: ფორმულირებების მკაცრი ჩარჩო, არანაირი დაპირება პრაისს გარეთ. ამის შემდეგ სცენარი გავტესტეთ შემომავალი განაცხადების ნაწილზე, ცოცხალი დიალოგებით გავასწორეთ ტონი და ფორმულირებები და მხოლოდ მერე გავიტანეთ ასისტენტი მთელ ნაკადზე.",
        en: "The project took about six weeks. First we digitized the menu, catering rates and kitchen load rules so the bot had something to rely on. Then we connected it to the sheets and set up the preliminary estimate calculation. We spent a separate week limiting the assistant imagination: strict wording boundaries and no promises beyond the price list. After that we ran the scenario on part of the incoming requests, tuned the tone and wording from real dialogs and only then rolled the assistant out to the full flow.",
      },
      impact: {
        ru: "После стабилизации ассистент сам ведёт первичную обработку почти всех входящих B2B-заявок. Время от обращения до готовой сметы упало с нескольких часов до пары минут, а доля потерянных заявок в пиковые дни снизилась примерно втрое, потому что всё теперь падает в один список, а не растворяется между каналами. Менеджер перестал работать «разборщиком входящих» и занимается тем, что реально приносит деньги: ведёт тёплые сделки, согласует крупные заказы и развивает партнёрскую сеть. Средний чек по кейтерингу при этом не просел.",
        ka: "სტაბილიზაციის შემდეგ ასისტენტი თავად უძღვება თითქმის ყველა შემომავალი B2B განაცხადის პირველად დამუშავებას. მიმართვიდან მზა ხარჯთაღრიცხვამდე დრო რამდენიმე საათიდან რამდენიმე წუთამდე დაეცა, დაკარგული განაცხადების წილი პიკურ დღეებში კი დაახლოებით სამჯერ შემცირდა, რადგან ყველაფერი ახლა ერთ სიაში ხვდება და არ იფანტება არხებს შორის. მენეჯერმა «შემომავალის დამხარისხებლის» როლი მიატოვა და იმას აკეთებს, რაც ნამდვილად ფულს იძლევა: უძღვება თბილ გარიგებებს, ათანხმებს მსხვილ შეკვეთებს და ავითარებს პარტნიორულ ქსელს. საშუალო ჩეკი კეთერინგზე ამასთან არ დაწეულა.",
        en: "After stabilization the assistant handles the first pass of almost all incoming B2B requests itself. The time from a request to a ready estimate dropped from several hours to a couple of minutes, and the share of lost requests on peak days fell by about three times, because everything now lands in a single list instead of dissolving between channels. The manager stopped being an inbox sorter and does what actually brings money: running warm deals, agreeing large orders and growing the partner network. The average catering ticket, meanwhile, did not drop.",
      },
      limitations: {
        ru: "Ассистент намеренно ограничен в правах. Он не согласовывает скидки выше установленного порога, не решает спорные вопросы по качеству блюд и не подтверждает нестандартные условия доставки. Как только разговор выходит за рамки сценария, бот не импровизирует, а передаёт диалог руководителю направления вместе с полным контекстом переписки, чтобы решение принял человек.",
        ka: "ასისტენტი განზრახ შეზღუდულია უფლებებში. ის არ ათანხმებს დადგენილ ზღვარზე მაღალ ფასდაკლებებს, არ ჭრის კერძების ხარისხზე სადავო საკითხებს და არ ადასტურებს მიწოდების არასტანდარტულ პირობებს. როგორც კი საუბარი სცენარს სცილდება, ბოტი არ იმპროვიზირებს, არამედ დიალოგს გადასცემს მიმართულების ხელმძღვანელს მიმოწერის სრულ კონტექსტთან ერთად, რომ გადაწყვეტილება ადამიანმა მიიღოს.",
        en: "The assistant is deliberately limited in its powers. It does not approve discounts above a set threshold, does not resolve disputes about food quality and does not confirm non-standard delivery terms. As soon as the conversation goes beyond the scenario, the bot does not improvise but hands the dialog to the department head together with the full context of the correspondence, so a human makes the call.",
      },
      methodology: {
        ru: "Оценивали по журналу заявок и данным CRM за шесть недель до запуска и шесть недель после стабилизации. Сравнивали время до первой сметы, долю обработанных заявок и конверсию в оплаченный счёт. Все показатели округлены и приведены в диапазонах, чтобы по ним нельзя было вычислить компанию.",
        ka: "შევაფასეთ განაცხადების ჟურნალითა და CRM-ის მონაცემებით გაშვებამდე ექვსი კვირისა და სტაბილიზაციის შემდეგ ექვსი კვირის განმავლობაში. ვადარებდით პირველ ხარჯთაღრიცხვამდე დროს, დამუშავებული განაცხადების წილსა და გადახდილ ანგარიშში კონვერსიას. ყველა მაჩვენებელი დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კომპანიის დადგენა ვერ მოხერხდეს.",
        en: "We measured from the request log and CRM data for six weeks before launch and six weeks after stabilization. We compared time to first estimate, the share of handled requests and conversion to a paid invoice. All figures are rounded and given in ranges so the company cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название сети, адреса точек и имена сотрудников скрыты по NDA. Торговые марки мессенджеров и таблиц указаны только чтобы показать реальный стек интеграций, а не как реклама. Цифры даны в диапазонах и округлены, чтобы по ним нельзя было вычислить конкретную компанию.",
        ka: "ქსელის სახელი, წერტილების მისამართები და თანამშრომლების სახელები NDA-ს გამო დამალულია. მესენჯერებისა და ცხრილების სავაჭრო ნიშნები მითითებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. ციფრები მოცემულია დიაპაზონებში და დამრგვალებულია, რომ მათით კონკრეტული კომპანიის დადგენა ვერ მოხერხდეს.",
        en: "The chain name, location addresses and employee names are hidden under NDA. The messenger and spreadsheet trademarks are named only to show the real integration stack, not as advertising. The figures are given in ranges and rounded so a specific company cannot be identified from them.",
      },
      faq: [
        {
          q: {
            ru: "Как считается стоимость доставки кейтеринга?",
            ka: "როგორ ითვლება კეთერინგის მიწოდების ღირებულება?",
            en: "How is catering delivery cost calculated?",
          },
          a: {
            ru: "Бот берёт расстояние от цеха до адреса по карте и применяет тарифную сетку компании, поэтому клиент видит предварительную стоимость сразу, без ожидания менеджера.",
            ka: "ბოტი იღებს მანძილს საწარმოდან მისამართამდე რუკით და იყენებს კომპანიის სატარიფო ბადეს, ამიტომ კლიენტი წინასწარ ღირებულებას მაშინვე ხედავს, მენეჯერის მოლოდინის გარეშე.",
            en: "The bot takes the distance from the kitchen to the address on the map and applies the company rate grid, so the client sees the preliminary cost right away, without waiting for a manager.",
          },
        },
        {
          q: {
            ru: "Что если цех перегружен на нужную дату?",
            ka: "რა ხდება, თუ საწარმო დატვირთულია საჭირო თარიღზე?",
            en: "What if the kitchen is overloaded on the requested date?",
          },
          a: {
            ru: "Ассистент видит загрузку по таблице и не обещает невозможного: он предлагает ближайшую свободную дату или альтернативный формат, а спорные случаи передаёт менеджеру.",
            ka: "ასისტენტი ხედავს დატვირთვას ცხრილით და არ ჰპირდება შეუძლებელს: ის სთავაზობს უახლოეს თავისუფალ თარიღს ან ალტერნატიულ ფორმატს, სადავო შემთხვევებს კი მენეჯერს გადასცემს.",
            en: "The assistant sees the load from the sheet and does not promise the impossible: it offers the nearest free date or an alternative format, and passes disputed cases to a manager.",
          },
        },
        {
          q: {
            ru: "Насколько точна предварительная смета?",
            ka: "რამდენად ზუსტია წინასწარი ხარჯთაღრიცხვა?",
            en: "How accurate is the preliminary estimate?",
          },
          a: {
            ru: "Это расчёт по прайсу и параметрам мероприятия, финальную цену подтверждает менеджер после уточнения деталей. Бот не выходит за рамки прайса и не выдумывает цифры.",
            ka: "ეს გამოთვლაა პრაისითა და ღონისძიების პარამეტრებით, საბოლოო ფასს მენეჯერი ადასტურებს დეტალების დაზუსტების შემდეგ. ბოტი პრაისს არ სცილდება და ციფრებს არ იგონებს.",
            en: "It is a calculation from the price list and the event parameters, the final price is confirmed by a manager after clarifying details. The bot stays within the price list and does not invent numbers.",
          },
        },
      ],
    },
  },
  {
    slug: "dental-clinic-booking",
    name: "Dental clinic: 24/7 online booking",
    title: {
      ru: "Стоматология: онлайн-запись без звонков администратору",
      ka: "სტომატოლოგია: ონლაინ ჩაწერა ადმინისტრატორთან ზარის გარეშე",
      en: "Dental clinic: online booking without calls",
    },
    category: "dental",
    categoryLabel: { ru: "Стоматология", ka: "სტომატოლოგია", en: "Dental" },
    summary: {
      ru: "Частная стоматология теряла пациентов вне рабочего дня: заметная часть звонков приходила вечером и в выходные и оставалась без ответа, а администратор в часы приёма разрывался между телефоном и стойкой. Мы подключили AI-ассистента в WhatsApp, который сам предлагает свободные слоты нужного врача, ставит запись в календарь и напоминает о визите. Простая запись и перенос теперь идут без звонка, число первичных записей выросло примерно на четверть за счёт нерабочих часов.",
      ka: "კერძო სტომატოლოგია კარგავდა პაციენტებს სამუშაო დღის გარეთ: ზარების შესამჩნევი ნაწილი საღამოსა და შაბათ-კვირას მოდიოდა და უპასუხოდ რჩებოდა, ადმინისტრატორი კი მიღების საათებში ტელეფონსა და მიმღებს შორის იხლიჩებოდა. ჩვენ დავუკავშირეთ AI ასისტენტი WhatsApp-ში, რომელიც თავად სთავაზობს საჭირო ექიმის თავისუფალ დროს, დებს ჩაწერას კალენდარში და შეახსენებს ვიზიტს. მარტივი ჩაწერა და გადატანა ახლა ზარის გარეშე მიდის, პირველადი ჩაწერების რაოდენობა კი დაახლოებით მეოთხედით გაიზარდა არასამუშაო საათების ხარჯზე.",
      en: "A private dental clinic was losing patients outside the working day: a noticeable share of calls came in the evening and on weekends and went unanswered, while the administrator was torn between the phone and the front desk during appointment hours. We connected an AI assistant in WhatsApp that offers free slots of the needed doctor itself, puts the booking into the calendar and reminds about the visit. Simple booking and rescheduling now go without a call, and first-visit bookings grew by about a quarter thanks to off-hours.",
    },
    metrics: [
      {
        label: { ru: "Обращения вне часов", ka: "მიმართვები არასამუშაო დროს", en: "Off-hours requests" },
        before: { ru: "без ответа", ka: "უპასუხოდ", en: "unanswered" },
        after: { ru: "запись 24/7", ka: "ჩაწერა 24/7", en: "booked 24/7" },
      },
      {
        label: { ru: "Первичные записи", ka: "პირველადი ჩაწერები", en: "First-visit bookings" },
        before: { ru: "только в часы работы", ka: "მხოლოდ სამუშაო საათებში", en: "work hours only" },
        after: { ru: "+~25%", ka: "+~25%", en: "+~25%" },
      },
      {
        label: { ru: "Администратор", ka: "ადმინისტრატორი", en: "Administrator" },
        before: { ru: "телефон и стойка", ka: "ტელეფონი და მიმღები", en: "phone and desk" },
        after: { ru: "меньше рутины", ka: "ნაკლები რუტინა", en: "less routine" },
      },
    ],
    slogan: {
      ru: "Запись на приём 24/7 в WhatsApp с проверкой свободных слотов",
      ka: "მიღებაზე ჩაწერა 24/7 WhatsApp-ში თავისუფალი დროის შემოწმებით",
      en: "24/7 appointment booking in WhatsApp with live slot checks",
    },
    description: {
      ru: "AI-ассистент записывает пациентов на приём, сверяясь с расписанием врачей, и напоминает о визите, разгружая администратора.",
      ka: "AI ასისტენტი წერს პაციენტებს მიღებაზე, ექიმების განრიგთან შედარებით, და შეახსენებს ვიზიტს, ათავისუფლებს ადმინისტრატორს.",
      en: "An AI assistant books patients against the doctors schedule and reminds them of the visit, offloading the administrator.",
    },
    techStack: ["WhatsApp Business API", "Google Calendar", "Custom CRM"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Частная стоматология с несколькими врачами и плотным расписанием приёма. Основной поток пациентов приходил по телефону, и в часы работы линия была занята почти постоянно. При этом заметная доля звонков приходилась на вечер и выходные, когда клиника уже закрыта, и эти обращения просто оставались без ответа. Пациенты не любят подолгу ждать на линии или перезванивать, поэтому часть из них уходила в другую клинику, где ответили быстрее.",
        ka: "კერძო სტომატოლოგია რამდენიმე ექიმითა და მიღების მჭიდრო განრიგით. პაციენტების ძირითადი ნაკადი ტელეფონით მოდიოდა, სამუშაო საათებში კი ხაზი თითქმის მუდმივად დაკავებული იყო. ამასთან ზარების შესამჩნევი წილი საღამოსა და შაბათ-კვირას მოდიოდა, როცა კლინიკა უკვე დაკეტილია, და ეს მიმართვები უბრალოდ უპასუხოდ რჩებოდა. პაციენტებს არ უყვართ ხაზზე ხანგრძლივი ლოდინი ან თავიდან დარეკვა, ამიტომ მათი ნაწილი სხვა კლინიკაში მიდიოდა, სადაც უფრო სწრაფად უპასუხეს.",
        en: "A private dental clinic with several doctors and a tight appointment schedule. The main flow of patients came by phone, and during working hours the line was busy almost constantly. At the same time a noticeable share of calls fell on evenings and weekends, when the clinic is already closed, and those requests simply went unanswered. Patients dislike waiting long on the line or calling back, so some of them left for another clinic that answered faster.",
      },
      diagnostic: {
        ru: "Мы разобрали журнал звонков и записей за месяц и увидели закономерность: около трети всех обращений это простая запись или перенос визита, которые вообще не требуют врача. Такие звонки съедали время администратора именно в самые загруженные часы приёма, когда у стойки уже стоят пациенты. Отдельная проблема это отсутствие напоминаний: без них пациенты забывали о визите, и в расписании оставались пустые окна, которые никто не успевал занять.",
        ka: "ჩვენ გავარჩიეთ ზარებისა და ჩაწერების ჟურნალი ერთი თვის განმავლობაში და დავინახეთ კანონზომიერება: ყველა მიმართვის დაახლოებით მესამედი მარტივი ჩაწერა ან ვიზიტის გადატანაა, რაც ექიმს საერთოდ არ საჭიროებს. ასეთი ზარები ადმინისტრატორის დროს ჭამდა სწორედ მიღების ყველაზე დატვირთულ საათებში, როცა მიმღებთან უკვე დგანან პაციენტები. ცალკე პრობლემა შეხსენებების არარსებობაა: მათ გარეშე პაციენტები ივიწყებდნენ ვიზიტს და განრიგში რჩებოდა ცარიელი ფანჯრები, რომელთა შევსებას ვერავინ ასწრებდა.",
        en: "We reviewed a month of the call and booking log and saw a pattern: about a third of all requests are a simple booking or a visit reschedule that do not need a doctor at all. Such calls ate the administrator time exactly during the busiest appointment hours, when patients are already standing at the desk. A separate problem was the lack of reminders: without them patients forgot about the visit, and empty windows stayed in the schedule that no one managed to fill.",
      },
      problem: {
        ru: "Нужна была запись, доступная в любое время суток, а не только в приёмные часы. Ассистент должен понимать живые формулировки вроде «запишите к терапевту на выходных поближе к обеду» и точно видеть свободные слоты, чтобы не назначить двух пациентов на одно время. Отдельно требовалось развести обычную запись и экстренные случаи: при острой боли человек должен сразу попасть к дежурному врачу, а не проходить длинный сценарий записи.",
      ka: "საჭირო იყო ჩაწერა დღე-ღამის ნებისმიერ დროს და არა მხოლოდ მიღების საათებში. ასისტენტს უნდა ესმოდეს ცოცხალი ფორმულირებები, მაგალითად «ჩამწერეთ თერაპევტთან შაბათ-კვირას შუადღესთან ახლოს» და ზუსტად ხედავდეს თავისუფალ დროს, რომ ორი პაციენტი ერთ დროზე არ დანიშნოს. ცალკე საჭირო იყო ჩვეულებრივი ჩაწერისა და გადაუდებელი შემთხვევების გამიჯვნა: მწვავე ტკივილისას ადამიანი მაშინვე უნდა მოხვდეს მორიგე ექიმთან და არა გაიაროს ჩაწერის გრძელი სცენარი.",
        en: "We needed booking available at any time of day, not only during reception hours. The assistant has to understand natural wording like book me with a therapist on the weekend closer to noon and see the free slots precisely, so it does not put two patients at the same time. Separately we had to split ordinary booking from emergencies: with acute pain a person should reach the on-duty doctor at once, rather than going through a long booking scenario.",
      },
      solution: {
        ru: "Мы подключили AI-ассистента в WhatsApp, который работает как круглосуточная регистратура. Он понимает запрос на обычном языке, сверяется с расписанием и предлагает ближайшие свободные окна нужного врача, а затем сам ставит запись в календарь. Накануне визита пациенту приходит напоминание, а перенести приём можно прямо в том же чате. Признаки острой боли ассистент распознаёт как приоритет и сразу переводит человека на дежурного врача, не задавая лишних вопросов.",
        ka: "ჩვენ დავუკავშირეთ AI ასისტენტი WhatsApp-ში, რომელიც მუშაობს როგორც 24-საათიანი რეგისტრატურა. მას ესმის მოთხოვნა ჩვეულებრივ ენაზე, ადარებს განრიგს და სთავაზობს საჭირო ექიმის უახლოეს თავისუფალ ფანჯრებს, შემდეგ კი თავად დებს ჩაწერას კალენდარში. ვიზიტის წინა დღეს პაციენტს შეხსენება მოსდის, მიღების გადატანა კი იმავე ჩატშივე შეიძლება. მწვავე ტკივილის ნიშნებს ასისტენტი პრიორიტეტად ცნობს და ადამიანს მაშინვე გადაამისამართებს მორიგე ექიმთან, ზედმეტი კითხვების გარეშე.",
        en: "We connected an AI assistant in WhatsApp that works like a round the clock front desk. It understands the request in plain language, checks the schedule and offers the nearest free windows of the needed doctor, and then puts the booking into the calendar itself. The day before the visit the patient gets a reminder, and rescheduling is possible right in the same chat. Signs of acute pain are recognized as priority, and the assistant routes the person to the on-duty doctor at once, without extra questions.",
      },
      steps: {
        ru: "Проект заняли примерно месяц. Сначала выгрузили расписание врачей и правила приёма, чтобы ассистент понимал, какие слоты и какой длительности можно предлагать. Затем настроили логику записи, переноса и напоминаний, а также отдельный приоритетный маршрут для экстренных обращений. Обкатали сценарий на части пациентов, послушали, как звучат ответы, поправили формулировки под тон клиники и только после этого открыли запись через ассистента всем без исключения.",
        ka: "პროექტს დაახლოებით ერთი თვე დასჭირდა. ჯერ გადმოვწერეთ ექიმების განრიგი და მიღების წესები, რომ ასისტენტს გაეგო, რომელი თავისუფალი დრო და რა ხანგრძლივობის ვიზიტი შეიძლება შესთავაზოს. შემდეგ დავაყენეთ ჩაწერის, გადატანისა და შეხსენებების ლოგიკა, ასევე ცალკე პრიორიტეტული მარშრუტი გადაუდებელი მიმართვებისთვის. სცენარი გავტესტეთ პაციენტების ნაწილზე, მოვისმინეთ, როგორ ჟღერს პასუხები, გავასწორეთ ფორმულირებები კლინიკის ტონზე და მხოლოდ ამის შემდეგ გავუხსენით ჩაწერა ასისტენტით ყველას გამონაკლისის გარეშე.",
        en: "The project took about a month. First we exported the doctors schedule and reception rules so the assistant understood which slots and of what duration it could offer. Then we set up the logic of booking, rescheduling and reminders, plus a separate priority route for emergencies. We ran the scenario on some patients, listened to how the answers sounded, tuned the wording to the clinic tone and only after that opened booking through the assistant to everyone without exception.",
      },
      impact: {
        ru: "Простая запись и перенос визита теперь идут без единого звонка, в любое время суток. Число первичных записей выросло примерно на четверть, и почти весь этот рост пришёл из вечеров и выходных, которые раньше просто терялись. Напоминания накануне заметно сократили забытые визиты, и пустых окон в расписании стало меньше. Администратор перестал разрываться между телефоном и стойкой и занимается пациентами в кабинете, а не сортировкой одинаковых звонков.",
        ka: "მარტივი ჩაწერა და ვიზიტის გადატანა ახლა ერთი ზარის გარეშე მიდის, დღე-ღამის ნებისმიერ დროს. პირველადი ჩაწერების რაოდენობა დაახლოებით მეოთხედით გაიზარდა და ამ ზრდის თითქმის მთელი ნაწილი საღამოებიდან და შაბათ-კვირიდან მოვიდა, რომლებიც ადრე უბრალოდ იკარგებოდა. წინა დღის შეხსენებებმა შესამჩნევად შეამცირა დავიწყებული ვიზიტები, განრიგში ცარიელი ფანჯრები კი ნაკლები გახდა. ადმინისტრატორმა ტელეფონსა და მიმღებს შორის ხლეჩა შეწყვიტა და კაბინეტში პაციენტებს უვლის და არა ერთგვაროვანი ზარების დახარისხებას.",
        en: "Simple booking and rescheduling now go without a single call, at any time of day. First-visit bookings grew by about a quarter, and almost all of that growth came from evenings and weekends that used to be simply lost. Day-before reminders noticeably cut forgotten visits, and there are fewer empty windows in the schedule. The administrator stopped being torn between the phone and the desk and works with patients in the office rather than sorting identical calls.",
      },
      limitations: {
        ru: "Ассистент занимается только организацией записи. Он не консультирует по лечению, не оценивает сложность случая и не называет цену на конкретные процедуры до осмотра. Любой медицинский вопрос он передаёт врачу или администратору, чтобы диагноз и план лечения всегда исходили от человека, а не от бота.",
        ka: "ასისტენტი მხოლოდ ჩაწერის ორგანიზებას ემსახურება. ის არ იძლევა კონსულტაციას მკურნალობაზე, არ აფასებს შემთხვევის სირთულეს და არ ასახელებს კონკრეტული პროცედურების ფასს დათვალიერებამდე. ნებისმიერ სამედიცინო კითხვას ის ექიმს ან ადმინისტრატორს გადასცემს, რომ დიაგნოზი და მკურნალობის გეგმა ყოველთვის ადამიანისგან მოდიოდეს და არა ბოტისგან.",
        en: "The assistant only handles the organization of booking. It does not advise on treatment, does not assess the complexity of a case and does not name the price of specific procedures before an examination. Any medical question it passes to a doctor or the administrator, so the diagnosis and treatment plan always come from a human, not from the bot.",
      },
      methodology: {
        ru: "Сравнивали данные записи за 30 дней до и 30 дней после запуска: число первичных записей, долю обращений в нерабочие часы и количество неявок. Показатели округлены и приведены в диапазонах, чтобы по ним нельзя было определить конкретную клинику.",
        ka: "ვადარებდით ჩაწერის მონაცემებს გაშვებამდე 30 დღისა და მის შემდეგ 30 დღის განმავლობაში: პირველადი ჩაწერების რაოდენობას, არასამუშაო საათებში მიმართვების წილსა და გამოუცხადებლობის რაოდენობას. მაჩვენებლები დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კონკრეტული კლინიკის დადგენა ვერ მოხერხდეს.",
        en: "We compared booking data for 30 days before and 30 days after launch: the number of first-visit bookings, the share of requests in off-hours and the number of no-shows. The figures are rounded and given in ranges so a specific clinic cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Клиника просила не называть бренд, адрес и имена врачей, поэтому все детали обезличены. Названия мессенджера и календаря приведены только чтобы показать реальный стек интеграций, а не как реклама. Цифры округлены и даны в диапазонах, чтобы по ним нельзя было вычислить конкретную клинику.",
        ka: "კლინიკამ ითხოვა ბრენდის, მისამართისა და ექიმების სახელების არ დასახელება, ამიტომ ყველა დეტალი გაუპიროვნებულია. მესენჯერისა და კალენდრის სახელები მოცემულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. ციფრები დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კონკრეტული კლინიკის დადგენა ვერ მოხერხდეს.",
        en: "The clinic asked us not to name the brand, address or doctor names, so all details are depersonalized. The messenger and calendar names are given only to show the real integration stack, not as advertising. The figures are rounded and given in ranges so a specific clinic cannot be identified from them.",
      },
      faq: [
        {
          q: {
            ru: "Что с экстренными случаями?",
            ka: "რა ხდება გადაუდებელ შემთხვევებში?",
            en: "What about emergencies?",
          },
          a: {
            ru: "Бот распознаёт признаки острой боли как приоритет и сразу переводит пациента на дежурного врача, минуя обычный сценарий записи.",
            ka: "ბოტი მწვავე ტკივილის ნიშნებს პრიორიტეტად ცნობს და პაციენტს მაშინვე გადაამისამართებს მორიგე ექიმთან, ჩვეულებრივი ჩაწერის სცენარის გვერდის ავლით.",
            en: "The bot recognizes signs of acute pain as priority and routes the patient to the on-duty doctor at once, bypassing the usual booking scenario.",
          },
        },
        {
          q: {
            ru: "Можно ли перенести визит?",
            ka: "შესაძლებელია ვიზიტის გადატანა?",
            en: "Can a visit be rescheduled?",
          },
          a: {
            ru: "Да, пациент переносит запись прямо в том же чате, а слот в календаре обновляется автоматически, без звонка администратору.",
      ka: "დიახ, პაციენტი გადაიტანს ჩაწერას იმავე ჩატში, კალენდარში თავისუფალი დრო კი ავტომატურად განახლდება, ადმინისტრატორთან ზარის გარეშე.",
            en: "Yes, the patient reschedules right in the same chat, and the calendar slot updates automatically, without a call to the administrator.",
          },
        },
        {
          q: {
            ru: "Приходят ли напоминания о визите?",
            ka: "მოდის თუ არა ვიზიტის შეხსენებები?",
            en: "Are visit reminders sent?",
          },
          a: {
            ru: "Да, накануне приёма пациенту приходит напоминание в том же мессенджере, что заметно снижает число забытых визитов.",
            ka: "დიახ, მიღების წინა დღეს პაციენტს შეხსენება მოსდის იმავე მესენჯერში, რაც შესამჩნევად ამცირებს დავიწყებული ვიზიტების რაოდენობას.",
            en: "Yes, the day before the appointment the patient gets a reminder in the same messenger, which noticeably reduces the number of forgotten visits.",
          },
        },
      ],
    },
  },
  {
    slug: "beauty-salon-booking",
    name: "Beauty salon: 24/7 booking assistant",
    title: {
      ru: "Салон красоты: запись к мастерам 24/7",
      ka: "სილამაზის სალონი: ოსტატებთან ჩაწერა 24/7",
      en: "Beauty salon: 24/7 stylist booking",
    },
    category: "beauty",
    categoryLabel: { ru: "Красота", ka: "სილამაზე", en: "Beauty" },
    summary: {
      ru: "Салон красоты с несколькими мастерами принимал записи только по телефону в часы работы, а вечерние сообщения в Instagram обрабатывались с задержкой, и часть клиентов просто не доходила до записи. Мы подключили AI-ассистента в Instagram и WhatsApp, который сам подбирает мастера и время, ставит запись в календарь и напоминает о визите за день. Теперь около 40 процентов записей приходит вне рабочих часов, а неявок стало заметно меньше благодаря напоминаниям.",
      ka: "სილამაზის სალონი რამდენიმე ოსტატით იღებდა ჩაწერებს მხოლოდ ტელეფონით სამუშაო საათებში, საღამოს შეტყობინებები Instagram-ში კი დაგვიანებით მუშავდებოდა და კლიენტების ნაწილი უბრალოდ ჩაწერამდე ვერ აღწევდა. ჩვენ დავუკავშირეთ AI ასისტენტი Instagram-სა და WhatsApp-ში, რომელიც თავად არჩევს ოსტატსა და დროს, დებს ჩაწერას კალენდარში და შეახსენებს ვიზიტს დღით ადრე. ახლა ჩაწერების დაახლოებით 40 პროცენტი არასამუშაო საათებში მოდის, გამოუცხადებლობა კი შეხსენებების წყალობით შესამჩნევად შემცირდა.",
      en: "A beauty salon with several stylists took bookings only by phone during working hours, while evening messages on Instagram were handled with delay and some clients simply never reached a booking. We connected an AI assistant on Instagram and WhatsApp that picks a stylist and time itself, puts the booking into the calendar and reminds about the visit a day ahead. Now about 40 percent of bookings come outside working hours, and no-shows are noticeably fewer thanks to reminders.",
    },
    metrics: [
      {
        label: { ru: "Записи вне часов", ka: "ჩაწერები არასამუშაო დროს", en: "Off-hours bookings" },
        before: { ru: "почти не было", ka: "თითქმის არ იყო", en: "almost none" },
        after: { ru: "~40% записей", ka: "~40% ჩაწერისა", en: "~40% of bookings" },
      },
      {
        label: { ru: "Неявки", ka: "გამოუცხადებლობა", en: "No-shows" },
        before: { ru: "без напоминаний", ka: "შეხსენების გარეშე", en: "no reminders" },
        after: { ru: "заметно меньше", ka: "შესამჩნევად ნაკლები", en: "noticeably fewer" },
      },
      {
        label: { ru: "Ответ в Instagram", ka: "პასუხი Instagram-ში", en: "Instagram reply" },
        before: { ru: "с задержкой", ka: "დაგვიანებით", en: "delayed" },
        after: { ru: "сразу, 24/7", ka: "მაშინვე, 24/7", en: "instant, 24/7" },
      },
    ],
    slogan: {
      ru: "Запись и напоминания в Instagram и WhatsApp, меньше неявок",
      ka: "ჩაწერა და შეხსენებები Instagram-სა და WhatsApp-ში, ნაკლები გამოუცხადებლობა",
      en: "Booking and reminders on Instagram and WhatsApp, fewer no-shows",
    },
    description: {
      ru: "AI-ассистент записывает клиентов к нужному мастеру и напоминает о визите, снижая число неявок и разгружая администратора.",
      ka: "AI ასისტენტი წერს კლიენტებს საჭირო ოსტატთან და შეახსენებს ვიზიტს, ამცირებს გამოუცხადებლობას და ათავისუფლებს ადმინისტრატორს.",
      en: "An AI assistant books clients with the right stylist and reminds them of the visit, cutting no-shows and offloading the administrator.",
    },
    techStack: ["Instagram", "WhatsApp Business API", "Google Calendar", "Meta Ads"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Салон красоты с несколькими мастерами и разными по длительности услугами: от короткого маникюра до сложного окрашивания. Записи принимали только по телефону и только в часы работы, а администратор совмещал звонки с обслуживанием гостей у стойки. Основной поток заявок при этом шёл вечером через Instagram Direct, когда клиенты просматривали ленту после работы. Отвечать сразу не получалось, и сообщения нередко висели без ответа до следующего дня.",
        ka: "სილამაზის სალონი რამდენიმე ოსტატითა და ხანგრძლივობით განსხვავებული სერვისებით: მოკლე მანიკიურიდან რთულ შეღებვამდე. ჩაწერებს იღებდნენ მხოლოდ ტელეფონით და მხოლოდ სამუშაო საათებში, ადმინისტრატორი კი ზარებს სტუმრების მომსახურებას უთავსებდა მიმღებთან. განაცხადების ძირითადი ნაკადი ამასთან საღამოს Instagram Direct-ით მოდიოდა, როცა კლიენტები სამსახურის შემდეგ ათვალიერებდნენ ლენტს. მაშინვე პასუხი ვერ ხერხდებოდა, შეტყობინებები კი ხშირად უპასუხოდ ეკიდა მეორე დღემდე.",
        en: "A beauty salon with several stylists and services that differ in length, from a quick manicure to complex coloring. Bookings were taken only by phone and only during working hours, while the administrator combined calls with serving guests at the desk. The main flow of requests, meanwhile, came in the evening through Instagram Direct, when clients browsed the feed after work. Replying at once was not possible, and messages often hung unanswered until the next day.",
      },
      diagnostic: {
        ru: "Мы посмотрели, где теряются клиенты, и увидели две дыры. Первая это скорость: если ответ приходил через несколько часов, человек успевал записаться в соседний салон, где ответили быстрее. Вторая это неявки: без напоминаний клиенты забывали о визите или путали время, и в плотном расписании мастеров появлялись пустые окна, которые уже некому было занять. Обе проблемы били по выручке напрямую, ведь свободное окно у мастера это потерянные деньги за смену.",
        ka: "ჩვენ დავათვალიერეთ, სად იკარგებიან კლიენტები და დავინახეთ ორი ხვრელი. პირველი სისწრაფეა: თუ პასუხი რამდენიმე საათში მოდიოდა, ადამიანი ასწრებდა ჩაწერას მეზობელ სალონში, სადაც უფრო სწრაფად უპასუხეს. მეორე გამოუცხადებლობაა: შეხსენების გარეშე კლიენტები ივიწყებდნენ ვიზიტს ან ურევდნენ დროს, ოსტატების მჭიდრო განრიგში კი ჩნდებოდა ცარიელი ფანჯრები, რომელთა შევსება უკვე ვეღარავინ ასწრებდა. ორივე პრობლემა პირდაპირ ურტყამდა შემოსავალს, რადგან ოსტატის თავისუფალი ფანჯარა ცვლის დაკარგული ფულია.",
        en: "We looked at where clients were lost and saw two holes. The first is speed: if a reply came several hours later, the person managed to book at a nearby salon that answered faster. The second is no-shows: without reminders clients forgot about the visit or mixed up the time, and empty windows appeared in the tight stylist schedule that there was no longer anyone to fill. Both problems hit revenue directly, since a free window with a stylist is lost money for the shift.",
      },
      problem: {
        ru: "Нужна была запись, доступная тогда, когда клиенту удобно писать: вечером и в выходные, прямо из Instagram или WhatsApp. Ассистент должен понимать, какая услуга нужна и сколько она длится, подбирать подходящего мастера и не ставить двоих на одно время. Отдельно требовались автоматические напоминания и простой перенос: чтобы клиент мог передвинуть визит в пару сообщений, а освободившееся окно тут же становилось доступным для других.",
        ka: "საჭირო იყო ჩაწერა, ხელმისაწვდომი მაშინ, როცა კლიენტს წერა უხერხდება: საღამოსა და შაბათ-კვირას, პირდაპირ Instagram-იდან ან WhatsApp-იდან. ასისტენტს უნდა ესმოდეს, რომელი სერვისია საჭირო და რამდენ ხანს გრძელდება, არჩევდეს შესაფერის ოსტატს და ორ ადამიანს ერთ დროზე არ ნიშნავდეს. ცალკე საჭირო იყო ავტომატური შეხსენებები და მარტივი გადატანა: რომ კლიენტს ვიზიტის გადაწევა რამდენიმე შეტყობინებით შეძლებოდა, გათავისუფლებული ფანჯარა კი მაშინვე ხელმისაწვდომი გამხდარიყო სხვებისთვის.",
        en: "We needed booking available when it suits the client to write: in the evening and on weekends, straight from Instagram or WhatsApp. The assistant has to understand which service is needed and how long it lasts, pick a suitable stylist and not put two people at the same time. Separately we needed automatic reminders and easy rescheduling: so a client can move a visit in a couple of messages, and the freed window immediately becomes available to others.",
      },
      solution: {
        ru: "Мы подключили AI-ассистента, который отвечает и в Instagram Direct, и в WhatsApp как единая точка записи. В диалоге он уточняет услугу, подбирает свободного мастера и удобное время, ставит запись в календарь и присылает напоминание за день до визита. Перенести или отменить приём клиент может прямо в переписке, и окно сразу освобождается для других. Тон общения настроен под стиль салона, поэтому ассистент звучит приветливо, а не как сухая форма записи.",
        ka: "ჩვენ დავუკავშირეთ AI ასისტენტი, რომელიც პასუხობს Instagram Direct-შიც და WhatsApp-შიც როგორც ჩაწერის ერთიანი წერტილი. დიალოგში ის აზუსტებს სერვისს, არჩევს თავისუფალ ოსტატსა და მოსახერხებელ დროს, დებს ჩაწერას კალენდარში და აგზავნის შეხსენებას ვიზიტამდე ერთი დღით ადრე. მიღების გადატანა ან გაუქმება კლიენტს პირდაპირ მიმოწერაში შეუძლია, ფანჯარა კი მაშინვე თავისუფლდება სხვებისთვის. ურთიერთობის ტონი სალონის სტილზეა მორგებული, ამიტომ ასისტენტი მეგობრულად ჟღერს და არა მშრალ ჩაწერის ფორმად.",
        en: "We connected an AI assistant that replies both in Instagram Direct and in WhatsApp as a single booking point. In the dialog it clarifies the service, picks a free stylist and a convenient time, puts the booking into the calendar and sends a reminder a day before the visit. The client can reschedule or cancel right in the chat, and the window frees up for others at once. The tone is tuned to the salon style, so the assistant sounds friendly rather than a dry booking form.",
      },
      steps: {
        ru: "Проект заняли около месяца. Сначала собрали список услуг с их длительностью и ценовыми рамками, чтобы ассистент правильно рассчитывал время в расписании. Затем настроили графики мастеров, логику подбора и напоминаний, а также сценарии переноса и отмены. Запускали поэтапно: сперва на Instagram, где шёл основной вечерний поток, затем подключили WhatsApp. По ходу обкатки слушали живые диалоги и подгоняли формулировки под тон салона, прежде чем открыть запись всем.",
        ka: "პროექტს დაახლოებით ერთი თვე დასჭირდა. ჯერ შევკრიბეთ სერვისების სია მათი ხანგრძლივობითა და ფასების ჩარჩოებით, რომ ასისტენტს განრიგში დრო სწორად გამოეთვალა. შემდეგ დავაყენეთ ოსტატების გრაფიკები, შერჩევისა და შეხსენებების ლოგიკა, ასევე გადატანისა და გაუქმების სცენარები. გავუშვით ეტაპობრივად: ჯერ Instagram-ზე, სადაც ძირითადი საღამოს ნაკადი მოდიოდა, შემდეგ დავუკავშირეთ WhatsApp. ტესტირებისას ვისმენდით ცოცხალ დიალოგებს და ვარგებდით ფორმულირებებს სალონის ტონზე, სანამ ჩაწერას ყველას გავუხსნიდით.",
        en: "The project took about a month. First we gathered the list of services with their durations and price ranges so the assistant would calculate time in the schedule correctly. Then we set up the stylist schedules, the logic of matching and reminders, and the rescheduling and cancellation scenarios. We launched in stages: first on Instagram, where the main evening flow was, then connected WhatsApp. During the run-in we listened to real dialogs and adjusted the wording to the salon tone before opening booking to everyone.",
      },
      impact: {
        ru: "После запуска около 40 процентов всех записей стало приходить вне рабочих часов, вечером и в выходные, то есть в то время, которое раньше почти полностью терялось. Напоминания за день заметно снизили неявки, и плотное расписание мастеров стало реже простаивать с пустыми окнами. Клиенты записываются в пару сообщений, не дожидаясь звонка, а администратор занимается гостями в зале вместо разбора вечерней переписки. Загрузка мастеров стала ровнее по неделе.",
        ka: "გაშვების შემდეგ ყველა ჩაწერის დაახლოებით 40 პროცენტმა არასამუშაო საათებში, საღამოსა და შაბათ-კვირას დაიწყო შემოსვლა, ანუ იმ დროს, რომელიც ადრე თითქმის მთლიანად იკარგებოდა. დღით ადრე შეხსენებებმა შესამჩნევად შეამცირა გამოუცხადებლობა, ოსტატების მჭიდრო განრიგი კი ცარიელი ფანჯრებით უფრო იშვიათად ცდებოდა უქმად. კლიენტები რამდენიმე შეტყობინებით იწერებიან, ზარს არ ელოდებიან, ადმინისტრატორი კი დარბაზში სტუმრებს უვლის საღამოს მიმოწერის გარჩევის ნაცვლად. ოსტატების დატვირთვა კვირის მანძილზე უფრო თანაბარი გახდა.",
        en: "After launch about 40 percent of all bookings began arriving outside working hours, in the evening and on weekends, exactly the time that used to be almost entirely lost. Day-before reminders noticeably cut no-shows, and the tight stylist schedule stood idle with empty windows less often. Clients book in a couple of messages without waiting for a call, and the administrator works with guests in the salon instead of sorting the evening correspondence. Stylist load became more even across the week.",
      },
      limitations: {
        ru: "Ассистент не согласовывает сложные пожелания по образу, тон окрашивания или индивидуальную цену: такие детали он передаёт мастеру перед визитом. Он не обещает результат, который зависит от исходного состояния волос, и не заменяет живую консультацию. Спорные и нестандартные запросы всегда уходят человеку.",
        ka: "ასისტენტი არ ათანხმებს იმიჯზე რთულ სურვილებს, შეღებვის ტონს ან ინდივიდუალურ ფასს: ასეთ დეტალებს ის ვიზიტამდე ოსტატს გადასცემს. ის არ ჰპირდება შედეგს, რომელიც თმის საწყის მდგომარეობაზეა დამოკიდებული, და არ ცვლის ცოცხალ კონსულტაციას. სადავო და არასტანდარტული მოთხოვნები ყოველთვის ადამიანთან მიდის.",
        en: "The assistant does not agree complex requests about the look, the coloring tone or an individual price: such details it passes to the stylist before the visit. It does not promise a result that depends on the initial state of the hair, and does not replace a live consultation. Disputed and non-standard requests always go to a human.",
      },
      methodology: {
        ru: "Сравнивали записи и неявки за месяц до и месяц после запуска: долю бронирований в нерабочие часы, количество неявок и общую заполненность расписания мастеров. Все цифры округлены и приведены в диапазонах, чтобы по ним нельзя было определить конкретный салон.",
        ka: "ვადარებდით ჩაწერებსა და გამოუცხადებლობებს გაშვებამდე ერთი თვისა და მის შემდეგ ერთი თვის განმავლობაში: არასამუშაო საათებში ჯავშნების წილს, გამოუცხადებლობის რაოდენობასა და ოსტატების განრიგის საერთო შევსებას. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კონკრეტული სალონის დადგენა ვერ მოხერხდეს.",
        en: "We compared bookings and no-shows for a month before and a month after launch: the share of bookings in off-hours, the number of no-shows and the overall fill of the stylist schedule. All figures are rounded and given in ranges so a specific salon cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название салона, адрес и имена мастеров не раскрываем по NDA. Названия платформ и календаря приведены только чтобы показать реальный стек интеграций, а не как реклама. Показатели округлены и даны в диапазонах, чтобы по ним нельзя было опознать компанию.",
        ka: "სალონის სახელს, მისამართსა და ოსტატების სახელებს NDA-ს გამო არ ვამხელთ. პლატფორმებისა და კალენდრის სახელები მოცემულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. მაჩვენებლები დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით კომპანიის ამოცნობა ვერ მოხერხდეს.",
        en: "We do not disclose the salon name, address or stylist names under NDA. The platform and calendar names are given only to show the real integration stack, not as advertising. The figures are rounded and given in ranges so the company cannot be recognized from them.",
      },
      faq: [
        {
          q: {
            ru: "Что если нужный мастер занят?",
            ka: "რა ხდება, თუ საჭირო ოსტატი დაკავებულია?",
            en: "What if the desired stylist is busy?",
          },
          a: {
            ru: "Бот предложит ближайшее свободное время у этого мастера или подберёт другого с похожими услугами, чтобы клиент не уходил без записи.",
            ka: "ბოტი შემოგთავაზებთ ამ ოსტატის უახლოეს თავისუფალ დროს ან შეარჩევს სხვას მსგავსი სერვისებით, რომ კლიენტი ჩაწერის გარეშე არ წავიდეს.",
            en: "The bot offers the nearest free time with that stylist or picks another with similar services, so the client does not leave without a booking.",
          },
        },
        {
          q: {
            ru: "Приходят ли напоминания?",
            ka: "მოდის თუ არა შეხსენებები?",
            en: "Are reminders sent?",
          },
          a: {
            ru: "Да, напоминание приходит за день до визита в том же мессенджере, и именно это заметно снижает число неявок.",
            ka: "დიახ, შეხსენება მოდის ვიზიტამდე ერთი დღით ადრე იმავე მესენჯერში, სწორედ ეს ამცირებს შესამჩნევად გამოუცხადებლობას.",
            en: "Yes, a reminder comes a day before the visit in the same messenger, and this is exactly what noticeably cuts no-shows.",
          },
        },
        {
          q: {
            ru: "Можно ли отменить запись?",
            ka: "შესაძლებელია ჩაწერის გაუქმება?",
            en: "Can a booking be canceled?",
          },
          a: {
            ru: "Да, отмена и перенос доступны прямо в переписке, и освободившееся окно сразу становится доступным другим клиентам.",
            ka: "დიახ, გაუქმება და გადატანა ხელმისაწვდომია პირდაპირ მიმოწერაში, გათავისუფლებული ფანჯარა კი მაშინვე ხელმისაწვდომი ხდება სხვა კლიენტებისთვის.",
            en: "Yes, cancel and reschedule are available right in the chat, and the freed window immediately becomes available to other clients.",
          },
        },
      ],
    },
  },
  {
    slug: "realestate-lead-qualification",
    name: "Premium real estate: AI lead qualification",
    title: {
      ru: "Элитная недвижимость: квалификация заявок",
      ka: "ელიტური უძრავი ქონება: განაცხადების კვალიფიკაცია",
      en: "Premium real estate: lead qualification",
    },
    category: "realestate",
    categoryLabel: { ru: "Недвижимость", ka: "უძრავი ქონება", en: "Real estate" },
    summary: {
      ru: "Агентство элитной недвижимости платило за рекламу, но большая часть входящих заявок была нецелевой, и агенты тратили дни на переписку с теми, кто не готов покупать. Первый ответ порой приходил спустя часы, и интерес клиента успевал остыть. Мы подключили AI-ассистента в WhatsApp, который сам уточняет бюджет, район, тип объекта и сроки, отсекает случайные обращения и отдаёт агенту готовую карточку с подходящими вариантами. Теперь агенты работают в основном с тёплыми заявками, а первый контакт занимает минуты.",
      ka: "ელიტური უძრავი ქონების სააგენტო იხდიდა რეკლამაში, მაგრამ შემომავალი განაცხადების დიდი ნაწილი არასამიზნე იყო და აგენტები დღეებს ხარჯავდნენ მიმოწერაზე მათთან, ვინც ყიდვისთვის მზად არ იყო. პირველი პასუხი ხანდახან საათების შემდეგ მოდიოდა და კლიენტის ინტერესი ცივდებოდა. ჩვენ დავამატეთ AI ასისტენტი WhatsApp-ში, რომელიც თავად აზუსტებს ბიუჯეტს, უბანს, ობიექტის ტიპსა და ვადებს, ცხრის შემთხვევით მიმართვებს და აგენტს გადასცემს მზა ბარათს შესაფერისი ვარიანტებით. ახლა აგენტები ძირითადად თბილ განაცხადებთან მუშაობენ, პირველი კონტაქტი კი წუთებს იკავებს.",
      en: "A premium real estate agency was paying for ads, but most of the incoming leads were off-target, and agents spent days chatting with people who were not ready to buy. The first reply sometimes came hours later, and the client interest cooled down. We added an AI assistant on WhatsApp that clarifies budget, district, property type and timeline itself, filters out random requests and hands the agent a ready card with matching options. Now agents mostly work with warm leads, and the first contact takes minutes.",
    },
    metrics: [
      {
        label: { ru: "Первый контакт", ka: "პირველი კონტაქტი", en: "First contact" },
        before: { ru: "часы ожидания", ka: "საათობით ლოდინი", en: "hours of waiting" },
        after: { ru: "минуты", ka: "წუთები", en: "minutes" },
      },
      {
        label: { ru: "Заявки у агента", ka: "განაცხადები აგენტთან", en: "Leads on the agent desk" },
        before: { ru: "все подряд", ka: "ყველა ზედიზედ", en: "everyone at once" },
        after: { ru: "только тёплые", ka: "მხოლოდ თბილი", en: "only warm ones" },
      },
      {
        label: { ru: "Отсев нецелевых", ka: "არასამიზნეების გაცხრილვა", en: "Filtering off-target" },
        before: { ru: "вручную в переписке", ka: "ხელით მიმოწერაში", en: "by hand in chat" },
        after: { ru: "на входе", ka: "შესვლისთანავე", en: "at the entry" },
      },
    ],
    slogan: {
      ru: "Отсев нецелевых обращений по бюджету, району и типу объекта",
      ka: "არასამიზნე მიმართვების გაცხრილვა ბიუჯეტის, უბნისა და ობიექტის ტიპის მიხედვით",
      en: "Filtering out off-target leads by budget, district and property type",
    },
    description: {
      ru: "AI-ассистент квалифицирует входящие заявки по ключевым критериям и передаёт агенту только целевые контакты, экономя время на показах.",
      ka: "AI ასისტენტი ახდენს შემომავალი განაცხადების კვალიფიკაციას ძირითადი კრიტერიუმებით და აგენტს გადასცემს მხოლოდ სამიზნე კონტაქტებს, დროს ზოგავს ჩვენებებზე.",
      en: "An AI assistant qualifies incoming leads by key criteria and passes only target contacts to the agent, saving time on viewings.",
    },
    techStack: ["WhatsApp Business API", "Bitrix24", "NLU", "Google Sheets", "Meta Ads"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Агентство элитной недвижимости с потоком обращений из платной рекламы и социальных сетей. Объекты дорогие, цикл сделки длинный, а трафик из рекламы шёл вперемешку: рядом с реальными покупателями писали любопытные, арендаторы и те, кому объект был не по бюджету. Несколько агентов вручную разбирали каждую заявку в переписке. В итоге самое дорогое время специалистов уходило на разговоры, которые почти никогда не заканчивались показом.",
        ka: "ელიტური უძრავი ქონების სააგენტო ფასიანი რეკლამიდან და სოციალური ქსელებიდან მიმართვების ნაკადით. ობიექტები ძვირია, გარიგების ციკლი გრძელი, რეკლამის ტრაფიკი კი არეულად მოდიოდა: რეალურ მყიდველებთან ერთად წერდნენ ცნობისმოყვარეები, მოქირავნეები და ისინი, ვისთვისაც ობიექტი ბიუჯეტში არ ჯდებოდა. რამდენიმე აგენტი ხელით არჩევდა თითოეულ განაცხადს მიმოწერაში. შედეგად სპეციალისტების ყველაზე ძვირფასი დრო იხარჯებოდა საუბრებზე, რომლებიც თითქმის არასოდეს სრულდებოდა ჩვენებით.",
        en: "A premium real estate agency with a stream of requests from paid ads and social media. The properties are expensive, the deal cycle is long, and the ad traffic came in mixed: alongside real buyers wrote the curious, renters and people for whom the property was out of budget. Several agents sorted every request by hand in chat. As a result, the most expensive time of the specialists went to conversations that almost never ended in a viewing.",
      },
      diagnostic: {
        ru: "Мы разложили воронку от заявки до показа и увидели узкое место в самом начале. До просмотра объекта доходила лишь небольшая доля обращений, а первый ответ клиент иногда ждал по несколько часов, потому что агент был занят на встрече или с другим клиентом. За это время интерес остывал, и человек уходил к тому, кто ответил быстрее. При этом агенты не могли отличить горячую заявку от случайной, пока не потратят на неё время.",
        ka: "ჩვენ დავშალეთ ვორონკა განაცხადიდან ჩვენებამდე და დავინახეთ ვიწრო ადგილი თავიდანვე. ობიექტის დათვალიერებამდე მიმართვების მხოლოდ მცირე ნაწილი აღწევდა, პირველ პასუხს კი კლიენტი ხანდახან რამდენიმე საათს ელოდებოდა, რადგან აგენტი შეხვედრაზე ან სხვა კლიენტთან იყო დაკავებული. ამ დროს ინტერესი ცივდებოდა და ადამიანი მიდიოდა იმასთან, ვინც უფრო სწრაფად უპასუხა. ამასთან, აგენტები ცხელ განაცხადს შემთხვევითისგან ვერ არჩევდნენ, სანამ მასზე დროს არ დახარჯავდნენ.",
        en: "We broke down the funnel from request to viewing and saw the bottleneck right at the start. Only a small share of requests reached a viewing, and the first reply sometimes took a client several hours, because the agent was busy at a meeting or with another client. During that time interest cooled and the person went to whoever answered faster. Meanwhile, agents could not tell a hot lead from a random one until they had already spent time on it.",
      },
      problem: {
        ru: "Нужен был не просто автоответчик, а быстрая квалификация на входе. Ассистент должен сам и в живом тоне уточнить бюджет, интересующий район, тип объекта и сроки покупки, а затем понять, целевая это заявка или нет. Горячие обращения важно отдавать агенту сразу и с пометкой приоритета, а нецелевые аккуратно закрывать, не сжигая на них время специалиста и не отпугивая человека сухой анкетой.",
        ka: "საჭირო იყო არა უბრალოდ ავტომოპასუხე, არამედ სწრაფი კვალიფიკაცია შესვლისთანავე. ასისტენტმა თავად და ცოცხალი ტონით უნდა დააზუსტოს ბიუჯეტი, საინტერესო უბანი, ობიექტის ტიპი და ყიდვის ვადები, შემდეგ კი გაიგოს, სამიზნეა თუ არა ეს განაცხადი. ცხელი მიმართვები მნიშვნელოვანია აგენტს მაშინვე და პრიორიტეტის აღნიშვნით გადაეცეს, არასამიზნეები კი ფრთხილად დაიხუროს, სპეციალისტის დროის დაუხარჯავად და ადამიანის მშრალი კითხვარით არ დაფრთხობით.",
        en: "We needed not just an autoresponder but fast qualification at the entry. The assistant should itself, and in a living tone, clarify budget, the district of interest, property type and purchase timeline, and then understand whether the request is on target. Hot requests must go to the agent at once and flagged as priority, while off-target ones are closed gently, without burning the specialists time and without scaring the person off with a dry form.",
      },
      solution: {
        ru: "Собрали ассистента в WhatsApp, который встречает каждую заявку с рекламы за секунды. Он задаёт короткую и вежливую цепочку вопросов, распознаёт свободные формулировки клиента и по ответам сверяет запрос с базой объектов. Если параметры совпадают и человек готов к сделке в обозримый срок, заявка помечается как горячая и уходит агенту вместе с карточкой: бюджет, район, подходящие варианты и вся история диалога. Нецелевые обращения ассистент закрывает мягко и сохраняет контакт в базе на будущее, чтобы агент к ним не возвращался.",
        ka: "შევქმენით ასისტენტი WhatsApp-ში, რომელიც რეკლამიდან თითოეულ განაცხადს წამებში ხვდება. ის სვამს მოკლე და თავაზიან კითხვების ჯაჭვს, ცნობს კლიენტის თავისუფალ ფორმულირებებს და პასუხების მიხედვით ადარებს მოთხოვნას ობიექტების ბაზას. თუ პარამეტრები ემთხვევა და ადამიანი ახლო ვადებში გარიგებისთვის მზადაა, განაცხადი აღინიშნება ცხელად და აგენტს გადაეცემა ბარათთან ერთად: ბიუჯეტი, უბანი, შესაფერისი ვარიანტები და დიალოგის მთელი ისტორია. არასამიზნე მიმართვებს ასისტენტი რბილად ხურავს და ინახავს კონტაქტს ბაზაში მომავლისთვის, რომ აგენტი მათ აღარ დაუბრუნდეს.",
        en: "We built an assistant on WhatsApp that meets every ad lead within seconds. It asks a short, polite chain of questions, recognizes the client free-form wording and, based on the answers, matches the request against the property base. If the parameters fit and the person is ready to deal within a foreseeable term, the request is flagged as hot and goes to the agent along with a card: budget, district, matching options and the whole dialog history. Off-target requests are closed gently, and the contact is kept in the base for the future so the agent does not return to them.",
      },
      steps: {
        ru: "Запуск занял около четырёх недель. Сначала вместе с руководителем отдела продаж описали критерии целевой заявки: пороги бюджета, приоритетные районы, типы объектов и признаки готовности к сделке. Затем связали ассистента с базой объектов и CRM, чтобы карточка сразу попадала нужному агенту. Отдельно отладили тон вопросов, чтобы они звучали как разговор с консультантом, а не как допрос. После обкатки на части рекламного трафика вывели ассистента на весь поток заявок.",
        ka: "გაშვებას დაახლოებით ოთხი კვირა დასჭირდა. ჯერ გაყიდვების განყოფილების ხელმძღვანელთან ერთად აღვწერეთ სამიზნე განაცხადის კრიტერიუმები: ბიუჯეტის ზღვრები, პრიორიტეტული უბნები, ობიექტების ტიპები და გარიგებისთვის მზაობის ნიშნები. შემდეგ დავუკავშირეთ ასისტენტი ობიექტების ბაზასა და CRM-ს, რომ ბარათი მაშინვე საჭირო აგენტთან მოხვედრილიყო. ცალკე გავმართეთ კითხვების ტონი, რომ ისინი კონსულტანტთან საუბარივით ჟღერდეს და არა დაკითხვასავით. სარეკლამო ტრაფიკის ნაწილზე გატესტვის შემდეგ ასისტენტი მთელ განაცხადების ნაკადზე გავიტანეთ.",
        en: "The launch took about four weeks. First, together with the head of sales, we described the criteria of a target request: budget thresholds, priority districts, property types and signs of readiness to deal. Then we linked the assistant to the property base and the CRM so the card would reach the right agent immediately. Separately, we tuned the tone of the questions so they sounded like a talk with a consultant, not an interrogation. After a trial on part of the ad traffic, we rolled the assistant out to the whole request flow.",
      },
      impact: {
        ru: "После запуска доля показов, которые действительно ведут к сделке, заметно выросла, потому что до агента стали доходить в основном подготовленные клиенты. Время до первого контакта упало с нескольких часов до пары минут, и заявки перестали остывать в очереди. Агенты разгрузились от разбора случайных обращений и сосредоточились на том, что приносит комиссию: показы, переговоры и сопровождение сделки. Рекламный бюджет стал работать эффективнее, ведь ни одна оплаченная заявка не остаётся без быстрого ответа.",
        ka: "გაშვების შემდეგ იმ ჩვენებების წილი, რომლებიც ნამდვილად გარიგებამდე მიდის, შესამჩნევად გაიზარდა, რადგან აგენტამდე ძირითადად მომზადებული კლიენტები აღწევენ. პირველ კონტაქტამდე დრო რამდენიმე საათიდან რამდენიმე წუთამდე დაეცა და განაცხადებმა რიგში გაცივება შეწყვიტა. აგენტები განიტვირთნენ შემთხვევითი მიმართვების არჩევისგან და იმაზე გადაერთნენ, რაც საკომისიოს იძლევა: ჩვენებები, მოლაპარაკებები და გარიგების თანხლება. სარეკლამო ბიუჯეტმა უფრო ეფექტიანად დაიწყო მუშაობა, რადგან არც ერთი გადახდილი განაცხადი სწრაფი პასუხის გარეშე აღარ რჩება.",
        en: "After launch, the share of viewings that really lead to a deal grew noticeably, because mostly prepared clients now reach the agent. Time to first contact dropped from several hours to a couple of minutes, and requests stopped cooling in the queue. Agents were relieved of sorting random requests and focused on what brings commission: viewings, negotiations and deal support. The ad budget started working more efficiently, since not a single paid lead is left without a fast reply.",
      },
      limitations: {
        ru: "Ассистент занимается только квалификацией и первым контактом. Он не обсуждает финальную цену, не торгуется по условиям и не ведёт юридическую часть сделки: проверку документов, аванс и договор. Всё это остаётся за агентом, а показ объекта и живые переговоры ассистент намеренно не заменяет.",
        ka: "ასისტენტი მხოლოდ კვალიფიკაციითა და პირველი კონტაქტით არის დაკავებული. ის არ განიხილავს საბოლოო ფასს, არ ვაჭრობს პირობებზე და არ აწარმოებს გარიგების იურიდიულ ნაწილს: დოკუმენტების შემოწმებას, ავანსსა და ხელშეკრულებას. ეს ყველაფერი აგენტს რჩება, ობიექტის ჩვენებასა და ცოცხალ მოლაპარაკებებს კი ასისტენტი განზრახ არ ცვლის.",
        en: "The assistant deals only with qualification and the first contact. It does not discuss the final price, does not bargain over terms and does not handle the legal part of the deal: document checks, the deposit and the contract. All of that stays with the agent, and the assistant deliberately does not replace the property viewing and live negotiations.",
      },
      methodology: {
        ru: "Сравнивали конверсию из заявки в назначенный показ и время до первого ответа за 30 дней до запуска и 30 дней после. Считали по данным CRM на одном и том же рекламном трафике. Все цифры округлены и приведены как диапазоны, чтобы по ним нельзя было опознать агентство.",
        ka: "ვადარებდით განაცხადიდან დანიშნულ ჩვენებაში კონვერსიასა და პირველ პასუხამდე დროს გაშვებამდე 30 დღისა და მის შემდეგ 30 დღის განმავლობაში. ვთვლიდით CRM-ის მონაცემებით ერთსა და იმავე სარეკლამო ტრაფიკზე. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებად, რომ მათით სააგენტოს ამოცნობა ვერ მოხერხდეს.",
        en: "We compared conversion from request to a scheduled viewing and time to first reply for 30 days before launch and 30 days after. We counted from CRM data on the same ad traffic. All figures are rounded and given as ranges so the agency cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название агентства, адреса объектов и имена агентов скрыты по NDA. Названия мессенджера и рекламных инструментов приведены только чтобы показать реальный стек интеграций, а не как реклама сервисов. Показатели даны обобщённо и округлены, поэтому конкретную компанию по ним вычислить нельзя.",
        ka: "სააგენტოს სახელი, ობიექტების მისამართები და აგენტების სახელები NDA-ს გამო დამალულია. მესენჯერისა და სარეკლამო ინსტრუმენტების სახელები მითითებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა სერვისების რეკლამად. მაჩვენებლები მოცემულია განზოგადებულად და დამრგვალებულია, ამიტომ მათით კონკრეტული კომპანიის დადგენა შეუძლებელია.",
        en: "The agency name, property addresses and agent names are hidden under NDA. The messenger and ad tool names are given only to show the real integration stack, not as advertising for the services. The figures are given in aggregate and rounded, so a specific company cannot be worked out from them.",
      },
      faq: [
        {
          q: {
            ru: "Как ассистент понимает, что заявка целевая?",
            ka: "როგორ ხვდება ასისტენტი, რომ განაცხადი სამიზნეა?",
            en: "How does the assistant tell that a lead is on target?",
          },
          a: {
            ru: "Он сверяет бюджет, район, тип объекта и сроки покупки с критериями агентства и помечает совпадения как приоритет. Спорные случаи всё равно уходят агенту, чтобы решение принял живой человек.",
            ka: "ის ადარებს ბიუჯეტს, უბანს, ობიექტის ტიპსა და ყიდვის ვადებს სააგენტოს კრიტერიუმებს და დამთხვევებს პრიორიტეტად აღნიშნავს. სადავო შემთხვევები მაინც აგენტს გადაეცემა, რომ გადაწყვეტილება ცოცხალმა ადამიანმა მიიღოს.",
            en: "It matches budget, district, property type and purchase timeline against the agency criteria and flags matches as priority. Disputed cases still go to the agent so a live person makes the call.",
          },
        },
        {
          q: {
            ru: "Что происходит с нецелевыми обращениями?",
            ka: "რა ხდება არასამიზნე მიმართვებთან?",
            en: "What happens to off-target leads?",
          },
          a: {
            ru: "Ассистент вежливо отвечает и сохраняет контакт в базе на будущее, не отвлекая агента. Часть таких клиентов дозревает позже, и тогда с ними работают адресно.",
            ka: "ასისტენტი თავაზიანად პასუხობს და ინახავს კონტაქტს ბაზაში მომავლისთვის, აგენტს ყურადღებას არ აფანტავს. ასეთი კლიენტების ნაწილი მოგვიანებით მწიფდება და მაშინ მათთან უკვე მიზნობრივად მუშაობენ.",
            en: "The assistant replies politely and keeps the contact in the base for the future without distracting the agent. Some of these clients ripen later, and then they are worked with directly.",
          },
        },
        {
          q: {
            ru: "Заменяет ли ассистент агента на показе?",
            ka: "ცვლის თუ არა ასისტენტი აგენტს ჩვენებაზე?",
            en: "Does the assistant replace the agent at a viewing?",
          },
          a: {
            ru: "Нет, он доводит клиента до встречи и передаёт агенту полный контекст. Показ, переговоры и оформление сделки ведёт только человек.",
            ka: "არა, ის კლიენტს შეხვედრამდე მიჰყავს და აგენტს სრულ კონტექსტს გადასცემს. ჩვენებას, მოლაპარაკებებსა და გარიგების გაფორმებას მხოლოდ ადამიანი აწარმოებს.",
            en: "No, it brings the client to the meeting and passes the agent the full context. The viewing, negotiations and closing of the deal are handled only by a human.",
          },
        },
      ],
    },
  },
  {
    slug: "freight-logistics-status",
    name: "Freight logistics: shipment status and intake bot",
    title: {
      ru: "Грузоперевозки: статус груза и приём заявок",
      ka: "სატვირთო გადაზიდვები: ტვირთის სტატუსი და განაცხადების მიღება",
      en: "Freight logistics: shipment status and intake",
    },
    category: "logistics",
    categoryLabel: { ru: "Логистика", ka: "ლოგისტიკა", en: "Logistics" },
    summary: {
      ru: "Логистическая компания тонула в одинаковых звонках «где мой груз». Диспетчеры отвлекались на них весь день, а в пик клиенты просто не могли дозвониться и нервничали, хотя статус уже лежал в учётной системе. Мы подключили AI-ассистента в Telegram: он выдаёт статус по номеру заявки за секунды и в том же чате принимает новые заказы, аккуратно собирая маршрут, тип груза и контакты. Нагрузка справочных звонков на диспетчеров упала примерно на треть, а новые заявки перестали теряться между каналами.",
      ka: "ლოგისტიკური კომპანია იხრჩობოდა ერთგვაროვან ზარებში «სად არის ჩემი ტვირთი». დისპეტჩერები მთელი დღე მათზე იფანტებოდნენ, პიკში კი კლიენტები უბრალოდ ვერ უკავშირდებოდნენ და ნერვიულობდნენ, თუმცა სტატუსი უკვე აღრიცხვის სისტემაში იდო. ჩვენ დავამატეთ AI ასისტენტი Telegram-ში: ის გასცემს სტატუსს განაცხადის ნომრით წამებში და იმავე ჩატში იღებს ახალ შეკვეთებს, ფრთხილად აგროვებს მარშრუტს, ტვირთის ტიპსა და კონტაქტებს. საცნობარო ზარების დატვირთვა დისპეტჩერებზე დაახლოებით მესამედით დაეცა, ახალი განაცხადები კი არხებს შორის დაკარგვას აღარ იწყებენ.",
      en: "A logistics company was drowning in identical where is my cargo calls. Dispatchers were pulled onto them all day, and at peak times customers simply could not get through and grew frustrated, even though the status was already in the accounting system. We added an AI assistant on Telegram: it returns status by reference number in seconds and takes new orders in the same chat, carefully collecting the route, cargo type and contacts. The load of reference calls on dispatchers fell by about a third, and new requests stopped getting lost between channels.",
    },
    metrics: [
      {
        label: { ru: "Звонки о статусе", ka: "ზარები სტატუსზე", en: "Status calls" },
        before: { ru: "поток вручную", ka: "ნაკადი ხელით", en: "manual stream" },
        after: { ru: "меньше на ~треть", ka: "~მესამედით ნაკლები", en: "about a third fewer" },
      },
      {
        label: { ru: "Ответ клиенту", ka: "პასუხი კლიენტს", en: "Reply to client" },
        before: { ru: "ждал диспетчера", ka: "ელოდა დისპეტჩერს", en: "waited for a dispatcher" },
        after: { ru: "сразу по номеру", ka: "მაშინვე ნომრით", en: "instant by number" },
      },
      {
        label: { ru: "Новые заявки", ka: "ახალი განაცხადები", en: "New requests" },
        before: { ru: "терялись", ka: "იკარგებოდა", en: "got lost" },
        after: { ru: "все в CRM", ka: "ყველა CRM-ში", en: "all in the CRM" },
      },
    ],
    slogan: {
      ru: "Статус по номеру заявки и новые заявки в одном чате",
      ka: "სტატუსი განაცხადის ნომრით და ახალი განაცხადები ერთ ჩატში",
      en: "Status by reference number and new requests in one chat",
    },
    description: {
      ru: "AI-ассистент отвечает на вопросы о статусе груза по номеру заявки и принимает новые заявки, снижая нагрузку на диспетчеров.",
      ka: "AI ასისტენტი პასუხობს ტვირთის სტატუსზე კითხვებს განაცხადის ნომრით და იღებს ახალ განაცხადებს, ამცირებს დისპეტჩერების დატვირთვას.",
      en: "An AI assistant answers shipment status questions by reference number and takes new requests, reducing the load on dispatchers.",
    },
    techStack: ["Telegram", "Custom CRM", "REST API", "Google Sheets"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Транспортно-логистическая компания с постоянным потоком грузов и большой базой клиентов. Каждый заказчик хочет знать, где именно едет его груз и когда он прибудет, и за ответом привык звонить напрямую диспетчеру. Информация о статусе уже была в учётной системе, но достать её мог только сотрудник вручную. В итоге диспетчеры, чья настоящая работа это планирование рейсов и решение проблем на маршруте, полдня отвечали на однотипные вопросы по телефону.",
        ka: "სატრანსპორტო-ლოგისტიკური კომპანია ტვირთების მუდმივი ნაკადითა და კლიენტების დიდი ბაზით. ყოველ დამკვეთს სურს იცოდეს, სად მიდის მისი ტვირთი და როდის ჩამოვა, პასუხისთვის კი პირდაპირ დისპეტჩერთან დარეკვას მიეჩვია. სტატუსის ინფორმაცია უკვე იყო აღრიცხვის სისტემაში, მაგრამ მისი ამოღება მხოლოდ თანამშრომელს შეეძლო ხელით. შედეგად დისპეტჩერები, რომელთა ნამდვილი საქმეა რეისების დაგეგმვა და მარშრუტზე პრობლემების მოგვარება, ნახევარ დღეს ერთგვაროვან კითხვებს პასუხობდნენ ტელეფონით.",
        en: "A transport and logistics company with a constant flow of cargo and a large client base. Every customer wants to know exactly where their cargo is and when it will arrive, and is used to calling the dispatcher directly for the answer. The status information was already in the accounting system, but only an employee could pull it by hand. As a result, dispatchers, whose real job is planning routes and solving problems on the road, spent half the day answering the same kind of questions by phone.",
      },
      diagnostic: {
        ru: "Мы разобрали структуру обращений за несколько недель и увидели чёткую картину. Основную массу звонков составлял простой вопрос о статусе, ответ на который уже был в системе и не требовал решения диспетчера. В часы пик линия оказывалась занята, и клиенты с новой заявкой или срочной проблемой просто не могли пробиться. А сами новые заявки приходили то в почту, то в мессенджер, то по телефону, и часть из них терялась без единой точки приёма.",
        ka: "ჩვენ გავარჩიეთ მიმართვების სტრუქტურა რამდენიმე კვირის განმავლობაში და დავინახეთ მკაფიო სურათი. ზარების ძირითად ნაწილს შეადგენდა მარტივი კითხვა სტატუსზე, რომლის პასუხიც უკვე სისტემაში იყო და დისპეტჩერის ჩარევას არ საჭიროებდა. პიკის საათებში ხაზი დაკავებული იყო და კლიენტები ახალი განაცხადით ან სასწრაფო პრობლემით უბრალოდ ვერ არღვევდნენ. თავად ახალი განაცხადები კი ხან ფოსტაში, ხან მესენჯერში, ხან ტელეფონით მოდიოდა და ნაწილი იკარგებოდა მიღების ერთიანი წერტილის გარეშე.",
        en: "We broke down the structure of requests over several weeks and saw a clear picture. The bulk of calls was a simple question about status, whose answer was already in the system and did not require the dispatcher to decide anything. At peak hours the line was busy, and clients with a new request or an urgent problem simply could not get through. And the new requests themselves came now to email, now to a messenger, now by phone, and some got lost without a single intake point.",
      },
      problem: {
        ru: "Задача делилась на две части. Во-первых, отдавать клиенту статус груза автоматически, по номеру заявки и в любое время суток, чтобы не занимать этим диспетчера. Во-вторых, в том же окне принимать новые заказы по понятной форме и сразу заводить их в систему, чтобы ни одна заявка не потерялась. При этом ассистент должен честно говорить, когда данных нет, а не выдумывать местоположение груза.",
        ka: "ამოცანა ორ ნაწილად იყოფოდა. პირველი, კლიენტისთვის ტვირთის სტატუსის ავტომატური მიწოდება, განაცხადის ნომრით და დღე-ღამის ნებისმიერ დროს, რომ ამით დისპეტჩერი არ დაკავებულიყო. მეორე, იმავე ფანჯარაში ახალი შეკვეთების მიღება გასაგები ფორმით და მათი მაშინვე სისტემაში შეტანა, რომ არც ერთი განაცხადი არ დაკარგულიყო. ამასთან ასისტენტმა გულწრფელად უნდა თქვას, როცა მონაცემები არ არის, და არ მოიგონოს ტვირთის ადგილმდებარეობა.",
        en: "The task split in two. First, to give the client the cargo status automatically, by reference number and at any time of day, so as not to occupy a dispatcher with it. Second, to take new orders in the same window through a clear form and enter them into the system at once, so no request is lost. At the same time the assistant must honestly say when there is no data, rather than inventing the cargo location.",
      },
      solution: {
        ru: "Собрали ассистента в Telegram как единое окно для клиентов перевозок. Когда человек присылает номер заявки, ассистент обращается к учётной системе через интеграцию и в реальном времени возвращает актуальный статус: где груз, на каком этапе и какой ориентир по срокам. Если клиент пришёл с новым заказом, тот же бот по шагам собирает маршрут, тип и объём груза и контакты, а затем заводит структурированную заявку в CRM. Когда данных по номеру нет или ситуация нестандартная, ассистент не гадает, а переключает разговор на живого диспетчера.",
        ka: "შევქმენით ასისტენტი Telegram-ში, როგორც გადაზიდვების კლიენტების ერთიანი ფანჯარა. როცა ადამიანი აგზავნის განაცხადის ნომერს, ასისტენტი მიმართავს აღრიცხვის სისტემას ინტეგრაციით და რეალურ დროში აბრუნებს აქტუალურ სტატუსს: სად არის ტვირთი, რომელ ეტაპზეა და რა ორიენტირია ვადებზე. თუ კლიენტი ახალი შეკვეთით მოვიდა, იგივე ბოტი ეტაპობრივად აგროვებს მარშრუტს, ტვირთის ტიპსა და მოცულობას და კონტაქტებს, შემდეგ კი შეაქვს სტრუქტურირებული განაცხადი CRM-ში. როცა ნომრით მონაცემები არ არის ან სიტუაცია არასტანდარტულია, ასისტენტი არ გამოიცნობს, არამედ საუბარს ცოცხალ დისპეტჩერზე გადართავს.",
        en: "We built an assistant on Telegram as a single window for freight clients. When a person sends a reference number, the assistant queries the accounting system through an integration and returns the current status in real time: where the cargo is, at what stage and the rough timeline. If the client comes with a new order, the same bot collects the route, cargo type and volume and contacts step by step, and then enters a structured request into the CRM. When there is no data for the number or the situation is non-standard, the assistant does not guess but switches the conversation to a live dispatcher.",
      },
      steps: {
        ru: "Проект занял около месяца. Сначала подключили ассистента к учётной системе статусов через API, чтобы ответы всегда брались из первоисточника, а не из копий. Затем описали форму новой заявки: какие поля обязательны и как они ложатся в CRM. Отдельно проговорили сценарии, где бот обязан передать диалог человеку. Запустили осторожно, сначала на постоянных клиентах, которые чаще всего спрашивают статус, а после обкатки открыли ассистента всем.",
        ka: "პროექტს დაახლოებით ერთი თვე დასჭირდა. ჯერ დავუკავშირეთ ასისტენტი სტატუსების აღრიცხვის სისტემას API-ს გავლით, რომ პასუხები ყოველთვის პირველწყაროდან აღებულიყო და არა ასლებიდან. შემდეგ აღვწერეთ ახალი განაცხადის ფორმა: რომელი ველებია სავალდებულო და როგორ ჯდება ისინი CRM-ში. ცალკე გავიარეთ სცენარები, სადაც ბოტი ვალდებულია დიალოგი ადამიანს გადასცეს. ფრთხილად გავუშვით, ჯერ მუდმივ კლიენტებზე, რომლებიც ყველაზე ხშირად ეკითხებიან სტატუსს, გატესტვის შემდეგ კი ასისტენტი ყველას გავუხსენით.",
        en: "The project took about a month. First we connected the assistant to the status accounting system via an API, so answers were always taken from the source rather than from copies. Then we described the new request form: which fields are required and how they fit into the CRM. Separately, we walked through the scenarios where the bot is required to hand the dialog to a human. We launched carefully, first on regular clients who ask about status most often, and after a trial we opened the assistant to everyone.",
      },
      impact: {
        ru: "После запуска справочные звонки о статусе уменьшились примерно на треть, потому что клиенты стали получать ответ в чате за секунды и в любое время, включая ночь и выходные. Диспетчеры вернули себе время на прямую работу: планирование рейсов, контроль маршрутов и разбор реальных проблем. Новые заявки перестали растворяться между каналами, ведь теперь у них одна точка входа и единый формат в CRM. Клиентам стало спокойнее: груз всегда можно проверить самому, не дожидаясь ответа по телефону.",
        ka: "გაშვების შემდეგ საცნობარო ზარები სტატუსზე დაახლოებით მესამედით შემცირდა, რადგან კლიენტებმა პასუხის მიღება ჩატში წამებში დაიწყეს, ნებისმიერ დროს, ღამისა და შაბათ-კვირის ჩათვლით. დისპეტჩერებმა დაიბრუნეს დრო პირდაპირ საქმეზე: რეისების დაგეგმვა, მარშრუტების კონტროლი და რეალური პრობლემების გარჩევა. ახალმა განაცხადებმა არხებს შორის გაქრობა შეწყვიტა, რადგან ახლა მათ ერთი შესვლის წერტილი და ერთიანი ფორმატი აქვთ CRM-ში. კლიენტები დამშვიდდნენ: ტვირთის შემოწმება ყოველთვის შეიძლება თავად, ტელეფონით პასუხის მოლოდინის გარეშე.",
        en: "After launch, reference calls about status dropped by about a third, because clients began getting an answer in the chat within seconds and at any time, including nights and weekends. Dispatchers won back time for direct work: planning routes, monitoring trips and dealing with real problems. New requests stopped dissolving between channels, since they now have one entry point and a single format in the CRM. Clients feel calmer: the cargo can always be checked by themselves, without waiting for an answer by phone.",
      },
      limitations: {
        ru: "Ассистент отвечает за информацию и приём заявок, но не разбирает спорные ситуации. Претензии по повреждению или задержке груза, перерасчёт стоимости и переговоры по рекламации он не ведёт: такие обращения сразу уходят ответственному менеджеру с полным контекстом. Бот также не меняет маршрут и не подтверждает нестандартные условия перевозки.",
        ka: "ასისტენტი პასუხისმგებელია ინფორმაციასა და განაცხადების მიღებაზე, მაგრამ სადავო სიტუაციებს არ არჩევს. ტვირთის დაზიანებაზე ან დაგვიანებაზე პრეტენზიებს, ღირებულების გადათვლასა და რეკლამაციაზე მოლაპარაკებებს ის არ აწარმოებს: ასეთი მიმართვები მაშინვე პასუხისმგებელ მენეჯერს გადაეცემა სრული კონტექსტით. ბოტი ასევე არ ცვლის მარშრუტს და არ ადასტურებს გადაზიდვის არასტანდარტულ პირობებს.",
        en: "The assistant is responsible for information and taking requests, but it does not handle disputes. Claims about damaged or delayed cargo, cost recalculation and negotiations over a complaint it does not run: such requests go straight to the responsible manager with full context. The bot also does not change the route and does not confirm non-standard shipping terms.",
      },
      methodology: {
        ru: "Считали долю справочных звонков о статусе в общем потоке обращений к диспетчерам за месяц до запуска и месяц после. Дополнительно сверяли, сколько новых заявок дошло до CRM без потерь. Показатели усреднены и приведены в диапазонах, чтобы по ним нельзя было определить компанию.",
        ka: "ვთვლიდით საცნობარო ზარების წილს სტატუსზე დისპეტჩერებთან მიმართვების საერთო ნაკადში გაშვებამდე ერთი თვისა და მის შემდეგ ერთი თვის განმავლობაში. დამატებით ვამოწმებდით, რამდენი ახალი განაცხადი მივიდა CRM-მდე დანაკარგების გარეშე. მაჩვენებლები გასაშუალოებულია და მოცემულია დიაპაზონებად, რომ მათით კომპანიის დადგენა ვერ მოხერხდეს.",
        en: "We counted the share of reference status calls in the overall flow of requests to dispatchers for a month before launch and a month after. Additionally, we checked how many new requests reached the CRM without loss. The figures are averaged and given in ranges so a company cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название компании, маршруты и имена сотрудников скрыты по NDA. Мессенджер и технические интеграции названы только чтобы показать реальный стек решения, а не в рекламных целях. Все цифры усреднены и округлены, поэтому конкретного перевозчика по ним опознать невозможно.",
        ka: "კომპანიის სახელი, მარშრუტები და თანამშრომლების სახელები NDA-ს გამო დამალულია. მესენჯერი და ტექნიკური ინტეგრაციები დასახელებულია მხოლოდ გადაწყვეტის რეალური სტეკის საჩვენებლად და არა სარეკლამო მიზნით. ყველა ციფრი გასაშუალოებულია და დამრგვალებულია, ამიტომ მათით კონკრეტული გადამზიდავის ამოცნობა შეუძლებელია.",
        en: "The company name, routes and employee names are hidden under NDA. The messenger and technical integrations are named only to show the real stack of the solution, not for advertising. All figures are averaged and rounded, so a specific carrier cannot be recognized from them.",
      },
      faq: [
        {
          q: {
            ru: "Откуда ассистент берёт статус груза?",
            ka: "საიდან იღებს ასისტენტი ტვირთის სტატუსს?",
            en: "Where does the assistant get the cargo status?",
          },
          a: {
            ru: "Из учётной системы компании по номеру заявки, в реальном времени через интеграцию. Клиент видит те же данные, что и диспетчер, но без ожидания на линии.",
            ka: "კომპანიის აღრიცხვის სისტემიდან განაცხადის ნომრით, რეალურ დროში ინტეგრაციით. კლიენტი ხედავს იმავე მონაცემებს, რასაც დისპეტჩერი, მაგრამ ხაზზე ლოდინის გარეშე.",
            en: "From the company accounting system by reference number, in real time through an integration. The client sees the same data as the dispatcher, but without waiting on the line.",
          },
        },
        {
          q: {
            ru: "Что будет, если данных по номеру нет?",
            ka: "რა მოხდება, თუ ნომრით მონაცემები არ არის?",
            en: "What if there is no data for the number?",
          },
          a: {
            ru: "Ассистент честно сообщает об этом и переключает клиента на диспетчера, а не выдумывает местоположение груза.",
            ka: "ასისტენტი გულწრფელად აცნობებს ამის შესახებ და კლიენტს დისპეტჩერზე გადართავს, ტვირთის ადგილმდებარეობას კი არ იგონებს.",
            en: "The assistant honestly says so and switches the client to a dispatcher, rather than inventing the cargo location.",
          },
        },
        {
          q: {
            ru: "Можно ли оформить новую перевозку в том же чате?",
            ka: "შესაძლებელია ახალი გადაზიდვის გაფორმება იმავე ჩატში?",
            en: "Can a new shipment be arranged in the same chat?",
          },
          a: {
            ru: "Да, бот по шагам собирает маршрут, тип груза и контакты и заводит заявку в CRM. Расчёт и подтверждение деталей делает менеджер.",
            ka: "დიახ, ბოტი ეტაპობრივად აგროვებს მარშრუტს, ტვირთის ტიპსა და კონტაქტებს და შეაქვს განაცხადი CRM-ში. გამოთვლასა და დეტალების დადასტურებას მენეჯერი აკეთებს.",
            en: "Yes, the bot collects the route, cargo type and contacts step by step and enters the request into the CRM. A manager does the pricing and confirms the details.",
          },
        },
      ],
    },
  },
  {
    slug: "fitness-club-retention",
    name: "Fitness club: membership renewal assistant",
    title: {
      ru: "Фитнес-клуб: продление абонементов и напоминания",
      ka: "ფიტნეს-კლუბი: აბონემენტების განახლება და შეხსენებები",
      en: "Fitness club: membership renewals and reminders",
    },
    category: "fitness",
    categoryLabel: { ru: "Фитнес", ka: "ფიტნესი", en: "Fitness" },
    summary: {
      ru: "Премиальный фитнес-клуб терял клиентов на ровном месте: абонемент заканчивался, никто вовремя не напоминал о продлении, и человек просто переставал ходить. Администраторы не успевали обзванивать всю базу, а без напоминаний отток к концу срока рос. Мы подключили AI-ассистента в WhatsApp, который сам пишет клиенту за несколько дней до окончания, предлагает удобные варианты продления и фиксирует решение в CRM. Удержание выросло на несколько процентных пунктов, а администраторы перестали тратить часы на ручные звонки.",
      ka: "პრემიუმ ფიტნეს-კლუბი კარგავდა კლიენტებს ცარიელ ადგილას: აბონემენტი მთავრდებოდა, განახლებას დროულად არავინ შეახსენებდა და ადამიანი უბრალოდ წყვეტდა სიარულს. ადმინისტრატორები ვერ ასწრებდნენ მთელი ბაზის დარეკვას, შეხსენებების გარეშე კი გადინება ვადის ბოლოს იზრდებოდა. ჩვენ დავამატეთ AI ასისტენტი WhatsApp-ში, რომელიც თავად წერს კლიენტს დასრულებამდე რამდენიმე დღით ადრე, სთავაზობს განახლების მოსახერხებელ ვარიანტებს და აფიქსირებს გადაწყვეტილებას CRM-ში. შენარჩუნება რამდენიმე პროცენტული პუნქტით გაიზარდა, ადმინისტრატორებმა კი ხელით ზარებზე საათების ხარჯვა შეწყვიტეს.",
      en: "A premium fitness club was losing members for no real reason: the membership ended, no one reminded them to renew in time, and the person simply stopped coming. Administrators could not call the whole base, and without reminders churn grew toward the end of the term. We added an AI assistant on WhatsApp that writes the member itself a few days before expiry, offers convenient renewal options and records the decision in the CRM. Retention rose by several percentage points, and administrators stopped spending hours on manual calls.",
    },
    metrics: [
      {
        label: { ru: "Удержание клиентов", ka: "კლიენტების შენარჩუნება", en: "Member retention" },
        before: { ru: "падало к концу срока", ka: "ეცემოდა ვადის ბოლოს", en: "fell at term end" },
        after: { ru: "выше на несколько пунктов", ka: "რამდენიმე პუნქტით მაღალი", en: "up several points" },
      },
      {
        label: { ru: "Напоминания", ka: "შეხსენებები", en: "Reminders" },
        before: { ru: "ручные обзвоны", ka: "ხელით დარეკვები", en: "manual calls" },
        after: { ru: "вовремя и всем", ka: "დროულად და ყველას", en: "on time, to all" },
      },
      {
        label: { ru: "Продление", ka: "განახლება", en: "Renewal" },
        before: { ru: "визит на ресепшн", ka: "ვიზიტი მიმღებთან", en: "a front-desk visit" },
        after: { ru: "в один чат", ka: "ერთ ჩატში", en: "in one chat" },
      },
    ],
    slogan: {
      ru: "Напоминания об окончании абонемента и продление в один чат",
      ka: "აბონემენტის დასრულების შეხსენებები და განახლება ერთ ჩატში",
      en: "Membership expiry reminders and renewal in one chat",
    },
    description: {
      ru: "AI-ассистент напоминает об окончании абонемента и помогает продлить его в переписке, повышая удержание клиентов.",
      ka: "AI ასისტენტი შეახსენებს აბონემენტის დასრულებას და ეხმარება მის განახლებაში მიმოწერაში, ზრდის კლიენტების შენარჩუნებას.",
      en: "An AI assistant reminds members about expiry and helps renew right in the chat, improving retention.",
    },
    techStack: ["WhatsApp Business API", "Custom CRM", "Google Calendar"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Фитнес-клуб премиум-класса с большой базой постоянных клиентов и абонементами на разные сроки. Основа выручки здесь не первая продажа, а продление: клиент, который вовремя обновил абонемент, остаётся на месяцы вперёд. Но напоминания об окончании держались на администраторах, у которых и так полно работы на ресепшене. Обзвонить каждого, у кого истекает срок, физически не получалось, и часть клиентов тихо отваливалась.",
        ka: "პრემიუმ კლასის ფიტნეს-კლუბი მუდმივი კლიენტების დიდი ბაზითა და სხვადასხვა ვადის აბონემენტებით. შემოსავლის საფუძველი აქ პირველი გაყიდვა კი არა, განახლებაა: კლიენტი, რომელმაც აბონემენტი დროულად განაახლა, თვეების წინ რჩება. მაგრამ დასრულების შეხსენებები ადმინისტრატორებზე ეყრდნობოდა, რომლებსაც ისედაც უამრავი საქმე აქვთ მიმღებთან. ყველასთვის დარეკვა, ვისაც ვადა ეწურება, ფიზიკურად ვერ ხერხდებოდა და კლიენტების ნაწილი ჩუმად სცილდებოდა.",
        en: "A premium fitness club with a large base of regular members and memberships of various lengths. The core of the revenue here is not the first sale but the renewal: a member who renews on time stays for months ahead. But expiry reminders rested on the administrators, who already have plenty of work at the front desk. Calling everyone whose term is running out was physically impossible, and some members quietly dropped off.",
      },
      diagnostic: {
        ru: "Мы посмотрели, как ведёт себя база к концу срока абонемента, и увидели предсказуемый провал. Отток заметно рос именно в последние дни действия абонемента: без напоминания человек откладывал продление, потом переставал ходить и в итоге не возвращался. Ручные обзвоны закрывали лишь часть базы, зависели от загрузки администратора и никак не масштабировались. Получалось, что клуб терял уже привлечённых и лояльных клиентов не из-за качества услуг, а из-за молчания в нужный момент.",
        ka: "ჩვენ დავაკვირდით, როგორ იქცევა ბაზა აბონემენტის ვადის ბოლოსკენ, და დავინახეთ მოსალოდნელი ჩავარდნა. გადინება შესამჩნევად იზრდებოდა სწორედ აბონემენტის მოქმედების ბოლო დღეებში: შეხსენების გარეშე ადამიანი აყოვნებდა განახლებას, შემდეგ წყვეტდა სიარულს და საბოლოოდ აღარ ბრუნდებოდა. ხელით დარეკვები მხოლოდ ბაზის ნაწილს ფარავდა, ადმინისტრატორის დატვირთვაზე იყო დამოკიდებული და არ მასშტაბირდებოდა. გამოდიოდა, რომ კლუბი უკვე მოზიდულ და ლოიალურ კლიენტებს კარგავდა არა სერვისის ხარისხის, არამედ საჭირო მომენტში დუმილის გამო.",
        en: "We looked at how the base behaves toward the end of the membership term and saw a predictable dip. Churn grew noticeably in exactly the last days of the membership: without a reminder the person put off renewal, then stopped coming and in the end did not return. Manual calls covered only part of the base, depended on the administrator workload and did not scale at all. It turned out the club was losing already acquired and loyal members not because of service quality, but because of silence at the right moment.",
      },
      problem: {
        ru: "Нужно было закрыть разрыв между окончанием абонемента и решением клиента продлить. Ассистент должен заранее и без навязчивости напомнить о том, что срок подходит к концу, предложить понятные варианты и дать продлить прямо в переписке, без похода на ресепшн. Важно было не превратить заботу в спам: одно уместное сообщение вовремя вместо потока рассылок, с возможностью легко отказаться.",
        ka: "საჭირო იყო აბონემენტის დასრულებასა და კლიენტის განახლების გადაწყვეტილებას შორის ნაპრალის დახურვა. ასისტენტმა წინასწარ და შეუმჩნევლად უნდა შეახსენოს, რომ ვადა იწურება, შესთავაზოს გასაგები ვარიანტები და მისცეს განახლების საშუალება პირდაპირ მიმოწერაში, მიმღებთან მისვლის გარეშე. მნიშვნელოვანი იყო, ზრუნვა სპამად არ ქცეულიყო: ერთი მართებული შეტყობინება დროულად, დაგზავნების ნაკადის ნაცვლად, მარტივად უარის თქმის შესაძლებლობით.",
        en: "We needed to close the gap between the membership ending and the member decision to renew. The assistant should remind them in advance and without pressure that the term is coming to an end, offer clear options and let them renew right in the chat, without a trip to the front desk. It was important not to turn care into spam: one fitting message on time instead of a stream of mailings, with an easy way to opt out.",
      },
      solution: {
        ru: "Собрали ассистента в WhatsApp, который следит за сроками по базе и сам выходит на связь за несколько дней до окончания абонемента. В спокойном, дружелюбном тоне он напоминает клиенту, что срок подходит к концу, и предлагает удобные варианты продления с учётом того, каким абонементом человек пользовался. Решение сразу фиксируется в CRM, а тех, кто готов продлить или хочет обсудить условия, ассистент передаёт менеджеру с историей общения. Сообщение приходит один раз и вовремя, а отписаться можно в один клик.",
        ka: "შევქმენით ასისტენტი WhatsApp-ში, რომელიც თვალს ადევნებს ვადებს ბაზის მიხედვით და თავად უკავშირდება კლიენტს აბონემენტის დასრულებამდე რამდენიმე დღით ადრე. მშვიდი, მეგობრული ტონით ის შეახსენებს კლიენტს, რომ ვადა იწურება, და სთავაზობს განახლების მოსახერხებელ ვარიანტებს იმის გათვალისწინებით, რომელი აბონემენტით სარგებლობდა ადამიანი. გადაწყვეტილება მაშინვე ფიქსირდება CRM-ში, ხოლო მათ, ვინც განახლებისთვის მზადაა ან პირობების განხილვა უნდა, ასისტენტი გადასცემს მენეჯერს ურთიერთობის ისტორიით. შეტყობინება მოდის ერთხელ და დროულად, გამოწერის გაუქმება კი ერთი შეხებით შეიძლება.",
        en: "We built an assistant on WhatsApp that watches the terms across the base and reaches out itself a few days before the membership ends. In a calm, friendly tone it reminds the member that the term is coming to an end and offers convenient renewal options based on which membership the person used. The decision is recorded in the CRM at once, and those ready to renew or wanting to discuss terms are passed by the assistant to a manager with the chat history. The message arrives once and on time, and opting out takes one tap.",
      },
      steps: {
        ru: "Запуск занял около трёх недель. Сначала выгрузили сроки действующих абонементов и синхронизировали их с ассистентом, чтобы напоминание уходило ровно тогда, когда нужно. Затем прописали сценарий: за сколько дней писать, какие варианты предлагать и как звучит сообщение, чтобы оно читалось как забота, а не как продажа. Обкатали на небольшой группе клиентов, поправили формулировки по реальным ответам и только потом включили напоминания для всей базы.",
        ka: "გაშვებას დაახლოებით სამი კვირა დასჭირდა. ჯერ გადმოვწერეთ მოქმედი აბონემენტების ვადები და დავასინქრონეთ ისინი ასისტენტთან, რომ შეხსენება ზუსტად მაშინ გასულიყო, როცა საჭიროა. შემდეგ გავწერეთ სცენარი: რამდენი დღით ადრე მივწეროთ, რომელი ვარიანტები შევთავაზოთ და როგორ ჟღერს შეტყობინება, რომ ის ზრუნვად წაიკითხებოდეს და არა გაყიდვად. გავტესტეთ კლიენტების პატარა ჯგუფზე, გავასწორეთ ფორმულირებები რეალური პასუხების მიხედვით და მხოლოდ მერე ჩავრთეთ შეხსენებები მთელი ბაზისთვის.",
        en: "The launch took about three weeks. First we exported the terms of active memberships and synced them with the assistant so the reminder went out exactly when needed. Then we scripted the scenario: how many days ahead to write, which options to offer and how the message sounds, so it reads as care rather than a sale. We ran it on a small group of members, tuned the wording from real replies and only then switched reminders on for the whole base.",
      },
      impact: {
        ru: "После запуска удержание выросло на несколько процентных пунктов, потому что клиенты стали продлевать вовремя, а не вспоминать об абонементе спустя месяц после окончания. Администраторы избавились от бесконечных обзвонов и переключились на живую работу в зале и на ресепшене. Продление превратилось в короткий диалог в мессенджере, и это удобнее и для клиента, и для клуба. Важно, что напоминания не вызвали раздражения: люди воспринимают одно своевременное сообщение как нормальный сервис.",
        ka: "გაშვების შემდეგ შენარჩუნება რამდენიმე პროცენტული პუნქტით გაიზარდა, რადგან კლიენტებმა განახლება დროულად დაიწყეს და არა აბონემენტის გახსენება დასრულებიდან თვის შემდეგ. ადმინისტრატორები გათავისუფლდნენ გაუთავებელი დარეკვებისგან და გადაერთვნენ ცოცხალ საქმეზე დარბაზსა და მიმღებთან. განახლება მესენჯერში მოკლე დიალოგად იქცა, ეს კი უფრო მოსახერხებელია კლიენტისთვისაც და კლუბისთვისაც. მნიშვნელოვანია, რომ შეხსენებებმა გაღიზიანება არ გამოიწვია: ადამიანები ერთ დროულ შეტყობინებას ნორმალურ სერვისად აღიქვამენ.",
        en: "After launch, retention rose by several percentage points, because members began renewing on time rather than remembering the membership a month after it ended. Administrators were freed from endless calls and switched to live work in the gym and at the front desk. Renewal turned into a short dialog in the messenger, which is more convenient both for the member and for the club. Importantly, the reminders did not cause irritation: people take one timely message as normal service.",
      },
      limitations: {
        ru: "Ассистент отвечает за своевременное напоминание и оформление продления, но не решает индивидуальные споры. Заморозку абонемента по болезни, возврат средств или пересчёт при пропущенных днях он не согласовывает: такие случаи сразу уходят менеджеру. Бот также не продаёт дорогие персональные пакеты, где нужен живой разговор с тренером или руководителем.",
        ka: "ასისტენტი პასუხისმგებელია დროულ შეხსენებასა და განახლების გაფორმებაზე, მაგრამ ინდივიდუალურ დავებს არ ჭრის. აბონემენტის გაყინვას ავადმყოფობის გამო, თანხის დაბრუნებას ან გამოტოვებულ დღეებზე გადათვლას ის არ ათანხმებს: ასეთი შემთხვევები მაშინვე მენეჯერს გადაეცემა. ბოტი ასევე არ ყიდის ძვირ პერსონალურ პაკეტებს, სადაც საჭიროა ცოცხალი საუბარი მწვრთნელთან ან ხელმძღვანელთან.",
        en: "The assistant is responsible for a timely reminder and processing the renewal, but it does not resolve individual disputes. Freezing a membership due to illness, refunds or recalculation for missed days it does not approve: such cases go straight to a manager. The bot also does not sell expensive personal packages, where a live talk with a trainer or manager is needed.",
      },
      methodology: {
        ru: "Сравнивали удержание и долю продлений за два месяца до подключения ассистента и два месяца после. Считали по данным CRM на сопоставимых по сезону периодах, чтобы не спутать эффект с обычными колебаниями посещаемости. Все цифры округлены и даны как диапазоны.",
        ka: "ვადარებდით შენარჩუნებასა და განახლებების წილს ასისტენტის დამატებამდე ორი თვისა და მის შემდეგ ორი თვის განმავლობაში. ვთვლიდით CRM-ის მონაცემებით სეზონურად თანხვედრ პერიოდებზე, რომ ეფექტი დასწრების ჩვეულებრივ რყევებში არ აგვერია. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებად.",
        en: "We compared retention and the share of renewals for two months before connecting the assistant and two months after. We counted from CRM data over seasonally comparable periods, so as not to confuse the effect with ordinary swings in attendance. All figures are rounded and given as ranges.",
      },
      anonymityNote: {
        ru: "Название клуба, адреса и клиентскую базу не раскрываем по NDA. Мессенджер и системы указаны только чтобы показать реальный стек интеграций, а не как реклама. Показатели округлены и приведены в диапазонах, поэтому опознать конкретный клуб по ним нельзя.",
        ka: "კლუბის სახელს, მისამართებსა და კლიენტთა ბაზას NDA-ს გამო არ ვამხელთ. მესენჯერი და სისტემები მითითებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა რეკლამად. მაჩვენებლები დამრგვალებულია და მოცემულია დიაპაზონებად, ამიტომ მათით კონკრეტული კლუბის ამოცნობა შეუძლებელია.",
        en: "We do not disclose the club name, addresses or member base under NDA. The messenger and systems are named only to show the real integration stack, not as advertising. The figures are rounded and given in ranges, so a specific club cannot be recognized from them.",
      },
      faq: [
        {
          q: {
            ru: "Не выглядят ли напоминания навязчиво?",
            ka: "შეხსენებები ხომ არ გამოიყურება ინტრუზიულად?",
            en: "Do the reminders feel intrusive?",
          },
          a: {
            ru: "Ассистент пишет один раз и заранее, спокойным тоном, а отказаться от рассылки можно в один клик. Это воспринимается как забота, а не как спам.",
            ka: "ასისტენტი წერს ერთხელ და წინასწარ, მშვიდი ტონით, გამოწერის გაუქმება კი ერთი შეხებით შეიძლება. ეს ზრუნვად აღიქმება და არა სპამად.",
            en: "The assistant writes once and in advance, in a calm tone, and opting out of the mailing takes one tap. It is taken as care, not as spam.",
          },
        },
        {
          q: {
            ru: "Можно ли продлить абонемент прямо в чате?",
            ka: "შესაძლებელია აბონემენტის განახლება პირდაპირ ჩატში?",
            en: "Can a membership be renewed right in the chat?",
          },
          a: {
            ru: "Да, клиент выбирает вариант в переписке, ассистент фиксирует продление в CRM и при необходимости передаёт данные администратору. Идти на ресепшн не нужно.",
            ka: "დიახ, კლიენტი ირჩევს ვარიანტს მიმოწერაში, ასისტენტი აფიქსირებს განახლებას CRM-ში და საჭიროების შემთხვევაში გადასცემს მონაცემებს ადმინისტრატორს. მიმღებთან მისვლა საჭირო არ არის.",
            en: "Yes, the member picks an option in the chat, the assistant records the renewal in the CRM and, if needed, passes the data to the administrator. There is no need to go to the front desk.",
          },
        },
        {
          q: {
            ru: "Что с заморозкой и возвратом?",
            ka: "რა ხდება გაყინვასა და დაბრუნებასთან?",
            en: "What about freezing and refunds?",
          },
          a: {
            ru: "Индивидуальные случаи по заморозке или возврату ассистент не решает сам, а сразу передаёт менеджеру с историей общения, чтобы условия согласовал человек.",
            ka: "გაყინვასა თუ დაბრუნებაზე ინდივიდუალურ შემთხვევებს ასისტენტი თავად არ ჭრის, არამედ მაშინვე გადასცემს მენეჯერს ურთიერთობის ისტორიით, რომ პირობები ადამიანმა შეათანხმოს.",
            en: "Individual cases of freezing or refunds the assistant does not decide itself, but passes straight to a manager with the chat history so a human agrees the terms.",
          },
        },
      ],
    },
  },
  {
    slug: "legal-firm-intake",
    name: "Law firm: client intake and routing",
    title: {
      ru: "Юридическая фирма: приём обращений и маршрутизация",
      ka: "იურიდიული ფირმა: მიმართვების მიღება და მარშრუტიზაცია",
      en: "Law firm: client intake and routing",
    },
    category: "legal",
    categoryLabel: { ru: "Юристы", ka: "იურისტები", en: "Legal" },
    summary: {
      ru: "Юридическая фирма с несколькими направлениями теряла обращения в общем почтовом ящике: заявки не были структурированы, часть попадала не к тому юристу, а первичный ответ иногда занимал больше суток. Мы собрали AI-ассистента в WhatsApp и Telegram, который аккуратно выясняет суть дела, определяет направление и передаёт структурированную карточку профильному юристу с пометкой срочности. Первый ответ ускорился с суток до часов, а нецелевые вопросы отсеиваются раньше, чем займут специалиста.",
      ka: "იურიდიული ფირმა რამდენიმე მიმართულებით კარგავდა მიმართვებს საერთო ფოსტის ყუთში: განაცხადები არ იყო სტრუქტურირებული, ნაწილი არასწორ იურისტს ხვდებოდა, პირველად პასუხს კი ხანდახან ერთ დღეზე მეტი სჭირდებოდა. ჩვენ შევქმენით AI ასისტენტი WhatsApp-სა და Telegram-ში, რომელიც ფრთხილად არკვევს საქმის არსს, განსაზღვრავს მიმართულებას და გადასცემს სტრუქტურირებულ ბარათს პროფილურ იურისტს სისწრაფის აღნიშვნით. პირველი პასუხი დღიდან საათებამდე დაჩქარდა, არასამიზნე კითხვებს კი ასისტენტი სპეციალისტის დაკავებამდე ცხრის.",
      en: "A multi-practice law firm was losing requests in a shared inbox: they were not structured, some reached the wrong lawyer, and the first reply sometimes took more than a day. We built an AI assistant on WhatsApp and Telegram that carefully clarifies the essence of the case, determines the practice area and hands a structured card to the right lawyer with an urgency flag. The first reply sped up from a day to hours, and off-target questions are filtered out before they occupy a specialist.",
    },
    metrics: [
      {
        label: { ru: "Первичный ответ", ka: "პირველადი პასუხი", en: "First reply" },
        before: { ru: "больше суток", ka: "ერთ დღეზე მეტი", en: "over a day" },
        after: { ru: "часы, не сутки", ka: "საათები და არა დღეები", en: "hours, not days" },
      },
      {
        label: { ru: "Маршрутизация", ka: "მარშრუტიზაცია", en: "Routing" },
        before: { ru: "часть шла не туда", ka: "ნაწილი არასწორ მისამართზე", en: "some misrouted" },
        after: { ru: "сразу нужному юристу", ka: "პირდაპირ საჭირო იურისტთან", en: "straight to the right lawyer" },
      },
      {
        label: { ru: "Фокус юриста", ka: "იურისტის ფოკუსი", en: "Lawyer focus" },
        before: { ru: "разбор общего ящика", ka: "საერთო ყუთის დახარისხება", en: "sorting a shared inbox" },
        after: { ru: "только профильные дела", ka: "მხოლოდ პროფილური საქმეები", en: "only relevant cases" },
      },
    ],
    slogan: {
      ru: "Сбор сути дела и передача нужному юристу без хаоса",
      ka: "საქმის არსის შეკრება და საჭირო იურისტთან გადაცემა ქაოსის გარეშე",
      en: "Capturing the case essence and routing to the right lawyer",
    },
    description: {
      ru: "AI-ассистент собирает суть обращения, отсекает нецелевые вопросы и направляет клиента профильному юристу, ускоряя первичный ответ.",
      ka: "AI ასისტენტი აგროვებს მიმართვის არსს, ცხრის არასამიზნე კითხვებს და მიმართავს კლიენტს პროფილურ იურისტთან, აჩქარებს პირველად პასუხს.",
      en: "An AI assistant captures the essence of a request, filters out off-target questions and routes the client to the right specialist, speeding up the first reply.",
    },
    techStack: ["WhatsApp Business API", "Telegram", "RAG", "Custom CRM"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Юридическая компания вела дела сразу по нескольким направлениям и принимала обращения через почту, WhatsApp и Telegram. Всё стекалось в один общий ящик без разметки по темам. Разбирал поток дежурный сотрудник, вручную пересылая письма коллегам. В результате клиент, у которого горели сроки, мог сутки ждать, пока его вопрос вообще дойдёт до юриста нужной специализации, и за это время нередко уходил в другую фирму.",
        ka: "იურიდიული კომპანია აწარმოებდა საქმეებს ერთდროულად რამდენიმე მიმართულებით და იღებდა მიმართვებს ფოსტით, WhatsApp-სა და Telegram-ით. ყველაფერი ერთ საერთო ყუთში იყრიდა თავს თემების მიხედვით დაყოფის გარეშე. ნაკადს არჩევდა მორიგე თანამშრომელი, ხელით უგზავნიდა წერილებს კოლეგებს. შედეგად კლიენტს, რომელსაც ვადები ეწურებოდა, შეეძლო მთელი დღე ეცადა, სანამ მისი კითხვა საჭირო სპეციალიზაციის იურისტს მიუვიდოდა, და ამ დროს ხშირად სხვა ფირმაში გადადიოდა.",
        en: "A law firm ran cases across several practice areas at once and received requests by email, WhatsApp and Telegram. Everything flowed into one shared inbox with no tagging by topic. A duty staffer sorted the stream, manually forwarding letters to colleagues. As a result a client facing a deadline could wait a full day just for the question to reach a lawyer of the right specialization, and often walked to another firm in that time.",
      },
      diagnostic: {
        ru: "Мы разобрали месяц входящих и увидели, что беда не в объёме, а в отсутствии структуры. Обращения приходили без ключевых деталей, поэтому дежурный переспрашивал одно и то же: какое направление, есть ли сроки, что именно случилось. Часть писем пересылалась не тому юристу и возвращалась по кругу, а часть просто оседала в ящике непрочитанной. Каждое потерянное обращение это не только упущенный гонорар, но и репутационный риск.",
        ka: "ჩვენ გავარჩიეთ თვის შემომავალი და დავინახეთ, რომ პრობლემა მოცულობაში კი არა, სტრუქტურის არარსებობაშია. მიმართვები მოდიოდა ძირითადი დეტალების გარეშე, ამიტომ მორიგე ერთსა და იმავეს იმეორებდა: რომელი მიმართულება, არის თუ არა ვადები, კონკრეტულად რა მოხდა. წერილების ნაწილი არასწორ იურისტს ეგზავნებოდა და წრეზე ბრუნდებოდა, ნაწილი კი უბრალოდ წაუკითხავად რჩებოდა ყუთში. ყოველი დაკარგული მიმართვა არა მხოლოდ გამორჩენილი ჰონორარი, არამედ რეპუტაციული რისკია.",
        en: "We went through a month of incoming messages and saw that the problem was not volume but the lack of structure. Requests arrived without key details, so the duty staffer kept re-asking the same things: which practice area, are there deadlines, what exactly happened. Some letters were forwarded to the wrong lawyer and came back in circles, and some simply sat unread in the inbox. Every lost request is not only a missed fee but a reputational risk.",
      },
      problem: {
        ru: "Задача была тонкой: собрать суть дела так, чтобы клиент не почувствовал холодную анкету. Юридическое обращение часто личное и тревожное, и сухая форма из десяти полей отпугивает сильнее, чем помогает. Ассистент должен по-человечески уточнить направление, характер вопроса и наличие сроков, отделить целевые обращения от откровенно не наших, и передать юристу готовую карточку, а не сырой поток текста. При этом никаких юридических оценок он давать не вправе.",
        ka: "ამოცანა ნატიფი იყო: საქმის არსი ისე შეგვეკრიბა, რომ კლიენტს ცივი კითხვარი არ ეგრძნო. იურიდიული მიმართვა ხშირად პირადი და შემაშფოთებელია, მშრალი ათველიანი ფორმა კი უფრო აფრთხობს, ვიდრე ეხმარება. ასისტენტმა ადამიანურად უნდა დააზუსტოს მიმართულება, კითხვის ხასიათი და ვადების არსებობა, გამიჯნოს სამიზნე მიმართვები აშკარად არაჩვენებისგან და იურისტს გადასცეს მზა ბარათი და არა ტექსტის ნედლი ნაკადი. ამასთან იურიდიული შეფასების გაცემის უფლება მას არ აქვს.",
        en: "The task was delicate: capture the essence of the case without making the client feel like a cold questionnaire. A legal request is often personal and anxious, and a dry ten-field form scares people off more than it helps. The assistant should clarify the practice area, the nature of the question and any deadlines in a human way, separate target requests from clearly-not-ours, and hand the lawyer a ready card rather than a raw stream of text. And it may give no legal assessment at all.",
      },
      solution: {
        ru: "Собрали ассистента, который встречает клиента в WhatsApp и Telegram как единую приёмную. В спокойном диалоге он выясняет направление, суть вопроса и наличие сроков, а по ходу подсказывает, какие документы стоит подготовить. Дальше он определяет профиль дела, помечает срочность и передаёт юристу структурированную карточку со всеми деталями. Разговор ведётся в сдержанном тоне фирмы, ассистент не даёт правовых советов и не обещает исход, а честно говорит, что оценку даст живой юрист.",
        ka: "შევქმენით ასისტენტი, რომელიც კლიენტს WhatsApp-სა და Telegram-ში ხვდება როგორც ერთიანი მისაღები. მშვიდ დიალოგში ის არკვევს მიმართულებას, კითხვის არსსა და ვადების არსებობას, გზადაგზა კი მიანიშნებს, რომელი დოკუმენტების მომზადება ღირს. შემდეგ ის განსაზღვრავს საქმის პროფილს, აღნიშნავს სისწრაფეს და იურისტს გადასცემს სტრუქტურირებულ ბარათს ყველა დეტალით. საუბარი ფირმის თავშეკავებულ ტონში მიდის, ასისტენტი არ იძლევა სამართლებრივ რჩევებს და არ ჰპირდება შედეგს, არამედ გულწრფელად ამბობს, რომ შეფასებას ცოცხალი იურისტი მისცემს.",
        en: "We built an assistant that meets the client on WhatsApp and Telegram as a single reception desk. In a calm dialog it clarifies the practice area, the substance of the question and any deadlines, and along the way hints at which documents are worth preparing. It then determines the case profile, flags urgency and hands the lawyer a structured card with all the details. The conversation keeps the firm's restrained tone, the assistant gives no legal advice and promises no outcome, but honestly says a real lawyer will give the assessment.",
      },
      steps: {
        ru: "Проект занял около четырёх недель. Сначала вместе с фирмой разложили практику по направлениям и описали правила маршрутизации: какие признаки к какому юристу ведут. Затем подключили ассистента к CRM, чтобы каждая карточка попадала в общий журнал и не терялась. Отдельно проговорили границы: ассистент собирает факты, но не консультирует. Обкатали сценарий на одном канале, поправили формулировки по живым диалогам, чтобы тон звучал участливо, и только затем открыли приём на всех каналах.",
        ka: "პროექტს დაახლოებით ოთხი კვირა დასჭირდა. ჯერ ფირმასთან ერთად პრაქტიკა მიმართულებებად დავყავით და აღვწერეთ მარშრუტიზაციის წესები: რომელი ნიშნები რომელ იურისტთან მიდის. შემდეგ ასისტენტი დავუკავშირეთ CRM-ს, რომ ყოველი ბარათი საერთო ჟურნალში მოხვედრილიყო და არ დაკარგულიყო. ცალკე შევათანხმეთ საზღვრები: ასისტენტი აგროვებს ფაქტებს, მაგრამ არ კონსულტირებს. სცენარი გავტესტეთ ერთ არხზე, ცოცხალი დიალოგებით გავასწორეთ ფორმულირებები, რომ ტონი თანამგრძნობი ჟღერდეს, და მხოლოდ მერე გავხსენით მიღება ყველა არხზე.",
        en: "The project took about four weeks. First, together with the firm, we laid out the practice by area and described the routing rules: which signals lead to which lawyer. Then we connected the assistant to the CRM so every card lands in a shared log and does not get lost. Separately we agreed the boundaries: the assistant collects facts but does not consult. We ran the scenario on one channel, tuned the wording from real dialogs so the tone sounded caring, and only then opened intake on all channels.",
      },
      impact: {
        ru: "После запуска ассистент сам ведёт первичный приём почти всех обращений. Время до первого содержательного ответа упало с суток до нескольких часов, потому что дело сразу приходит к профильному юристу с готовой карточкой, а не блуждает по общему ящику. Нецелевые вопросы отсеиваются на входе и больше не занимают дорогое время специалистов. Юристы вместо разбора почты занимаются собственно делами, а клиент с первого сообщения чувствует, что его услышали.",
        ka: "გაშვების შემდეგ ასისტენტი თავად უძღვება თითქმის ყველა მიმართვის პირველად მიღებას. პირველ შინაარსიან პასუხამდე დრო დღიდან რამდენიმე საათამდე დაეცა, რადგან საქმე მაშინვე პროფილურ იურისტს მიდის მზა ბარათით და არა საერთო ყუთში დახეტიალობს. არასამიზნე კითხვებს ასისტენტი შესვლისთანავე ცხრის და ისინი აღარ ართმევს სპეციალისტებს ძვირფას დროს. იურისტები ფოსტის დახარისხების ნაცვლად თავად საქმეებით არიან დაკავებული, კლიენტი კი პირველივე შეტყობინებიდან გრძნობს, რომ მოისმინეს.",
        en: "After launch the assistant handles the first pass of almost all requests itself. The time to a first substantive reply dropped from a day to a few hours, because the case goes straight to the right lawyer with a ready card instead of wandering the shared inbox. Off-target questions are filtered at the entrance and no longer take the specialists' expensive time. Instead of sorting mail, the lawyers work on cases themselves, and from the very first message the client feels heard.",
      },
      limitations: {
        ru: "Ассистент намеренно не консультирует. Он не толкует нормы, не оценивает перспективы дела и не называет стоимость услуг: любой правовой вывод остаётся за живым юристом. Как только вопрос требует оценки, а не сбора фактов, диалог уходит специалисту вместе с полным контекстом переписки.",
        ka: "ასისტენტი განზრახ არ კონსულტირებს. ის არ განმარტავს ნორმებს, არ აფასებს საქმის პერსპექტივას და არ ასახელებს მომსახურების ღირებულებას: ნებისმიერი სამართლებრივი დასკვნა ცოცხალ იურისტს რჩება. როგორც კი კითხვა შეფასებას საჭიროებს და არა ფაქტების შეკრებას, დიალოგი სპეციალისტს გადაეცემა მიმოწერის სრულ კონტექსტთან ერთად.",
        en: "The assistant deliberately does not consult. It does not interpret rules, assess a case outlook or name the cost of services: any legal conclusion stays with a live lawyer. As soon as a question calls for judgment rather than fact-gathering, the dialog goes to a specialist together with the full context of the correspondence.",
      },
      methodology: {
        ru: "Оценивали по журналу обращений и данным CRM за месяц до запуска и месяц после стабилизации. Сравнивали время до первого содержательного ответа, долю верно маршрутизированных дел и число потерянных писем. Все цифры округлены и даны диапазонами, чтобы по ним нельзя было опознать фирму.",
        ka: "შევაფასეთ მიმართვების ჟურნალითა და CRM-ის მონაცემებით გაშვებამდე ერთი თვისა და სტაბილიზაციის შემდეგ ერთი თვის განმავლობაში. ვადარებდით პირველ შინაარსიან პასუხამდე დროს, სწორად მარშრუტიზებული საქმეების წილსა და დაკარგული წერილების რაოდენობას. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებში, რომ მათით ფირმის ამოცნობა ვერ მოხერხდეს.",
        en: "We measured from the request log and CRM data for a month before launch and a month after stabilization. We compared the time to a first substantive reply, the share of correctly routed cases and the number of lost letters. All figures are rounded and given in ranges so the firm cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название фирмы, направления практики и имена юристов скрыты по NDA. Мессенджеры и CRM названы только чтобы показать реальный стек интеграций, а не как реклама. Ничего из содержания конкретных дел мы не раскрываем, а цифры округлены до диапазонов.",
        ka: "ფირმის სახელი, პრაქტიკის მიმართულებები და იურისტების სახელები NDA-ს გამო დამალულია. მესენჯერები და CRM დასახელებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. კონკრეტული საქმეების შინაარსიდან არაფერს ვამხელთ, ციფრები კი დიაპაზონებამდეა დამრგვალებული.",
        en: "The firm name, practice areas and lawyer names are hidden under NDA. The messengers and CRM are named only to show the real integration stack, not as advertising. We disclose nothing from the content of specific cases, and the figures are rounded to ranges.",
      },
      faq: [
        {
          q: {
            ru: "Даёт ли бот юридические советы?",
            ka: "იძლევა თუ არა ბოტი იურიდიულ რჩევებს?",
            en: "Does the bot give legal advice?",
          },
          a: {
            ru: "Нет, он только выясняет суть дела и передаёт его профильному юристу. Любую правовую оценку даёт живой специалист.",
            ka: "არა, ის მხოლოდ არკვევს საქმის არსს და გადასცემს პროფილურ იურისტს. ნებისმიერ სამართლებრივ შეფასებას ცოცხალი სპეციალისტი იძლევა.",
            en: "No, it only clarifies the essence of the case and passes it to the right lawyer. Any legal assessment is given by a live specialist.",
          },
        },
        {
          q: {
            ru: "Как определяется срочность обращения?",
            ka: "როგორ განისაზღვრება მიმართვის სისწრაფე?",
            en: "How is the urgency of a request determined?",
          },
          a: {
            ru: "По признакам в самом сообщении, например по срокам подачи документов или дате заседания. Такие дела помечаются приоритетом и уходят юристу первыми.",
            ka: "თავად შეტყობინების ნიშნებით, მაგალითად დოკუმენტების წარდგენის ვადებით ან სხდომის თარიღით. ასეთი საქმეები პრიორიტეტით აღინიშნება და იურისტს პირველები მიდის.",
            en: "By signals in the message itself, such as document filing deadlines or a hearing date. Such cases are flagged as priority and reach the lawyer first.",
          },
        },
        {
          q: {
            ru: "Что происходит с обращением не по профилю фирмы?",
            ka: "რა ხდება ფირმის პროფილის გარეშე მიმართვასთან?",
            en: "What happens to a request outside the firm's profile?",
          },
          a: {
            ru: "Бот вежливо объясняет, что фирма таким не занимается, и не тратит время юриста впустую. Контакт при этом сохраняется в базе.",
            ka: "ბოტი თავაზიანად განმარტავს, რომ ფირმა ამით არ არის დაკავებული, და იურისტის დროს ტყუილად არ ხარჯავს. კონტაქტი ამასთან ბაზაში ინახება.",
            en: "The bot politely explains that the firm does not handle such matters and does not waste a lawyer's time. The contact is kept in the base.",
          },
        },
      ],
    },
  },
  {
    slug: "auto-body-repair-estimate",
    name: "Auto body shop: photo estimate and booking",
    title: {
      ru: "Кузовной автосервис: предварительная оценка по фото",
      ka: "ავტოსახელოსნო: წინასწარი შეფასება ფოტოთი",
      en: "Auto body shop: photo estimate and booking",
    },
    category: "auto",
    categoryLabel: { ru: "Автосервис", ka: "ავტოსახელოსნო", en: "Auto service" },
    summary: {
      ru: "Кузовной автосервис тонул в однотипных вопросах сколько будет стоить и когда можно приехать: мастера отрывались от работы ради ответа, а часть клиентов уходила, не дождавшись. Мы собрали AI-ассистента в Instagram и WhatsApp, который принимает фото повреждения, даёт понятную предварительную вилку цены и тут же предлагает свободное время на осмотр. Мастера перестали отвлекаться на переписку, а из обращения в визит стало доходить заметно больше клиентов.",
      ka: "კუზოვის ავტოსახელოსნო იძირებოდა ერთგვაროვან კითხვებში რა ეღირება და როდის შეიძლება მისვლა: ოსტატები მუშაობას წყვეტდნენ პასუხისთვის, კლიენტების ნაწილი კი მოლოდინში ტოვებდა. ჩვენ შევქმენით AI ასისტენტი Instagram-სა და WhatsApp-ში, რომელიც იღებს დაზიანების ფოტოს, იძლევა გასაგებ წინასწარ ფასის დიაპაზონს და მაშინვე სთავაზობს თავისუფალ დროს დათვალიერებაზე. ოსტატებმა მიმოწერაზე ყურადღების გაფანტვა შეწყვიტეს, მიმართვიდან ვიზიტამდე კი შესამჩნევად მეტი კლიენტი აღწევს.",
      en: "An auto body shop was drowning in the same questions of how much it will cost and when they can come: mechanics broke off work to answer, and some clients left without waiting. We built an AI assistant on Instagram and WhatsApp that takes a photo of the damage, gives a clear preliminary price range and immediately offers a free time for inspection. The mechanics stopped being pulled into chats, and noticeably more clients now make it from a request to a visit.",
    },
    metrics: [
      {
        label: { ru: "Ответ по цене", ka: "პასუხი ფასზე", en: "Price reply" },
        before: { ru: "ждали мастера", ka: "ოსტატს ელოდნენ", en: "waited for a mechanic" },
        after: { ru: "вилка сразу в чате", ka: "დიაპაზონი მაშინვე ჩატში", en: "range right in chat" },
      },
      {
        label: { ru: "Время мастеров", ka: "ოსტატების დრო", en: "Mechanics' time" },
        before: { ru: "отрыв на переписку", ka: "მიმოწერაზე გადართვა", en: "pulled into chats" },
        after: { ru: "снова у машин", ka: "ისევ მანქანებთან", en: "back on the cars" },
      },
      {
        label: { ru: "Из чата в визит", ka: "ჩატიდან ვიზიტამდე", en: "Chat to visit" },
        before: { ru: "часть уходила", ka: "ნაწილი მიდიოდა", en: "some walked away" },
        after: { ru: "заметно больше доходит", ka: "შესამჩნევად მეტი აღწევს", en: "noticeably more arrive" },
      },
    ],
    slogan: {
      ru: "Оценка повреждений по фото и запись на ремонт в чате",
      ka: "დაზიანების შეფასება ფოტოთი და შეკეთებაზე ჩაწერა ჩატში",
      en: "Damage estimate from photos and repair booking in chat",
    },
    description: {
      ru: "AI-ассистент принимает фото повреждений, даёт предварительную вилку цены и записывает на осмотр, снимая с мастеров поток однотипных вопросов.",
      ka: "AI ასისტენტი იღებს დაზიანების ფოტოებს, იძლევა ფასის წინასწარ დიაპაზონს და წერს დათვალიერებაზე, ხსნის ოსტატებს ერთგვაროვანი კითხვების ნაკადს.",
      en: "An AI assistant takes photos of the damage, gives a preliminary price range and books an inspection, taking a stream of repetitive questions off the mechanics.",
    },
    techStack: ["Instagram", "WhatsApp Business API", "Computer Vision", "Google Calendar"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Автосервис кузовного ремонта работал в основном через Instagram и WhatsApp и получал десятки обращений в день. Почти каждое начиналось одинаково: клиент присылал пару фото вмятины или царапины и спрашивал, во сколько это обойдётся и когда можно подъехать. Отвечать приходилось мастерам прямо из цеха, отрываясь от покраски и рихтовки. В горячие часы сообщения копились, ответ запаздывал, и часть клиентов успевала написать соседнему сервису.",
        ka: "კუზოვის შეკეთების ავტოსახელოსნო ძირითადად Instagram-სა და WhatsApp-ით მუშაობდა და დღეში ათობით მიმართვას იღებდა. თითქმის ყველა ერთნაირად იწყებოდა: კლიენტი აგზავნიდა ჩაზნექის ან ნაკაწრის რამდენიმე ფოტოს და კითხულობდა, რა დაჯდებოდა და როდის შეიძლებოდა მისვლა. პასუხი ოსტატებს პირდაპირ საამქროდან უწევდათ, ღებვასა და თუნუქის გასწორებას აწყვეტინებდნენ. ცხელ საათებში შეტყობინებები გროვდებოდა, პასუხი აგვიანებდა, კლიენტების ნაწილი კი ასწრებდა და მეზობელ სახელოსნოს უკავშირდებოდა.",
        en: "An auto body shop worked mainly through Instagram and WhatsApp and got dozens of requests a day. Almost every one started the same way: the client sent a couple of photos of a dent or a scratch and asked how much it would cost and when they could drop by. The mechanics had to answer straight from the shop floor, breaking off from painting and panel work. In busy hours the messages piled up, replies lagged, and some clients managed to message the shop next door.",
      },
      diagnostic: {
        ru: "Разобрав переписку за несколько недель, мы увидели, что подавляющее большинство вопросов сводится к грубой оценке по фото и записи на осмотр. Это не требует квалификации мастера, но каждый раз выдёргивает его из работы и сбивает темп в цехе. Ещё оказалось, что клиенты остывают быстро: если понятная вилка цены не приходит в первые минуты, интерес гаснет и человек идёт туда, где ответили сразу. Скорость первого ответа здесь решает больше, чем сама цена.",
        ka: "რამდენიმე კვირის მიმოწერის გარჩევის შემდეგ დავინახეთ, რომ კითხვების აბსოლუტური უმრავლესობა ფოტოთი უხეშ შეფასებასა და დათვალიერებაზე ჩაწერამდე დაიყვანება. ეს ოსტატის კვალიფიკაციას არ საჭიროებს, მაგრამ ყოველ ჯერზე ოსტატს მუშაობას აწყვეტინებს და საამქროში ტემპს უკარგავს. ასევე აღმოჩნდა, რომ კლიენტები სწრაფად ცივდებიან: თუ გასაგები ფასის დიაპაზონი პირველ წუთებში არ მოვა, ინტერესი ქრება და ადამიანი იქ მიდის, სადაც მაშინვე უპასუხეს. პირველი პასუხის სიჩქარე აქ ფასზე მეტს წყვეტს.",
        en: "Going through several weeks of chats, we saw that the overwhelming majority of questions come down to a rough estimate from a photo and a booking for an inspection. That needs no mechanic qualification, yet each time it yanks one out of work and breaks the pace in the shop. It also turned out that clients cool off fast: if a clear price range does not arrive in the first minutes, interest fades and the person goes where they got an instant reply. Here the speed of the first answer decides more than the price itself.",
      },
      problem: {
        ru: "Нужен был ассистент, который по фото и короткому описанию распознаёт типовое повреждение, честно называет предварительный диапазон цены и сразу предлагает время на осмотр. Важно было не переобещать: оценка по фото это всегда вилка, а не финальная цифра, потому что скрытые повреждения видны только на подъёмнике. Ассистент должен звучать уверенно, но аккуратно, объяснять, что точную стоимость подтвердит мастер, и ни при каких обстоятельствах не выдумывать цены из головы.",
        ka: "საჭირო იყო ასისტენტი, რომელიც ფოტოთი და მოკლე აღწერით ცნობს ტიპურ დაზიანებას, გულწრფელად ასახელებს ფასის წინასწარ დიაპაზონს და მაშინვე სთავაზობს დროს დათვალიერებაზე. მნიშვნელოვანი იყო, არ გადაეჭარბებინა დაპირებაში: ფოტოთი შეფასება ყოველთვის დიაპაზონია და არა საბოლოო ციფრი, რადგან ფარული დაზიანება მხოლოდ ამწეზე ჩანს. ასისტენტი უნდა ჟღერდეს დარწმუნებულად, მაგრამ ფრთხილად, ხსნიდეს, რომ ზუსტ ღირებულებას ოსტატი დაადასტურებს, და არავითარ შემთხვევაში არ იგონებდეს ფასებს.",
        en: "We needed an assistant that recognizes a typical kind of damage from a photo and a short description, honestly names a preliminary price range and immediately offers a time for inspection. It was important not to over-promise: a photo estimate is always a range, not a final number, because hidden damage shows only on the lift. The assistant should sound confident but careful, explain that a mechanic will confirm the exact cost, and under no circumstances invent prices out of thin air.",
      },
      solution: {
        ru: "Собрали ассистента, который встречает клиента в Instagram и WhatsApp, просит прислать общий план и пару крупных снимков и по ним определяет характер повреждения. Опираясь на базу типовых работ и цен сервиса, он называет предварительный диапазон и объясняет, от чего зависит итог. Дальше показывает свободные окна и ставит запись на осмотр в календарь. Тон дружелюбный, без давления: ассистент прямо предупреждает, что точную сумму мастер подтвердит после осмотра на подъёмнике.",
        ka: "შევქმენით ასისტენტი, რომელიც კლიენტს Instagram-სა და WhatsApp-ში ხვდება, ითხოვს ზოგად ხედსა და რამდენიმე ახლო კადრს და მათით განსაზღვრავს დაზიანების ხასიათს. სერვისის ტიპური სამუშაოებისა და ფასების ბაზაზე დაყრდნობით ის ასახელებს წინასწარ დიაპაზონს და ხსნის, რაზეა დამოკიდებული საბოლოო ჯამი. შემდეგ აჩვენებს თავისუფალ ფანჯრებს და დებს ჩაწერას დათვალიერებაზე კალენდარში. ტონი მეგობრულია, ზეწოლის გარეშე: ასისტენტი პირდაპირ აფრთხილებს, რომ ზუსტ თანხას ოსტატი ამწეზე დათვალიერების შემდეგ დაადასტურებს.",
        en: "We built an assistant that meets the client on Instagram and WhatsApp, asks for an overall shot and a couple of close-ups and reads the nature of the damage from them. Drawing on a base of the shop's typical jobs and prices, it names a preliminary range and explains what the final figure depends on. Then it shows free windows and books the inspection into the calendar. The tone is friendly and without pressure: the assistant openly warns that a mechanic will confirm the exact sum after inspecting on the lift.",
      },
      steps: {
        ru: "Проект занял около пяти недель. Сначала собрали примеры повреждений с реальными исходами и разложили их по типовым работам с ценами. Затем настроили распознавание частых случаев по фото и связали диапазоны цен с этой базой. Отдельно прописали честные оговорки о скрытых повреждениях, чтобы ассистент не обещал лишнего. Подключили запись к календарю, обкатали сценарий на части входящих в Instagram, поправили формулировки по живым диалогам и вывели ассистента на оба канала.",
        ka: "პროექტს დაახლოებით ხუთი კვირა დასჭირდა. ჯერ შევკრიბეთ დაზიანების მაგალითები რეალური შედეგებით და დავყავით ტიპურ სამუშაოებად ფასებით. შემდეგ დავაყენეთ ხშირი შემთხვევების ამოცნობა ფოტოთი და ფასის დიაპაზონები ამ ბაზას დავუკავშირეთ. ცალკე გავწერეთ გულწრფელი დათქმები ფარულ დაზიანებებზე, რომ ასისტენტს ზედმეტი არ დაეპირებინა. ჩაწერა კალენდარს დავუკავშირეთ, სცენარი გავტესტეთ Instagram-ის შემომავალის ნაწილზე, ცოცხალი დიალოგებით გავასწორეთ ფორმულირებები და ასისტენტი ორივე არხზე გავიტანეთ.",
        en: "The project took about five weeks. First we gathered examples of damage with real outcomes and sorted them into typical jobs with prices. Then we set up recognition of common cases from photos and tied the price ranges to that base. Separately we wrote honest caveats about hidden damage so the assistant would not over-promise. We connected booking to the calendar, ran the scenario on part of the Instagram inbound, tuned the wording from real dialogs and rolled the assistant out to both channels.",
      },
      impact: {
        ru: "После запуска ассистент сам ведёт почти все первичные обращения. Мастера больше не выдёргиваются на переписку и держат темп в цехе, а клиент получает понятную вилку цены и предложение записаться в первые же минуты. Из-за скорости и ясности из обращения в визит стало доходить заметно больше людей: раньше многие отваливались на этапе ожидания. Средний чек при этом не просел, потому что финальную стоимость по-прежнему определяет мастер после осмотра.",
        ka: "გაშვების შემდეგ ასისტენტი თავად უძღვება თითქმის ყველა პირველად მიმართვას. ოსტატები აღარ იძირებიან მიმოწერაში და საამქროში ტემპს ინარჩუნებენ, კლიენტი კი გასაგებ ფასის დიაპაზონსა და ჩაწერის შეთავაზებას პირველივე წუთებში იღებს. სიჩქარისა და სიცხადის გამო მიმართვიდან ვიზიტამდე შესამჩნევად მეტი ადამიანი აღწევს: ადრე ბევრი ლოდინის ეტაპზე თავს ანებებდა. საშუალო ჩეკი ამასთან არ დაწეულა, რადგან საბოლოო ღირებულებას კვლავ ოსტატი განსაზღვრავს დათვალიერების შემდეგ.",
        en: "After launch the assistant handles almost all first requests itself. The mechanics are no longer pulled into chats and keep the pace in the shop, while the client gets a clear price range and an offer to book within the first minutes. Thanks to the speed and clarity, noticeably more people now make it from a request to a visit: before, many dropped off at the waiting stage. The average ticket did not slip, because a mechanic still sets the final cost after inspection.",
      },
      limitations: {
        ru: "Ассистент даёт только предварительную вилку по фото и не претендует на точность. Скрытые повреждения, состояние геометрии кузова и реальный объём работ видны лишь на осмотре, поэтому окончательную цену всегда называет мастер. Спорные и сложные случаи ассистент не решает сам, а сразу зовёт человека.",
        ka: "ასისტენტი მხოლოდ ფოტოთი წინასწარ დიაპაზონს იძლევა და სიზუსტეს არ იჩემებს. ფარული დაზიანება, კუზოვის გეომეტრიის მდგომარეობა და სამუშაოს რეალური მოცულობა მხოლოდ დათვალიერებაზეა დანახვადი, ამიტომ საბოლოო ფასს ყოველთვის ოსტატი ასახელებს. სადავო და რთულ შემთხვევებს ასისტენტი თავად არ ჭრის, არამედ მაშინვე ადამიანს იძახებს.",
        en: "The assistant gives only a preliminary range from a photo and makes no claim to precision. Hidden damage, the state of the body geometry and the real scope of work show only at inspection, so a mechanic always names the final price. The assistant does not resolve disputed or complex cases itself but calls in a human right away.",
      },
      methodology: {
        ru: "Сравнивали данные за месяц до запуска и месяц после стабилизации: скорость первого ответа, конверсию из обращения в визит и долю сообщений, на которые отвлекались мастера. Все показатели округлены и приведены диапазонами, а ценовые вилки в примерах условны, чтобы по ним нельзя было опознать сервис.",
        ka: "ვადარებდით მონაცემებს გაშვებამდე ერთი თვისა და სტაბილიზაციის შემდეგ ერთი თვის განმავლობაში: პირველი პასუხის სიჩქარეს, მიმართვიდან ვიზიტში კონვერსიასა და შეტყობინებების წილს, რომლებზეც ოსტატები ყურადღებას იფანტავდნენ. ყველა მაჩვენებელი დამრგვალებულია და მოცემულია დიაპაზონებში, ფასების დიაპაზონები მაგალითებში კი პირობითია, რომ მათით სერვისის ამოცნობა ვერ მოხერხდეს.",
        en: "We compared data for a month before launch and a month after stabilization: the speed of the first reply, conversion from request to visit and the share of messages that distracted mechanics. All figures are rounded and given in ranges, and the price ranges in the examples are illustrative so the shop cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название сервиса, адрес и фотографии машин клиентов не раскрываем по NDA. Мессенджеры и инструменты названы только чтобы показать реальный стек, а не как реклама. Конкретные суммы в примерах условны, а все цифры округлены до диапазонов.",
        ka: "სერვისის სახელს, მისამართსა და კლიენტების მანქანების ფოტოებს NDA-ს გამო არ ვამხელთ. მესენჯერები და ინსტრუმენტები დასახელებულია მხოლოდ რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. კონკრეტული თანხები მაგალითებში პირობითია, ყველა ციფრი კი დიაპაზონებამდეა დამრგვალებული.",
        en: "We do not disclose the shop name, address or photos of clients' cars under NDA. The messengers and tools are named only to show the real stack, not as advertising. The specific amounts in the examples are illustrative, and all figures are rounded to ranges.",
      },
      faq: [
        {
          q: {
            ru: "Насколько точна оценка по фото?",
            ka: "რამდენად ზუსტია შეფასება ფოტოთი?",
            en: "How accurate is the photo estimate?",
          },
          a: {
            ru: "Это предварительная вилка по типовым работам, а не финальная цена. Точную стоимость мастер называет после осмотра на подъёмнике, когда видны скрытые повреждения.",
            ka: "ეს ტიპური სამუშაოების წინასწარი დიაპაზონია და არა საბოლოო ფასი. ზუსტ ღირებულებას ოსტატი ამწეზე დათვალიერების შემდეგ ასახელებს, როცა ფარული დაზიანება ჩანს.",
            en: "It is a preliminary range for typical jobs, not a final price. A mechanic names the exact cost after inspecting on the lift, when hidden damage is visible.",
          },
        },
        {
          q: {
            ru: "Какие фото нужно прислать?",
            ka: "რა ფოტოები უნდა გამოვაგზავნო?",
            en: "What photos should I send?",
          },
          a: {
            ru: "Общий вид места повреждения и пара крупных планов с разных ракурсов. Ассистент сам подскажет, какие кадры сделать, если чего-то не хватает.",
            ka: "დაზიანების ადგილის ზოგადი ხედი და რამდენიმე ახლო კადრი სხვადასხვა რაკურსით. ასისტენტი თავად მიგანიშნებთ, რომელი კადრები გადაიღოთ, თუ რამე აკლია.",
            en: "An overall view of the damaged spot and a couple of close-ups from different angles. The assistant will suggest which shots to take if something is missing.",
          },
        },
        {
          q: {
            ru: "Можно ли сразу записаться на осмотр?",
            ka: "შესაძლებელია მაშინვე დათვალიერებაზე ჩაწერა?",
            en: "Can I book an inspection right away?",
          },
          a: {
            ru: "Да, после предварительной оценки ассистент показывает свободные окна и ставит запись в календарь сервиса. Перенести визит можно в той же переписке.",
            ka: "დიახ, წინასწარი შეფასების შემდეგ ასისტენტი აჩვენებს თავისუფალ ფანჯრებს და დებს ჩაწერას სერვისის კალენდარში. ვიზიტის გადატანა იმავე მიმოწერაშია შესაძლებელი.",
            en: "Yes, after the preliminary estimate the assistant shows free windows and books it into the shop calendar. You can reschedule in the same chat.",
          },
        },
      ],
    },
  },
  {
    slug: "furniture-maker-quote",
    name: "Custom furniture: draft quote assistant",
    title: {
      ru: "Мебель на заказ: предварительная смета в чате",
      ka: "ავეჯი შეკვეთით: წინასწარი ხარჯთაღრიცხვა ჩატში",
      en: "Custom furniture: draft quote in chat",
    },
    category: "furniture",
    categoryLabel: { ru: "Мебель", ka: "ავეჯი", en: "Furniture" },
    summary: {
      ru: "Производитель мебели на заказ получал много запросов сколько будет стоить шкаф или кухня, но смету считали вручную по несколько дней, и клиенты уходили к тем, кто ответил быстрее. Мы собрали AI-ассистента в WhatsApp, который по шагам выясняет размеры, материал и конфигурацию и сразу выдаёт понятную черновую смету по прайсу. Ответ по цене ускорился с дней до минут, а менеджеры теперь тратят время только на клиентов, готовых к замеру.",
      ka: "შეკვეთით ავეჯის მწარმოებელი ბევრ მოთხოვნას იღებდა რა ეღირება კარადა ან სამზარეულო, მაგრამ ხარჯთაღრიცხვას ხელით რამდენიმე დღეს ითვლიდნენ, კლიენტები კი მიდიოდნენ იქ, სადაც უფრო სწრაფად უპასუხეს. ჩვენ შევქმენით AI ასისტენტი WhatsApp-ში, რომელიც ეტაპობრივად არკვევს ზომებს, მასალასა და კონფიგურაციას და მაშინვე გასცემს გასაგებ ხარჯთაღრიცხვის მონახაზს პრაისით. ფასზე პასუხი დღეებიდან წუთებამდე დაჩქარდა, მენეჯერები კი ახლა დროს მხოლოდ გაზომვისთვის მზა კლიენტებზე ხარჯავენ.",
      en: "A custom furniture maker got many requests about how much a wardrobe or a kitchen would cost, but estimates were calculated by hand over several days, and clients left for whoever answered faster. We built an AI assistant on WhatsApp that clarifies dimensions, material and configuration step by step and instantly returns a clear draft estimate from the price list. The price reply sped up from days to minutes, and managers now spend time only on clients ready for a measurement.",
    },
    metrics: [
      {
        label: { ru: "Ответ по смете", ka: "პასუხი ხარჯთაღრიცხვაზე", en: "Estimate reply" },
        before: { ru: "несколько дней", ka: "რამდენიმე დღე", en: "several days" },
        after: { ru: "минуты", ka: "წუთები", en: "minutes" },
      },
      {
        label: { ru: "Сбор параметров", ka: "პარამეტრების შეკრება", en: "Collecting parameters" },
        before: { ru: "вручную менеджером", ka: "ხელით მენეჯერის მიერ", en: "by hand" },
        after: { ru: "по шагам в чате", ka: "ეტაპობრივად ჩატში", en: "step by step in chat" },
      },
      {
        label: { ru: "Фокус менеджера", ka: "მენეჯერის ფოკუსი", en: "Manager focus" },
        before: { ru: "все запросы подряд", ka: "ყველა მოთხოვნა ზედიზედ", en: "every request in a row" },
        after: { ru: "только готовые к замеру", ka: "მხოლოდ გაზომვისთვის მზა", en: "only measurement-ready" },
      },
    ],
    slogan: {
      ru: "Сбор параметров заказа и черновая смета за минуты",
      ka: "შეკვეთის პარამეტრების შეკრება და ხარჯთაღრიცხვის მონახაზი წუთებში",
      en: "Collecting order parameters and a draft estimate in minutes",
    },
    description: {
      ru: "AI-ассистент собирает размеры, материал и пожелания и выдаёт предварительную смету, оставляя менеджеру только тёплые заявки.",
      ka: "AI ასისტენტი აგროვებს ზომებს, მასალასა და სურვილებს და გასცემს წინასწარ ხარჯთაღრიცხვას, მენეჯერს მხოლოდ თბილ განაცხადებს უტოვებს.",
      en: "An AI assistant collects dimensions, material and preferences and returns a draft estimate, leaving the manager only the warm leads.",
    },
    techStack: ["WhatsApp Business API", "Google Sheets", "RAG", "Custom CRM"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Мастерская делала мебель на заказ: шкафы, гардеробные, кухни под конкретное помещение. Заявки приходили в основном в WhatsApp и из рекламы, и почти каждая начиналась с вопроса о цене. Проблема в том, что честная смета зависит от размеров, материала, фурнитуры и конфигурации, а собрать эти параметры и посчитать всё вручную у менеджера уходило до нескольких дней. За это время клиент успевал получить ответ от более расторопного конкурента.",
        ka: "სახელოსნო ამზადებდა ავეჯს შეკვეთით: კარადებს, გარდერობებს, სამზარეულოებს კონკრეტული სივრცისთვის. განაცხადები ძირითადად WhatsApp-სა და რეკლამიდან მოდიოდა, თითქმის ყველა კი ფასის კითხვით იწყებოდა. პრობლემა ის იყო, რომ გულწრფელი ხარჯთაღრიცხვა ზომებზე, მასალაზე, ფურნიტურასა და კონფიგურაციაზეა დამოკიდებული, ამ პარამეტრების შეკრება და ყველაფრის ხელით დათვლა კი მენეჯერს რამდენიმე დღემდე სჭირდებოდა. ამ დროს კლიენტი ასწრებდა პასუხის მიღებას უფრო მარდი კონკურენტისგან.",
        en: "The workshop made furniture to order: wardrobes, walk-in closets and kitchens fitted to a specific room. Requests came mostly on WhatsApp and from ads, and almost every one opened with a price question. The catch is that an honest estimate depends on dimensions, material, hardware and configuration, and collecting those parameters and calculating everything by hand took the manager up to several days. In that time the client managed to get an answer from a nimbler competitor.",
      },
      diagnostic: {
        ru: "Мы посмотрели, из чего складывается путь заявки, и нашли два узких места. Первое: менеджер каждый раз вручную вытягивал из клиента одни и те же вводные, задавая по десять уточнений в переписке. Второе: сам расчёт по прайсу был несложным, но небыстрым, и в очереди из заявок терялись именно горячие. Клиенты на рынке мебели сравнивают несколько мастерских сразу, поэтому тот, кто дал понятную цифру первым, чаще и получал заказ.",
        ka: "ჩვენ დავათვალიერეთ, რისგან იკრიბება განაცხადის გზა, და ორი ვიწრო ადგილი ვიპოვეთ. პირველი: მენეჯერი ყოველ ჯერზე ხელით სთხოვდა კლიენტს ერთსა და იმავე საწყის მონაცემებს, მიმოწერაში ათ დაზუსტებას სვამდა. მეორე: თავად გამოთვლა პრაისით რთული არ იყო, მაგრამ არც სწრაფი, განაცხადების რიგში კი სწორედ ცხელი იკარგებოდა. ავეჯის ბაზარზე კლიენტები ერთდროულად რამდენიმე სახელოსნოს ადარებენ, ამიტომ ვინც გასაგები ციფრი პირველმა მისცა, უფრო ხშირად იღებდა შეკვეთას.",
        en: "We looked at what a request's path is made of and found two bottlenecks. First: the manager pulled the same intake details out of the client by hand every time, asking ten clarifications in the chat. Second: the price calculation itself was not hard but not fast either, and it was exactly the hot leads that got lost in the queue. In the furniture market clients compare several workshops at once, so whoever gave a clear figure first tended to win the order.",
      },
      problem: {
        ru: "Нужен был ассистент, который берёт на себя рутину пресейла: по шагам и по-человечески собирает размеры, материал, тип фасадов и фурнитуру, а затем сразу считает понятную черновую смету по прайсу мастерской. Важно было удержать баланс: дать клиенту быструю цифру, но не превратить её в обещание точной цены, ведь итог всё равно уточняется на замере. И ассистент ни в коем случае не должен выдумывать материалы или суммы, которых нет в прайсе.",
        ka: "საჭირო იყო ასისტენტი, რომელიც პრესეილის რუტინას იღებს: ეტაპობრივად და ადამიანურად აგროვებს ზომებს, მასალას, ფასადების ტიპსა და ფურნიტურას, შემდეგ კი მაშინვე ითვლის გასაგებ ხარჯთაღრიცხვის მონახაზს სახელოსნოს პრაისით. მნიშვნელოვანი იყო ბალანსის დაცვა: კლიენტისთვის სწრაფი ციფრის მიცემა, მაგრამ არა მისი ზუსტი ფასის დაპირებად ქცევა, რადგან საბოლოო ჯამი მაინც გაზომვაზე ზუსტდება. ასისტენტმა კი არავითარ შემთხვევაში არ უნდა მოიგონოს მასალები ან თანხები, რომლებიც პრაისში არ არის.",
        en: "We needed an assistant to take over the pre-sales routine: collect dimensions, material, facade type and hardware step by step and in a human way, then immediately calculate a clear draft estimate from the workshop's price list. The balance mattered: give the client a fast figure without turning it into a promise of an exact price, since the final sum is still confirmed at measurement. And the assistant must never invent materials or amounts that are not in the price list.",
      },
      solution: {
        ru: "Собрали ассистента в WhatsApp, который ведёт клиента по короткой понятной цепочке: что за изделие, размеры проёма, материал корпуса и фасада, нужная фурнитура. По ходу он опирается на оцифрованный прайс и правила расчёта мастерской и тут же выдаёт черновую смету с разбивкой, от чего зависит сумма. Заинтересованных он передаёт менеджеру для точного расчёта и выезда на замер. Тон спокойный и консультирующий, а любые цифры строго в рамках прайса, без импровизаций.",
        ka: "შევქმენით ასისტენტი WhatsApp-ში, რომელიც კლიენტს მოკლე, გასაგები ჯაჭვით მიჰყავს: რა ნაკეთობაა, ღიობის ზომები, კორპუსისა და ფასადის მასალა, საჭირო ფურნიტურა. გზადაგზა ის ეყრდნობა გაციფრულებულ პრაისსა და სახელოსნოს გამოთვლის წესებს და მაშინვე გასცემს ხარჯთაღრიცხვის მონახაზს იმის დაყოფით, რაზეა დამოკიდებული თანხა. დაინტერესებულებს ის მენეჯერს გადასცემს ზუსტი გამოთვლისა და გაზომვაზე გასვლისთვის. ტონი მშვიდი და მაკონსულტირებელია, ნებისმიერი ციფრი კი მკაცრად პრაისის ფარგლებში, იმპროვიზაციის გარეშე.",
        en: "We built a WhatsApp assistant that walks the client through a short, clear chain: what the piece is, the opening dimensions, the carcass and facade material, the hardware needed. Along the way it relies on the digitized price list and the workshop's calculation rules and instantly returns a draft estimate with a breakdown of what drives the sum. Interested clients it passes to a manager for an exact calculation and a measurement visit. The tone is calm and advisory, and any figures stay strictly within the price list, with no improvisation.",
      },
      steps: {
        ru: "Проект занял около месяца. Сначала оцифровали прайс, материалы и правила расчёта, чтобы у ассистента была твёрдая опора, а не догадки. Затем выстроили сценарий вопросов так, чтобы он собирал ровно то, что нужно для черновой сметы, и не утомлял клиента лишним. Отдельно закрыли ассистента жёсткими рамками: только позиции из прайса, никаких выдуманных цен. Обкатали на входящих из рекламы, поправили формулировки по живым диалогам и вывели на весь поток заявок.",
        ka: "პროექტს დაახლოებით ერთი თვე დასჭირდა. ჯერ გავაციფრულეთ პრაისი, მასალები და გამოთვლის წესები, რომ ასისტენტს მყარი საყრდენი ჰქონოდა და არა ვარაუდები. შემდეგ კითხვების სცენარი ისე ავაგეთ, რომ ის აგროვებდეს ზუსტად იმას, რაც მონახაზი ხარჯთაღრიცხვისთვისაა საჭირო, და კლიენტს ზედმეტით არ ღლიდეს. ცალკე ასისტენტი მკაცრ ჩარჩოში მოვაქციეთ: მხოლოდ პრაისის პოზიციები, არანაირი მოგონილი ფასი. გავტესტეთ რეკლამიდან შემომავლებზე, ცოცხალი დიალოგებით გავასწორეთ ფორმულირებები და მთელ განაცხადების ნაკადზე გავიტანეთ.",
        en: "The project took about a month. First we digitized the price list, materials and calculation rules so the assistant had a firm footing rather than guesses. Then we built the question flow to collect exactly what a draft estimate needs and not tire the client with extras. Separately we boxed the assistant in with hard limits: only items from the price list, no invented prices. We ran it on ad inbound, tuned the wording from real dialogs and rolled it out to the whole request flow.",
      },
      impact: {
        ru: "После запуска ассистент сам ведёт первичный сбор параметров и выдаёт черновую смету почти по всем входящим. Ответ по цене, который раньше растягивался на дни, теперь приходит за минуты, и клиент получает понятную цифру, пока его интерес горячий. Менеджеры перестали быть анкетёрами и работают только с теми, кто уже готов к замеру и договору. За счёт скорости до замера доходит больше заявок, а нагрузка на пресейл заметно снизилась.",
        ka: "გაშვების შემდეგ ასისტენტი თავად უძღვება პარამეტრების პირველად შეკრებას და გასცემს ხარჯთაღრიცხვის მონახაზს თითქმის ყველა შემომავალზე. ფასზე პასუხი, რომელიც ადრე დღეებად იწელებოდა, ახლა წუთებში მოდის, კლიენტი კი გასაგებ ციფრს იღებს, სანამ მისი ინტერესი ცხელია. მენეჯერები აღარ ავსებენ კითხვარებს და მუშაობენ მხოლოდ მათთან, ვინც უკვე მზადაა გაზომვისა და ხელშეკრულებისთვის. სიჩქარის ხარჯზე გაზომვამდე მეტი განაცხადი აღწევს, პრესეილზე დატვირთვა კი შესამჩნევად შემცირდა.",
        en: "After launch the assistant handles the initial parameter gathering and issues a draft estimate on almost all inbound itself. The price reply that used to stretch over days now arrives in minutes, and the client gets a clear figure while their interest is still hot. Managers stopped being form-fillers and work only with those already ready for a measurement and a contract. Thanks to the speed, more requests reach the measurement stage, and the pre-sales load has dropped noticeably.",
      },
      limitations: {
        ru: "Ассистент считает только черновую вилку по прайсу и не берётся за сложные нестандартные проекты. Изогнутые фасады, редкие материалы, нетиповые механизмы и подгонку по кривым стенам оценивает уже человек на замере. Точную цену всегда подтверждает менеджер, а не бот.",
        ka: "ასისტენტი მხოლოდ მონახაზ დიაპაზონს ითვლის პრაისით და რთულ არასტანდარტულ პროექტებს არ კიდებს ხელს. მოხრილ ფასადებს, იშვიათ მასალებს, არატიპურ მექანიზმებსა და მრუდე კედლებზე მორგებას უკვე ადამიანი აფასებს გაზომვაზე. ზუსტ ფასს ყოველთვის მენეჯერი ადასტურებს და არა ბოტი.",
        en: "The assistant calculates only a draft range from the price list and does not take on complex custom projects. Curved facades, rare materials, non-standard mechanisms and fitting to uneven walls are assessed by a person at the measurement. The exact price is always confirmed by a manager, not the bot.",
      },
      methodology: {
        ru: "Сравнивали месяц до запуска и месяц после стабилизации: скорость ответа по смете, конверсию из заявки в замер и долю заявок, дошедших до менеджера тёплыми. Все цифры округлены и приведены диапазонами, а суммы в примерах смет условны, чтобы по ним нельзя было опознать мастерскую.",
        ka: "ვადარებდით გაშვებამდე ერთ თვესა და სტაბილიზაციის შემდეგ ერთ თვეს: ხარჯთაღრიცხვაზე პასუხის სიჩქარეს, განაცხადიდან გაზომვაში კონვერსიასა და მენეჯერამდე თბილად მისული განაცხადების წილს. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებში, ხარჯთაღრიცხვის მაგალითებში თანხები კი პირობითია, რომ მათით სახელოსნოს ამოცნობა ვერ მოხერხდეს.",
        en: "We compared a month before launch and a month after stabilization: the speed of the estimate reply, conversion from request to measurement and the share of requests that reached a manager warm. All figures are rounded and given in ranges, and the amounts in the example estimates are illustrative so the workshop cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название мастерской, прайс и портфолио проектов скрыты по NDA. Мессенджер, таблицы и CRM названы только чтобы показать реальный стек интеграций, а не как реклама. Все суммы в примерах смет условны, а цифры округлены до диапазонов.",
        ka: "სახელოსნოს სახელი, პრაისი და პროექტების პორტფოლიო NDA-ს გამო დამალულია. მესენჯერი, ცხრილები და CRM დასახელებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. ხარჯთაღრიცხვის მაგალითებში ყველა თანხა პირობითია, ციფრები კი დიაპაზონებამდეა დამრგვალებული.",
        en: "The workshop name, price list and project portfolio are hidden under NDA. The messenger, spreadsheets and CRM are named only to show the real integration stack, not as advertising. All amounts in the example estimates are illustrative, and the figures are rounded to ranges.",
      },
      faq: [
        {
          q: {
            ru: "Насколько точна черновая смета?",
            ka: "რამდენად ზუსტია ხარჯთაღრიცხვის მონახაზი?",
            en: "How accurate is the draft estimate?",
          },
          a: {
            ru: "Это предварительная вилка по прайсу и заданным параметрам, а не финальная цена. Точную стоимость менеджер подтверждает после замера помещения.",
            ka: "ეს წინასწარი დიაპაზონია პრაისითა და მოცემული პარამეტრებით და არა საბოლოო ფასი. ზუსტ ღირებულებას მენეჯერი სივრცის გაზომვის შემდეგ ადასტურებს.",
            en: "It is a preliminary range from the price list and the given parameters, not a final price. A manager confirms the exact cost after measuring the space.",
          },
        },
        {
          q: {
            ru: "Какие параметры спрашивает ассистент?",
            ka: "რომელ პარამეტრებს კითხულობს ასისტენტი?",
            en: "What parameters does the assistant ask about?",
          },
          a: {
            ru: "Тип изделия, размеры проёма, материал корпуса и фасада, нужную фурнитуру. Этого хватает, чтобы посчитать понятную черновую вилку.",
            ka: "ნაკეთობის ტიპს, ღიობის ზომებს, კორპუსისა და ფასადის მასალას, საჭირო ფურნიტურას. ეს საკმარისია გასაგები მონახაზი დიაპაზონის დასათვლელად.",
            en: "The type of piece, the opening dimensions, the carcass and facade material and the hardware needed. That is enough to calculate a clear draft range.",
          },
        },
        {
          q: {
            ru: "Что со сложными нестандартными проектами?",
            ka: "რა ხდება რთულ არასტანდარტულ პროექტებთან?",
            en: "What about complex custom projects?",
          },
          a: {
            ru: "Для нетиповых изделий бот не считает цену сам, а предлагает выезд замерщика и передаёт заявку менеджеру.",
            ka: "არატიპური ნაკეთობებისთვის ბოტი ფასს თავად არ ითვლის, არამედ სთავაზობს გამზომავის გამოძახებას და განაცხადს მენეჯერს გადასცემს.",
            en: "For non-standard pieces the bot does not calculate the price itself but offers a visit by a measurer and passes the request to a manager.",
          },
        },
      ],
    },
  },
  {
    slug: "hr-recruitment-screening",
    name: "Recruitment agency: first-touch candidate screening",
    title: {
      ru: "Рекрутинг: первичный скрининг кандидатов",
      ka: "რეკრუტინგი: კანდიდატების პირველადი სკრინინგი",
      en: "Recruitment: first-touch candidate screening",
    },
    category: "hr",
    categoryLabel: { ru: "Рекрутинг", ka: "რეკრუტინგი", en: "Recruitment" },
    summary: {
      ru: "Кадровое агентство получало сотни откликов на активные вакансии, и рекрутёры не успевали быстро ответить каждому: сильные кандидаты остывали в очереди и уходили к другому работодателю. Мы собрали AI-ассистента в Telegram, который сам задаёт первичные вопросы, сверяет ответы с требованиями вакансии и подходящим сразу предлагает слоты для интервью. Первый ответ теперь приходит за минуты, рекрутёры перестали тонуть в однотипной переписке и занимаются живыми собеседованиями.",
      ka: "საკადრო სააგენტო ასობით გამოხმაურებას იღებდა აქტიურ ვაკანსიებზე, რეკრუტერები კი ვერ ასწრებდნენ თითოეულს სწრაფად პასუხის გაცემას: ძლიერი კანდიდატები რიგში ცივდებოდნენ და სხვა დამსაქმებელთან მიდიოდნენ. ჩვენ შევქმენით AI ასისტენტი Telegram-ში, რომელიც თავად სვამს პირველად კითხვებს, ადარებს პასუხებს ვაკანსიის მოთხოვნებს და შესაფერის კანდიდატებს მაშინვე სთავაზობს ინტერვიუს თავისუფალ დროს. პირველი პასუხი ახლა წუთებში მოდის, რეკრუტერებმა ერთგვაროვან მიმოწერაში ჩაძირვა შეწყვიტეს და ცოცხალ გასაუბრებებს უძღვებიან.",
      en: "A recruitment agency received hundreds of applications for active roles, and recruiters could not reply to each one quickly: strong candidates cooled off in the queue and left for another employer. We built an AI assistant on Telegram that asks the initial questions itself, checks the answers against the role requirements and immediately offers interview slots to suitable candidates. The first reply now arrives in minutes, recruiters stopped drowning in repetitive correspondence and focus on live interviews.",
    },
    metrics: [
      {
        label: { ru: "Первый ответ кандидату", ka: "პირველი პასუხი კანდიდატს", en: "First reply to a candidate" },
        before: { ru: "часы в очереди", ka: "საათები რიგში", en: "hours in a queue" },
        after: { ru: "за минуты", ka: "წუთებში", en: "in minutes" },
      },
      {
        label: { ru: "Первичный скрининг", ka: "პირველადი სკრინინგი", en: "First-touch screening" },
        before: { ru: "вручную по каждому", ka: "ხელით თითოეულზე", en: "manual, one by one" },
        after: { ru: "ведёт ассистент", ka: "უძღვება ასისტენტი", en: "run by the assistant" },
      },
      {
        label: { ru: "Работа рекрутёра", ka: "რეკრუტერის სამუშაო", en: "Recruiter focus" },
        before: { ru: "поток одинаковых вопросов", ka: "ერთგვაროვანი კითხვების ნაკადი", en: "flood of same questions" },
        after: { ru: "живые интервью", ka: "ცოცხალი ინტერვიუები", en: "live interviews" },
      },
    ],
    slogan: {
      ru: "Скрининг откликов по ключевым критериям и запись на интервью",
      ka: "გამოხმაურებების სკრინინგი ძირითადი კრიტერიუმებით და ინტერვიუზე ჩაწერა",
      en: "Screening applicants by key criteria and booking interviews",
    },
    description: {
      ru: "AI-ассистент проводит первичный скрининг кандидатов по ключевым требованиям и назначает интервью, разгружая рекрутеров от потока откликов.",
      ka: "AI ასისტენტი ატარებს კანდიდატების პირველად სკრინინგს ძირითადი მოთხოვნებით და ნიშნავს ინტერვიუს, ათავისუფლებს რეკრუტერებს გამოხმაურებების ნაკადისგან.",
      en: "An AI assistant runs a first-touch screening of candidates against key requirements and schedules interviews, freeing recruiters from the flood of applications.",
    },
    techStack: ["Telegram", "Custom CRM", "NLU", "Google Calendar"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Кадровое агентство с несколькими рекрутёрами вело подбор сразу по десяткам активных вакансий для разных работодателей. По популярным позициям в день приходили сотни откликов из множества источников: сайты вакансий, реклама в соцсетях и рекомендации. Физически обработать каждый быстро небольшая команда не успевала, поэтому отклики скапливались в общей очереди без единого учёта. Пока рекрутёр добирался до сильного кандидата, тот нередко уже проходил собеседование в другой компании и переставал выходить на связь.",
        ka: "საკადრო სააგენტო რამდენიმე რეკრუტერით ერთდროულად ეწეოდა შერჩევას ათეულობით აქტიურ ვაკანსიაზე სხვადასხვა დამსაქმებლისთვის. პოპულარულ პოზიციებზე დღეში ასობით გამოხმაურება მოდიოდა მრავალი წყაროდან: ვაკანსიების საიტები, რეკლამა სოციალურ ქსელებში და რეკომენდაციები. მცირე გუნდი ფიზიკურად ვერ ასწრებდა თითოეულის სწრაფად დამუშავებას, ამიტომ გამოხმაურებები საერთო რიგში გროვდებოდა ერთიანი აღრიცხვის გარეშე. სანამ რეკრუტერი ძლიერ კანდიდატამდე მიაღწევდა, ის ხშირად უკვე გადიოდა გასაუბრებას სხვა კომპანიაში და კავშირზე გამოსვლას წყვეტდა.",
        en: "A recruitment agency with several recruiters ran searches for dozens of active roles at once for different employers. Popular positions drew hundreds of applications a day from many sources: job boards, social media ads and referrals. The small team physically could not process each one quickly, so applications piled up in a common queue with no unified tracking. By the time a recruiter reached a strong candidate, that person had often already interviewed at another company and stopped responding.",
      },
      diagnostic: {
        ru: "Мы выгрузили переписку рекрутёров за несколько недель и посмотрели, на что уходит время. Оказалось, что значительная часть дня тратится на одни и те же первые вопросы: опыт работы, желаемый график, зарплатные ожидания и готовность выйти в ближайшее время. Эти ответы легко проверяются по формальным критериям, но именно они съедали часы. В итоге самые сильные кандидаты, которые получают несколько предложений сразу, чаще всего успевали принять чужой оффер раньше, чем до них доходила очередь.",
        ka: "ჩვენ გადმოვწერეთ რეკრუტერების მიმოწერა რამდენიმე კვირის განმავლობაში და დავაკვირდით, რაზე იხარჯებოდა დრო. აღმოჩნდა, რომ დღის მნიშვნელოვანი ნაწილი ერთსა და იმავე პირველ კითხვებს ხმარდებოდა: სამუშაო გამოცდილება, სასურველი გრაფიკი, სახელფასო მოლოდინი და უახლოეს დროში დაწყების მზაობა. ეს პასუხები ადვილად მოწმდება ფორმალური კრიტერიუმებით, მაგრამ სწორედ ის ჭამდა საათებს. შედეგად ყველაზე ძლიერი კანდიდატები, რომლებიც რამდენიმე შეთავაზებას ერთდროულად იღებენ, ხშირად ასწრებდნენ სხვისი ოფერის მიღებას, სანამ მათამდე რიგი მიაღწევდა.",
        en: "We pulled several weeks of the recruiters correspondence and looked at where the time went. It turned out that a large part of the day was spent on the same first questions: work experience, preferred schedule, salary expectations and readiness to start soon. These answers are easy to check against formal criteria, yet they were the ones eating hours. As a result the strongest candidates, who receive several offers at once, most often accepted someone else offer before their turn in the queue arrived.",
      },
      problem: {
        ru: "Задача была не отсеять людей ради экономии, а не терять сильных из-за медленной реакции. Ассистент должен сам задать первичные вопросы в спокойном, уважительном тоне, сверить ответы с требованиями конкретной вакансии и подходящему кандидату сразу предложить время интервью. Формальные отказы должны звучать вежливо и по-человечески, а любой спорный профиль обязан попадать к рекрутёру, а не отбраковываться автоматически. По сути, нужно было забрать у команды рутину первого касания и оставить ей живую оценку.",
        ka: "ამოცანა იყო არა ხალხის გაცხრილვა ეკონომიისთვის, არამედ ძლიერების არ დაკარგვა ნელი რეაქციის გამო. ასისტენტმა თავად უნდა დასვას პირველადი კითხვები მშვიდ, პატივისცემით ტონში, შეადაროს პასუხები კონკრეტული ვაკანსიის მოთხოვნებს და შესაფერის კანდიდატს მაშინვე შესთავაზოს ინტერვიუს დრო. ფორმალური უარი უნდა ჟღერდეს თავაზიანად და ადამიანურად, ნებისმიერი სადავო პროფილი კი აუცილებლად უნდა მოხვდეს რეკრუტერთან და არა ავტომატურად გაიცხრილოს. არსებითად, საჭირო იყო გუნდისთვის პირველი შეხების რუტინის ჩამორთმევა და მისთვის ცოცხალი შეფასების დატოვება.",
        en: "The goal was not to filter people out to save effort, but to stop losing strong ones to a slow reaction. The assistant should ask the initial questions itself in a calm, respectful tone, match the answers to the requirements of the specific role and immediately offer an interview time to a suitable candidate. A formal decline should sound polite and human, while any borderline profile must reach a recruiter rather than being rejected automatically. In essence, we needed to take the first-touch routine off the team and leave it the live assessment.",
      },
      solution: {
        ru: "Собрали ассистента в Telegram как единую точку первого контакта с кандидатами. В диалоге он представляется, объясняет вакансию и по очереди уточняет опыт, график и ожидания, распознавая свободные формулировки, а не только кнопки, и сверяет ответы с требованиями вакансии из базы. Подходящему кандидату ассистент сразу показывает свободные слоты и ставит встречу в календарь рекрутёра, а его карточку с ответами передаёт в CRM. Тон задан примерами реальной переписки агентства, поэтому общение выглядит человечным, а не как анкета.",
      ka: "შევქმენით ასისტენტი Telegram-ში როგორც კანდიდატებთან პირველი კონტაქტის ერთიანი წერტილი. დიალოგში ის წარადგენს თავს, ხსნის ვაკანსიას და თანმიმდევრობით აზუსტებს გამოცდილებას, გრაფიკსა და მოლოდინებს, ცნობს თავისუფალ ფორმულირებებს და არა მხოლოდ ღილაკებს, პასუხებს კი ადარებს ბაზაში არსებული ვაკანსიის მოთხოვნებს. შესაფერის კანდიდატს ასისტენტი მაშინვე უჩვენებს თავისუფალ დროს და შეხვედრას რეკრუტერის კალენდარში ნიშნავს, მის ბარათს პასუხებით კი CRM-ს გადასცემს. ტონი მოცემულია სააგენტოს რეალური მიმოწერის მაგალითებით, ამიტომ ურთიერთობა ადამიანურად გამოიყურება და არა ანკეტასავით.",
        en: "We built an assistant on Telegram as a single point of first contact with candidates. In the dialog it introduces itself, explains the role and clarifies experience, schedule and expectations in turn, recognizing free-form wording rather than only buttons, and checks the answers against the role requirements from the base. For a suitable candidate the assistant immediately shows free slots and puts a meeting into the recruiter calendar, and passes the card with the answers into the CRM. The tone is set by examples of the agency real correspondence, so the exchange feels human rather than like a form.",
      },
      steps: {
        ru: "Проект занял около четырёх недель. Сначала вместе с рекрутёрами описали критерии по каждой группе вакансий: что обязательно, что желательно, а что сразу дисквалифицирует. Затем настроили сами вопросы, логику проверки ответов, вежливые формулировки отказа и передачу спорных случаев человеку. Сначала запустили на нескольких вакансиях, послушали живые диалоги, поправили тон и формулировки и только потом подключили ассистента ко всему потоку откликов.",
        ka: "პროექტს დაახლოებით ოთხი კვირა დასჭირდა. ჯერ რეკრუტერებთან ერთად აღვწერეთ კრიტერიუმები ვაკანსიების თითოეული ჯგუფისთვის: რა არის სავალდებულო, რა სასურველი და რა მაშინვე დისკვალიფიცირებს. შემდეგ დავაყენეთ თავად კითხვები, პასუხების შემოწმების ლოგიკა, უარის თავაზიანი ფორმულირებები და სადავო შემთხვევების ადამიანთან გადაცემა. ჯერ გავუშვით რამდენიმე ვაკანსიაზე, მოვუსმინეთ ცოცხალ დიალოგებს, გავასწორეთ ტონი და ფორმულირებები და მხოლოდ მერე დავუკავშირეთ ასისტენტი გამოხმაურებების მთელ ნაკადს.",
        en: "The project took about four weeks. First, together with the recruiters, we described the criteria for each group of roles: what is mandatory, what is desirable and what disqualifies right away. Then we set up the questions themselves, the answer-checking logic, polite decline wording and the handoff of borderline cases to a human. We first launched on several roles, listened to real dialogs, tuned the tone and wording and only then connected the assistant to the whole flow of applications.",
      },
      impact: {
        ru: "После обкатки ассистент ведёт первое касание почти по всем откликам. Первый ответ кандидат получает за минуты в любое время суток, а не через часы ожидания, поэтому сильные профили больше не остывают в очереди, а подходящие сразу выбирают удобный слот для интервью. Рекрутёры перестали разбирать однотипные первые сообщения и тратят время на то, что действительно требует человека: живые собеседования и финальную оценку. Доля кандидатов, доходящих до интервью, при этом заметно выросла.",
      ka: "გამოცდის შემდეგ ასისტენტი უძღვება პირველ შეხებას თითქმის ყველა გამოხმაურებაზე. პირველ პასუხს კანდიდატი წუთებში იღებს დღე-ღამის ნებისმიერ დროს და არა საათობით ლოდინის შემდეგ, ამიტომ ძლიერი პროფილები რიგში აღარ ცივდებიან, შესაფერისები კი მაშინვე ირჩევენ მოსახერხებელ დროს ინტერვიუსთვის. რეკრუტერებმა ერთგვაროვანი პირველი შეტყობინებების დახარისხება შეწყვიტეს და დროს ხარჯავენ იმაზე, რაც ნამდვილად ადამიანს საჭიროებს: ცოცხალი გასაუბრებები და საბოლოო შეფასება. ინტერვიუმდე მისული კანდიდატების წილი ამასთან შესამჩნევად გაიზარდა.",
        en: "After the run-in the assistant handles the first touch on almost all applications. A candidate gets the first reply in minutes at any time of day rather than after hours of waiting, so strong profiles no longer cool off in the queue, and suitable ones immediately pick a convenient interview slot. Recruiters stopped sorting the same first messages and spend their time on what truly needs a human: live interviews and the final assessment. The share of candidates who reach an interview, meanwhile, grew noticeably.",
      },
      limitations: {
        ru: "Ассистент не выносит вердикт о найме и не оценивает мягкие навыки, культурное соответствие или мотивацию: это остаётся за рекрутёром на живом интервью. Пограничные профили он не отклоняет, а помечает и передаёт человеку с полными ответами. Финальное решение всегда принимает команда, а не бот.",
        ka: "ასისტენტს არ გამოაქვს ვერდიქტი დაქირავებაზე და არ აფასებს რბილ უნარებს, კულტურულ შესაბამისობას ან მოტივაციას: ეს რჩება რეკრუტერს ცოცხალ ინტერვიუზე. სასაზღვრო პროფილებს ის არ უარყოფს, არამედ ნიშნავს და გადასცემს ადამიანს სრული პასუხებით. საბოლოო გადაწყვეტილებას ყოველთვის იღებს გუნდი და არა ბოტი.",
        en: "The assistant does not issue a hiring verdict and does not assess soft skills, cultural fit or motivation: that stays with the recruiter at the live interview. It does not reject borderline profiles but flags them and passes them to a human with the full answers. The team, not the bot, always makes the final call.",
      },
      methodology: {
        ru: "Оценивали по журналу откликов и данным CRM за месяц до запуска и месяц после стабилизации. Сравнивали время до первого ответа, время до назначенного интервью и долю кандидатов, доходящих до собеседования. Все цифры округлены и приведены как диапазоны, чтобы по ним нельзя было опознать конкретное агентство или подбор.",
        ka: "შევაფასეთ გამოხმაურებების ჟურნალითა და CRM-ის მონაცემებით გაშვებამდე ერთი თვისა და სტაბილიზაციის შემდეგ ერთი თვის განმავლობაში. ვადარებდით პირველ პასუხამდე დროს, დანიშნულ ინტერვიუმდე დროსა და გასაუბრებამდე მისული კანდიდატების წილს. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებად, რომ მათით კონკრეტული სააგენტოს ან შერჩევის ამოცნობა ვერ მოხერხდეს.",
        en: "We measured from the application log and CRM data for a month before launch and a month after stabilization. We compared time to first reply, time to a scheduled interview and the share of candidates reaching an interview. All figures are rounded and given as ranges so a specific agency or search cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название агентства, работодателей и конкретные вакансии скрыты по NDA. Названия мессенджера и сервисов указаны только чтобы показать реальный стек интеграций, а не как реклама. Все показатели даны обобщённо, в округлённых диапазонах, чтобы по ним нельзя было вычислить компанию или её клиентов.",
        ka: "სააგენტოს, დამსაქმებლებისა და კონკრეტული ვაკანსიების სახელები NDA-ს გამო დამალულია. მესენჯერისა და სერვისების სახელები მითითებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. ყველა მაჩვენებელი მოცემულია განზოგადებულად, დამრგვალებულ დიაპაზონებში, რომ მათით კომპანიის ან მისი კლიენტების დადგენა ვერ მოხერხდეს.",
        en: "The agency name, the employers and the specific roles are hidden under NDA. The messenger and service names are given only to show the real integration stack, not as advertising. All figures are presented in aggregate, in rounded ranges, so the company or its clients cannot be identified from them.",
      },
      faq: [
        {
          q: {
            ru: "Не отсеет ли бот сильного кандидата?",
            ka: "ხომ არ გაცხრის ბოტი ძლიერ კანდიდატს?",
            en: "Could the bot filter out a strong candidate?",
          },
          a: {
            ru: "Спорные и пограничные профили ассистент не отклоняет, а помечает и передаёт рекрутёру для ручной проверки. Автоматический отказ получают только те, кто явно не проходит по обязательным требованиям.",
            ka: "სადავო და სასაზღვრო პროფილებს ასისტენტი არ უარყოფს, არამედ ნიშნავს და გადასცემს რეკრუტერს ხელით შესამოწმებლად. ავტომატურ უარს იღებენ მხოლოდ ისინი, ვინც აშკარად ვერ აკმაყოფილებს სავალდებულო მოთხოვნებს.",
            en: "The assistant does not reject borderline or disputed profiles but flags them and passes them to a recruiter for a manual check. Only those who clearly fail the mandatory requirements get an automatic decline.",
          },
        },
        {
          q: {
            ru: "Как назначается интервью?",
            ka: "როგორ ინიშნება ინტერვიუ?",
            en: "How is the interview scheduled?",
          },
          a: {
            ru: "Подходящему кандидату ассистент сразу показывает свободные слоты и ставит встречу в календарь рекрутёра. Приглашение и напоминание приходят в том же чате.",
      ka: "შესაფერის კანდიდატს ასისტენტი მაშინვე უჩვენებს თავისუფალ დროს და შეხვედრას რეკრუტერის კალენდარში ნიშნავს. მოწვევა და შეხსენება იმავე ჩატში მოდის.",
            en: "For a suitable candidate the assistant immediately shows free slots and puts the meeting into the recruiter calendar. The invite and a reminder come in the same chat.",
          },
        },
        {
          q: {
            ru: "Не выглядит ли переписка с ботом безличной?",
            ka: "ხომ არ გამოიყურება ბოტთან მიმოწერა უპიროვნოდ?",
            en: "Does chatting with a bot feel impersonal?",
          },
          a: {
            ru: "Тон задан примерами реальной переписки агентства, поэтому ассистент общается уважительно и по-человечески. Как только вопрос выходит за рамки сценария, диалог подхватывает рекрутёр.",
            ka: "ტონი მოცემულია სააგენტოს რეალური მიმოწერის მაგალითებით, ამიტომ ასისტენტი პატივისცემით და ადამიანურად ურთიერთობს. როგორც კი კითხვა სცენარს სცილდება, დიალოგს რეკრუტერი იბარებს.",
            en: "The tone is set by examples of the agency real correspondence, so the assistant communicates respectfully and in a human way. As soon as a question goes beyond the scenario, a recruiter takes over the dialog.",
          },
        },
      ],
    },
  },
  {
    slug: "cleaning-company-scheduling",
    name: "Cleaning company: request intake and scheduling",
    title: {
      ru: "Клининг: приём заявок и расчёт по площади",
      ka: "დასუფთავება: განაცხადების მიღება და გაანგარიშება ფართობით",
      en: "Cleaning company: intake and area-based quote",
    },
    category: "cleaning",
    categoryLabel: { ru: "Клининг", ka: "დასუფთავება", en: "Cleaning" },
    summary: {
      ru: "Клининговая компания принимала заявки сразу в трёх местах: по телефону, в WhatsApp и в Instagram, и при передаче между сотрудниками часть из них просто терялась. Клиенты же хотели узнать цену и свободное время сразу, а не после долгой переписки. Мы собрали AI-ассистента в WhatsApp, который уточняет площадь, тип уборки и адрес, считает стоимость по тарифам и сразу ставит визит в расписание. Заявки теперь собираются в одну базу и не теряются, а согласование занимает пару сообщений.",
      ka: "დასუფთავების კომპანია იღებდა განაცხადებს ერთდროულად სამ ადგილას: ტელეფონით, WhatsApp-სა და Instagram-ში, თანამშრომლებს შორის გადაცემისას კი მათი ნაწილი უბრალოდ იკარგებოდა. კლიენტებს კი სურდათ მაშინვე გაეგოთ ფასი და თავისუფალი დრო და არა ხანგრძლივი მიმოწერის შემდეგ. ჩვენ შევქმენით AI ასისტენტი WhatsApp-ში, რომელიც აზუსტებს ფართობს, დასუფთავების ტიპსა და მისამართს, ითვლის ღირებულებას ტარიფებით და მაშინვე დებს ვიზიტს განრიგში. განაცხადები ახლა ერთ ბაზაში გროვდება და აღარ იკარგება, შეთანხმება კი რამდენიმე შეტყობინებას იკავებს.",
      en: "A cleaning company took requests in three places at once: by phone, on WhatsApp and on Instagram, and some simply got lost when passed between staff. Clients, meanwhile, wanted to know the price and a free time straight away rather than after a long back-and-forth. We built an AI assistant on WhatsApp that clarifies the area, cleaning type and address, calculates the price by the rates and puts the visit into the schedule at once. Requests now gather in one base and no longer get lost, and agreeing the details takes a couple of messages.",
    },
    metrics: [
      {
        label: { ru: "Расчёт цены и времени", ka: "ფასისა და დროის გაანგარიშება", en: "Price and time quote" },
        before: { ru: "долгая переписка", ka: "ხანგრძლივი მიმოწერა", en: "long back-and-forth" },
        after: { ru: "пара сообщений", ka: "რამდენიმე შეტყობინება", en: "a couple of messages" },
      },
      {
        label: { ru: "Учёт заявок", ka: "განაცხადების აღრიცხვა", en: "Request tracking" },
        before: { ru: "терялись между каналами", ka: "იკარგებოდა არხებს შორის", en: "lost between channels" },
        after: { ru: "единая база", ka: "ერთიანი ბაზა", en: "one base" },
      },
      {
        label: { ru: "Обработка заявок", ka: "განაცხადების დამუშავება", en: "Requests handled" },
        before: { ru: "часть уходила впустую", ka: "ნაწილი ცარიელში მიდიოდა", en: "some slipped away" },
        after: { ru: "заметно выше", ka: "შესამჩნევად მეტი", en: "noticeably higher" },
      },
    ],
    slogan: {
      ru: "Расчёт стоимости по площади и запись в расписание в чате",
      ka: "ღირებულების გაანგარიშება ფართობით და განრიგში ჩაწერა ჩატში",
      en: "Area-based price and scheduling in one chat",
    },
    description: {
      ru: "AI-ассистент принимает заявку, считает стоимость по площади и типу уборки и ставит визит в расписание, чтобы заявки не терялись между каналами.",
      ka: "AI ასისტენტი იღებს განაცხადს, ითვლის ღირებულებას ფართობითა და დასუფთავების ტიპით და დებს ვიზიტს განრიგში, რომ განაცხადები არხებს შორის არ დაიკარგოს.",
      en: "An AI assistant takes a request, calculates the price by area and cleaning type and puts the visit into the schedule so requests do not get lost between channels.",
    },
    techStack: ["WhatsApp Business API", "Google Calendar", "Google Maps", "Custom CRM"],
    status: "production",
    kind: "anonymous",
    caseStudy: {
      context: {
        ru: "Клининговая компания работала по частным квартирам и небольшим офисам и принимала заявки сразу по трём каналам: звонки, WhatsApp и Instagram Direct. Заявки записывали кто как: заметками, в переписке, на бумаге у диспетчера. При передаче между сотрудниками и сменами часть обращений просто терялась. Клиенты при этом хотели самого простого: сразу услышать цену и свободное время, а вместо этого слышали «сейчас уточним и перезвоним» и подолгу ждали ответа.",
        ka: "დასუფთავების კომპანია მუშაობდა კერძო ბინებსა და მცირე ოფისებზე და იღებდა განაცხადებს ერთდროულად სამი არხით: ზარები, WhatsApp და Instagram Direct. განაცხადებს ვინ როგორ იწერდა: შენიშვნებით, მიმოწერაში, დისპეტჩერთან ქაღალდზე. თანამშრომლებსა და ცვლებს შორის გადაცემისას მიმართვების ნაწილი უბრალოდ იკარგებოდა. კლიენტებს კი ყველაზე მარტივი რამ სურდათ: მაშინვე გაეგოთ ფასი და თავისუფალი დრო, ამის ნაცვლად კი ესმოდათ «ახლა დავაზუსტებთ და გადმოგირეკავთ» და დიდხანს ელოდნენ პასუხს.",
        en: "The cleaning company worked with private flats and small offices and took requests across three channels at once: calls, WhatsApp and Instagram Direct. Requests were written down however staff could: in notes, inside chats, on paper at the dispatcher desk. When they were passed between employees and shifts, some simply got lost. Clients, meanwhile, wanted the simplest thing: to hear the price and a free time straight away, but instead they were told the team would check and call back, and waited a long time for a reply.",
      },
      diagnostic: {
        ru: "Мы прошли по всем каналам и увидели общую картину: единого списка заявок не было, поэтому одну и ту же заявку могли обрабатывать двое, а другую не брал никто. Особенно обидно терялись обращения вечером и в выходные, когда диспетчер уже не на линии. Много времени уходило на расчёт стоимости вручную: сотрудник переспрашивал площадь и тип уборки, лез в тарифы и только потом называл цену. Из-за этой задержки часть клиентов успевала уйти к тем, кто ответил быстрее.",
        ka: "ჩვენ გავიარეთ ყველა არხზე და დავინახეთ საერთო სურათი: განაცხადების ერთიანი სია არ არსებობდა, ამიტომ ერთსა და იმავე განაცხადს ორნი ამუშავებდნენ, სხვას კი არავინ იღებდა. განსაკუთრებით სამწუხაროდ იკარგებოდა მიმართვები საღამოს და შაბათ-კვირას, როცა დისპეტჩერი ხაზზე აღარ იყო. ბევრი დრო ეთმობოდა ღირებულების ხელით გამოთვლას: თანამშრომელი ხელახლა ეკითხებოდა ფართობსა და დასუფთავების ტიპს, ეძებდა ტარიფებში და მხოლოდ მერე ასახელებდა ფასს. ამ დაყოვნების გამო კლიენტების ნაწილი ასწრებდა წასვლას მასთან, ვინც უფრო სწრაფად უპასუხა.",
        en: "We walked through every channel and saw the overall picture: there was no single list of requests, so the same request could be worked by two people while another was picked up by no one. Requests were lost especially painfully in the evening and on weekends, when the dispatcher was already off the line. A lot of time went into calculating the price by hand: an employee re-asked the area and cleaning type, dug through the rates and only then named a price. Because of this delay some clients left for whoever answered faster.",
      },
      problem: {
        ru: "Задача была свести все обращения в одну точку и убрать ручной пересчёт. Ассистент должен собрать заявку по понятной схеме, сам посчитать предварительную стоимость по площади и типу уборки, прикинуть выезд по адресу и тут же предложить свободное окно в расписании. Важно было не давать боту фантазировать с ценами: он считает строго по тарифной сетке компании и не обещает того, чего нет в прайсе. А все заявки со всех каналов должны падать в общий журнал, чтобы ничего не терялось.",
        ka: "ამოცანა იყო ყველა მიმართვის ერთ წერტილში მოყვანა და ხელით გადათვლის მოცილება. ასისტენტმა უნდა შეკრიბოს განაცხადი გასაგები სქემით, თავად დათვალოს წინასწარი ღირებულება ფართობითა და დასუფთავების ტიპით, გამოთვალოს გასვლა მისამართზე და მაშინვე შესთავაზოს თავისუფალი ფანჯარა განრიგში. მნიშვნელოვანი იყო, ბოტს ფასებთან ფანტაზია არ მიგვეცა: ის ითვლის მკაცრად კომპანიის სატარიფო ბადით და არ ჰპირდება იმას, რაც პრაისში არ არის. ყველა განაცხადი კი ყველა არხიდან უნდა ხვდებოდეს საერთო ჟურნალში, რომ არაფერი დაიკარგოს.",
        en: "The task was to bring every request into one point and remove manual recalculation. The assistant should collect a request in a clear scheme, calculate the preliminary price itself by area and cleaning type, estimate the trip by address and immediately offer a free window in the schedule. It was important not to let the bot fantasize about prices: it calculates strictly by the company rate grid and does not promise what is not in the price list. And every request from every channel should land in a shared log so nothing gets lost.",
      },
      solution: {
        ru: "Собрали ассистента в WhatsApp как единый вход для заявок. В диалоге он уточняет площадь, тип уборки (поддерживающая, генеральная, после ремонта) и адрес, по карте прикидывает зону выезда, считает предварительную стоимость по тарифам компании, показывает свободные окна и ставит визит в расписание. Все заявки он собирает в общую базу, поэтому обращение из Instagram или по телефону тоже попадает в тот же журнал. Тон человеческий, а цену бот берёт только из прайса и не выдумывает.",
        ka: "შევქმენით ასისტენტი WhatsApp-ში როგორც განაცხადების ერთიანი შესვლა. დიალოგში ის აზუსტებს ფართობს, დასუფთავების ტიპს (მიმდინარე, გენერალური, რემონტის შემდეგ) და მისამართს, რუკით ითვლის გასვლის ზონას, ანგარიშობს წინასწარ ღირებულებას კომპანიის ტარიფებით, უჩვენებს თავისუფალ ფანჯრებს და დებს ვიზიტს განრიგში. ყველა განაცხადს ის აგროვებს საერთო ბაზაში, ამიტომ მიმართვა Instagram-იდან ან ტელეფონით ასევე ხვდება იმავე ჟურნალში. ტონი ადამიანურია, ფასს კი ბოტი მხოლოდ პრაისიდან იღებს და არ იგონებს.",
        en: "We built an assistant on WhatsApp as a single entry for requests. In the dialog it clarifies the area, the cleaning type (maintenance, deep, after renovation) and the address, estimates the travel zone on the map, calculates a preliminary price by the company rates, shows free windows and puts the visit into the schedule. It gathers every request into a shared base, so a request from Instagram or by phone also lands in the same log. The tone is human, and the bot takes the price only from the price list and does not invent it.",
      },
      steps: {
        ru: "Проект занял около трёх недель. Сначала оцифровали тарифы и правила: сколько стоит квадратный метр по каждому типу уборки, как считается выезд по районам, какие есть надбавки. Затем настроили расчёт, расписание бригад, сбор заявок в единую базу и связали каналы, чтобы обращения из телефона, WhatsApp и Instagram попадали в один журнал. Обкатали сценарий на части заявок, поправили формулировки и логику расчёта по живым диалогам и вывели ассистента на весь поток.",
        ka: "პროექტს დაახლოებით სამი კვირა დასჭირდა. ჯერ გავაციფრულეთ ტარიფები და წესები: რა ღირს კვადრატული მეტრი დასუფთავების თითოეული ტიპისთვის, როგორ ითვლება გასვლა უბნების მიხედვით, რა დანამატებია. შემდეგ დავაყენეთ გაანგარიშება, ბრიგადების განრიგი, განაცხადების შეკრება ერთიან ბაზაში და დავაკავშირეთ არხები, რომ მიმართვები ტელეფონიდან, WhatsApp-იდან და Instagram-იდან ერთ ჟურნალში მოხვედრილიყო. სცენარი გავტესტეთ განაცხადების ნაწილზე, ცოცხალი დიალოგებით გავასწორეთ ფორმულირებები და გაანგარიშების ლოგიკა და გავიტანეთ ასისტენტი მთელ ნაკადზე.",
        en: "The project took about three weeks. First we digitized the rates and rules: how much a square meter costs for each cleaning type, how the trip is counted by district, what surcharges exist. Then we set up the calculation, the crew schedule, the collection of requests into a single base and linked the channels so that requests from the phone, WhatsApp and Instagram landed in one log. We ran the scenario on part of the requests, tuned the wording and calculation logic from real dialogs and rolled the assistant out to the full flow.",
      },
      impact: {
        ru: "После запуска заявки со всех каналов собираются в один журнал, поэтому они перестали теряться при передаче между сменами, а доля обработанных обращений заметно выросла. Клиент видит предварительную цену и свободное время сразу, в любое время суток, и согласование сократилось с долгой переписки до пары сообщений. Диспетчер больше не пересчитывает стоимость вручную и не сводит заявки из трёх мест: он подтверждает визиты и занимается сложными случаями. Средний чек при этом не просел, потому что расчёт по-прежнему идёт строго по тарифам.",
        ka: "გაშვების შემდეგ განაცხადები ყველა არხიდან ერთ ჟურნალში გროვდება, ამიტომ ცვლებს შორის გადაცემისას აღარ იკარგება, დამუშავებული მიმართვების წილი კი შესამჩნევად გაიზარდა. კლიენტი წინასწარ ფასსა და თავისუფალ დროს მაშინვე ხედავს, დღე-ღამის ნებისმიერ დროს, შეთანხმება კი ხანგრძლივი მიმოწერიდან რამდენიმე შეტყობინებამდე შემცირდა. დისპეტჩერი აღარ ითვლის ღირებულებას ხელით და აღარ კრებს განაცხადებს სამი ადგილიდან: ის ადასტურებს ვიზიტებს და რთულ შემთხვევებს უძღვება. საშუალო ჩეკი ამასთან არ დაწეულა, რადგან გაანგარიშება კვლავ მკაცრად ტარიფებით მიდის.",
        en: "After launch, requests from all channels gather in one log, so they stopped getting lost when passed between shifts, and the share of handled requests grew noticeably. The client sees the preliminary price and a free time straight away, at any hour, and the agreement shrank from a long back-and-forth to a couple of messages. The dispatcher no longer recalculates the cost by hand or merges requests from three places: they confirm visits and deal with complex cases. The average ticket, meanwhile, did not drop, because the calculation still runs strictly by the rates.",
      },
      limitations: {
        ru: "Ассистент точно считает только типовые объекты. Нестандартные площади, сильные загрязнения, промышленную уборку и спорную квадратуру он не оценивает вслепую, а предлагает бесплатный выезд оценщика и переводит такую заявку на человека. Он также не согласовывает индивидуальные скидки сверх тарифов: это решает менеджер.",
        ka: "ასისტენტი ზუსტად ითვლის მხოლოდ ტიპურ ობიექტებს. არასტანდარტულ ფართობებს, ძლიერ დაბინძურებას, სამრეწველო დასუფთავებასა და სადავო კვადრატურას ის ბრმად არ აფასებს, არამედ სთავაზობს შემფასებლის უფასო გამოძახებას და ასეთ განაცხადს ადამიანს გადასცემს. ის ასევე არ ათანხმებს ტარიფებზე მაღალ ინდივიდუალურ ფასდაკლებებს: ამას მენეჯერი წყვეტს.",
        en: "The assistant prices only typical sites accurately. Non-standard areas, heavy soiling, industrial cleaning and disputed square footage it does not estimate blindly, but offers a free estimator visit and passes such a request to a human. It also does not approve individual discounts above the rates: a manager decides that.",
      },
      methodology: {
        ru: "Оценивали по журналу заявок и данным CRM за месяц до запуска и месяц после стабилизации. Сравнивали долю обработанных заявок, время согласования цены и записи, а также число потерянных обращений. Все цифры округлены и приведены как диапазоны, чтобы по ним нельзя было опознать конкретную компанию.",
        ka: "შევაფასეთ განაცხადების ჟურნალითა და CRM-ის მონაცემებით გაშვებამდე ერთი თვისა და სტაბილიზაციის შემდეგ ერთი თვის განმავლობაში. ვადარებდით დამუშავებული განაცხადების წილს, ფასისა და ჩაწერის შეთანხმების დროს, ასევე დაკარგული მიმართვების რაოდენობას. ყველა ციფრი დამრგვალებულია და მოცემულია დიაპაზონებად, რომ მათით კონკრეტული კომპანიის ამოცნობა ვერ მოხერხდეს.",
        en: "We measured from the request log and CRM data for a month before launch and a month after stabilization. We compared the share of handled requests, the time to agree the price and booking, and the number of lost requests. All figures are rounded and given as ranges so a specific company cannot be identified from them.",
      },
      anonymityNote: {
        ru: "Название компании, адреса и тарифы скрыты по NDA, а цены в примерах условны. Названия мессенджера, карт и календаря указаны только чтобы показать реальный стек интеграций, а не как реклама. Показатели даны обобщённо и округлённо, чтобы по ним нельзя было вычислить конкретную компанию.",
        ka: "კომპანიის სახელი, მისამართები და ტარიფები NDA-ს გამო დამალულია, მაგალითებში ფასები კი პირობითია. მესენჯერის, რუკებისა და კალენდრის სახელები მითითებულია მხოლოდ ინტეგრაციების რეალური სტეკის საჩვენებლად და არა როგორც რეკლამა. მაჩვენებლები მოცემულია განზოგადებულად და დამრგვალებულად, რომ მათით კონკრეტული კომპანიის დადგენა ვერ მოხერხდეს.",
        en: "The company name, addresses and rates are hidden under NDA, and the prices in the examples are illustrative. The messenger, maps and calendar names are given only to show the real integration stack, not as advertising. The figures are presented in aggregate and rounded so a specific company cannot be identified from them.",
      },
      faq: [
        {
          q: {
            ru: "Как считается стоимость уборки?",
            ka: "როგორ ითვლება დასუფთავების ღირებულება?",
            en: "How is the cleaning price calculated?",
          },
          a: {
            ru: "Ассистент берёт площадь и тип уборки, применяет тарифную сетку компании и с учётом выезда по адресу показывает предварительную цену сразу, без ожидания диспетчера. Финальную стоимость подтверждает менеджер, если объект нестандартный.",
            ka: "ასისტენტი იღებს ფართობსა და დასუფთავების ტიპს, იყენებს კომპანიის სატარიფო ბადეს და მისამართზე გასვლის გათვალისწინებით წინასწარ ფასს მაშინვე უჩვენებს, დისპეტჩერის მოლოდინის გარეშე. საბოლოო ღირებულებას მენეჯერი ადასტურებს, თუ ობიექტი არასტანდარტულია.",
            en: "The assistant takes the area and cleaning type, applies the company rate grid and, accounting for the trip to the address, shows a preliminary price right away, without waiting for a dispatcher. A manager confirms the final cost if the site is non-standard.",
          },
        },
        {
          q: {
            ru: "Что с нестандартными объектами?",
            ka: "რა ხდება არასტანდარტულ ობიექტებთან?",
            en: "What about non-standard sites?",
          },
          a: {
            ru: "Сложные и нетиповые случаи бот не считает вслепую: он предлагает бесплатный выезд оценщика и передаёт заявку человеку. Так клиент получает честную цену, а не наугад завышенную или заниженную.",
            ka: "რთულ და არატიპურ შემთხვევებს ბოტი ბრმად არ ითვლის: ის სთავაზობს შემფასებლის უფასო გამოძახებას და განაცხადს ადამიანს გადასცემს. ასე კლიენტი იღებს სამართლიან ფასს და არა შემთხვევით გაზრდილს ან შემცირებულს.",
            en: "The bot does not price complex or atypical cases blindly: it offers a free estimator visit and passes the request to a human. That way the client gets a fair price rather than a randomly inflated or lowered one.",
          },
        },
        {
          q: {
            ru: "Заявка из Instagram или по телефону тоже не потеряется?",
            ka: "Instagram-იდან ან ტელეფონით შემოსული განაცხადიც არ დაიკარგება?",
            en: "Will a request from Instagram or by phone also not get lost?",
          },
          a: {
            ru: "Да, все каналы сведены в одну базу, поэтому обращение из любого источника попадает в общий журнал и не теряется при передаче между сменами.",
            ka: "დიახ, ყველა არხი ერთ ბაზაშია მოყვანილი, ამიტომ ნებისმიერი წყაროდან მიმართვა საერთო ჟურნალში ხვდება და ცვლებს შორის გადაცემისას არ იკარგება.",
            en: "Yes, all channels are merged into one base, so a request from any source lands in the shared log and does not get lost when passed between shifts.",
          },
        },
      ],
    },
  },
];
