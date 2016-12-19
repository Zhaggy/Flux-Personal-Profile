function isUnique(str) {
  while (str.length) {
    let curr = str[0];
    str = str.substr(1);
    if (str.indexOf(curr) !== -1) return false;
  }
  return true;
}

function isUniqueWithDataStructure(str) {
  let d = {};
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (d[curr]) return false;
    d[curr] = 1;
  }
  return true;
}
