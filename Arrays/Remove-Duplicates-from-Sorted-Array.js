// Q. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    let withoutDublicate = [];
    for (let i = 1; i < nums.length; i++) {
      if (withoutDublicate.indexOf(nums[i]) === -1) {
          withoutDublicate.push(nums[i])
      }
    }
    return withoutDublicate;
  }
  let nums = [1,1,2];
  console.log(removeDuplicates(nums));// 1,2