// You are going to be given an array of integers. Your job is to take that
// array and find an index N where the sum of the integers to the left of N
// is equal to the sum of the integers to the right of N. If there is no index
// that would make this happen, return -1

const findEvenIndex = arr => {
  if (!arr.length) return -1;
  let  right = 0, left = arr.reduce((sum, n) => sum + n) - arr[0];
  for (let i = 1; i < arr.length; i++) {
    right += arr[i - 1];
    left -= arr[i];
    if (right === left) return i;
  }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
// 3
console.log(findEvenIndex([1,100,50,-51,1,1]));
// 1
console.log(findEvenIndex([1,2,3,4,5,6]));
// -1
