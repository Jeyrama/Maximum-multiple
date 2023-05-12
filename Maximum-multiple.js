/*
Create a function that when given a divisor and a bound, 
it gives the largest multiple of that divisor and is within the bound.

Conditions:
  N is divisible by divisor
  N is less than or equal to bound
  N is greater than 0

Notes:
  The parameters (divisor, bound) passed to the function are only positive values.
  It's guaranteed that a divisor is found.

Example: 
  maxMultiple (2,7) ==> return (6)
  (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0.
*/


// Solution

function maxMultiple(divisor, bound) {
  return bound-bound%divisor
}

// or 

function maxMultiple(divisor, bound) {
  let max = 0;
  for (let j = divisor; j <= bound; j++) {
    if(j % divisor == 0 && j > max) {
      max = j;
    }
  }
  return max;
}