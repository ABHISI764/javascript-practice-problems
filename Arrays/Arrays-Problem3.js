// Q. Find the max element from the given int array? 
function minElements(num) {
    let min = num.reduce((accu, i)=>Math.max(accu, i))
    return min;
  }
  const givenAraay = [5, 3, 8, 2, 7];
  let result = minElements(givenAraay)
  console.log(result) // 2