//immediately invocked function
// to remove global scope polution
(function chai(){  //named iife
    console.log("chai")
})();  
// semicolan is important to end code
//    |
//  execution call

((name)=>{
    console.log(name);
})("om")