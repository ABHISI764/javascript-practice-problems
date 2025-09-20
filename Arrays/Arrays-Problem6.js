// Q. Find out the sum of all even indexed elements from a given int array?
function evenIndexd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  const numbers = [10, 20, 30, 40, 50, 60];
  console.log(evenIndexd(numbers));
  