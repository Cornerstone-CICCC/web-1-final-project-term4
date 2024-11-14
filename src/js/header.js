//header.js

//header size
const main = document.querySelector("main");
const spHeader = document.getElementById("js-header-sp");
const pcHeader = document.getElementById("js-header-pc");
const pcLogo = document.getElementById("js-header-pc-logo");

function changeHeaderSize() {
  const currentY = window.scrollY;
  if (currentY > 0) {
    main.classList.add("nav-small");
    spHeader.classList.add("nav-small");
    pcHeader.classList.add("nav-small");
    pcLogo.src = "public/assets/images/logo-small.png";
  } else {
    main.classList.remove("nav-small");
    spHeader.classList.remove("nav-small");
    pcHeader.classList.remove("nav-small");
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
const headerOpen = document.getElementById("js-header-pc");
const btnClose = document.getElementById("js-header-sp-btn-close");
const btnOpen = document.getElementById("js-header-sp-btn-open");
const stopScroll = (event) => {
  event.preventDefault();
};

function openMenu() {
  headerOpen.style.display = "block";
  document.addEventListener("touchmove", stopScroll, { passive: false });
  document.addEventListener("mousewheel", stopScroll, { passive: false });
}
function closeMenu() {
  headerOpen.style.display = "none";
  document.removeEventListener("touchmove", stopScroll);
  document.removeEventListener("mousewheel", stopScroll);
}
btnOpen.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu); // メニュー開閉状態のフラグ
