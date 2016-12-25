// Write a function that takes in a string of one or more words, and returns
// the same string, but with all five or more letter words reversed (Just like
// the name of this Kata). Strings passed in will consist of only letters and
// spaces. Spaces will be included only when more than one word is present.

const spinWords = str => {
  return str.split(' ').map((c, i, a) => {
    if (c.length >= 5) {
      return c.split('').reverse().join();
    }
    return c;
  }).join(' ');
}

console.log(spinWords('Stop Spinning my words'));


// let spinWords=s=>s.split(' ').map(c=>c.length>4?c.split('').reverse().join(''):c).join(' ');
