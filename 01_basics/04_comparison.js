//note: dhyaan rkhe jab bhi 2 values ka comparison kr rhe ho tho dono values ka data types same hona chahiye.

// console.log("2">1);
// console.log("02">1);

//avoid these types of comparisons
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);

//avoid these types of comparisons
console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);

//we have two types of checks
//by == and by ===
//== only check values but === checks values and data types both