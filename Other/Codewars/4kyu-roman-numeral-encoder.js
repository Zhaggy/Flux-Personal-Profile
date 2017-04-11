// Create a function taking a positive integer as its parameter and returning a
// string containing the Roman Numeral representation of that integer.


const romanNumeralEncoder = num => {
  let dict = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ]

  if (!num) return '';

  for ( let i = 0; i < dict.length; i++ ) {
    if (num >= dict[i][0]) {
      return dict[i][1] + romanNumeralEncoder(num - dict[i][0]);
    }
  }

  return roman;
}

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

console.log(romanNumeralEncoder(4));
