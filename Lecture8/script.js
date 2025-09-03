/* create variables to store name, age, class, address of student */
const name = "Araya";
const age = 56;
const address = "mumbai";
const standard = 18;

//creation of object
const studentObj = {
  name: "Araya",
  age: 56,
  address: "mumbai",
  standard: 18
};

/* create variables to store name, age, address of Parent */
const parentName = "rahul";
const parentAge = 41;
const parentAddress = "pune";

const parentObj = {
  name: "rahul",
  age: 41,
  address: "pune",
};

//Access properties in object
console.log("Student's name:", studentObj.name);
console.log("Student's name:", studentObj["name"]);
const studentNameProperty = "firstName";
console.log("Student's name:", studentObj[studentNameProperty]);

//Updating a value of an Object
studentObj.name = "Rahul";
console.log("Student's name:", studentObj.name);

//add any property to an object
parentObj.gender = "Female";
parentObj.standard = 12;

console.log(parentObj);

//delete any property from object
delete parentObj.standard;
console.log("parent obj", parentObj);

/* create a Person object with name, age and city properties. 
Update the city, add hobby property and print the age of the person  */
const personObj = {
  name: "rohit",
  age: 28,
  city: "Pune"
};

personObj.city = "mumbai";
personObj.hobby = "Driving cars";
console.log("Age of", personObj.name, "is", personObj["age"]);

if(personObj && personObj.address) //all properties on left of dot(.) must not be undefined
console.log(personObj.address.firstLine);

//nested objects
const employeeObj = {
  name: "sham",
  company: "Acciojob",
  salary: "16LPA",
  address: {
    addressLine1: "baner",
    addressLine2: "waholi",
    houseNumber: 56,
    city: "nagar"
  }
}
console.log({employeeObj});
console.log("City of", employeeObj.name, "is", employeeObj.address.city);

//Array of Objects
const studentObjArr = [
  studentObj, {
    name: "rakesh",
    age: 87,
    address: "raigad",
    standard: 10 
  }
];
console.log(studentObjArr);

const studentObj2 = {
    name: "rakesh",
    age: 87,
    address: "raigad",
    standard: 10 
  };
const studentObjArr2 = [studentObj, studentObj2];

for(let i in studentObj){
  console.log(i, ":", studentObj[i]);
}

console.log("Keys:", Object.keys(studentObj));

console.log("Using Object.keys() method to get the array of keys");
for(let i of Object.keys(studentObj)){
  console.log(i, ":", studentObj[i]);
}

console.log("Values:", Object.values(studentObj));

/* Task: Create a classroom array of 4 students.
Each student will have: name, age, gender, grade, and address (addressLine1, addressLine2, city, houseNo).

Q: Print the name, age, and house number of all students residing in Pune city. */


const classroom = [
  {
    name: "Aarav Sharma",
    age: 14,
    gender: "Male",
    grade: "8",
    address: {
      addressLine1: "123 MG Road",
      addressLine2: "Near City Mall",
      city: "Pune",
      houseNo: "H-101"
    }
  },
  {
    name: "Priya Mehta",
    age: 13,
    gender: "Female",
    grade: "7",
    address: {
      addressLine1: "56 Laxmi Nagar",
      addressLine2: "Behind Central Park",
      city: "Mumbai",
      houseNo: "B-204"
    }
  },
  {
    name: "Rohan Patil",
    age: 15,
    gender: "Male",
    grade: "9",
    address: {
      addressLine1: "78 Baner Road",
      addressLine2: "Near IT Park",
      city: "Pune",
      houseNo: "C-305"
    }
  },
  {
    name: "Ananya Desai",
    age: 12,
    gender: "Female",
    grade: "6",
    address: {
      addressLine1: "90 Koregaon Park",
      addressLine2: "Near River View",
      city: "Delhi",
      houseNo: "D-401"
    }
  },
];

console.log("Details of Students residing in Pune: ");
for(let i of classroom){
  //i represents student object
  if(i && i.address && i.address.city === "Pune"){
    console.log(i.name, i.age, i.address.houseNo);
  }
}

// functions inside objects
const carObj = {
  car: "Audi",
  color: "black",
  mileage: 10,
  currentSpeed: 20,
  running: function running() {
    console.log(" car is running!!");
  }
}

carObj.running();

// this keyword in objects
const carObj2 = {
  car: "Audi",
  color: "black",
  mileage: 10,
  currentSpeed: 20,
  running: function running() {
    console.log("The car is running!! Current speed is:", this.currentSpeed);
  },
  stopCar: function stopCar () {
    this.currentSpeed = 0;
  }
}

carObj2.running();
console.log("Current speed:", carObj2.currentSpeed);
console.log("Stopping the car!");
carObj2.stopCar();
console.log("Current speed:", carObj2.currentSpeed);

/* Question:

Create a JavaScript object called portfolio with the following properties and methods:
name → "Piyush"
skills → an array containing ["C++", "JavaScript", "MERN"]
showSkills() → a method that displays all the skills in one line, comma-separated.
addSkill(skillName) → a method that adds a new skill to the skills array. 
*/

const portfolio = {
  name: "Aarya",
  skills: ["Javascript", "HTML", "CSS", "React"],
  showSkills: function () {
    let allSkills = "";
    for(let skill of this.skills)
      allSkills += skill + ", ";
    console.log(allSkills);
  },
  addSkills: function(skill) {
    this.skills.push(skill);
  }
}

portfolio.showSkills();
portfolio.addSkills("React");
portfolio.showSkills();

/* NOTE
 - key-value pairs inside objects are often know as data members
 - functions inside objects are often known as methods
*/

/* 
- open your MERN folder in integrated terminal
- in terminal, 
  - git add .
  - git commit -m "[message about this lecture]"
  - git push origin master
*/