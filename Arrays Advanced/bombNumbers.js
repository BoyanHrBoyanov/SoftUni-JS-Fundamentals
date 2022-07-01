function bombNumbers(sequence, bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];

    while (sequence.indexOf(bombNumber) >= 0) {
        let baseIndex = sequence.indexOf(bombNumber);
        let startIndex = baseIndex - bombPower;
        let itemsToDelete = bombPower * 2 + 1;
        if (startIndex < 0) {
        startIndex = 0;
        itemsToDelete = baseIndex + 1 + bombPower;
        } else if (baseIndex + bombPower > sequence.length) {
            itemsToDelete = sequence.length - startIndex;
        }
        sequence.splice(startIndex, itemsToDelete);
    }
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], 
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], 
    [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], 
    [7, 1]  );
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
 [2, 1]);
bombNumbers([1, 2, 3, 4, 5, 6], [6, 3])