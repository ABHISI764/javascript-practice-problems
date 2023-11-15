// Q. Assume given number containing 3 digits. now check it out first two digits’ sum is 3rd digit or not

function checkThirdDigitSum(num){
    let numToString = num.toString();
    let FirstNumber = parseInt(numToString[0])
    let SecondNumber = parseInt(numToString[1])
    let ThirdNumber = parseInt(numToString[2])
    let total = FirstNumber + SecondNumber  ===  ThirdNumber;
    return total;
}

const threeNumber = 123;
let result = checkThirdDigitSum(threeNumber)
console.log(result) // true