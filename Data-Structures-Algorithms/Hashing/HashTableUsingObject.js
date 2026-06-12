const hashTable = {};

// Insert
hashTable["name"] = "TestUser1";
hashTable["city"] = "Banglore"
hashTable["age"] = 22;

//Update
hashTable["age"] = 19;

//delete
delete hashTable["city"];

//Read
console.log(hashTable["name"]);
console.log(hashTable["age"])
console.log(hashTable["city"])