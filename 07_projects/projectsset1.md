# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## project 1 solution

```javascript 
console.log("hitesh")

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function(e){
   console.log(e)
   console.log(e.target) // e.target eventlistener ke dwara us har ek block ko represent kar raha hai 
 let a = e.target.id

 switch (a) {
   
  case "grey":
    body.style.backgroundColor = "grey"
    break;
  case "white":
    body.style.backgroundColor = "white"
    break;
  case "blue":
    body.style.backgroundColor = "blue"
    break;
  case "yellow":
    body.style.backgroundColor = "yellow"
    break;

  default:
    break;
}




  })
});

``` 


## project 2 solution 

```javascript 

const form = document.querySelector('form')

// neeche di gayi value ko event listener ke andar hi likhna hai kyuki hume ye values particular us event ke doraan hi chahiye
// const height = parseInt(document.querySelector('#height'))


form.addEventListener( 'submit', function(e){
  e.preventDefault()
  
  const height = parseInt(document.querySelector('#height').value)
  
  const weight = parseInt(document.querySelector('#weight').value)
  
  const results = document.querySelector('#results')

  if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = "Please enter a valid height"
  }

  // results.innerHTML = `${height}` 
  //  is project me agar number 888aa is form me likha hai to vo parint ki wajah se 888 ho jaayega

  else if (weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please enter a valid weight"
  }
  else{
    const bmi = weight/((height * height)/10000).toFixed(2)
    // to show the result you have to follow below step
    results.innerHTML = `<span>${bmi}</span>` 

    if(bmi < 18.6){
    results.innerHTML = `<span>${bmi}</span> (Underweight)`
    }

    else if (bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML = `<span>${bmi}</span> (Normal Range)`
    }

    else{
      results.innerHTML = `<span>${bmi}</span> (Overweight)`
    }
}


  
  } )


``` 


## project 3 solution 

``` javascript 

const clock = document.getElementById('clock')
 // document.querySelector('#clock') 



 setInterval( function(){
  const myDate = new Date()
   clock.innerHTML = myDate.toLocaleTimeString()
 }, 1000 )


``` 

## project 4 solution

``` javascript 


let randomNumber = parseInt(Math.random()*100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

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
if(isNaN(guess)){
alert(`Please enter a valid number`)
}

else if(guess < 1){
alert(`Please enter a number greater than 1`)
}
else if (guess > 100){
alert(`Please enter a number less than 100`)
}

else{
prevGuesses.push(guess)
if(numGuess === 11){
displayGuess(guess)
displayMessage(`Game over, Random number was ${randomNumber}`)
endGame()
}else{
displayGuess(guess)
checkGuess(guess)
}

}


}


/* ye fn check karega ki humara guess random value ke equal hai, ya low hai, ya high hai, aur fir display message ki help se user ko inform karega*/

function checkGuess(guess){
 if(guess === randomNumber){
   displayMessage(`You guesses it right`)
   endGame()
 }

 else if(guess > randomNumber){
displayMessage(`You guessed too high`)
 }

 else if(guess < randomNumber){
displayMessage(`You guessed too low`)
 }
}


/*ye fn userInput ko update karke clean karta rahega, array ko update karega, guesses remaining ko update karega*/

function displayGuess(guess){
userInput.value = ''
guessSlot.innerHTML += `${guess} ,`
numGuess++;
remaining.innerHTML = `${11 - numGuess}`
}


/* ye fn lowOrHi ke andar ek message pass karega aur print karega*/

function displayMessage(message){
lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
userInput.value = ''; 
userInput.setAttribute('disabled', ''); ye aise isliye likha hai kyuki ise setAttribute property ko key value pair me likhte hain
p.classList.add('button'); 
p.innerHTML = `<h2 id="newGame" >Start new Game</h2>`;
startOver.appendChild(p);
playGame = false; 
newGame();
}

function newGame (){
const newGameButton = document.querySelector('#newGame'); 
newGameButton.addEventListener('click', function(e){
let randomNumber = parseInt(Math.random()*100 + 1)
let prevGuesses = []
let numGuess = 1
guessSlot.innerHTML = ''
remaining.innerHTML = `${11 - numGuess}`
userInput.removeAttribute('disabled')
startOver.removeChild(p) 
playGame = true


})

}


``` 

## project 5 solution 

``` javascript 
console.log('Project 5');
console.log('Project 5');

const insert = document.querySelector('#insert')

window.addEventListener('keydown', function(e){




 
  insert.innerHTML = `
  <div class ='color'>

  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key=== " " ? "Space" : e.key}</td>

  

    
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  
  
  </div>


  `






})

```

## project 6 solution 
``` javascript 
// generate a random color

const randomColor = function(){
  const hex = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random()*16)] // fir humne ye step kara hai 
    
}
return color
}
// randomColor()

console.log(Math.floor(Math.random()*16)) // pehle humne ye step kara hai 


let a;
const startChangingColor = function(){
 if(!a){
  a = setInterval(changingColor, 1000)
 }

function changingColor(){
   document.body.style.backgroundColor = randomColor()
}

}


let stopChangingColor = function(){
  clearInterval(a)
  a = null; // (ye humne lagaya hai kyuki jab humara a ka kaam hogaya to hum ab uski value ko derefrence kar rahe hain taaki thodi si memory clear ho jaaye)

}



document.querySelector('#start').addEventListener( 'click', startChangingColor)
document.querySelector('#stop').addEventListener( 'click', stopChangingColor)


```


