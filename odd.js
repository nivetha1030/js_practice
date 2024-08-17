// Calculate the sum of all odd numbers in an array.
function sumOfOddNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const  result = sumOfOddNumbers(numbers);
console.log("Sum of odd numbers:", result);
