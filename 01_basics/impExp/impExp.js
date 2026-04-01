/*

🔹 1. What are Modules?

A module is simply a file with its own scope.

👉 Variables/functions inside a module are not global unless you export them.

🔹 2. Export (sending things out)
✅ Named Export

You can export multiple things:

// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
✅ Export at bottom
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

export { add, sub };
✅ Default Export (only one per file)
// greet.js
export default function greet(name) {
  return `Hello ${name}`;
}
🔹 3. Import (bringing things in)
✅ Import Named Exports
import { add, sub } from "./math.js";

console.log(add(2, 3));
✅ Import Default Export
import greet from "./greet.js";

console.log(greet("Div"));
✅ Rename while importing
import { add as sum } from "./math.js";

console.log(sum(5, 5));
✅ Import everything
import * as math from "./math.js";

// 👉 It imports all named exports from math.js and groups them into an object called math.

console.log(math.add(2, 3));
🔹 4. Important Rules
✔ File path is required
import { add } from "./math.js"; // correct
✔ Use type="module" in HTML
<script type="module" src="app.js"></script>

*/