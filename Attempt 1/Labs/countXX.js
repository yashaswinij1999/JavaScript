function countXX(str) {
  let count = 0;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "x") {
      if (str[i] === str[i + 1]) {
        count++;
      }
    }
  }
  return count;
}

console.log(countXX("abcxx"));
console.log(countXX("xxx"));
console.log(countXX("xxxx"));
