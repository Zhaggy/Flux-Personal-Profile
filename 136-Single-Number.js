var singleNumber = function(nums) {
    let d = {};
    nums.forEach(c => {
        if (d[c]) delete d[c];
        else d[c] = 1;
    })
    for (key in d) return +key;
};

console.log(singleNumber([1,2,3,3,1,2,5]))

// RUNTIME: 129 ms
// COUNT: 005
