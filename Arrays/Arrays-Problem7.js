// Q. Find out the sum of all even indexed elements from a given int array?
function sumofEvenIndex(myArray) {
    let sum = 0;
    for (let i = 0; i <= myArray.length; i += 2) {
        sum += myArray[i]
    }
    return sum;

}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = sumofEvenIndex(myArray)
console.log(result) //