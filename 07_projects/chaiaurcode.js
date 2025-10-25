
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

document.querySelector('form')

// this use case will give you empty value 
// const height = parseInt(document.querySelector('#height'))


form.addEventListener( 'submit', function(e){
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value)
  
  const weight = parseInt(document.querySelector('#weight').value)
  
  const results = document.querySelector('#results')

  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height"
  }

  results.innerHTML = `${height}` //  is project me agar number 888aa is form me likha hai to vo parint ki wajah se 888 ho jaayega
  
  } )
