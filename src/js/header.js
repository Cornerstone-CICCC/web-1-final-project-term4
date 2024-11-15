//header.js

//header size
const main = document.querySelector("main");
const navSP = document.getElementById("js-nav-sp");
const navPC = document.getElementById("js-nav-pc");
const pcLogo = document.getElementById("js-nav-pc-logo");

function changeHeaderSize() {
  const currentY = window.scrollY;
  if (currentY > 0) {
    main.classList.add("is-nav-small");
    navSP.classList.add("is-nav-small");
    navPC.classList.add("is-nav-small");
    pcLogo.src = "public/assets/images/logo-small.png";
  } else {
    main.classList.remove("is-nav-small");
    navSP.classList.remove("is-nav-small");
    navPC.classList.remove("is-nav-small");
    pcLogo.src = "public/assets/images/logo.png";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  navSP.style.transition = "none";
  navPC.style.transition = "none";
  main.style.transition = "none";
  changeHeaderSize();
  navSP.style.transition = "";
  navPC.style.transition = "";
  main.style.transition = "";
});

window.addEventListener("scroll", () => {
  changeHeaderSize();
});

//hamburger
const hamburgerNav = document.getElementById("js-nav-pc");
const hamburgerNavBg = document.getElementById("js-nav-sp-background");
const btnClose = document.getElementById("js-nav-sp-btn-close");
const btnOpen = document.getElementById("js-nav-sp-btn-open");
const stopScroll = (event) => {
  event.preventDefault();
};

function openNav() {
  hamburgerNav.classList.add("is-nav-open");
  hamburgerNavBg.classList.add("is-nav-open");
  document.addEventListener("touchmove", stopScroll, { passive: false });
  document.addEventListener("mousewheel", stopScroll, { passive: false });
}
function closeNav() {
  hamburgerNav.classList.remove("is-nav-open");
  hamburgerNavBg.classList.remove("is-nav-open");
  document.removeEventListener("touchmove", stopScroll);
  document.removeEventListener("mousewheel", stopScroll);
}
btnOpen.addEventListener("click", openNav);
btnClose.addEventListener("click", closeNav);
hamburgerNavBg.addEventListener("click", closeNav);
