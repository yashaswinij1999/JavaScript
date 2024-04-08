document.addEventListener("DOMContentLoaded", function () {
  // This function will be called once the DOM is fully loaded
  let container = document.querySelector("#container");

  for (let i = 1; i <= 8; i++) {
    let div = document.createElement("div");
    let label = document.createElement("span");
    label.innerText = i;
    let newImg = document.createElement("img");
    newImg.src = `${1000}${i}.png`;
    div.appendChild(newImg);
    div.appendChild(label);
    container.appendChild(div);
  }
});
