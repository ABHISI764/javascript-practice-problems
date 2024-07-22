/* The indexOf() method of Array instances returns the first index at 
which a given element can be found in the array, or -1 if it is not present. */

/* The indexOf() method returns the position of the first occurrence
 of a value in a string. */


 // Method 1 :-
let text = "Hello world, welcome to the universe.";
let result = text.indexOf("welcome");
console.log(result);

// Method 2 :

function updateVegetablesCollection(veggies, Givenveggie) {
  if (veggies.indexOf(Givenveggie) === -1) {
    veggies.push(Givenveggie);
    console.log(`new veggies added ${veggies}`);
  } else {
    console.log(`${Givenveggie} already exist`);
  }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];
updateVegetablesCollection(veggies, "spinach");


