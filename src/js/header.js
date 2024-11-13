//header
const menuOpen = document.getElementById("js-header-sp-close");
const menuFull = document.getElementById("js-header-sp-opened");
const btnClose = document.getElementById("js-header-sp-btn-close");
const btnOpen = document.getElementById("js-header-sp-btn-open");

function menuShow() {
  console.log("open");
  console.log(menuFull.style.display);
}
function menuHide() {}
btnOpen.addEventListener("click", menuShow);
btnClose.addEventListener("click", menuHide);
