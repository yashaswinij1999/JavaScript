function isPalindrome(num) {
  let s = "" + num;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(131));
console.log(isPalindrome(123));
console.log(isPalindrome(323));
