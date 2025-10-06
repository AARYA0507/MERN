
//  Selection Sort

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log("Selection Sort:", selectionSort([5, 3, 8, 1, 2]));


//  Quick Sort (Full Implementation)

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[arr.length - 1];
  let left = arr.filter(x => x < pivot);
  let equal = arr.filter(x => x === pivot);
  let right = arr.filter(x => x > pivot);
  return [...quickSort(left), ...equal, ...quickSort(right)];
}
console.log("Quick Sort:", quickSort([7, 2, 9, 1, 6, 3]));


//  Heap Sort

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
console.log("Heap Sort:", heapSort([9, 5, 1, 4, 3, 8]));


//  Counting Sort (for non-negative integers)

function countingSort(arr) {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);

  for (let num of arr) count[num]++;

  let sorted = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i]--) sorted.push(i);
  }
  return sorted;
}
console.log("Counting Sort:", countingSort([4, 2, 2, 8, 3, 3, 1]));




//  Sort array of objects by multiple keys

const students = [
  { name: "Aarya", marks: 85, age: 20 },
  { name: "Riya", marks: 92, age: 22 },
  { name: "Sahil", marks: 85, age: 19 },
];
students.sort((a, b) => {
  if (a.marks === b.marks) return a.age - b.age;
  return b.marks - a.marks;
});
console.log("Sorted by marks, then age:", students);


//  Sort each row of a 2D matrix

let matrix = [
  [9, 2, 5],
  [1, 3, 2],
  [8, 7, 4]
];
for (let row of matrix) row.sort((a, b) => a - b);
console.log("Row-wise Sorted Matrix:", matrix);



