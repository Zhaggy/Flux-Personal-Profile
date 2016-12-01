var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        let ind = nums.slice(i+1).indexOf(target - nums[i]);
        if (ind !== -1) return [i, ind + 1 + i];
    }
};

/*
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};
*/
