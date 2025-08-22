/* Q. We can compare arrays for equality (containing the same elements in the same order) 
   by checking their lengths and then iterating through them to compare each element. */

   // Ans. 

   function areArraysEqual(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true;
}


const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3];
const arrayC = [1, 3, 2];
console.log("arrayA,arrayB :",areArraysEqual(arrayA,arrayB))
console.log("arrayB,arrayC :",areArraysEqual(arrayB,arrayC))
