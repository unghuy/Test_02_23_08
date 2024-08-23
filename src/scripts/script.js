// Menu Mobile
// TOGGLE HAMBURGER & COLLAPSE NAV
$(".nav-toggle").on("click", function () {
  $(this).toggleClass("open");
  $(".menu").toggleClass("collapse");
});
// REMOVE X & COLLAPSE NAV ON ON CLICK
$(".menu .menu__link").on("click", function () {
  $(".nav-toggle").removeClass("open");
  $(".menu").removeClass("collapse");
});
