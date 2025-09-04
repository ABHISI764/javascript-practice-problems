// Q. What is Spread Operator

// Ans . The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// Link : 

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombained = [...numbersOne,...numbersTwo];
console.log(numbersCombained)// [ 1, 2, 3, 4, 5, 6 ]

