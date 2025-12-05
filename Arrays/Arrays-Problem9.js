// Q. Read all elements from an array in the reverse order?

const myArray = [10, 20, 30, 40, 50];

function reverseValue(arr) {
  let result = [];
  for (let i = arr.length; i >= 0; i--) {
   result.push(arr[i])
  }
  return result  
}
console.log(reverseValue(myArray))
