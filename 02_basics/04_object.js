const tinderUser = new Object()
console.log(tinderUser);

// const tinderUser = {} its equal to line number 1 , but the difference is line 4 contains literal object and line 1 contains constructor object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = "false"
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com", 
    fullname: {
        userfullname: {
            firstname: "divyanshu",
            lastname: "rawat",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);



// console.log(regularUser.fullname?.userfullname.firstname);  to check whether fullname key exists or not. It will used in further projects. 


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2, obj4)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);



// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);




// const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users =  [
    {
        id: "1", 
        email: "a@gmail.com",

    },
    {
        id: "2", 
        email: "b@gmail.com",

    },
    {
        id: "3", 
        email: "c@gmail.com",

    }
]

console.log(users[2].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));








