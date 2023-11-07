// Q. Find out sum of all even numbers between two given numbers?

function findSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum
}
const start = 1;
const end = 10;
const result = findSum(start, end)
console.log(result);

