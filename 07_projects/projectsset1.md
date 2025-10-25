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
   console.log(e.target)
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