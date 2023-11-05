// Q1. Print ascending order of 3 given numbers 

function asscendingOrder(num1,num2,num3){
    const numbers = [num1,num2,num3];
    numbers.sort((a,b)=> a -b);
    console.log(numbers)   
}
const num1 = 10;
const num2 = 5;
const num3 = 15;
asscendingOrder(num1,num2,num3)