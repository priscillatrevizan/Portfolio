$(document).ready(function () {
  $(".sectors").slick({
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4, // Alterado de 6 para 4
    slidesToScroll: 1,
    arrows: false,
    dots: false,
  });
});
