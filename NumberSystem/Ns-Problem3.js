// Q3.Print true, if sum of squares of any 2 numbers is a 3rd given number

function sumOfSquaresToThird(num1,num2,num3){
    return num1 * num1 + num2 * num2 === num3 * num3 || num2 * num2 + num3 * num3 === num1 * num1 || num3 * num3 + num1 * num1 === num2 * num2;
}

const num1 = 3;
const num2 = 4;
const num3 = 5;
console.log(sumOfSquaresToThird(num1,num2,num3))


