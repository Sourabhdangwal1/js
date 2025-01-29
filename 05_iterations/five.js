const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } ) //val will traverse over each index

// coding.forEach( (item) => {
//     console.log(item);
// } ) //using arrow function

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  //calliong already made function

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )    yes you can use other words in place of item, index, and arr when using the forEach method, but you cannot change their order because their positions represent specific parameters that forEach passes to the callback function. Here's how it works:

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )