// Q. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//    You may assume that each input would have exactly one solution, and you may not use the same element twice. 

//Example 1:
//Input: nums = [2,7,11,15], target = 9
// Output: [0,1]



function twoSum(num, target){
    for(let i = 0; i < num.length;i++){
        for(let j = 1; j < num.length;j++){
            if(num[i]+ num[j] == target){
                return [i , j];
            }
        }
    }
}

const nums = [2,7,11,15];
const target = 9;

console.log(twoSum(nums, target));