// btn-mobile
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");

  // Adiciona/remover classe active no hamburguer para animação
  const hamburguer = document.getElementById("hamburguer");
  hamburguer.classList.toggle("active");
}

// Adiciona event listeners para click e touchstart
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

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

/*form*/
function validateForm(event) {
  event.preventDefault(); // Impede o envio do formulário

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let emailValid = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  let phoneValid = /^[0-9]{10,11}$/;

  if (name === "" || email === "" || phone === "") {
    alert("Preencha todos os campos!");
    return false;
  }
  if (name.length < 3) {
    alert("Por gentileza,preencha um nome válido!");
    return false;
  }
  if (!emailValid.test(email)) {
    alert("Por gentileza, preencha um e-mail válido!");
    return false;
  }
  if (!phoneValid.test(phone)) {
    alert("Por gentileza, preencha um telefone válido!");
    return false;
  }

  alert("Formulário enviado com sucesso!");
  return true; // Permite o envio do formulário se todas as validações passarem
}
