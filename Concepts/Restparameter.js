// Q. Waht is rest parameter;
// Ans . The rest parameter syntax allows a function to accept an indefinite number of arguments as an array,

function sum(...theArgs){
    let total = 0;
    for(const arg of theArgs){
        total += arg;
    }
    return total;
}

console.log(sum(1,2,3,4))

