// Q4. Find the average value of an int array? 

 // Ans. Using reduce()

 function findTheAvrage(arr) {
    if(arr.length === 0){
        return null;
    }
    const sum = arr.reduce((acc,curr)=> acc + curr);
    return sum / arr.length;
    
}

const nums = [5, 3, 1, 4, 2];
console.log(findTheAvrage(nums))