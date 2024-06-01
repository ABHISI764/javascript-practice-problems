// Q.  what is Rest parameters
// Ans. The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,

// Syntax:

/*... is the rest parameter (triple dots)
function functionname(...parameters)
{
statement;
}
*/

// Example :- 
function sum(...arg){ // ...arg is rest parameter
    let total = 0;
    for(let x of arg){
        total += x
    }
    return total
}
console.log(sum(1, 2, 3, 4)); // output 10
