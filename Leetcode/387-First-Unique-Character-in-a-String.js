// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// https://leetcode.com/problems/first-unique-character-in-a-string/#/description

var firstUniqChar = function(s) {
    if (s.length === 1) return 0;
    for (let i = 0; i < s.length; i++) {
        if (s.lastIndexOf(s[i]) === s.indexOf(s[i])) return i;
    }
    return -1;
};

// RUNTIME: ms
// PERCENTILE:
// COUNT: 011
