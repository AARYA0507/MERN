// set hands on js file
// Extra set concepts not in the given file
/*
Method/Property	Description
set.add(value)	Adds a value to the set
set.delete(value)	Removes a value
set.has(value)	Checks if a value exists (true/false)
set.clear()	Removes all values
set.size	Returns number of values in the set
*/
let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // Duplicate, ignored

console.log(fruits);
console.log(fruits.size); // 2

// Checking values
console.log(fruits.has("apple"));  // true
console.log(fruits.has("grape"));  // false

// Deleting
fruits.delete("banana");
console.log(fruits); // Set(1) { 'apple' }

// Clearing
fruits.clear();
console.log(fruits); 
/*
// iterating over a set
let numbers = new Set([1, 2, 3]);

for (let num of numbers) {
  console.log(num);
}
// Using forEach
numbers.forEach(value => console.log(value));
*/
// Converting Set to Array
let numSet = new Set([1, 2, 3]);
let numArray = Array.from(numSet);
console.log(numArray); // [1, 2, 3]
// array to set
let arr = [1, 2, 2, 3, 4, 4];
let uniqueSet = new Set(arr);
console.log(uniqueSet); // Set(4) { 1, 2, 3, 4 }
// checking if a value exists efficiently
let ids = new Set([101, 102, 103, 104]);

console.log(ids.has(102)); // true
console.log(ids.has(200)); // false

