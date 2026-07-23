(function () {
  var toggle = document.getElementById("langToggle");
  var nodes = document.querySelectorAll("[data-it][data-en]");
  var imgNodes = document.querySelectorAll("[data-it-src][data-en-src]");
  var lang = (navigator.language || "it").toLowerCase().indexOf("it") === 0 ? "it" : "en";

  function apply(l) {
    lang = l;
    document.documentElement.lang = l;
    nodes.forEach(function (el) {
      el.textContent = el.getAttribute("data-" + l);
    });
    imgNodes.forEach(function (el) {
      el.src = el.getAttribute("data-" + l + "-src");
    });
    toggle.textContent = l === "it" ? "EN" : "IT";
  }

  toggle.addEventListener("click", function () {
    apply(lang === "it" ? "en" : "it");
  });

  apply(lang);
})();
