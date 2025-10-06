/* Practice Question */
/* Cricket Team */
const cricketTeam = {
  teamName: "Indian Cricket Team",

  members: [{ id: 1, scores: [10, 34, 80] }],

  display: function () {
    console.log(`Team: ${this.teamName}`);
    this.members.forEach((player) => {
      console.log(`Player ${player.id} - Scores: [${player.scores.join(", ")}]`);
    });
  },

  addPlayers: function (id) {
    this.members.push({ id: id, scores: [] });
  },

  addScore: function (id, score) {
    const player = this.members.find((p) => p.id === id);
    if (player) player.scores.push(score);
  },

  averageScore: function (id) {
    const player = this.members.find((p) => p.id === id);
    if (!player || player.scores.length === 0) return 0;
    const total = player.scores.reduce((sum, s) => sum + s, 0);
    return (total / player.scores.length).toFixed(2);
  },

  teamAverage: function () {
    const allScores = this.members.flatMap((p) => p.scores);
    const total = allScores.reduce((sum, s) => sum + s, 0);
    return (total / allScores.length).toFixed(2);
  },
};

cricketTeam.addPlayers(2);
cricketTeam.addPlayers(3);

cricketTeam.addScore(1, 29);
cricketTeam.addScore(3, 80);
cricketTeam.addScore(2, 40);
cricketTeam.addScore(2, 100);
cricketTeam.addScore(2, 120);
cricketTeam.addScore(3, 20);

cricketTeam.display();
console.log("average score of player 1 - " + cricketTeam.averageScore(1));
console.log("average score of player 2 - " + cricketTeam.averageScore(2));
console.log("average score of team - " + cricketTeam.teamAverage());

/* Function declaration */
function sayHello() {
  console.log("Hello Students");
}

/* Arrow function example */
const arrow = (a, b) => {
  return a - b;
};
console.log(arrow(5, 2));

/* Arrow function to check if divisible by 3 */
const isDivisibleBy3 = (num) => !(num % 3);
console.log(isDivisibleBy3(19));
console.log(isDivisibleBy3(9));
console.log(isDivisibleBy3(18));

/* Arrow functions & 'this' */
const studentData = {
  fullName: "Virat Kohli",
  age: 36,
  result1: function (status) {
    console.log(this.fullName + " has " + status + " the exam");
    console.log(this);
  },
  result2: (status) => {
    console.log(this.fullName + " has " + status + " the exam");
    console.log(this);
  },
};

studentData.result1("passed");
studentData.result2("failed");

/* forEach() Example */
let numsArr = [2, 1, 6, 3, 9];

console.log(
  numsArr.forEach((value, index, array) => {
    value *= 2;
    array[index] = value;
    console.log(value, index, array);
  })
);
console.log({ numsArr });

let usersList = [
  { name: "Rohit", age: 30 },
  { name: "Hardik", age: 28 },
  { name: "Jasprit", age: 29 },
];

usersList.forEach((user) => {
  console.log(user.name + " " + user.age);
});

/* map() Example */
numsArr = [3, 2, 9, 0, 10];
let squaredArray = numsArr.map((value) => value * value);
console.log({ squaredArray });

usersList = [
  { name: "Rohit", age: 30 },
  { name: "Hardik", age: 28 },
  { name: "Jasprit", age: 29 },
];

let upperCaseUsers = usersList.map((user) => {
  return { name: user.name.toUpperCase(), age: user.age };
});
console.log({ upperCaseUsers });
console.log({ usersList });

/* filter() Example */
let numbers = [2, 12, 9, 18, 27];
const oddNumbers = numbers.filter((num) => num % 2);
console.log({ oddNumbers });

let playerNames = ["Virat", "Rohit", "MSD", "Shubman", "Hardik"];
// filter names with length >= 5
const longNames = playerNames.filter((name) => name.length >= 5);
console.log({ longNames });
