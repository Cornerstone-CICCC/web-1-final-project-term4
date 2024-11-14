//header.js

//header size
const main = document.querySelector("main");
const spHeader = document.getElementById("js-nav-sp");
const pcHeader = document.getElementById("js-nav-pc");
const pcLogo = document.getElementById("js-nav-pc-logo");

function changeHeaderSize() {
  const currentY = window.scrollY;
  if (currentY > 0) {
    main.classList.add("is-nav-small");
    spHeader.classList.add("is-nav-small");
    pcHeader.classList.add("is-nav-small");
    pcLogo.src = "public/assets/images/logo-small.png";
  } else {
    main.classList.remove("is-nav-small");
    spHeader.classList.remove("is-nav-small");
    pcHeader.classList.remove("is-nav-small");
    pcLogo.src = "public/assets/images/logo.png";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  spHeader.style.transition = "none";
  pcHeader.style.transition = "none";
  main.style.transition = "none";
  changeHeaderSize();
  spHeader.style.transition = "";
  pcHeader.style.transition = "";
  main.style.transition = "";
});

window.addEventListener("scroll", () => {
  changeHeaderSize();
});

//hamburger
const headerOpen = document.getElementById("js-nav-pc");
const btnClose = document.getElementById("js-nav-sp-btn-close");
const btnOpen = document.getElementById("js-nav-sp-btn-open");
const stopScroll = (event) => {
  event.preventDefault();
};

function openNav() {
  headerOpen.classList.add("is-nav-open");
  document.addEventListener("touchmove", stopScroll, { passive: false });
  document.addEventListener("mousewheel", stopScroll, { passive: false });
}
function closeNav() {
  headerOpen.classList.remove("is-nav-open");
  document.removeEventListener("touchmove", stopScroll);
  document.removeEventListener("mousewheel", stopScroll);
}
btnOpen.addEventListener("click", openNav);
btnClose.addEventListener("click", closeNav);
