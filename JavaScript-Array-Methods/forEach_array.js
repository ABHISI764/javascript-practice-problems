// Q. forEach() method

/* The forEach() method calls a function for each element in an array. */


const items = [
    { name: "Bike",     price: 100 },
    { name: "TV",       price: 200 },
    { name: "Album",    price: 10 },
    { name: "Book",     price: 5 },
    { name: "Phone",    price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 }
]

items.forEach((item)=>{
    console.log(item.name)
})