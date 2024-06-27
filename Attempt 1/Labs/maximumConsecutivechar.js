function maximumConsecutivechar(str) {
  let words = str.split(" ");
  let count = 0;
  let maxCount = 0;

  function maxCountInWord(word) {
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        count++;
      } else if (count > maxCount) {
        maxCount = count;
      }
    }
    return Math.max(maxCount, count);
  }

  let maxRepeats = 0;
  let resultWord = "";

  for (let word of words) {
    const repeat = maxCountInWord(word);
    if (repeat > maxRepeats) {
      maxRepeats = repeat;
      resultWord = word;
    }
  }
  return resultWord;
}
console.log(maximumConsecutivechar("Java programming"));
