// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you
// must multiply the digits in num until you reach a single digit.


const persistence = n => {
  let count = 0;
  while (n > 9) {
    count++;
    let newN = 1, x = 10;
    while ((n%x - n%(x/10))/(x/10)) {
      newN *= (n%x - n%(x/10))/(x/10);
      x *= 10;
    }
    n = newN;
  }
  return count;
}

console.log('999:', persistence(999));
console.log('39:', persistence(39));
console.log('12:', persistence(12));
console.log('4:', persistence(4));

/*const persistence = n => {
  let count = 0;
  while (n > 9) {
    count++;
    let newN = n%10;
    if (n%100) newN *= (n%100 - n%10)/10;
    if ((n%1000 - n%100)/100) newN *= (n%1000 - n%100)/100;
    n = newN;

  }
  return count;
}
*/

/*
// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you
// must multiply the digits in num until you reach a single digit.


const persistence = n => {
  // let n = num;
  if (n < 10) return n;
  let newN;
  let count = 0;
  while (n > 9) {
    count++;
    newN = n%10;
    if (n%100) newN *= (n%100 - n%10)/10;
    if (n%1000) newN *= (n%1000 - n%100)/100;
    console.log(newN);
    n = newN;


  }
  return count;
}

console.log('999:', persistence(999));
console.log('39:', persistence(39));
console.log('12:', persistence(12));
*/
