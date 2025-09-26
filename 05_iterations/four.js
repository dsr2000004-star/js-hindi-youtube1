const myObject = {
    js: 'javascript', 
    cpp: "'C++", 
    rb: 'ruby', 
    swift: "swift by apple"
}

// for (const key in myObject) {
  
//     console.log(key);
    
    
// }


for (const key in myObject) {
//    console.log(myObject[key]);
console.log(`${key} is used for ${myObject[key]}`);

   
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
// console.log(key);
console.log(programming[key]);


}

// console.log(programming[3]);



// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United States of America")
// map.set('Fr', "France")
                                  // (map pe for-in loop wala tareeka kaam nahi karega kyuki map iterable nahi hai fo in loop me)
// for (const key in map) {   
//    console.log(key);
   
// }



