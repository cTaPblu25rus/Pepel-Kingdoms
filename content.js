// Тексты сайта (RU / EN). Здесь удобно править описание игры, обновления и ссылки.
window.CONFIG = {
  repo: "cTaPblu25rus/Pepel-Kingdoms",
  // ID ролика на YouTube (часть ссылки после v=). Пока пусто — показываются видео с сайта.
  youtubeChannel: "https://youtube.com/@pepel_i_chary",
  // Ролики на YouTube: [ID, название RU, название EN]
  youtube: [
    ["djKfMAfGBjM", "Трейлер: RPG для телефона, где можно всё", "Trailer: a phone RPG where you can do everything"],
    ["MSoMffsTiWM", "Обзор: от игры про зомби до целого мира", "Review: from a zombie game to a whole world"]
  ],
  version: "3.3",
  // Счётчик скачиваний (бесплатный сервис abacus.jasoncameron.dev): считает нажатия на кнопки скачивания
  counter: "https://abacus.jasoncameron.dev",
  counterNs: "pepel-kingdoms-ctapblu25rus",
  // Поддержка проекта: вставьте свои ссылки в url. Пустые кнопки не показываются.
  donate: [
    { name: "Boosty", url: "", ru: "Подписка или разовая поддержка", en: "Subscription or one-time support" },
    { name: "DonationAlerts", url: "", ru: "Донат с сообщением", en: "Donation with a message" },
    { name: "ЮMoney", url: "", ru: "Перевод картой", en: "Card transfer" }
  ],
  apk: "download/PepelKingdoms_v3.3.apk",
  apkDev: "download/PepelKingdoms_v3.3_DEV.apk",
  apkSize: "60 МБ"
};

// Старые версии: при выходе новой версии предыдущий APK переносится сюда
window.OLD_VERSIONS = [
  ["3.2", "24.11.2026", "Музыка", "Music", "download/old/PepelKingdoms_v3.2.apk", 60],
  ["3.1", "23.11.2026", "Флирт и подарки", "Flirting & gifts", "download/old/PepelKingdoms_v3.1.apk", 52],
  ["3.0", "23.11.2026", "Большое обновление", "The big update", "download/old/PepelKingdoms_v3.0.apk", 52],
  ["2.0", "21.11.2026", "Королевства", "Kingdoms", "download/old/PepelKingdoms_v2.0.apk", 52],
  ["1.0", "20.11.2026", "Пепел и Чары — первая версия", "Ash & Charms — first release", "download/old/PepelIChary_v1.0.apk", 50],
];

