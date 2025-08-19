const form = document.querySelector("form");
const formInputs = document.querySelectorAll(".input");
const textoErro = form.querySelectorAll("p");

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
