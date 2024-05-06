// Q. Write a program to rotate one char in a given string

function rotateCharArray(str, index, newChar) {
    const chars = str.split('');
    chars[index] = newChar;
    return chars.join('')
}
const inputStr = "Hello, world!";
const rotatedStr = rotateCharArray(inputStr, 7, 'x');
console.log(rotatedStr)