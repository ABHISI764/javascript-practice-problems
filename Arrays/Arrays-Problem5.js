// Q.Find the 2nd max element from the given int array?
function findSecondMax(array){
    const sortArray = array.slice().sort((a,b)=> b - a);
    const secondMax = sortArray[1]
    return secondMax;
}
const myArray2 = [5, 2, 8, 1, 7];
const result = findSecondMax(myArray2)
console.log(result)
