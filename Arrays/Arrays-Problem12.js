// Q. Read all elements from an array in the reverse order? 

const arr = [1, 2, 3, 4, 5];

const reversed = arr.slice().reverse();
console.log("input arr", arr);
console.log("Output arr", reversed);

// Method 2: 

const arr = [1, 2, 3, 4, 5];
let reverseArr = [];

for(let i = arr.length -1; i >= 0; i--){
    reverseArr.push(arr[i])
}

console.log(reverseArr)