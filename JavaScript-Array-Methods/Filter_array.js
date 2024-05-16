// Q. Javascript Array filter()
/* Ans. The filter() method returns a new array with all elements
 that pass the test defined by the given function.
 1.arr.filter(callback(element), thisArg)
 2. callback - The test function to execute on each array element; 
 returns true if element passes the test, else false. It takes in:
 2. element - The current element being passed from the array.
 3. The filter() method does not change the original array.
 4. filter() does not execute callback for array elements without values.
*/

// Example 1 -

const items = [
    { name: "Bike",     price: 100 },
    { name: "TV",       price: 200 },
    { name: "Album",    price: 10 },
    { name: "Book",     price: 5 },
    { name: "Phone",    price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 }
]
const newItems = items.filter((item)=>{
    return item.price <= 100;
})
console.log(newItems)


// Example 2:- 


// function filteredPrices(element) {
//     return element > 2000 && !Number.isNaN(element);
// }
// const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]
// const result = prices.filter(filteredPrices);
// console.log(result) // [ 3000, 5000, 8000 ]