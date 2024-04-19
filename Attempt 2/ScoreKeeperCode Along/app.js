const select = document.querySelector("select");
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const reset = document.querySelector(".reset");
const score1 = document.querySelector(".score1");
const score2 = document.querySelector(".score2");

let sc1 = 0;
let sc2 = 0;
let noOfPlay = 0;
let winner = false;

btn1.addEventListener("click", function () {
  if (!winner) {
    sc1 = sc1 + 1;
    if (sc1 === noOfPlay) {
      winner = true;
      score1.classList.add("win");
      score2.classList.add("lose");
    }
    score1.textContent = sc1;
  }
});

btn2.addEventListener("click", function () {
  if (!winner) {
    sc2 = sc2 + 1;
    if (sc2 === noOfPlay) {
      winner = true;
      score1.classList.add("lose");
      score2.classList.add("win");
    }
    score2.textContent = sc2;
  }
});

reset.addEventListener("click", function () {
  resetFunction();
});

function resetFunction() {
  sc1 = 0;
  sc2 = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  winner = false;
  score1.classList.remove("win", "lose");
  score2.classList.remove("lose", "win");
}

select.addEventListener("change", function () {
  noOfPlay = parseInt(select.value);
  resetFunction();
});
