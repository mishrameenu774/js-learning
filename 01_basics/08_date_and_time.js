// Dates

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 26)
// let myCreatedDate = new Date(2023, 0, 26, 7, 17) //agar single digit mai month likhenge tho 0 se start krna hoga 0 => jan
// let myCreatedDate = new Date("2023-01-14") //agar kisi specific format mai date ko likhte hai tho month ko 1 se declare krna hoga

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))



let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);


let date = newDate.toLocaleString('defult',{
    weekday: "long"
    
})

console.log(date)