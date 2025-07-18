// Q. What is Garbage Collector in javascript
// Ans. JavaScript has automatic garbage collection, which means it automatically frees up memory that's no longer used or referenced.
// How It Works:
// JavaScript uses an algorithm called mark-and-sweep.
// 1. Mark: The garbage collector starts from "roots" (like window, local variables in scope) and marks everything reachable.
// 2. Sweep: It then deletes (frees) anything not marked — i.e., unreachable data.

function createUser() {
    let user = {
      name: "Abhishek",
      age: 28,
    };
  
    return user;
  }
  
  let user1 = createUser(); // user1 is now referencing the object
  
  // If we do this:
  user1 = null; // 🚫 no reference to the object anymore
  
  // ✅ Garbage Collector will clean up the memory occupied by the user object.

 // Explanation:
  // When user1 = null, the object created in createUser() is no longer reachable.
  // The garbage collector sees it's unreachable and removes it from memory.
// 🧠 Why This Matters:
  // Avoid memory leaks:
// Don’t keep unnecessary references in variables, global objects, closures.
// Clean up listeners, intervals, and large structures when not needed.
