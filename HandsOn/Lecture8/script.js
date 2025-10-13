// handsOn.js
// 

// 1. Object.freeze() - makes object immutable (no add/update/delete)
const frozenObj = { name: "Aarya", age: 22 };
Object.freeze(frozenObj);
frozenObj.age = 30; //  won't change
console.log("Frozen object:", frozenObj);

// 2. Object.seal() - allows update but no add/delete
const sealedObj = { city: "Pune", country: "India" };
Object.seal(sealedObj);
sealedObj.city = "Mumbai"; // works
sealedObj.pin = 411057; //  won't add
console.log("Sealed object:", sealedObj);

// 3. Object.assign() - copy properties from one or more objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged1 = Object.assign({}, obj1, obj2);
console.log("Merged using Object.assign:", merged1);

// 4. Spread operator (...) with objects
const spreadMerged = { ...obj1, ...obj2, d: 4 };
console.log("Merged using spread:", spreadMerged);

// 5. Object.entries() - convert object to array of [key, value]
const entries = Object.entries(obj1);
console.log("Object.entries:", entries);

// 6. Object.hasOwn() - check if property exists
console.log("obj1 has property 'a':", Object.hasOwn(obj1, "a"));
console.log("obj1 has property 'z':", Object.hasOwn(obj1, "z"));

// 7. Destructuring objects
const person = { name: "Riya", age: 25, city: "Delhi" };
const { name, city } = person;
console.log("Destructured:", name, city);

// 8. Optional chaining (?.) - avoid errors if property missing
const user = { profile: { username: "coder123" } };
console.log("Username:", user.profile?.username); 
console.log("Phone:", user.profile?.contact?.phone); 

// 9. Object.create() - create new object with prototype
const protoObj = { greet: function () { console.log("Hello!"); } };
const newObj = Object.create(protoObj);
newObj.greet();

// 10. Example: Deep cloning using JSON
const original = { x: 10, y: { z: 20 } };
const deepClone = JSON.parse(JSON.stringify(original));
deepClone.y.z = 99;
console.log("Original after deep clone change:", original); 
console.log("Deep cloned object:", deepClone);
