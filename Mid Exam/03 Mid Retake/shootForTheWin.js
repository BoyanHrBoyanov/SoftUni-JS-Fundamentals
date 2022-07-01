function shootForTheWin(input) {
    let targetSequence = input.shift().split(" ").map(Number);
    let counter = 0;
    
    for (let i = 0; i < input.length; i++) {
        let index = input[i];
        if (index === "End") {
            console.log(`Shot targets: ${counter} -> ${targetSequence.join(" ")}`);
            return;
        }
        index = Number(index);
        if (index < 0 || index >= targetSequence.length) {
            continue;
        } else if (targetSequence[index] === -1) {
            continue;
        } else {
            counter++;
            for (let j = 0; j < targetSequence.length; j++) {
                if (targetSequence[j] === -1) {
                    continue;
                } else if (j !== index) {
                    if (targetSequence[j] > targetSequence[index]) {
                        targetSequence[j] -= targetSequence[index];
                    } else {
                        targetSequence[j] += targetSequence[index];
                    }
                }
            }
            targetSequence[index] = -1;
        }

    }    
}
shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"]);
shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"]);