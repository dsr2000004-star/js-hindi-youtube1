// for each loop 

const coding = ["js", "ruby", "java", "python", "cpp"]

// **************** First Method *************************

// coding.forEach( function (item) {
//     console.log(item);
    
// } 
// )


// *************** Second Method **************************


// coding.forEach(  (val) => {
//     console.log(val);
    
// }

// )

// **************** Third Method *************************

function printMe(val){
 console.log(val);
 
}

// coding.forEach(printMe)


// coding.forEach( (item, index, arr) => {
//    console.log(item, index, arr);
   
// }

// )

const myCoding = [
    {
        languageName: "javascript", 
        languageFileName: "js"
    },
    {
        languageName: "java", 
        languageFileName: "java"
    },
    {
        languageName: "python", 
        languageFileName: "py"
    }
]

myCoding.forEach( (item)=>{
  console.log(item.languageName);
  
} 
)