function makeOutWord(pattern, word) {
  lines = pattern.slice(0, 2) + word + pattern.slice(2, pattern.length);
  return lines;
}

console.log(makeOutWord("<<>>", "out"));
console.log(makeOutWord("<<>>", "WooHoo"));
