class HashTable {
    constructor() {
      this.table = {};
    }
    set(key, value){
      this.table[key] = value;
    }
    get(key){
      return this.table[key];
    }
    remove(key){
      delete this.table[key]
    }
    has(key){
      return key in this.table;
    }
  }
  
  const ht = new HashTable();
  
  // Insert
  ht.set("name","TestUser1");
  ht.set("role", "Mobile App Developer");
  
  //Delete
  ht.remove("name");
  
  console.log(ht.get("name"));
  console.log(ht.get("role"))
  console.log(ht.has("role"));
  