// Q. what is Currying in JavaScript
/*
Ans. The curried functions can be called with one argument at a time,
 and they return a new function that expects the next argument.
*/

function curriedAdd(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}
console.log(curriedAdd(1)(2)(3));

// Example 2:-

function greet(name){
    return function(morning){
        return function(punchuation){
            return `${name} ${morning} ${punchuation}`
        }
    }
}
console.log(greet('John') ('Good morning')('!'))