function recursive_sumOfDigits(num) {
  if (num === 0) {
    return num;
  } else {
    return (num % 10) + recursive_sumOfDigits(Math.floor(num / 10));
  }
}
console.log(recursive_sumOfDigits(123));
console.log(recursive_sumOfDigits(55));
