//const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object
tinderUser.id = "1232abc"
tinderUser.name = "om"
tinderUser.isLoggedIn = false
console.log(tinderUser);
console.log(tinderUser.isLoggedIn)

// console.log(Object.keys(tinderUser)) //['id','name','isLoggedIn']
// console.log(Object.values(tinderUser))//gives values in object
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperties('isLoggedIn'))//to check whethwe this property exist in object



// const regularUser = {
// fullname: {
//     userfullname: {
//         firstname: "hitesh",
//         lastname: "chaudhary"
//     }
// }
// }
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a", 2:"b"}
// const obj2 = {3:"a", 4:"b"}

// //const obj3 = {obj1, obj2}//wrong method
// // const obj3 = Object.assign(obj1,obj2) //obj2 will get merge in obj1

// const obj3 = Object.assign({},obj1,obj2)//better way as we can have more than two objects so we assign an empty ibject first so that all object merge in object



// console.log(obj3);

// //but we will use mostly spread operator(...variable)
// const obj4 = {...obj1, ...obj2}//glas phod do paani spread hojayega


// const users = [  //array of objects //can be used in database

//     {
//         id: 1,
//         email:"om@gmail.com"
//     },
//     {
//         id: 2,
//         email:"om@gmail.com"
//     },
//     {
//         id: 3,
//         email:"om@gmail.com"
//     },
//     {
//         id: 4,
//         email:"om@gmail.com"
//     },
    
// ]


// console.log(user[1].email)

const course = {
        coursename: "js in hindi",
        price:"999", 
        courseInstructor: "om"
}
//course.courseInstructor //can be little bit comploicated when using it more than once so we will use destructoring
//destructoring

//poora na likhna pade
// const{courseInstructor} = course
//               |                 |
// kya value extract karni hai   kaha se value extract karni hai
      // in curly braces            om


// console.log(courseInstructor)


//or
const {courseInstructor: instructor} =course
console.log(Instructor)

//for api values comes in json 

//json
// {
//         "name": "om",
//         "coursename": "js in hindi",
//         "price": "free"
// }
