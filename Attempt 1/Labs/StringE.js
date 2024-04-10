function StringE(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      count = count + 1;
    }
  }

  if (count >= 1 && count <= 3) {
    return true;
  } else {
    return false;
  }
}

console.log(StringE("hello"));
console.log(StringE("Heelle"));
console.log(StringE("Heelele"));
