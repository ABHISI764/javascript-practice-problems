// Q.Reverse a given number?
function convertNumber(number) {
    let numtoSring = number.toString();
    let numSplit = numtoSring.split('');
    let numReverse = numSplit.reverse();
    let numJoin = numReverse.join('')
    return numJoin;
}
const givenNumber = 12345;
let result = convertNumber(givenNumber)
console.log(result) //54321


// same result reduce variables
// function reverseNumber(number){
//     const reverseNum = parseInt(number.toString().split('').reverse().join(''))
//     return reverseNum;
// }
// const givenNumber = 12345;
// const result = reverseNumber(givenNumber)
// console.log(result) //54321