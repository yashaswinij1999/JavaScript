function stringMatch(s1, s2) {
  let count = 0;
  let minLength = Math.min(s1.length, s2.length);

  for (let i = 0; i < minLength - 1; i++) {
    let a = s1.slice(i, i + 2);
    let b = s2.slice(i, i + 2);

    if (a === b) {
      count++;
    }
  }
  console.log(count);
}
stringMatch("xxcbaazz", "xxcaazz");
