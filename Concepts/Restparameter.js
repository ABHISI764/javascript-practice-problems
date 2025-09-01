// Q. Waht is rest parameter;
// Ans . The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,
// Link URL :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

function sum(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}

console.log(sum(1,2,3,4))

