// Q. Find the min element from the given int array?
function minElements(num) {
    let min = num[0];
    for (let i = 0; i <= num.length; i++) {
        if (num[i] < min) {
            min = num[i]
        }
    }
    return min;
}
const givenAraay = [5, 3, 8, 2, 7];
let result = minElements(givenAraay)
console.log(result) // 2


// Method 2: Using the Math.min() Function

// function findMin(num){
//     return Math.min(...num)
// }
// const givenAraay = [5, 3, 8, 2, 7];
// let result = findMin(givenAraay)
// console.log(result) // 2