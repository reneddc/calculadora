import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultado-div");
const operation = document.querySelector('#operacion');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  var total;
  if (operation.value == "suma"){
    total = sumar(firstNumber, secondNumber);
  }
  else{
    total = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>" + total + "</p>";

});

