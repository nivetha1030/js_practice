//Finding the maximum number
function maxEle(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

let arr = [2, 9, 5, 100, 35, 57];
console.log("The max num is:", maxEle(arr));
