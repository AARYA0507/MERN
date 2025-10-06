/*

➡ map(): transforms each element
➡ filter(): selects elements based on condition
➡ reduce(): combines all elements into a single value
*/



//  MAP — transform each element


const numbers = [2, 5, 7, 10, 15];

// Square each element
const squares = numbers.map(num => num * num);
console.log("Squares:", squares);

// Convert numbers to strings with prefix
const labeled = numbers.map(num => `Number: ${num}`);
console.log("Labeled:", labeled);

// Double even numbers only (using ternary operator)
const doubledEvens = numbers.map(num => (num % 2 === 0 ? num * 2 : num));
console.log("Doubled Evens:", doubledEvens);



//  FILTER — extract elements based on condition


// Filter numbers greater than 5
const greaterThan5 = numbers.filter(num => num > 5);
console.log("Greater than 5:", greaterThan5);

// Filter even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evens);

// Filter words with length > 4
const words = ["map", "filter", "reduce", "js", "developer"];
const longWords = words.filter(word => word.length > 4);
console.log("Long Words:", longWords);



// REDUCE — accumulate or combine all elements


// Sum of array elements
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// Find maximum number
const max = numbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log("Max:", max);

// Combine words into a sentence
const sentence = words.reduce((acc, curr) => acc + " " + curr);
console.log("Sentence:", sentence);



// CHAINING map + filter + reduce


// Find sum of squares of even numbers
const sumSquaresEvens = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((acc, curr) => acc + curr, 0);
console.log("Sum of squares of even numbers:", sumSquaresEvens);




//  Given an array of prices, add 10% GST to each.
const prices = [100, 200, 300];
const pricesWithGST = prices.map(price => price * 1.1);
console.log("Prices with GST:", pricesWithGST);

//  Filter out students who scored less than 50 marks.
const students = [
  { name: "Aarya", marks: 85 },
  { name: "Sahil", marks: 45 },
  { name: "Riya", marks: 72 },
];
const passed = students.filter(stu => stu.marks >= 50);
console.log("Passed Students:", passed);

//  Find total marks of all students using reduce.
const totalMarks = students.reduce((acc, stu) => acc + stu.marks, 0);
console.log("Total Marks:", totalMarks);

//  Given array of products, get names of products priced above ₹1000.
const products = [
  { name: "Keyboard", price: 700 },
  { name: "Mouse", price: 400 },
  { name: "Monitor", price: 5000 },
  { name: "Headphones", price: 1200 },
];
const expensiveProducts = products
  .filter(p => p.price > 1000)
  .map(p => p.name);
console.log("Expensive Products:", expensiveProducts);

// Count occurrences of each character in a string using reduce.
const str = "banana";
const charFreq = str.split("").reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log("Character Frequency:", charFreq);

//  Find average marks of students.
const avgMarks = totalMarks / students.length;
console.log("Average Marks:", avgMarks);

//  Flatten a nested array using reduce.
const nestedArr = [[1, 2], [3, 4], [5, 6]];
const flatArr = nestedArr.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened Array:", flatArr);

//  Find product of all elements in an array.
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product of all numbers:", product);

//  Create an array of student names in uppercase.
const upperNames = students.map(stu => stu.name.toUpperCase());
console.log("Uppercase Names:", upperNames);

//  Filter out words starting with 'r' or 'R'
const rWords = words.filter(word => word.toLowerCase().startsWith('r'));
console.log("Words starting with R:", rWords);







