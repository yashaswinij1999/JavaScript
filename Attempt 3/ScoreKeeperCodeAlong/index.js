const sc1 = document.getElementById("one");
const sc2 = document.getElementById("two");
const bt1 = document.getElementById("p1");
const bt2 = document.getElementById("p2");
const sel = document.getElementById("play");
const reset = document.getElementById("reset");

let p1 = 0;
let p2 = 0;
let winningScore = 0;
let winner = false;

sel.addEventListener("change", (e) => {
  console.log("selvalue", sel.value);
  winningScore = parseInt(sel.value);
  console.log("winningScore", winningScore);
});

bt1.addEventListener("click", () => {
  if (!winner) {
    p1 = p1 + 1;
    console.log(winningScore);
    if (p1 === winningScore) {
      winner = true;
      sc1.classList.add("winner");
      sc2.classList.add("loser");
    }
    sc1.innerText = p1;
  }

  console.log("bt1 clicked");
});

bt2.addEventListener("click", () => {
  if (!winner) {
    p2 = p2 + 1;
    if (p2 === winningScore) {
      winner = true;
      sc1.classList.add("loser");
      sc2.classList.add("winner");
    }
    sc2.innerText = p2;
  }

  console.log("bt2 clicked");
});

reset.addEventListener("click", () => {
  p1 = 0;
  p2 = 0;
  sc1.innerText = p1;
  sc2.innerText = p2;
  winner = false;
  sc1.classList.remove("winner", "loser");
  sc2.classList.remove("winner", "loser");
});
