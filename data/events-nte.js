// Снапшот Neverness to Everness (Hotta Studio / Perfect World). Вышла 29.04.2026.
// Публичного API нет — данные нормализованы вручную из скрейпа (neverness.gg, game8.co).
// Обновить: попросить Claude перескрейпить (firecrawl). Последнее обновление: 2026-08-16.
window.SNAPSHOT_NTE = {
  generatedAt: "2026-08-16T00:00:00Z",

  version: "1.3",
  source: "neverness.gg · game8.co/games/Neverness-to-Everness · prydwen.gg",
  items: [
    { type: "version", title: "Версия 1.2 «999 Nights»", subtitle: "Shinku и Iroi · новый режим 999 Nights · запуск на Steam, Epic, Samsung", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Фаза 1: Shinku (8 — 29 июля)
    { type: "banner", title: "Before the Dawn", subtitle: "Shinku (S) · оружие Blushing Mirage · фаза 1", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-07-29T00:00:00Z" },
    // Фаза 2: Iroi (29 июля — 19 августа)
    { type: "banner", title: "The Lifeline", subtitle: "Iroi (S, дебют) · оружие The Wrong Gate · фаза 2", startsAt: "2026-07-29T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Ивенты версии 1.2
    { type: "event", title: "999 Nights", subtitle: "Новый постоянный режим: настольная RPG в регионе Warren Continent", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Market Opening Rehearsal", subtitle: "Испытания персонажей: Shinku, Edgar, Mint, Adler · награды: Annulith и Expansion Cores", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-07-29T00:00:00Z" },
    { type: "event", title: "Circle Gift", subtitle: "7-дневный логин-ивент · до 10 Solid Dice", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Resolve Perks", subtitle: "Косметический ивент к баннеру Shinku", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-07-29T00:00:00Z" },
    { type: "event", title: "Mews Flash", subtitle: "Скретч-карты за Fons у Midnight Catzebo · весь патч", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-18T00:00:00Z" },
    { type: "event", title: "Neon Rift", subtitle: "Мистери-бокс: Draco (мотоцикл) · аутфит Glory Days (Esper Zero) · до 15 боксов за Fons / Annulith", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Stamina Recharge", subtitle: "2× City Stamina в активностях Heathereau Hobbies", startsAt: "2026-07-13T00:00:00Z", endsAt: "2026-07-20T00:00:00Z" },
    { type: "event", title: "Shadow-n-Seek", subtitle: "Прятки в Clement Academy: игроки прячутся в объектах кампуса", startsAt: "2026-07-17T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Gold Clash", subtitle: "2× Fons в Pink Paws Heist", startsAt: "2026-07-20T00:00:00Z", endsAt: "2026-08-03T00:00:00Z" },
    { type: "event", title: "Going, Going, Gone", subtitle: "Аукционный мини-игровой режим: ставки на коллекционные предметы", startsAt: "2026-07-29T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Fishing Frenzy", subtitle: "Рыбалка с гарпунами и сетями · продвинутая аквариумная система", startsAt: "2026-08-03T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Pixel Surge", subtitle: "2× вознаграждения Character Pixel", startsAt: "2026-08-03T00:00:00Z", endsAt: "2026-08-10T00:00:00Z" },
    { type: "event", title: "Warren Lucky Flip", subtitle: "Ежедневные карточки заданий", startsAt: "2026-08-05T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "event", title: "Fons Rush", subtitle: "2× Fons", startsAt: "2026-08-10T00:00:00Z", endsAt: "2026-08-17T00:00:00Z" },
    // Эндгейм-режим Beyond the Rails. Три ротации версии 1.2, сброс раз в ~14 дней.
    { type: "endgame", title: "Beyond the Rails: Blazing Circle", subtitle: "Первая ротация версии 1.2 · групповые бои с боссами", startsAt: "2026-07-16T00:00:00Z", endsAt: "2026-07-30T00:00:00Z" },
    { type: "endgame", title: "Beyond the Rails: Cresting Circle", subtitle: "Вторая ротация версии 1.2 · групповые бои с боссами", startsAt: "2026-07-30T00:00:00Z", endsAt: "2026-08-13T00:00:00Z" },
    { type: "endgame", title: "Beyond the Rails: Waxing Circle", subtitle: "Третья ротация версии 1.2 · групповые бои с боссами", startsAt: "2026-08-13T00:00:00Z", endsAt: "2026-08-27T00:00:00Z" },

    // --- Версия 1.3 (с 19 августа 2026; анонс — стрим 8 авг) ---
    { type: "version", title: "Версия 1.3 «Rising from the Moonlit Fog»", subtitle: "Zankou и Linko · летний Volley Star · финал арки Scarlet Letter", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    // Фаза 1 (19 августа — 9 сентября)
    { type: "banner", title: "Alluring Shadows (Zankou, Дебют)", subtitle: "S-ранг · Incantation DPS · Gas Arcs · оружие Ravenous Blade · фаза 1", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-09T00:00:00Z" },
    { type: "banner", title: "The Ichi-Daime (Nanally, Реран)", subtitle: "S-ранг · Anima атакующий · оружие Ready-Ready · фаза 1", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-09T00:00:00Z" },
    // Фаза 2 (9 — 30 сентября)
    { type: "banner", title: "Surfing All Channels! (Linko, Дебют)", subtitle: "S-ранг · Anima DPS · ETD-6 · фаза 2", startsAt: "2026-09-09T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "banner", title: "Misty Tipsy Style (Hotori, Реран)", subtitle: "S-ранг · Cosmos суб-DPS · способность время-стоп · фаза 2", startsAt: "2026-09-09T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    // Ивенты версии 1.3
    { type: "event", title: "Circle Gift", subtitle: "7-дневный логин-ивент · до 10 Solid Dice", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Volley Star", subtitle: "ПвП 2v2 пляжный волейбол · конкурентный режим · весь патч", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Mews Flash", subtitle: "Скретч-карты за Fons у Midnight Catzebo · весь патч", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Neon Rift", subtitle: "Летний мистери-бокс · новые косметики и транспорт · до 15 боксов за Fons / Annulith", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Surf Breaker", subtitle: "Гонки на водном мотоцикле-гидроцикле · летний ивент", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Hunter's Crucible", subtitle: "Бои с боссами с настраиваемыми параметрами сложности · 7 боссов · Annulith и Fons за очки", startsAt: "2026-08-19T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Stamina Recharge", subtitle: "2× City Stamina в активностях Heathereau Hobbies", startsAt: "2026-08-24T00:00:00Z", endsAt: "2026-08-31T00:00:00Z" },
    { type: "event", title: "Shipwreck Salvage", subtitle: "Поиск груза и материалов прокачки на берегу", startsAt: "2026-08-28T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Gold Clash", subtitle: "2× Fons в Pink Paws Heist", startsAt: "2026-08-31T00:00:00Z", endsAt: "2026-09-14T00:00:00Z" },
    { type: "event", title: "Runaway Echoes", subtitle: "Выживание против волн врагов · боевой ивент", startsAt: "2026-09-09T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Pixel Surge", subtitle: "2× вознаграждения Character Pixel", startsAt: "2026-09-14T00:00:00Z", endsAt: "2026-09-21T00:00:00Z" },
    { type: "event", title: "Breezy Tour", subtitle: "Прогулка на велосипеде Yesteryear с персонажем до пункта назначения", startsAt: "2026-09-17T00:00:00Z", endsAt: "2026-09-30T00:00:00Z" },
    { type: "event", title: "Fons Rush", subtitle: "2× Fons в активностях Heathereau Hobbies", startsAt: "2026-09-21T00:00:00Z", endsAt: "2026-09-28T00:00:00Z" },
    // Эндгейм-режим Beyond the Rails версии 1.3. Ротации по ~14 дней.
    { type: "endgame", title: "Beyond the Rails: Incandescent Circle", subtitle: "Первая ротация версии 1.3 · групповые бои с боссами", startsAt: "2026-08-27T00:00:00Z", endsAt: "2026-09-10T00:00:00Z" }
  ]
};
