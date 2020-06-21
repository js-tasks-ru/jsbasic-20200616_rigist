/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  let result = 1;

  
    while ( n > 0) {
      result =  result * n;
      n = n - 1;
    }
  
  return result;
}
