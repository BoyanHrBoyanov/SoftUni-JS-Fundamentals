function spiralMatrix(row, col) {
    let finalArray = [];
    let n = 1;
    let startRow = 0;
    let endRow = row - 1;
    let startCol = 0;
    let endCol = col - 1;

    for (let i = 0; i < col; i++) {
        finalArray.push([]);
    }

    while (startCol <= endCol && startRow <= endRow) {
        for (let i = startCol; i <= endCol; i++) {
            finalArray[startRow][i] = n;
            n++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            finalArray[i][endCol] = n;
            n++;
        }
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            finalArray[endRow][i] = n;
            n++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            finalArray[i][startCol] = n;
            n++;
        }
        startCol++;
    }
    finalArray.forEach(row => console.log(row.join(" ")));
}
spiralMatrix(5, 5);
