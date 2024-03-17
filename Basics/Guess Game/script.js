let maximum = parseInt(prompt("Welcome !! Enter a Maximum Number"));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid Number"));
}
console.log(`maximum : ${maximum}`);

let attempts = 1;
let targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(`targetNum : ${targetNum}`);

let guess = prompt("Enter your guess (Type 'q' to Quit");

while (parseInt(guess) !== targetNum) {
  if (guess === "q") {
    break;
  }
  guess = parseInt(guess);
  if (guess > targetNum) {
    guess = prompt("The number entered is too High!!!!");
  } else if (guess < targetNum) {
    guess = prompt("the number entered is too low");
  } else {
    guess = prompt("Invalid Number");
  }
  attempts++;
}

console.log(`guess : ${guess}`);
if (guess === "q") {
  console.log(`YOU QUIT in  ${attempts} attempts`);
} else {
  console.log(`YOU GOT IT RIGHT in ${attempts} attempts`);
}
