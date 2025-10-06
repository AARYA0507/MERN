
/* Compute time complexity of this function */
function recursion(n) {
  if (n == 0) return;
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);
  recursion(n / 4);

  for (let i = 0; i < n; i++) {
    console.log(i * i);
  }
}

/*
function printPattern(N) {
  for (let i = 0; i < N; i++) {
    let line = "";
    // starting character code for each row
    let startCharCode = 65 + i; // 65 is 'A'
    for (let j = 0; j <= i; j++) {
      line += String.fromCharCode(startCharCode + j);
    }
    console.log(line);
  }
}

// Example:
printPattern(5);
*/



/*
2. N = 4
    *
   * *
  *   *
 *     *
  *   *
   * *
    * 
    */
function printHollowDiamond(N) {
  
  for (let i = 1; i <= N; i++) {
    let row = "";

    
    for (let j = i; j < N; j++) {
      row += " ";
    }

    
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }

 
  for (let i = N - 1; i >= 1; i--) {
    let row = "";

    
    for (let j = N; j > i; j--) {
      row += " ";
    }

   
    for (let j = 1; j <= 2 * i - 1; j++) {
      if (j === 1 || j === 2 * i - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }

    console.log(row);
  }
}


printHollowDiamond(4);


/* Question on Map & Set
Function to find length of longest substring with non-repeating characters
input: "abbcda"
output: 4 (string is bcda)
function lengthOfLongestSubstring(s) {
    const n = s.length;
    let maxLength = 0;
    let charSet = new Set();
    let left = 0;
    let right = 0;
    while (right < n) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        } else {
            charSet.delete(s[left]);
            left++;
        }   
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("abbcda"));
*/