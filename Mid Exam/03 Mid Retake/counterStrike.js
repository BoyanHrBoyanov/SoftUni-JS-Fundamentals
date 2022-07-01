function counterStrike(array) {
    let initialEnergy = Number(array[0]);
    let countWonBattles = 0;

    for (let i = 1; i < array.length; i++) {
        let command = array[i];
        if (command === "End of battle") {
            console.log(`Won battles: ${countWonBattles}. Energy left: ${initialEnergy}`);
            break;
        }
        let distance = Number(command);
        if (initialEnergy >= distance) {
            countWonBattles++;
            if (countWonBattles % 3 === 0) {
                initialEnergy += countWonBattles;
            }
            initialEnergy -= distance;

        } else {
            console.log(`Not enough energy! Game ends with ${countWonBattles} won battles and ${initialEnergy} energy`);
            break;
        }
    }
}
//counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);