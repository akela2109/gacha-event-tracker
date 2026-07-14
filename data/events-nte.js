// Снапшот Neverness to Everness (Hotta Studio / Perfect World). Вышла 29.04.2026.
// Публичного API нет — данные нормализованы вручную из скрейпа (neverness.gg, game8.co).
// Обновить: попросить Claude перескрейпить (firecrawl).
window.SNAPSHOT_NTE = {
  generatedAt: "2026-07-15T00:00:00Z",
  version: "1.2",
  source: "neverness.gg · game8.co/games/Neverness-to-Everness · prydwen.gg",
  items: [
    { type: "version", title: "Версия 1.2", subtitle: "фазы 07.07 → 19.08", startsAt: "2026-07-07T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // --- Баннеры ---
    { type: "banner", title: "Shinku", subtitle: "S-класс · фаза 1", startsAt: "2026-07-07T00:00:00Z", endsAt: "2026-07-29T00:00:00Z" },
    { type: "banner", title: "Iroha", subtitle: "S-класс (дебют) · фаза 2", startsAt: "2026-07-29T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "banner", title: "Resolve Special Arc", subtitle: "Blushing Mirage (S-Arc) · фаза 1", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-07-29T00:00:00Z" },
    // --- Ивенты ---
    { type: "event", title: "Stamina Recharge", subtitle: "Ивент энергии", startsAt: "2026-07-13T00:00:00Z", endsAt: "2026-07-20T00:00:00Z" },
    { type: "event", title: "Gold Clash", subtitle: "x2 Fons в Pink Paws Heist", startsAt: "2026-07-20T00:00:00Z", endsAt: "2026-08-03T00:00:00Z" },
    // --- Эндгейм-режим (повторяющийся, привязан к версии) ---
    { type: "endgame", title: "Prime Circle", subtitle: "Beyond the Rails · цикл 1.2", startsAt: "2026-07-07T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" }
  ]
};