window.UI = {
  ru: {
    tagline: "Пиксельная RPG-песочница для Android о выживании среди нежити, магии и жизни в средневековых королевствах",
    download: "Скачать для Android", watch: "Смотреть трейлер",
    tabs: { home: "Главная", updates: "Обновления", bugs: "Исправленные баги", items: "Предметы", chars: "Персонажи", mobs: "Существа", world: "Мир и история", video: "Видео", sounds: "Звуки", dl: "Скачать", old: "Старые версии", ideas: "Предложения", support: "Поддержать" },
    sound: "Звук", music: "Музыка", search: "Поиск предмета…", all: "Все",
    craftAt: "Где сделать", byHand: "Руками", price: "Цена", noRecipe: "Не крафтится: находится в мире или продаётся",
    story: "История", role: "В игре", lines: "Реплики", hp: "Здоровье", dmg: "Урон", drops: "Добыча", hostile: "Враждебный", peaceful: "Мирный", boss: "Босс", flying: "Летает",
    prof: "Профессии героя", npc: "Жители королевств", play: "Анимация", next: "Следующая реплика",
    itemsCount: "предметов в игре", ideasTitle: "Предложите идею для игры", ideaType: "Тип", ideaText: "Опишите идею или баг…", send: "Отправить на GitHub", ideaHint: "Откроется GitHub с готовым текстом — останется нажать «Submit». Нужен бесплатный аккаунт GitHub.", allIdeas: "Все предложения и баги",
    ideaTypes: ["Новая механика", "Предмет", "Персонаж или квест", "Нашёл баг", "Другое"],
    dlTitle: "Скачать игру", dlMain: "Обычная версия", dlDev: "Версия для разработчика", dlDevNote: "Меню со всеми возможностями: бессмертие, любые предметы, монстры, сценки. Ставится рядом с обычной.",
    install: "Как установить", installSteps: ["Скачайте APK на телефон.", "Откройте файл и разрешите установку из неизвестных источников.", "Нужен Android 7.0 или новее, около 200 МБ свободного места."],
    soundsMusic: "Музыка из игры", soundsSfx: "Звуки", credits: "Авторы графики, звука и музыки",
    videoLocal: "Видео с сайта",
    downloads: "скачиваний", dlCount: "Игру скачали",
    oldTitle: "Старые версии игры", oldText: "Здесь хранятся прошлые версии — чтобы вспомнить, с чего всё начиналось.", oldWarn: "Старую версию нельзя поставить поверх новой: Android потребует сначала удалить игру, и сохранение пропадёт. Лучше ставить на другой телефон.", oldCur: "Текущая версия — во вкладке «Скачать».", oldDl: "Скачать",
    supTitle: "Поддержать игру", supText: "Игра бесплатная и без рекламы. Если она вам нравится, вы можете помочь ей расти: каждая поддержка — это новые обновления, музыка и персонажи.",
    supSoon: "Ссылки для доната скоро появятся. А пока можно помочь по-другому:", supFree: "Помочь бесплатно",
    supWays: [["ui_love", "Расскажите друзьям", "Поделитесь ссылкой на сайт — так игру найдёт больше людей."], ["ui_talk", "Подпишитесь на YouTube и TikTok", "Лайк и комментарий под видео очень помогают каналу."], ["ui_quest", "Предложите идею", "Лучшие идеи попадают в следующие версии."], ["ui_hammer", "Найдите баг", "Опишите, что сломалось, — исправим в обновлении."]],
    share: "Поделиться ссылкой", copied: "Ссылка скопирована!", ytSub: "Канал на YouTube", ytSoon: "Скоро на YouTube", made: "Сделано на Godot 4.3",
  },
  en: {
    tagline: "A pixel RPG sandbox for Android about surviving the undead, magic and life in medieval kingdoms",
    download: "Download for Android", watch: "Watch trailer",
    tabs: { home: "Home", updates: "Updates", bugs: "Fixed bugs", items: "Items", chars: "Characters", mobs: "Creatures", world: "World & lore", video: "Video", sounds: "Sounds", dl: "Download", old: "Old versions", ideas: "Suggestions", support: "Support" },
    sound: "Sound", music: "Music", search: "Search items…", all: "All",
    craftAt: "Crafted at", byHand: "By hand", price: "Price", noRecipe: "Not craftable: found in the world or sold in shops",
    story: "Story", role: "In game", lines: "Quotes", hp: "Health", dmg: "Damage", drops: "Drops", hostile: "Hostile", peaceful: "Peaceful", boss: "Boss", flying: "Flies",
    prof: "Hero professions", npc: "People of the kingdoms", play: "Animation", next: "Next quote",
    itemsCount: "items in the game", ideasTitle: "Suggest an idea", ideaType: "Type", ideaText: "Describe your idea or bug…", send: "Send to GitHub", ideaHint: "GitHub opens with the text filled in — just press “Submit”. A free GitHub account is required.", allIdeas: "All suggestions and bugs",
    ideaTypes: ["New mechanic", "Item", "Character or quest", "Found a bug", "Other"],
    dlTitle: "Download the game", dlMain: "Regular version", dlDev: "Developer version", dlDevNote: "A menu with everything: god mode, any item, monsters, cutscenes. Installs alongside the regular version.",
    install: "How to install", installSteps: ["Download the APK to your phone.", "Open it and allow installs from unknown sources.", "Requires Android 7.0+ and about 200 MB of free space."],
    soundsMusic: "Game music", soundsSfx: "Sound effects", credits: "Art, sound and music credits",
    videoLocal: "Videos",
    downloads: "downloads", dlCount: "Downloads",
    oldTitle: "Old versions of the game", oldText: "Past versions live here — to see where it all began.", oldWarn: "An old version can’t be installed over a newer one: Android will ask you to uninstall the game first, and your save will be lost. Better use another phone.", oldCur: "The current version is in the Download tab.", oldDl: "Download",
    supTitle: "Support the game", supText: "The game is free and has no ads. If you enjoy it, you can help it grow: every bit of support means new updates, music and characters.",
    supSoon: "Donation links are coming soon. Meanwhile, you can help in other ways:", supFree: "Help for free",
    supWays: [["ui_love", "Tell your friends", "Share the site link so more people find the game."], ["ui_talk", "Follow on YouTube and TikTok", "A like and a comment really help the channel."], ["ui_quest", "Suggest an idea", "The best ideas make it into the next versions."], ["ui_hammer", "Report a bug", "Tell us what broke and we’ll fix it in an update."]],
    share: "Share the link", copied: "Link copied!", ytSub: "YouTube channel", ytSoon: "Coming to YouTube", made: "Made with Godot 4.3",
  }
};

