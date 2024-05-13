function front3(str) {
  const s = str.slice(0, 3);
  const thrice = s + s + s;
  return thrice;
}
console.log(front3("Java"));
console.log(front3("Chocolate"));
console.log(front3("abc"));
