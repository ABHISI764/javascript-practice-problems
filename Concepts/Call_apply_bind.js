// Q. what is call apply bind 
/* Ans. 
call  :-  using call we can borrow function from another object.
Apply :- aplly same like call only deffrence is we pass argument as array
bind : bind is same diffrence is bind retrun new function and arguments bound to it
Video URL :- https://www.youtube.com/watch?v=75W8UPQ5l7k&t=511s
*/

let name = {
    firstName: "Akshay",
    lastNmae: "Saini",
}
let printFullName = function (homeTown, state) {
    console.log(this.firstName + " " + this.lastNmae + " From " + homeTown + ", " + state)
} 

let name2 = { 
    firstName: "Sachin ",
    lastNmae: "Tendulkar",
}

// function borrowing
printFullName.call(name2, "Mumbai", "Maharastra");
// apply method
printFullName.apply(name2, ["Mumbai", "Maharastra"]);
// bind method
let printMyName = printFullName.bind(name2, "Mumbai", "Maharastra")
console.log(printMyName())




// bind Method: 
// The bind() method allows an object to borrow a method from another object without copying.
const person1 = {
    firstName: "John ",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person2 = {
    firstName: "Elon",
    lastName: "Musk"
}

  const result = person1.fullName.bind(person2);
  console.log(result())