function minCat(s1, s2) {
  str = "";

  if (s1.length === s2.length) {
    return s1 + s2;
  } else if (s1.length > s2.length) {
    str = s1.substring(s1.length - s2.length, s1.length);
    return str + s2;
  } else {
    str = s2.substring(s2.length - s1.length, s2.length);
    return str + s2;
  }
}
console.log(minCat("Hello", "Hi"));
console.log(minCat("Hello", "java"));
