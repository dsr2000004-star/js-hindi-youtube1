const name = "divyanshu "
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} ans my repo count is ${repoCount}`);

const gameName = new String('hitesh---hc')
console.log(gameName);


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('hhc'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, -5)
console.log(anotherString);

const newStringOne = "           divyanshu         "
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));


console.log(url.includes('hitesh'));
console.log(url.includes('sundar'));

console.log(gameName.split('-'));

let b = "700"
console.log(b.__proto__);


let a = "divyanshutuku"
console.log(a.slice(-6, 11)); // in this type -1 refers to last alphapet of word

















