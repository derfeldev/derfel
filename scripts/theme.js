(function () {
  var root = document.documentElement;
  var KEY = 'derfel-theme';
  var BG = { light: '#FFFFFF', dark: '#141414' };

  function stored() {
    try {
      var v = localStorage.getItem(KEY);
      return v === 'light' || v === 'dark' ? v : null;
    } catch (e) {
      return null;
    }
  }

  function system() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);

    var metas = document.querySelectorAll('meta[name="theme-color"]');
    for (var i = 0; i < metas.length; i++) metas[i].setAttribute('content', BG[theme]);

    var btn = document.querySelector('.theme-toggle');
    if (btn) btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  // Runs in <head>, before first paint, so there's no flash of the wrong theme.
  apply(stored() || system());

  document.addEventListener('DOMContentLoaded', function () {
    apply(root.getAttribute('data-theme'));

    var btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try {
          localStorage.setItem(KEY, next);
        } catch (e) {}
        apply(next);
      });
    }

    var years = document.querySelectorAll('[data-year]');
    for (var j = 0; j < years.length; j++) years[j].textContent = new Date().getFullYear();
  });
})();
