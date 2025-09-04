// Q. Write a JavaScript program to count the number of occurrences of each character in a string?

function countCharacters(str) {
    let charCount = {};
    for (let char of str) {
      if (char === " ") continue;
      char = char.toLowerCase();
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    return charCount;
  }
  const str = "Nologies";

  console.log(countCharacters(str));
  