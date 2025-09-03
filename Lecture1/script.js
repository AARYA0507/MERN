/* Lecture 1 */
console.log("Hello World");

/*
Function properties

- Naming rules are same as variable naming rules
- calling/invoking a function
- Function creation or Definition
- Parameters?
 */

/* Parameterized Functions */
function greetUser(userName) {
  console.log("Hello " + userName);
}

greetUser("aarya");
greetUser("rohit");

// Multiple parameters
function greetUser2(firstName, lastName) {
  console.log("Hello " + firstName, lastName);
}

greetUser2("aarya", "gundu");
greetUser2("rohit", "patil");

// TASK
/*OUTPUT: 
Hello aarya, Welcome to our Website 
Hello rohit, Welcome to our App 
Hello pratik, Welcome to our Office
 */

//CODE of above task
function welcomeUser(userName, place = "App") {
  console.log("Hello " + userName + " Welcome to our " + place);
}
welcomeUser("aarya", "Website");
welcomeUser("rohit", "App");
welcomeUser("pratik", "Office");
welcomeUser("Sargar"); // not passing the second argument

function sum(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
  //console.log("Hello"); <-- unreachable code
}

let sum34 = sum(3, 4);
console.log(sum34);

// nested functions
function personalDetails(name, birthYear) {
  console.log("Name: " + name);
  console.log("Age: ", calculateAge(birthYear));
}

function calculateAge(birthYear) {
  return 2025 - birthYear;
}

console.log(personalDetails("Jayesh", 2004));

// function to calculate sqaure of numbers
/* output
squared(20); // 400
squared(21); // 441
squared(5); // 25
*/

//parenthesis -> () -> function

console.log("Hello", 2 + 2); // will treat everything after comma as a single arguments
console.log("Hello " + 2 + 2); // will treat everything as a one argument

//==================== Arrays =====================
const students = ["aarya", "rohit", "raj", "raju", "payal", "harsh"];
//print 2nd student
console.log(students[1]);

//print roll number and name of 4th student
console.log(4, students[3]);

//print all students
/* console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]); */

//print all students using loops
for (let i = 0; i < 5; i++) {
  console.log(students[i]);
}

//print all students using loops, roll number wise
for (let i = 0; i < students.length; i++) {
  console.log(i + 1, students[i]);
}

//for .. in loop
console.log("for .. in loop");
for (let i in students) {
  // i -> datatype -> string
  console.log(Number(i) + 1, students[i]);
}
console.log(students["2"]);

//TASK - print all students with even roll numbers
console.log("Student with even roll numbers: ");
for (let i in students) {
  (Number(i) + 1) % 2 == 0 ? console.log(students[i]) : null;
}

//for ..of loop --> only gives values and not indices
for (let student of students) {
  console.log(student);
}

// declaration -> creating a new variable
// definition -> defining the variable or function

// read about primitive datatypes

// other types of array declarations
const arr1 = [1, 2, 4, 5, 6];
const arr2 = new Array(1, 2, 3, 4, 5);
arr1[2] = 10;
console.log(arr1);

const emptyArr1 = [];
const emptyArr2 = new Array();
console.log(emptyArr1, emptyArr2);

// homogenous property in array
const arr3 = [1, 2, 3, 4, 5, 6];

// heterogenous property of array
const arr4 = ["hello", 45, "world", 5.6, welcomeUser];
console.log(arr4);

// some functions of Arrays
const iplTeams = ["CSK", "MI", "RCB", "SRH"];

//add some elements
//1
console.log("PUSH: ", iplTeams.push("GT")); // insert at end
//2
iplTeams.unshift("KKR"); //insert at begining

//Remove some elements
//1
iplTeams.pop(); // deletes from end
//2
iplTeams.shift(); // deletes from begining

console.log("IPL teams: ", iplTeams);

//length
console.log("No. of IPL teams", iplTeams.length);
// print IPL teams
console.log("IPL teams: ", iplTeams);

//slice
// keeps all elements after first 2 elements
console.log("Sliced: ", iplTeams.slice(2));
// keeps 2 elements from end
console.log("Negative Sliced: ", iplTeams.slice(-2));

console.log("Real teams: ", iplTeams);