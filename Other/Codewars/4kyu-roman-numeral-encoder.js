// Create a function taking a positive integer as its parameter and returning a
// string containing the Roman Numeral representation of that integer.


const romanNumeralEncoder = num => {
  let dict = {
    1000: 'M', 900: 'CM', 500: 'D', 400: 'CD',
    100: 'C', 90: 'XC', 50: 'L', 40: 'XL',
    10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'
  }

  if (!num) return '';

  for ( let key in dict ) {
    if (num >= key) {
      return dict[key] + romanNumeralEncoder(num - key);
    }
  }

  return roman;
}

console.log(romanNumeralEncoder(2));
// 1666 MDCLXVI
// 1000 M
//  600 DC
//   60 LX
//    6 VI
