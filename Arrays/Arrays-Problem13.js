// Q. Reverse only first half of the elements of given array?

function reverseFirstHalf(arr) {
    let n = arr.length;
    let mid = Math.floor(n / 2);
  
    for (let i = 0; i < mid / 2; i++) {
      let temp = arr[i];
      arr[i] = arr[mid - 1 - i];
      arr[mid - 1 - i] = temp;
    }
    return arr;
  }
  
  let arr = [1, 2, 3, 4, 5, 6];
  console.log("from function", reverseFirstHalf(arr));
  