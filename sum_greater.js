//Calculate the sum of elements greater than a given value in an array.
function sumGreater(arr, value) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            sum += arr[i];
        }
    }
    
    return sum;
}
let array = [5, 10, 15, 20, 25];
let givenValue = 12;
let result = sumGreater(array, givenValue);
console.log("Sum of elements greater than " + givenValue + " is: " + result);
