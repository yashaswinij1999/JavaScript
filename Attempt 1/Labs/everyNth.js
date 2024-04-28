function everyNth(str, N) {
  let result = "";

  for (let i = 0; i < str.length; i += N) {
    result += str[i]; // Append the character at index i to the result string
  }

  return result;
}

// Test the function with sample input
const inputString = "Miracle";
const N = 2;
const outputString = everyNth(inputString, N);
console.log(outputString); // Output: "Mrce"
