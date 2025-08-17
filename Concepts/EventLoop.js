// Q. What is the Event Loop in JavaScript?

/* Ans. JavaScript is single-threaded — it can only do one thing at a time.
    * But in real-world apps, we need to handle asynchronous tasks (like API calls, setTimeout, promises, etc.).
    * The event loop is the mechanism that allows JavaScript to manage asynchronous operations while keeping the code execution non-blocking.
    It continuously checks:
    * 1. Call Stack – Are there functions currently being executed?
    * 2. Callback/Task Queue – Are there any pending tasks waiting to run?
    * 3. If the call stack is empty, the event loop pushes the next task from the queue into the call stack.
    
     ⚙️ How it works step by step:
    * 1. JavaScript executes code line by line (synchronous code goes first).
    * 2. If it encounters an asynchronous task (like setTimeout), it sends it to the Web APIs (browser).
    * 3. Once completed, the callback is placed in the Task Queue (or Microtask Queue for promises).
    * 4. The Event Loop keeps checking — if the Call Stack is empty, it takes the task from the queue and pushes it to the stack.
    
     Why this order?:
    * console.log("1") → runs immediately.
    * setTimeout(..., 0) → sent to Web API → then Task Queue.
    * Promise.resolve() → goes to Microtask Queue (higher priority than normal tasks).
    * console.log("4") → runs immediately.
    * Event loop → sees stack empty → executes microtasks first → prints "3".
    * Then executes normal task → prints "2".
*/

// Example : 

console.log("1: Start");

setTimeout(() => {
  console.log("2: Timeout finished");
}, 0);

Promise.resolve().then(() => {
  console.log("3: Promise resolved");
});

console.log("4: End");

// Output : 
/*
1: Start
4: End
3: Promise resolved
2: Timeout finished
*/