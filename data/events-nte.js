// Снапшот Neverness to Everness (Hotta Studio / Perfect World). Вышла 29.04.2026.
// Публичного API нет — данные нормализованы вручную из скрейпа (neverness.gg, game8.co).
// Обновить: попросить Claude перескрейпить (firecrawl).
window.SNAPSHOT_NTE = {
  generatedAt: "2026-06-27T00:00:00Z",
  version: "1.1",
  source: "neverness.gg · game8.co/games/Neverness-to-Everness",
  items: [
    { type: "version", title: "Версия 1.1", subtitle: "Коллаб Porsche · фазы 03.06 → 08.07", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "banner", title: "Fading Reverie", subtitle: "Lacrimosa (S) · фаза 1", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-06-24T00:00:00Z" },
    { type: "banner", title: "Forsaken Path", subtitle: "Chaos (S) · фаза 2", startsAt: "2026-06-24T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "The Long Dream", subtitle: "Сюжетный/исследовательский ивент", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Everdriving Mystery Box", subtitle: "Коллаб Porsche · гоночный мини-режим Underground Circuit", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Sunward Travelogue", subtitle: "Исследование острова Sunward", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Nocturne Special", subtitle: "Arc Research Program · фаза 1", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-06-24T00:00:00Z" },
    { type: "event", title: "Hunter's Crucible", subtitle: "Испытание боссов · цикл 1.1", startsAt: "2026-06-18T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Pursuit Special", subtitle: "Arc Research Program · фаза 2", startsAt: "2026-06-24T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Fight Championship", subtitle: "Боевой турнир", startsAt: "2026-06-24T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "event", title: "Pixel Surge", subtitle: "Двойные награды (Character Pixels)", startsAt: "2026-06-26T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    // Эндгейм-режим (повторяющийся). Окно цикла привязано к версии 1.1.
    { type: "endgame", title: "Prime Circle", subtitle: "Beyond the Rails · стандарт", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" },
    { type: "endgame", title: "Fracture Circle", subtitle: "Beyond the Rails · повышенная сложность", startsAt: "2026-06-03T00:00:00Z", endsAt: "2026-07-08T00:00:00Z" }
  ]
};
