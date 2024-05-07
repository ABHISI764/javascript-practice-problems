// Q. what is Closures in JavaScript 
/* Ans . closure allows a function to access variables from its outer function or the global scope even 
after the outer function has finished executing. */

function outerFunction() {
    const outerVariable = 'i am from outer function'

    function innerFunction(){
        console.log(outerVariable)

    }
    return innerFunction()
}
const closureExample = outerFunction();
console.log(closureExample)

