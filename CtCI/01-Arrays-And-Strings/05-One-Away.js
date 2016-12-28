// There are three types of edits that can be performed on strings: insert a
// character, remove a character, or replace a character. Given two strings,
// write a function to check if they are one edit (or zero edits) away.

const oneAway = (str1, str2) => {
  if (str1 === str2) return true;
  if (str1.length === str2.length) {
    let diffCount = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) diffCount++;
    }
    if (diffCount === 1) return true;
  }
  if (Math.abs(str1.length - str2.length) === 1) {
    let long = str1.length > str2.length ? str1 : str2;
    let short = str1.length < str2.length ? str1 : str2;

    for (let i = 0; i < long.length; i++) {
      if (long[i] !== short[i]) {
        short = short.substr(0, i) + long[i] + short.substr(i);
        return (short === long);
      }
    }
  }
  return false;
}

console.log(oneAway('ple', 'pale'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));
// true, true, true, false
