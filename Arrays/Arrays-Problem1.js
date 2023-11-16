// Q. Find the sum of all given elements from an int array? 
const myArray = [1, 2, 3, 4, 5];
let sum = myArray.reduce(sumArrElements)
function sumArrElements(acc, i) {
    return acc + i ;
}
console.log(sum); // 15