// Q2. Write a program to reverse first half separately and 2nd half separately

// Ans. 

function reverseFirstAndSecondHalf(str){
    let stringLength = str.length;
    let halfLength = Math.floor(stringLength / 2);

    let firstHalf = str.substring(0,halfLength);
    let secondHalf = str.substring(halfLength, stringLength);

    let reversefirstHalf = reverseString(firstHalf);
    let reversesecondHalf = reverseString(secondHalf);

    return reversefirstHalf + reversesecondHalf;
}
function reverseString(str){
   return str.split('').reverse().join('');
}

const originalString = "Hello world";
const result = reverseFirstAndSecondHalf(originalString);
console.log(result)
