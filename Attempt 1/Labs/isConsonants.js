function isConsonants(s) {
  let vowels = 0;
  let consonants = 0;

  for (let i = 0; i < s.length; i++) {
    c = s[i].toLowerCase();

    if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z")) {
      if (
        c === "a" ||
        c === "e" ||
        c === "i" ||
        c === "o" ||
        c === "u" ||
        c === " "
      ) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  console.log(" there are ", consonants, " consonants ");
}

isConsonants("Object Oriented");
