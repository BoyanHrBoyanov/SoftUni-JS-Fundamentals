function muOnline(data) {
    let input = data.split("|");
    let initialHealth = 100;
    let initialBitcoins = 0;
    let roomCount = 0;
    
    for (let i = 0; i < input.length; i++) {
        let commandLine = input[i].split(" ");
        let command = commandLine[0];
        let num = Number(commandLine[1]);
        roomCount++;
        switch (command) {
            case "potion": 
                initialHealth += num;
                let currentHeal = num;
                if (initialHealth > 100) {
                    currentHeal = currentHeal - initialHealth + 100;
                    initialHealth = 100;
                }
                console.log(`You healed for ${currentHeal} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
                break;
            case "chest": 
                initialBitcoins += num;
                console.log(`You found ${num} bitcoins.`);
                break;
            default: 
                initialHealth -= num;
                if (initialHealth > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
                break;
        }
    }
    console.log("You've made it!");
    console.log(`Bitcoins: ${initialBitcoins}`);
    console.log(`Health: ${initialHealth}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");