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
