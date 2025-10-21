let score = "33abc"

// const {score} = req.body (sometimes it is not defined that what is actual dataType of variable)

console.log(typeof score);
console.log(typeof(score)); // libe 5 and 6 both are same in working

let ValueInNumber = Number(score)
console.log(typeof ValueInNumber);
console.log(ValueInNumber);    

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let aanewala = Boolean(isLoggedIn)

console.log(typeof aanewala);
console.log(aanewala);

// 1 => true; 0 => false
// "" => false
// "Divyanshu" => true


let someNumber  = 33
let stringNumber  = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ************************Operation*********************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Divyanshu"
let str3 = str1 + str2
console.log(str3)
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

// console.log((3 + 4) * 5 % 3); this is not a good way to write code

console.log(+true);
console.log(+"");


/*
let num1, num2, num3
num1 = num2 = num3 = 2 + 2  (jyada use nahi karte is method ko)
*/

let gameCounter = 100
gameCounter++;

console.log(gameCounter);


//let gc = 1000
//let gcc = gc++
//console.log(gc);
//console.log(gcc);


let gc = 1000
let gcc = ++gc
console.log(gc);
console.log(gcc);



// ************************Comparison*******************************

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log( 2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);   // false 
console.log(undefined > 0); // false 
console.log(undefined < 0); // false 

// ===

console.log("2" === 2);                   




















