let num = parseInt(prompt("Enter the target"));

while (isNaN(num)) {
  num = parseInt(prompt("Enter the target"));
}

let target = Math.floor(Math.random() * num) + 1;

console.log(target);

let guess = prompt("Enter the Guess Number");
let count = 1;

while (parseInt(guess) !== target) {
  if (guess === "quit") {
    break;
  }

  if (guess > target) {
    guess = prompt("guess is greater than target");
    count++;
  } else if (guess < target) {
    guess = prompt("guess is lesser than target");
    count++;
  } else {
    guess = prompt("Invalid ");
  }
}

console.log(guess);

if (guess === "quit") {
  console.log("You Quit");
} else {
  console.log("You Win !!!", count, "attempts");
}
