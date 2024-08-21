//Find the index of the first occurrence of a specific element in an array.
function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1; 
}
let array = [10, 20, 30, 40, 50];
let target = 30;
let index = findIndex(array, target);
console.log("Index of", target, ":", index);
