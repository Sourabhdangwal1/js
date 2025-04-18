 var x=document.getElementById('hello')
 x.addEventListener('click',()=>{
    console.log("hello");
    
 })

 document.getElementsByClassName('heading')

 document.getElementById('title').getAttribute('class')  //or use id
//  document.getElementById('title').setAttribute('class','test')//it wile override previous attribute


const title=document.getElementById('title')
title.style.backgroundColor="yellow"
title.style.borderRadius="5px"


//it gives contents

title.textContent //it will show all the thing even if you have removed it using css 

title.innerText  //it will show whichever is made visible on html code

title.innerHTML   //it also gives html tags

document.querySelector('h1')//first h1
document.querySelectorAll('h1')//all h1

document.querySelector('#title')
document.querySelector('.heading')

document.querySelector('input[type="password"]')

const myul=document.querySelector('ul')
// myul.querySelector('l1')
const turnGreen= myul.querySelector('l1')//it will gtake first list li only
turnGreen.style.backgroundColor = "green"
turnGreen.style.padding="10px"

//  document.querySelectorAll('li') //provide nodelist [li,li,li] (not array)  but very much similar to array
const tempLiList = document.querySelectorAll('li')
// tempLiList.style.color='yellow'  //it will give error
tempLiList[0].style.color = 'yellow'

//we cant apply map beacause it is not an array on node list but we can apply for each
tempLiList.forEach((l)=>{
l.style.backgroundColor='green'
})
tempClassList=document.getElementsByClassName('list-item')  //in this for each will not work as it gives HTML CVollection
// so we have to convert it
// Array.from(tempClassList) //now it becomes array
//we can convert node list into array
myConvertedArray=Array.from(tempClassList)
myConvertedArray.forEach(function(li){
   li.style.color='orange'
})