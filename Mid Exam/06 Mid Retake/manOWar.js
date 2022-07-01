function manOWar(array) {
    let pirateShipStatus = array.shift().split(">").map(Number);
    let warshipStatus = array.shift().split(">").map(Number);
    let maxHealthCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let commandline = array[i].split(" ");
        let command = commandline.shift();
        let damage;

        switch (command) {
            case "Fire": 
                let index = Number(commandline[0]);
                damage = Number(commandline[1]);
                if (index < 0 || index >= warshipStatus.length) {
                    continue;
                } else {
                    warshipStatus[index] -= damage;
                    if (warshipStatus[index] <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        return;
                    }
                }
                break;
            case "Defend": 
                let start = Number(commandline[0]);
                let end = Number(commandline[1]);
                damage = Number(commandline[2]);
                if (start >= 0 && start < pirateShipStatus.length) {
                    if (end >= 0 && end < pirateShipStatus.length) {
                        if (start <= end) {
                            for (let i = start; i <= end; i++) {
                                pirateShipStatus[i] -= damage;
                            }
                        }
                    }
                }
                for (let el of pirateShipStatus) {
                    if (el <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
                break;
            case "Repair": 
                let i = Number(commandline[0]);
                let health = Number(commandline[1]);
                if (i >= 0 && i < pirateShipStatus.length) {
                    pirateShipStatus[i] += health
                    if (pirateShipStatus[i] > maxHealthCapacity) {
                        pirateShipStatus[i] = maxHealthCapacity;
                    }
                }
                break;
            case "Status": 
                let counter = 0;
                for (let el of pirateShipStatus) {
                    if (el < maxHealthCapacity * 0.2) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`);
                break;
            case "Retire": 
                let sumPirate = 0;
                let sumWarship = 0;
                for (let el of pirateShipStatus) {
                    sumPirate += el;
                }
                for (let el of warshipStatus) {
                    sumWarship += el;
                }
                console.log(`Pirate ship status: ${sumPirate}`);
                console.log(`Warship status: ${sumWarship}`);
                break;
            }
    }    
}
// manOWar((["12>13>11>20>66",
// "12>22>33>44>55>32>18",
// "70",
// "Fire 2 11",
// "Fire 8 100",
// "Defend 3 6 11",
// "Defend 0 3 5",
// "Repair 1 33",
// "Status",
// "Retire"])
// );
manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);