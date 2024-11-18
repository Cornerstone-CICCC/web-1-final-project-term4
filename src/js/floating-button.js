document.addEventListener("DOMContentLoaded", function () {
  const fabButton = document.getElementById("fab-button");
  const fabMenu = document.getElementById("fab-menu");
  const fabMenuClose = document.getElementById("fab-menu-close");

  fabButton.addEventListener("click", function () {
    if (fabMenu.classList.contains("show")) {
      fabMenu.classList.remove("show");
      setTimeout(() => {
        fabMenu.style.display = "none";
      }, 300);
    } else {
      fabMenu.style.display = "flex";
      setTimeout(() => {
        fabMenu.classList.add("show");
        fabButton.style.display = "none";
      }, 10);
    }
  });

  document.addEventListener("click", function (event) {
    if (!fabButton.contains(event.target) && !fabMenu.contains(event.target)) {
      fabMenu.classList.remove("show");
      setTimeout(() => {
        fabMenu.style.display = "none";
      }, 300);
    }
  });

  fabMenuClose.addEventListener("click", function () {
    fabMenu.style.display = "none";
    fabMenu.classList.remove("show");
    fabButton.style.display = "flex";
  });
});
