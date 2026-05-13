// Q. Write a javascript program to remove all white spaces from a string?


function removeSpaces(str){
    let result = ""
    for(let i = 0; i <str.length;i++){
        if(str[i] !== " "){
            result += str[i]
        }
    }
    
    return result;
}

const str = "Java Script";
let outPut = removeSpaces(str)
console.log(outPut);