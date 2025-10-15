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


// ********** Important(Hoisting)************

console.log(addOne(5));  // yahan agar aap function ko exexute karne ke liye oopar bhi likhoge to wo execute ho jaayega     

function addOne(num){
return num + 1
}

// console.log(addOne(5));





console.log(addTwo(5));      // jab hum function ko ek variable me store karte hain to wo ek expression ban jaata hai aur isme console.log() oopar likhne se execution nahi hota 
const addTwo = function(num){
    return num + 2
}
// console.log(addTwo(5));



