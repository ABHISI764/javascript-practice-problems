// Q. Find out the min value from all even indexed elements from a given int array? 
function minEvenIndexed(arr) {
    let min = arr[0];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < min){
        min = arr[i]
      }
    }
    return min
  }
  
  const numbers = [10, 5, 30, 2, 1, 8];
  console.log(minEvenIndexed(numbers));
  