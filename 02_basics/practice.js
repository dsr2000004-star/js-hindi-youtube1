// 

// const myArray = [1, 2, 4, 6, 8, 9, 12]
// myArray.pop()
// console.log(myArray);

// const newArr = myArray.join()
// console.log(typeof newArr);

// const s = myArray.slice(1, 4)
// console.log(s);
// console.log(myArray);

// const  p = myArray.splice(1, 4)
// console.log(p);
// console.log(myArray);


// const newArray = [2, 4, 6, 8, 10, 12, 14]
// const sp = newArray.splice(2, 3)
// console.log(sp);
// console.log(newArray);



// let myObj = {
//     "naam": "Anil", 
//     "kaam": "majdoori", 
//     salary: 15000

// }

// let val = Object.values(myObj)
// console.log(val);


// const myObj = {
//     "mera naam": "Divyanshu", 
//     class: "3rd"
// }

//  console.log(myObj["mera naam"]);

//  const mySym = Symbol("key1")

//  const meraObject = {
//     occupation: "farmer", 
//     [mySym]: "mykey1"
//  }

//  console.log(typeof meraObject[mySym]);


const maiHoon = {
    naam: "divyanshu", 
    kaam: "coding", 
}

maiHoon.greeting = function () {
        console.log("meraaaaa");
        
    }

    maiHoon.greeting()

   const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign( {},  obj1, obj2)
console.log(obj3);

    const meraObj = {"a": 1, "b": 22}
    console.log(meraObj);
    
    const teraObj = {"c": 3, "b": 12}

    const humObj = Object.assign({}, meraObj, teraObj)
    console.log(humObj);
    console.log(meraObj);
       
    const {b} = meraObj
    console.log(b);
    



 

 
 
 








