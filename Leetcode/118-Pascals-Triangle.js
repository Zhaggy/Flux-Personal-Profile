// Given numRows, generate the first numRows of Pascal's triangle.
// https://leetcode.com/problems/pascals-triangle/#/description

var generate = function(numRows) {
    let res = [[1]];
    if (numRows === 0) return [];
    else if (numRows === 1) return res;
    else {
        for (let i = 1; i < numRows; i++) {
            let curr = [1];
            for (let j = 1; j <= i; j++) {
                curr.push(j !== i ? res[i - 1][j - 1] + res[i - 1][j] : 1);
            }
            res.push(curr);
        }
    }
    return res;
};

// RUNTIME: 82 ms
// PERCENTILE: 98
// COUNT: 010
