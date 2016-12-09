var containsDuplicate = function(nums) {
    let d = {};
    for (let i = 0; i < nums.length; i++) {
        if (d[nums[i]]) return true;
        else d[nums[i]] = 1;
    }
    return false;
}

// RUNTIME: 176 ms
// COUNT: 007

/*
var containsDuplicate = function(nums) {
    let d = {};
    return nums.some(c => {
        if (d[c]) return true;
        else {
            d[c] = 1;
            return false;
        }
    });
};
*/
