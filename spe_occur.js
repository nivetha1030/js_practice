// Count the occurrences of a specific element in an array
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}
let array = [1, 2, 3, 2, 4, 2, 5];
let targetElement = 2;
console.log("The element " + targetElement + " occurs " + countOccurrences(array, targetElement) + " times.");
