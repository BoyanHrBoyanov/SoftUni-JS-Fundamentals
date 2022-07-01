function gladiatorInventory(input) {
    let result = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let currentCommand = command[0];
        let equipment = command[1];

        switch (currentCommand) {
            case "Buy": 
                if (!result.includes(equipment)) {
                    result.push(equipment);
                }
            break;
            case "Trash":
                if (result.includes(equipment)) {
                    result.splice(result.indexOf(equipment), 1);
                }    
            break;
            case "Repair":
                if (result.includes(equipment)) {
                    result.splice(result.indexOf(equipment), 1)
                    result.push(equipment);
                }
            break;
            case "Upgrade": 
                let upgradeArray = equipment.split("-");
                let equipmentToUpgrade = upgradeArray[0];
                let upgrade = upgradeArray[1];
                if (result.includes(equipmentToUpgrade)) {
                    result.splice(result.indexOf(equipmentToUpgrade) + 1, 0, `${equipmentToUpgrade}:${upgrade}`);
                }
            break;

        }
    }
    console.log(result.join(" "));
}
gladiatorInventory(['SWORD Shield Spear',
                    'Buy Bag',
                    'Trash Shield',
                    'Repair Spear',
                    'Upgrade SWORD-Steel']);
gladiatorInventory(['SWORD Shield Spear',
                    'Trash Bow',
                    'Repair Shield',
                    'Upgrade Helmet-V']);