// Q. Find out immediate next 5 multiple of a given number

function findMultiples(givenNumber, nextMultiplesNumber) {
    const multiple = [];
    for(let i = 0; i < nextMultiplesNumber; i++ ){
        multiple.push(givenNumber *  (i +1)  )
    }
    return multiple;
}
let givenNumber = 4;
let nextMultiplesNumber = 6;
console.log(findMultiples(givenNumber, nextMultiplesNumber))   // [ 4, 8, 12, 16, 20, 24 ]