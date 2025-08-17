const menuButton = document.querySelector(".menu-button");
const menuList = document.querySelector("#menu");
const form = document.querySelector("form");
const formInputs = document.querySelectorAll(".input");
const textoErro = form.querySelectorAll("p");

menuButton.addEventListener("click", () => {
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  inputErro();
});

function inputErro() {
  formInputs.forEach((input) => {
    if (input.value === "") {
      input.parentElement.classList.add("mensagem-erro");
    } else {
        input.parentElement.classList.remove("mensagem-erro");
    }
  });
}
