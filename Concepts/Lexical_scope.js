 // Q. What is Lexical Scope 
/* Ans. variables declared outside of the function
 can be accessed by the functions defined within it */

 function outerFunction(){
    let outerVar = 'Outer Variable';
    function innerFunction(){
        console.log(outerVar)
    }
    innerFunction()
}
outerFunction()