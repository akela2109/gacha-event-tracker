// Утилиты времени, статусов и форматирования. Без зависимостей.
(function (global) {
  "use strict";

  var DAY = 86400000, HOUR = 3600000, MIN = 60000;
  var ENDING_SOON_MS = 48 * HOUR; // "скоро закончится" — менее 48 часов

  // Локализация: читаем строки/массивы из I18N в момент вызова (фолбэк — сам ключ).
  function t(k) { return global.I18N ? global.I18N.t(k) : k; }

  function now() { return new Date(); }

  // Парсинг: принимает ISO-строку, Unix-секунды (число) или null. Возвращает Date|null.
  function toDate(v) {
    if (v == null || v === 0) return null;
    if (typeof v === "number") return new Date(v * 1000); // Unix-секунды (HoYo API)
    var d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }

  // Статус события по датам: 'tba' | 'upcoming' | 'ending-soon' | 'active' | 'ended'
  function statusOf(start, end) {
    var s = toDate(start), e = toDate(end), t = now().getTime();
    if (!s && !e) return "tba";
    if (s && t < s.getTime()) return "upcoming";
    if (e && t > e.getTime()) return "ended";
    // идёт сейчас
    if (e && (e.getTime() - t) <= ENDING_SOON_MS) return "ending-soon";
    return "active";
  }

  // Процент прошедшего времени (0..100). Если нет рамок — null.
  function progressPct(start, end) {
    var s = toDate(start), e = toDate(end);
    if (!s || !e) return null;
    var t = now().getTime();
    var total = e.getTime() - s.getTime();
    if (total <= 0) return null;
    var p = ((t - s.getTime()) / total) * 100;
    return Math.max(0, Math.min(100, p));
  }

  // Человекочитаемый обратный отсчёт до целевой даты: "5д 3ч", "12ч 40м", "8м".
  function countdown(target) {
    var d = toDate(target);
    if (!d) return "";
    var ms = d.getTime() - now().getTime();
    var past = ms < 0;
    ms = Math.abs(ms);
    var days = Math.floor(ms / DAY);
    var hours = Math.floor((ms % DAY) / HOUR);
    var mins = Math.floor((ms % HOUR) / MIN);
    var out;
    if (days > 0) out = days + t("unitDay") + " " + hours + t("unitHour");
    else if (hours > 0) out = hours + t("unitHour") + " " + mins + t("unitMin");
    else out = mins + t("unitMin");
    return out;
  }

  // Короткий остаток до даты для пилюли: "5д" (≥1 дня) / "7ч" / "<1ч".
  function daysLeftShort(target) {
    var d = toDate(target);
    if (!d) return "";
    var ms = d.getTime() - now().getTime();
    if (ms <= 0) return "";
    var days = Math.floor(ms / DAY);
    if (days >= 1) return days + t("unitDay");
    var hours = Math.floor(ms / HOUR);
    return hours >= 1 ? hours + t("unitHour") : t("lessHour");
  }

  // Текст таймера с подписью в зависимости от статуса.
  function timerLabel(start, end) {
    var st = statusOf(start, end);
    if (st === "upcoming") return t("startsIn") + countdown(start);
    if (st === "active" || st === "ending-soon") return t("remains") + countdown(end);
    if (st === "ended") return t("ended");
    return t("unknownDate");
  }

  function fmtDate(v) {
    var d = toDate(v);
    if (!d) return t("tba");
    return d.getUTCDate() + " " + t("monthsShort")[d.getUTCMonth()];
  }
  function fmtRange(start, end) {
    var s = fmtDate(start), e = end ? fmtDate(end) : null;
    if (s === t("tba") && !e) return t("dateTbd");
    if (!e) return t("fromPrefix") + s;
    return s + " — " + e;
  }

  // "обновлено N дн. назад" + флаг устаревания (> 5 дней).
  function freshness(iso) {
    var d = toDate(iso);
    if (!d) return { text: "", stale: false };
    var ms = now().getTime() - d.getTime();
    var days = Math.floor(ms / DAY);
    var text = days <= 0 ? t("freshToday") : days === 1 ? t("freshYesterday") : days + t("freshDaysAgo");
    return { text: t("freshPrefix") + text, stale: days > 5 };
  }

  global.FMT = {
    now: now, toDate: toDate, statusOf: statusOf, progressPct: progressPct,
    countdown: countdown, daysLeftShort: daysLeftShort, timerLabel: timerLabel,
    fmtDate: fmtDate, fmtRange: fmtRange, freshness: freshness
  };
})(window);
