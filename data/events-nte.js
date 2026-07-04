// Снапшот Neverness to Everness (Hotta Studio / Perfect World). Вышла 29.04.2026.
// Публичного API нет — данные нормализованы вручную из скрейпа (neverness.gg, game8.co).
// Обновить: попросить Claude перескрейпить (firecrawl).
window.SNAPSHOT_NTE = {
  generatedAt: "2026-07-04T00:00:00Z",
  version: "1.2",
  source: "neverness.gg · game8.co/games/Neverness-to-Everness",
  items: [
    { type: "version", title: "Версия 1.2", subtitle: "Shinku и Iroi · новый режим 999 Nights · Steam-запуск", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Фаза 1: Shinku (8 — 29 июля)
    { type: "banner", title: "Before the Dawn", subtitle: "Shinku (S) · фаза 1", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-07-29T00:00:00Z" },
    // Фаза 2: Iroi (29 июля — 19 августа)
    { type: "banner", title: "The Lifeline", subtitle: "Iroi (S) · фаза 2", startsAt: "2026-07-29T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    // Ивенты с подтверждёнными датами
    { type: "event", title: "Stamina Recharge", subtitle: "2× City Stamina в активностях Heathereau Hobbies", startsAt: "2026-07-13T00:00:00Z", endsAt: "2026-07-20T00:00:00Z" },
    { type: "event", title: "Gold Clash", subtitle: "2× Fons в Pink Paws Heist", startsAt: "2026-07-18T00:00:00Z", endsAt: "2026-08-01T00:00:00Z" },
    // Эндгейм-режим (повторяющийся). Окно цикла привязано к версии 1.2.
    { type: "endgame", title: "Prime Circle", subtitle: "Beyond the Rails · стандарт", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" },
    { type: "endgame", title: "Fracture Circle", subtitle: "Beyond the Rails · повышенная сложность", startsAt: "2026-07-08T00:00:00Z", endsAt: "2026-08-19T00:00:00Z" }
  ]
};
