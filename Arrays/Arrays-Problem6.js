// Q. Find the average value of an int array? 
function calculateAvrage(arr) {
    let sum = arr.reduce((accumulator, currentValue)=> accumulator + currentValue);
    let average = sum / arr.length;
    return average;
}
const myArray = [5, 2, 8, 1, 7];
let result = calculateAvrage(myArray);
console.log(result) // 4.6

// Method 2 : Using the forEach() Method

// calculateAvrage = (arr) =>{
//     let sum = 0;
//     arr.forEach(element => {
//         sum += element
//     });
//     let average = sum / arr.length;
//     return average;
// }

// const myArray = [5, 2, 8, 1, 7];
// let result = calculateAvrage(myArray);
// console.log(result)

// Method 3: Using a For Loop

// function calculateAvrage(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let average = sum / arr.length
//     return average;
// }

// const myArray = [5, 2, 8, 1, 7];
// let result = calculateAvrage(myArray);
// console.log(result) // 4.6
