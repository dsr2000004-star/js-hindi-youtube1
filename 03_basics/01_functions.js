function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    

}

addTwoNumbers(3, 5)
// addTwoNumbers("3", "4")
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result  = addTwoNumbers(3, 5)
console.log("Result:", result);


// **********return value ka concept**********

function foo(n1, n2){
    // let result1 = n1 + n2                 /* First Method*/
    // console.log("Divyanshu");
    // return result1
    // console.log("Divyanshu"); (Ye print nahi hoyega kyuki ye return ke baad likha hai)
    
    return n1 + n2

}

const result1 = foo(10, 20)               /* Second Method */ 
console.log("The sum of these numbers is", result1);


function loginUserMessage(username = "Sam"){
    if(username === undefined){
    // console.log("Please Enter Your Username");

    console.log("Please Enter Your Username");
    return     /* ye humne isliye lagaya hai taaki ye agar is if bracket me agaya to return use karne ke baad aage ki koi statment print hi na ho */
    
    }
   
    
    return `${username} just logged in`

}

// console.log(loginUserMessage("Divyanshu"));
console.log(loginUserMessage("Divyanshu"));







/* practice

function nayaFunction(number1, number2){
let y = number1 + number2
console.log(number1 + number2);

return y
}

let y = nayaFunction(100, 200)

console.log("The result is", y);

*/ 
