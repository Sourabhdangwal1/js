//console.log("2" > 1) //true
//and so on


// avoid these types of conversions
console.log(null > 0)//false
console.log(null == 0)//false
console.log(null >= 0)//true

//equality check (==) and comparison check (< >  <=  >=)works differently
//compaison converts null to a number,treating it as a zero
console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false



// ===(it also check that data type is also same between the elements(or a number) whom we are comparing)
console.log("2"===2)
