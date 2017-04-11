// Create a function taking a positive integer as its parameter and returning a
// string containing the Roman Numeral representation of that integer.


const romanNumeralEncoder = num => {
  let dict = {
    1: ['I', 'V'],
    10: ['X', 'L'],
    100: ['C', 'D'],
    1000: ['M']
    // 1: 'I',
    // 5: 'V',
    // 10: 'X',
    // 50: 'L',
    // 100: 'C',
    // 500: 'D',
    // 1000: 'M'
  }
  let roman = '';
  if (num % 10) {
    let res = '';
    let ones = num % 10;

    if (ones < 3) {
      while (ones) {
        res += 'I';
        ones--;
      }
    }

    roman = res + roman;
  }
  return roman;
}


// 1666 MDCLXVI
// 1000 M
//  600 DC
//   60 LX
//    6 VI
