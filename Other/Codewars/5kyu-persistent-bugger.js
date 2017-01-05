// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you
// must multiply the digits in num until you reach a single digit.

const persistence = n => {
  let count = 0;
  while (n > 9) {
    count++;
    let newN = 1, x = 10;
    while (n/x >= 1 || (n%x - n%(x/10))/(x/10)) {
      newN *= (n%x - n%(x/10))/(x/10);
      x *= 10;
      if (newN === 0) return count;
    }
    n = newN;
  }
  return count;
}

console.log('39:', persistence(39));
console.log('12:', persistence(12));
console.log('4:', persistence(4));

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(n)
