function stringSplosion(str) {
  let s = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= i; j++) {
      s = s + "" + str[j];
    }
  }
  console.log(s);
}
stringSplosion("code");
stringSplosion("abc");
stringSplosion("ab");