window.FEATURES = [
  ["ui_map", "Бесконечный мир", "Endless world", "Леса, пустыни, озёра и проклятые земли генерируются заново в каждой игре.", "Forests, deserts, lakes and cursed lands are generated anew every game."],
  ["ui_sword", "Магия, луки и мечи", "Magic, bows & swords", "Автонаводка: стреляешь в сторону врага — снаряд сам летит в цель.", "Auto-aim: shoot toward an enemy and the projectile homes in."],
  ["ui_build", "Стройка как в Terraria", "Terraria-style building", "Ставь касанием, веди пальцем рядами, поворачивай, сноси молотом и переноси.", "Tap to place, drag to build rows, rotate, demolish with a hammer and move things."],
  ["ui_crown", "Королевства и города", "Kingdoms & towns", "Стены, стража, башни, рынок, таверны, гильдия и дома, куда можно постучать.", "Walls, guards, towers, markets, taverns, a guild and houses you can knock on."],
  ["ui_talk", "Диалоги с выбором", "Choice dialogues", "Каждый ответ меняет отношения. Жители помнят доброту и грубость.", "Every answer changes relationships. Villagers remember kindness and rudeness."],
  ["ui_love", "Любовь и семья", "Love & family", "Флирт, свидания, подарки со смущением, свадьба, дети, которые растут.", "Flirting, dates, blushing gift scenes, a wedding and children who grow up."],
  ["ui_craft", "Крафт и развитие", "Crafting & progression", "8 станков, навыки и улучшение снаряжения на наковальне до +5.", "8 workstations, a skill tree and anvil upgrades up to +5."],
  ["ui_map", "Кони и подземелья", "Horses & dungeons", "Оседлайте дикую лошадь, призовите огненного скакуна, спуститесь в Подземелье Испытаний.", "Saddle a wild horse, summon a fire steed, descend into the Trial Dungeon."],
  ["ui_food", "Выживание и ферма", "Survival & farming", "Голод, жажда, грядки, полив, домашние животные и готовка.", "Hunger, thirst, garden beds, watering, tamed animals and cooking."],
];

