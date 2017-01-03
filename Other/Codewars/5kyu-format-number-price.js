// Numbers should use the standard comma for every 3 numbers and dot to separate
// the cents, cents need to be truncated to 2 decimals, in the case that the
// decimal part of the number is 1 character long or none you should add 0's so
// that the result will always have 2 decimal characters, the function will also
// evaluate negative numbers.
//function should return a string 'NaN' if the input is not a valid number


const numberToPrice = num => {
  if (isNaN(num) || !num) return 'NaN';

  let numStr = num.toString();
  let ind = numStr.indexOf('.')
  ind = ind != -1 ? ind : numStr.length;
  preD = numStr.substr(0, ind);
  postD = numStr.substr(ind);

  if (postD.length > 2) postD = postD.substr(0, 3);
  if (postD.length < 3) {
    if (postD.length === 0) postD = '.00';
    while (postD.length <= 2) postD += '0';
  }

  let newPreD = '';
  for (let i = preD.length - 1, count = 1; i >= 0; i--, count++) {
    newPreD = preD[i] + newPreD;
    if (count === 3 && i !== 0 && preD[i - 1] !== '-') {
      newPreD = ',' + newPreD;
      count = 0;
    }
  }

  return newPreD + postD;
}


console.log(numberToPrice(1000000.5));
console.log(numberToPrice(1234.1));
console.log(numberToPrice('hi'));
