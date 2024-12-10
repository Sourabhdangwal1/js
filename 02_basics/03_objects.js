//singleton
// when we declare objects through literals singleton does not  become else when we declare through constructor singleton will become
//object.create//constructor method

const mySym = Symbol("key1") //it is a symbol type of a datattype
//it is a object literal method
const JsUser = {
    name: "Hitesh",//here name is considered as a string behind the scenes
    "full name":"Om Jai",
    location: "Nainital",
    [mySym]:"mykey1",//this a syntex of declaring a symbol
    email: "om@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"]
}
//to access object
// console.log(JsUser.email); //cannot be used when variable(or key) name has more than two words for example full Name
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); //only this way we can access because full name has mor than one word
// console.log(JsUser["mySym"]); //using box bracket or square bracket is compulsory for Symbol

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//to freeze changes in object
// JsUser.email = "hitesh@microsoft.com"//will not chnage because we already freezed the object so it will not change
// console.log(JsUser);

JsUser.greeting = function(){ // Defining function for the object


   console.log("Hello JS USER");

}
console.log(JsUser.greeting);//it gives refrence to the function in object

console.log(JsUser.greeting());//it complete function functionality    

//note   we can also update function like we updated variables like
// JsUser.greeting = function(){ // Defining function for the object


//     console.log(`Hello JS USER , ${this.name}`);
 
//  }

JsUser.greetingTwo = function(){ // Defining function for the object


    console.log(`Hello JS USER , ${this.name}`);
 
 }




 console.log(JsUser.greetingTwo);

console.log(JsUser.greetingTwo());





 