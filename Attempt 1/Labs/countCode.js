function countCode(s) {
  let pattern = /co.e/g;
  let matches = s.match(pattern);
  return matches ? matches.length : 0;
}

console.log(countCode("codexxcode"));
console.log(countCode("aaacodebbb"));
console.log(countCode("cozexxcope"));
