// kis tarike se data ko memory mai store kiya jaata hai aur access kiya jaata hai is basis par data ko 2 parts mai divide kiya gya hai.

// JavaScript is a Dynamic language

//  Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


//Example of Symbol Data Type
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id === anotherId); 

// representation of BigInt
const bigNumber = 3456543576654356754n


//Reference (Non Primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Meenu",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//we have two types of memory
//1) Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Meenu Mishra . com"
let anotherName = myYoutubeName
anotherName = "chaiAurCode"

console.log(myYoutubeName)
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "mkm@google.com"

console.log(userOne.email)
console.log(userTwo.email);
