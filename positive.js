//the sum of all positive numbers in an array.
function sumPositive(arr){
    let tot = 0;
    for (let i of arr) {
        if (i > 0) {
            tot += i;
        }
    }
    return tot;
}

let arr = [1, -7, -6, 5, -3, 3];
let result = sumPositive(arr);
console.log("The sum of all positive numbers is:", result);
