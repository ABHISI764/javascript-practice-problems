// Q. what is Spread syntax 
/* Ans. The JavaScript spread operator (...) 
allows us to quickly copy all or part of an existing array or object into another array or object. */

// Example 1 Array :-

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

//Example 2 Object:-

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}
const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
console.log(myUpdatedVehicle);

