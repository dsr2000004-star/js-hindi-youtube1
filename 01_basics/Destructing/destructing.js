/*

🔹 1. Destructuring

👉 Destructuring = extracting values from arrays or objects into variables

✅ Array Destructuring
const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a); // 10
console.log(b); // 20

✔ Order matters here

✅ Object Destructuring
const user = {
  name: "Div",
  age: 21
};

const { name, age } = user;

console.log(name); // "Div"

✔ Key names must match

✅ Rename Variables
const { name: username } = user;

console.log(username); // "Div"
✅ Default Values
const { city = "Delhi" } = user;

console.log(city); // "Delhi"
🔹 2. Spread Operator (...)

👉 Spread = expands values

✅ In Arrays
const arr1 = [1, 2];
const arr2 = [3, 4];

const result = [...arr1, ...arr2];

console.log(result); // [1, 2, 3, 4]
✅ Copy Array
const copy = [...arr1];
✅ In Objects
const user = { name: "Div" };

const newUser = { ...user, age: 21 };

console.log(newUser);
// { name: "Div", age: 21 }
🔹 3. Rest Operator (...)

👉 Rest = collects remaining values

✅ In Arrays
const [a, ...rest] = [1, 2, 3, 4];

console.log(a);    // 1
console.log(rest); // [2, 3, 4]
✅ In Objects
const user = { name: "Div", age: 21, city: "Delhi" };

const { name, ...rest } = user;

console.log(name); // "Div"
console.log(rest); // { age: 21, city: "Delhi" }
✅ In Functions
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

sum(1, 2, 3); // 6

*/


const text = `This is line 1
This is line 2
This is line 3`;

console.log(text);