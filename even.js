The  count of even num 
let arr = [34, 545, 23, 76, 45, 77, 44, 109];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        count++;
    }
}

console.log("The count of even numbers is:", count);
