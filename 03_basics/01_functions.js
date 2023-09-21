function sayMyName() {
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("N");
    console.log("U");
}

//function call
//sayMyName()

/*function addTwoNmubers(number1, number2) {
    console.log(number1 + number2)
}*/

//addTwoNmubers(3, 4)   //7
//addTwoNmubers(3, "4") //34
//addTwoNmubers(3, "a") //3a
//addTwoNmubers(3, null) //3

//const result = addTwoNmubers(3,5)
//console.log("Result: ", result) //focus on this concept is concept mai maine sikha ki agar hum function ko kisi variable mai store krte hai aur uski value ko print karate hai thooutput mai undefined milega. 


function addTwoNmubers(number1, number2){
    // let result = number1 + number2
    // return result
    //console.log("Meenu") //this code will not print kyuki yeh return statement k baad likhi hui hai vhi agar yeh return statement k pehle likha hota tho yeh print ho jaata.

    return number1 + number2
}
const result = addTwoNmubers(3,5)
//console.log("Result: ", result)




function loginUserMessage(username = "mkm"){ //hum default value bhi de skte hai undefined k case se bachne k liye
    if(username === undefined){ // or if(!username) dono mai se kuch bhi likh skte hai  {
        console.log("please enter a username");
        return //yaha par return statement isiliye use taaki aage ki line execute mhi ho
    }
    return `${username} just logged in`
}

//loginUserMessage("Meenu") //iska output kuch bhi nhi aaya ktuki hume ise pehle variable mai store krna hoga ya phir console.log ki help se print krana hoga.
// console.log(loginUserMessage("Meenu"))
// console.log(loginUserMessage())


/*function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200)) */

/*function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600))*/

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 800, 1000))


const user = {
    username: "Meenu",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username: "madhu",
    price: 199
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 600, 1000]))


