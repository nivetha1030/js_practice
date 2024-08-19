//Count the number of spaces in a string.
function countSpaces(str) {
    let spaceCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            spaceCount++;
        }
    }
    return spaceCount;
}
let myString = "Hello, how are you";
let spaces = countSpaces(myString);
console.log("Number of spaces:", spaces);
