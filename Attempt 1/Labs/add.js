function add(a, b) {
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  console.log(a);
}
add(12, 5);
add(8, -3);
add(10, -20);
