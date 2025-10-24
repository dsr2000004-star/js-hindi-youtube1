# Projects related to DOM

## project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code 

## project 1

```javascript 
console.log("hitesh)

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