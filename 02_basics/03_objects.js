// singleton (it is a type of object whhich is made by contructor method)
// objects constructor
Object.create




//objects literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "Divyanshu",
    "full name": "Divyanshu Singh Rawat",
    [mySym]: "myKey1",
    
    age: 18,
    location: "Jaipur",
    email: "divyanshu@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Monday", "Saturday"]
}


// Two methods to see objects key and elements 
// console.log(JsUser.email);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym); (is tareeke see nahi karna)
// console.log(typeof JsUser.mySym); 
// console.log(JsUser[mySym]); (is tareeke se karna hai)


JsUser.email = "divyanshu@chatgpt.com"
// Object.freeze(JsUser) (ye lagane ke baad object me koi changes kaam nahi karenge )
JsUser.email = "divyanshu@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
console.log("Hello JS user");

}

JsUser.greetingTwo = function(){
console.log(`Hello JS user, ${this.name}`);

}

console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



// myArray = ["h", "i"]
// console.log(myArray[1]);
