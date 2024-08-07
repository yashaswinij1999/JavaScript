function recursive_reverse(str) {
  if (str <= 1) {
    return str;
  } else {
    return recursive_reverse(str.slice(1)) + str[0];
  }
}
console.log(recursive_reverse("Java"));
console.log(recursive_reverse("Hello"));
console.log(recursive_reverse("World"));
