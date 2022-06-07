function diagonalAttack(arr) {
    let newArray = [];
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i].split(" ")
        newArray.push(el);
    }

    for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
            let parameter = Number(newArray[i][j]);
            newArray[i][j] = parameter;
        }
    }
    for (let i = 0; i < newArray.length; i++) {
        sum1 += newArray[i][i];
        sum2 += newArray[i][newArray.length - i - 1];
    }

    if (sum1 === sum2) {
        let finalArray = Array.from(Array(newArray.length), () => {
            return new Array(newArray.length).fill(sum1);
        })
        for (let j = 0; j < finalArray.length; j++) {
            finalArray[j][j] = newArray[j][j];
            finalArray[j][finalArray.length - j - 1] = newArray[j][finalArray.length - j - 1];
        }
        finalArray.forEach(row => console.log(row.join(" ")));
    } else {
        newArray.forEach(row => console.log(row.join(" ")));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
diagonalAttack(['1 1 1', '1 1 1', '1 1 0'])