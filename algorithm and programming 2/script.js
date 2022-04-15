var mat = [[1, -3, 4, 0, 9],
        [0, -9, 7, 10, 11],
        [2, 5, 8, -11, 45],
        [7, 4, 12, -6, -5]];

// intialise min max with the first index of col
var min = 0, max = 0;
// find the min and the max
for (var i = 1; i < mat[0].length; i++){
    if (sum(mat, i) > sum(mat, max))
        max = i;
    else if (sum(mat, i) < sum(mat, min))
        min = i;
}
// do permutation between min sum and max sum col
console.log(mat);
permutation(mat, min, max);
console.log(mat);

function sum(mat, col) {
    var s = 0;
    for (var i = 0; i < mat.length; i++) 
        s += mat[i][col];
    return s;
}

function permutation(mat, col1, col2) {
    for (var i = 0; i < mat.length; i++){
        var c = mat[i][col1];
        mat[i][col1] = mat[i][col2];
        mat[i][col2] = c;
    }
    return mat;
}
