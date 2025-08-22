
// Q. Aggregation on Arrays
// Ans. Aggregation involves calculating a single value from an array, such as a sum, average, or maximum.

const prices = [10, 25, 12, 5];

const total = prices.reduce((accumulator , currentValue)=> accumulator + currentValue);
console.log(total)

const highestPric = prices.reduce((max, current) => Math.max(max,current), -Infinity);
console.log(highestPric)

