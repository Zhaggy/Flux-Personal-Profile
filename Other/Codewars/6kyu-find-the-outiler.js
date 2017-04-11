// You are given an array (which will have a length of at least 3, but could be
// very large) containing integers. The array is either entirely comprised of
// odd integers or entirely comprised of even integers except for a single
// integer N. Write a method that takes the array as an argument and returns N.

const findOutlier = arr => {
  let even = arr.filter(c => c%2 === 0);
  if (even.length > 1) {
    let odd = arr.filter(c => c%2);
    return odd[0];
  }
  return even[0];
}

console.log(findOutlier([1,3,5,2]));
// 2
