// Точка входа: снапшот → live → мёрж → рендер таймлайна-календаря (дорожки по играм).
(function () {
  "use strict";
  var FMT = window.FMT, SOURCES = window.SOURCES;
  var DAY = 86400000;
  var GAME_ORDER = ["genshin", "hsr", "wuwa", "nte"];

  // Категории контента (порядок сверху вниз внутри дорожки игры).
  var CATS = [
    { key: "banner",  label: "Баннеры", icon: "▰", types: ["banner"] },
    { key: "event",   label: "Ивенты",  icon: "◇", types: ["event"] },
    { key: "endgame", label: "Эндгейм", icon: "⚔", types: ["endgame"] },
    { key: "version", label: "Версии",  icon: "◆", types: ["version", "maintenance"] }
  ];
  var TYPE_CAT = {};
  CATS.forEach(function (c) { c.types.forEach(function (t) { TYPE_CAT[t] = c.key; }); });
  function catOf(type) { return TYPE_CAT[type] || "event"; }
  var I18N = window.I18N;

  // Режим отображения: SOLO (одна игра) меняет масштаб строк/полос.
  var SOLO = false, STEP = 30, BAR_H = 24;
  var DAY_PX = 30;                                  // ширина одного дня (px) → ширина полотна и скролл
  var didScroll = false;                            // авто-скролл к «сегодня» — только при первой отрисовке

  var state = {
    items: SOURCES.buildFromSnapshots(),
    filters: { game: "all", type: "all" },
    live: {}
  };

  var $ = function (s) { return document.querySelector(s); };
  var timeline = $("#timeline"), empty = $("#emptyState"), badges = $("#freshBadges");
  var liveStatus = $("#liveStatus"), refreshBtn = $("#refreshBtn"), tip = $("#tlTip");

  // ---------- Окно: текущий + следующий месяц ----------
  function buildWindow() {
    var n = FMT.now();
    var start = new Date(n.getFullYear(), n.getMonth(), 1);
    var nextMonth = new Date(n.getFullYear(), n.getMonth() + 1, 1);
    var end = new Date(n.getFullYear(), n.getMonth() + 2, 1); // конец = начало через-месяца (исключая)
    return { start: start.getTime(), end: end.getTime(), nextMonth: nextMonth.getTime(),
      m1: start, m2: nextMonth, len: end.getTime() - start.getTime() };
  }
  var WIN = buildWindow();
  function pct(t) { return ((t - WIN.start) / WIN.len) * 100; }

  // ---------- Фильтры ----------
  function passesType(it) {
    var f = state.filters.type;
    if (f === "all") return true;
    if (f === "version") return it.type === "version" || it.type === "maintenance";
    return it.type === f;
  }
  function activeGames() {
    return state.filters.game === "all" ? GAME_ORDER : [state.filters.game];
  }

  // Слить баннеры одной игры с ОДИНАКОВЫМИ датами старта/конца в одну линию
  // (баннеры персонажей и оружия в gacha-играх всегда идут синхронно).
  function mergeBanners(items) {
    var banners = [], others = [];
    items.forEach(function (it) { (it.type === "banner" ? banners : others).push(it); });
    var groups = {}, order = [];
    banners.forEach(function (b) {
      var key = String(b.startsAt == null ? "?" : b.startsAt) + "|" + String(b.endsAt == null ? "?" : b.endsAt);
      if (!groups[key]) { groups[key] = []; order.push(key); }
      groups[key].push(b);
    });
    var merged = order.map(function (k) {
      var g = groups[k];
      if (g.length === 1) return g[0];
      var names = g.map(function (b) { return b.title; }).filter(Boolean);
      var ver = "";
      for (var i = 0; i < g.length; i++) { if (g[i].subtitle) { ver = g[i].subtitle; break; } }
      return { game: g[0].game, type: "banner", title: names.join(" · "),
        subtitle: ver, startsAt: g[0].startsAt, endsAt: g[0].endsAt,
        image: g[0].image, url: null, source: g[0].source, description: "",
        parts: g.map(function (b) { return { title: b.title, subtitle: b.subtitle || "" }; }) };
    });
    return others.concat(merged);
  }

  // Разложить события игры по категориям: помещаемые в окно (packRows на категорию) vs TBA.
  function laneData(game) {
    var tba = [], byCat = {};
    var gameItems = mergeBanners(state.items.filter(function (it) { return it.game === game; }));
    gameItems.forEach(function (it) {
      if (!passesType(it)) return;
      var s = FMT.toDate(it.startsAt);
      var e = FMT.toDate(it.endsAt);
      if (!s) { // нет старта → нельзя разместить
        if (it.type !== "maintenance") tba.push(it);
        return;
      }
      var aStart = s.getTime();
      var aEnd = e ? e.getTime() : WIN.end;      // ongoing → тянем до конца окна
      if (aEnd <= WIN.start || aStart >= WIN.end) return; // вне окна
      var key = catOf(it.type);
      (byCat[key] || (byCat[key] = [])).push({ it: it, aStart: aStart, aEnd: aEnd, openEnd: !e });
    });
    var cats = CATS.filter(function (c) { return byCat[c.key] && byCat[c.key].length; })
      .map(function (c) { return { meta: c, rows: packRows(byCat[c.key]) }; });
    return { cats: cats, tba: tba };
  }

  // Жадная укладка интервалов в ряды без наложений (по actual start/end).
  function packRows(evs) {
    evs.sort(function (a, b) { return a.aStart - b.aStart; });
    var rows = [];
    evs.forEach(function (ev) {
      var row = null;
      for (var i = 0; i < rows.length; i++) {
        if (ev.aStart >= rows[i].lastEnd) { row = rows[i]; break; }
      }
      if (!row) { row = { items: [], lastEnd: 0 }; rows.push(row); }
      row.items.push(ev); row.lastEnd = ev.aEnd;
    });
    return rows;
  }

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  // ---------- Рендер ----------
  function axisHTML() {
    var h = "";
    // подписи месяцев у начала своего месяца (лево-выравнивание)
    var monthsFull = I18N.t("monthsFull");
    h += '<div class="axis-month" style="left:' + pct(WIN.start) + '%">' + monthsFull[WIN.m1.getMonth()] + " " + WIN.m1.getFullYear() + '</div>';
    h += '<div class="axis-month" style="left:' + pct(WIN.nextMonth) + '%">' + monthsFull[WIN.m2.getMonth()] + " " + WIN.m2.getFullYear() + '</div>';
    // граница месяцев
    h += '<div class="axis-monthline" style="left:' + pct(WIN.nextMonth) + '%"></div>';
    // по дню: день недели + число
    var totalDays = Math.round(WIN.len / DAY);
    var nowD = FMT.now();
    var todayKey = nowD.getFullYear() + "-" + nowD.getMonth() + "-" + nowD.getDate();
    for (var d = 0; d < totalDays; d++) {
      var dt = new Date(WIN.m1.getFullYear(), WIN.m1.getMonth(), 1 + d);
      var wd = dt.getDay();
      var cls = "axis-day";
      if (wd === 0 || wd === 6) cls += " is-weekend";
      if (dt.getFullYear() + "-" + dt.getMonth() + "-" + dt.getDate() === todayKey) cls += " is-today";
      h += '<div class="' + cls + '" style="left:' + pct(dt.getTime()) + '%">' +
        '<span class="axis-day__wd">' + I18N.t("weekdays")[wd] + '</span>' +
        '<span class="axis-day__d">' + dt.getDate() + '</span></div>';
    }
    return h;
  }

  function gridBgStyle() {
    var dayPct = DAY / WIN.len * 100;
    return 'background-size:' + dayPct + '% 100%;';
  }

  function barHTML(ev) {
    var it = ev.it;
    var st = FMT.statusOf(it.startsAt, it.endsAt);
    var left = Math.max(0, pct(ev.aStart));
    var right = Math.min(100, pct(ev.aEnd));
    var width = Math.max(right - left, 0.6);
    var cls = ["tl-bar", "is-" + it.type];
    if (st === "active" || st === "ending-soon") cls.push("is-active");
    if (st === "ended") cls.push("is-ended");
    if (ev.aStart < WIN.start) cls.push("clip-left");
    if (ev.aEnd > WIN.end || ev.openEnd) cls.push("clip-right");
    var parts = it.parts ? it.parts.map(function (p) {
      return p.title + (p.subtitle ? " — " + p.subtitle : ""); }).join("‖") : "";
    var data = ' data-title="' + esc(it.title) + '" data-sub="' + esc(it.subtitle || "") +
      '" data-game="' + it.game + '" data-type="' + it.type +
      '" data-range="' + esc(FMT.fmtRange(it.startsAt, it.endsAt)) +
      '" data-parts="' + esc(parts) +
      '" data-timer="' + esc(FMT.timerLabel(it.startsAt, it.endsAt)) + '"';
    return '<div class="' + cls.join(" ") + '" style="left:' + left + '%;width:' + width + '%;top:' + ev.top + 'px;height:' + BAR_H + 'px"' + data + '>' +
      '<span>' + esc(it.title) + '</span></div>';
  }

  // Пилюля-отсчёт «осталось дней» по центру стыка/конца линии (как на wuwatracker).
  function endLabelHTML(ev) {
    if (ev.openEnd || ev.aEnd > WIN.end) return ""; // нет конца / конец за окном
    var st = FMT.statusOf(ev.it.startsAt, ev.it.endsAt);
    if (st === "ended") return ""; // уже завершён — отсчитывать нечего
    var label = FMT.daysLeftShort(ev.it.endsAt);
    if (!label) return "";
    var right = pct(ev.aEnd);
    var top = ev.top + Math.round((BAR_H - 16) / 2); // вертикальный центр пилюли в полосе
    return '<div class="tl-end" style="left:' + right + '%;top:' + top + 'px">' +
      esc(label) + '</div>';
  }

  function laneHTML(game) {
    var data = laneData(game);
    var g = SOURCES.GAMES[game];
    var ver = "";
    if (game === "wuwa" && window.SNAPSHOT_WUWA) ver = "v" + window.SNAPSHOT_WUWA.version;
    if (game === "nte" && window.SNAPSHOT_NTE) ver = "v" + window.SNAPSHOT_NTE.version;

    var nowT = FMT.now().getTime();
    var today = (nowT >= WIN.start && nowT < WIN.end)
      ? '<div class="tl-today" style="left:' + pct(nowT) + '%"></div>' : "";

    var catRows;
    if (!data.cats.length) {
      catRows = '<div class="cat-row"><div class="cat-row__label"></div>' +
        '<div class="cat-row__track" style="height:' + (BAR_H + 12) + 'px;' + gridBgStyle() + '">' +
          today + '<div class="lane-empty">' + esc(I18N.t("laneEmpty")) + '</div></div></div>';
    } else {
      catRows = data.cats.map(function (c) {
        var bars = "";
        c.rows.forEach(function (row, ri) {
          row.items.forEach(function (ev) { ev.top = 5 + ri * STEP; bars += barHTML(ev) + endLabelHTML(ev); });
        });
        var trackH = Math.max(c.rows.length * STEP + 6, BAR_H + 12);
        return '<div class="cat-row" data-cat="' + c.meta.key + '">' +
          '<div class="cat-row__label"><span class="cat-ic">' + c.meta.icon + '</span>' + esc(I18N.t("cat." + c.meta.key)) + '</div>' +
          '<div class="cat-row__track" style="height:' + trackH + 'px;' + gridBgStyle() + '">' +
            today + bars +
          '</div></div>';
      }).join("");
    }

    return '<div class="lane" data-game="' + game + '">' +
      '<div class="lane__game"><b>' + esc(g.short) + '</b>' + (ver ? '<small>' + esc(ver) + '</small>' : '') + '</div>' +
      catRows + '</div>';
  }

  function render() {
    WIN = buildWindow(); // пересчёт окна (на случай смены даты при долгой сессии)
    SOLO = state.filters.game !== "all";
    STEP = SOLO ? 40 : 30;
    BAR_H = SOLO ? 32 : 24;
    timeline.className = "tl" + (SOLO ? " is-solo" : "");
    // ширина полотна = по дню × DAY_PX (полотно шире экрана → горизонтальный скролл)
    var days = Math.round(WIN.len / DAY);
    timeline.style.setProperty("--tl-min", "calc(var(--label) + " + (days * DAY_PX) + "px)");
    var games = activeGames();
    var anyPlaced = false, tbaAll = [];
    var lanes = games.map(function (g) {
      var d = laneData(g);
      if (d.cats.length) anyPlaced = true;
      tbaAll = tbaAll.concat(d.tba);
      return laneHTML(g);
    }).join("");

    timeline.innerHTML =
      '<div class="tl__head"><div class="tl__head-spacer"></div><div class="tl__axis">' + axisHTML() + '</div></div>' +
      lanes;
    empty.hidden = anyPlaced;

    if (!didScroll) { didScroll = true; scrollToToday(); }
    renderTba(tbaAll);
    renderBadges();
  }

  // Центрировать горизонтальный скролл на «сегодня» (один раз при загрузке).
  function scrollToToday() {
    var el = timeline.querySelector(".axis-day.is-today");
    if (!el) return;
    var base = timeline.getBoundingClientRect(), rect = el.getBoundingClientRect();
    timeline.scrollLeft += (rect.left - base.left) - timeline.clientWidth / 2;
  }

  function renderTba(list) {
    var sec = $("#tbaSection");
    if (!list.length) { sec.hidden = true; return; }
    sec.hidden = false;
    $("#tbaList").innerHTML = list.map(function (it) {
      return '<div class="tba__item" data-game="' + it.game + '">' +
        '<b>' + esc(SOURCES.GAMES[it.game].short) + '</b> · ' + esc(it.title) + '</div>';
    }).join("");
  }

  // ---------- Бейджи свежести ----------
  function renderBadges() {
    var meta = SOURCES.snapshotMeta();
    badges.innerHTML = activeGames().map(function (g) {
      if (state.live[g]) {
        return '<span class="fresh" data-src="live"><span class="dot"></span>' + esc(SOURCES.GAMES[g].short) + ': ' + esc(I18N.t("badgeLive")) + '</span>';
      }
      var fr = FMT.freshness(meta[g]);
      return '<span class="fresh' + (fr.stale ? " is-stale" : "") + '" data-src="snapshot"><span class="dot"></span>' +
        esc(SOURCES.GAMES[g].short) + ': ' + esc(fr.text || "—") + '</span>';
    }).join("");
  }

  // ---------- Live-фетч ----------
  var liveKey = "liveDefault"; // текущий ключ статуса live (для ретрансляции при смене языка)
  function setLiveStatus(key, st) {
    liveKey = key;
    liveStatus.textContent = I18N.t(key);
    liveStatus.dataset.state = st;
  }

  function loadLive() {
    setLiveStatus("liveLoading", "loading");
    refreshBtn.disabled = true;
    var jobs = SOURCES.liveGames.map(function (g) {
      return SOURCES.fetchLive(g)
        .then(function (items) { mergeLive(g, items); return true; })
        .catch(function (err) { console.warn("live " + g + ":", err.message); return false; });
    });
    Promise.all(jobs).then(function (oks) {
      var any = oks.some(Boolean);
      setLiveStatus(any ? "liveOk" : "liveOffline", any ? "live" : "error");
      refreshBtn.disabled = false;
      render(); renderGameHero();
    });
  }
  function mergeLive(game, liveItems) {
    state.items = state.items.filter(function (it) { return it.game !== game; }).concat(liveItems);
    state.live[game] = true;
  }

  // ---------- Шапка активной игры / заголовок вида ----------
  function gameVersion(game) {
    if (game === "wuwa" && window.SNAPSHOT_WUWA) return window.SNAPSHOT_WUWA.version;
    if (game === "nte" && window.SNAPSHOT_NTE) return window.SNAPSHOT_NTE.version;
    // genshin/hsr: вытащить из подписи первого баннера "Версия X"
    var b = state.items.filter(function (it) { return it.game === game && it.type === "banner" && it.subtitle; })[0];
    if (b) { var m = /([\d.]+)/.exec(b.subtitle); return m ? m[1] : ""; }
    return "";
  }
  function renderGameHero() {
    var hero = $("#gameHero"), title = $("#viewTitle");
    var g = state.filters.game;
    if (g === "all") {
      hero.hidden = true;
      if (title) { title.hidden = false; title.textContent = I18N.t("viewTitle"); }
      return;
    }
    if (title) title.hidden = true;
    var info = SOURCES.GAMES[g], ver = gameVersion(g), meta = SOURCES.snapshotMeta();
    var fresh = state.live[g] ? I18N.t("liveOk") : (FMT.freshness(meta[g]).text || "");
    hero.dataset.game = g;
    hero.innerHTML =
      '<div class="game-hero__main"><span class="game-hero__dot"></span>' +
      '<h2 class="game-hero__title">' + esc(info.label) + '</h2>' +
      (ver ? '<span class="game-hero__ver">v' + esc(ver) + '</span>' : '') + '</div>' +
      '<div class="game-hero__meta">' + esc(fresh) + '</div>';
    hero.hidden = false;
  }

  // ---------- Промокоды ----------
  function renderCodes() {
    var data = window.CODES || { items: [] };
    var g = state.filters.game;
    $("#codesFresh").textContent = FMT.freshness(data.generatedAt).text;
    var list = data.items.filter(function (c) { return g === "all" || c.game === g; });
    $("#codesList").innerHTML = list.map(function (c, i) {
      if (c.note) {
        return '<div class="code" data-game="' + c.game + '">' +
          '<div class="code__reward">' + esc(c.reward) + (c.url ? ' <a href="' + esc(c.url) + '" target="_blank" rel="noopener">Источник →</a>' : "") + '</div>' +
          '<div class="code__game">' + esc(SOURCES.GAMES[c.game].short) + '</div></div>';
      }
      return '<div class="code" data-game="' + c.game + '">' +
        '<div class="code__head"><span class="code__str">' + esc(c.code) + '</span>' +
        '<button class="code__copy" data-code="' + esc(c.code) + '">' + esc(I18N.t("copy")) + '</button></div>' +
        '<div class="code__reward">' + esc(c.reward) + '</div>' +
        '<div class="code__game">' + esc(SOURCES.GAMES[c.game].short) + '</div></div>';
    }).join("");
  }

  // ---------- Тултип ----------
  function showTip(bar, x, y) {
    var d = bar.dataset;
    var partsHTML = "";
    if (d.parts) {
      partsHTML = '<div class="tip-parts">' + d.parts.split("‖").map(function (p) {
        return '<div class="tip-part">🎴 ' + esc(p) + '</div>'; }).join("") + '</div>';
    }
    tip.innerHTML = '<span class="tip-game" style="color:var(--g-' + d.game + ')">' + esc(SOURCES.GAMES[d.game].short) + '</span>' +
      '<span class="tip-type">' + esc(I18N.t("typeLabel." + d.type)) + '</span>' +
      '<b>' + esc(d.title) + '</b>' +
      (d.sub ? '<div class="tip-row">' + esc(d.sub) + '</div>' : '') +
      partsHTML +
      '<div class="tip-row">📅 ' + esc(d.range) + '</div>' +
      '<div class="tip-timer">⏱ ' + esc(d.timer) + '</div>';
    tip.hidden = false;
    moveTip(x, y);
  }
  function moveTip(x, y) {
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var nx = x + 14, ny = y + 14;
    if (nx + w > window.innerWidth - 8) nx = x - w - 14;
    if (ny + h > window.innerHeight - 8) ny = y - h - 14;
    tip.style.left = Math.max(8, nx) + "px";
    tip.style.top = Math.max(8, ny) + "px";
  }

  // ---------- События UI ----------
  function wireFilters() {
    document.querySelectorAll(".filter-row").forEach(function (row) {
      var group = row.dataset.group;
      row.addEventListener("click", function (e) {
        var chip = e.target.closest(".chip");
        if (!chip) return;
        row.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("is-active"); });
        chip.classList.add("is-active");
        state.filters[group] = chip.dataset.val;
        render(); renderCodes(); renderGameHero();
      });
    });
  }
  function wireTip() {
    timeline.addEventListener("mouseover", function (e) {
      var bar = e.target.closest(".tl-bar"); if (bar) showTip(bar, e.clientX, e.clientY);
    });
    timeline.addEventListener("mousemove", function (e) {
      if (!tip.hidden) moveTip(e.clientX, e.clientY);
    });
    timeline.addEventListener("mouseout", function (e) {
      if (e.target.closest(".tl-bar")) tip.hidden = true;
    });
  }
  function wireCopy() {
    $("#codesList").addEventListener("click", function (e) {
      var btn = e.target.closest(".code__copy"); if (!btn) return;
      var done = function () { btn.textContent = I18N.t("copied"); btn.classList.add("copied");
        setTimeout(function () { btn.textContent = I18N.t("copy"); btn.classList.remove("copied"); }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(btn.dataset.code).then(done, done);
      else done();
    });
  }

  function wireLang() {
    var langBtn = $("#langBtn");
    if (!langBtn) return;
    var updateBtn = function () { langBtn.textContent = I18N.lang === "ru" ? "EN" : "RU"; };
    updateBtn();
    langBtn.addEventListener("click", function () {
      I18N.set(I18N.lang === "ru" ? "en" : "ru"); // сохранить + перевести статику + событие langchange
      updateBtn();
      liveStatus.textContent = I18N.t(liveKey);   // ретрансляция текущего live-статуса
      render(); renderCodes(); renderGameHero();  // перерисовать динамику на новом языке
    });
  }

  function init() {
    I18N.apply();                    // перевести статичный HTML под сохранённый язык
    wireFilters(); wireTip(); wireCopy(); wireLang();
    renderCodes(); render(); renderGameHero();
    refreshBtn.addEventListener("click", loadLive);
    loadLive();
    setInterval(render, 60000); // двигаем линию "сегодня" / обновляем таймеры
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
