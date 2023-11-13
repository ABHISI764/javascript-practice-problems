// Q. Find out given number is a palindrome or not?

function isPalindrom(num){
    const numStr = num.toString();
    const reversString = numStr.split('').reverse().join('')
    return numStr === reversString;
}
const palindromeNumber = 121;
const result = isPalindrom(palindromeNumber);
console.log(result); // true

