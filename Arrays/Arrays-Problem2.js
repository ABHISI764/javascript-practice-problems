// Q. Find the max element from the given int array? 
function findMaxElement(arr){
    return Math.max(...arr)
}
const numbers = [3, 5, 7, 2, 8, -1, 4];
const maxElement = findMaxElement(numbers);
console.log(maxElement)