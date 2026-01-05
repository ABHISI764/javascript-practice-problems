// Q. Write a javascript program to find duplicate characters in a string?

function findDuplicatesWithSorting(str) {
    let duplicates = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j] && !duplicates.includes(str[i])) {
          duplicates.push(str[i]);
        }
      }
    }
    return duplicates;
  }
  
  console.log(findDuplicatesWithSorting("testing"));  // Output: ['t']
  