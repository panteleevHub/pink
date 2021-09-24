const body = document.querySelector(".page-body");
const menu = body.querySelector(".main-nav");
const menuButton = menu.querySelector(".main-nav__button");

body.classList.remove("no-js");

/* Mobile menu */

menuButton.onclick = function() {
  if (menuButton.classList.contains("main-nav__button--open")) {
    menu.classList.remove("main-nav--closed");
    menuButton.classList.remove("main-nav__button--open");
    menuButton.classList.add("main-nav__button--close");
  } else {
    menuButton.classList.remove("main-nav__button--close");
    menuButton.classList.add("main-nav__button--open");
    menu.classList.add("main-nav--closed");
  }
}
