// Q. Conditions on Arrays

// Ans . You can check if elements in an array meet certain conditions using methods like every() and some().
 // every() checks if all elements pass the test.
 // some() checks if at least one element passes the test.



 const ages = [25, 30, 19, 45];

 const allAdults = ages.every(age => age >= 18);
 console.log(allAdults) // true
 
 const hasSenior = ages.some(age => age >= 60);
 console.log(hasSenior) // false


