// Q. What is Hgher Order Functions
// Ans. A Higher-Order Function in JavaScript is a function that akes another function as an argument or Returns a function as its result.
// 1. Takes another function as an argument, or
// 2. Returns a function as its result.

// Support Url : https://www.freecodecamp.org/news/higher-order-functions-explained/

// Higher Order Function that accepts a callback function
function higherOrderFunction(callback) {
    // Performing some operations
    console.log("Executing the higher order function...");
  
    // Calling the callback function
    callback();
  }
  
  // Callback function to be passed to the higher order function
  function callbackFunction() {
    console.log("Executing the callback function...");
  }
  
  // Calling the higher order function with the callback function as argument
  higherOrderFunction(callbackFunction);



  //2. Returning Functions
  // Higher Order Function that returns a function
function createGreeter(greeting) {
    // Returning a new function
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    };
  }
  
  // Creating a greeter function with a specific greeting
  const greetHello = createGreeter("Hello");
  greetHello("John"); // Output: Hello, John!
  
  // Creating another greeter function with a different greeting
  const greetGoodbye = createGreeter("Goodbye");
  greetGoodbye("Alice"); // Output: Goodbye, Alice!


// 3. Abstraction
// Higher Order Function for performing a specified operation on each element of an array
function performOperationOnArray(array, operation) {
    return array.map(operation);
  }
  
  // Callback function for doubling each element of an array
  function double(number) {
    return number * 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = performOperationOnArray(numbers, double);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

  // Popular Higher Order Functions in JavaScript
  Array.prototype.map()
  Array.prototype.filter()
  Array.prototype.reduce()
  setTimeout(callback, delay)
  setInterval(callback, interval)
