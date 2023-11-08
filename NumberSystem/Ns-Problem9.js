// Q. Swap two int variables without 3rd variable?

let a = 5;
let b = 10;
console.log("Before Swapping");
console.log("a =", a);
console.log("b =", b);
[a, b] = [b, a];
console.log("After Swapping");
console.log("a =", a);
console.log("b =", b)


// same result using Addition and Subtraction 

// let a = 5;
// let b = 10;

// console.log("Before swapping:");
// console.log("a =", a);
// console.log("b =", b);

// a = a + b; // (5 + 10) a= 15; 
// b = a - b; // (15 - 10) b = 5;
// a = a - b; // (15 - 5) a = 10

// console.log("After swapping:");
// console.log("a =", a);
// console.log("b =", b);