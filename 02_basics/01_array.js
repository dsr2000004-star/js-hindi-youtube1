const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraaj"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

console.log(myArr.includes(5));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(14));

const newArr = myArr.join()

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















