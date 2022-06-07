function dungeonestDark(array) {
    let initial = array[0];
    let newArray = [];
    let currentElement = "";

    let currentHeal = 0;
    let initialHealth = 100;
    let coins = 0;
    let monsterName = "";
    let roomCounter = 0;
    let isDead = false;

    for (let i = 0; i < initial.length; i++) {
        if (initial[i] !== "|") {
            currentElement += initial[i];
        } else {
            newArray.push(currentElement);
            currentElement = "";
        }
    }
    newArray.push(currentElement);
    
    let itemOrMonster = "";
    let stringNumber = "";
    let finalArray = [];
    
    for (let j = 0; j < newArray.length; j++) {
        let currentElement = newArray[j];
        for (let k = 0; k < currentElement.length; k++) {
            if (currentElement[k] !== " ") {
                itemOrMonster += currentElement[k];
            } else {
                for (let p = k + 1; p < currentElement.length; p++) {
                    stringNumber += currentElement[p];
                }
                break;
            }
        }
        finalArray.push(itemOrMonster);
        finalArray.push(stringNumber);
        itemOrMonster = "";
        stringNumber = "";
    }
    for (let i = 0; i < finalArray.length; i++) {
        if (i % 2 === 0) {
            switch (finalArray[i]) {
                case "potion": 
                    roomCounter++;
                    i++;
                    let n = Number(finalArray[i]);
                    initialHealth += n;
                    if (initialHealth > 100) {
                        let diff = initialHealth - 100;
                        initialHealth = 100;
                        currentHeal = n - diff;
                    } else {
                        currentHeal = n;
                    }
                console.log(`You healed for ${currentHeal} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
                    break;
                case "chest":
                    roomCounter++;
                    i++;
                    let c = Number(finalArray[i]);
                    coins += c;
                    console.log(`You found ${c} coins.`);
                    break;
                default :
                roomCounter++;
                monsterName = finalArray[i];
                i++;
                let a = Number(finalArray[i]);
                initialHealth -= a;
                    if (initialHealth > 0) {
                        console.log(`You slayed ${monsterName}.`);
                    } else {
                        isDead = true;
                        console.log(`You died! Killed by ${monsterName}.`);
                        console.log(`Best room: ${roomCounter}`);
                    }
                    break;
            }
        }
        if (isDead) {
            break;
        }
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${initialHealth}`);
    }
}
//dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);