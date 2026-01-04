// Q. Find out an index of a specified element from a given array?

function findIndex(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }
  console.log(findIndex([10, 20, 30, 40, 50], 30));


  // Method 2:


function findIndex(arr, target) {
    return arr.indexOf(target)
}
console.log(findIndex([10, 20, 30, 40, 50], 30));
