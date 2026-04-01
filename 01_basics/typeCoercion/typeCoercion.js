/*

what is Type coercion in javascript?

Type coercion in JavaScript is the automatic or explicit conversion of a value from one data type to another.

JavaScript is a loosely typed language, so it often converts types behind the scenes when performing operations.

🔹 1. Implicit Type Coercion (Automatic)

This happens when JavaScript converts types on its own.

Examples:
'5' + 2     // "52"  (number → string)
'5' - 2     // 3     (string → number)
true + 1    // 2     (boolean → number)
null == undefined // true

👉 JavaScript decides how to convert values based on the operator.

🔹 2. Explicit Type Coercion (Manual)

This is when you intentionally convert a type.

Examples:
Number('5')     // 5
String(123)     // "123"
Boolean(0)      // false
🔹 Common Rules to Remember
➤ Strings
If + is used and one value is a string → everything becomes a string
'10' + 5 // "105"
➤ Numbers
Other operators (-, *, /) convert values to numbers
'10' - 5 // 5
➤ Booleans
true → 1, false → 0
➤ Null & Undefined
null == undefined  // true
null === undefined // false
🔹 == vs === (VERY IMPORTANT)
5 == '5'   // true  (type coercion happens)
5 === '5'  // false (no coercion, strict check)

👉 Always prefer === to avoid unexpected bugs.

🔹 Why it matters

Type coercion can:

✅ Make code shorter
❌ Also create confusing bugs if you don’t understand it
🔹 Simple Definition

Type coercion = changing one data type into another (automatically or manually) in JavaScript.


*/