//Determine if an array contains only even numbers
function areAllEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false; 
        }
    }
    return true;
}
let numbers = [2, 4, 6, 8, 10];
console.log(areAllEven(numbers)); 

let mixedNumbers = [2, 3, 6, 8, 10];
console.log(areAllEven(mixedNumbers)); 
