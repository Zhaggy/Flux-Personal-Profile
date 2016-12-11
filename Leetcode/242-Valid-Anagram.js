// Given two strings s and t, write a function to determine if t is an anagram of s.
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
// Note: You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let d = {};
    for (let i = 0; i < s.length; i++) {
        if (d[s[i]]) {
            d[s[i]]++;
        } else {
            d[s[i]] = 1;
        }
    }
    for (let j = 0; j < s.length; j++) {
        if (d[t[j]] > 1) d[t[j]]--;
        else if (d[t[j]] === 1) delete d[t[j]];
        else return false;
    }
    if (Object.keys(d).length) return false;
    return true;
};

// RUNTIME: 119 ms
// PERCENTILE: 60
// COUNT: 009
