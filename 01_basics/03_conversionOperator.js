// let score = 33
// // let score1 = "33abc"

// // let score1 = null
// // let score1 = undefined
// // let score1 = true
// let score1 = "Meenu"

// console.log(typeof score)
// console.log(typeof (score))

// console.log(typeof score1)

// //conversion
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



let isLoggedIn = null

let booleanIsLoogedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoogedIn)
console.log(booleanIsLoogedIn)

// agar kisi number ko string ko boolean mai convert krte hai tho result mai true milega 1=> true ; "meenu" => true
// agar empty string ko boolean mai convert krte hai tho output mai false milega ("") => false