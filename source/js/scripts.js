var menuBtn = document.querySelector(".page-header__btn");
var menu = document.querySelector(".main-nav--top");

menuBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBtn.classList.toggle("page-header__btn--close");
  menu.classList.toggle("main-nav--show");
});
