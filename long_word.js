//Find the longest word in a string.
function findLongestWord(str) {
  let words = str.split(' ');
  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
let sentence = "I am pursuing BE- Computer Scince";
let longest = findLongestWord(sentence);
console.log("The longest word is:", longest);
