const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const reset = document.querySelector("#reset");
const select = document.querySelector("#sel");

const ek = document.querySelector("#ek");
const doh = document.querySelector("#doh");

let p1Score = 0;
let p2Score = 0;
let winnerScore = 5;
let isGameOver = false;

btn1.addEventListener("click", function () {
  // alert("clicked");
  if (!isGameOver) {
    p1Score += 1;

    if (p1Score === winnerScore) {
      isGameOver = true;
      ek.classList.add("winner");
      doh.classList.add("loser");
    }
    ek.textContent = p1Score;
  }
});

btn2.addEventListener("click", function () {
  // alert("clicked");
  if (!isGameOver) {
    p2Score += 1;

    if (p2Score === winnerScore) {
      isGameOver = true;
      doh.classList.add("winner");
      ek.classList.add("loser");
    }
    doh.textContent = p2Score;
  }
});

reset.addEventListener("click", resetFunction);

select.addEventListener("change", function () {
  winnerScore = parseInt(this.value);
  resetFunction();
});

function resetFunction() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  ek.textContent = p1Score;
  doh.textContent = p2Score;
  ek.classList.remove("winner", "loser");
  doh.classList.remove("winner", "loser");
}
