// Q. Find the average value of an int array? 
function calculateAvrage(arr) {
    let sum = arr.reduce((accumulator, currentValue)=> accumulator + currentValue);
    let average = sum / arr.length;
    return average;
}
const myArray = [5, 2, 8, 1, 7];
let result = calculateAvrage(myArray);
console.log(result) // 4.6
