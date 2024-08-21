// Check if all elements in an array are positive.
function allPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false;
        }
    }
    return true;
}
let array1 = [10, 20, 30, 40, 50];
let array2 = [10, -20, -30, 40, 50];

console.log(allPositive(array1));
console.log(allPositive(array2)); 
