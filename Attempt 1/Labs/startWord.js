function startWord(s, word) {
  if (word.length > s.length) {
    return s;
  }

  const substr = s.slice(1, word.length);

  if (substr === word[1]) {
    return s.slice(0, word.length);
  } else {
    return s;
  }
}

console.log(startWord("hippo", "hi"));
console.log(startWord("hippo", "xip"));
console.log(startWord("hippo", "i"));
