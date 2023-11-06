// Q3.Print true, if sum of squares of any 2 numbers is a 3rd given number

function sumOfSquaresToThird(num1,num2,num3){
    return num1 * num1 + num2 * num2 === num3 * num3 || num2 * num2 + num3 * num3 === num1 * num1 || num3 * num3 + num1 * num1 === num2 * num2;
}

const num1 = 3;
const num2 = 4;
const num3 = 5;
console.log(sumOfSquaresToThird(num1,num2,num3)) // true


//  same result using Math.pow()

// function hasSumOfSquaresToThird(num1, num2, num3) {
//     return Math.pow(num1, 2) + Math.pow(num2, 2) === Math.pow(num3, 2)
//         || Math.pow(num2, 2) + Math.pow(num3, 2) === Math.pow(num1, 2)
//         || Math.pow(num3, 2) + Math.pow(num1, 2) === Math.pow(num2, 2)
// }
// const num1 = 3;
// const num2 = 4;
// const num3 = 5;
// console.log(hasSumOfSquaresToThird(num1, num2, num3)); 
 