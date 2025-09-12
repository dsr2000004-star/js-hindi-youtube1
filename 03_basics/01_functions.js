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
    let result1 = n1 + n2
    console.log("Divyanshu");

    return result1
    // console.log("Divyanshu"); (Ye print nahi hoyega kyuki ye return ke baad likha hai)
    

}

const result1 = foo(10, 20)
console.log("The sum of these numbers is", result1);
