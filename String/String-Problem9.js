// Q. Write a javascript program to reverse each word of a given string?

function reverseWordsLoop(str) {
    let words = str.split(" ");
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      let reversedWord = "";
      for (let j = words[i].length - 1; j >= 0; j--) {
        reversedWord += words[i][j];
      }
      result.push(reversedWord);
    }
    return result.join(" ");
  }
  console.log(reverseWordsLoop("Keep it simple"));