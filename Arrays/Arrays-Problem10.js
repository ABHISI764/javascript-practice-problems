// Q. Swap two given indexed elements from the array

const arr = [5, 2, 8, 1, 9, 4, 3, 6];

function swapArr(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
console.log(swapArr([...arr], 1, 4)); // output [5, 9, 8, 1, 2, 4, 3, 6]
