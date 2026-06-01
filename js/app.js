// Точка входа: снапшот → live → мёрж → рендер таймлайна-календаря (дорожки по играм).
(function () {
  "use strict";
  var FMT = window.FMT, SOURCES = window.SOURCES;
  var DAY = 86400000;
  var GAME_ORDER = ["genshin", "hsr", "wuwa", "nte"];

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
  var MONTHS_FULL = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

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

  // Разложить события игры: помещаемые в окно vs TBA. Помечаем actual start/end (ms).
  function laneData(game) {
    var placed = [], tba = [];
    state.items.forEach(function (it) {
      if (it.game !== game || !passesType(it)) return;
      var s = FMT.toDate(it.startsAt);
      var e = FMT.toDate(it.endsAt);
      if (!s) { // нет старта → нельзя разместить
        if (it.type !== "maintenance") tba.push(it);
        return;
      }
      var aStart = s.getTime();
      var aEnd = e ? e.getTime() : WIN.end;      // ongoing → тянем до конца окна
      if (aEnd <= WIN.start || aStart >= WIN.end) return; // вне окна
      placed.push({ it: it, aStart: aStart, aEnd: aEnd, openEnd: !e });
    });
    return { placed: packRows(placed), tba: tba };
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
    // подписи месяцев (центр своего отрезка внутри окна)
    var c1 = pct((WIN.start + WIN.nextMonth) / 2);
    var c2 = pct((WIN.nextMonth + WIN.end) / 2);
    h += '<div class="axis-month" style="left:' + c1 + '%">' + MONTHS_FULL[WIN.m1.getMonth()] + " " + WIN.m1.getFullYear() + '</div>';
    h += '<div class="axis-month" style="left:' + c2 + '%">' + MONTHS_FULL[WIN.m2.getMonth()] + " " + WIN.m2.getFullYear() + '</div>';
    // граница месяцев
    h += '<div class="axis-monthline" style="left:' + pct(WIN.nextMonth) + '%"></div>';
    // недельные тики
    var totalDays = WIN.len / DAY;
    for (var d = 0; d < totalDays - 0.5; d += 7) {
      var t = WIN.start + d * DAY;
      var day = new Date(t).getDate();
      h += '<div class="axis-tick" style="left:' + pct(t) + '%">' + day + '</div>';
    }
    // сегодня
    var nowT = FMT.now().getTime();
    if (nowT >= WIN.start && nowT < WIN.end) {
      h += '<div class="axis-today" style="left:' + pct(nowT) + '%">сегодня</div>';
    }
    return h;
  }

  function gridBgStyle() {
    var weekPct = (7 * DAY) / WIN.len * 100;
    return 'background-size:' + weekPct + '% 100%;';
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
    var data = ' data-title="' + esc(it.title) + '" data-sub="' + esc(it.subtitle || "") +
      '" data-game="' + it.game + '" data-type="' + it.type +
      '" data-range="' + esc(FMT.fmtRange(it.startsAt, it.endsAt)) +
      '" data-timer="' + esc(FMT.timerLabel(it.startsAt, it.endsAt)) + '"';
    return '<div class="' + cls.join(" ") + '" style="left:' + left + '%;width:' + width + '%;top:' + ev.top + 'px"' + data + '>' +
      '<span>' + esc(it.title) + '</span></div>';
  }

  function laneHTML(game) {
    var data = laneData(game);
    var g = SOURCES.GAMES[game];
    var ver = "";
    if (game === "wuwa" && window.SNAPSHOT_WUWA) ver = "v" + window.SNAPSHOT_WUWA.version;
    if (game === "nte" && window.SNAPSHOT_NTE) ver = "v" + window.SNAPSHOT_NTE.version;

    var rows = data.placed;
    var bars = "";
    rows.forEach(function (row, ri) {
      row.items.forEach(function (ev) { ev.top = 8 + ri * 30; bars += barHTML(ev); });
    });
    var trackH = Math.max(rows.length * 30 + 8, 46);
    var nowT = FMT.now().getTime();
    var today = (nowT >= WIN.start && nowT < WIN.end)
      ? '<div class="tl-today" style="left:' + pct(nowT) + '%"></div>' : "";
    var emptyNote = rows.length ? "" : '<div style="position:absolute;left:10px;top:14px;font-size:12px;color:var(--txt-faint)">нет событий в этом окне</div>';

    return '<div class="lane" data-game="' + game + '">' +
      '<div class="lane__label"><b>' + esc(g.short) + '</b>' + (ver ? '<small>' + esc(ver) + '</small>' : '') + '</div>' +
      '<div class="lane__track" style="height:' + trackH + 'px;' + gridBgStyle() + '">' +
        today + emptyNote + bars +
      '</div></div>';
  }

  function render() {
    WIN = buildWindow(); // пересчёт окна (на случай смены даты при долгой сессии)
    var games = activeGames();
    var anyPlaced = false, tbaAll = [];
    var lanes = games.map(function (g) {
      var d = laneData(g);
      if (d.placed.length) anyPlaced = true;
      tbaAll = tbaAll.concat(d.tba);
      return laneHTML(g);
    }).join("");

    timeline.innerHTML =
      '<div class="tl__head"><div class="tl__head-spacer"></div><div class="tl__axis">' + axisHTML() + '</div></div>' +
      lanes;
    empty.hidden = anyPlaced;

    renderTba(tbaAll);
    renderBadges();
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
    badges.innerHTML = GAME_ORDER.map(function (g) {
      if (state.live[g]) {
        return '<span class="fresh" data-src="live"><span class="dot"></span>' + esc(SOURCES.GAMES[g].short) + ': live</span>';
      }
      var fr = FMT.freshness(meta[g]);
      return '<span class="fresh' + (fr.stale ? " is-stale" : "") + '" data-src="snapshot"><span class="dot"></span>' +
        esc(SOURCES.GAMES[g].short) + ': ' + esc(fr.text || "—") + '</span>';
    }).join("");
  }

  // ---------- Live-фетч ----------
  function loadLive() {
    liveStatus.textContent = "загрузка…"; liveStatus.dataset.state = "loading";
    refreshBtn.disabled = true;
    var jobs = SOURCES.liveGames.map(function (g) {
      return SOURCES.fetchLive(g)
        .then(function (items) { mergeLive(g, items); return true; })
        .catch(function (err) { console.warn("live " + g + ":", err.message); return false; });
    });
    Promise.all(jobs).then(function (oks) {
      var any = oks.some(Boolean);
      liveStatus.textContent = any ? "live ✓" : "снапшот (offline)";
      liveStatus.dataset.state = any ? "live" : "error";
      refreshBtn.disabled = false;
      render();
    });
  }
  function mergeLive(game, liveItems) {
    state.items = state.items.filter(function (it) { return it.game !== game; }).concat(liveItems);
    state.live[game] = true;
  }

  // ---------- Промокоды ----------
  function renderCodes() {
    var data = window.CODES || { items: [] };
    $("#codesFresh").textContent = FMT.freshness(data.generatedAt).text;
    $("#codesList").innerHTML = data.items.map(function (c, i) {
      if (c.note) {
        return '<div class="code" data-game="' + c.game + '">' +
          '<div class="code__reward">' + esc(c.reward) + (c.url ? ' <a href="' + esc(c.url) + '" target="_blank" rel="noopener">Источник →</a>' : "") + '</div>' +
          '<div class="code__game">' + esc(SOURCES.GAMES[c.game].short) + '</div></div>';
      }
      return '<div class="code" data-game="' + c.game + '">' +
        '<div class="code__head"><span class="code__str">' + esc(c.code) + '</span>' +
        '<button class="code__copy" data-code="' + esc(c.code) + '">копировать</button></div>' +
        '<div class="code__reward">' + esc(c.reward) + '</div>' +
        '<div class="code__game">' + esc(SOURCES.GAMES[c.game].short) + '</div></div>';
    }).join("");
  }

  // ---------- Тултип ----------
  function showTip(bar, x, y) {
    var d = bar.dataset;
    tip.innerHTML = '<span class="tip-game" style="color:var(--g-' + d.game + ')">' + esc(SOURCES.GAMES[d.game].short) + '</span>' +
      '<b>' + esc(d.title) + '</b>' +
      (d.sub ? '<div class="tip-row">' + esc(d.sub) + '</div>' : '') +
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
        render();
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
      var done = function () { btn.textContent = "скопировано ✓"; btn.classList.add("copied");
        setTimeout(function () { btn.textContent = "копировать"; btn.classList.remove("copied"); }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(btn.dataset.code).then(done, done);
      else done();
    });
  }

  function init() {
    wireFilters(); wireTip(); wireCopy();
    renderCodes(); render();
    refreshBtn.addEventListener("click", loadLive);
    loadLive();
    setInterval(render, 60000); // двигаем линию "сегодня" / обновляем таймеры
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
