// handsOn.js
// Extra String Concepts (Not in script (2).js)

// 1. Changing case
const text = "Hello World";
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// 2. charAt() and charCodeAt()
console.log("Character at index 1:", text.charAt(1));
console.log("Unicode of index 1:", text.charCodeAt(1));

// 3. substring(), slice(), substr()
console.log("Substring(0,5):", text.substring(0, 5)); // "Hello"
console.log("Slice(0,5):", text.slice(0, 5));         // "Hello"
console.log("Substr(0,5):", text.substr(0, 5));       // "Hello"

// 4. startsWith() & endsWith()
console.log("Starts with 'Hel':", text.startsWith("Hel"));
console.log("Ends with 'World':", text.endsWith("World"));

// 5. includes()
console.log("Includes 'lo':", text.includes("lo"));

// 6. repeat()
console.log("Repeat 3 times:", "JS ".repeat(3));

// 7. replace() vs replaceAll()
const sample = "apple apple apple";
console.log("Replace first:", sample.replace("apple", "mango"));
console.log("Replace all:", sample.replaceAll("apple", "mango"));

// 8. padStart() and padEnd()
const num = "42";
console.log("PadStart:", num.padStart(5, "0"));
console.log("PadEnd:", num.padEnd(5, "x"));

// 9. trimStart() & trimEnd()
const spaced = "   trimmed text   ";
console.log("TrimStart:", `"${spaced.trimStart()}"`);
console.log("TrimEnd:", `"${spaced.trimEnd()}"`);

// 10. split() with delimiter
const csv = "red,green,blue";
console.log("Split by comma:", csv.split(","));

// 11. Template literals
const name = "Aarya";
const age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);



// Q1: Write a function that counts how many vowels are in a string.
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}
console.log("Vowels in 'Javascript':", countVowels("Javascript"));

// Q2: Check if a string is an anagram of another string.
function isAnagram(str1, str2) {
  const normalize = s => s.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
console.log("Is 'listen' an anagram of 'silent'?", isAnagram("listen", "silent"));

// Q3: Reverse each word in a sentence without changing word order.
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ");
}
console.log("Reverse words:", reverseWords("Hello World"));

// Q4: Capitalize the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("Capitalize words:", capitalizeWords("javascript is fun"));

// Q5: Find the frequency of each character in a string.
function charFrequency(str) {
  let freq = {};
  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}
console.log("Character frequency:", charFrequency("hello"));

