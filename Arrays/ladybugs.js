function ladybugs(arr) {
    let fieldSize = arr[0];
    let initialPositions = arr[1].split(" ").map(Number);

    let zero = 0;
    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        field.push(zero);
    }

    for (let i = 0; i < initialPositions.length; i++) {
        let currentPosition = initialPositions[i];
        if (currentPosition >= field.length || currentPosition < 0) {
            continue;
        }
        field[currentPosition] = 1;
    }

    for (let j = 2; j < arr.length; j++) {
        let currentMoveArray = arr[j].split(" ");
        let moveFrom = Number(currentMoveArray[0]);
        let moveDirection = currentMoveArray[1];
        let step = Number(currentMoveArray[2]);
        
        if (moveFrom >= field.length || moveFrom < 0) {
            continue;
        }
        if (field[moveFrom] === 0) {
            continue;
        }
        
        let movingPosition = moveFrom;
        field[moveFrom] = 0;
        switch (moveDirection) {
            case "right":
                for (let i = 0; i < field.length; i++) {
                    movingPosition += step;
                    if (movingPosition > field.length - 1) {
                        break;
                    }
                    if (field[movingPosition] === 1) {
                        continue;
                    } else {
                        field[movingPosition] = 1;
                        break;
                    }
                }
                break;

            case "left":
                for (let p = 0; p < field.length; p++) {
                    movingPosition -= step;
                    if (movingPosition < 0) {
                        break;
                    }
                    if (field[movingPosition] === 1) {
                        continue;
                    } else {
                        field[movingPosition] = 1;
                        break;
                    }
                }
                break;

        }
    }
    
    console.log(field.join(" "));
}
ladybugs([ 3, '0 2 6', '2 right -1']);
//ladybugs([ 15, '0 1 2 8 11', '0 right 1', '1 left 1', '2 right 1', '11 left 3']);
//ladybugs([5, '3', '3 left 2', '1 left -2']);