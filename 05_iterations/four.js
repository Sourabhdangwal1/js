const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}  //not iterable using for in  loop 
 for (const [key,value] of map) {
    console.log(key + " " + value);
    
 }//iteratable using for of loop

 

arr=[1,2,3,4,5]
for (const element of arr) {
    console.log(element);
    
} //it prints values by default

for (const [key,value] of arr.entries()) {
    console.log(key+" "+value);
    
}//if we want to print key and values then we can use tghis method


for (const key in arr) {
    console.log(key);
    
}  //it prints keys by default

for (const key in arr) {
    console.log(key + "" + arr[key]);
    
}//if we want to print key and values then we can use tghis method