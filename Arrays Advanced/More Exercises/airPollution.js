function airPollution(map, forces) {
    let mapNums = [];
    let forcesModified = [];
    let finalArray = [];
    for (let el of map) { //mapNums - map of numbers
        mapNums.push(el.split(" ").map(Number));
    }
    for (let el of forces) {
        forcesModified.push(el.split(" "));
    }
    for (let i = 0; i < forcesModified.length; i++) { // format forces
        forcesModified[i][1] = Number(forcesModified[i][1]);
    }
    for (let i = 0; i < forcesModified.length; i++) { // execute commands
        let command = forcesModified[i][0];
        let num = forcesModified[i][1];
        switch (command) {
            case "breeze":
                for (let x = 0; x < mapNums[0].length; x++) {
                    mapNums[num][x] -= 15;
                    if (mapNums[num][x] < 0) {
                        mapNums[num][x] = 0
                    }
                }    
            break;
            case "gale": 
                for (let x = 0; x < mapNums.length; x++) {
                    mapNums[x][num] -= 20;
                    if (mapNums[x][num] < 0) {
                        mapNums[x][num] = 0;
                    }
                }
            break;
            case "smog": 
                for (let a = 0; a < 5; a++) {
                    for (let b = 0; b < 5; b++) {
                        mapNums[a][b] += num;
                    }
                }
            break;
        }
    }
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (mapNums[i][j] >= 50) {
                finalArray.push(`[${i}-${j}]`);
            }
        }
    }
    if (finalArray.length > 0) {
    console.log(`Polluted areas: ${finalArray.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
}
airPollution(['5 7 2 14 4',

'21 14 2 5 3',

'3 16 7 42 12',

'2 20 8 39 14',

'7 34 1 10 24'],

['breeze 1', 'gale 2', 'smog 35']);