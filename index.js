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

/*image hero*/
document.addEventListener("DOMContentLoaded", function () {
  const heroImg = document.getElementById("hero-img");

  heroImg.addEventListener("mouseover", function () {
    heroImg.src = "./img/hero_img_pb.svg";
  });

  heroImg.addEventListener("mouseout", function () {
    heroImg.src = "./img/hero_img.svg";
  });
});

/*galery*/
document.getElementById("showMore").addEventListener("click", function () {
  let hiddenRows = document.querySelectorAll(".hidden-mobile");
  hiddenRows.forEach(function (row) {
    row.style.display = "flex";
  });
  document.getElementById("showMore").style.display = "none";
  document.getElementById("showLess").style.display = "inline-block";
});

document.getElementById("showLess").addEventListener("click", function () {
  let hiddenRows = document.querySelectorAll(".hidden-mobile");
  hiddenRows.forEach(function (row) {
    row.style.display = "none";
  });
  document.getElementById("showMore").style.display = "inline-block";
  document.getElementById("showLess").style.display = "none";
});
