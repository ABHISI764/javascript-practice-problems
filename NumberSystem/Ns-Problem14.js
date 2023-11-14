// Q. Assume total number of digits in a given number is even. Reverse only first half Of the given number.

function reverseHalf(num){
    const numToString = num.toString();
    const length = numToString.length;
    let midpoint = length / 2;
    let reverseFirstHalf = numToString.slice(0,midpoint).split('').reverse().join('');
    console.log("reverseFirstHalf",reverseFirstHalf)
    let reversNumber = parseInt(reverseFirstHalf + numToString.slice(midpoint));
    return reversNumber;
}

const evenNumber = 123456;
const result = reverseHalf(evenNumber)
console.log(result) // 321456