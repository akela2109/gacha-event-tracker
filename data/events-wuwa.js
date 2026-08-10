// Снапшот Wuthering Waves (Kuro Games). У игры нет публичного CORS-API событий,
// поэтому данные хранятся уже нормализованными (даты — ISO). Источник: game8.co, prydwen.gg.
// Обновить: попросить Claude перескрейпить (firecrawl). Последнее обновление: 2026-08-10.
window.SNAPSHOT_WUWA = {
  generatedAt: "2026-08-10T00:00:00Z",

  version: "3.5",
  source: "game8.co/games/Wuthering-Waves · prydwen.gg · sportskeeda.com",
  items: [
    { type: "version", title: "Версия 3.5 «Blade of Past Resounds, Lingering Dream Hymns»", subtitle: "Новый регион Mengzhou · SP-персонаж Yangyang: Xuanling · Xbox-запуск", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Фаза 1 (10 июля — 30 июля)
    { type: "banner", title: "Yangyang: Xuanling (Дебют)", subtitle: "Havoc · меч · 5★ · оружие Azure Oath", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-07-30T00:00:00Z" },
    { type: "banner", title: "Lynae & Luuk Herssen (Реран · Фаза 1)", subtitle: "Lynae (Spectro · пистолеты) · Luuk Herssen (Spectro · перчатки)", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-07-30T00:00:00Z" },
    // Фаза 2 (30 июля — 19 августа)
    { type: "banner", title: "Suisui (Дебют)", subtitle: "Glacio · ректификатор · саппорт · оружие Firstlight's Herald · 4★ Baizhi/Mortefi/Lumi", startsAt: "2026-07-30T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "banner", title: "Aemeath (Реран · Фаза 2)", subtitle: "Fusion · меч · первый реран с патча 3.1 · оружие Everbright Polestar", startsAt: "2026-07-30T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Special Selector Banners — весь патч
    { type: "banner", title: "Starpath Reverbs (Резонатор-Селектор)", subtitle: "Выбор: Jiyan · Yinlin · Jinhsi · Changli · Zhezhi · Xiangli Yao", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "banner", title: "Tideforge Reverbs (Оружие-Селектор)", subtitle: "Выбор фирменного оружия персонажей из Starpath Reverbs", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Ивенты версии 3.5
    { type: "event", title: "Gifts of Aftertune", subtitle: "Логин-награды: +10 тиражей за вход в течение патча", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Gifts of Starpath", subtitle: "Tallying event Starpath/Tideforge Reverbs · до 21 Radiant Tide за 80 конвенов на селекторных баннерах", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "A Glimpse of Xuanfang", subtitle: "Исследование нового региона Mengzhou / Xuanfang Hold", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Shape of Yesterday", subtitle: "Фотографирование видов Mengzhou в заданных точках", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Lament Recon: Tacet Crisis", subtitle: "Отражение волн врагов (Vampire-Survivors-стиль)", startsAt: "2026-07-11T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Recaptured: Action Highlights", subtitle: "Фотографирование боевых действий с заданным персонажем", startsAt: "2026-07-16T00:00:00Z", endsAt: "2026-08-06T00:00:00Z" },
    { type: "event", title: "Bountiful Crescendo", subtitle: "2× дропы материалов прокачки", startsAt: "2026-07-23T00:00:00Z", endsAt: "2026-08-13T00:00:00Z" },
    { type: "event", title: "In Search of Lost Jade", subtitle: "Веб-ивент про орла", startsAt: "2026-07-30T00:00:00Z", endsAt: "2026-08-13T00:00:00Z" },
    { type: "event", title: "Virtual Crisis: Quadrant Trials", subtitle: "Боевое испытание: выбор эффектов-усилителей врагов", startsAt: "2026-07-30T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Lollo Campaign: New Journey", subtitle: "Ежедневные квесты и логин-ивент Lollo Logistics", startsAt: "2026-07-30T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Chord Cleansing", subtitle: "2× дропы эхо", startsAt: "2026-08-06T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Эндгейм-режимы. ToA: сброс 20.07, цикл 28 дней (до 27 авг). DoIR в 3.5 не выходил.
    { type: "endgame", title: "Tower of Adversity", subtitle: "Hazard Zone · цикл 28 дней", startsAt: "2026-07-20T00:00:00Z", endsAt: "2026-08-27T00:00:00Z" },
    { type: "endgame", title: "Tactical Holograms", subtitle: "Denia — новый босс цикла 3.5 · Xuanfang Hold", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },

    // --- Версия 3.6 (с 20 августа 2026; анонс — стрим 7 авг) ---
    { type: "version", title: "Версия 3.6 «Lamplight in Mirage, Sword's Resolve in Heart»", subtitle: "Продолжение Mengzhou · Qingxiao & Jingran · мечевое скольжение · кооператив", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    // Фаза 1 (20 августа — 9 сентября)
    { type: "banner", title: "Qingxiao (Дебют)", subtitle: "Aero · меч · 5★ · Tune-механика · оружие Glint of Clouds", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-09T00:00:00Z" },
    { type: "banner", title: "Denia (Реран · Фаза 1)", subtitle: "5★ реран · оружие Forged Dwarf Star", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-09T00:00:00Z" },
    // Фаза 2 (9 — 29 сентября)
    { type: "banner", title: "Jingran (Дебют)", subtitle: "Fusion · брод-клинок · 5★ · главный DPS · оружие Thousandfold Deliverance", startsAt: "2026-09-09T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    { type: "banner", title: "Mornye & Hiyuki (Реран · Фаза 2)", subtitle: "Mornye (Tune-Break саппорт · брод-клинок · оружие Starfield Calibrator) · Hiyuki (меч · оружие Frostburn)", startsAt: "2026-09-09T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    // Ивенты версии 3.6
    { type: "event", title: "Gifts of Drifting Mist", subtitle: "7-дневный логин-ивент · Radiant Tide и Lustrous Tide", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    { type: "event", title: "The Strings Remember", subtitle: "Досуговый ивент: семь дней заданий — игра на цине вместе с Qingxiao", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    { type: "event", title: "Resonance Sim Realm", subtitle: "Боевой ивент: вид сверху · способности разных Резонаторов за один заход", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    { type: "event", title: "If Dreams Still Reverberate", subtitle: "Кооперативный боевой ивент", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    { type: "event", title: "Second Coming of Solaris: Coded Deception", subtitle: "Досуговый ивент", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    { type: "event", title: "Wuthering Exploration: Fogveil Pagoda", subtitle: "Ивент-исследование: новый район Mengzhou — Fogveil Pagoda", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" },
    // Эндгейм-режимы 3.6. ToA: следующий цикл с 27 авг (28 дней).
    { type: "endgame", title: "Tower of Adversity", subtitle: "Hazard Zone · цикл 28 дней · новый цикл 3.6", startsAt: "2026-08-27T00:00:00Z", endsAt: "2026-09-24T00:00:00Z" },
    { type: "endgame", title: "Tactical Holograms", subtitle: "Новый цикл 3.6 · боссы Mengzhou", startsAt: "2026-08-20T00:00:00Z", endsAt: "2026-09-29T00:00:00Z" }
  ]
};
