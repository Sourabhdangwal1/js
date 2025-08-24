// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout (function(){
//         console.log('Async task is completed');
//         resolve()
//     })
// })

// const promiseO = new Promise(function(resolve,reject){
//     setTimeout (function(){
//         console.log('Async task is completed');
//         reject()
//         resolve()
//     })
// })
// .then(function(){
//     console.log('task complete');
    
// })
// .catch(function(){
//     console.log('wrong answer so error');
    
// })
// output
// Async task is completed
// wrong answer so error



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })



// const promiseThree = new Promise(function (resolve,reject){

// setTimeout(function(){
//     resolve({username:'om' , email:'om@om.com'})
// },1000)
// })
// .then(function(user){
//     console.log(user)
// })



// const promiseFour = new Promise(function(resolve,reject){

//     setTimeout(function(){
//         resolve({username:'om' , email:'om@om.com'})
//     })
// })
// .then(function(user){
//     console.log(user.username);
//     console.log(user.email)
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))


const five = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
    if(!error){
        resolve({username:'om',email:'om@om.com'})
    }
    else{
        reject('ERROR : JS went wrong')
    }
},1000);
});
 async function consumeFive() {
   
   try {
    const response =  await five
    console.log(five);
   }
    catch (error) {
    console.log(error);
    
   }
 }
consumeFive();