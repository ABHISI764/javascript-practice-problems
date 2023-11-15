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
