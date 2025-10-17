// 

const myArray = [1, 2, 4, 6, 8, 9, 12]
myArray.pop()
console.log(myArray);

const newArr = myArray.join()
console.log(typeof newArr);

// const s = myArray.slice(1, 4)
// console.log(s);
// console.log(myArray);

const  p = myArray.splice(1, 4)
console.log(p);
console.log(myArray);


const newArray = [2, 4, 6, 8, 10, 12, 14]
const sp = newArray.splice(2, 3)
console.log(sp);
console.log(newArray);



let myObj = {
    "naam": "Anil", 
    "kaam": "majdoori", 
    salary: 15000

}

let val = Object.values(myObj)
console.log(val);







