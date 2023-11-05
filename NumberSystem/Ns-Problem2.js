// Q2. Print true, if sum of any 2 numbers is a 3rd given number 

function sumToThird(num1, num2, num3) {
    return (num1 + num2 === num3) || (num2 + num3 === num1) || (num3 + num1 === num2)
}
const num1 = 5;
const num2 = 12;
const num3 = 7;

if (sumToThird(num1, num2, num3)) {
    console.log(true)
} else {
    console.log(false)
}