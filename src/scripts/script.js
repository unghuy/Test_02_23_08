// Menu Mobile
// TOGGLE HAMBURGER & COLLAPSE NAV
$(".nav-toggle").on("click", function () {
  $(this).toggleClass("open");
  $(".nav-link-wrapper").toggleClass("collapse");
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$(".nav-link-wrapper .nav-link").on("click", function () {
  $(".nav-toggle").removeClass("open");
  $(".menu").removeClass("collapse");
});

// Swiper Slider
// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  effect: "fade",
  speed: 1000,
  loop: true,

  // pagination slider
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  },

  // navigation arrows slider
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  mousewheel: {
    invert: false,
    forceToAxis: false,
    thresholdDelta: 50,
    sensitivity: 1
  }
});
