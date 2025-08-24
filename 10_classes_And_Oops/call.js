function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


//  SetUsername.call(this, username) so here this is refering to object which we created using  createUser and if we will not use call function then that will poinmt to globelobject or some other object by that i mean this
// What .call(this) Does:
//When we use new createUser(...), JavaScript:

//Creates a new empty object → {}.

//Sets this inside createUser to point to that object.

//SetUsername.call(this, username) calls the SetUsername function, but sets this inside SetUsername to be the same object created by new createUser(...).

//So all properties like username, email, password get added to the same object.  


// Now, SetUsername(username) is a regular function call.

// Inside SetUsername, this will refer to:

// The global object (window in browsers),

// Or undefined in strict mode.

// ➡️ This means username will be set on the global object, not on your custom user object.