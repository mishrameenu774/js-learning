// let a = 10
// const b = 20
// var c = 300

let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log(a) //this line of code is block scope
}


//console.log(a) //this won't be print because
// console.log(b) //this won't be print
//console.log(c) //this has printed but this code has an issue so please don't use it beacuse it is related to var

//console.log(a) // this line of code is global scope

//Note: scoping of windows and node are different.


//function under function

function one(){
    const username = "Meenu"

    function two(){
        const website = "youtube"
        //console.log(username)
    }
   // console.log(website) //it won't be print because scope of this code is not global 

    two() //it will execute i.e output mai jo meenu aaya hai vo iski wjh se aaya hai na ki one ki wjh se
}

one() //this is not execute because we didn't give any return or print statement into one function

//nested function means child function can accessed parent function.

if(true){
    const username = "Meenu"

    if(username === "Meenu"){
        const website = " youtube"
        //console.log(username + website)
    }

    //console.log(website) //out of the scope
}

//console.log(username) //out of the scope


// ++++++++++++++++++++++++++++ interesting concept +++++++++++++++++++++++++++++++++++

console.log(addOne(5)) // agar hum function ko pehle tarike se define krte hai tho hum function ko call after declaration and before declaration bhi kar sakte hai
//first way
function addOne(num){
    return num+1
}

// addOne(5)


addTwo(8) //agar hum function ko kisi variable k andar store krke declare krte hai tho hum function ko call sirf after declaration hi kar skte hai before declaration mai error show hoga.
//second way
const addTwo = function(num){
    return num+2
}

//addTwo(8)