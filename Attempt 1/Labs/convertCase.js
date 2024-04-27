function convertCase(str) {
  let s = "";
  let s2 = "";

  for (let char of str) {
    s += char;

    if (/[a-zA-Z]/.test(char)) {
      if (char === char.toUpperCase()) {
        s2 += char.toLowerCase();
      } else {
        s2 += char.toUpperCase();
      }
    } else {
      s2 += char;
    }
  }
  return s2;
}
console.log(convertCase("Yashu"));
console.log(convertCase("Happy New Year-2012"));
