//Singleton
//agar hum literals k through object create krte hai tho vo object singleton object nhi hota vhi agar object consturctor k through create krte hai tho vo object singleton object hota hai


//object literals

//const JsUser = {}   //this line means we created empty object.

//creating symbol
const mySym = Symbol("key")

const JsUser1 = {
    name: "Meenu",
    age: 21,
    location: "Delhi",
    email: "meenu@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "full name": "Meenu Mishra" ,//this object we can't access through first way so use second way to access this object.
    [mySym]: "myKey1"
}

//how to access object in js

//we have to ways to accessing data
//first way
// console.log(JsUser1.lastLoginDays);

//second way
// console.log(JsUser1["lastLoginDays"]);

// console.log(JsUser1["full name"])

// console.log(JsUser1[mySym])

//value change
JsUser1.email = "meenu@gmail.com"

//value ko change nhi kar sake
// Object.freeze(JsUser1)
JsUser1.email = "meenu@microsoft.com"
// console.log(JsUser1)


//creating functions
JsUser1.greeting = function(){
    console.log("Hello JS User");
}

JsUser1.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser1.greeting())
console.log(JsUser1.greetingTwo())


