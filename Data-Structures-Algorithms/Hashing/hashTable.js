class HashTable {
    constructor(size = 10){
        this.table = new Array(size);
        this.size = size;

    }
    hash(key){
        let total = 0;
        for(let char of key){
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }
    set(key, value){
        const index = this.hash(key);
        if(!this.table[index]){
            this.table[index] = [];
        }
        const bucket = this.table[index];
        for(let pair of bucket){
            if(pair[0] ===key){
                pair[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }
    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket) return undefined;

        for(let pair of bucket){
            if(pair[0] === key){
                return pair[1]
            }
        }
        return undefined;
    }
}

const ht = new HashTable(5);

ht.set("ABC", {d: 1,name: "John"});

ht.set("CAB", {
  id: 2,
  name: "Mike"
});

ht.set("BCA", {
  id: 3,
  name: "David"
});

console.log(ht.table)
console.log(ht.get("ABC"));
console.log(ht.get("CAB"));
console.log(ht.get("BCA"));