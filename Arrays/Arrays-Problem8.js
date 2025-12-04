// Q. Find out the max value from all odd indexed elements from a given int array?

const arr = [5, 2, 8, 1, 9, 4, 3, 6];
let max2 = 0;

for (let i = 1; i < arr.length; i += 2) {
  if (arr[i] > max2) max2 = arr[i];
}

console.log(max2); // output 6
