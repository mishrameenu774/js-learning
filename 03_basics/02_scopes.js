// let a = 10
// const b = 20
// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log(a) //this line of code is block scope
}


//console.log(a) //this won't be print because
// console.log(b) //this won't be print
console.log(c) //this has printed but this code has an issue so please don't use it beacuse it is related to var

console.log(a) // this line of code is global scope

//Note: scoping of windows and node are different.


//function under function
