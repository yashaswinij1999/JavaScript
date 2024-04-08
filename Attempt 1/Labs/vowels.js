function vowels(s) {
  let vowels = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s[i].toLowerCase();

    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      vowels++;
    }
  }
  return vowels++;
}

console.log(vowels("WebApplication"));
console.log(vowels("Java"));
console.log(vowels("Program"));
