// share.js — кнопка «Поделиться»: нативный share (моб.), копирование ссылки, QR-код.
(function () {
  "use strict";

  var SITE_URL = "https://akela2109.github.io/gacha-event-tracker/";
  var SHORT_URL = "https://is.gd/ee6QPc";
  var t = function (k) { return window.I18N ? window.I18N.t(k) : k; };

  var btn = document.getElementById("shareBtn");
  if (!btn) return;

  // Поповер собирается лениво при первом открытии.
  var pop = null;

  function buildPopover() {
    var el = document.createElement("div");
    el.className = "share-pop";
    el.hidden = true;
    el.innerHTML =
      '<div class="share-pop__title">' + t("shareTitle") + '</div>' +
      '<div class="share-pop__row">' +
      '  <input class="share-pop__link" type="text" readonly value="' + SHORT_URL + '" aria-label="Ссылка" />' +
      '  <button class="share-pop__copy" type="button">' + t("shareCopy") + '</button>' +
      '</div>' +
      '<img class="share-pop__qr" src="qr.png" alt="QR-код ссылки на трекер" width="180" height="180" />' +
      '<div class="share-pop__hint">' + t("shareHint") + '</div>';
    document.body.appendChild(el);

    var input = el.querySelector(".share-pop__link");
    var copyBtn = el.querySelector(".share-pop__copy");

    copyBtn.addEventListener("click", function () {
      copyText(SHORT_URL, input);
      copyBtn.textContent = t("shareCopied");
      setTimeout(function () { copyBtn.textContent = t("shareCopy"); }, 1600);
    });

    return el;
  }

  function copyText(text, inputEl) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () { legacyCopy(inputEl); });
    } else {
      legacyCopy(inputEl);
    }
  }

  function legacyCopy(inputEl) {
    if (!inputEl) return;
    inputEl.focus();
    inputEl.select();
    try { document.execCommand("copy"); } catch (e) {}
  }

  function positionPopover(el) {
    var r = btn.getBoundingClientRect();
    el.style.top = (window.scrollY + r.bottom + 8) + "px";
    // прижать к правому краю кнопки, не вылезая за экран
    var left = window.scrollX + r.right - el.offsetWidth;
    if (left < 8) left = 8;
    el.style.left = left + "px";
  }

  function openPopover() {
    if (!pop) pop = buildPopover();
    pop.hidden = false;
    positionPopover(pop);
    btn.setAttribute("aria-expanded", "true");
    setTimeout(function () {
      document.addEventListener("click", onDocClick, true);
      window.addEventListener("resize", onReposition);
      window.addEventListener("scroll", onReposition, true);
    }, 0);
  }

  function closePopover() {
    if (!pop || pop.hidden) return;
    pop.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("click", onDocClick, true);
    window.removeEventListener("resize", onReposition);
    window.removeEventListener("scroll", onReposition, true);
  }

  function onReposition() { if (pop && !pop.hidden) positionPopover(pop); }

  function onDocClick(e) {
    if (pop && !pop.contains(e.target) && e.target !== btn) closePopover();
  }

  btn.addEventListener("click", function () {
    // Нативный share — только на тач-устройствах (мобильные). На десктопе — свой QR-поповер,
    // иначе Windows-браузер открыл бы системную «шторку» вместо нашего окна.
    var isTouch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
    if (navigator.share && isTouch) {
      navigator.share({
        title: "Gacha Event Tracker",
        text: "Календарь событий Genshin · Star Rail · WuWa · NTE",
        url: SITE_URL
      }).catch(function () {});
      return;
    }
    if (pop && !pop.hidden) closePopover(); else openPopover();
  });

  // Смена языка: сбросить поповер, чтобы он пересобрался с новыми подписями.
  document.addEventListener("langchange", function () {
    closePopover();
    if (pop) { pop.remove(); pop = null; }
  });
})();
