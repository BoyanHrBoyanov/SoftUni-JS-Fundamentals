function equalNeighbors(matrix) {
    let dimensions = [matrix.length, matrix[0].length];
    let counter = 0;
    for (let i = 0; i < dimensions[0]; i++) {
        for (let j = 0; j < dimensions[1]; j++) {
            if (i < dimensions[0] - 1 && j < dimensions[1] - 1){
                if (matrix[i][j] === matrix[i][j+1]) {
                    counter++;
                    }
                if (matrix[i][j] === matrix[i+1][j]) {
                counter++;
                }
            } else if (i === dimensions[0] - 1) {
                if (matrix[i][j] === matrix[i][j+1]) {
                    counter++;
                }
            } else if (j === dimensions[1] -1) {
                if (matrix[i][j] === matrix[i+1][j]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]);
equalNeighbors([['test', 'yo', 'yo', 'ho'], ['well', 'done', 'no', '6'], ['not', 'done', 'yet', '5']]);
equalNeighbors([[2, 2, 5, 7, 4],
                [4, 0, 5, 3, 4],
                [2, 5, 5, 4, 2]]);
equalNeighbors([[1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]]);