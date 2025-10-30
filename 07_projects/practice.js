let randomNumber = parseInt(Math.random()*100 + 1)
const userInput = document.getElementById('guessField')
const submit = document.getElementById('subt')
const guessDabba = document.getElementsByClassName('guesses')
const remainingGuess = document.getElementsByClassName('lastResult')
const lowOrHi = document.getElementsByClassName('lowOrHi')
const resultParas = document.querySelector('.resultParas')
const p = document.createElement('p')
let playGame = true 
let numGuess = 1
let prevGuess = []


if(playGame){
submit.addEventListener('click', function(e){
e.preventDefault()

const guess = parseInt(userInput.value)
validateGuess(guess)



}
)
}



function validateGuess(guess){
if(guess < 1 || guess > 100 || isNaN(guess)){
  alert(`Please enter a valid number`)

}
else{
prevGuess.push(guess)
  

  if(numGuess > 10){
    displayMessage(`Game Over, random number was ${randomNumber}`)
    endGame()
  }
  else{
    checkGuess(guess)
displayGuess(guess)


  }


}
}
function checkGuess(guess){
  if(guess > randomNumber){
    displayMessage(`Your guess is too high`)
  }
  else if(guess < randomNumber){
    displayMessage(`Your guess is too low`)

  }
  else if(guess === randomNumber){
    displayMessage(`You gussed it right`)
    endGame()

  }

}
function displayGuess(guess){
  userInput.value = ''
remainingGuess.innerHTML = `${10 - numGuess}`
numGuess++
guessDabba.innerHTML += `${guess}`



}
function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`

}
function endGame(){
  userInput.value = ""
userInput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML = `<h2 id="newGame" >Start new game</h2>`
resultParas.appendChild(p)
playGame = false
newGame()

}
function newGame(){
  let randomNumber = parseInt(Math.random()*100 + 1)
  userInput.value = ""
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', function(e){
  e.preventDefault()
  let numGuess = 1
let prevGuess = []
let remai
guessDabba.innerHTML = ""
remainingGuess.innerHTML = `${10 - numGuess}`
userInput.removeAttribute('disabled', '')
resultParas.removeChild(p)

playGame = true

})


}

