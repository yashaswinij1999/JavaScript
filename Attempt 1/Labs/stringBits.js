function stringBits(str) {
  let s = "";

  for (let i = 0; i < str.length; i += 2) {
    s = s + str[i];
  }
  return s;
}

console.log(stringBits("Hello"));
console.log(stringBits("Heeololeo"));
console.log(stringBits("Hi"));
