//Count the number of words in a string.
function countWords(str) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && str[i] !== '\t' && str[i] !== '\n') {
            if (!inWord) {
                inWord = true;
                count++;
            }
        } else {
            inWord = false;
        }
    }

    return count;
}
const sentence = "Hello, how are you doing today?";
const wordCount = countWords(sentence);
