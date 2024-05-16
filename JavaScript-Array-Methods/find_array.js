// Q. find method
/* 
Ans. 
1. The find() method returns the value of the first element that passes a test.
2. The find() method does not change the original array.
*/

const items = [
    { name: "Bike",     price: 100 },
    { name: "TV",       price: 200 },
    { name: "Album",    price: 10 },
    { name: "Book",     price: 5 },
    { name: "Phone",    price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 }
]

const result = items.find((item)=>{
    return item.name === "Book"
})
console.log(result)