window.UPDATES = [
  { v: "3.3", date: "24.11.2026", ru: "Странствия", en: "Wanderings", items_ru: ["Кони: в полях пасутся дикие лошади. Подойдите с седлом, нажмите «Оседлать» — и у вас свой конь с именем. Верхом в 1,75 раза быстрее", "Свисток зовёт коня откуда угодно, а когда вы спешитесь, он ждёт рядом и щиплет траву", "Призрачный конь из свитка: быстрее обычного и растворяется, когда вы спешитесь", "Огненный скакун — самый быстрый и оставляет огненный след, который жжёт врагов", "Обыск: брошенные повозки, руины и могилы. Из могилы может подняться мертвец", "Караваны под охраной разбойников, а у разбойников — седельные сумки с добычей", "Подземелье Испытаний: с каждым этажом враги сильнее и награда богаче, каждый пятый этаж охраняет босс", "За стражей этажей — призрачный конь, оберег и рог огненного скакуна. Можно начать с 6-го, 11-го этажа…", "Магия: свиток возвращения домой, свиток странника в ближайший город, руна выхода, зелье щита, оберег", "Сад: поливалка, пугало (+1 к урожаю), удобрение и золотая лейка на 9 грядок"], items_en: ["Horses: wild horses graze in the fields. Bring a saddle, press “Saddle up” and you get your own named horse. Riding is 1.75× faster", "A whistle calls your horse from anywhere; when you dismount it waits nearby and grazes", "The Ghost Steed from a scroll: faster than a horse, fades away when you dismount", "The Fire Steed is the fastest and leaves a burning trail that scorches enemies", "Searching: abandoned carts, ruins and graves. A grave may raise the dead", "Caravans guarded by bandits, and bandits carry saddlebags full of loot", "The Trial Dungeon: every floor is harder and richer, every fifth floor has a boss", "Floor guardians drop the Ghost Steed, a Ward Amulet and the Fire Steed horn. Start again from floor 6, 11…", "Magic: Scroll of Return home, Wanderer’s Scroll to the nearest town, Rune of Escape, Shield Potion, Ward Amulet", "Garden: sprinkler, scarecrow (+1 harvest), fertilizer and a golden can for 9 beds"] },
  { v: "3.2", date: "24.11.2026", ru: "Музыка", en: "Music", items_ru: ["4 новых ретро-трека: меню, день в мире, города, ночь и бой", "Музыка меняется сама: в городе — своя, рядом с врагами включается боевая", "Строить и сносить можно на 9 клеток от героя вместо 7"], items_en: ["4 new retro tracks: menu, open world, towns, night & combat", "Music changes by itself: towns have their own theme, combat music kicks in near enemies", "Build and demolish range raised from 7 to 9 tiles"] },
  { v: "3.1", date: "23.11.2026", ru: "Флирт и подарки", en: "Flirting & gifts", items_ru: ["Флирт: комплименты, шутки, подмигивание, взять за руку, поцеловать в щёку, обнять", "У каждой девушки любимый комплимент — угадаете, и она тает", "Подарок — отдельная сценка: румянец, сердечки, смущение", "«Расскажи о себе»: хобби, любимая еда, страхи и мечты — потом она проверит, помните ли вы", "Ревность, если флиртовать с другой в том же городе"], items_en: ["Flirting: compliments, jokes, winks, holding hands, a kiss on the cheek, hugs", "Every girl has a favorite compliment — guess it and she melts", "Gifts are a little scene: blushing, hearts, embarrassment", "“Tell me about yourself”: hobbies, favorite food, fears and dreams — she’ll later check if you remember", "Jealousy if you flirt with someone else in the same town"] },
  { v: "3.0", date: "23.11.2026", ru: "Большое обновление", en: "The big update", items_ru: ["Строительство как в Terraria: касание, протяжка рядом, поворот, снос молотом, перенос", "241 предмет: 9 стен, 10 полов, больше 60 вещей мебели и декора, новое оружие и броня", "Навыки: 8 веток по 5 ступеней, очко за каждый уровень", "Наковальня: улучшение оружия, брони и инструментов до +5", "Города в 2–3 раза больше: стены, ворота, стража и башни, которые стреляют по монстрам", "Внутри стен монстры не наносят урон", "Рынок: продавец за каждым прилавком", "Интерьеры: таверна, лавка, гильдия, жилые дома — в них нужно постучать", "Гильдия искателей приключений: контракты и ранги от медного до мифрилового", "Диалоги как в классических RPG: портрет, имя, варианты ответа", "Семья: дела по дому для супруга, дети растут и ходят с вами в поход"], items_en: ["Terraria-style building: tap, drag rows, rotate, hammer demolition, moving", "241 items: 9 walls, 10 floors, 60+ furniture and decor pieces, new weapons and armor", "Skills: 8 branches with 5 ranks, a point every level", "Anvil: upgrade weapons, armor and tools up to +5", "Towns 2–3× bigger: walls, gates, guards and towers that shoot monsters", "Monsters deal no damage inside the walls", "Market: a vendor behind every stall", "Interiors: tavern, shop, guild, homes — knock on the door", "Adventurers’ Guild: contracts and ranks from Copper to Mythril", "Classic RPG dialogues: portrait, name plate, answer choices", "Family: chores for your spouse, kids grow up and join your adventures"] },
  { v: "2.1", date: "22.11.2026", ru: "Исправления, сценки и DEV-версия", en: "Fixes, cutscenes & DEV build", items_ru: ["Исправлены текстуры земли, построек, деревьев и пещер", "Автонаводка для лука и магии", "Сюжетные сценки на движке: пролог, аудиенция у короля, свадьба, рождение ребёнка", "Версия для разработчика с меню всех возможностей"], items_en: ["Fixed ground, building, tree and cave textures", "Auto-aim for bows and magic", "In-engine cutscenes: prologue, royal audience, wedding, birth", "Developer build with a menu of every feature"] },
  { v: "2.0", date: "21.11.2026", ru: "Королевства", en: "Kingdoms", items_ru: ["Бесконечный мир с генерацией", "Задания, которые берёшь по пути — или проходишь мимо", "Выживание, строительство, ферма, крафт", "Жители с характером, монстры, животные", "Любовь, отношения, свадьба, дети", "Пещеры, логова, королевства", "6 профессий и красивое меню"], items_en: ["Procedurally generated endless world", "Quests you can pick up on the way — or ignore", "Survival, building, farming, crafting", "Villagers with personalities, monsters, animals", "Love, relationships, wedding, children", "Caves, dens, kingdoms", "6 professions and a beautiful menu"] },
  { v: "1.0", date: "20.11.2026", ru: "Первая версия", en: "First release", items_ru: ["Пиксельная игра о выживании в зомби-апокалипсисе", "Магия и сюжет", "Небольшой мир с заданиями по истории"], items_en: ["A pixel zombie-apocalypse survival game", "Magic and a story", "A small world with story quests"] },
];

