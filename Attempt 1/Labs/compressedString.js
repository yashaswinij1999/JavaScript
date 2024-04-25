function compressedString(str) {
  count = 1;
  s = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      s = s + str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }

  if (s.length >= str.length) {
    return str;
  }
  return s;
}

console.log(compressedString("aaaaccccbbbhhhjj "));
