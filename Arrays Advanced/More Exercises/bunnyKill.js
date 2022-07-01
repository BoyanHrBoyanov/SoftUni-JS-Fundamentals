function bunnyKill(matrix) {
    let newMatrix = [];
    let result = [];
    let arrayCoordinates = [];

    let countDamage = 0;
    let countKilled = 0;
    let currentDamage = 0;

    for (let el of matrix) {
        newMatrix.push(el.split(' '));
    }
    let coordinates = newMatrix.pop();
    let dimensions = [newMatrix.length, newMatrix[0].length];
    for (let i = 0; i < dimensions[0]; i++) {
        result.push(newMatrix[i].map(Number));
    }
    
    for (let i = 0; i < coordinates.length; i++) {
        arrayCoordinates.push(coordinates[i].split(",").map(Number));
    }
    
    for (let i = 0; i < arrayCoordinates.length; i++) { //bomb bunnies
        let x = arrayCoordinates[i][0]; //row
        let y = arrayCoordinates[i][1]; //column
        currentDamage = result[x][y];
        if (currentDamage > 0) {
        countDamage += currentDamage;
        countKilled++;
        result[x][y] = 0;
        for (let a = x-1; a <= x+1; a++) {
            for (let b = y-1; b <= y+1; b++) {
                if (a >= 0 && b >= 0 && a < result.length && b < result[0].length){
                    result[a][b] -= currentDamage;
                    if (result[a][b] < 0){
                        result[a][b] = 0;
                    }
                }
            }
        }
    }
    }
    for (let i = 0; i < result.length; i++) { // kill what is left
        for (let j = 0 ; j < result[0].length; j++) {
            if (result[i][j] > 0) {
                countKilled++;
            }
            countDamage += result[i][j];
        }
    }
    console.log(countDamage);
    console.log(countKilled);

}

bunnyKill(['5 10 15 20',

'10 10 10 10',

'10 15 10 10',

'10 10 10 10',

'2,2 0,1']);
bunnyKill(['10 10 10',

'10 10 10',

'10 10 10',

'0,0']);