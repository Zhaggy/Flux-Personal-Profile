var reverseString = function(s) {
    let str = '';
    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i];
    }
    return str;
    //return s.split('').reverse().join('');
};

// RUNTIME: 138 ms
// PERCENTILE: 76
// COUNT: 004
