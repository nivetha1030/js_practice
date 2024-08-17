//. Check if a number exists in an array.
function checkNumberExists(array, numberToFind) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === numberToFind) {
            return true; 
        }
    }
    return false; 
}
var array = [5, 10, 15, 20, 25];
var numberToFind = 15;
var result = checkNumberExists(array, numberToFind);
if (result) {
    console.log("Number " + numberToFind + " exists in the array.");
} else {
    console.log("Number " + numberToFind + " does not exist in the array.");
}
