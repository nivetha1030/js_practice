//Find the first palindrome in an array of strings.
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findFirstPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            return arr[i];
        }
    }
    return null; // Return null if no palindrome is found
}
const strings = ["apple", "racecar", "banana", "level", "hello"];
const firstPalindrome = findFirstPalindrome(strings);

console.log(firstPalindrome); 
