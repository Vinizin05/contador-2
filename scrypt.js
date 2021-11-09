const btnMore = document.getElementById("more");
const btnLess = document.getElementById("less");
const reset = document.getElementById("reset");
const text = document.getElementById("text");

let contador = 0;

text.innerHTML = contador;

btnMore.addEventListener("click", function () {
  text.innerText = ++contador;
});

reset.addEventListener("click", function () {
  text.innerText = contador = 0;
});

btnLess.addEventListener("click", function () {
  text.innerText = --contador;
});
