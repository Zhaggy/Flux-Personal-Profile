function getMissingNumbers(nums) {
    return Array.from(Array(10).keys()).filter(n => nums.indexOf(n) === -1);
}
