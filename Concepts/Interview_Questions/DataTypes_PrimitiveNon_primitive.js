// Q. Data Types in JavaScript
// Ans . JavaScript has two main categories of data types:

/* 
1. Primitive Types (stored directly in memory, immutable)
2. Non-Primitive (Reference) Types (stored as references in memory) 
2️⃣ Primitive Data Types
📌 Definition:
     Single values
     Immutable (cannot be changed once created)
     Stored by value
List of Primitive Types:
1. String → Text
let name = "Abhishek";

2. Number → Integers & decimals (no separate int/float type)
let age = 25;
let price = 99.99;

3. Boolean → true or false
   let isOnline = true;

4. Undefined → Declared but not assigned
let x; // undefined

5. Null → Intentional empty value
let data = null;

6. Symbol (ES6) → Unique and immutable value (often for object keys)
let id = Symbol("id");

7. BigInt (ES2020) → For very large integers
let bigNum = 123456789012345678901234567890n;


3️⃣ Non-Primitive (Reference) Data Types
📌 Definition:
Can hold multiple values or complex data structures.
Stored by reference in memory (variable stores a pointer to the actual data).
Mutable.
1. Object → Key-value pairs
let person = { name: "Abhishek", age: 25 };

2. Array → Ordered collection of values
let fruits = ["Apple", "Mango", "Banana"];

3. Function → Block of reusable code
function greet() { console.log("Hello"); }

4. Date, RegExp, and other built-in objects also fall here.



*/
