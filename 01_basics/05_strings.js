const name = "om"
const repoCount = 50 //git

console.log(name + repoCount + "value"); // not recomended for syntex
//we will use backticks ``
console.log(`Hello my name is ${name} and my repo count in git is ${repoCount}`);
const gameName = new String('hiteshhc')
const gameNameone=new String('hitesh-hc')


console.log(gameName[0])
console.log(gameName.__proto__)



console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))



const newStringOne = "  hitesh "
console.log(newStringOne)
console.log(newStringOne.trim) //remove whitespaces frpm start and end

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('sundar')); //true or false
console.log(gameNameone.split('-'))//here - is a seperator it will seperate a string according to -






const newString = gameName.substring(0,4)//from 0 to 3 choses element in string
//it cannot use negative values

console.log(newString)

const anotherString = gameName.slice(-8,4)//can use negative value
console.log(anotherString);





