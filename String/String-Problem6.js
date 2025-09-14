// Q. Write a javaScript program to remove all white spaces from a string?


function removeSpaces(str){
    let result = "";
    for(let char of str ){
        if(char !== " "){
            result += char
        }
    }
    return result

}
console.log(removeSpaces(" N o l o g i e s "));

function removeSpaces(str) {
    let space = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] != " ") {
        space += str[i];
      }
    }
    return space;
  }
  console.log(removeSpaces(" N o l o g i e s "));
  