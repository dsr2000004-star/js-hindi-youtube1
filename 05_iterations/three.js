// for of 

// ["", "", ""]
// [{}, {}, {}]


// for (const element of object) {
    
// }

let arr = ["mai", "chalu", "pichadi", "sab"]


for (const value of arr) {
    console.log(value);
    
}

let greetings = "Hello World"

for (const value of greetings) {

if(value == greetings.charAt(5)){
    

    console.log("-");
    continue
    

}
    console.log(`print ${value}`);
    
}

// Maps 

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('Fr', "France")
// map.set('US', "United States of America")
// map.set('IN', "India")


// console.log(map);

// for (const key of map) {
//     console.log(key);     (isme key aur value dono hi print ho jaayegi)
    
// }

for (const [key, value] of map) {
    // console.log(key);
    console.log(key, ":-", value);
    
    
}

let myObj = {
    aage: "Peeche", 
    oopar: "neeche", 

}

// for (const [key, value] of myObj) {
//     console.log(key, ":-", value);  (ye tareeka objects pe kaam nahi kar raha)
    
// }

