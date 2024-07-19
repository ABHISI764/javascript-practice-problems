
/*
Method 1: we can export like this
export function multiply(a,b,c){
    return a * b * c;
}
*/

// Method 2:

/* function multiply(a,b,c){
    return a * b * c;
}

function addition(a,b,c){
    return a + b + c;
}
*/
function multiply(a,b,c){
    return a * b * c;
}

function addition(a,b,c){
    return a + b + c;
}

export {multiply as mul, addition as add}
