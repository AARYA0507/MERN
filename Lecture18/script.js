/* Given a parenthesis string consisting of only '(' & ')'
check if it's a valid parenthesis or not using recursion
A valid parenthesis string is one which has matching opening and closing brackets
E.g - "(()())" is valid, "())(" is not valid    
*/

// code
function isValidParenthesis(s, index = 0, count = 0) {
    if (index === s.length) {
        return count === 0;
    }
    if (count < 0) {
        return false;
    }
    if (s[index] === '(') {
        return isValidParenthesis(s, index + 1, count + 1);
    }
    else if (s[index] === ')') {
        return isValidParenthesis(s, index + 1, count - 1);
    }
    return isValidParenthesis(s, index + 1, count);
}


const s = "(()())";
console.log(isValidParenthesis(s)); 
// Generate all valid parenthesis of length N using recursion
function generateParenthesis(n, open = 0, close = 0, current = "", result = []) {
    if (current.length === n * 2) {
        result.push(current);
        return;
    }
    if (open < n) {
        generateParenthesis(n, open + 1, close, current + '(', result);
    }
    if (close < open) {
        generateParenthesis(n, open, close + 1, current + ')', result);
    }
    return result;
}
console.log(generateParenthesis(3));
/* Function to print all the permutations of a string */

function swapStr(str, i, j) {
  let arr = str.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];

  return arr.join("");
}

/* T.C -> ~O(N!) */
let strPermutations = [];
function permutations(str, ind = 0) {
  if (ind == str.length - 1) {
    strPermutations.push(str);
    return;
  }
  for (let i = ind; i < str.length; i++) {
   
    let swappedStr = swapStr(str, ind, i); 
    permutations(swappedStr, ind + 1);
  }
}

permutations("abc");
console.log({ strPermutations });

