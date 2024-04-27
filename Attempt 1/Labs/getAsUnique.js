function getAsUnique(str) {
  let s1 = "";
  let count = 0;

  s = new Set(str);

  for (let key of s) {
    s1 = s1 + "" + key;
  }
  return s1;
}

console.log(getAsUnique("Program"));
console.log(getAsUnique("Ba Ba Black Sheep"));
