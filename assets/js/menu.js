const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector("#menu");


menuButton.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
});
