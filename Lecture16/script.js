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



// Sample Input
/*
6
cat tea pet tac act eat
4
cat
tca
eee
tea  
*/
// Sample Output
/*
act cat tac
act cat tac
-1
eat tea
*/
let n = 5;
let arr = ["act", "cat", "dog", "god", "tac"];
let q = 2;
let queries = ["god", "act"];   
for (let i = 0; i < q; i++) {
  let query = queries[i];
  let result = [];
    for (let j = 0; j < n; j++) {
       if(arePanagrams(arr[j], query)){
        result.push(arr[j]);
       }
    }
    if(result.length ==0){
        console.log(-1)
    } else {
       result.sort();



    }   
}
// recursive function of string to check if it is palindrome or not
function isPalindrome(str, start = 0, end = str.length - 1) {
  if(start >= end) return true;
  if (str[start] !== str[end]) return false;
  return isPalindrome(str, start + 1, end - 1);

}

console.log(isPalindrome("madam"));