var singleNumber = function(nums) {
    let d = {};
    nums.forEach(c => {
        if (d[c]) delete d[c];
        else d[c] = 1;
    })
    for (key in d) return +key;
};

// RUNTIME: 129 ms
// COUNT: 005
