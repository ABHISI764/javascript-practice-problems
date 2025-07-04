//The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

const user = {
    name: "Alice",
    address: {
        street: "123 main st",
        city: "Anytown"
    }
};

// Without optional chaining (requires explicit checks)
let streetNameTraditional = user && user.address && user.address.street;
console.log("Without optional chaining : ",streetNameTraditional)

// With optional chaining
let streetNameOptinal = user?.address?.street;
console.log("With optional chaining : ",streetNameOptinal)

// Without optional chaining (would throw an error) but with optional chaining showing only undefined
let undefinedTest = user?.address?.testing;
console.log("testing undefine",undefinedTest)