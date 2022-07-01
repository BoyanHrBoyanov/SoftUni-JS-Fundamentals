function memoryGame(input) {
    let sequence = input.shift().split(" ");
    let countMoves = 0;
    
    for (let i = 0; i < input.length; i++) {
        countMoves++;
        let currString = input[i];
        if (currString === "end" && sequence.length > 0) {
            console.log("Sorry you lose :(");
            console.log(sequence.join(" "));
            break;
        }
        let command = currString.split(" ");
        let index1 = Number(command[0]);
        let index2 = Number(command[1]);
        if (index1 === index2 || sequence[index1] === undefined || sequence[index2] === undefined) {
            let middleIndex = sequence.length / 2;
            sequence.splice(middleIndex, 0, `-${countMoves}a`);
            sequence.splice(middleIndex, 0, `-${countMoves}a`);

            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }
        if (sequence[index1] === sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence.splice(Math.max(index1, index2), 1);
            sequence.splice(Math.min(index1, index2), 1);

        } else {
            console.log("Try again!");
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${countMoves} turns!`);
            break;
        }
    }

}
//memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
//memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);