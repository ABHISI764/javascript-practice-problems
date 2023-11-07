// Q. Find out whether digits are in raising order or not in a given number?
function risingOrder(num) {
    let numStr = num.toString();
    for (let i = 0; i <= numStr.length - 1; i++) {
        if (numStr[i] > numStr[i + 1]) {
            console.log("i", i)
            return false;
        }
    }
    return true
}
const number = 12345678;
const result = risingOrder(number);
console.log(result) // true