function doubleChar(str) {
  let s = "";

  for (let i = 0; i < str.length; i++) {
    s += str[i] + str[i];
  }
  console.log(s);
}
doubleChar("ab");
doubleChar("The");
doubleChar("AAbb");
doubleChar("Hi-There");
