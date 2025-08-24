const buttons = document.querySelectorAll('.button')

buttons.forEach( function (button){
   button.addEventListener('click',function (e){
    console.log(e.target)
    if(e.target.id==='grey'){
        document.body.style.backgroundColor = 'grey'
    }
    if(e.target.id==='white'){
        document.body.style.backgroundColor = 'white'
    }
    if(e.target.id==='blue'){
        document.body.style.backgroundColor = 'blue'
    }
    if(e.target.id==='yellow'){
        document.body.style.backgroundColor = 'yellow'
    }
   })
});     