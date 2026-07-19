// What is a Set DataStructure?

/*
A Set is a built-in JavaScript data structure that stores only unique values.
❌ No duplicate values are allowed.
✅ Values are stored only once.
✅ Can store numbers, strings, objects, arrays, etc.
✅ Maintains insertion order.
 */


const mySet = new Set()
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2);
console.log(mySet)
mySet.delete(2)
mySet.add(4);
mySet.add(5);
console.log(mySet)
mySet.forEach(value => console.log(value))
mySet.clear()


const dubliCateArray = [1,2,2,3,4,5,5,6];
const uniqueArray = new Set(dubliCateArray);
const myUniqeArray = [...uniqueArray]

console.log("unique Array", uniqueArray)
console.log("unique Array", myUniqeArray)


let setA = new Set([1,2,3,4])
let setB= new Set([3,4,5,6,7])

const unionSet = new Set([...setA,...setB]);
console.log("result set",unionSet)

// finding intersection
let newNumber = new Set([1,2,3,4]);
let newNumber2 = new Set([2,4,,5,6])
let check = ([...newNumber]);
let find = check.filter((x)=> newNumber2.has(x))
console.log("find",find)


