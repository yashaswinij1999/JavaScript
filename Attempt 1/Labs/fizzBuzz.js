function fizzBuzz(start, end) {
  arr = [];

  for (let i = 1; i <= end - 1; i++) {
    if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("fizzbuzz");
    } else {
      arr.push(i + "");
    }
  }
  console.log(arr);
}

// fizzBuzz(1, 6);
// fizzBuzz(1, 8);
fizzBuzz(1, 11);matchUp
