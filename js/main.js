const menuIcon = document.querySelector("#menuIcon");
const menuIconClose = document.querySelector("#menuIconClose");
const navMenu = document.querySelector("#navMenu");
menuIcon.addEventListener("click", function () {
  navMenu.classList.add("nav-menu-visible");
});
menuIconClose.addEventListener("click", function () {
  navMenu.classList.remove("nav-menu-visible");
});
