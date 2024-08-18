//Find the first negative number in an array.
function findNegative(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
    return "No negative numbers found";
}
let numbers = [3, 5, -7, 8, -2];
let firstNegative = findNegative(numbers);
console.log(firstNegative);
