function middleTwo(str) {
  let s = "";

  if (str.length >= 4) {
    if (str.length % 2 === 0) {
      s = str[str.length / 2 - 1] + str[str.length / 2];
      return s;
    }
  }
}

console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("Practice"));
