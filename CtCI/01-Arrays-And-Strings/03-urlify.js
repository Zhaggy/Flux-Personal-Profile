function urlify(str) {
  while (str[0] === ' ') {
    str = str.substr(1);
  }
  while (str[str.length-1] === ' ') {
    str = str.substr(0, str.length - 1);
  }
  return str.replace(/\s+/g, '%20');
}
