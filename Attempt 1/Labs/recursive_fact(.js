function recursive_fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * recursive_fact(n - 1);
  }
}
console.log(recursive_fact(4));
console.log(recursive_fact(5));
