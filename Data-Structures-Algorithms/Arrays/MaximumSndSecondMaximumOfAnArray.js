// Q. Maximum and second maximum of an Array

function findMaxAndSecondMax(arr){
    if(arr.length < 2){
        return "Array must have at least two elements "
    }
    let max = -Infinity;
    let secondMax = -Infinity;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        } else if(arr[i] > secondMax && arr[i] <max){
            secondMax = arr[i]
        }
    }
    return {max, secondMax}
}
const numbers = [10, 5, 20, 8, 15];
console.log(findMaxAndSecondMax(numbers))