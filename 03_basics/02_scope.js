// let a = 10
// const b = 20
// var c = 30



if(true){
let a = 10
const b = 20
var c = 30
}
// console.log(a);
// console.log(b);
console.log(c);



let kancha = 300

if(true){
let kancha = 21
console.log("INNER: ", kancha);

}

console.log(kancha);



// ************************ Video - 22 **************************************


function one (){
    const username = "Divyanshu"


    function two() {
        const website = "Youtube"
        console.log(username);
        
    }

    // console.log(website);

    // two()
    
}

one()


if (true){


const username = "Divyanshu"

if(username === "Divyanshu"){
   const website = " youtube"
   console.log(username + website);
   
}

// console.log(website);


}

// console.log(username)


// ********************** Important(Hoisting) ************************************

console.log(addOne(5));

function addOne(num){
return num + 1
}

// console.log(addOne(5));





console.log(addTwo(5));
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));



