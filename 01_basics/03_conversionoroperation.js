let score1=33
let score2="33"
let score3="33abc"
console.log(typeof score1)//number
console.log(typeof score2)//string
console.log(typeof score3)//string

let valueInNumber = Number(score2) //to change into number
let valueInNumber1 = Number(score3)

console.log(typeof valueInNumber) //number
                                 
console.log(typeof valueInNumber1)//number

console.log(valueInNumber) //33

console.log(valueInNumber1) //Nan(not a number)
// if we convert any string like 33abc int a number its type may show a number but its output still can be NaN

//coversion in number
//"33" =>33
//"33abc" =>NaN
//true => 1; false =>0

//conversion into string
//1=>true; 0=>false
//""=> false
//"om"=>true

// console.log(2+2);
// console.log(2**2);//2 to the power 2
//and so on

// let str1="hello"
// let str2="om"
// let str3=str1 + str2
// console.log(str3);

console.log("1" +2)//12  //starting type is string so whole answer will get converted into string
console.log(1+ "2");//12 //number cant do addition with string so it is also string
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32 //1+2=number then 3+"2"=string
let x1=1 + "2"
let x2="1" + 2 + 2
let x3=1 + 2 + "2"
console.log(typeof x1)//string
console.log(typeof x2)//string
console.log(typeof x3)//string
console.log(+true)//1
let num1,num2,num3
num1 = num2 = num3 = 2+2//not recomended

let gamecounter = 100
++gamecounter;
console.log(gamecounter);//101
 //prefix postfix





