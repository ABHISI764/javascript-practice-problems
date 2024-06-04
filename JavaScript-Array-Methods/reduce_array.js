// Q. what is Javascript Array reduce()
// Ans. The reduce() method executes a reducer function on each element of the array and returns a single output value.

// Example 1:- 
const numbers = [1800, 50, 300, 20, 100];
function join(acc, currenvalue) {
    return acc - currenvalue;
}
let result = numbers.reduce(join)
console.log(result) // Output 1330