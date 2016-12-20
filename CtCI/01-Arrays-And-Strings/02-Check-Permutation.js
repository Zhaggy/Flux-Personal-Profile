function checkPermutation(str1, str2) {
  str1 = str1.split('').sort();
  return str2.split('').sort().every((c, i) => {
    if (c === str1[i]) return true;
    return false;
  });
}
