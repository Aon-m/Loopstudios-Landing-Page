const navBar = document.querySelector(".header__nav"),
  navCloseBtn = document.querySelector(".header__close-button"),
  hamburger = document.querySelector(".header__hamburger");

navCloseBtn.addEventListener("click", closeNav);
hamburger.addEventListener("click", openNav);

function closeNav() {
  navBar.classList.remove("header__nav--open");
}

function openNav() {
  navBar.classList.add("header__nav--open");
}
