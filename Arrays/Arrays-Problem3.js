// Q3. Find the max element from the given int array?

// Solution 1: using Math.max

const arr = [10, 25, 7, 89, 45];
const max = Math.max(...arr);
console.log("Max number is ",max) // 89


// Solution 2: using for

const arr = [10, 25, 7, 89, 45];
let max = arr[0]
for(let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
        max = arr[i]; 
    }
}
console.log(max)
