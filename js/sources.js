// Источники и нормализация в единую схему события.
// Единая схема: { game, type, title, subtitle, startsAt, endsAt, image, url, source }
//   game:   'genshin' | 'hsr' | 'wuwa' | 'nte'
//   type:   'banner' | 'event' | 'version' | 'maintenance'
//   *At:    ISO-строка | Unix-секунды | null
//   source: 'live' | 'snapshot'
(function (global) {
  "use strict";

  // Метаданные игр: подпись + акцентный цвет (используется в CSS через data-game).
  var GAMES = {
    genshin: { label: "Genshin Impact", short: "Genshin" },
    hsr:     { label: "Honkai: Star Rail", short: "Star Rail" },
    wuwa:    { label: "Wuthering Waves", short: "WuWa" },
    nte:     { label: "Neverness to Everness", short: "NTE" }
  };

  // Живые CORS-дружелюбные API (community). Есть только у HoYoverse-игр.
  var LIVE = {
    genshin: "https://api.ennead.cc/mihoyo/genshin/calendar",
    hsr:     "https://api.ennead.cc/mihoyo/starrail/calendar"
  };

  // --- HoYo (Genshin/HSR): сырой ответ {events, banners, challenges} → нормализованные items.
  function featured5(banner) {
    var pools = [].concat(banner.characters || [], banner.weapons || [], banner.light_cones || []);
    var fives = pools.filter(function (x) { return Number(x.rarity) === 5; });
    var pick = (fives.length ? fives : pools).map(function (x) { return x.name; }).filter(Boolean);
    return pick.join(" · ");
  }
  function firstIcon(banner) {
    var pools = [].concat(banner.characters || [], banner.weapons || [], banner.light_cones || []);
    var five = pools.filter(function (x) { return Number(x.rarity) === 5 && x.icon; })[0] || pools.filter(function (x) { return x.icon; })[0];
    return five ? five.icon : null;
  }
  // HoYo-API для событий с необъявленными датами шлёт 0, а не null (Genshin 6.7:
  // Ley Line Overflow, Heated Battle Mode...). Без этого 0 превращался бы в 1970 год,
  // и событие молча выпадало из окна таймлайна вместо попадания в TBA.
  function ts(v) { return v ? v : null; }

  function rewardText(ev) {
    if (!ev.special_reward) return "";
    var r = ev.special_reward;
    return r.name + (r.amount ? " ×" + r.amount : "");
  }

  // --- Эндгейм-режимы (повторяющийся контент). HoYo распознаём по type_name
  //     (стабильнее сезонных имён), с фолбэком по подстроке имени; WuWa/NTE приходят
  //     уже размеченными type:"endgame" из снапшота.
  var HOYO_ENDGAME_BY_TYPE = {
    // Genshin
    ActTypeTower: "Abyssal Moon Spire",
    ActTypeRoleCombat: "Imaginarium Theater",
    ActTypeHardChallenge: "Stygian Onslaught",
    // Star Rail
    ChallengeTypeChasm: "Memory of Chaos",
    ChallengeTypeStory: "Pure Fiction",
    ChallengeTypeBoss: "Apocalyptic Shadow",
    ChallengeTypePeak: "Anomaly Arbitration"
  };
  var ENDGAME_NAMES = {
    genshin: ["Spiral Abyss", "Abyssal Moon Spire", "Imaginarium Theater", "Stygian Onslaught"],
    hsr: ["Memory of Chaos", "Pure Fiction", "Apocalyptic Shadow", "Anomaly Arbitration", "Forgotten Hall"],
    wuwa: ["Tower of Adversity", "Tactical Hologram", "Illusive Realm"],
    nte: ["Prime Circle", "Beyond the Rails"]
  };
  // Каноничное имя эндгейм-режима или null (значит — обычный ивент).
  function endgameCanonical(game, name, typeName) {
    if (typeName && HOYO_ENDGAME_BY_TYPE[typeName]) return HOYO_ENDGAME_BY_TYPE[typeName];
    var list = ENDGAME_NAMES[game] || [];
    for (var i = 0; i < list.length; i++) {
      if (name && name.indexOf(list[i]) !== -1) return list[i];
    }
    return null;
  }

  function normalizeHoyo(raw, game, source) {
    var out = [];
    (raw.events || []).forEach(function (e) {
      var canon = endgameCanonical(game, e.name, e.type_name);
      out.push({ game: game, type: canon ? "endgame" : "event",
        title: canon || e.name,
        subtitle: canon && canon !== e.name ? e.name : rewardText(e),
        startsAt: ts(e.start_time), endsAt: ts(e.end_time), image: e.image_url || null,
        url: null, source: source, description: e.description || "" });
    });
    (raw.banners || []).forEach(function (b) {
      var ver = b.version ? "Версия " + b.version : "";
      out.push({ game: game, type: "banner",
        title: featured5(b) || b.name || "Баннер", subtitle: ver,
        startsAt: ts(b.start_time), endsAt: ts(b.end_time), image: firstIcon(b),
        url: null, source: source, description: "" });
    });
    // challenges — это и есть повторяющиеся эндгейм-режимы; каноним имя по type_name.
    (raw.challenges || []).forEach(function (c) {
      var canon = endgameCanonical(game, c.name, c.type_name) || c.name;
      out.push({ game: game, type: "endgame",
        title: canon,
        subtitle: canon !== c.name ? c.name : rewardText(c),
        startsAt: ts(c.start_time), endsAt: ts(c.end_time), image: null,
        url: null, source: source, description: "Боевой режим / испытание" });
    });
    return out;
  }

  // --- WuWa/NTE: items уже нормализованы (даты ISO). Добавляем game + source.
  function normalizeSnapshotItems(items, game) {
    return (items || []).map(function (it) {
      return { game: game, type: it.type || "event", title: it.title,
        subtitle: it.subtitle || "", startsAt: it.startsAt || null, endsAt: it.endsAt || null,
        image: it.image || null, url: it.url || null, source: "snapshot", description: it.description || "" };
    });
  }

  // Собрать все события из снапшотов (стартовое состояние, всегда доступно офлайн).
  function buildFromSnapshots() {
    var all = [];
    if (global.SNAPSHOT_GENSHIN) all = all.concat(normalizeHoyo(global.SNAPSHOT_GENSHIN.raw, "genshin", "snapshot"));
    if (global.SNAPSHOT_HSR)     all = all.concat(normalizeHoyo(global.SNAPSHOT_HSR.raw, "hsr", "snapshot"));
    if (global.SNAPSHOT_WUWA)    all = all.concat(normalizeSnapshotItems(global.SNAPSHOT_WUWA.items, "wuwa"));
    if (global.SNAPSHOT_NTE)     all = all.concat(normalizeSnapshotItems(global.SNAPSHOT_NTE.items, "nte"));
    return all;
  }

  // Метаданные свежести по играм (для бейджей).
  function snapshotMeta() {
    return {
      genshin: global.SNAPSHOT_GENSHIN ? global.SNAPSHOT_GENSHIN.generatedAt : null,
      hsr:     global.SNAPSHOT_HSR ? global.SNAPSHOT_HSR.generatedAt : null,
      wuwa:    global.SNAPSHOT_WUWA ? global.SNAPSHOT_WUWA.generatedAt : null,
      nte:     global.SNAPSHOT_NTE ? global.SNAPSHOT_NTE.generatedAt : null
    };
  }

  // Живой запрос к API одной игры. Возвращает нормализованные items (source:'live') или бросает.
  function fetchLive(game) {
    var url = LIVE[game];
    if (!url) return Promise.reject(new Error("нет live-API для " + game));
    return fetch(url, { mode: "cors" })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (raw) { return normalizeHoyo(raw, game, "live"); });
  }

  global.SOURCES = {
    GAMES: GAMES, LIVE: LIVE,
    buildFromSnapshots: buildFromSnapshots,
    snapshotMeta: snapshotMeta,
    fetchLive: fetchLive,
    liveGames: Object.keys(LIVE)
  };
})(window);
