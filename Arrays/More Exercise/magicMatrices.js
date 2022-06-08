function magicMatrices(matrix) {
    let isMagic = false;
    let newArray = [];

    for (let row = 0; row < matrix.length; row++) {
        let sum = 0;
        for (let col = 0; col < matrix.length; col++) {
            sum += matrix[row][col];
        }
        newArray.push(sum);
    }
    if (newArray[0] === newArray[1] && newArray[0] === newArray[2] &&
            newArray[1] === newArray[2]) {
        isMagic = true;
    }
    console.log(isMagic);
}
    
magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
magicMatrices([[9, 5, 1], [2, 7, 6], [4, 3, 8]])