// [версия, RU, EN, картинка «как было» или "", картинка «как стало» или ""]
window.BUGS = [
  ["3.3", "В пещерах кнопка «Действие» не замечала лестницу, сундуки и руду, а монстры не гнались за героем", "In caves the Action button missed the ladder, chests and ore, and monsters didn’t chase you", "", ""],
  ["3.1", "Можно было выйти из дома через проём двери прямо в пустоту", "You could walk out of a house through the doorway into the void", "b31_void", "img/shot_house"],
  ["3.1", "В гильдии, лавке и таверне не было людей: они стояли на улице, а комната пустовала", "The guild, shop and tavern were empty: their people stood outside", "b31_guild", "img/shot_guild"],
  ["3.1", "Длинные варианты ответа обрезались за краем экрана", "Long dialogue choices were cut off at the screen edge", "b31_choices", "img/shot_flirt"],
  ["3.0", "Пчёлы и летучие мыши пролетали сквозь стены и доставали героя в доме", "Bees and bats flew through walls and reached you inside", "b30_bees", ""],
  ["3.0", "Монстры наносили урон прямо в городе, рядом со стражей", "Monsters dealt damage right in town, next to the guards", "b30_town", "img/shot_gate"],
  ["3.0", "Прилавки на рынке были вырезаны неправильно и выглядели как раскрытые книги", "Market stalls were cut wrong and looked like open books", "b30_stalls", "img/shot_market"],
  ["3.0", "На кнопке «Действие» был нарисован кулон, которого нет среди предметов", "The Action button showed a pendant that wasn’t an item", "b30_pendant", ""],
  ["3.0", "Строить можно было только через список крафта: без поворота, сноса и переноса", "Building only worked via the craft list: no rotating, demolishing or moving", "b30_build", "img/shot_build"],
  ["3.0", "В названии игры буквы «П» и «О» были из другого шрифта", "The letters «П» and «О» in the title came from a different font", "b30_font", "img/logo"],
  ["2.1", "Стрелы и заклинания летели мимо: прицел не учитывал, что враг двигается", "Arrows and spells missed: aiming ignored enemy movement", "b21_aim", ""],
  ["2.1", "Дыры и прозрачные пятна в текстурах земли", "Holes and transparent spots in ground textures", "", ""],
  ["2.1", "Неправильно вырезанные печь, плита, верстак и вход в пещеру", "Wrongly cut furnace, stove, workbench and cave entrance", "", ""],
  ["2.1", "Игра падала при открытии доски заданий и на свадьбе", "The game crashed when opening the quest board and at the wedding", "", ""],
  ["2.0", "Ломались текстуры персонажей и тайлов из первой версии", "Character and tile textures from the first version were broken", "", ""],
];

