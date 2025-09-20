// if

if (true) {
    // this is statement of true
}

// <, >, <=, >=, ==, !=, ===, !==


if (2 != 3) {
    console.log("executed");

}

const temperature = 41;

if (temperature === 41) {
    console.log("less than 50");

}
// console.log("temperature is greater than 50");

else {
    console.log("temperature is greater than 50");

}

console.log("Executed");



const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);

// }

// console.log(`User power: ${power}`); 
// it will not execute because power ka scope hi sirf if ke andar tak ka hai


// if (score > 100) {
//     var power = "fly"
//     console.log(`User power: ${power}`);

// }
// console.log(`User power: ${power}`); 
//  ye execute ho jaayega kyuki var ka to global scope hota hai 

const balance = 1000
// if (balance > 500) console.log("test"), console.log("dobara test");

if(balance < 500){
    console.log("less than 500");

}
else if (balance < 750){
    console.log("less than 750");
    
}
else if (balance < 900){
    console.log("less than 900");

}
else{
    console.log("less than  1200");

}

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard && 2=="2"){
    console.log("Allow to buy course");
    
}