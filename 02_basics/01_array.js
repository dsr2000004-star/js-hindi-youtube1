const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraaj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);



// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
console.log(myArr);

// myArr.unshift(9) // unshift lagane se jo bhi bracket me likha hoga vo array ka sabse pehla element ban jaayega 
// myArr.shift() // shift lagane se array ka first element rub ho jaayega

console.log(myArr.includes(5));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(14));

const newArr = myArr.join() // it converts array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice (very important)

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


const a = ["akkad", "bakkad", "bambe", "bo", "assi", "nubbhe"]

console.log(a.slice(2, 4));
console.log(a);

console.log(a.splice(2, 4));
console.log(a);


// very important note - 1. slice me jo bracket me likha hota hai us index se start karke aur peeche wale index ko include na karke values aati hain, aur original array same rehte hai. 

// splice me jo bracket me likha hota hai [ex - splice.srray(3, 4)] iska matlab 3 index se leke aage ki four values lenge aur vo print hoayengi, aur original array se wo values cut out ho jaayengi


















