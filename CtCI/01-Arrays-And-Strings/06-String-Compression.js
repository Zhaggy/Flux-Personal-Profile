// Implement a method to perform basic string compression using the counts of
// repeated characters. For example, the string aabcccccaaa would become
// a2b1c5a3. If the "compressed" string would not become smaller than the
// original string, your method should return the original string. You can
// assume the string has only uppercase and lowercase letters (a - z).

const stringCompression = str => {
  let newStr = '';
  let curr, count;
  for ( let i = 0; i < str.length; i++ ) {
    if (!curr) {
      curr = str[i];
      count = 1;
    }
    if (str[i] === curr && str[i + 1] !== curr) {
      newStr += curr + count;
      curr = '', count = 0;
    } else {
      count++;
    }
  }
  return newStr;
}

console.log(stringCompression('aabcccccaaa'));
// a2b1c5a3
