// Determine whether an integer is a palindrome.

var isPalindrome = function(x) {
    return (x.toString().split('').reverse().join('') === x.toString())
};

// RUNTIME: 496 ms
// COUNT: 008
