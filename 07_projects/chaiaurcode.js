
// Project - 1


const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
    button.addEventListener('click', function(e){
       console.log(e)
          console.log(e.target)
          if(e.target.id==='grey'){
          body.style.backgroundColor = "grey"
          }

            })
            });


            const form = document.querySelector('form')



// Project - 2

form.addEventListener( 'submit', function(e){
e.preventDefault()

const height = parseInt(document.querySelector('#height'))

const weight = parseInt(document.querySelector('#weight'))

const results = document.querySelector('#results')

} )
