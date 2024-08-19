// Find the index of the first occurrence of a specific element in an array.
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; 
        }
    }
    return -1;
}
let myArray = [5, 8, 12, 7, 8, 20, 20];
let targetElement = 20;
let index = findIndex(myArray, targetElement);
console.log("Index of the first occurrence:", index);
