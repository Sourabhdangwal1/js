const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

//this is used to tell current concept  to acces  any specific scope


// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()  // sam,  welcome to website this happens because values are not hardcodeed as we used this variable so when username changed and come in context of that object scope this also changed

// console.log(this);  //{}

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//undefined
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  //  num1+num2 return hora hai

// const addTwo = (num1, num2) => ( num1 + num2 )

//agar curly braces me likha to return likhna padega agar bracket me likha to return nhi likhna padega

const addTwo = (num1, num2) => ({username: "hitesh"})
//object return

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()