const acountId = 14453 // remains constant cant change its value
let acountEmail = "abc@google.com" // recomended to use
var acountPassword = "12345" // not recomended it does not follow scoping may be if i change acount password in other file may this can also get changed
let acountState //undefined
/*
isue in blockscope and functional scope for var
*/

acountCity = "manali" //this can also used but recomended to  use it after defining it

// acountId = 2 // gives error
console.log(acountId);
acountEmail = "om@google.com"
acountPassword = "1111"
acountCity = "Bengaluru"
console.table([acountId,acountEmail,acountPassword,acountCity,acountState])//this is used to crete table 
//as we can see in our output values changed for good except dor const (because these are fixed for good)




