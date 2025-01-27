function calculateCartPrice(...num1){
    return num1 //due to rest (...) it can give multiple values for example if we add multiple object in carts there prices can be shown
}
calculateCartPrice(200,400,600)


function calculateCartPrice2(val1, val2,...num1){
    return num1
}


calculateCartPrice2(200,400,500,200)
//val1=200 and val2=400 and ...num will take 500, 200(remaining values)

function login(username){
    if(!username){//if username is undefin ed then it is false if we apply not then it becomes true
        console.log("enter username")
        return//program end after code reaches return as it return to where it is called
    }
    return `${username} logged in`
}
function log(username="om"){ //here we have given default value if no value is passed then we can us default value in our code
    return `${username} logged in`
}
const result=login("om")


console.log(result)
user={
    name:"om",
    prices:100
}

function handleobject(anyobject){
    console.log(`   Username is ${anyobject.name} and price is ${anyobject.prices}`)
}
// handleobject(user)
handleobject({
  name:"om",
  prices:100  
});
function handlearray(anyarray){
console.log(anyarray)
}

function handlearray1(anyarray){
    console.log(anyarray)
}
handlearray1([10,20,40,50])
