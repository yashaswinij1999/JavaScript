function sortString(str) {
  const arr = str.split("");
  const sortedChar = arr.sort();
  const sortedStr = sortedChar.join("");
  return sortedStr;
}

console.log(sortString("Mouse"));
console.log(sortString("Java"));
console.log(sortString("Cat"));
