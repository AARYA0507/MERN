// handson.js
// Extra recursion concepts not in the given file

/* 1. Factorial using recursion */
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial(5):", factorial(5));

/* 2. Reverse a string using recursion */
function reverseString(str) {
  if (str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0];
}
console.log("Reverse('hello'):", reverseString("hello"));

/* 3. Palindrome check using recursion */
function isPalindrome(str, start = 0, end = str.length - 1) {
  if (start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);
}
console.log("Palindrome('madam'):", isPalindrome("madam"));
console.log("Palindrome('hello'):", isPalindrome("hello"));

/* 4. Sum of digits using recursion */
function sumOfDigits(n) {
  if (n == 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}
console.log("Sum of digits (12345):", sumOfDigits(12345));

/* 5. Recursive Binary Search */
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  else return binarySearch(arr, target, mid + 1, right);
}
console.log("Binary Search:", binarySearch([1,2,3,4,5,6,7], 5));
// function to check string are anagram or not
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }
  return true;
}
// print this pattern
/*
A
AB
BCD
CDEF
DEFGH
*/
/*
function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let str = " ";
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + i + j);
    }
    console.log(str);
  }
}

printPattern(5);
*/
// function to find length of longest subString with non -repeating characters
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let set = new Set();
  let ans = 0, i = 0, j = 0;

  while (j < n) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      ans = Math.max(ans,j-1,i+1);
      j++;
    } else {
      set.delete(s[i]);
      i++;
    }
  }
  return ans;
}