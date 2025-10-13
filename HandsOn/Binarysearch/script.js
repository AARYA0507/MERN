




/*  Find the last index of target in a sorted array */
function lastIndexOfTarget(arr, target) {
  let low = 0, high = arr.length - 1, index = -1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) {
      index = mid;
      low = mid + 1; // move right to find last occurrence
    } else if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }
  return index;
}
console.log("Last index of 6:", lastIndexOfTarget([1,3,6,6,6,11,11,12], 6));


/*  Upper Bound — first element greater than target */
function upperBound(arr, target) {
  let low = 0, high = arr.length - 1, index = arr.length;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > target) {
      index = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return index;
}
console.log("Upper Bound of 6:", upperBound([1,3,6,6,6,11,11,12], 6));


/*  Search in a Rotated Sorted Array */
function searchRotatedArray(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) return mid;

   
    if (arr[low] <= arr[mid]) {
      if (target >= arr[low] && target < arr[mid]) high = mid - 1;
      else low = mid + 1;
    }
   
    else {
      if (target > arr[mid] && target <= arr[high]) low = mid + 1;
      else high = mid - 1;
    }
  }
  return -1;
}
console.log("Search 6 in rotated array:", searchRotatedArray([6,7,8,9,1,2,3,4,5], 3));


/*  Find Peak Element (mountain array peak) */
function findPeak(arr) {
  let low = 0, high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[mid + 1]) low = mid + 1; 
    else high = mid;
  }
  return low; 
}
console.log("Peak Index:", findPeak([1,3,5,6,4,2]));


/*  Find integer square root using Binary Search */
function sqrtBinarySearch(num) {
  if (num < 2) return num;
  let low = 1, high = num, ans = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === num) return mid;
    else if (mid * mid < num) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }
  return ans;
}
console.log("Integer sqrt of 50:", sqrtBinarySearch(50));


/*  Search in a 2D matrix (sorted row-wise & col-wise) */
function searchMatrix(matrix, target) {
  let rows = matrix.length, cols = matrix[0].length;
  let low = 0, high = rows * cols - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let value = matrix[Math.floor(mid / cols)][mid % cols];

    if (value === target) return true;
    else if (value < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
}
const matrix = [
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17],
];
console.log("Search 9 in matrix:", searchMatrix(matrix, 9));


/*  Minimum in Rotated Sorted Array */
function findMinInRotated(arr) {
  let low = 0, high = arr.length - 1;
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[high]) low = mid + 1;
    else high = mid;
  }
  return arr[low];
}
console.log("Minimum in rotated array:", findMinInRotated([4,5,6,7,0,1,2]));



function aggressiveCows(stalls, cows) {
  stalls.sort((a,b)=>a-b);
  let low = 1;
  let high = stalls[stalls.length - 1] - stalls[0];
  let ans = 0;

  function canPlace(stalls, cows, dist) {
    let count = 1, last = stalls[0];
    for (let i=1;i<stalls.length;i++) {
      if (stalls[i] - last >= dist) {
        count++;
        last = stalls[i];
      }
      if (count >= cows) return true;
    }
    return false;
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canPlace(stalls, cows, mid)) {
      ans = mid;
      low = mid + 1;
    } else high = mid - 1;
  }
  return ans;
}
console.log("Max distance (Aggressive Cows):", aggressiveCows([1,2,4,8,9], 3));








