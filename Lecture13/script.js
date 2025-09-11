
// find square root of a number in O(log n)
function sqrt(n) {
    if (n < 0) return NaN; 
    if (n === 0 || n === 1) return n;

    let low = 0;
    let high = n;
    let mid;

    while (low <= high) {
        mid = (low + high) / 2;
        if (mid * mid === n) return mid;
        if (mid * mid < n) low = mid + 1;
        else high = mid - 1;
    }

    return high; 
}
// function to find  index of target element in sorted array
function findTargetIndex(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; 
}
// function to find the first occurrence of a target element in a sorted array
function findFirstOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            result = mid;
            high = mid - 1; 
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
// function to find the last occurrence of a target element in a sorted array
function findLastOccurrence(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            result = mid;
            low = mid + 1; 
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
// function to find the index of a target element in a rotated sorted array
function findTargetInRotatedArray(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) return mid;

        
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= target && target < arr[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1; 
            }
        } else {
            
            if (arr[mid] < target && target <= arr[high]) {
                low = mid + 1;
            } else {
                high = mid - 1; 
            }
        }
    }
    return -1; // Target not found
}
// lower bound
function lowerBound(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            result = mid;
            high = mid - 1; 
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
// upper bound
function upperBound(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            result = mid;
            low = mid + 1; 
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}
 let map = new Map([
  ["name3", ["Sultan", "Sahil"]],
  ["name4", "Sunny"]
]); // map always maintains insertion order

map.set("name1", "Sultan");
map.set("name2", "Sunny");

//checking if a key is present or not
console.log("checking if `name1` is present or not?", map.has("name1"));

//getting the value of a specific key
console.log("Value of `name2` key: ", map.get("name2"));

//deleting a key in map
console.log("Deleting `name4`: ", map.delete("name44"));

//
for(let i of map){
  console.log("key: " + i[0], ", Value: " + i[1]);
}

console.log("Printing keys");
for(let i of map.keys()){
  console.log(i);
}

map.set("name1", "aarya");

const mapArr = [...map];
console.log("Map converted into Array", {mapArr});