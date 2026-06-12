
// Create 

const hashTable = new Map();

// Insert
hashTable.set("name", "TestUser1");
hashTable.set("city", "Banglore");
hashTable.set("age", 21);

// Update
hashTable.set("age", 22);

// Delete
hashTable.delete("city");

// Check Key Exists
console.log(hashTable.has("name"));

// check size
console.log(hashTable.size);

console.log(hashTable.get("name"));
console.log(hashTable.get("age"));
console.log(hashTable.get("city"));
