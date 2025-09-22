// const userEmail = "h@hitesh.ai"
// const userEmail = ""
const userEmail = []

if(userEmail){
console.log("Got user email");

}

else{
    console.log("Don't have user email");
    
}

// falsy value,s

// false, 0, -0, BigInt 0n, null, undefined, NaN 
// iske alawa sab true values maan liye jaate hain

// truthy values 
// "0", 'false', " ", [], {}. function(){}

if(userEmail.length === 0){
console.log("Array is empty");

}

const emptyObj = {
    
}
console.log(Object.keys(emptyObj))

if(Object.keys(emptyObj).length === 0){
console.log("Object is empty");

}

// Nullish Coalescing Operator (??): null undefined 
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 14
val1 = null ?? 55 ?? 5  // jo value pehle hogi vahi assign hogi 




console.log(val1);

// terniary Operator

// condition ? true : false

const iceTeaPrice = 90

iceTeaPrice >=100 ? console.log("less than 80") : console.log("more than 80")



