/*

Garbage collection is an automatic process in JavaScript that frees memory by removing objects that are no longer reachable or used in the program, typically using algorithms like mark-and-sweep.


🔹 Why is it needed?

Memory is limited. If unused data is not removed:

App becomes slow 🐢
Memory leaks happen
Browser can crash 💥

So GC helps keep apps efficient.

🔹 Key Concept: Reachability

👉 JavaScript uses the concept of “reachable” vs “unreachable” values

✔ Reachable (kept in memory)
Variables currently in use
Objects referenced by other objects
Global variables


❌ Unreachable (garbage)
Variables with no references
Objects that cannot be accessed anymore

👉 Garbage collector removes unreachable data


🔹 Memory Leak (Important Interview Point)

A memory leak happens when:

👉 Memory is not freed even though it’s not needed

Example:
let arr = [];

function addData() {
  arr.push(new Array(1000000).fill("data"));
}

👉 If arr keeps growing → memory keeps increasing
❌ GC cannot remove it because it is still referenced












*/