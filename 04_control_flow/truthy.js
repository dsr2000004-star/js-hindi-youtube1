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
