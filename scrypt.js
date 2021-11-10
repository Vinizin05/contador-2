const btnMore = document.getElementById("more");
const btnLess = document.getElementById("less");
const reset = document.getElementById("reset");
const text = document.getElementById("text");

let counter = 0;

text.innerHTML = counter;

btnMore.addEventListener("click", function () {
  text.innerText = ++counter;
});

reset.addEventListener("click", function () {
  text.innerText = counter = 0;
});

btnLess.addEventListener("click", function () {
  text.innerText = --counter;
});
