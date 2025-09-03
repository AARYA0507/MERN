// handsOn.js
// Extra Nested Array Concepts (Not in script (3).js)

// 1. Flattening a nested array (1 level)
const nested1 = [1, [2, 3], [4, 5, [6]]];
console.log("Flat(1):", nested1.flat()); 
console.log("Flat(Infinity):", nested1.flat(Infinity)); // completely flatten

// 2. Recursive function to flatten nested array
function flattenArray(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) result = result.concat(flattenArray(el));
    else result.push(el);
  }
  return result;
}
console.log("Recursive Flatten:", flattenArray([1, [2, [3, 4], 5], 6]));

// 3. Find max and min in a nested array
function findMaxMin(arr) {
  const flatArr = arr.flat(Infinity);
  return { max: Math.max(...flatArr), min: Math.min(...flatArr) };
}
console.log("Max/Min:", findMaxMin([[1, 9], [3, 7, 5]]));

// 4. Transpose of a matrix
function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}
console.log("Transpose:", transpose([[1,2,3],[4,5,6]]));

// 5. Multiply two matrices
function multiplyMatrix(A, B) {
  let rowsA = A.length, colsA = A[0].length,
      rowsB = B.length, colsB = B[0].length;
  if (colsA !== rowsB) throw new Error("Incompatible matrices!");

  let result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return result;
}
console.log("Matrix Multiplication:", multiplyMatrix([[1,2],[3,4]], [[5,6],[7,8]]));

// 6. Sum of all elements using reduce()
function nestedSum(arr) {
  return arr.reduce((acc, row) => acc + row.reduce((a, b) => a + b, 0), 0);
}
console.log("Nested sum using reduce:", nestedSum([[1,2],[3,4,5]]));

// 7. Deep copy of nested arrays
const original = [[1,2],[3,4]];
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy[0][0] = 99;
console.log("Original:", original, "Deep Copy:", deepCopy);

// 8. Depth of nested array
function getDepth(arr) {
  if (!Array.isArray(arr)) return 0;
  return 1 + Math.max(0, ...arr.map(getDepth));
}
console.log("Depth of nested array:", getDepth([1,[2,[3,[4]]]]));




// Q1: Write a function to rotate a matrix by 90 degrees clockwise.
function rotate90(matrix) {
  return transpose(matrix).map(row => row.reverse());
}
console.log("Rotate 90:", rotate90([[1,2,3],[4,5,6],[7,8,9]]));

// Q2: Given a nested array, return the second largest element.
function secondLargest(arr) {
  const flatArr = arr.flat(Infinity).sort((a,b)=>b-a);
  return flatArr[1];
}
console.log("Second largest:", secondLargest([[1,9],[4,7,5]]));

// Q3: Spiral order traversal of a matrix.
function spiralOrder(matrix) {
  let res = [];
  while(matrix.length){
    res.push(...matrix.shift());
    matrix.map(row => res.push(row.pop()));
    matrix.reverse().map(row => row.reverse());
  }
  return res;
}
console.log("Spiral Order:", spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));

// Q4: Given a matrix, check if it is symmetric.
function isSymmetric(matrix) {
  let n = matrix.length;
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(matrix[i][j] !== matrix[j][i]) return false;
    }
  }
  return true;
}
console.log("Is Symmetric:", isSymmetric([[1,2,3],[2,5,6],[3,6,9]]));

// Q5: Find diagonal sums of a square matrix.
function diagonalSums(matrix) {
  let n = matrix.length, main=0, sec=0;
  for(let i=0;i<n;i++){
    main += matrix[i][i];
    sec += matrix[i][n-i-1];
  }
  return { main, sec };
}
console.log("Diagonal sums:", diagonalSums([[1,2,3],[4,5,6],[7,8,9]]));
