function middleThree(str) {
  if (str.length === 3) {
    return str;
  } else {
    const len = Math.floor(str.length / 2);
    const s = str[len - 1] + str[len] + str[len + 1];
    return s;
  }
}
console.log(middleThree("candy"));
console.log(middleThree("and"));
console.log(middleThree("solving"));
