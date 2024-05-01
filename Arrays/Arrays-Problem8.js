// Q 1. Find out the sum of all odd indexed elements from a given int array?

// Method 1:

function sumofIndex(arr) {
    let sum = 0;
    for (let i = 1; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = sumofIndex(numbers)
console.log(result) // 20