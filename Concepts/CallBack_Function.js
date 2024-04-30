// Q. what is CallBack Function

/* Ans. In JavaScript, you can also pass a function as an argument to a function.
 This function that is passed as an argument inside of another function
  is called a callback function. */

sum(display, 5, 4);
function sum(callback, x, y) {
    let result = x + y;
    callback(result)
}

function display(result) {
    console.log(result)
}