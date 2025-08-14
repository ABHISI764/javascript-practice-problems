// Q. 1. What is Recursion?

/* Ans. Recursion is when a function calls itself until it reaches a stopping condition (called the base case).
    . Base Case → Stops the recursion (prevents infinite loop).
    . Recursive Case → Function calls itself with a smaller/simpler input.

    2. How Recursion Works — The Call Stack
    . When you call a function in JavaScript, it’s added to the call stack.
      With recursion:
      Each recursive call pauses the current one.
      Once the base case is reached, the stack unwinds (functions return one by one).
*/

// 1. Countdown Example
function countDown(n) {
    if(n<= 0){
        console.log("Done!")
        return
    }
    console.log(n)
    countDown(n -1)
}
countDown(5)

