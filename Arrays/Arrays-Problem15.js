// Q. find out the avg value from all even indexed elements from a given int array

// solution using For Loop

const arr = [10, 20, 30, 40, 50, 60];

let sum = 0;
let count = 0;

for(let i = 0; i < arr.length; i +=2){
    sum+=arr[i];
    count++;
}
let avg = sum / count;

console.log(avg)