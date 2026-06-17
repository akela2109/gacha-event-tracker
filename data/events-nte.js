// Снапшот Neverness to Everness (Hotta Studio / Perfect World). Вышла 29.04.2026.
// Публичного API нет — данные нормализованы вручную из скрейпа (neverness.gg, game8.co).
// Обновить: попросить Claude перескрейпить (firecrawl).
window.SNAPSHOT_NTE = {
  generatedAt: "2026-06-11T00:00:00Z",
  version: "1.1",
  source: "neverness.gg · game8.co/games/Neverness-to-Everness",
  items: [
    { type: "version", title: "Версия 1.1", subtitle: "Коллаб Porsche · фазы 03.06 → 08.07", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "banner", title: "Fading Revery", subtitle: "Lacrimosa (S) · фаза 1", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-06-24T00:00:00Z" },
    { type: "banner", title: "Forsaken Path", subtitle: "Chaos (S) · фаза 2", startsAt: "2026-06-24T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Nocturn Special", subtitle: "Ивент 1.1, фаза 1", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-06-24T00:00:00Z" },
    { type: "event", title: "Pursuit Special", subtitle: "Ивент 1.1, фаза 2", startsAt: "2026-06-24T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    // Эндгейм-режим (повторяющийся). Окно цикла привязано к версии 1.1.
    { type: "endgame", title: "Prime Circle", subtitle: "Beyond the Rails · цикл 1.1", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" }
  ]
};
