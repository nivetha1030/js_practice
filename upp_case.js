//  String contains any uppercase letters.
function uppercase(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char >= 'A' && char <= 'Z') {
            return true;
        }
    }
    return false;
}
let text = "Hello World";
let hasUppercase = uppercase(text);
console.log(hasUppercase); 
