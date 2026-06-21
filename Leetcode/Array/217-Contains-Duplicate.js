// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containDublicate(nums){
    const seen = new Set();
    for (const num of nums){
        if(seen.has(num)){
            return true;
        }
        seen.add(num)
    }
    return false;
}

const testCase1 = [1, 2, 3, 1];
console.log(containDublicate(testCase1))