// Q. Find out factorial value for a given number?

// Method 1 - Recursive Approach:

function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
      return  n * factorial(n - 1);
    }
}
let number = 5;
let result = factorial(number)
console.log(result) // 120

// Method 2 - Iterative Approach:

// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// let number = 5;
// let result = factorial(number)
// console.log(result) // 120
