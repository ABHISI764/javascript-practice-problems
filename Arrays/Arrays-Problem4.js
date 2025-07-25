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

// solution using For


function avrage(num){
    if(num.length === 0) return null;
    let sum = 0;
    for(let i = 0; i < num.length;i++){
        sum += num[i];
    }
    return sum / num.length;
}

let num = [5, 3, 1, 4, 2];
console.log(avrage(num))