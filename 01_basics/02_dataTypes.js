"use strict"; // treat all JS code as newer version 

// alert( 3 + 3 ) // we are using nodejs, not browser (alert ko hum directly node.js me use nahi kar sakte)

console.log(3+3)
console.log("Divyanshu")

let name = "Divyanshu"
let age = 18
let isLoggedIn = false 

// number => 2^53
// bigint is for writing big numbers
// string => ""
// boolean => true/false
// null => stand alone value 
// undefined => abhi value defined nahi hui hai
// symbol => unique 

// object 

console.log(typeof "Divyanshu", typeof age);
console.log(typeof undefined); // undefined
console.log(typeof null); // object



// very imporatnt note = null ka matlab sirf value - 0 nahi hota, null ka matlab hai empty value. (kyuki 0 to ek particular value hai)

// for ex - aapne kisi website se temperature maanga aur machine kharab hone ki wajah se temperature ki koi bhi value nahi aayi , to aise case me khaali value ko represent karne ke liye hum null likhenege.  
