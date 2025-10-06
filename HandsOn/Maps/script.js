

// 1️⃣ Create a Map in different ways
const map1 = new Map();
map1.set("name", "Aarya");
map1.set("age", 22);
map1.set("city", "Pune");

console.log("Map1:", map1);
console.log("Size of map:", map1.size);

//  Iterate over Map using forEach()
map1.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

//  Accessing values, keys, and entries
console.log("All Keys:", [...map1.keys()]);
console.log("All Values:", [...map1.values()]);
console.log("All Entries:", [...map1.entries()]);


//  Convert an Object to a Map
const obj = { id: 1, name: "Riya", course: "MERN" };
const mapFromObj = new Map(Object.entries(obj));
console.log("Map from Object:", mapFromObj);

//  Convert a Map to an Object
const objFromMap = Object.fromEntries(map1);
console.log("Object from Map:", objFromMap);

//  Merge two Maps
const mapA = new Map([
  ["a", 1],
  ["b", 2],
]);
const mapB = new Map([
  ["b", 3],
  ["c", 4],
]);
const mergedMap = new Map([...mapA, ...mapB]); // later keys overwrite earlier ones
console.log("Merged Map:", mergedMap);

//  Using Map to count frequency of elements
function countFrequency(arr) {
  const freqMap = new Map();
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  return freqMap;
}
console.log("Frequency Map:", countFrequency([1, 2, 2, 3, 3, 3, 4]));

//  Grouping items using Map
function groupByFirstLetter(names) {
  const map = new Map();
  for (let name of names) {
    const firstChar = name[0].toUpperCase();
    if (!map.has(firstChar)) map.set(firstChar, []);
    map.get(firstChar).push(name);
  }
  return map;
}
console.log("Grouped by first letter:", groupByFirstLetter(["Arya", "Ankit", "Sahil", "Sunny", "Piyush", "Pooja"]));

// Storing complex data as key
const user1 = { id: 101, name: "Rohan" };
const user2 = { id: 102, name: "Mayur" };
const userMap = new Map();
userMap.set(user1, { marks: 95, subject: "Math" });
userMap.set(user2, { marks: 88, subject: "Science" });
console.log("User Map with objects as keys:", userMap);







//  Extra Information about Map

/*
🔹 Map is an ordered collection of key-value pairs.
🔹 Any value (objects, arrays, functions, primitives) can be used as a key.
🔹 Maps are more efficient than objects for frequent add/delete operations.
🔹 Common Use-Cases:
    - Frequency counting
    - Grouping data
    - Caching (memoization)
    - Storing metadata for objects
🔹 Time Complexity:
    - set/get/has/delete → O(1) average
🔹 Map vs WeakMap:
    - WeakMap only allows object keys and doesn’t prevent garbage collection.
*/


