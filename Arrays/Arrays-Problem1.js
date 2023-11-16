// Q. Find the sum of all given elements from an int array? 
const myArray = [1, 2, 3, 4, 5];
let sum = myArray.reduce(sumArrElements)
function sumArrElements(acc, i) {
    return acc + i ;
}
console.log(sum); // 15

// Method 1: Using a For Loop

// function sumOfAllArray(num){
//     let sum = 0;
//     for(let i = 0; i < num.length; i++){
//         sum += num[i];
//     }
//     return sum;
// }
// const myArray1 = [1, 2, 3, 4, 5];
// const result = sumOfAllArray(myArray1);
// console.log(result) // 15