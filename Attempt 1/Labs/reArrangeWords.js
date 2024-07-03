function reArrangeWords(arr) {
  let digitsArr = [];
  let charArr = [];

  arr.forEach((element) => {
    if (/\d/.test(element)) {
      digitsArr.push(element);
    } else {
      charArr.push(element);
    }
  });

  return charArr.concat(digitsArr);
}

console.log(reArrangeWords(["Maruthy800", "Santro", "I20", "Scoda"]));
