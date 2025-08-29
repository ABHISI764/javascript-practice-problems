// 🔹 What is a Constructor in JavaScript?

/* A constructor in JavaScript is a special function used to create and initialize objects.
When you call a constructor with the new keyword, it:

Creates a new empty object.

Sets the this keyword inside the constructor to point to that object.

Assigns properties/methods to this.

Returns the newly created object automatically. */

// Constructor Function Example
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.sayHello = function() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    };
  }
  
  // Creating objects using constructor
  const person1 = new Person("Abhishek", 28);
  const person2 = new Person("Neha", 25);
  
  console.log(person1.sayHello()); // Hi, I'm Abhishek and I'm 28 years old.
  console.log(person2.sayHello()); // Hi, I'm Neha and I'm 25 years old.

  
// 🔹 Class Syntax (ES6 Constructor)
class Person {
    constructor(name, age) {  // constructor method
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  const person3 = new Person("Rahul", 30);
  console.log(person3.sayHello()); // Hi, I'm Rahul and I'm 30 years old.
  