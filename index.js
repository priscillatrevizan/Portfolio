//btn-mobile
const btnMobile = document.getElementById("btn-mobile");
function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu, { passive: true });
btnMobile.addEventListener("touchstart", toggleMenu, { passive: true }); // melhoria performance mobile

/*selection language*/
document.addEventListener("DOMContentLoaded", function () {
  let currentLanguage = "en"; // Altere o idioma padrão se necessário

  const languageLinks = document.querySelectorAll(".language-toggle");

  function toggleLanguage(event) {
    event.preventDefault();

    if (currentLanguage === "pt") {
      window.location.href = "index-en.html";
      currentLanguage = "en";
    } else {
      window.location.href = "index.html";
      currentLanguage = "pt";
    }
  }

  languageLinks.forEach(function (languageLink) {
    languageLink.addEventListener("click", toggleLanguage);
  });
});
