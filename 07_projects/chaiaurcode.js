
// Project - 1



/*
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

            */



 


// Project - 2

// /*

// const form = document.querySelector('form')

// // this use case will give you empty value 
// // const height = parseInt(document.querySelector('#height'))


// form.addEventListener( 'submit', function(e){
//   e.preventDefault()
  
//   const height = parseInt(document.querySelector('#height').value)
  
//   const weight = parseInt(document.querySelector('#weight').value)
  
//   const results = document.querySelector('#results')

//   if(height === "" || height < 0 || isNaN(height)){
//     results.innerHTML = "Please enter a valid height"
//   }

//   // results.innerHTML = `${height}` 
//   //  is project me agar number 888aa is form me likha hai to vo parint ki wajah se 888 ho jaayega

//   else if (weight === "" || weight < 0 || isNaN(weight)){
//     results.innerHTML = "Please enter a valid weight"
//   }
//   else{
//     const bmi = weight/((height * height)/10000).toFixed(2)
//     // to show the result you have to follow below step
//     results.innerHTML = `<span>${bmi}</span>` 

//     if(bmi < 18.6){
//     results.innerHTML = `<span>${bmi}</span> (Underweight)`
//     }

//     else if (bmi >= 18.6 && bmi <= 24.9){
//       results.innerHTML = `<span>${bmi}</span> (Normal Range)`
//     }

//     else{
//       results.innerHTML = `<span>${bmi}</span> (Overweight)`
//     }
// }


  
//   } )

// */



// Project - 3


/* 

const clock = document.getElementById('clock')
 // document.querySelector('#clock') 



 setInterval( function(){
  const myDate = new Date()
   clock.innerHTML = myDate.toLocaleTimeString()
 }, 1000 )

 */

 // project-4

 const randomNumber = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const p = document.createElement('p')

let prevGuesses = []
let numGuess = 1

let playGame = true

if(playGame){
submit.addEventListener('click', function(e){
e.preventDefault()
const guess = parseInt(userInput.value)
validateGuess(guess)

console.log(guess)
})
}

/* ye fn check karega ki humara guess random value ke beech me hai ya nahi aur value hai ya nahi */

function validateGuess(guess) {
// 
}


/* ye fn check karega ki humara guess random value ke equal hai, ya low hai, ya high hai, aur fir display message ki help se user ko inform karega*/

function checkGuess(guess){
// 
}


/*ye fn values ko clean karega, array ko update karega, guesses remaining ko update karega*/

function displayGuess(guess){
// 
}


/* ye fn lowOrHi ke andar ek message pass karega aur print karega*/

function displayMessage(){
// 
}

function newGame (){
// 
}

function endGame (){
// 
}