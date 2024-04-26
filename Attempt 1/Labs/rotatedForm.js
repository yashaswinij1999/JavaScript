function rotatedForm(s1, s2) {
  let len = Math.floor(s1.length / 2);
  let s = "";
  s = s1.slice(len, s1.length - 1) + s1[s1.length - 1] + s1.slice(0, len);

  if (s === s2) {
    return true;
  }
  return false;
}

console.log(rotatedForm("hello", "llohe"));
console.log(rotatedForm("happy", "pphay "));
console.log(rotatedForm("Rama", "krish"));
