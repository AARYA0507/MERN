
let fruits = new Set();
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); 

console.log(fruits);
console.log(fruits.size); 


console.log(fruits.has("apple"));  
console.log(fruits.has("grape")); 


fruits.delete("banana");
console.log(fruits); 


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
console.log(numArray);
let arr = [1, 2, 2, 3, 4, 4];
let uniqueSet = new Set(arr);
console.log(uniqueSet); 

let ids = new Set([101, 102, 103, 104]);

console.log(ids.has(102)); 
console.log(ids.has(200)); 

