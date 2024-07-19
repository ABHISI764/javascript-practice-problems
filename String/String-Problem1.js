// Q1.Write a program to reverse a String

// Method 1. 
function reverseString(str){
    let revstr = '';
    for(let i = str.length - 1; i >= 0; i--){
        revstr += str[i]
    }
    return revstr;
}

const originalString = 'Hello World';
let result = reverseString(originalString);
console.log(result) //dlroW olleH

// Method 2.

// function reverseStrring(str) {
//     let splitstr = str.split("");
//     let reverse = splitstr.reverse();
//     let joinstr = reverse.join("");
//     return joinstr;
// }

// let originalStr = 'Hello Wrold';
// let result = reverseStrring(originalStr);
// console.log(result)

// same solution with less code

function reverseString(str){
    return str.split('').reverse().join('');
}
const originalString = 'Hello World';
let result = reverseString(originalString)
console.log(result)

