// 
// let a = 10
// console.log(a);

// function factory() {

// let balance = 1000
//     return{
// deposit: function(amount){
// balance += amount
// },

// getBalance: function(){
// return balance
// }
//     }
// }

// const user1 = factory()
// user1.deposit(500)
// console.log(user1.getBalance());

// const user = {
//     username: "Divyanshu", 
    
//     loginCount: 8, 
//     signedIn: true,

//     getUserDetails: function(){
// console.log(`Username - ${this.username}`);
 

// console.log(this);


//     }
    
    
// }

// console.log(user.username);
// user.getUserDetails();
// console.log(this);


// const userOne = {
//     naam: "Divyanshu", 
//     age: 22, 
//     kaam : "freelancing", 

//     myFn: function(){
// console.log(`Username is ${this.naam}`);
// console.log(this)



//     }
// }

// userOne.myFn()
// console.log(this);


// function User(username, loginCount, isLoggedIn){
// // username = username /* (in dono me se oopar wala username konsa hai vo pass karne me problem aati hai) */

// this.username = username 
// this.loginCount = loginCount
// this.isLoggedIn = isLoggedIn
// this.greeting = function(){
//     console.log(`Welcome: ${this.username}`);
//     console.log(this);
    
    
// }

// // return this

// }

// /*
// const userOne = User("Hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)
// console.log(userOne);
// */

// const userOne = new User("Hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)

// userOne.greeting()



// const myName = () => (
//      {
//         naam: "Divyanshu"
//     }
// )
// console.log(myName());

// this Age function is call back function

/*
function myFn (naam, age){
console.log(naam);
age()

}

function Age(){
    console.log("Age hai ");
    
}

myFn("Divyanshu", Age)
*/

/*
this a example of apply method

function myFn (city, nation){
console.log(`Hello, I am ${this.naam}, ${this.age}  years old, living in ${city}, ${nation} `);

}

const myInfo = {
    naam: "Divyanshu", 
    age: 22, 
}

myFn.apply( myInfo , ["Delhi", "India"])

*/

// High Order Function
function greet(name) {
    return "Hello " + name;
}

function processUserInput(callback) {
    const name = "Divyanshu";
    console.log(callback(name));
}

processUserInput(greet);

// processUserInput is a High Order Function because it accepots another function (greet) as its parameter

// greet is call back function because it is called in another function....


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}




