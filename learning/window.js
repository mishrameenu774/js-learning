//  js language main kuch chije nhi hoti hai jo hum use kar sakte hai aur wo chije hume js se nahi balki browser se milti hai, aise saare features jo js ka part nahi hai but fir bhi use kar sakte hai unhe hum dhoond sakte hai ek particular object mein jiska naam hai window.

// IN other words js main kai saare features hai par kuch features jo hum use karte hai, wo features nhi hai par fir bhi use kar paate hai kyuki wo features js language use kar leti hai window se, aur window hai ek box of features given by browser to use with js.

// alert
// prompt
// console

// var a = 12;
// let b = 13;


let arr = [1, 2, 3];
arr.forEach((element, index) => { 
    arr[index] = element + 10; 
});
console.log(arr);


var arr1 = [1,2,3,25,47,25,3,65,0,7,91];
arr1.forEach(function(val, index){
    arr1[index] = val+2;
})