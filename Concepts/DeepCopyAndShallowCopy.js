/* 
  Shallow Copy
  Definition: A shallow copy only copies the first level of the object/array.
  If the object contains nested objects, the copy will still reference the same memory for those nested objects.
  Changes to nested values in the copy will affect the original.
*/

/* 
  Deep Copy
  Definition: A deep copy creates a completely independent clone, including all nested objects/arrays.
  Changes in the copy do not affect the original.
  
*/



// normal method 

// var obj1 = {
//     name: 'dell'
// }
// var obj2 = obj1;
// obj2.name = "lenovo";
// console.log("obj1", obj1) 
// // problem obj1 property also changed 
// console.log("obj2",obj2) 


// shallow copy 
// var obj1 = {
//     name: 'dell',
//     address: {
//         street: 'Linkin road',
//         city: 'Delhi'
//     }
// }
// var obj2 = Object.assign({}, obj1);
// // var obj2 = {...obj1}
// obj2.name = "lenove";
// obj2.address.city = "mumbai";
// // problem is nested object change 
// console.log("obj1", obj1);
// console.log("obj2", obj2);

//  Deep copy (nested object does not change  )
// first convert in string then parse


var obj1 = {
    name: 'dell',
    address: {
        street: 'Linkin road',
        city: 'Delhi'
    }
}
var obj2 = JSON.parse(JSON.stringify(obj1))
// var obj2 = {...obj1}
obj2.name = "lenove";
obj2.address.city = "mumbai";
// problem is nested object change 
console.log("obj1", obj1);
console.log("obj2", obj2);