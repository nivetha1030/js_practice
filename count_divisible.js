//Count the number of elements divisible by a specific number in an array.
function countDivisibleBy(arr, divisor) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            count++;
        }
    }
    return count;
}
let array = [5, 10, 44, 20, 27, 30];
let divisor = 5;
let result = countDivisibleBy(array, divisor);
console.log("Number of elements divisible by " + divisor + " is: " + result);
