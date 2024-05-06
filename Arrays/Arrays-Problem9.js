// Q.  Find out the min value from all even indexed elements from a given int array

function findMinFromEvenIndexed(arr){
    let min = arr.length;
    for(let i = 2; i <arr.length; i +=2){
        console.log("i", i)
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min;

 }
 const numbers = [10, 5, 3, 8, 12, 7];
 const result = findMinFromEvenIndexed(numbers);
 console.log(result)