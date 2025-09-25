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