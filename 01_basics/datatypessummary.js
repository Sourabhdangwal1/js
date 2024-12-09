//primitive
//7 types : String, Number ,Boolean ,null,undefined ,Symbol, BigInt+

 const id=Symbol('123')
 const anootherId=Symbol('123')
 console.log(id === anootherId) //false

 const bigNumber =3456789124541126n //by applying n this becomes bigInt


//Refrence (Non Primitive)
//Array , Object , Functions

 const heroes = ["shaktiman", "naagraj", "doga"]; //arrays

 const myobj= {     //obj
   name: "om",
   age: 0,
 }

 //function
 const myFunction= function(){
    console.log("Hello World");
 }

 console.log(typeof heroes) //object
 console.log(typeof myFunction) //function , but in detail when we study we get it is also known as function object or object function
 console.log(typeof myobj) //object
 console.log(typeof id)




 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // Stack(Primitive) (allocated using value), Heap(Non Primitivve) (allocated using refrence)

 // In Stack we get the copy of the variable we declared , means if another variable is given value of the previous variable it will not 
 //get direct value it will give its copy of that value
 let myYoutubename = "om"
 let anothername = myYoutubename
 console.log(myYoutubename)
 anothername = "om jai jagdish"

 console.log(anothername)
 console.log(myYoutubename)
 //no change in myYoutubename because it gives copy

 //non primitive directly reffer to the main value

let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}
userTwo = userOne
//userTwo will also refer to where user one is refering to in heap.
userTwo.email = "om@google.com"

console.log(userone.email) //om@google.com
console.log(userTwo.email) //om@google.com
//changes made in non primitive are real as they point towards real data in heap