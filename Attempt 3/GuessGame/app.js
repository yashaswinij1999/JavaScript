let num = parseInt(prompt("Enter a number"));

while (isNaN(num)) {
  num = parseInt(prompt("please enter again a number"));
}

const target = Math.floor(Math.random() * num);

let guess = prompt("take a guess or press q to quit");
console.log("guess", guess);

while (guess != target) {
  if (guess === "q") {
    console.log("you quit");
  }
  guess = parseInt(guess);
  if (guess > target) {
    guess = prompt("too high");
  } else if (guess < target) {
    guess = prompt("too low");
  }
}

console.log("target", target);
console.log("guess", guess);

if (guess === "q") {
  console.log("you quit");
} else {
  console.log("You win");
}
