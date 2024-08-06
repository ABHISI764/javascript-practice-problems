/*The includes() method of Array instances determines whether an array includes
 a certain value among its entries, returning true or false as appropriate. */

/*The includes() method returns true if a string contains a specified string.
Otherwise it returns false. */

 // Method 1:- 
 const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));

// Method 2:- 
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result)