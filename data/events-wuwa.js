// Снапшот Wuthering Waves (Kuro Games). У игры нет публичного CORS-API событий,
// поэтому данные хранятся уже нормализованными (даты — ISO). Источник: game8.co, prydwen.gg.
// Обновить: попросить Claude перескрейпить (firecrawl).
window.SNAPSHOT_WUWA = {
  generatedAt: "2026-07-15T00:00:00Z",
  version: "3.5",
  source: "game8.co/games/Wuthering-Waves · prydwen.gg · sportskeeda.com",
  items: [
    { type: "version", title: "Версия 3.5", subtitle: "Дебют Xuanling и Suisui · фазы 10.07 → 19.08", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // --- Баннеры ---
    { type: "banner", title: "Yangyang: Xuanling (Debut)", subtitle: "Havoc · меч · 5★ лимитка", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-07-30T00:00:00Z" },
    { type: "banner", title: "Lynae (Rerun)", subtitle: "Spectro · пистолеты · 5★", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-07-30T00:00:00Z" },
    { type: "banner", title: "Luuk Herssen (Rerun)", subtitle: "Spectro · перчатки · 5★", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-07-30T00:00:00Z" },
    { type: "banner", title: "Suisui (Debut)", subtitle: "Glacio · ректификатор · саппорт", startsAt: "2026-07-31T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "banner", title: "Aemeath (Rerun)", subtitle: "5★ реран · фаза 2", startsAt: "2026-07-31T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "banner", title: "Special Rerun", subtitle: "Jiyan · Yinlin · Jinhsi · Changli · Zhezhi · Xiangli Yao", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // --- Эндгейм-режимы (повторяющиеся) ---
    // ToA: цикл 28 дней. Прошлый сброс 22.06 → следующий ~20.07.
    { type: "endgame", title: "Tower of Adversity", subtitle: "Hazard Zone · цикл 28 дней", startsAt: "2026-07-20T00:00:00Z", endsAt: "2026-08-17T00:00:00Z" },
    { type: "endgame", title: "Tactical Holograms", subtitle: "Боссы-голограммы (цикл 3.5)", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "endgame", title: "Depths of Illusive Realm", subtitle: "Рогалик-режим (цикл 3.5)", startsAt: "2026-07-10T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" }
    // Примечание: именованные ивенты версии 3.5 в этот раунд не скрейпились — добавить при след. обновлении.
  ]
};
