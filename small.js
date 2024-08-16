//the smallest element in an array 
 function findSmallestElement(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
let array = [34, 15, 88, 2, -6, 45];
console.log("The smallest element is: " + findSmallestElement(array));
