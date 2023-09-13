//number conversion

// let score = 33
// // let score1 = "33abc"

// // let score1 = null
// // let score1 = undefined
// // let score1 = true
// let score1 = "Meenu"

// console.log(typeof score)
// console.log(typeof (score))

// console.log(typeof score1)


// let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber)

// let valueInNumber1 = Number(score1)
// console.log(typeof valueInNumber1);
// console.log(valueInNumber1)


//agar kisi number ko convert krna chahte hai tho number easily convert ho jaata hai number ("33") => 33
// agar kisi alphanumeric or string ko number mai krna chahte hai tho result mai Nan milega  ("33abc") => NaN (Not a number)
//agar kisi boolean ko number mai convert chahte hai tho output mai 1 milega (true) => 1 ;false => 0
//agar null ko number mai convert krna chahte hai tho output mai 0 milega (null) => 0
//agar undefined ko number mai convert krna chahte hai tho output mai NaN milega (undefined) => NaN


//boolean conversion
/*let isLoggedIn = undefined

let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoogedIn)
console.log(booleanIsLoogedIn)*/

// agar kisi number ko string ko boolean mai convert krte hai tho result mai true milega 1=> true ; "meenu" => true
// agar empty string ko boolean mai convert krte hai tho output mai false milega ("") => false
// agar null ko boolean mai convert krte hai tho output mai false milega (null) => false
// agar undefined ko boolean mai convert krte hai tho output mai false milega (undefined) => false



//string conversion
/* let str1 = "hello"
let str2 = " Meenu"

let str3 = str1+str2
console.log(str3)

/*agar hum conversion k time par string pehle likhte hai tab saari values string mai convert hoti hai 
 whi agar number pehle likhte hai tab values ko number ko convert krti hai*/
/*console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2) //ismai humne pehle string likha hai tho saari values string ki trh treat hogi tho output milega 122
console.log(1+2+"2") //ismai humne pehle number likha hai tho number ki trh treat hua hai tho output milega 32

console.log( (3 + 4) * 5 % 3)*/

//not good practice don't do that
// console.log(true)
// console.log(+true)
// console.log(+"") 

// this code is correct but we can't use it as a coorporate level
/*let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1)
console.log(num2)
console.log(num3)*/

let gameCounter = 100
++gameCounter
console.log(gameCounter)