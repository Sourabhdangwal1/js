const score = 400
console.log(score)


const balance = new Number(100)
console.log(balance);

console.log(balance.toString()) //balance is converted to String now we can apply String properties on it
console.log(balance.toString().length)
console.log(balance.toFixed(1)); //100 => 100.0

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));
 //124 it will give approximate value for number if its precision matches

//if number is 1123.8966 then it will give value in power

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))//10,00,000 in indian format


//+++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++


console.log(Math) //object Math
console.log(Math.abs(-4));//4
console.log(Math.round(4.6))//4
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4
console.log(Math.min(4,3,6,8));//3
console.log(Math.max(4,3,6, 8))//8

console.log(Math.random()) //create any number between 0 to 1
console.log((Math.random()*10)+1) //by multiplying 10 we get a numberr 1 to 10 and by adding one we make sure we dont get 0
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)