window.WORLD = {
  ru: [
    ["Пролог", "Двенадцать лет назад, в праздник урожая, на площади столицы собрался весь народ. Король благодарил людей за десять лет мира — и тут небо потемнело. Некромант поднял мёртвых прямо из-под мостовой. Королевство пало за одну ночь. Ты — ребёнок, переживший ту ночь. Теперь ты вырос, и пора вернуть мир живым."],
    ["Королевства", "Мир разделён на королевства, у каждого — своя столица с замком, король и королева. Помогай королевству — растёт репутация, а с ней титулы и скидки у торговцев."],
    ["День и ночь", "Днём собирай ресурсы, строй и торгуй. Ночью из земли встают мертвецы, а в темноте опасно. Спасают костры, факелы, крепкие стены и двери — монстры сквозь них не проходят."],
    ["Города", "Город окружён стенами, у ворот стоит стража, по углам — башни с лучниками. Внутри стен монстры не наносят урон. На рынке за прилавками стоят продавцы, в таверне сдают комнаты, в гильдии выдают контракты."],
    ["Жители", "У каждого жителя свой характер, любимые вещи, страхи и мечты. Они запоминают, как вы с ними говорили, просят о помощи, зовут в гости — и могут влюбиться."],
    ["Подземелье Испытаний", "Каменные врата с черепом ведут вниз. На каждом этаже враги сильнее, сундуки богаче, а каждый пятый этаж стережёт босс. Рекорд запоминается, и можно начать с 6-го, 11-го, 16-го этажа."],
    ["Кони", "Дикие лошади пасутся в полях. С седлом в руке нажмите «Оседлать». Конь получит имя, будет ждать вас и прибежит на свист. Призрачного коня и огненного скакуна можно добыть у стражей подземелья."],
    ["Пещеры", "Под землёй — руда, кристаллы, драгоценные камни, сундуки и летучие мыши. Возьми факел и кирку."],
    ["Управление", "Джойстик слева — ходьба. Большая кнопка справа — атака или использование вещи в руке. «Действие» — говорить, открывать, собирать урожай, стучать в двери. Кнопка с молотком — режим стройки."],
  ],
  en: [
    ["Prologue", "Twelve years ago, at the harvest festival, the whole kingdom gathered in the capital’s square. The king thanked his people for ten years of peace — and then the sky went dark. A necromancer raised the dead from beneath the cobblestones. The kingdom fell in a single night. You are the child who survived it. Now you’ve grown up, and it’s time to return the world to the living."],
    ["Kingdoms", "The world is divided into kingdoms, each with a capital, a castle, a king and a queen. Help a kingdom to raise your reputation — and with it, titles and better prices."],
    ["Day and night", "By day, gather, build and trade. At night the dead rise and darkness is dangerous. Campfires, torches, sturdy walls and doors keep you safe — monsters can’t pass through them."],
    ["Towns", "Towns are surrounded by walls, guarded at the gates, with archer towers on the corners. Monsters deal no damage inside. Vendors stand behind market stalls, taverns rent rooms, and the guild hands out contracts."],
    ["Villagers", "Every villager has a personality, favorite things, fears and dreams. They remember how you talked to them, ask for help, invite you over — and may fall in love."],
    ["The Trial Dungeon", "A stone gate with a skull leads down. Each floor has stronger enemies and richer chests, and every fifth floor is guarded by a boss. Your record is saved, so you can start again from floor 6, 11 or 16."],
    ["Horses", "Wild horses graze in the fields. Hold a saddle and press “Saddle up”. Your horse gets a name, waits for you and comes to your whistle. The Ghost Steed and the Fire Steed are dropped by dungeon guardians."],
    ["Caves", "Underground lie ore, crystals, gems, chests and bats. Bring a torch and a pickaxe."],
    ["Controls", "Left joystick — move. Big right button — attack or use the held item. “Action” — talk, open, harvest, knock. The hammer button — building mode."],
  ]
};

window.CREDITS = [
  "Персонажи, жители, нежить, одежда и оружие: Universal LPC Spritesheet Generator (Liberated Pixel Cup) — CC-BY-SA 3.0 / GPL 3.0",
  "Земля, вода, монстры, деревья, урожай, интерьеры: LPC Base Assets, [LPC] Trees, Crops, House interior, Tile Atlas — CC-BY-SA 3.0",
  "Животные фермы: daneeklu — CC-BY 3.0",
  "Кони: [LPC] Horses — bluecarrot16, CC-BY 3.0 / GPL 3.0 / OGA-BY 3.0",
  "Иконки: 496 pixel art icons — Henrique Lazarini (7Soul1), CC0",
  "Музыка: Chiptune Adventures — Juhani Junkala (SubspaceAudio), CC0; Empty City, Dark Forest Theme — CC0; Dark Ambience Loop — Iwan Gabovitch, CC-BY 3.0",
  "Звуки: 80 CC0 RPG SFX — rubberduck; Ghost moans — qubodup (CC0)",
  "Шрифты: Pixelify Sans, Rubik (OFL)",
  "Движок: Godot Engine 4.3 (MIT)",
];
