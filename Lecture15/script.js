/* Write a recursive function to find the sum of first N natural numbers */


function naturalSum(N) {
  if (N <= 0) return 0;
  return N + naturalSum(N - 1);
}

console.log(naturalSum(5));
console.log(naturalSum(-5));
console.log(naturalSum(0));
console.log(naturalSum(10));


/* Recursive function to print the GCD of two numbers */


/* Iterative gcd */
function gcd(a, b) {
  while (a != 0) {
    let temp = a;
    a = b % a;
    b = temp;
  }

  return Math.abs(b);
}

/* Recursive GCD */
function rGcd(a, b) {
  
  if (a == 0) return b;
  //recursion call
  return Math.abs(rGcd(b % a, a)); 
}

rGcd(25, 15);

/* GCD of more than 2 numbers 




/* GCD of an Array */
let arr = [27, 12, 18, 24, 30];
let gcdArr = 0;

for (let i = 0; i < arr.length; i++) {
  gcdArr = rGcd(gcdArr, arr[i]);
}

/* H.W : Nth Fibonacci number using recursion */

/* Write a function to find  A raised to power B */
/* Ex: 2^10 = 1024 */

//TC - O(N)
function power(a, n) {
  let result = 1;
  while (n--) result *= a;

  return result;
}

console.log(power(2, 10));

function binaryExponentiation(a, n) {
  if(n == 0) return 1;
  if(n == 1) return a;
  let temp = binaryExponentiation(a, Math.floor(n / 2));
  return temp * temp * a ** (n % 2);
}

console.log(binaryExponentiation(2, 10));
console.log(binaryExponentiation(5, 15));

// function to print fibonaci series using recursion

console.log(fibonacci(10));
function fibonacci(n) {
  if (n === 0) return 0;   
  if (n === 1) return 1;   // base case
  return fibonacci(n - 1) + fibonacci(n - 2);
}


