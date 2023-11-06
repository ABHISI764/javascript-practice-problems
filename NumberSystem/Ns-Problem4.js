// Q. Find out given number is an even or odd? 

function evenOrOdd(num) {
    if (num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}
let number = 4;
console.log(evenOrOdd(number)) //Even

// same result using Ternary Operator;

// function evenOrOdd(num) {
//     return num % 2 == 0 ? "Even " : "Odd";
//  }
//  const number = 5;
//  console.log(evenOrOdd(number)); //Odd