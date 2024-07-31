function dateFashion(girl, boy) {
  if (girl >= 8 || boy >= 8) {
    return "2";
  }
  if (girl <= 2 || boy <= 2) {
    return "0";
  }
  return "1";
}
console.log(dateFashion(5, 10));
console.log(dateFashion(5, 2));
console.log(dateFashion(5, 5));
