const name = "Meenu"
const repoCount = 10

// concatenation of string

//1st Way
// console.log(name + repoCount + " value");

//2nd Way this way is called string interpolation
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)


//2nd way to declare string in js
const gameName = new String('Meenu-MM-com')

/*console.log(gameName)
console.log(gameName[0]);
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('u'))

const newString = gameName.substring(0, 4)
console.log(newString)


const anotherString = gameName.slice(-8, 4)
console.log(anotherString)*/

const newStringOne = "     Meenu     "
console.log(newStringOne.trim())

const url = "https://Meenu.com//meenu%20mishra"

console.log(url.replace('%20', '-'))

console.log(url.includes('Meenu'))

console.log(gameName.split('-'));
