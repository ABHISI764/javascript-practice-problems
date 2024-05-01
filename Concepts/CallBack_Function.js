// Q. what is CallBack Function

/* Ans. In JavaScript, you can also pass a function as an argument to a function.
 This function that is passed as an argument inside of another function
  is called a callback function. */

// Example 1: 
sum(display, 5, 4);
function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

function display(result) {
    console.log(result)
}


// Example 2 : 

function performOperations(x,y,callback1,callback2,callback3){
    let sum = x + y;
    let subtraction	 = x - y;
    let multiplication = x * y;
    callback1(sum);
    callback2(subtraction);
    callback3(multiplication);
}
function handelSum(result){
    console.log("Sum",result)
}

function handelSubtraction(result){
        console.log("Subtraction",result)    
}

function handelmultiplication(result){
    console.log("Multiplication", result)
}

performOperations(5,3,handelSum,handelSubtraction,handelmultiplication)
//Sum 8
//Subtraction 2
//Multiplication 15