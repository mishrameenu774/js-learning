//second way to create object using constructor
const tinderUser = new Object()
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Meenu"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

//first way to create object using literals
const tinderUser1 = {}
// console.log(tinderUser1)

//creating object under object
const regularUser = {
    email: "mkm@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Meenu",
            lastName: "Mishra"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName)


//How to merge objects together
const obj = {1:"a", 2: "b"}
const obj1 = {3: "a", 4: "b"}
const obj2 = {5: "a", 6: "b"}

const obj3 = {obj, obj1, obj2} // ismai objects combine nhi hote hain given object new object k andar store ho jaate hai.
// console.log(obj3)

// methods to combining objects 1) assign 2)spread operator

// const obj4 = Object.assign(obj, obj1, obj2)

// const obj4 = Object.assign({},obj, obj1, obj2) //this is a best practice because curly braces {} shows target and other values show sources but we use it less

const obj4 = {...obj, ...obj1, ...obj2}
console.log(obj4)


//jab bhi database se values aayegi tho values ko hum arrays k andar object bnakar store krte hai
const users = [
    {
        id: 1,
        email: "mkm@gmail.com"
    },

    {
        id: 1,
        email: "mkm@gmail.com"
    },

    {
        id: 1,
        email: "mkm@gmail.com"
    },
  
]

users[1].email;

console.log(tinderUser)
//print keys
console.log(Object.keys(tinderUser))
// values
console.log(Object.values(tinderUser))
//print entries
console.log(Object.entries(tinderUser))

//agar check karna hai ki koi property object k andar hai ya nhi
console.log(tinderUser.hasOwnProperty('isLoggedIn'))