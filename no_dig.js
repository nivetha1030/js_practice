//Count the number of digits in a string.
function countDigits(str) {
  let digitCount = 0;
  for (let i = 0; i < str.length; i++) {
    // Check if the character is a digit
    if (str[i] >= '0' && str[i] <= '9') {
      digitCount++;
    }
  }
  return digitCount;
}
let exampleString = "Hello123, this is 2024!";
let numDigits = countDigits(exampleString);
console.log("Number of digits in the string:", numDigits);
