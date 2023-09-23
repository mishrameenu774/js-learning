//difference between var let const

// 1) var is only used in old JS but let and const is used in new js
// 2) var function scoped hota hai but let and const braces scoped hota hai ==>var apne parent function main kahi bhi use ho sakta hai.
// 3) var adds itself to the window object but let and const doesn't adds



//function scoped example.
function abcd(){
    for(var i=1; i<12;i++){
        console.log(i);
    }
    console.log(i); //it will execute because we use var keyword 
}
// abcd();

//braces scoped example
function scope(){
    for (let i = 0; i < 12; i++) {
        console.log(i);  
    }
    // console.log(i); //it will not execute because we let keyword
}
scope();