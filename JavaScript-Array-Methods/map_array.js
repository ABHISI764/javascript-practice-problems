// Q. map()

/* Ans. 
1. map() creates a new array from calling a function for every array element.
2. map() does not change the original array.
3. array.map(function(currentValue, index, arr), thisValue) 
4. array.map(function(currentValue, index, arr), thisValue)
*/

// Example 1:-

const items = [
    { name: "Bike",     price: 100 },
    { name: "TV",       price: 200 },
    { name: "Album",    price: 10 },
    { name: "Book",     price: 5 },
    { name: "Phone",    price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 }
]
const newItems = items.map((item)=>{
    return item.name
})
console.log(newItems)