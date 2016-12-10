var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    else if (strs.length === 1) return strs[0];
    else {
        let p = '';
        for (let i = 0; i < strs[0].length; i++) {
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] !== strs[0][i]) return p;
                else if (j === strs.length - 1) p += strs[0][i];
            }
        }
        return p;
    }
};

// RUNTIME: 102 ms
// PERCENTILE: 67
// COUNT: 006

/*
var longestCommonPrefix = function(strs) {
    if (!strs.length) return '';
    else if (strs.length === 1) return strs[0];
    else {
        let ar
        let lengths = strs.map(c => c.length);
        let min = Math.min(...lengths)
        for (let i = 0; i < min; i++) {

        }
    }
};
*/
