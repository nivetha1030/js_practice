//Count the number of words in a string.
function countWords(str) {
    let words = str.trim().split(/\s+/);
    return words.length;
}
let text = "Hello, how are you doing today?";
console.log(countWords(text)); =

let emptyText = "   ";
console.log(countWords(emptyText)); 
