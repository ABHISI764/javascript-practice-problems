// Q. what is Temporal Dead Zone (TDZ) in JavaScript.
// Ans. The Temporal Dead Zone (TDZ) is the period between when a variable is declared 
// with let or const and initialized, during which accessing the variable will throw a ReferenceError

// Example .
console.log(name); // ❌ ReferenceError: Cannot access 'name' before initialization
let name = "Abhishek";

// Explanation : Even though name is declared with let, you can't use it before the line where it is initialized.
// This period — from entering the scope to initialization — is the Temporal Dead Zone.