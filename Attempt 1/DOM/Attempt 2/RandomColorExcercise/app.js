const h1 = document.querySelector("h1");

const button = document.querySelector("button");

button.addEventListener("click", function () {
  h1.innerText = rand();
  h1.style.color = "white";
  document.body.style.backgroundColor = rand();
});

function rand() {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r},${g},${b})`;
}
