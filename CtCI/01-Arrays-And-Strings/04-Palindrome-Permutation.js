function palPerm(str) {
  let single = 0;
  let obj = {};
  str.split('').forEach(c => {
    if ((/\w/).test(c)) {
      obj[c] = (obj[c] ? obj[c] + 1 : 1);
    }
  });
  console.log(obj);
  for (let key in obj) {
    if (obj[key]%2 === 1) {
      single++;
    }
    if (single > 1) return false;
  }
  return true;
}
