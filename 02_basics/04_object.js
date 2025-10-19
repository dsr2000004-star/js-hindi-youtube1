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

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign(obj1, obj2, obj4)
// console.log(obj3);
// console.log(obj1);
// console.log(obj2);
// console.log(obj4);

// ***************** jab aap object ko jodte waqt assign property lagate ho to ye {} lagana bhi important hai kyuki ye na lagane se obj1 hi target object ban jaayega aur obj3 , obj1 same value produce karenge *************************************************

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


// *********************************************************************


const course = {
 coursename: "js in hindi", 
 price: "999", 
 courseInstructor: "Hitesh"
}


// console.log(course.courseInstructor);       *1st method

// const {courseInstructor} = course           *2nd method
// console.log(courseInstructor);  


const {courseInstructor: instructor} = course
console.log(instructor);


// (method which is below is used in react and it function is same as line number 100, 101)
// const navbar = ({company}) => {

// }

// navbar(company = "Hitesh")


// this is structure of JSON
// {
//     "name": "hitesh", 
//     "coursename": "js in hindi", 
//     "price": "free"
// }

[
    {},
    {},
    {}
]


// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }






