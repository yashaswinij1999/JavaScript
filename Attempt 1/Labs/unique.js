function unique(str) {
  count = 0;

  for (let i = 0; i < str.length; i++) {
    count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}

console.log(unique("reghav"));
console.log(unique("raghav"));
console.log(unique("java"));
