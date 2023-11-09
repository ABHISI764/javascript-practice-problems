// Q. Find out total digits of a given number?

function totalDigits(num) {
    let numStr = num.toString();
    return numStr.length;
}
let number = 2345167980;
let result = totalDigits(number);
console.log(result)