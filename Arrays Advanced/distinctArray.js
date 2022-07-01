function distinctArray(array) {
    let result = array.slice();
    
    for (let i = 0; i < result.length; i++) {
        let indexesToDelete = []
        for (let j = 0; j < result.length; j++) {
            if (i !== j) {
                if (result[i] === result[j]) {
                    indexesToDelete.push(j);
                }
            }
        }
        if (indexesToDelete.length > 0) {
            let counter = 0;
            for (let k = 0; k < indexesToDelete.length; k++) {
                result.splice((indexesToDelete[k] - counter), 1);
                counter++;
            }
        }
    }
    console.log(result.join(" "));
}
distinctArray([5, 1, 2, 3, 4, 5, 5]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);