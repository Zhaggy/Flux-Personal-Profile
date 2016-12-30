// Given an image represented by an NxN matrix, where each pixel in the image
// is 4 bytes, write a method to rotate the image by 90 degrees. (an you do
// this in place?

const rotateMatrix = x => {
  // solve

return x;
}

console.log(rotateMatrix([ [ 'a', 'b', 'c', 'd' ],
  [ 'e', 'f', 'g', 'h' ],
  [ 'i', 'j', 'k', 'l' ],
  [ 'm', 'n', 'o', 'p' ] ]))

/*
    0  1  2  3
[ [ 'a', b, c, d ],   0
  [ e, f, g, h ],   1
  [ i, j, k, l ],   2
  [ m, n, o, p ] ]  3

  [ [ m, i, e, a ],
    [ n, j, f, b ],
    [ o, k, g, c ],
    [ p, l, h, d ] ]


    let ans = [];
    let placehold = x[0].slice();

    x[0][0] = x[3][0];
    x[0][1] = x[2][0];
    x[0][2] = x[1][0];
    x[0][3] = x[0][0];

    x[1][0] = x[3][1];
    x[2][0] = x[3][2];
    x[3][0] = x[3][3];

    x[3][0] = x[3][3];
    x[3][1] = x[2][3];
    x[3][2] = x[1][3];

    x[0][3] = placehold[0];
    x[1][3] = placehold[1];
    x[2][3] = placehold[2];
    x[3][3] = placehold[3];
*/
