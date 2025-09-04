// Q. Write a JavaScript program to count the total number of occurrences of a given character in a string? Nologies

function CountDublicate(str, targetChar) {
    let check = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i]== targetChar){
            check++
        }
    }
    return check;

}
const str = "Nologies";
const targetChar = "o";
console.log(CountDublicate(str, targetChar))