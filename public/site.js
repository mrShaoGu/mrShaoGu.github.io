(() => {
  const root = document.documentElement;
  const languageButton = document.querySelector("[data-language-toggle]");
  const themeButton = document.querySelector("[data-theme-toggle]");

  const applyLanguage = (language) => {
    root.dataset.lang = language;
    root.lang = language === "zh" ? "zh-CN" : "en";
    localStorage.setItem("site-language", language);
  };

  languageButton?.addEventListener("click", () => {
    const next = root.dataset.lang === "zh" ? "en" : "zh";
    const target = languageButton.getAttribute(`data-translation-${next}`);
    const contentLanguage = languageButton.getAttribute("data-content-lang");
    applyLanguage(next);
    if (contentLanguage && target && contentLanguage !== next) window.location.href = target;
  });

  themeButton?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("site-theme", next);
  });
})();
