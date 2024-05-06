function isStringPermute(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  } else {
    let c1 = s1.split("");
    let c2 = s2.split("");

    const sortedC1 = c1.sort().join();
    const sortedC2 = c2.sort().join();

    if (sortedC1 === sortedC2) {
      return true;
    }
    return false;
  }
}

console.log(isStringPermute("rama", "ramya"));
