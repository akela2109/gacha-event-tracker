// i18n.js — лёгкий движок локализации интерфейса (RU/EN), без зависимостей.
// Значения — строки И массивы (месяцы, дни недели). Загружается ПЕРВЫМ из логики.
(function (global) {
  "use strict";

  var DICT = {
    ru: {
      // --- статика HTML (data-i18n) ---
      "tab.all": "◆ Сводка по всем",
      "type.all": "Всё",
      "type.banner": "▰ Баннеры",
      "type.event": "◇ Ивенты",
      "type.endgame": "⚔ Эндгейм",
      "type.version": "◆ Версии",
      "viewTitle": "Сводка — все игры",
      "empty": "Под выбранные фильтры в этом окне ничего нет.",
      "tbaTitle": "Без точной даты (TBA)",
      "codesTitle": "🎁 Промокоды",
      "shareBtn": "↗ Поделиться",
      "refreshBtn": "⟳ Обновить",
      "footer": "Данные: api.ennead.cc (live, Genshin/HSR) · game8.co, neverness.gg (снапшот, WuWa/NTE). Неофициальный проект.",
      // --- категории и типы (app.js) ---
      "cat.banner": "Баннеры",
      "cat.event": "Ивенты",
      "cat.endgame": "Эндгейм",
      "cat.version": "Версии",
      "typeLabel.banner": "Баннер",
      "typeLabel.event": "Ивент",
      "typeLabel.endgame": "Эндгейм",
      "typeLabel.version": "Версия",
      "typeLabel.maintenance": "Тех. работы",
      "weekdays": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
      "monthsFull": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
      "laneEmpty": "нет событий в этом окне",
      "badgeLive": "live",
      "liveDefault": "снапшот",
      "liveLoading": "загрузка…",
      "liveOk": "live ✓",
      "liveOffline": "снапшот (offline)",
      "copy": "копировать",
      "copied": "скопировано ✓",
      // --- format.js ---
      "monthsShort": ["янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
      "unitDay": "д",
      "unitHour": "ч",
      "unitMin": "м",
      "lessHour": "<1ч",
      "startsIn": "старт через ",
      "remains": "ещё ",
      "ended": "завершено",
      "unknownDate": "дата неизвестна",
      "dateTbd": "Дата уточняется",
      "fromPrefix": "с ",
      "tba": "TBA",
      "freshPrefix": "снапшот: ",
      "freshToday": "сегодня",
      "freshYesterday": "вчера",
      "freshDaysAgo": " дн. назад",
      // --- share.js ---
      "shareTitle": "Поделиться трекером",
      "shareCopy": "Копировать",
      "shareCopied": "Скопировано ✓",
      "shareHint": "Наведи камеру телефона на QR — откроется сайт"
    },
    en: {
      "tab.all": "◆ All games",
      "type.all": "All",
      "type.banner": "▰ Banners",
      "type.event": "◇ Events",
      "type.endgame": "⚔ Endgame",
      "type.version": "◆ Versions",
      "viewTitle": "Summary — all games",
      "empty": "Nothing matches the selected filters in this window.",
      "tbaTitle": "No exact date (TBA)",
      "codesTitle": "🎁 Promo codes",
      "shareBtn": "↗ Share",
      "refreshBtn": "⟳ Refresh",
      "footer": "Data: api.ennead.cc (live, Genshin/HSR) · game8.co, neverness.gg (snapshot, WuWa/NTE). Unofficial project.",
      "cat.banner": "Banners",
      "cat.event": "Events",
      "cat.endgame": "Endgame",
      "cat.version": "Versions",
      "typeLabel.banner": "Banner",
      "typeLabel.event": "Event",
      "typeLabel.endgame": "Endgame",
      "typeLabel.version": "Version",
      "typeLabel.maintenance": "Maintenance",
      "weekdays": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      "monthsFull": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      "laneEmpty": "no events in this window",
      "badgeLive": "live",
      "liveDefault": "snapshot",
      "liveLoading": "loading…",
      "liveOk": "live ✓",
      "liveOffline": "snapshot (offline)",
      "copy": "copy",
      "copied": "copied ✓",
      "monthsShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      "unitDay": "d",
      "unitHour": "h",
      "unitMin": "m",
      "lessHour": "<1h",
      "startsIn": "starts in ",
      "remains": "ends in ",
      "ended": "ended",
      "unknownDate": "date unknown",
      "dateTbd": "Date TBD",
      "fromPrefix": "from ",
      "tba": "TBA",
      "freshPrefix": "snapshot: ",
      "freshToday": "today",
      "freshYesterday": "yesterday",
      "freshDaysAgo": " d ago",
      "shareTitle": "Share the tracker",
      "shareCopy": "Copy",
      "shareCopied": "Copied ✓",
      "shareHint": "Point your phone camera at the QR to open the site"
    }
  };

  var STORE_KEY = "get-lang";
  var saved = null;
  try { saved = global.localStorage.getItem(STORE_KEY); } catch (e) {}

  var I18N = {
    lang: (saved === "en" || saved === "ru") ? saved : "ru",

    // Вернуть значение ключа (строка или массив) для текущего языка; фолбэк — сам ключ.
    t: function (key) {
      var d = DICT[this.lang] || DICT.ru;
      return (key in d) ? d[key] : key;
    },

    // Сменить язык: сохранить, обновить <html lang>, применить статику, оповестить остальных.
    set: function (lang) {
      if (lang !== "ru" && lang !== "en") return;
      this.lang = lang;
      try { global.localStorage.setItem(STORE_KEY, lang); } catch (e) {}
      if (global.document && global.document.documentElement) {
        global.document.documentElement.lang = lang;
      }
      this.apply();
      global.document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: lang } }));
    },

    // Проставить textContent на всех статичных элементах [data-i18n].
    apply: function () {
      var self = this;
      var nodes = global.document.querySelectorAll("[data-i18n]");
      Array.prototype.forEach.call(nodes, function (el) {
        var v = self.t(el.getAttribute("data-i18n"));
        if (typeof v === "string") el.textContent = v;
      });
    }
  };

  // Синхронизировать <html lang> с сохранённым выбором сразу при загрузке.
  if (global.document && global.document.documentElement) {
    global.document.documentElement.lang = I18N.lang;
  }

  global.I18N = I18N;
})(window);
