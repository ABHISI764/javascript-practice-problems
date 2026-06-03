// Q. Combine two arrays and develop a third array. Consider element by element while combining

// Method 1: using for loop

const arr1 = [1, 2, 3, 4];
const arr2 = ['A', 'B', 'C', 'D'];

let combine = [];

for(let i = 0; i <arr1.length; i++){
    combine.push([arr1[i],arr2[i]])
}

console.log("Combine array is ",combine)
// output [ [ 1, 'A' ], [ 2, 'B' ], [ 3, 'C' ], [ 4, 'D' ] ]
