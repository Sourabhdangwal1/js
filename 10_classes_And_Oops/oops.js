const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


//constructor function method to create multile objects having specific properties
// This is a blueprint to create multiple objects

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this//not necessary
}

const userOne = new User("hitesh", 12, true)//new is important to create new object everytime

// on using new
// A new empty object is created automatically.

// this refers to that new object.

// Properties are attached to that object.

// The object is returned and stored in user1.


const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);