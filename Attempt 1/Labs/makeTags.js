function makeTags(tags, word) {
  let openingTag = "<" + tags + ">";
  let closingTag = "</" + tags + ">";

  return openingTag + word + closingTag;
}

console.log(makeTags("i", "Hey"));
console.log(makeTags("i", "Hello"));
